import React, { useState } from 'react';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientData: { name: string; document: string; telefone: string; email: string }) => void;
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose, onSubmit, total }) => {
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    telefone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-black/90 flex flex-col items-center justify-center p-4">
      <div className="bg-chama-black border border-white/10 text-white rounded-2xl p-8 max-w-md w-full text-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        <h2 className="brand-font text-2xl font-bold uppercase mb-2">Finalizar Pedido</h2>
        <p className="text-gray-400 mb-6">Precisamos de alguns dados para gerar o pagamento.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome Completo"
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-chama-orange focus:outline-none"
          />
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleChange}
            placeholder="CPF (apenas números)"
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-chama-orange focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-chama-orange focus:outline-none"
          />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone com DDD"
            required
            className="w-full bg-white/5 p-3 rounded-lg border border-white/10 focus:ring-2 focus:ring-chama-orange focus:outline-none"
          />
          <div className="pt-4">
            <div className="flex justify-between items-center mb-4 p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">Total a pagar</span>
                <span className="text-2xl font-bold brand-font">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button 
              type="submit"
              className="w-full bg-chama-orange text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-lg shadow-chama-orange/20"
            >
              Gerar PIX
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;