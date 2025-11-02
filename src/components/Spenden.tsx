import React, { useEffect } from "react";

export default function Spenden() {
  useEffect(() => {
    // Dynamically import the TwintButton module in the browser
    import("https://unpkg.com/@raisenow/paylink-button@2/dist/TwintButton.js")
      .then(({ TwintButton }) => {
        TwintButton.render("#rnw-paylink-button-cwksk", {
          "solution-id": "cwksk",
          "solution-type": "donate",
          language: "de",
          size: "large",
          width: "fixed",
          "color-scheme": "dark",
        });
      })
      .catch((err) => console.error("Error loading TwintButton:", err));
  }, []);

  return (
    <section id="spenden" className="py-16 bg-backgroundAlt">
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Spenden</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Unterstütze unser Projekt mit einer Spende! Jeder Beitrag hilft uns,
        unsere Ziele zu erreichen.
      </p>

      {/* Placeholder div where the TWINT button will render */}
      <div id="rnw-paylink-button-cwksk" className="flex justify-center" />
    </section>
  );
}
