'use client';

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ProductForm } from '..';
import { ProductWithVariations } from '@/@types/prisma';
import { DialogTitle } from '@radix-ui/react-dialog';

interface Props {
  product: ProductWithVariations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] max-h-[90dvh] bg-white overflow-hidden',
          className
        )}
      >
        <DialogTitle>
          <VisuallyHidden.Root>Картка товару</VisuallyHidden.Root>
        </DialogTitle>
        <ProductForm
          product={product}
          onSubmit={() => router.back()}
        ></ProductForm>
      </DialogContent>
    </Dialog>
  );
};
