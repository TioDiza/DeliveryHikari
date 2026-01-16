import React from 'react';
import { CartItem } from '../types';
import { SHIPPING_FEE } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + SHIPPING_FEE;

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-chama-black shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h2 className="brand-font text-2xl font-bold uppercase">Seu Pedido</h2>
          <button onClick={onClose} className="text-white hover:text-chama-orange">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <i className="fa-solid fa-cart-shopping text-5xl text-gray-700 mb-4"></i>
              <p className="text-gray-400">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="mt-4 text-chama-orange font-bold uppercase hover:underline">
                Bora escolher?
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-white/5 p-3 rounded-lg">
                <img src={item.image} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-chama-orange text-sm font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="w-6 h-6 border border-white/20 rounded flex items-center justify-center text-xs">-</button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="w-6 h-6 border border-white/20 rounded flex items-center justify-center text-xs">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-500">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Taxa de Entrega</span>
                <span className="font-bold text-white">R$ {SHIPPING_FEE.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="border-t border-white/10 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-bold">Total do pedido</span>
                <span className="text-2xl font-bold brand-font text-chama-orange">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-chama-orange text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-lg shadow-chama-orange/20"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;