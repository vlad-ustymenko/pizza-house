'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import {
  AuthModal,
  CartButton,
  Container,
  ProfileButton,
  SearchInput,
} from './index';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('verified')) {
      toastMessage = 'Аккаут підтверджено!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);
  return (
    <header className={cn('border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/*Ліва частина */}
        <Link href={'/'}>
          <div className='flex aitems-center gap-4'>
            <Image src='/logo.png' alt='logo' width={35} height={35} />
            <div>
              <h1 className='text-2xl uppercase font-black'>Pizza House</h1>
              <p className='text-sm text-gray-400 leading-4'>
                gastronomic pleasure
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>
        )}
        {/*Права частина */}
        <div className='flex aitems-center gap-2'>
          <AuthModal
            open={openAuthModal}
            onClose={() => {
              setOpenAuthModal(false);
            }}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
