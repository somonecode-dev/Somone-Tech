import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1f242d] text-slate-400 py-6 border-t border-slate-800/80 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Identité synthétique : empilée sur mobile, en ligne sur desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span className="font-bold text-white tracking-wide">SOMONE.TECH</span>
          <span className="hidden sm:inline text-slate-500">—</span>
          <span className="text-slate-400 text-xs">Solutions numériques & accompagnement</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} SOMONE TECH. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}