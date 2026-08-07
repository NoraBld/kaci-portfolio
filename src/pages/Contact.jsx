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
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .contact-page {
    min-height: 100vh;
    background: #001f3f;
    color: #F5F5F5;
    padding: 90px 20px 40px;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .contact-title {
    font-size: 2.5rem;
    color: #1e90ff;
    text-shadow: 0 0 12px #1e90ff;
    margin-bottom: 40px;
    text-align: center;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1000px;
  }

  .contact-box {
    background: rgba(30, 144, 255, 0.1);
    padding: 25px 20px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 1.1rem;
    color: #F5F5F5;
    box-shadow: 0 8px 30px rgba(30, 144, 255, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    word-break: break-word;
  }

  .contact-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(30, 144, 255, 0.5);
  }

  .icon {
    color: #1e90ff;
    font-size: 28px;
  }

  .social-box a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #F5F5F5;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .social-box a:hover {
    color: #1e90ff;
  }

  .contact-box span {
    word-break: break-word;
    text-align: center;
  }

  /* Tablette */
  @media (max-width: 768px) {
    .contact-title {
      font-size: 2rem;
      margin-bottom: 30px;
    }

    .contact-grid {
      gap: 20px;
    }

    .contact-box {
      padding: 20px;
      font-size: 1rem;
    }

    .icon,
    .social-box svg {
      font-size: 24px;
    }
  }

  /* Téléphone */
  @media (max-width: 480px) {
    .contact-page {
      padding: 80px 15px 30px;
    }

    .contact-title {
      font-size: 1.7rem;
    }

    .contact-box {
      padding: 18px;
      font-size: 0.95rem;
    }

    .icon,
    .social-box svg {
      font-size: 22px;
    }
  }
`}</style>

    </div>
  );
}
