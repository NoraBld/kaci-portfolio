import React from "react";
import Navbar from "../components/Navbar";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <h1 className="contact-title">Contactez-moi</h1>

      <div className="contact-grid">
        {/* Email Box */}
        <div className="contact-box">
          <FaEnvelope size={28} className="icon" />
          <span>kacibelloul6@gmail.com</span>
        </div>

        {/* Phone Box */}
        <div className="contact-box">
          <FaPhone size={28} className="icon" />
          <span>+213 562 11 82 07</span>
        </div>

        {/* Location Box */}
        <div className="contact-box">
          <FaMapMarkerAlt size={28} className="icon" />
          <span>Béjaïa, Algérie</span>
        </div>

        {/* Facebook Box */}
        <div className="contact-box social-box">
          <a href="https://www.facebook.com/KaciBelloul" target="_blank" rel="noreferrer">
            <FaFacebook size={28} />
            <span>Facebook</span>
          </a>
        </div>

        {/* Instagram Box */}
        <div className="contact-box social-box">
          <a href="https://www.instagram.com/kacibelloul" target="_blank" rel="noreferrer">
            <FaInstagram size={28} />
            <span>Instagram</span>
          </a>
        </div>

        {/* LinkedIn Box */}
        <div className="contact-box social-box">
          <a href="https://www.linkedin.com/in/kaci-belloul-08251a38a/" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <style>{`
        body, html { overflow: hidden; height: 100%; }

        .contact-page {
          min-height: 100vh;
          background: #001f3f;
          color: #F5F5F5;
          padding-top: 70px;
          font-family: 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-title {
          font-size: 2.5rem;
          color: #1e90ff;
          text-shadow: 0 0 12px #1e90ff;
          margin-bottom: 50px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          width: 80%;
          max-width: 1000px;
        }

        .contact-box {
          background: rgba(30,144,255,0.1);
          padding: 25px 20px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 1.1rem;
          color: #F5F5F5;
          box-shadow: 0 8px 30px rgba(30,144,255,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .contact-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(30,144,255,0.5);
        }

        .icon { color: #1e90ff; }

        .social-box a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #F5F5F5;
          text-decoration: none;
          gap: 8px;
          transition: color 0.3s;
        }

        .social-box a:hover { color: #1e90ff; }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 20px; width: 90%; }
        }
      `}</style>
    </div>
  );
}
