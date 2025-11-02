// src/components/Spenden.tsx
import React from "react";

export default function Spenden() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Spenden</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Unterstütze unser Projekt mit einer Spende! Jeder Beitrag hilft uns,
        unsere Ziele zu erreichen.
      </p>
      <a
        href="/spenden"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Jetzt Spenden
      </a>
    </section>
  );
}
