import React from "react";
import Navbar from "../components/Navbar";
import { FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import stageLogo from "../assets/logo1.jpeg";
import sonalogo from "../assets/logosona.png";
import logoUniv from "../assets/logouniv.png";

export default function Experience() {
  const stages = [
    {
      title: "Stage du Master 2",
      specialization: "Maintenance industrielle",
      company: "SONATRACH Hossi Messaoud",
      country: "Algérie",
      period: "Décembre 2025 → Janvier 2026",
      description: [
        "Stage de 4 semaines chez l'entreprise nationale des Forages, filiale du groupe pétrolier SONATRACH.",
        "Sujet : maintenance des équipements pétroliers.",
        "Participation aux visites de maintenance préventive et rédaction de rapports d'interventions.",
        "Consultations et choix des fournisseurs des équipements électriques (fiches techniques, livraisons, devis...).",
        "Rédaction du rapport de stage."
      ],
      tags: ["Maintenance industrielle", "Équipements pétroliers", "Audit technique", "Fournisseurs"],
      logo: sonalogo,
    },
    {
      title: "Stage Technicien en électrotechnique industrielle",
      specialization: "Électrotechnique industrielle",
      company: "SONELGAZ Bejaia",
      country: "Algérie",
      period: "Juillet 2024 → Août 2024",
      description: [
        "Stage fin de Licence : 4 semaines dans le centre de production électrique SONELGAZ Amizour.",
        "Réalisation des visites techniques sur terrain pour découvrir les installations.",
        "Participation à la mise en service des nouvelles installations électriques.",
        "Rédaction d'un rapport de stage pour la soutenance de fin de Licence."
      ],
      tags: ["Électrotechnique industrielle", "Visites techniques", "Mise en service", "Rapport de stage"],
      logo: stageLogo,
    },
  ];

  const projects = [
    {
      title: "Projet Electronique : Capteur optique",
      specialization: "Mesure des battements cardiaques",
      company: "Laboratoire Electronique, Université de Béjaïa",
      country: "Algérie",
      period: "Avril 2023 → Juin 2023",
      description: [
        "Conception de circuits électroniques analogique et numérique.",
        "Affichage de la fréquence cardiaque en temps réel sur un écran numérique à deux chiffres (0 à 99 bpm).",
        "Tests et validation du système dans des conditions réelles."
      ],
      tags: ["Électronique analogique", "Électronique numérique", "Capteurs optiques", "Affichage numérique"],
      logo: logoUniv,
    },
  ];

  return (
    <div className="experience-page">
      <Navbar />

      {/* Section Stages */}
      <h1 className="section-title">
        <FaBriefcase className="icon" /> Mes stages
      </h1>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {stages.map((s, index) => (
          <div key={index} className="timeline-item">
            <div className="bubble">
              <img src={s.logo} alt={s.company} />
            </div>
            <div className="description">
              <div className="title-period">
                <h3>{s.title} – {s.specialization}</h3>
                <span className="period-right">{s.period}</span>
              </div>
              <p className="company">{s.company}, {s.country}</p>
              <ul>
                {s.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="tags">{s.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Projets */}
      <h1 className="section-title">
        <FaProjectDiagram className="icon" /> Mes projets
      </h1>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {projects.map((p, index) => (
          <div key={index} className="timeline-item">
            <div className="bubble">
              <img src={p.logo} alt={p.company} />
            </div>
            <div className="description">
              <div className="title-period">
                <h3>{p.title} – {p.specialization}</h3>
                <span className="period-right">{p.period}</span>
              </div>
              <p className="company">{p.company}, {p.country}</p>
              <ul>
                {p.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="tags">{p.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .experience-page {
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
          position: relative;
          display: flex;
          flex-direction: column;
          width: 95%;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }
        .timeline-line {
          position: absolute;
          top: 50px;
          left: 60px;
          width: 5px;
          height: calc(100% - 50px);
          background: #1e90ff;
          z-index: 1;
          border-radius: 2px;
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 80px;
          position: relative;
        }
        .bubble {
          position: relative;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(30,144,255,0.1);
          border: 3px solid #1e90ff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
          flex-shrink: 0;
        }
        .bubble img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          z-index: 3;
        }
        .bubble::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%; height: 100%;
          background: #001f3f; border-radius: 50%; z-index: 2;
        }
        .description {
          margin-left: 160px;
          background: rgba(30,144,255,0.1);
          padding: 30px 35px;
          border-radius: 14px;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 80%;
        }
        .description:hover { transform: translateX(5px); box-shadow: 0 10px 30px rgba(30,144,255,0.6); }
        .title-period { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 8px; margin-bottom: 12px; }
        .description h3 { font-size: 1.6rem; margin: 0; }
        .period-right { font-style: italic; color: #aaa; font-size: 0.95rem; }
        .company { font-weight: bold; color: #1e90ff; margin: 8px 0 12px 0; }
        .description ul { padding-left: 25px; margin-bottom: 12px; }
        .description li { margin-bottom: 6px; line-height: 1.6; }
        .tags { display: flex; flex-wrap: wrap; gap: 12px; }
        .tag { background: #1e90ff; color: #001f3f; padding: 6px 14px; border-radius: 6px; font-size: 0.95rem; font-weight: bold; }

        /* Tablette */
        @media (max-width: 1024px) {
          .timeline-item { flex-direction: column; margin-bottom: 60px; }
          .description { width: 100%; margin-left: 0; }
          .bubble { margin-bottom: 20px; align-self: flex-start; }
          .title-period { flex-direction: column; align-items: flex-start; border-bottom: none; margin-bottom: 8px; }
          .period-right { margin-top: 5px; }
          .timeline-line { left: 40px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .section-title { font-size: 2.2rem; }
          .icon { font-size: 1.5rem; }
          .bubble { width: 70px; height: 70px; }
          .bubble img { width: 50px; height: 50px; }
          .description { padding: 20px 25px; }
          .tags { gap: 8px; }
          .tag { font-size: 0.85rem; padding: 5px 10px; }
          .timeline-line { position: relative; left: 0; margin: 0 auto; width: 4px; height: 100%; }
        }
      `}</style>
    </div>
  );
}
