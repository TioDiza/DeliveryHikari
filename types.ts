export enum CategoryType {
  BURGER = 'Hambúrgueres',
  PIZZA = 'Pizzas',
  JAPANESE = 'Comida Japonesa',
  DRINKS = 'Bebidas'
}

export enum OrderStatus {
  PENDING_PAYMENT = 'pending_payment',
  RECEIVED = 'received',
  IN_PRODUCTION = 'in_production',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
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