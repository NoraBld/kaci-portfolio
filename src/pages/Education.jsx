// import React from "react";
// import Navbar from "../components/Navbar";
// import { FaGraduationCap } from "react-icons/fa";
// import logoUniv1 from "../assets/logo1.jpeg";
// import logoUniv2 from "../assets/logo2.png";

// export default function Education() {
//   const diplomas = [
//     {
//       title: "Master 2",
//       specialization: "Électrotechnique, option réseaux électriques",
//       university: "Université de Béjaïa",
//       country: "Algérie",
//       period: "2025 → 2026",
//       description: [
//         "Projets sur les réseaux électriques intelligents (Smart Grids).",
//         "Analyse et optimisation de systèmes de distribution électrique.",
//         "Simulation de systèmes d’électronique de puissance."
//       ],
//       tags: ["Électrotechnique de puissance avancée", "Smart Grids", "Réseaux de transport et de distribution","Maintenance industrielle"],
//       logo: logoUniv1,
//     },
//     {
//       title: "Master 1",
//       specialization: "Electrotechnique",
//       university: "Université de Béjaïa",
//       country: "Algérie",
//       period: "2024 → 2025",
//       description: [
//         "Maintenance et installation de systèmes électriques.",
//         "Études de circuits et machines électriques.",
//         "Participation à des projets d’automatisation industrielle."
//       ],
//       tags: ["Machines électriques avancées", "énergies renouvelables", "Micro processeur", "Micro controleurs", "Informatique industrielle"],
//       logo: logoUniv2,
//     },
// {
//   title: "Licence",
//   specialization: "Science et technologies, option Électrotechnique",
//   university: "Université de Béjaïa",
//   country: "Algérie",
//   period: "2021 → 2024",
//   description: [
//     "Acquisition des bases fondamentales en électrotechnique et électronique.",
//     "Travaux pratiques sur circuits électriques et machines électriques.",
//     "Initiation à l’automatisation et aux systèmes industriels.",
//     "Participation à de petits projets techniques et études de cas."
//   ],
//   tags: [
//     "Électrotechnique",
//     "Circuits électriques",
//     "Machines électriques",
//     "Automatisation industrielle",
//     "Électronique"
//   ],
//   logo: logoUniv2,
// },
//   ]

//   return (
//     <div className="education-page">
//       <Navbar />
//       <h1 className="education-title">
//         <FaGraduationCap className="icon-cap" /> Mon parcours éducatif
//       </h1>

//       <div className="education-container">
//         <div className="timeline-line"></div>

//         {diplomas.map((d, index) => (
//           <div key={index} className="education-item">
//             <div className="bubble">
//               <img src={d.logo} alt={d.university} />
//             </div>

//             <div className="description">
//               <div className="title-period">
//                 <h3>{d.title} – {d.specialization}</h3>
//                 <span className="period-right">{d.period}</span>
//               </div>
//               <p className="university">{d.university}, {d.country}</p>
//               <ul>
//                 {d.description.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//               <div className="tags">
//                 {d.tags.map((tag, i) => (
//                   <span key={i} className="tag">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .education-page {
//           min-height: 100vh;
//           background: #0B2A34;
//           color: #F5F5F5;
//           padding-top: 70px;
//           font-family: 'Segoe UI', sans-serif;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .education-title {
//           font-size: 2.8rem;
//           color: cyan;
//           text-shadow: 0 0 14px cyan;
//           margin-bottom: 50px;
//           display: flex;
//           align-items: center;
//         }

//         .icon-cap {
//           margin-right: 10px;
//         }

//         .education-container {
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           width: 95%;
//           max-width: 1200px;
//           margin: 0 auto 50px auto;
//         }

//         .timeline-line {
//           position: absolute;
//           top: 50px;
//           left: 60px;
//           width: 5px;
//           height: calc(100% - 50px);
//           background: cyan;
//           z-index: 1;
//           border-radius: 2px;
//         }

//         .education-item {
//           display: flex;
//           align-items: flex-start;
//           margin-bottom: 80px;
//           position: relative;
//         }

//         .bubble {
//           position: relative;
//           width: 90px;
//           height: 90px;
//           border-radius: 50%;
//           background: rgba(0,255,255,0.1);
//           border: 3px solid cyan;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 2;
//           flex-shrink: 0;
//         }

//         .bubble img {
//           width: 70px;
//           height: 70px;
//           border-radius: 50%;
//           z-index: 3;
//         }

//         .bubble::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: #0B2A34;
//           border-radius: 50%;
//           z-index: 2;
//         }

//         .description {
//           margin-left: 160px;
//           background: rgba(0,255,255,0.1);
//           padding: 30px 35px;
//           border-radius: 14px;
//           transition: transform 0.3s, box-shadow 0.3s;
//           width: 80%;
//         }

//         .description:hover {
//           transform: translateX(5px);
//           box-shadow: 0 10px 30px rgba(0,255,255,0.6);
//         }

