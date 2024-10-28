import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products } from './constants';
import { Prisma } from '@prisma/client';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariation = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(100, 300),
    pizzaType,
    size,
  } as Prisma.ProductVariationUncheckedCreateInput;
};
async function generate() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'John Doe',
        email: 'johndoe@me.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@me.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Гавайська',
      searchQuery: 'гавайська',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/11EE7D617E9339CFB185921A343AD8FD.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Чотири сира',
      searchQuery: 'чотири сира',
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/11EE7D612A1C13CBBFCC286C332D7762.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: `М'ясна`,
      searchQuery: `м'ясна`,
      imageUrl:
        'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productVariation.createMany({
    data: [],
  });

  await prisma.productVariation.createMany({
    data: [
      //pizza1
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      //pizza2
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }),
      //pizza3
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }),
      //інші продукти
      generateProductVariation({
        productId: 1,
      }),
      generateProductVariation({
        productId: 2,
      }),
      generateProductVariation({
        productId: 3,
      }),
      generateProductVariation({
        productId: 4,
      }),
      generateProductVariation({
        productId: 5,
      }),
      generateProductVariation({
        productId: 6,
      }),
      generateProductVariation({
        productId: 7,
      }),
      generateProductVariation({
        productId: 8,
      }),
      generateProductVariation({
        productId: 9,
      }),
      generateProductVariation({
        productId: 10,
      }),
      generateProductVariation({
        productId: 11,
      }),
      generateProductVariation({
        productId: 12,
      }),
      generateProductVariation({
        productId: 13,
      }),
      generateProductVariation({
        productId: 14,
      }),
      generateProductVariation({
        productId: 15,
      }),
      generateProductVariation({
        productId: 16,
      }),
      generateProductVariation({
        productId: 17,
      }),
    ],
  });
  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '1111' },
      { userId: 2, totalAmount: 0, token: '2222' },
    ],
  });
  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productVariationId: 1,
      quantity: 2,
      ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    },
  });
}
async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await clear();
    await generate();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
