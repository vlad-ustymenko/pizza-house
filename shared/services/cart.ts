import { axiosInstance } from './axios';
import { CartDTO, CreateCartVariationValues } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};

export const updateItemQuantity = async (
  id: number,
  quantity: number
): Promise<CartDTO> => {
  return (await axiosInstance.patch<CartDTO>('/cart/' + id, { quantity })).data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + id)).data;
};

export const addCartItem = async (
  values: CreateCartVariationValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>('/cart/', values)).data;
};
