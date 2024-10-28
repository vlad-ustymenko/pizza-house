import { useEffect, useState } from 'react';
import { Variant } from '../components/shared/choose-variants';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { getAvailablePizzaSizes } from '../lib';
import { ProductVariation } from '@prisma/client';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  avalaibleSizes: Variant[];
  selectedIngredients: Set<number>;
  currentVariationId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (variation: ProductVariation[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const avalaibleSizes = getAvailablePizzaSizes(variation, type);

  const currentVariationId = variation.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id;

  useEffect(() => {
    const isAvaliableSize = avalaibleSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const avaliableSizes = avalaibleSizes?.find((item) => !item.disabled);

    if (!isAvaliableSize && avaliableSizes)
      setSize(Number(avaliableSizes.value) as PizzaSize);
  }, [type]);

  return {
    size,
    type,
    selectedIngredients,
    avalaibleSizes,
    currentVariationId,
    setSize,
    setType,
    addIngredient,
  };
};
