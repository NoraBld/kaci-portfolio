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
          <p>
            Je suis <span className="highlight">Kaci Belloul</span>, ingénieur spécialisé en{" "}
            <span className="highlight">réseaux électriques</span>. Passionné par l’innovation, 
            l’optimisation énergétique et les systèmes intelligents.
          </p>
          <button>Télécharger mon CV</button>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills-section">
        <h2 className="skills-title">⚡ Logiciels & Outils Informatiques</h2>
        <div className="skills-container">
          <div className="skills-circles-row">
            <div className={`circle ${active === "logiciels" ? "active" : ""}`} onClick={() => setActive("logiciels")}><FaTools size={28} /><span>Logiciels</span></div>
            <div className={`circle ${active === "programmation" ? "active" : ""}`} onClick={() => setActive("programmation")}><FaLaptopCode size={28} /><span>Programmation</span></div>
            <div className={`circle ${active === "bureautique" ? "active" : ""}`} onClick={() => setActive("bureautique")}><FaKeyboard size={28} /><span>Bureautique</span></div>
            <div className={`circle ${active === "systeme" ? "active" : ""}`} onClick={() => setActive("systeme")}><FaWindows size={28} /><span>Systèmes</span></div>
          </div>
          <div key={active} className="skills-content slide">
            <h3>{active.toUpperCase()}</h3>
            <ul>
              {categories[active].map((item, i) => <li key={i}>{item}</li>)}
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
          {atouts.map((item, i) => <span key={i} className="atout">{item}</span>)}
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

      <style>{`
        .about-page { min-height: 100vh; background:#0B2A34; color:#F5F5F5; padding-top:140px; font-family:'Segoe UI', sans-serif; }

        /* ABOUT RECTANGLE */
        .about-rectangle { width:85%; max-width:1300px; height:340px; background: rgba(245,245,245,0.08); border-radius:16px; display:flex; gap:35px; padding:25px 30px; margin:0 auto 80px auto; box-shadow:0 8px 40px rgba(0,0,0,0.3); overflow:hidden; }
        .animated-left { animation: slideLeftZoom 1.2s ease-out forwards; }
        .animated-right { animation: slideRightFade 1.3s ease-out forwards; animation-delay:0.25s; }
        @keyframes slideLeftZoom {0%{transform:translateX(-80px) scale(0.95);opacity:0;}100%{transform:translateX(0) scale(1);opacity:1;}}
        @keyframes slideRightFade {0%{transform:translateX(50px);opacity:0;}100%{transform:translateX(0);opacity:1;}}
        .about-photo-box { width:32%; height:100%; position:relative; border-radius:12px; overflow:hidden; }
        .about-photo-box img { width:100%; height:100%; object-fit:cover; border-radius:12px; }
        .photo-halo { position:absolute; top:50%; left:50%; width:120%; height:120%; background:radial-gradient(circle, rgba(0,255,255,0.2),transparent 70%); transform:translate(-50%, -50%); border-radius:50%; filter:blur(25px); z-index:1; animation:pulseHalo 2.5s infinite; }
        @keyframes pulseHalo {0%,100%{transform:translate(-50%, -50%) scale(1);opacity:0.6;}50%{transform:translate(-50%, -50%) scale(1.05);opacity:0.9;}}
        .about-text-box { width:68%; display:flex; flex-direction:column; justify-content:center; padding-right:20px; }
        .about-text-box h1 { font-size:2rem; margin-bottom:12px; text-shadow:0 0 6px rgba(245,245,245,0.4); }
        .about-text-box p { font-size:1.1rem; line-height:1.5; color:#DADADA; }
        .highlight { color:cyan; font-weight:600; }
        .about-text-box button { margin-top:22px; width:200px; padding:12px; background:#00B3CC; color:#0B2A34; font-weight:700; border:none; border-radius:8px; cursor:pointer; transition:all 0.3s ease; box-shadow:0 6px 20px rgba(0,179,204,0.4); }
        .about-text-box button:hover { background:#0099AA; box-shadow:0 8px 25px rgba(0,153,170,0.5); }

        /* SKILLS */
        .skills-section { width:85%; margin:0 auto 100px auto; }
        .skills-title { text-align:center; font-size:2.2rem; margin-bottom:50px; text-shadow:0 0 12px cyan; }
        .skills-circles-row { display:flex; justify-content:center; gap:35px; margin-bottom:40px; flex-wrap:wrap; }
        .circle { width:130px; height:130px; border-radius:50%; background: linear-gradient(145deg, rgba(0,255,255,0.12), rgba(0,180,180,0.2)); border:2px solid cyan; display:flex; flex-direction:column; justify-content:center; align-items:center; cursor:pointer; transition:0.3s; text-align:center; color:white; font-weight:500; }
        .circle:hover { transform:scale(1.08); }
        .circle.active { background:cyan; color:#0B2A34; }
        .skills-content { width:70%; background: rgba(255,255,255,0.08); padding:25px; border-radius:12px; margin:auto; }
        .skills-content h3 { color:cyan; font-size:1.8rem; margin-bottom:15px; }
        .skills-content li { margin-bottom:10px; border-left:3px solid cyan; padding-left:10px; }

        /* LANGUES */
        .section-title { text-align:center; font-size:2rem; margin-bottom:30px; color:cyan; text-shadow:0 0 8px rgba(0,255,255,0.5);}
        .langues-list { display:flex; justify-content:center; flex-wrap:wrap; gap:25px; margin-bottom:60px; }
        .langue-item { background: rgba(0,255,255,0.1); padding:12px 20px; border-radius:12px; min-width:180px; text-align:center; font-weight:500; }
        .langue-nom { font-weight:700; }
        .langue-niveau { display:block; font-size:0.9rem; color:#DADADA; }

        /* ATOUTS */
        .atouts-list { display:flex; justify-content:center; flex-wrap:wrap; gap:15px; margin-bottom:60px; }
        .atout { background: cyan; color:#0B2A34; padding:10px 18px; border-radius:20px; font-weight:600; box-shadow:0 4px 15px rgba(0,255,255,0.3); }

        /* CENTRES */
        .centres-list { display:flex; justify-content:center; flex-wrap:wrap; gap:30px; margin-bottom:100px; }
        .centre-card-pro {
          width:220px;
          height:200px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          background: linear-gradient(145deg, rgba(0,179,204,0.3), rgba(0,255,255,0.15));
          border-radius:16px;
          box-shadow: 0 8px 20px rgba(0,255,255,0.3);
          transition: all 0.4s ease;
          text-align:center;
        }
        .centre-card-pro:hover { transform: scale(1.08); box-shadow:0 12px 30px rgba(0,255,255,0.5); }
        .centre-icon-pro { font-size:3rem; margin-bottom:12px; }
        .centre-nom { font-weight:600; color:white; }

        /* RESPONSIVE */
        @media(max-width:1024px){ .about-rectangle{gap:25px; padding:20px; height:auto;} .about-text-box{text-align:center; padding-right:0;} .skills-circles-row{gap:20px;} }
        @media(max-width:768px){ .about-rectangle{flex-direction:column;height:auto;} .about-photo-box{width:100%;height:280px;} .skills-content{width:100%;} .langues-list,.atouts-list,.centres-list{flex-direction:column; align-items:center;} .centre-card-pro{width:90%;} }
        @media(max-width:480px){ .skills-circles-row{flex-direction:column; gap:20px;} .circle{width:100px;height:100px;} .skills-content{width:95%; padding:15px;} .about-text-box h1{font-size:1.5rem;} .about-text-box p{font-size:1rem;} }
      `}</style>
    </div>
  );
}
