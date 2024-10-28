import React from 'react';
import { WhiteBlock } from '../white-block';
import { CheckoutCartItem } from '../checkout-cart-item';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { getCartItemDetails } from '@/shared/lib';
import { CartStateItem } from '@/shared/lib/get-cart-details';

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => void;
  removeCartItems: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  onClickCountButton,
  removeCartItems,
  className,
}) => {
  return (
    <WhiteBlock title='1. Кошик' className={className}>
      <div className='flex flex-col gap-5'>
        {items.map((item) => (
          <CheckoutCartItem
            className='relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-gray-100 last:after:content-none'
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            details={getCartItemDetails(
              item.ingredients,
              item.pizzaType as PizzaType,
              item.pizzaSize as PizzaSize
            )}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            disabled={item.disabled}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItems(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};
