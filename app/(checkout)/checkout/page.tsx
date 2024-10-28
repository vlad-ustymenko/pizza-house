'use client';

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from '@/shared/components';
import { useForm, FormProvider } from 'react-hook-form';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCart } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Api } from '@/shared/services/api-client';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItems, loading } =
    useCart();

  const { data: session } = useSession();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);
  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className='mt-10'>
      <Title
        text='Оформлення замовлення'
        className='font-extrabold mb-8 text-[36px]'
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-10 flex-1 mb-20'>
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItems={removeCartItems}
              />
              <CheckoutPersonalForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              />
              <CheckoutAddressForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              />
            </div>

            <div className='w-[450px]'>
              <CheckoutSidebar totalAmount={totalAmount} loading={loading} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
