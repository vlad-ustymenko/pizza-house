'use client';

import { ProductWithVariations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
  product: ProductWithVariations;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItems,
    state.loading,
  ]);
  const firstVatriation = product.variation[0];
  const isPizzaForm = Boolean(firstVatriation.pizzaType);

  const onSubmit = async (
    productVariationId?: number,
    ingredients?: number[]
  ) => {
    try {
      const variationId = productVariationId ?? firstVatriation.id;

      await addCartItem({ productVariationId: variationId, ingredients });
      toast.success('Товар додано до кошика');
      _onSubmit?.();
    } catch (error) {
      toast.error('Не вдалося додати товар до кошика');
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imgUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        variation={product.variation}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imgUrl={product.imageUrl}
      name={product.name}
      price={firstVatriation.price}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
