import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CommentsList from "../components/CommentsList";
import NewCommentForm from "../components/NewCommentForm";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product); 
        setComments(data.comments);
      });
  }, [id]);

  const addComment = (newComment) => {
    setComments(prev => [newComment, ...prev]);
  };

  if (!product) return <p className="p-6">Не вдалося знайти даний товар</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">

      <div className="h-60 bg-gray-100 rounded mb-4 flex items-center justify-center">
        <img 
            src={`/uploads/${product.image}`} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
      </div>

      <h1 className="text-2xl font-bold">{product.name}</h1>

      <p className="text-blue-600 text-xl font-bold mt-4">
        {product.price} $
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Додати в кошик
      </button>

      <p className="text-gray-600 mt-4">{product.description}</p>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Коментарі</h2>

        <NewCommentForm productId={id} onAdd={addComment} />
        <CommentsList comments={comments} />

      </div>
    </div>
  );
}

export default ProductDetails;