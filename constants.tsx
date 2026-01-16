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
  {
    id: 'b3',
    name: 'Explosão de Bacon',
    description: 'Burger 180g, triplo bacon, queijo cheddar, picles e molho barbecue defumado.',
    price: 42.50,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b5',
    name: 'Frango Crocante',
    description: 'Filé de frango empanado super crocante, alface americana, tomate e maionese de ervas.',
    price: 35.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b8',
    name: 'O Clássico Americano',
    description: 'Burger 150g, queijo americano, picles, cebola roxa, ketchup e mostarda.',
    price: 30.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b9',
    name: 'Rei do Queijo',
    description: 'Burger 180g empanado e recheado com queijo mussarela, alface e molho de tomate fresco.',
    price: 43.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b10',
    name: 'Veggie do Futuro',
    description: 'Burger à base de plantas, queijo vegano, alface, tomate, cebola roxa e maionese vegana.',
    price: 37.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b11',
    name: 'Ogro Duplo',
    description: 'Dois burgers de 200g, quatro fatias de cheddar, bacon em tiras e molho especial da casa.',
    price: 55.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b12',
    name: 'Cebola Suprema',
    description: 'Burger 180g, anéis de cebola empanados, queijo suíço e molho ranch.',
    price: 38.50,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b13',
    name: 'Picanha Nobre',
    description: 'Burger de picanha 200g, queijo coalho grelhado, vinagrete e maionese de alho.',
    price: 49.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b14',
    name: 'Doce Brasa',
    description: 'Burger 180g, queijo brie, geleia de pimenta e fatias de presunto parma.',
    price: 46.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b16',
    name: 'Smash Duplo Bacon',
    description: 'Dois burgers smash de 90g, cheddar duplo, fatias de bacon e molho tártaro.',
    price: 38.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop'
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