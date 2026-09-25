import React from 'react';

export default function Card({ title, description, icon, features, badge, isPopular }) {
  return (
    <div
      className={`relative bg-[#323946] border ${
        isPopular ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/10' : 'border-slate-700/80'
      } rounded-2xl p-8 flex flex-col justify-between hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-300 group`}
    >
      {/* Badge optionnel "Populaire" */}
      {isPopular && (
        <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
          Populaire
        </span>
      )}

      <div className="space-y-6">
        {/* Élément visuel / Icône + Badge techno */}
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300">
            {icon}
          </div>
          <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/80">
            {badge}
          </span>
        </div>

        {/* Titre & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Liste des fonctionnalités */}
        <ul className="space-y-2.5 pt-4 border-t border-slate-700/60">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
              <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="pt-8 mt-6 border-t border-slate-700/40">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-white transition-colors"
        >
          En savoir plus
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}