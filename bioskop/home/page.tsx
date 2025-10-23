"use client";

import Link from "next/link";

export default function HomePage() {
  const movies = [
    {
      title: "Star Wars Episode I: The Phantom Menace",
      image:
        "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_.jpg",
      genre: "Anak-anak/Fiksi ilmiah",
      rating: "6,5/10",
      paymentLink: "/bioskop/payment1",
    },
    {
      title: "Star Wars Episode II: Attack of the Clones",
      image: "https://m.media-amazon.com/images/I/615R0q0JQmL.jpg",
      genre: "Anak-anak/Laga",
      rating: "6,6/10",
      paymentLink: "/bioskop/payment2",
    },
    {
      title: "Star Wars Episode III: Revenge of the Sith",
      image:
        "https://images-cdn.ubuy.co.id/63400044f988a970a42f9b69-star-wars-episode-iii-3-revenge-of-the.jpg",
      genre: "Laga/Fiksi ilmiah",
      rating: "7,6/10",
      paymentLink: "/bioskop/payment3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-gray-800 shadow-md p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://static.thenounproject.com/png/95019-200.png"
            alt="Logo Bioskop"
            className="w-20 h-20"
          />
          <h1 className="text-xl font-bold text-red-600">Bioskop Online</h1>
        </div>
        <Link
          href="/bioskop/login"
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
        >
          Keluar
        </Link>
      </header>

      {/* ===== Konten Utama ===== */}
      <main className="flex-grow p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          ⭐ Film Sedang Tayang ⭐
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-72 transition transform hover:scale-105"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-400">{movie.genre}</p>
                <p className="text-yellow-400 mt-1">{movie.rating}</p>
                <Link
                  href={movie.paymentLink}
                  className="block mt-4 bg-red-500 text-center text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Pesan Tiket
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
