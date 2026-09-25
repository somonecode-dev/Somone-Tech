import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Awa Diop',
      role: 'CEO & Fondatrice',
      company: 'TechAfrique',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      content:
        'L’équipe de Somone Tech a transformé notre vision en une application web d’une fluidité remarquable. Leur maîtrise technique et leur réactivité ont fait toute la différence sur notre lancement.',
      rating: 5,
      tag: 'Application Web',
    },
    {
      id: 2,
      name: 'Moussa Ndiaye',
      role: 'Directeur des Opérations',
      company: 'Logistics Pro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      content:
        'L’architecture backend déployée est d’une stabilité irréprochable. Nos processus internes sont désormais automatisés, nous faisant gagner un temps précieux chaque jour.',
      rating: 5,
      tag: 'Cloud & API',
    },
    {
      id: 3,
      name: 'Fatou Sow',
      role: 'Responsable Innovation',
      company: 'Fintech Solutions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      content:
        'Un design moderne, un code propre et un accompagnement sur mesure du début à la fin. Somone Tech est le partenaire idéal pour tout projet digital ambitieux.',
      rating: 5,
      tag: 'UI/UX & PWA',
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#323946] text-white py-20 lg:py-28 overflow-hidden border-t border-slate-700/50">
      {/* Halo lumineux central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Retours d'expérience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ce que nos clients disent de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              notre expertise
            </span>
          </h2>

          <p className="text-slate-300 text-base font-normal leading-relaxed">
            Découvrez comment nous accompagnons les entreprises et leaders du secteur dans la réussite de leurs projets numériques.
          </p>
        </div>

        {/* Grille de témoignages épurée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#323946] border border-slate-700/80 rounded-2xl p-8 flex flex-col justify-between shadow-xl hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Haut de carte : Badge + Note 5/5 très épurés */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-400 text-xs font-mono border border-slate-700/80">
                    {item.tag}
                  </span>
                  
                  {/* Étoiles bien dégagées et compactes */}
                  <div className="flex items-center gap-1 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Citation */}
                <p className="text-slate-200 text-sm font-normal leading-relaxed">
                  « {item.content} »
                </p>
              </div>

              {/* Profil Auteur */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-700/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-sky-400/30"
                />
                <div>
                  <h3 className="font-bold text-white text-base leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.role} • <span className="text-cyan-400 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}