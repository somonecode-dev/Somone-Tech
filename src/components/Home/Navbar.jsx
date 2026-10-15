import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ajout de la section "Avis" dans le menu
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/témoignages', label: 'Avis' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#323946]/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white font-black text-xl shadow-md">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white">
              SOMONE<span className="text-sky-400">.TECH</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">
              INNOVATION LAB
            </span>
          </div>
        </Link>

        {/* LIENS DE NAVIGATION + BOUTON CONTACT + SWITCH À DROITE */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Soulignement cyan dynamique */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Bouton Dashboard (S'affiche uniquement quand connecté est True) */}
            {isAuthenticated && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `relative py-1 text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Dashboard
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span>
                    )}
                  </>
                )}
              </NavLink>
            )}
          </nav>

          {/* Bouton Contact style gradient avec flèche */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 transition-all shadow-md ${
                isActive ? 'ring-2 ring-cyan-400' : ''
              }`
            }
          >
            Contact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NavLink>

          {/* SWITCH DE CONNEXION (BOOLEEN SIMULATION) */}
          <div className="flex items-center gap-2 pl-4 border-l border-slate-700/60">
            <button
              onClick={() => setIsAuthenticated(!isAuthenticated)}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-300 transition-all cursor-pointer"
            >
              <span className={`w-2 h-2 rounded-full ${isAuthenticated ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-rose-500'}`}></span>
              <span>{isAuthenticated ? 'Connecté' : 'Se connecter'}</span>
              
              {/* Visuel du Switch */}
              <div className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors ${isAuthenticated ? 'bg-sky-500' : 'bg-slate-600'}`}>
                <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${isAuthenticated ? 'translate-x-4' : 'translate-x-0'}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* MENU MOBILE (Bouton hamburger) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#323946] border-b border-slate-700 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-400'
                    : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Lien Dashboard sur Mobile */}
          {isAuthenticated && (
            <NavLink
              to="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center gap-2 ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-400'
                    : 'text-slate-300 hover:text-white'
                }`
              }
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Dashboard
            </NavLink>
          )}

          {/* Bouton Contact sur mobile */}
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center px-4 py-2.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-600"
          >
            Contact
          </NavLink>

          {/* Switch mobile */}
          <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between px-2">
            <span className="text-xs text-slate-400">État de connexion :</span>
            <button
              onClick={() => setIsAuthenticated(!isAuthenticated)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300"
            >
              <span>{isAuthenticated ? 'Connecté' : 'Déconnecté'}</span>
              <div className={`w-8 h-4 flex items-center rounded-full p-0.5 transition-colors ${isAuthenticated ? 'bg-sky-500' : 'bg-slate-600'}`}>
                <div className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${isAuthenticated ? 'translate-x-4' : 'translate-x-0'}`}></div>
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}