
// import React, { useState } from "react";
// import { FaHome, FaUserAlt, FaTools, FaFolderOpen, FaEnvelope, FaBolt, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

 
//   const links = [
//   { icon: FaHome, label: "Accueil", to: "/" },
//   { icon: FaUserAlt, label: "À propos", to: "/about" },
//   { icon: FaTools, label: "Compétences", to: "/skills" },
//   { icon: FaFolderOpen, label: "Projets", to: "/projects" },
//   { icon: FaEnvelope, label: "Contact", to: "/contact" },
// ];

//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
//       <div className="navbar-container">
//         <div className="logo">
//           <h1>KACI</h1>
//           <FaBolt className="logo-icon electric" />
//         </div>

//         <div className="menu-btn" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
//         </div>

//         {/* Overlay mobile avec transition fondu */}
//         <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {links.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <li
//                 key={index}
//                 className="nav-item"
//                 onClick={closeMenu}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <Icon className="link-icon" />
//                 <span className="link-text">{item.label}</span>
//               </li>
//             );
//           })}
//         </ul>

//         <button className="mode-btn" onClick={toggleDarkMode}>
//           {darkMode ? "☀️" : "🌙"}
//         </button>
//       </div>

//       <style>{`
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 50;
//           color: white;
//         }

//         .navbar.dark .navbar-container { background: rgba(0,0,0,0.2); }
//         .navbar.light .navbar-container { background: rgba(255,255,255,0.2); }

//         .navbar-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0.4rem 2rem;
//           backdrop-filter: blur(8px);
//           position: relative;
//         }

//         .logo { display: flex; align-items: center; gap: 0.4rem; }
//         .logo h1 { font-size: 1.8rem; font-weight: 800; text-shadow: 0 0 10px white; }
//         .logo-icon {
//           font-size: 2rem; color: cyan; text-shadow: 0 0 12px cyan; animation: electric 1s infinite;
//         }

//         .nav-links { display: flex; gap: 1.5rem; font-weight: 800; list-style: none; }

//         .nav-item {
//           display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
//           color: ${darkMode ? "white" : "#333"}; opacity: 1; animation: fadeIn 0.5s forwards;
//         }

//         .nav-item:hover .link-icon,
//         .nav-item:hover .link-text { animation: electric 1s infinite; }

//         .link-icon { font-size: 1.5rem; color: ${darkMode ? "white" : "rgba(0,0,0,0.5)"}; }
//         .link-text { font-size: 1.1rem; color: ${darkMode ? "white" : "rgba(0,0,0,0.5)"}; }

//         .menu-btn { display: none; cursor: pointer; z-index: 60; }

//         @media (max-width: 768px) {
//           .menu-btn { display: block; }

//           .nav-links {
//             position: fixed;
//             top: 0; left: -100%;
//             height: 100vh; width: 70%;
//             flex-direction: column;
//             background: ${darkMode ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)"};
//             padding: 2rem 1rem;
//             gap: 2rem;
//             transition: left 0.3s ease-in-out;
//             z-index: 50;
//           }

//           .nav-links.open { left: 0; }

//           .nav-item { font-size: 1.5rem; }

//           /* Overlay avec transition fondu */
//           .overlay {
//             position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
//             background: rgba(0,0,0,0.5); opacity: 0; pointer-events: none;
//             transition: opacity 0.3s ease;
//             z-index: 45;
//           }
//           .overlay.show { opacity: 1; pointer-events: auto; }
//         }

//         .mode-btn { background: transparent; border: none; cursor: pointer; font-size: 1.2rem; }

//         @keyframes electric {
//           0%, 100% { color: ${darkMode ? "cyan" : "yellow"}; text-shadow: 0 0 15px ${darkMode ? "cyan" : "yellow"}; }
//           25% { color: ${darkMode ? "yellow" : "cyan"}; text-shadow: 0 0 25px ${darkMode ? "yellow" : "cyan"}; }
//           50% { color: ${darkMode ? "cyan" : "yellow"}; text-shadow: 0 0 20px ${darkMode ? "cyan" : "yellow"}; }
//           75% { color: ${darkMode ? "yellow" : "cyan"}; text-shadow: 0 0 25px ${darkMode ? "yellow" : "cyan"}; }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </nav>
//   );
// }
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
} from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: FaHome, label: "Accueil", to: "/" },
    { icon: FaUserAlt, label: "À propos", to: "/about" },
    { icon: FaTools, label: "Compétences", to: "/skills" },
    { icon: FaFolderOpen, label: "Projets", to: "/projects" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>KACI</h1>
          <FaBolt className="logo-icon electric" />
        </div>

        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Overlay mobile avec transition fondu */}
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

        <button className="mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          color: white;
        }

        .navbar.dark .navbar-container { background: rgba(0,0,0,0.2); }
        .navbar.light .navbar-container { background: rgba(255,255,255,0.2); }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 2rem;
          backdrop-filter: blur(8px);
          position: relative;
        }

        .logo { display: flex; align-items: center; gap: 0.4rem; }
        .logo h1 { font-size: 1.8rem; font-weight: 800; text-shadow: 0 0 10px white; }
        .logo-icon {
          font-size: 2rem; color: cyan; text-shadow: 0 0 12px cyan; animation: electric 1s infinite;
        }

        .nav-links { display: flex; gap: 1.5rem; font-weight: 800; list-style: none; }

        .nav-item {
          display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
          color: ${darkMode ? "white" : "#333"}; opacity: 1; animation: fadeIn 0.5s forwards;
          text-decoration: none;
        }

        .nav-item:hover .link-icon,
        .nav-item:hover .link-text { animation: electric 1s infinite; }

        .link-icon { font-size: 1.5rem; color: ${darkMode ? "white" : "rgba(0,0,0,0.5)"}; }
        .link-text { font-size: 1.1rem; color: ${darkMode ? "white" : "rgba(0,0,0,0.5)"}; }

        .menu-btn { display: none; cursor: pointer; z-index: 60; }

        @media (max-width: 768px) {
          .menu-btn { display: block; }

          .nav-links {
            position: fixed;
            top: 0; left: -100%;
            height: 100vh; width: 70%;
            flex-direction: column;
            background: ${darkMode ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)"};
            padding: 2rem 1rem;
            gap: 2rem;
            transition: left 0.3s ease-in-out;
            z-index: 50;
          }

          .nav-links.open { left: 0; }

          .nav-item { font-size: 1.5rem; }

          /* Overlay */
          .overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(0,0,0,0.5); opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 45;
          }
          .overlay.show { opacity: 1; pointer-events: auto; }
        }

        .mode-btn { background: transparent; border: none; cursor: pointer; font-size: 1.2rem; }

        @keyframes electric {
          0%, 100% { color: ${darkMode ? "cyan" : "yellow"}; text-shadow: 0 0 15px ${darkMode ? "cyan" : "yellow"}; }
          25% { color: ${darkMode ? "yellow" : "cyan"}; text-shadow: 0 0 25px ${darkMode ? "yellow" : "cyan"}; }
          50% { color: ${darkMode ? "cyan" : "yellow"}; text-shadow: 0 0 20px ${darkMode ? "cyan" : "yellow"}; }
          75% { color: ${darkMode ? "yellow" : "cyan"}; text-shadow: 0 0 25px ${darkMode ? "yellow" : "cyan"}; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
