import React, { useEffect } from "react";

export default function Spenden() {
  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window === "undefined") return;

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
    <section
      id="spenden"
      className="scroll-mt-[104px] py-16 bg-[#FFFFFF]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Spenden</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-6">
          Unterstütze unser Projekt mit einer Spende! Jeder Beitrag hilft uns,
          unsere Ziele zu erreichen und den Erhalt der Dampflok „Elfe“ zu
          sichern.
        </p>

        {/* TWINT-Spendenbutton */}
        <div id="rnw-paylink-button-cwksk" className="flex justify-center mb-6" />

        {/* IBAN-Angabe */}
        <p className="text-secondary text-lg font-medium">
          IBAN unseres Vereinskonto bei Raiffeisen:<br />
          <span className="text-primary font-semibold">
            CH66 8080 8006 7554 4829 2
          </span>
        </p>
      </div>
    </section>
  );
}
