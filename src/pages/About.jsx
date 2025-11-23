import React from "react";
import Navbar from "../components/Navbar";
import profilePhoto from "../assets/portrait.jpg"; // Remplace par ta photo

export default function About() {
  return (
    <div className="min-h-screen w-full font-sans relative" style={{ background: "#0b0b0b" }}>
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between py-32 px-6 gap-12">

        {/* Texte */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 electric-title">
            À propos de moi
          </h1>

          <p className="text-lg leading-8 mb-4 opacity-90">
            Je suis <span className="text-cyan-400 font-semibold">Kaci Belloul</span>, ingénieur en <span className="text-yellow-400 font-semibold">réseaux électriques</span>,
            passionné par les systèmes intelligents et l’automatisation.
          </p>

          <p className="text-lg leading-8 mb-4 opacity-90">
            Mon expertise couvre : conception de réseaux électriques, optimisation énergétique,
            systèmes embarqués, analyse de données et développement web/mobile pour le contrôle et la supervision.
          </p>

          <p className="text-lg leading-8 mb-6 opacity-90">
            Ce portfolio présente mon parcours, mes compétences et mes projets liés au domaine électrique et technologique.
          </p>

          <button className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
            Télécharger mon CV
          </button>
        </div>

        {/* Photo */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={profilePhoto} 
            alt="Kaci Belloul" 
            className="rounded-xl shadow-2xl w-72 md:w-96 object-cover"
          />
        </div>

      </div>

      {/* Effet électrique sur le titre */}
      <style>{`
        @keyframes electric {
          0%, 100% { color: cyan; text-shadow: 0 0 8px cyan, 0 0 16px cyan; }
          25% { color: yellow; text-shadow: 0 0 10px yellow, 0 0 20px yellow; }
          50% { color: cyan; text-shadow: 0 0 8px cyan, 0 0 16px cyan; }
          75% { color: yellow; text-shadow: 0 0 10px yellow, 0 0 20px yellow; }
        }

        .electric-title {
          animation: electric 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
