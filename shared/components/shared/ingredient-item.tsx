import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center flex-col rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
        { 'border border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className='absolute top-2 right-2 text-primary' />
      )}
      <img width={100} height={100} src={imageUrl} alt={name} />
      <span className='text-xs mb-1'>{name}</span>
      <span className='font-bold'>{price} ₴</span>
    </div>
  );
};
