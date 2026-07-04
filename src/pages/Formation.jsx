import React from "react";
import Navbar from "../components/Navbar";
import { FaBook } from "react-icons/fa";

export default function Formation() {
  return (
    <div className="formation-page">
      <Navbar />

      <h1 className="section-title">
        <FaBook className="icon" /> Mes formations
      </h1>

      <div className="content">
        {/* Ajoute ici tes formations */}
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