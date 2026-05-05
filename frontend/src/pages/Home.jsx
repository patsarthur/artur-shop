import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Товари</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}

export default Home;