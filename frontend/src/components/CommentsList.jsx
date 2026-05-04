function CommentsList({ comments }) {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  return (
    <div className="space-y-3 mt-5">
      {comments.map(c => (
        <div
          key={c.id}
          className="border p-3 rounded bg-gray-50"
        >

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              👤
            </div>

            <span className="text-sm font-semibold">
              User
            </span>
          </div>

          <p className="text-gray-800">{c.text}</p>

          <div className="text-right text-xs text-gray-500 mt-2">
            {c.created_at && formatDate(c.created_at)}
          </div>

        </div>
      ))}
    </div>
  );
}

export default CommentsList;