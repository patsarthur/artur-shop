import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">

        <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center">
          {/* <span className="text-gray-400 text-sm">Image</span> */}
          <img 
            src={`/uploads/${product.image}`} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="font-semibold text-lg">{product.name}</h3>

        <p className="mt-2 font-bold text-blue-600">
          {product.price} $
        </p>

      </div>
    </Link>
  );
}

export default ProductCard;