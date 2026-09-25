import React from 'react';
import Form from './Form';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#2a303c] text-white pt-20 lg:pt-28 pb-8 overflow-hidden border-t border-slate-700/50">
      {/* Glow d'ambiance */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Démarrons une collaboration
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Parlons de votre futur{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              projet digital
            </span>
          </h2>

          <p className="text-slate-300 text-base font-normal leading-relaxed">
            Vous avez une idée ou un projet à concrétiser ? Contactez-nous dès aujourd'hui pour obtenir une estimation personnalisée.
          </p>
        </div>

        {/* Disposition 2 colonnes : Infos + Formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Gauche : Infos & Coordonnées */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact direct</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Notre équipe est disponible pour répondre à toutes vos interrogations techniques et vous accompagner étape par étape.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#323946] border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Email</h4>
                  <p className="text-white font-medium text-sm mt-0.5">contact@somone.tech</p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#323946] border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Téléphone</h4>
                  <p className="text-white font-medium text-sm mt-0.5">+221 77 000 00 00</p>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#323946] border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Localisation</h4>
                  <p className="text-white font-medium text-sm mt-0.5">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire (Form.jsx) */}
          <div className="lg:col-span-7">
            <Form />
          </div>

        </div>
      </div>
      {/* Ligne de copyright basique tout en bas du composant Contact */}
       <div className="mt-12 pt-6 pb-2 border-t border-slate-700/50 text-center text-xs text-slate-400">
         <p>© {new Date().getFullYear()} SOMONE.TECH - Innovation Lab. Tous droits réservés.</p>
       </div>
    </section>
  );
}