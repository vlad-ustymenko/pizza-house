import { useEffect } from 'react';
import { useCartStore } from '../store';
import { CreateCartVariationValues } from '../services/dto/cart.dto';
import { CartStateItem } from '../lib/get-cart-details';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItems: (id: number) => void;
  addCartItems: (values: CreateCartVariationValues) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
