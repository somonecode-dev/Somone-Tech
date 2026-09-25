import React from 'react';

export default function Hero() {
  return (
    <section id="accueil" className="relative bg-[#323946] text-white overflow-hidden py-24 lg:py-32">
      {/* Effets d'arrière-plan (Halo lumineux & Grille tech) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-sky-500/20 to-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLONNE GAUCHE : Textes & Appel à l'action */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge de statut */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
                Solutions Digitales Sur Mesure
              </span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Propulsez votre entreprise vers le{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
                futur numérique
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Somone Tech conçoit des applications web, mobiles et des architectures sur mesure ultra-performantes, adaptées à vos enjeux de croissance.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 group"
              >
                Explorer nos services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-200 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 transition-all text-center"
              >
                Demander un devis
              </a>
            </div>

            {/* Indicateurs clés (KPIs) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/60">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400">99.9%</p>
                <p className="text-xs text-slate-400 mt-1">Disponibilité</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Sur Mesure</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400">24/7</p>
                <p className="text-xs text-slate-400 mt-1">Support Dédié</p>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : Visuel Carte Tech / Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Entête Style IDE / Terminal */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">somone-core.config.js</span>
              </div>

              {/* Contenu visuel code/features */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-sky-400">
                  <span className="text-purple-400">const</span> project = <span className="text-green-400">'Somone Tech'</span>;
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                  <p className="text-slate-500">{"// Modules actifs"}</p>
                  <p className="text-cyan-400">→ Application Web & PWA</p>
                  <p className="text-cyan-400">→ Solutions Cloud & Backend</p>
                  <p className="text-cyan-400">→ Modèles IA & Automatisation</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 flex items-center justify-between">
                  <span className="text-slate-200 font-sans font-semibold text-xs">Statut du système</span>
                  <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase">Opérationnel</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}