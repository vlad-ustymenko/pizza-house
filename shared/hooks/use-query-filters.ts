import { useEffect } from 'react';
import { Filters } from './use-filters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaType: Array.from(filters.pizzaType),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const queryString = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, { scroll: false });
  }, [filters]);
};
