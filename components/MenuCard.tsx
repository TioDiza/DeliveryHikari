
import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAdd }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden group hover:ring-1 hover:ring-chama-orange transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.badge && (
          <span className="absolute top-2 left-2 bg-chama-orange text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between h-44">
        <div>
          <h3 className="text-lg font-bold brand-font mb-1 group-hover:text-chama-orange transition-colors">{item.name}</h3>
          <p className="text-gray-400 text-xs line-clamp-2 mb-2">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-white">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            onClick={() => onAdd(item)}
            className="bg-white text-black hover:bg-chama-orange hover:text-white px-3 py-2 rounded-lg font-bold text-sm transition-all"
          >
            <i className="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
