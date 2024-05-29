import Image from "next/image";
import { productSchema } from "../page";

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  const product = productSchema.parse(data);

  console.log(product);

  return (
    <main>
      {product.images.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt={`A picture of ${product.title}`}
            width={400}
            height={400}
          />
        );
      })}
      <h2>{product.title}</h2>
      <p>Price: {product.price} $</p>
      <p>Description: {product.description}</p>
      <p>Items in stock: {product.stock}</p>
    </main>
  );
}
