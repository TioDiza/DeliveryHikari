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
      <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full my-8">
        <div className="text-center">
            <div className="text-yellow-500 text-2xl mb-4">
                <i className="fa-solid fa-clock animate-spin"></i>
            </div>
            <h2 className="brand-font text-2xl font-bold uppercase mb-2 text-gray-800">Aguardando Pagamento</h2>
            <p className="text-gray-600 mb-6">Seu pedido foi recebido! Pague com PIX para confirmar.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 max-h-48 overflow-y-auto">
            <h3 className="font-bold text-gray-700 mb-3 text-sm uppercase">Resumo do Pedido</h3>
            <div className="space-y-2">
                {orderItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{item.quantity}x {item.name}</span>
                        <span className="font-semibold text-gray-800">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between items-center font-bold">
                <span className="text-gray-800">Total</span>
                <span className="text-lg text-gray-900">R$ {total.toFixed(2)}</span>
            </div>
        </div>

        <div className="text-center">
            <div className="p-2 border-4 border-gray-200 rounded-lg inline-block">
              <img 
                src={`data:image/png;base64,${pixDetails.qrCodeBase64}`} 
                alt="PIX QR Code"
                className="w-56 h-56"
              />
            </div>
            
            <div className="mt-6">
              <label className="text-gray-500 text-xs font-bold uppercase">PIX Copia e Cola</label>
              <div className="flex items-center mt-1 bg-gray-100 rounded-lg p-1">
                <input 
                  type="text"
                  value={pixDetails.pixCopyPaste || 'Gerando...'}
                  readOnly
                  className="flex-1 bg-transparent text-gray-700 text-xs p-2 focus:outline-none"
                />
                <button 
                  onClick={handleCopy}
                  disabled={!pixDetails.pixCopyPaste}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-black transition-colors disabled:opacity-50"
                >
                  {copied ? <><i className="fa-solid fa-check"></i> Copiado!</> : <><i className="fa-solid fa-copy"></i> Copiar</>}
                </button>
              </div>
            </div>
        </div>

        <p className="text-gray-500 text-xs text-center mt-6">Após o pagamento, seu pedido será confirmado automaticamente. Você pode fechar esta tela.</p>
        <button 
          onClick={onClose}
          className="mt-4 w-full bg-gray-800 text-white py-3 rounded-lg font-bold uppercase hover:bg-black transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;