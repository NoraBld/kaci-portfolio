import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profileImg from "../assets/KACI.jpg";
import { FaBolt, FaLaptopCode, FaTools, FaWindows, FaKeyboard } from "react-icons/fa";

export default function About() {
  const [active, setActive] = useState("logiciels");

  const categories = {
    logiciels: ["myEcodial", "PSIM", "MATLAB", "Simulink", "VHDL"],
    programmation: ["Langage C", "Microprocesseur (Emulator 8086)"],
    bureautique: ["Word", "Excel", "PowerPoint", "Latex"],
    systeme: ["Windows", "Linux Ubuntu", "Android"],
  };

  const langues = [
    { nom: "Anglais", niveau: "Anglais technique" },
    { nom: "Français", niveau: "Intermédiaire" },
    { nom: "Kabyle", niveau: "Langue maternelle" },
    { nom: "Arabe", niveau: "Langue maternelle" },
  ];

  const atouts = ["Autonome", "Curieux", "Ambitieux", "Capacité de travailler en équipe"];

  const centres = [
    { nom: "Sports cyclistes Club VCB Béjaia", icon: "🚴" },
    { nom: "Randonnée", icon: "🥾" },
    { nom: "Voyage", icon: "✈️" },
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* ABOUT RECTANGLE */}
      <div className="about-rectangle">
        <div className="about-photo-box animated-left">
          <div className="photo-halo"></div>
          <img src={profileImg} alt="Profil" />
        </div>

        <div className="about-text-box animated-right">
          <h1>À propos de moi</h1>
          <p className="description">
            Je suis <span className="highlight">Kaci Belloul</span>, Ingénieur en
            électrotechnique – réseaux électriques, avec des expériences pratiques
            chez <span className="highlight">SONATRACH</span> et{" "}
            <span className="highlight">SONELGAZ</span> dans la maintenance, les
            installations électriques et l’analyse technique. Passionné par les
            <span className="highlight"> Smart Grids</span>, l’électronique de
            puissance et la fiabilité des systèmes. Auteur d’un projet complet de
            capteur cardiaque optique avec affichage numérique.
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills-section">
        <h2 className="skills-title">⚡ Logiciels & Outils Informatiques</h2>
        <div className="skills-container">
          <div className="skills-circles-row">
            <div
              className={`circle ${active === "logiciels" ? "active" : ""}`}
              onClick={() => setActive("logiciels")}
            >
              <FaTools size={28} />
              <span>Logiciels</span>
            </div>
            <div
              className={`circle ${active === "programmation" ? "active" : ""}`}
              onClick={() => setActive("programmation")}
            >
              <FaLaptopCode size={28} />
              <span>Programmation</span>
            </div>
            <div
              className={`circle ${active === "bureautique" ? "active" : ""}`}
              onClick={() => setActive("bureautique")}
            >
              <FaKeyboard size={28} />
              <span>Bureautique</span>
            </div>
            <div
              className={`circle ${active === "systeme" ? "active" : ""}`}
              onClick={() => setActive("systeme")}
            >
              <FaWindows size={28} />
              <span>Systèmes</span>
            </div>
          </div>
          <div key={active} className="skills-content slide">
            <h3>{active.toUpperCase()}</h3>
            <ul>
              {categories[active].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* LANGUES */}
      <div className="langues-section">
        <h2 className="section-title">🌐 Langues</h2>
        <div className="langues-list">
          {langues.map((lang, i) => (
            <div key={i} className="langue-item">
              <span className="langue-nom">{lang.nom}</span>
              <span className="langue-niveau">{lang.niveau}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ATOUTS */}
      <div className="atouts-section">
        <h2 className="section-title">🏆 Atouts</h2>
        <div className="atouts-list">
          {atouts.map((item, i) => (
            <span key={i} className="atout">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CENTRES D’INTERET */}
      <div className="centres-section">
        <h2 className="section-title">🎯 Centres d’intérêt</h2>
        <div className="centres-list">
          {centres.map((c, i) => (
            <div key={i} className="centre-card-pro">
              <span className="centre-icon-pro">{c.icon}</span>
              <span className="centre-nom">{c.nom}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .about-page { 
          min-height: 100vh; 
          background:#001f3f; /* Bleu électrique foncé */ 
          color:#F5F5F5; 
          padding-top:140px; 
          font-family:'Segoe UI', sans-serif; 
        }

        .about-rectangle { 
          width:85%; 
          max-width:1300px; 
          height:340px; 
          background: #00264d; /* Bleu plus clair */ 
          border-radius:16px; 
          display:flex; 
          gap:35px; 
          padding:25px 30px; 
          margin:0 auto 80px auto; 
          box-shadow:0 8px 40px rgba(0,0,0,0.3); 
          overflow:hidden; 
        }

        .animated-left { animation: slideLeftZoom 1.2s ease-out forwards; }
        .animated-right { animation: slideRightFade 1.3s ease-out forwards; animation-delay:0.25s; }
        @keyframes slideLeftZoom {0%{transform:translateX(-80px) scale(0.95);opacity:0;}100%{transform:translateX(0) scale(1);opacity:1;}}
        @keyframes slideRightFade {0%{transform:translateX(50px);opacity:0;}100%{transform:translateX(0);opacity:1;}}

        .about-photo-box { width:32%; height:100%; position:relative; border-radius:12px; overflow:hidden; }
        .about-photo-box img { width:100%; height:100%; object-fit:cover; border-radius:12px; }
        .photo-halo { position:absolute; top:50%; left:50%; width:120%; height:120%; background:radial-gradient(circle, rgba(30,144,255,0.2),transparent 70%); transform:translate(-50%, -50%); border-radius:50%; filter:blur(25px); z-index:1; animation:pulseHalo 2.5s infinite; }
        @keyframes pulseHalo {0%,100%{transform:translate(-50%, -50%) scale(1);opacity:0.6;}50%{transform:translate(-50%, -50%) scale(1.05);opacity:0.9;}}

        .about-text-box { width:68%; display:flex; flex-direction:column; justify-content:center; padding-right:20px; }
        .about-text-box h1 { font-size:2rem; margin-bottom:12px; text-shadow:0 0 6px rgba(30,144,255,0.6); }
        .about-text-box p { font-size:1.1rem; line-height:1.5; color:#DADADA; }
        .highlight { color:#1e90ff; font-weight:600; }

        .skills-section { width:85%; margin:0 auto 100px auto; }
        .skills-title { text-align:center; font-size:2.2rem; margin-bottom:50px; text-shadow:0 0 12px #1e90ff; }
        .skills-circles-row { display:flex; justify-content:center; gap:35px; margin-bottom:40px; flex-wrap:wrap; }
        .circle { width:130px; height:130px; border-radius:50%; background: linear-gradient(145deg, rgba(30,144,255,0.12), rgba(30,144,255,0.2)); border:2px solid #1e90ff; display:flex; flex-direction:column; justify-content:center; align-items:center; cursor:pointer; transition:0.3s; text-align:center; color:white; font-weight:500; }
        .circle:hover { transform:scale(1.08); }
        .circle.active { background:#1e90ff; color:#001f3f; }
        .skills-content { width:70%; background: rgba(30,144,255,0.08); padding:25px; border-radius:12px; margin:auto; }
        .skills-content h3 { color:#1e90ff; font-size:1.8rem; margin-bottom:15px; }
        .skills-content li { margin-bottom:10px; border-left:3px solid #1e90ff; padding-left:10px; }

        .section-title { text-align:center; font-size:2rem; margin-bottom:30px; color:#1e90ff; text-shadow:0 0 8px rgba(30,144,255,0.5);}
        .langues-list { display:flex; justify-content:center; flex-wrap:wrap; gap:25px; margin-bottom:60px; }
        .langue-item { background: rgba(30,144,255,0.1); padding:12px 20px; border-radius:12px; min-width:180px; text-align:center; font-weight:500; }
        .langue-nom { font-weight:700; }
        .langue-niveau { display:block; font-size:0.9rem; color:#DADADA; }

        .atouts-list { display:flex; justify-content:center; flex-wrap:wrap; gap:15px; margin-bottom:60px; }
        .atout { background: #1e90ff; color:#001f3f; padding:10px 18px; border-radius:20px; font-weight:600; box-shadow:0 4px 15px rgba(30,144,255,0.3); }

        .centres-list { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-bottom:100px; }
        .centre-card-pro { width:220px; height:200px; display:flex; flex-direction:column; justify-content:center; align-items:center; background: linear-gradient(145deg, rgba(30,144,255,0.3), rgba(30,144,255,0.15)); border-radius:16px; box-shadow: 0 8px 20px rgba(30,144,255,0.3); transition: all 0.4s ease; text-align:center; }
        .centre-card-pro:hover { transform: scale(1.08); box-shadow:0 12px 30px rgba(30,144,255,0.5); }
        .centre-icon-pro { font-size:3rem; margin-bottom:12px; }
        .centre-nom { font-weight:600; color:white; }

        @media(max-width:1024px){ .about-rectangle{gap:25px; padding:20px; height:auto;} .about-text-box{text-align:center; padding-right:0;} .skills-circles-row{gap:20px;} }
        @media(max-width:768px){ .about-rectangle{flex-direction:column;height:auto;} .about-photo-box{width:100%;height:280px;} .skills-content{width:100%;} .langues-list,.atouts-list,.centres-list{flex-direction:column; align-items:center;} .centre-card-pro{width:90%;} }
        @media(max-width:480px){ .skills-circles-row{flex-direction:column; gap:20px;} .circle{width:100px;height:100px;} .skills-content{width:95%; padding:15px;} .about-text-box h1{font-size:1.5rem;} .about-text-box p{font-size:1rem;} }
      `}</style>
    </div>
  );
}
