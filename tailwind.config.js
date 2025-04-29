export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#384f5a',      // Logo-Blaugrau
        secondary: '#4A4A4A',    // Für Texte, Icons
        background: '#e1eae9',   // Logo-Hintergrundfarbe
        highlight: '#A8DADC',    // Frischer Akzent (z. B. für Positionen, Buttons)
        darkgreen: '#14532d',  // Header und Footer Hintergrund
      },
    },
  },
  plugins: [],
};
