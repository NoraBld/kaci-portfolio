import React from "react";
import Navbar from "../components/Navbar";
import { FaGraduationCap } from "react-icons/fa";
import logoUniv from "../assets/logouniv.png";

export default function Education() {
  const diplomas = [
    {
      title: "Master 2",
      specialization: "Électrotechnique, option réseaux électriques",
      university: "Université de Béjaïa",
      country: "Algérie",
      period: "2025 → 2026",
      description: [
        "Projets sur les réseaux électriques intelligents (Smart Grids).",
        "Analyse et optimisation de systèmes de distribution électrique.",
        "Simulation de systèmes d’électronique de puissance."
      ],
      tags: ["Électrotechnique de puissance avancée", "Smart Grids", "Réseaux de transport et de distribution","Maintenance industrielle"],
      logo: logoUniv,
    },
    {
      title: "Master 1",
      specialization: "Electrotechnique",
      university: "Université de Béjaïa",
      country: "Algérie",
      period: "2024 → 2025",
      description: [
        "Maintenance et installation de systèmes électriques.",
        "Études de circuits et machines électriques.",
        "Participation à des projets d’automatisation industrielle."
      ],
      tags: ["Machines électriques avancées", "énergies renouvelables", "Micro processeur", "Micro controleurs", "Informatique industrielle"],
      logo: logoUniv,
    },
    {
      title: "Licence",
      specialization: "Science et technologies, option Électrotechnique",
      university: "Université de Béjaïa",
      country: "Algérie",
      period: "2021 → 2024",
      description: [
        "Acquisition des bases fondamentales en électrotechnique et électronique.",
        "Travaux pratiques sur circuits électriques et machines électriques.",
        "Initiation à l’automatisation et aux systèmes industriels.",
        "Participation à de petits projets techniques et études de cas."
      ],
      tags: ["Électrotechnique","Circuits électriques","Machines électriques","Automatisation industrielle","Électronique"],
      logo: logoUniv,
    },
  ];

  return (
    <div className="education-page">
      <Navbar />
      <h1 className="section-title">
        <FaGraduationCap className="icon" /> Mon parcours académique
      </h1>
      

      <div className="timeline-container">
        {diplomas.map((d, index) => (
          <div key={index} className="timeline-item">
            <div className="logo-inside">
              <img src={d.logo} alt={d.university} />
            </div>
            <div className="description">
              <div className="title-period">
                <h3>{d.title} – {d.specialization}</h3>
                <span className="period-right">{d.period}</span>
              </div>
              <p className="company">{d.university}, {d.country}</p>
              <ul>
                {d.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="tags">{d.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .education-page {
          min-height: 100vh;
          background: #001f3f;
          color: #F5F5F5;
          padding-top: 70px;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-title {
          font-size: 2.8rem;
          color: #1e90ff;
          text-shadow: 0 0 14px #1e90ff;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
        }
        .icon { margin-right: 10px; }

        .timeline-container {
          display: flex;
          flex-direction: column;
          width: 95%;
          max-width: 1200px;
          margin-bottom: 50px;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 50px;
        }

        .logo-inside {
          width: 70px;
          height: 70px;
          margin-right: 25px;
          flex-shrink: 0;
        }

        .logo-inside img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid #1e90ff;
        }

        .description {
          background: rgba(30,144,255,0.1);
          padding: 25px 30px;
          border-radius: 14px;
          transition: transform 0.3s, box-shadow 0.3s;
          flex: 1;
        }

        .description:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(30,144,255,0.6);
        }

        .title-period {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .description h3 { font-size: 1.6rem; margin: 0; }
        .period-right { font-style: italic; color: #aaa; font-size: 0.95rem; }
        .company { font-weight: bold; color: #1e90ff; margin: 8px 0 12px 0; }
        .description ul { padding-left: 25px; margin-bottom: 12px; }
        .description li { margin-bottom: 6px; line-height: 1.6; }
        .tags { display: flex; flex-wrap: wrap; gap: 12px; }
        .tag { background: #1e90ff; color: #001f3f; padding: 6px 14px; border-radius: 6px; font-size: 0.95rem; font-weight: bold; }

        /* Tablette */
        @media (max-width: 1024px) {
          .logo-inside { width: 60px; height: 60px; margin-right: 20px; }
          .description { padding: 20px 25px; }
          .title-period { flex-direction: column; align-items: flex-start; border-bottom: none; margin-bottom: 8px; }
          .period-right { margin-top: 5px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .section-title { font-size: 2.4rem; }
          .icon { font-size: 5rem; margin-right: 10px; }
          .logo-inside { width: 50px; height: 50px; margin-right: 15px; }
          .description { padding: 15px 20px; }
          .description h3 { font-size: 1.3rem; }
          .description ul { padding-left: 20px; }
          .tags { gap: 8px; }
          .tag { font-size: 0.85rem; padding: 5px 10px; }
        }
      `}</style>
    </div>
  );
}
