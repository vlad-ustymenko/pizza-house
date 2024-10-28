import { ProductVariation } from '@prisma/client';
import { pizzaSizes, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/choose-variants';

/**
 * Функція для отримання доступних розмірів піци
 *
 * @param variation - варіанти піци
 * @param type - тип вибраної піци
 *
 * @returns - масив доступних розмірів піци
 */
export const getAvailablePizzaSizes = (
  variation: ProductVariation[],
  type: PizzaType
): Variant[] => {
  const filteredPizzasByType = variation.filter(
    (item) => item.pizzaType === type
  );

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
