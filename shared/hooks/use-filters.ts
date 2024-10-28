import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import { useMemo, useState } from 'react';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaType: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaType: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  /*Фільтр інгредієнтів */
  const [selectedIngredients, { toggle: toogleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  );

  /*Фільтр розмірів */
  const [sizes, { toggle: toogleSizes }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );

  /*Фільтр типу піци */
  const [pizzaType, { toggle: tooglePizzaType }] = useSet(
    new Set<string>(
      searchParams.has('pizzaType')
        ? searchParams.get('pizzaType')?.split(',')
        : []
    )
  );

  /*Фільтр ціни */
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return useMemo(
    () => ({
      sizes,
      pizzaType,
      selectedIngredients,
      prices,
      setPrices: updatePrice,
      setPizzaTypes: tooglePizzaType,
      setSizes: toogleSizes,
      setSelectedIngredients: toogleIngredients,
    }),
    [sizes, pizzaType, selectedIngredients, prices]
  );
};
