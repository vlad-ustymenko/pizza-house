import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  loading: boolean;
  totalAmount: number;
  className?: string;
}

const VAT = 15;
const DELIVERY_PRICE = 50;

export const CheckoutSidebar: React.FC<Props> = ({
  loading,
  totalAmount,
  className,
}) => {
  const vatPrice = Math.round(((totalAmount * VAT) / 100) * 10) / 10;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;
  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className='flex flex-col gap-1'>
        <span className='text-xl'>Всього:</span>
        {loading ? (
          <Skeleton className='w-48 h-11' />
        ) : (
          <span className='h-11 text-[34px] font-extrabold'>
            {totalPrice} ₴`
          </span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Package size={20} className='mr-2 text-gray-400' />
            Вартість кошика:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-24 h-6 rounded-[7px]' />
          ) : (
            `${totalAmount} ₴`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Percent size={20} className='mr-2 text-gray-400' />
            Налог:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-24 h-6 rounded-[7px]' />
          ) : (
            `${vatPrice} ₴`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className='flex items-center'>
            <Truck size={20} className='mr-2 text-gray-400' />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className='w-24 h-6 rounded-[7px]' />
          ) : (
            `${DELIVERY_PRICE} ₴`
          )
        }
      />
      <Button
        type='submit'
        className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
      >
        Перейти до оплати
        <ArrowRight className='w-5 ml-2' />
      </Button>
    </WhiteBlock>
  );
};
