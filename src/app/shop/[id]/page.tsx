import Image from "next/image";
import { productSchema } from "../page";
import { Button, ButtonGroup } from "@nextui-org/button";

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  const product = productSchema.parse(data);

  console.log(product);

  return (
    <main className="mt-10 flex items-center justify-center">
      {/* {product.images.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt={`A picture of ${product.title}`}
            width={400}
            height={400}
          />
        );
      })} */}
      <div className="flex w-5/6 flex-col items-center justify-center gap-5 p-5 lg:flex-row">
        <Image
          src={product.images[0]}
          alt={`A picture of ${product.title}`}
          width={400}
          height={400}
          className="h-64 w-64 lg:h-96 lg:w-96 "
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>Price: {product.price} $</p>
          <p>Description: {product.description}</p>
          <p>Items in stock: {product.stock}</p>
          <div className="flex w-full justify-end">
            <Button color="primary" variant="ghost">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
