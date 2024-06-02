"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Product } from "@/app/shop/page";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <Link href={`/shop/${product.id}`}>
      <Card isHoverable shadow="sm" radius="lg">
        <CardBody className="flex items-center justify-center">
          <Image
            src={product.thumbnail}
            alt={`A picture of ${product.title}`}
            width={200}
            height={200}
            className="w-full rounded-lg object-cover"
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start text-small">
          <h2 className="text-md font-bold">{product.title}</h2>
          <p>{product.price} $</p>
          <AddToCartButton product={product} />
        </CardFooter>
      </Card>
    </Link>
  );
};
