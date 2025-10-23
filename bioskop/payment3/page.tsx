"use client";

import { useState } from "react";
import Link from "next/link";

export default function Payment1Page() {
  const [jumlah, setJumlah] = useState(1);
  const [kursi, setKursi] = useState("");
  const [metode, setMetode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tidak ada validasi atau alert
  };

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

        <div className="flex items-center gap-3">
          {/* Tombol Home */}
          <Link
            href="/bioskop/home"
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
          >
            Home
          </Link>

          {/* Tombol Keluar */}
          <Link
            href="/bioskop/login"
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
          >
            Keluar
          </Link>
        </div>
      </header>

      {/* ===== Konten Utama ===== */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-gray-800 shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-[90%] max-w-4xl">
          {/* Poster Film */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://images-cdn.ubuy.co.id/63400044f988a970a42f9b69-star-wars-episode-iii-3-revenge-of-the.jpg"
              alt="Star Wars Episode III Poster"
              className="w-64 h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Form Pembayaran */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">
              Pembayaran Tiket 🎟️
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Jumlah Tiket */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Jumlah Tiket
                </label>
                <input
                  type="number"
                  min="1"
                  value={jumlah}
                  onChange={(e) => setJumlah(parseInt(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent"
                />
              </div>

              {/* Pilih Kursi */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Pilih Kursi
                </label>
                <select
                  value={kursi}
                  onChange={(e) => setKursi(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-transparent"
                >
                  <option value="">Pilih Kursi</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="B3">B3</option>
                </select>
              </div>

              {/* Metode Pembayaran */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Metode Pembayaran
                </label>
                <select
                  value={metode}
                  onChange={(e) => setMetode(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-transparent"
                >
                  <option value="">Pilih Metode</option>
                  <option value="Gopay">Gopay</option>
                  <option value="Dana">Dana</option>
                  <option value="OVO">OVO</option>
                  <option value="Transfer Bank">Transfer Bank</option>
                  <option value="Kartu Kredit">Kartu Kredit</option>
                </select>
              </div>

              {/* Tombol Bayar */}
              <button
                type="submit"
                className="bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
              >
                Bayar Sekarang
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
