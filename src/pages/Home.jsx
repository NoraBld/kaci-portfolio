
import React from "react";
import circuitGif from "../assets/circuit.gif";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      {/* GIF de fond */}
      <img
        src={circuitGif}
        alt="Circuit électrique"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="home-container">
        <h1 className="title">
          Bonjour, je m'appelle{" "}
          <span className="electric">Kaci Belloul</span>.
        </h1>

        <p className="subtitle">
          Bienvenue sur mon portfolio,{" "}
          <span className="electric">Ingénieur en réseaux électriques</span>.
        </p>

        <button className="btn">Voir mes projets</button>
      </div>

      {/* CSS PUR */}
      <style>{`
        /* Import polices */
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Montserrat:wght@400;600;700&display=swap');

        .home-container {
          position: relative;
          z-index: 20;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 20px;
        }

        /* Titre avec police serif professionnelle */
        .title {
          font-family: 'Merriweather', serif;
          font-weight: 900;
          font-size: 2.4rem;
          margin-bottom: 20px;
          color: white;
          text-shadow: 0 0 8px rgba(0,0,0,0.6);
        }
        @media (min-width: 640px) { .title { font-size: 3rem; } }
        @media (min-width: 768px) { .title { font-size: 3.8rem; } }
        @media (min-width: 1024px) { .title { font-size: 4.5rem; } }

        /* Sous-titre en Montserrat pour modernité */
        .subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: white;
          text-shadow: 0 0 6px rgba(0,0,0,0.5);
        }
        @media (min-width: 768px) { .subtitle { font-size: 1.5rem; } }

        .btn {
          background: #00ffff;
          color: black;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,255,255,0.3);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .btn:hover {
          background: #00e5e5;
          box-shadow: 0 6px 18px rgba(0,255,255,0.4);
        }

        /* Animation électrique subtile */
        @keyframes electric {
          0%, 100% { color: #00ffff; text-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff; }
          25% { color: #ffff00; text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00; }
          50% { color: #00ffff; text-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff; }
          75% { color: #ffff00; text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00; }
        }

        .electric {
          font-weight: 900;
          animation: electric 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
