import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ajout de la section "Avis" dans le menu
  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Avis' },
  ];

  // Gestion du ScrollSpy (détection de la section au défilement)
  useEffect(() => {
    const handleScroll = () => {
      // Inclusion de 'testimonials' dans la détection au scroll
      const allSections = ['accueil', 'services', 'testimonials', 'contact'].map((id) =>
        document.getElementById(id)
      );
      const scrollPosition = window.scrollY + 200;

      allSections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#323946] border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#accueil" onClick={() => handleNavClick('accueil')} className="flex items-center gap-3 group">
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
        </a>

        {/* LIENS DE NAVIGATION + BOUTON CONTACT À DROITE */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Soulignement cyan dynamique */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Bouton Contact style gradient avec flèche */}
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 transition-all shadow-md ${
              activeSection === 'contact' ? 'ring-2 ring-cyan-400' : ''
            }`}
          >
            Contact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                activeSection === item.id ? 'bg-sky-500/20 text-sky-400' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="block text-center px-4 py-2.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}