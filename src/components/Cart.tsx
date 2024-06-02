"use client";

import { Product } from "@/app/shop/page";
import { useStore } from "@/store";

export const Cart = () => {
  const total = useStore((store) => store.total);
  const products: Product[] = useStore((store) => store.products);

  return (
    <div className="container mx-auto px-10">
      <h2>Cart</h2>
      {products.map((product) => {
        return <div key={product.id}>{product.title} </div>;
      })}
      <p>{`Total ${total}$`}</p>
    </div>
  );
};
