import { useEffect, useState } from "react";
import { IProduct, PostObj } from "./types/interfaces";
import Product from "./components/Product";
import Post from "./components/Post";

const getPosts = async (): Promise<PostObj[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return json;
};

const products: IProduct[] = [
  { id: 1, title: "IPhone", price: 3000 },
  { id: 2, title: "Macbook", price: 4000 },
  { id: 3, title: "IPad", price: 2500 },
];

function App() {
  const [posts, setPosts] = useState<PostObj[]>([]);

  const handleAddToCart = (id: number) => {
    console.log("Clicked", id);
  };

  useEffect(() => {
    (async () => {
      const apiData: PostObj[] = await getPosts();
      setPosts(apiData);
    })();
  }, []);

  console.log(products);

  return (
    <>
      {products?.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleAddToCart={handleAddToCart}
        />
      ))}

      {posts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}

export default App;
