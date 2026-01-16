import React, { useState, useEffect } from 'react';
import { CartItem, OrderStatus } from '../../types';
import QRCode from 'qrcode';
import { calculateShippingFee } from '../utils/cartUtils';
import { supabase } from '../integrations/supabase/client';
import OrderStatusTracker from './OrderStatusTracker';

interface PaymentScreenProps {
  orderItems: CartItem[];
  pixDetails: {
    qrCodeBase64: string;
    pixCopyPaste: string;
  };
  onClose: () => void;
  orderId: string;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ orderItems, pixDetails, onClose, orderId }) => {
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(OrderStatus.PENDING_PAYMENT);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = calculateShippingFee(orderItems);
  const total = subtotal + shippingFee;

  useEffect(() => {
    console.log(`[PaymentScreen] Configurando a inscrição para o orderId: ${orderId}`);
    const channel = supabase
      .channel(`order-status:${orderId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'orders', filter: `id=eq.${orderId}` },
        (payload) => {
          console.log('[PaymentScreen] Atualização em tempo real recebida!', payload);
          if (payload.new && payload.new.status) {
            console.log(`[PaymentScreen] Atualizando status para: ${payload.new.status}`);
            setOrderStatus(payload.new.status as OrderStatus);
          } else {
            console.warn('[PaymentScreen] Recebido payload de atualização sem novo status.', payload);
          }
        }
      )
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log(`[PaymentScreen] Inscrito com sucesso no canal: order-status:${orderId}`);
        }
        if (status === 'CHANNEL_ERROR') {
          console.error(`[PaymentScreen] Erro de inscrição no canal order-status:${orderId}`, err);
        }
        if (status === 'TIMED_OUT') {
          console.warn(`[PaymentScreen] Tempo de inscrição esgotado para o canal order-status:${orderId}`);
        }
        if (status === 'CLOSED') {
          console.log(`[PaymentScreen] Inscrição fechada para o canal order-status:${orderId}`);
        }
      });

    return () => {
      console.log(`[PaymentScreen] Limpando a inscrição para o orderId: ${orderId}`);
      supabase.removeChannel(channel);
    };
  }, [orderId]);

  useEffect(() => {
    if (pixDetails.qrCodeBase64) {
      setQrCodeUrl(`data:image/png;base64,${pixDetails.qrCodeBase64}`);
      return;
    }
    if (pixDetails.pixCopyPaste) {
      QRCode.toDataURL(pixDetails.pixCopyPaste, { errorCorrectionLevel: 'H', margin: 2, width: 192 })
        .then(url => setQrCodeUrl(url))
        .catch(err => console.error('Falha ao gerar QR Code:', err));
    }
  }, [pixDetails.qrCodeBase64, pixDetails.pixCopyPaste]);

  const handleCopy = () => {
    if (pixDetails.pixCopyPaste) {
      navigator.clipboard.writeText(pixDetails.pixCopyPaste).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 max-w-sm w-full my-8 border border-white/10 shadow-2xl shadow-chama-orange/10">
        {orderStatus === OrderStatus.PENDING_PAYMENT ? (
          <>
            <div className="text-center mb-6">
              <div className="text-chama-orange text-3xl mb-3">
                <i className="fa-solid fa-clock animate-spin"></i>
              </div>
              <h2 className="brand-font text-2xl font-bold uppercase mb-1">Aguardando Pagamento</h2>
              <p className="text-gray-400 text-sm">Pague com PIX para confirmar seu pedido.</p>
            </div>

            <div className="bg-black/20 rounded-lg p-4 mb-6 max-h-56 overflow-y-auto">
              <h3 className="font-bold text-gray-300 mb-3 text-xs uppercase tracking-wider">Resumo do Pedido</h3>
              <div className="space-y-2">
                {orderItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{item.quantity}x {item.name}</span>
                    <span className="font-semibold text-white">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 mt-3 pt-3 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="font-semibold text-white">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Taxa de Entrega</span>
                  <span className="font-semibold text-white">{shippingFee > 0 ? `R$ ${shippingFee.toFixed(2)}` : 'Grátis'}</span>
                </div>
                <div className="flex justify-between items-center font-bold mt-2">
                  <span className="text-gray-300">Total</span>
                  <span className="text-lg text-chama-orange brand-font">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="p-2 bg-white rounded-lg inline-block">
                {qrCodeUrl ? (
                  <img src={qrCodeUrl} alt="PIX QR Code" className="w-48 h-48" />
                ) : (
                  <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-md"><p className="text-xs text-gray-600">Carregando QR Code...</p></div>
                )}
              </div>
              <div className="mt-6">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">PIX Copia e Cola</label>
                <div className="flex items-center mt-1 bg-black/20 rounded-lg p-1 border border-white/10">
                  <input type="text" value={pixDetails.pixCopyPaste || 'Gerando...'} readOnly className="flex-1 bg-transparent text-gray-300 text-xs p-2 focus:outline-none" />
                  <button onClick={handleCopy} disabled={!pixDetails.pixCopyPaste} className="bg-chama-orange text-white px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-orange-600 transition-colors disabled:opacity-50">
                    {copied ? <><i className="fa-solid fa-check"></i> Copiado</> : <><i className="fa-solid fa-copy"></i> Copiar</>}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <OrderStatusTracker currentStatus={orderStatus} />
        )}

        <p className="text-gray-500 text-xs text-center mt-6">
          {orderStatus === OrderStatus.PENDING_PAYMENT
            ? 'Após o pagamento, seu pedido será confirmado automaticamente.'
            : 'Acompanhe o status do seu pedido em tempo real.'}
        </p>
        <button onClick={onClose} className="mt-4 w-full bg-white/10 text-white py-3 rounded-lg font-bold uppercase hover:bg-white/20 transition-colors">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;