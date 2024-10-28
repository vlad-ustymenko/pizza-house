import { Ingredient, ProductVariation } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';

interface ReturnProps {
  totalPrice: number;
  textDetails: string;
}
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>,
  variation: ProductVariation[],
  ingredients: Ingredient[]
): ReturnProps => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    selectedIngredients,
    variation,
    ingredients
  );

  const textDetails = `${size} см, ${mapPizzaType[type]} піца`;

  return { totalPrice, textDetails };
};
