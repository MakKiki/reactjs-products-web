import Filter from './components/Filter';
import Product from './components/Product';
import { useEffect, useRef, useState } from 'react';

function App() {
  const productsRef = useRef(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        productsRef.current = result["products"];
        setFilteredProducts(result["products"]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5 mb-5">
      {(productsRef.current != null && filteredProducts != null) ?
        <>
          <Filter products={productsRef.current} setFilteredProducts={setFilteredProducts} />
          <Product filteredProducts={filteredProducts} />
        </>
        :
        <div className="d-flex align-items-center justify-content-center">Loading...</div>}
    </div>
  );
}

export default App;
