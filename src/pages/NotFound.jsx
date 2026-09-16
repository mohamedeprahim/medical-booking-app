import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-blue-600 font-bold text-lg mb-3">
          404
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;