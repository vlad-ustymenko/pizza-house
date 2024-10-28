import { WhiteBlock } from '../white-block';
import { FormInput, FormTextarea } from '../form';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title='3. Адреса доставки' className={className}>
      <div className='flex flex-col gap-5'>
        <FormInput
          name='address'
          className='text-base'
          placeholder='Введіть адресу'
        />
        <FormTextarea
          name='comment'
          className='text-base'
          placeholder='Додаткова інформація до замовлення'
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
