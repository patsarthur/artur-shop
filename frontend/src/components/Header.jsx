import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">🛒 MyShop</h1>

        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-blue-400" to="/">Головна</Link>
          <Link className="hover:text-blue-400" to="/">Магазин</Link>
          <Link className="hover:text-blue-400" to="/about">Про нас</Link>
          <Link className="hover:text-blue-400" to="/contacts">Контакти</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;