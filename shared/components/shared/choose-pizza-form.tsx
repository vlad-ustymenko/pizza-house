'use client';

import { cn } from '@/shared/lib/utils';
import { ChooseVariants, IngredientItem, PizzaImage, Title } from './index';
import { Button } from '../ui';
import { PizzaSize, pizzaTypes, PizzaType } from '@/shared/constants/pizza';
import { Ingredient, ProductVariation } from '@prisma/client';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
  imgUrl: string;
  name: string;
  ingredients: Ingredient[];
  variation: ProductVariation[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imgUrl,
  name,
  ingredients,
  variation,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    setSize,
    type,
    setType,
    selectedIngredients,
    avalaibleSizes,
    currentVariationId,
    addIngredient,
  } = usePizzaOptions(variation);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    selectedIngredients,
    variation,
    ingredients
  );

  const handleClickAdd = () => {
    if (currentVariationId) {
      onSubmit(currentVariationId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imgUrl={imgUrl} size={size} />
      <div className='w-[490px] max-h-[75dvh] my-10  bg-[#fcfcfc] p-5 overflow-auto scrollbar'>
        <Title text={name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400 leading-none'>{textDetails}</p>

        <div className='flex flex-col gap-3 mt-5'>
          <ChooseVariants
            items={avalaibleSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <ChooseVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className='bg-gray-50  mt-5	rounded-md'>
          <div className='grid grid-cols-3 gap-3 p-5 h-[420px] overflow-auto scrollbar'>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-5'
        >
          Додати в корзину за {totalPrice}грн
        </Button>
      </div>
    </div>
  );
};
