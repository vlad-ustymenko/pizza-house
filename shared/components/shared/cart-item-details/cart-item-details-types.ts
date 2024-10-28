import { CartItemDetails } from '@/shared/lib/get-cart-item-details';

export interface CartItemProps {
  id: number;
  imageUrl: string;
  details: CartItemDetails;
  name: string;
  price: number;
  quantity: number;
  disabled?: boolean;
}
