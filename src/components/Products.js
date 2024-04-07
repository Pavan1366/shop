import { useEffect, useState } from "react";
// import ProductItem from "./ProductItem";


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const resData = await response.json();
      setProducts(resData.products);
      //console.log(resData.products);
    }

    fetchData();
  }, []);

  // products.map((product) => console.log(product.thumbnail));

  return (
    <ul>
      {products.map((product) => (
        // You can use 'product' here to render each product item
        // <li key={product.id}>{product.title}</li>
        <li key={product.id} >
          {product.title}
        </li>
      ))}
    </ul>
  );
}
