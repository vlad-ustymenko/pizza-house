import { Product, ProductVariation, Ingredient } from '@prisma/client';
export type ProductWithVariations = Product & {variation: ProductVariation[], ingredients: Ingredient[]};