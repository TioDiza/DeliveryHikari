
export enum CategoryType {
  BURGER = 'Hambúrgueres',
  PIZZA = 'Pizzas',
  JAPANESE = 'Comida Japonesa',
  DRINKS = 'Bebidas'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  image: string;
  badge?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
