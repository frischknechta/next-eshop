import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  brand: z.string().optional(),
  images: z.array(z.string()),
  thumbnail: z.string(),
});

const productsSchema = z.object({
  products: z.array(productSchema),
});

export type Product = z.infer<typeof productSchema>;

export default async function Shop() {
  const response = await fetch("https://dummyjson.com/products");
  const data = productsSchema.parse(await response.json());

  return (
    <main>
      <div className="m-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {data.products.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}