//         .title-period {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           border-bottom: 1px solid rgba(255,255,255,0.2);
//           padding-bottom: 8px;
//           margin-bottom: 12px;
//         }

//         .description h3 {
//           font-size: 1.6rem;
//           margin: 0;
//         }

//         .period-right {
//           font-style: italic;
//           color: #aaa;
//           font-size: 0.95rem;
//         }

//         .description .university {
//           font-weight: bold;
//           color: cyan;
//           margin: 8px 0 12px 0;
//         }

//         .description ul {
//           padding-left: 25px;
//           margin-bottom: 12px;
//         }

//         .description li {
//           margin-bottom: 6px;
//           line-height: 1.6;
//         }

//         .tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//         }

//         .tag {
//           background: cyan;
//           color: #0B2A34;
//           padding: 6px 14px;
//           border-radius: 6px;
//           font-size: 0.95rem;
//           font-weight: bold;
//         }

//         /* Responsive Tablette */
//         @media (max-width: 1024px) {
//           .education-container {
//             width: 95%;
//           }
//           .description {
//             width: 100%;
//             margin-left: 0;
//           }
//           .education-item {
//             flex-direction: column;
//             margin-bottom: 60px;
//           }
//           .bubble {
//             margin-bottom: 20px;
//             align-self: flex-start;
//           }
//           .title-period {
//             flex-direction: column;
//             align-items: flex-start;
//             border-bottom: none;
//             margin-bottom: 8px;
//           }
//           .period-right {
//             margin-top: 5px;
//           }
//         }

//         /* Responsive Mobile */
//         @media (max-width: 600px) {
//           .education-title {
//             font-size: 2.2rem;
//           }
//           .icon-cap {
//             font-size: 1.5rem;
//           }
//           .bubble {
//             width: 70px;
//             height: 70px;
//           }
//           .bubble img {
//             width: 50px;
//             height: 50px;
//           }
//           .description {
//             padding: 20px 25px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

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
  tags: [
    "Électrotechnique",
    "Circuits électriques",
    "Machines électriques",
    "Automatisation industrielle",
    "Électronique"
  ],
  logo: logoUniv,
},
  ]

  return (
    <div className="education-page">
      <Navbar />
      <h1 className="education-title">
        <FaGraduationCap className="icon-cap" /> Mon parcours éducatif
      </h1>

      <div className="education-container">
        <div className="timeline-line"></div>

        {diplomas.map((d, index) => (
          <div key={index} className="education-item">
            <div className="bubble">
              <img src={d.logo} alt={d.university} />
            </div>

            <div className="description">
              <div className="title-period">
                <h3>{d.title} – {d.specialization}</h3>
                <span className="period-right">{d.period}</span>
              </div>
              <p className="university">{d.university}, {d.country}</p>
              <ul>
                {d.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {d.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .education-page {
          min-height: 100vh;
          background: #0B2A34;
          color: #F5F5F5;
          padding-top: 70px;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .education-title {
          font-size: 2.8rem;
          color: cyan;
          text-shadow: 0 0 14px cyan;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
        }

        .icon-cap {
          margin-right: 10px;
        }

        .education-container {
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
          background: cyan;
          z-index: 1;
          border-radius: 2px;
        }

        .education-item {
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
          background: rgba(0,255,255,0.1);
          border: 3px solid cyan;
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
          width: 100%;
          height: 100%;
          background: #0B2A34;
          border-radius: 50%;
          z-index: 2;
        }

        .description {
          margin-left: 160px;
          background: rgba(0,255,255,0.1);
          padding: 30px 35px;
          border-radius: 14px;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 80%;
        }

        .description:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(0,255,255,0.6);
        }

        .title-period {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 8px;
          margin-bottom: 12px;
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

        .description .university {
          font-weight: bold;
          color: cyan;
          margin: 8px 0 12px 0;
        }

        .description ul {
          padding-left: 25px;
          margin-bottom: 12px;
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
          background: cyan;
          color: #0B2A34;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: bold;
        }

        /* Responsive Tablette */
        @media (max-width: 1024px) {
          .education-container {
            width: 95%;
          }
          .description {
            width: 100%;
            margin-left: 0;
          }
          .education-item {
            flex-direction: column;
            margin-bottom: 60px;
          }
          .bubble {
            margin-bottom: 20px;
            align-self: flex-start;
          }
          .title-period {
            flex-direction: column;
            align-items: flex-start;
            border-bottom: none;
            margin-bottom: 8px;
          }
          .period-right {
            margin-top: 5px;
          }
        }

        /* Responsive Mobile */
        @media (max-width: 600px) {
          .education-title {
            font-size: 2.2rem;
          }
          .icon-cap {
            font-size: 1.5rem;
          }
          .bubble {
            width: 70px;
            height: 70px;
          }
          .bubble img {
            width: 50px;
            height: 50px;
          }
          .description {
            padding: 20px 25px;
          }
        }
      `}</style>
    </div>
  );
}

