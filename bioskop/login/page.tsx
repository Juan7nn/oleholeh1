"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-gray-800 shadow-md p-3 flex">
        <div className="flex items-center gap-3">
          <img
            src="https://static.thenounproject.com/png/95019-200.png"
            alt="Logo Bioskop"
            className="w-20 h-20"
          />
          <h1 className="text-xl font-bold text-red-600">Bioskop Online</h1>
        </div>
      </header>

      {/* ===== Form Login ===== */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 shadow-xl rounded-2xl p-8 w-[90%] max-w-md mt-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">
            Masuk ke Akun Anda
          </h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Tombol Masuk menggunakan HREF */}
            <Link
              href="/bioskop/home"
              className="text-center bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
            >
              Masuk
            </Link>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Belum punya akun?{" "}
            <a href="#" className="text-red-400 hover:underline">
              Daftar sekarang
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
