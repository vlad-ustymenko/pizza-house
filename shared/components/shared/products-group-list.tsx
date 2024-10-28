'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { ProductCard } from './index';
import { useIntersection } from 'react-use';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithVariations } from '@/@types/prisma';

interface Props {
  title: string;
  products: ProductWithVariations[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  categoryId,
  listClassName,
  className,
}) => {
  const setAcriveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setAcriveCategoryId(categoryId);
    }
  }, [categoryId, intersection, setAcriveCategoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.variation[0].price}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
