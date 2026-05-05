import { useState } from "react";

function NewCommentForm({ productId, onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const res = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_id: productId,
        text
      })
    });

    const newComment = await res.json();

    onAdd(newComment);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-5">
      <input
        className="border p-2 flex-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напиши коментар..."
      />

      <button disabled={!text.trim()} className="bg-blue-600 text-white px-4 rounded">
        Додати
      </button>
    </form>
  );
}

export default NewCommentForm;