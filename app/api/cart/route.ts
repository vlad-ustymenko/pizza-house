import { prisma } from '@/prisma/prisma-client';
import { NextResponse, NextRequest } from 'next/server';
import crypto from 'crypto';
import { findOrCreateCart, updateCartTotalAmount } from '@/shared/lib';
import { CreateCartVariationValues } from '@/shared/services/dto/cart.dto';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        items: {
          orderBy: { createdAt: 'desc' },
          include: {
            productVariation: { include: { product: true } },
            ingredients: true,
          },
        },
      },
    });
    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] Server error', error);

    return NextResponse.json(
      {
        error: 'Не вдалося отримати корзину',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartVariationValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productVariationId: data.productVariationId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: { id: findCartItem.id },
        data: { quantity: findCartItem.quantity + 1 },
      });
    }
    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productVariationId: data.productVariationId,
        ingredients: { connect: data.ingredients?.map((id) => ({ id })) },
        quantity: 1,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    const resp = NextResponse.json(updatedUserCart);

    resp.cookies.set('cartToken', token);

    return resp;
  } catch (error) {
    console.log('[CART_POST] Server error', error);

    return NextResponse.json(
      { error: 'Не вдалося створити корзину' },
      { status: 500 }
    );
  }
}
