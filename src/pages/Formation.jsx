import React from "react";
import Navbar from "../components/Navbar";
import { FaBook } from "react-icons/fa";
import logocfpa from "../assets/logocfpa.png";
export default function Formation() {
   const formation = [
  {
    title: "Certificat de qualification professionnelle",
   
    qualification: "Montage et câblage électrique",
    company: "Algérie , Béjaia CFPA Younes Lakhal",
    period: "2026/02/22 → 2026/05/21",
    description: [
      "Formation professionnelle de 3 mois en montage et câblage électrique.",
      "Réalisation de montages et de câblages électriques.",
      "Lecture et interprétation des schémas électriques.",
      "Installation, raccordement et mise en service d'équipements électriques.",
      "Respect des normes de sécurité électrique.",
      "Utilisation des outils et appareils de mesure.",
      "Maintenance et diagnostic des installations électriques."
    ],
    tags: [
      "Montage électrique",
      "Câblage électrique",
      "Lecture de schémas",
      "Installation électrique",
      "Maintenance",
      "Diagnostic",
      "Sécurité électrique",
      "Équipements électriques"
    ],
    logo: logocfpa,
  },
];
  return (
    <div className="formation-page">
      <Navbar />

      <h1 className="section-title">
        <FaBook className="icon" /> Mes formations
      </h1>

      <div className="timeline-container">
  {formation.map((f, index) => (
    <div key={index} className="timeline-item">
      <div className="logo-inside">
        <img src={f.logo} alt={f.title} />
      </div>

      <div className="description">
        <div className="title-period">
          <h3>{f.title}</h3>
          <span className="period-right">{f.period}</span>
        </div>

        <p className="company">
  {f.company}
</p>

        <p className="qualification">
          <strong>Qualification :</strong> {f.qualification}
        </p>

        <p className="country">{f.country}</p>

        <ul>
          {f.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="tags">
          {f.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      <style>{`
        .formation-page {
          min-height: 100vh;
          background: #001f3f;
          color: #F5F5F5;
          padding-top: 70px;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
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
  background: rgba(30, 144, 255, 0.1);
  padding: 25px 30px;
  border-radius: 14px;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;
}

.description:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(30, 144, 255, 0.6);
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

.description h3 {
  font-size: 1.6rem;
  margin: 0;
}

.period-right {
  font-style: italic;
  color: #aaa;
  font-size: 0.95rem;
}

.company {
  font-weight: bold;
  color: #1e90ff;
  margin: 8px 0;
}

.qualification {
  margin-bottom: 8px;
  color: #ddd;
}

.country {
  color: #aaa;
  margin-bottom: 15px;
}

.description ul {
  padding-left: 25px;
  margin-bottom: 15px;
}

.description li {
  margin-bottom: 6px;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background: #1e90ff;
  color: #001f3f;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: bold;
}

/* Tablette */
@media (max-width: 1024px) {
  .logo-inside {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  .description {
    padding: 20px 25px;
  }

  .title-period {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;
  }

  .period-right {
    margin-top: 5px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .section-title {
    font-size: 2.4rem;
  }

  .icon {
    font-size: 2.5rem;
  }

  .logo-inside {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .description {
    padding: 15px 20px;
  }

  .description h3 {
    font-size: 1.3rem;
  }

  .description ul {
    padding-left: 20px;
  }

  .tags {
    gap: 8px;
  }

  .tag {
    font-size: 0.85rem;
    padding: 5px 10px;
  }
}
        .section-title {
          font-size: 2.8rem;
          color: #1e90ff;
          text-shadow: 0 0 14px #1e90ff;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
        }

        .icon {
          margin-right: 10px;
        }

        .content {
          width: 95%;
          max-width: 1200px;
          margin-bottom: 50px;
        }

        /* Tablette */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 2.5rem;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .section-title {
            font-size: 2rem;
            text-align: center;
          }

          .icon {
            font-size: 2.5rem;
          }

          .content {
            width: 92%;
          }
        }
      `}</style>
    </div>
  );
}