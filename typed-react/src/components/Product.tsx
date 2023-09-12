import { IProduct } from "../types/interfaces";

interface ProductProps {
  product: IProduct;
  handleAddToCart: (id: number) => void;
}

const Product = ({ product, handleAddToCart }: ProductProps) => {
  
  return (
    <div>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <button onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
    </div>
  );
};

export default Product;
