
import { MenuItem, CategoryType } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // HAMBURGUERES
  {
    id: 'b1',
    name: 'Smash Chama Original',
    description: 'Dois burgers de 90g, cheddar duplo, cebola caramelizada e molho secreto no pão brioche.',
    price: 32.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    badge: 'Mais Vendido'
  },
  {
    id: 'b2',
    name: 'Monstruoso Artesanal',
    description: 'Burger 200g grelhado no fogo, bacon crocante, alface, tomate e maionese de páprica.',
    price: 44.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
  },
  // PIZZAS
  {
    id: 'p1',
    name: 'Pizza Calabresa Premium',
    description: 'Massa artesanal, molho de tomate italiano, mussarela, calabresa e orégano.',
    price: 58.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Chama Especial',
    description: 'Lombinho, cream cheese, cebola roxa e borda recheada de catupiry.',
    price: 72.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    badge: 'Exclusivo'
  },
  // JAPANESE
  {
    id: 'j1',
    name: 'Combo Chama (20 Peças)',
    description: '10 Hot Rolls, 5 Sashimis de Salmão, 5 Uramakis Filadélfia.',
    price: 89.90,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'j2',
    name: 'Temaki Salmão Grelhado',
    description: 'Salmão grelhado, cream cheese, cebolinha e gergelim.',
    price: 38.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop'
  },
  // DRINKS
  {
    id: 'd1',
    name: 'Milkshake Ovomaltine',
    description: 'Cremoso, com chantilly e calda extra de chocolate.',
    price: 24.90,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Suco Natural Laranja 500ml',
    description: 'Espremido na hora, sem açúcar.',
    price: 12.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop'
  }
];
