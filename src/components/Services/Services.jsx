import React from 'react';
import Card from './Card';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Développement Web & PWA',
      description: 'Création de sites vitrines, plateformes SaaS et Progressive Web Apps réactives, ultra-rapides et sécurisées.',
      badge: 'React / Next.js',
      isPopular: true,
      features: [
        'Architecture moderne & SEO optimisé',
        'Expérience utilisateur (UI/UX) sur mesure',
        'Compatibilité mobile & hors-ligne (PWA)',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Applications Mobiles',
      description: 'Conception d’applications mobiles performantes et intuitives pour iOS et Android répondant aux standards actuels.',
      badge: 'Flutter / Mobile',
      isPopular: false,
      features: [
        'Interface fluide et interactive',
        'Intégration d’API & notifications push',
        'Publication App Store & Google Play',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Cloud & API Backend',
      description: 'Mise en place d’architectures backend robustes, scalables et d’API REST/GraphQL pour alimenter vos systèmes.',
      badge: 'Node.js / Cloud',
      isPopular: false,
      features: [
        'Base de données haute disponibilité',
        'Sécurité renforcée & Authentification',
        'Automatisation des déploiements (CI/CD)',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative bg-[#2a303c] text-white py-20 lg:py-28 border-t border-slate-700/50">
      {/* Halo lumineux d'ambiance */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Entête de section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Nos domaines d'intervention
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Des services numériques sur mesure pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              votre succès
            </span>
          </h2>

          <p className="text-slate-300 text-base font-normal leading-relaxed">
            Nous transformons vos idées complexes en solutions technologiques simples, performantes et évolutives.
          </p>
        </div>

        {/* Grille utilisant ServiceCard.jsx */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              badge={service.badge}
              features={service.features}
              icon={service.icon}
              isPopular={service.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}