import { CartItemDetails } from '@/shared/lib/get-cart-item-details';
import { cn } from '@/shared/lib/utils';

interface Props {
  name: string;
  details: CartItemDetails;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
      </div>
      {details && (
        <div className='text-xs text-gray-400'>
          <p>{details.pizza}</p>
          <p>{`${
            details.ingredients.length ? '+' : ''
          } ${details.ingredients.join(', ')}`}</p>
        </div>
      )}
    </div>
  );
};
