import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '../../../title';
import { FormInput } from '../../../form';
import { Button } from '@/shared/components/ui';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      toast.success('Ви успішно увійшли в аккаунт', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      console.log('Error [LOGIN]', error);
      toast.error('Не вдалося увійти до аккаунту', { icon: '❌' });
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center'>
          <div className='mr-2'>
            <Title text='Вхід' size='md' className='font-bold' />
            <p className=' text-gray-400'>Введіть свою пошту</p>
          </div>

          <img src='/assets/lock.png' alt='feer' width={60} height={60} />
        </div>
        <FormInput name='email' label='Email' required />
        <FormInput name='password' label='Пароль' type='password' required />
        <Button
          className='h-12 text-base'
          type='submit'
          loading={form.formState.isSubmitting}
        >
          Увійти
        </Button>
      </form>
    </FormProvider>
  );
};
