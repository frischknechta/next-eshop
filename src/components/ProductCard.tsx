"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Product } from "@/app/shop/page";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <Card
      isHoverable
      shadow="sm"
      radius="lg"
      isPressable
      onPress={() => router.push(`/shop/${product.id}`)}
    >
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
      </CardFooter>
    </Card>
  );
};
