import { CartItem } from '../../types';
import { SHIPPING_FEE } from '../../constants';

// IDs dos produtos que podem ter frete grátis se estiverem sozinhos no carrinho
const FREE_SHIPPING_ITEM_IDS: string[] = [];

export const calculateShippingFee = (cart: CartItem[]): number => {
  if (cart.length === 0) {
    return 0;
  }

  // Verifica se o carrinho contém APENAS UM tipo de item, e se esse item está na lista de frete grátis
  const hasOnlyOneTypeOfItem = cart.length === 1;
  const itemIsEligibleForFreeShipping = hasOnlyOneTypeOfItem && FREE_SHIPPING_ITEM_IDS.includes(cart[0].id);

  if (itemIsEligibleForFreeShipping) {
    return 0;
  }

  return SHIPPING_FEE;
};