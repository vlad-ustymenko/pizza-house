import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './index';
import { Button } from '../ui';

interface Props {
  imgUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  imgUrl,
  name,
  price,
  loading,
  onSubmit,
  className,
}) => {
  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className='flex items-center justify-center flex-1 relative w-full'>
        <img
          src={imgUrl}
          alt={name}
          className='relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]'
        />
      </div>
      <div className='w-[490px] bg-[#fcfcfc] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-7'
        >
          Додати в корзину за {price}грн
        </Button>
      </div>
    </div>
  );
};
