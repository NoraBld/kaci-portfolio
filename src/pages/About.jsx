import React from "react";
import Navbar from "../components/Navbar";
import profileImg from "../assets/KACI.jpg";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-rectangle">

        {/* PHOTO AVEC HALO */}
        <div className="about-photo-box animated-left">
          <div className="photo-halo"></div>
          <img src={profileImg} alt="Profil" />
        </div>

        {/* TEXTE */}
        <div className="about-text-box animated-right">
          <h1>À propos de moi</h1>
          <p>
            Je suis <span className="highlight">Kaci Belloul</span>, ingénieur spécialisé en <span className="highlight">réseaux électriques</span>.
            Passionné par l’innovation, l’optimisation énergétique et les systèmes intelligents.
          </p>
          <button>Télécharger mon CV</button>
        </div>

      </div>

      <style>{`
        /* PAGE */
        .about-page {
          min-height: 100vh;
          background: #0B2A34; /* Bleu nuit sombre */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 140px;
          color: #F5F5F5; /* Blanc cassé */
          font-family: 'Segoe UI', sans-serif;
        }

        /* RECTANGLE PRINCIPAL */
        .about-rectangle {
          width: 85%;
          max-width: 1300px;
          height: 340px;
          background: rgba(245,245,245,0.08); /* très léger blanc */
          border-radius: 16px;
          display: flex;
          gap: 35px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
          padding: 25px 30px;
          overflow: hidden;
        }

        /* ANIMATIONS */
        .animated-left {
          animation: slideLeftZoom 1.2s ease-out forwards;
        }
        .animated-right {
          animation: slideRightFade 1.3s ease-out forwards;
          animation-delay: 0.25s;
        }
        @keyframes slideLeftZoom {
          0% { transform: translateX(-80px) scale(0.95); opacity: 0; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes slideRightFade {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        /* PHOTO + HALO */
        .about-photo-box {
          width: 32%;
          height: 100%;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }
        .about-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          position: relative;
          z-index: 2;
        }
        .photo-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0) 70%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          filter: blur(25px);
          z-index: 1;
          animation: pulseHalo 2.5s infinite;
        }
        @keyframes pulseHalo {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.9; }
        }

        /* TEXTE */
        .about-text-box {
          width: 68%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 20px;
        }
        .about-text-box h1 {
          font-size: 2rem;
          color: #F5F5F5; /* Blanc cassé */
          margin-bottom: 12px;
          text-shadow: 0 0 6px rgba(245,245,245,0.4);
        }
        .about-text-box p {
          font-size: 1.1rem;
          line-height: 1.5;
          color: #DADADA; /* Gris clair */
          opacity: 0;
          animation: fadeInText 1.5s ease forwards;
          animation-delay: 0.5s;
        }
        @keyframes fadeInText {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .highlight {
          color: #00FFFF; /* Cyan léger */
          font-weight: 600;
        }

        /* BOUTON */
        .about-text-box button {
          margin-top: 22px;
          width: 200px;
          padding: 12px;
          background: #00B3CC; /* Cyan sobre */
          color: #0B2A34; /* texte sombre */
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 179, 204, 0.4);
          transition: all 0.3s ease;
        }
        .about-text-box button:hover {
          background: #0099AA;
          box-shadow: 0 8px 25px rgba(0, 153, 170, 0.5);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-rectangle {
            flex-direction: column;
            height: auto;
          }
          .about-photo-box {
            width: 100%;
            height: 240px;
          }
          .about-text-box {
            width: 100%;
            padding: 20px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
