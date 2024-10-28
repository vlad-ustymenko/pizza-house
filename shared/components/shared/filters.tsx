'use client';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup, Title } from './index';
import { useIngredients, useFilters, useQueryFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();

  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text='Фільтрація' size='sm' className='mb-5 font-bold' />
      {/*Верхні чекбокси*/}
      <CheckboxFiltersGroup
        title='Тип тіста'
        name='pizzaType'
        className='mb-5'
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaType}
        items={[
          { text: 'Традиційне', value: '1' },
          { text: 'Тонке', value: '2' },
        ]}
      />
      <CheckboxFiltersGroup
        title='Розміри'
        name='sizes'
        className='mb-5'
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      {/*Фільтри цін*/}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Ціна від і до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={500}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => {
              filters.setPrices('priceFrom', Number(e.target.value));
            }}
          />
          <Input
            type='number'
            placeholder='500'
            min={100}
            max={500}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={500}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 500]}
          onValueChange={updatePrices}
        />
      </div>

      {/*Чекбокси інгредієнтів*/}
      <CheckboxFiltersGroup
        title='Інгредієнти'
        name='ingredients'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
