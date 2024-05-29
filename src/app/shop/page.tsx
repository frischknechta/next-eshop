import Image from "next/image";
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
  // const parsedData = productsSchema.parse(data);
  // console.log(parsedData);

  return (
    <main>
      <h1>Shop</h1>
      <div>
        {data.products.map((product: Product) => {
          return (
            <Link href={`/shop/${product.id}`} key={product.id}>
              <Image
                src={product.thumbnail}
                alt={`A picture of ${product.title}`}
                width={250}
                height={250}
              />
              <h2>{product.title}</h2>
              <p>{product.price} $</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
