import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaBolt,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaGraduationCap, label: "Education", to: "/education" },
    { icon: FaBriefcase, label: "Stages & Projets", to: "/projects" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>KACI</h1>
          <FaBolt className="logo-icon electric" />
        </div>

        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                className="nav-item"
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="link-icon" />
                <span className="link-text">{item.label}</span>
              </Link>
            );
          })}
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          color: white;
          background: rgba(0,31,63,0.2);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 2rem;
          backdrop-filter: blur(8px);
          position: relative;
        }

        .logo { display: flex; align-items: center; gap: 0.4rem; }
        .logo h1 { font-size: 1.8rem; font-weight: 800; text-shadow: 0 0 10px #1e90ff; }
        .logo-icon { font-size: 2rem; color: #1e90ff; text-shadow: 0 0 12px #1e90ff; animation: electric 1s infinite; }

        .nav-links { display: flex; gap: 1.5rem; font-weight: 800; list-style: none; }

        .nav-item {
          display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
          color: white; opacity: 1; animation: fadeIn 0.5s forwards;
          text-decoration: none;
        }

        .nav-item:hover .link-icon,
        .nav-item:hover .link-text { animation: electric 1s infinite; }

        .link-icon { font-size: 1.5rem; color: rgba(255,255,255,0.8); }
        .link-text { font-size: 1.1rem; color: rgba(255,255,255,0.8); }

        .menu-btn { display: none; cursor: pointer; z-index: 60; }

        @media (max-width: 768px) {
          .menu-btn { display: block; }

          .nav-links {
            position: fixed;
            top: 0; left: -100%;
            height: 100vh; width: 70%;
            flex-direction: column;
            background: rgba(0,31,63,0.95);
            padding: 2rem 1rem;
            gap: 2rem;
            transition: left 0.3s ease-in-out;
            z-index: 50;
          }

          .nav-links.open { left: 0; }

          .nav-item { font-size: 1.5rem; }

          .overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(0,0,0,0.5); opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 45;
          }
          .overlay.show { opacity: 1; pointer-events: auto; }
        }

        @keyframes electric {
          0%, 100% { color: #1e90ff; text-shadow: 0 0 15px #1e90ff; }
          25% { color: #00ffff; text-shadow: 0 0 25px #00ffff; }
          50% { color: #1e90ff; text-shadow: 0 0 20px #1e90ff; }
          75% { color: #00ffff; text-shadow: 0 0 25px #00ffff; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
