import { Product } from "@/app/shop/page";
import { useStore } from "@/store";
import { Button, ButtonGroup } from "@nextui-org/button";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const ADD_TO_CART = useStore((store) => store.ADD_TO_CART);

  return (
    <Button
      color="primary"
      variant="ghost"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        ADD_TO_CART(product);
      }}
    >
      Add to cart
    </Button>
  );
};
