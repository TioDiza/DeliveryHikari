import React, { useState } from 'react';

interface PixDisplayProps {
  qrCodeBase64: string;
  pixCopyPaste: string;
  onClose: () => void;
}

const PixDisplay: React.FC<PixDisplayProps> = ({ qrCodeBase64, pixCopyPaste, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (pixCopyPaste) {
      navigator.clipboard.writeText(pixCopyPaste).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-black rounded-2xl p-8 max-w-sm w-full text-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        <h2 className="brand-font text-2xl font-bold uppercase mb-2 text-gray-800">Pague com PIX</h2>
        <p className="text-gray-600 mb-6">Escaneie o QR Code ou use o Copia e Cola.</p>
        <div className="p-2 border-4 border-gray-200 rounded-lg inline-block">
          <img 
            src={`data:image/png;base64,${qrCodeBase64}`} 
            alt="PIX QR Code"
            className="w-64 h-64"
          />
        </div>
        
        <div className="mt-6">
          <label className="text-gray-500 text-xs font-bold uppercase">PIX Copia e Cola</label>
          <div className="flex items-center mt-1 bg-gray-100 rounded-lg p-1">
            <input 
              type="text"
              value={pixCopyPaste || 'Gerando...'}
              readOnly
              className="flex-1 bg-transparent text-gray-700 text-xs p-2 focus:outline-none"
            />
            <button 
              onClick={handleCopy}
              disabled={!pixCopyPaste}
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-black transition-colors disabled:opacity-50"
            >
              {copied ? <><i className="fa-solid fa-check"></i> Copiado!</> : <><i className="fa-solid fa-copy"></i> Copiar</>}
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-6">Após o pagamento, seu pedido será confirmado automaticamente.</p>
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

export default PixDisplay;