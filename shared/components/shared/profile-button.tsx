import { CircleUser, User } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
  onClickSignIn?: VoidFunction;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  onClickSignIn,
  className,
}) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <Button
          onClick={onClickSignIn}
          variant='outline'
          className='flex aitems-center gap-1'
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href={'/profile'}>
          <Button variant='secondary' className='flex items-center gap-2'>
            <CircleUser size={30} />
          </Button>
        </Link>
      )}
    </div>
  );
};
