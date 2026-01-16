import { MenuItem, CategoryType } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // HAMBURGUERES
  {
    id: 'b1',
    name: 'Smash Chama Original',
    description: 'Dois burgers de 90g, cheddar duplo, cebola caramelizada e molho secreto no pão brioche.',
    price: 32.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format=fit=crop',
    badge: 'Mais Vendido'
  },
  {
    id: 'b2',
    name: 'Monstruoso Artesanal',
    description: 'Burger 200g grelhado no fogo, bacon crocante, alface, tomate e maionese de páprica.',
    price: 44.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b3',
    name: 'Explosão de Bacon',
    description: 'Burger 180g, triplo bacon, queijo cheddar, picles e molho barbecue defumado.',
    price: 42.50,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b5',
    name: 'Frango Crocante',
    description: 'Filé de frango empanado super crocante, alface americana, tomate e maionese de ervas.',
    price: 35.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b8',
    name: 'O Clássico Americano',
    description: 'Burger 150g, queijo americano, picles, cebola roxa, ketchup e mostarda.',
    price: 30.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b9',
    name: 'Rei do Queijo',
    description: 'Burger 180g empanado e recheado com queijo mussarela, alface e molho de tomate fresco.',
    price: 43.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b10',
    name: 'Veggie do Futuro',
    description: 'Burger à base de plantas, queijo vegano, alface, tomate, cebola roxa e maionese vegana.',
    price: 37.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b11',
    name: 'Ogro Duplo',
    description: 'Dois burgers de 200g, quatro fatias de cheddar, bacon em tiras e molho especial da casa.',
    price: 55.00,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b12',
    name: 'Cebola Suprema',
    description: 'Burger 180g, anéis de cebola empanados, queijo suíço e molho ranch.',
    price: 38.50,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b13',
    name: 'Picanha Nobre',
    description: 'Burger de picanha 200g, queijo coalho grelhado, vinagrete e maionese de alho.',
    price: 49.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b14',
    name: 'Doce Brasa',
    description: 'Burger 180g, queijo brie, geleia de pimenta e fatias de presunto parma.',
    price: 46.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'b16',
    name: 'Smash Duplo Bacon',
    description: 'Dois burgers smash de 90g, cheddar duplo, fatias de bacon e molho tártaro.',
    price: 38.90,
    category: CategoryType.BURGER,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format=fit=crop'
  },
  // PIZZAS
  {
    id: 'p1',
    name: 'Pizza Calabresa Premium',
    description: 'Massa artesanal, molho de tomate italiano, mussarela, calabresa e orégano.',
    price: 58.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p2',
    name: 'Chama Especial',
    description: 'Lombinho, cream cheese, cebola roxa e borda recheada de catupiry.',
    price: 72.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format=fit=crop',
    badge: 'Exclusivo'
  },
  {
    id: 'p4',
    name: 'Quatro Queijos',
    description: 'Uma combinação perfeita de mussarela, provolone, parmesão e gorgonzola.',
    price: 65.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p6',
    name: 'Pepperoni Americano',
    description: 'Mussarela de alta qualidade e fatias generosas de pepperoni levemente picante.',
    price: 64.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p7',
    name: 'Portuguesa Completa',
    description: 'Presunto, mussarela, ovos, cebola, azeitonas e pimentão. Uma refeição completa.',
    price: 60.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p8',
    name: 'Parma com Rúcula',
    description: 'Mussarela, presunto de parma, rúcula fresca e lascas de parmesão.',
    price: 75.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p9',
    name: 'Vegana da Horta',
    description: 'Molho de tomate, brócolis, tomate cereja, milho, azeitonas e queijo vegano.',
    price: 68.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'p10',
    name: 'Carbonara',
    description: 'Mussarela, pancetta, ovos, queijo pecorino e pimenta do reino moída na hora.',
    price: 70.00,
    category: CategoryType.PIZZA,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format=fit=crop'
  },
  // JAPANESE
  {
    id: 'j1',
    name: 'Combo Chama (20 Peças)',
    description: '10 Hot Rolls, 5 Sashimis de Salmão, 5 Uramakis Filadélfia.',
    price: 89.90,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j2',
    name: 'Temaki Salmão Grelhado',
    description: 'Salmão grelhado, cream cheese, cebolinha e gergelim.',
    price: 38.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j3',
    name: 'Sashimi Salmão (10 fatias)',
    description: 'Fatias frescas de salmão premium, servidas com wasabi e shoyu.',
    price: 45.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1582450871972-ab5c6c1e5818?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j4',
    name: 'Yakisoba de Carne',
    description: 'Macarrão frito com tiras de carne, legumes frescos e molho especial.',
    price: 42.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1585523381059-d12029348134?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j5',
    name: 'Hot Roll Especial (10 un)',
    description: 'Sushi empanado e frito com salmão, cream cheese e um toque de teriyaki.',
    price: 35.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j6',
    name: 'Temaki Camarão Empanado',
    description: 'Cone de alga com arroz, camarão empanado crocante, cream cheese e cebolinha.',
    price: 40.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1625944022196-405a0e353657?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j7',
    name: 'Uramaki Califórnia (8 un)',
    description: 'Manga, kani e pepino, enrolados com arroz por fora e gergelim.',
    price: 30.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j8',
    name: 'Niguiri Salmão Maçaricado (4 un)',
    description: 'Bolinho de arroz coberto com salmão levemente maçaricado e molho teriyaki.',
    price: 28.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1621873495934-443551391302?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j9',
    name: 'Guioza Suína (6 un)',
    description: 'Pastéis japoneses recheados com carne de porco e legumes, fritos ou no vapor.',
    price: 25.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1629230124470-610d27cf3936?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j10',
    name: 'Sunomono',
    description: 'Salada de pepino agridoce com gergelim.',
    price: 15.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1553447859-51934012795b?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'j11',
    name: 'Ceviche Nikkei',
    description: 'Peixe branco marinado em molho cítrico com um toque de pimenta e coentro.',
    price: 48.00,
    category: CategoryType.JAPANESE,
    image: 'https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=800&auto=format=fit=crop'
  },
  // DRINKS
  {
    id: 'd1',
    name: 'Milkshake Ovomaltine',
    description: 'Cremoso, com chantilly e calda extra de chocolate.',
    price: 24.90,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd2',
    name: 'Suco Natural Laranja 500ml',
    description: 'Espremido na hora, sem açúcar.',
    price: 12.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd3',
    name: 'Coca-Cola Lata 350ml',
    description: 'A clássica, gelada e refrescante.',
    price: 6.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1554866585-392733e151a5?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd4',
    name: 'Guaraná Antarctica Lata 350ml',
    description: 'O sabor original do Brasil.',
    price: 6.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1622543923933-257e74527658?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd5',
    name: 'Água Mineral com Gás 500ml',
    description: 'Hidratação com um toque de sofisticação.',
    price: 5.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1601131124335-97c35140383a?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd6',
    name: 'Água Mineral sem Gás 500ml',
    description: 'Pura e simples, para matar a sede.',
    price: 4.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd7',
    name: 'Cerveja Heineken Long Neck',
    description: 'A cerveja premium mais famosa do mundo.',
    price: 12.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1618885472179-5e474039f1a2?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd8',
    name: 'Suco Abacaxi com Hortelã 500ml',
    description: 'Refrescante e natural, feito na hora.',
    price: 14.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1553787499-679c2be3616d?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd9',
    name: 'Chá Gelado de Pêssego 450ml',
    description: 'Leve e saboroso para acompanhar sua refeição.',
    price: 9.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c19761a?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd10',
    name: 'Soda Italiana Maçã Verde',
    description: 'Uma bebida gaseificada e artesanal super refrescante.',
    price: 16.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1543253691-a7b9720a3419?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd11',
    name: 'Red Bull Energy Drink 250ml',
    description: 'Te dá asas para encarar a noite.',
    price: 15.00,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1582213742238-28314a152396?q=80&w=800&auto=format=fit=crop'
  },
  {
    id: 'd12',
    name: 'Milkshake de Morango',
    description: 'Feito com sorvete de verdade e morangos frescos.',
    price: 24.90,
    category: CategoryType.DRINKS,
    image: 'https://images.unsplash.com/photo-1600718374662-083166444212?q=80&w=800&auto=format=fit=crop'
  }
];