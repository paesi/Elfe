export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',      // Logo-Blaugrau
        secondary: '#4A4A4A',    // Für Texte, Icons
        background: '#e1eae9',   // Logo-Hintergrundfarbe
        highlight: '#A8DADC',    // Frischer Akzent (z. B. für Positionen, Buttons)
      },
    },
  },
  plugins: [],
};
