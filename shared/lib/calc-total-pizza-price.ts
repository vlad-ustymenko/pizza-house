import { PizzaSize, PizzaType } from '../constants/pizza';
import { Ingredient, ProductVariation } from '@prisma/client';

/**
   * Функція для підрахунку загальної вартості піци
	* 
   *@param type - тип вибраної піци
   *@param size - розмір вибраної піци
   *@param selectedIngredients - вибрані інгредієнти
   *@param variation	- варіанти піци
   *@param ingredients - інгредієнти
	
   *@returns - number загальна вартість піци
   */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>,
  variation: ProductVariation[],
  ingredients: Ingredient[]
) => {
  const pizzaPrice =
    variation.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
