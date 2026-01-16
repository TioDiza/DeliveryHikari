import React, { useState } from 'react';
import { CartItem } from '../types';

interface PaymentScreenProps {
  orderItems: CartItem[];
  pixDetails: {
    qrCodeBase64: string;
    pixCopyPaste: string;
  };
  onClose: () => void;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ orderItems, pixDetails, onClose }) => {
  const [copied, setCopied] = useState(false);

  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        <div className="text-center mb-6">
            <div className="text-chama-orange text-3xl mb-3">
                <i className="fa-solid fa-clock animate-spin"></i>
            </div>
            <h2 className="brand-font text-2xl font-bold uppercase mb-1">Aguardando Pagamento</h2>
            <p className="text-gray-400 text-sm">Pague com PIX para confirmar seu pedido.</p>
        </div>

        <div className="bg-black/20 rounded-lg p-4 mb-6 max-h-40 overflow-y-auto">
            <h3 className="font-bold text-gray-300 mb-3 text-xs uppercase tracking-wider">Resumo do Pedido</h3>
            <div className="space-y-2">
                {orderItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{item.quantity}x {item.name}</span>
                        <span className="font-semibold text-white">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="border-t border-white/10 mt-3 pt-3 flex justify-between items-center font-bold">
                <span className="text-gray-300">Total</span>
                <span className="text-lg text-chama-orange brand-font">R$ {total.toFixed(2)}</span>
            </div>
        </div>

        <div className="text-center">
            <div className="p-2 bg-white rounded-lg inline-block">
              {pixDetails.qrCodeBase64 ? (
                <img 
                  src={`data:image/png;base64,${pixDetails.qrCodeBase64}`} 
                  alt="PIX QR Code"
                  className="w-48 h-48"
                />
              ) : (
                <div className="w-48 h-48 bg-gray-200 flex flex-col items-center justify-center rounded-md text-center">
                    <i className="fa-solid fa-qrcode text-4xl text-gray-500 mb-2"></i>
                    <p className="text-xs text-gray-600 font-bold px-2">Erro ao carregar o QR Code</p>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">PIX Copia e Cola</label>
              <div className="flex items-center mt-1 bg-black/20 rounded-lg p-1 border border-white/10">
                <input 
                  type="text"
                  value={pixDetails.pixCopyPaste || 'Gerando...'}
                  readOnly
                  className="flex-1 bg-transparent text-gray-300 text-xs p-2 focus:outline-none"
                />
                <button 
                  onClick={handleCopy}
                  disabled={!pixDetails.pixCopyPaste}
                  className="bg-chama-orange text-white px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-orange-600 transition-colors disabled:opacity-50"
                >
                  {copied ? <><i className="fa-solid fa-check"></i> Copiado</> : <><i className="fa-solid fa-copy"></i> Copiar</>}
                </button>
              </div>
            </div>
        </div>

        <p className="text-gray-500 text-xs text-center mt-6">Após o pagamento, seu pedido será confirmado automaticamente.</p>
        <button 
          onClick={onClose}
          className="mt-4 w-full bg-white/10 text-white py-3 rounded-lg font-bold uppercase hover:bg-white/20 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;