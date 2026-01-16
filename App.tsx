import React, { useState, useMemo } from 'react';
import { CategoryType, MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './constants';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import Cart from './components/Cart';
import FireSparks from './components/FireSparks';
import useInView from './src/hooks/useInView';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(CategoryType.BURGER);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  const [menuRef, isMenuInView] = useInView({ threshold: 0.1 });
  const [aboutRef, isAboutInView] = useInView({ threshold: 0.1 });
  const [footerRef, isFooterInView] = useInView({ threshold: 0.1 });

  const categories = Object.values(CategoryType);

  const stats = [
    { icon: 'fa-solid fa-bolt', text: 'Entrega Express' },
    { icon: 'fa-solid fa-fire-burner', text: 'Grelhado na Brasa' },
    { icon: 'fa-solid fa-medal', text: 'Qualidade Premium' },
    { icon: 'fa-solid fa-clock', text: 'Aberto até 04h' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const handleCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      alert('Seu pedido está a caminho do fogo! 🔥');
      setCart([]);
      setIsOrdering(false);
      setIsCartOpen(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-chama-black overflow-x-hidden">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
      />

      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center pt-20 overflow-hidden animate-on-load"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966841-396ad8867537?q=80&w=1600&auto-format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Hero Background"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
          <FireSparks />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-chama-orange font-bold tracking-[0.3em] uppercase mb-4 block">Festival de Sabores Urbanos</span>
          <h1 className="brand-font text-7xl md:text-8xl font-black uppercase leading-none mb-6 italic">
            Aqui a fome <br /> 
            <span className="text-chama-orange">pega fogo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            O primeiro Food Park online focado em intensidade. Hambúrgueres no fogo, pizzas artesanais e sushi premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-chama-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold uppercase transition-all transform hover:scale-105">
              Pedir Agora
            </a>
            <a href="#sobre" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold uppercase transition-all">
              Conheça a Chama
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
            <i className="fa-solid fa-burger text-9xl"></i>
        </div>
        <div className="absolute top-40 right-10 opacity-10 hidden lg:block">
            <i className="fa-solid fa-pizza-slice text-9xl"></i>
        </div>
      </section>

      {/* Stats/Badges */}
      <div 
        className="bg-chama-orange py-6 overflow-hidden animate-on-load"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="flex animate-scroll-left">
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center gap-3 text-white brand-font font-bold uppercase italic px-12">
              <i className={`${stat.icon} text-2xl`}></i>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section 
        id="menu" 
        ref={menuRef}
        className={`py-24 px-4 max-w-7xl mx-auto transition-opacity duration-700 ${isMenuInView ? 'animate-on-load' : 'opacity-0'}`}
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="brand-font text-4xl md:text-5xl font-bold uppercase mb-2">Nosso Cardápio</h2>
            <div className="h-1 w-20 bg-chama-orange"></div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-bold uppercase text-xs transition-all ${
                  activeCategory === cat 
                  ? 'bg-chama-orange text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>
      </section>

      {/* CTA Section / About */}
      <section 
        id="sobre" 
        ref={aboutRef}
        className={`bg-[#111] py-24 px-4 overflow-hidden relative transition-opacity duration-700 ${isAboutInView ? 'animate-on-load' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div className="relative">
            <div className="bg-chama-orange absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format=fit=crop" 
              className="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Sobre a Chama"
            />
          </div>
          <div>
            <span className="text-chama-orange font-bold uppercase tracking-widest mb-4 block">Sobre o Chama Food Park</span>
            <h2 className="brand-font text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">Vários sabores,<br/> uma só chama.</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              O CHAMA nasceu da vontade de unir o melhor da cultura de rua em um único lugar. Não somos apenas um delivery, somos curadores de sabores intensos. Se você quer o defumado do burger artesanal, a crocância da pizza de fermentação natural ou o frescor do peixe cru, você está no lugar certo.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Toda a nossa cozinha é movida pela paixão e pelo fogo. Ingredientes selecionados e preparo urbano para quem não aceita menos que o extraordinário.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-chama-orange/20 flex items-center justify-center text-chama-orange">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="text-xs font-bold uppercase">Centro Urbano</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-chama-orange/20 flex items-center justify-center text-chama-orange">
                    <i className="fa-solid fa-motorcycle"></i>
                  </div>
                  <span className="text-xs font-bold uppercase">Delivery 40min</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className={`bg-black py-16 px-4 transition-opacity duration-700 ${isFooterInView ? 'animate-on-load' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-chama-orange w-8 h-8 rounded flex items-center justify-center">
                        <i className="fa-solid fa-fire text-white"></i>
                    </div>
                    <span className="brand-font text-2xl font-bold tracking-tighter uppercase">
                        Chama <span className="text-chama-orange">Food Park</span>
                    </span>
                </div>
                <p className="text-gray-500 max-w-sm mb-6">A experiência definitiva de delivery multiculinária. Sabores urbanos, modernos e intensos entregues na sua porta.</p>
                <div className="flex gap-4 text-2xl">
                    <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" className="text-gray-600 hover:text-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
            <div>
                <h4 className="font-bold uppercase mb-6 text-sm tracking-widest text-chama-orange">Links Úteis</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Cardápio</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Seja Franqueado</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold uppercase mb-6 text-sm tracking-widest text-chama-orange">Horários</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                    <li>Seg - Qui: 18h às 02h</li>
                    <li>Sex - Sáb: 18h às 04h</li>
                    <li>Dom: 17h às 01h</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase font-bold">
            <p>© 2024 CHAMA FOOD PARK. Todos os direitos reservados.</p>
            <p>Feito com fogo e paixão 🔥</p>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onCheckout={handleCheckout}
      />

      {/* Quick View Cart Mobile Overlay */}
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%]">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-chama-orange text-white py-4 rounded-2xl font-bold flex justify-between px-6 shadow-2xl shadow-chama-orange/40 animate-bounce"
          >
            <span>Ver Carrinho ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
            <span>R$ {cart.reduce((s, i) => s + i.quantity, 0).toFixed(2)}</span>
          </button>
        </div>
      )}

      {isOrdering && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center">
            <div className="text-chama-orange text-6xl animate-pulse mb-6">
                <i className="fa-solid fa-fire"></i>
            </div>
            <h3 className="brand-font text-3xl font-bold uppercase italic text-center px-4">Enviando seu pedido para a brasa...</h3>
        </div>
      )}
    </div>
  );
};

export default App;