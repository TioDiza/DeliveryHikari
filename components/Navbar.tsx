import React from 'react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-chama-black border-b border-white/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-chama-orange w-10 h-10 rounded flex items-center justify-center">
            <i className="fa-solid fa-fire text-white text-xl"></i>
          </div>
          <span className="brand-font text-2xl font-bold tracking-tighter uppercase">
            Chama <span className="text-chama-orange">Food Park</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-chama-orange transition-colors"
          >
            <i className="fa-solid fa-bag-shopping text-2xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-chama-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;