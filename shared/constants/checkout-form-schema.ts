import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, "Ім'я повинно містити не менше 2 символів"),
  lastName: z.string().min(2, 'Прійзвище повинно містити не менше 2 символів'),
  email: z.string().email('Введіть коректну електронну адресу'),
  phone: z.string().min(10, 'Введіть коректний номер телефону'),
  address: z.string().min(5, 'Введіть коректну адресу'),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
