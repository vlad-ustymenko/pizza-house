import { mapPizzaType, PizzaSize } from './../constants/pizza';
import { PizzaType } from '../constants/pizza';
import { CartStateItem } from './get-cart-details';

export interface CartItemDetails {
  pizza: string;
  ingredients: string[];
}

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize
): CartItemDetails => {
  const details: CartItemDetails = { pizza: '', ingredients: [] };

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.pizza = `${typeName} ${pizzaSize} см`;
  }

  if (ingredients) {
    details.ingredients.push(
      ...ingredients.map((ingredient) => ingredient.name)
    );
  }

  return details;
};
