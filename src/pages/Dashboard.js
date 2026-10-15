import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1f242d] text-slate-100 pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* En-tête du Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Espace Administrateur</span>
            </div>
            <h1 className="text-3xl font-black text-white mt-1">Tableau de Bord</h1>
            <p className="text-slate-400 text-sm">Vue d'ensemble de vos activités et métriques Somone Tech.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold border border-slate-700 transition-all">
              Exporter les données
            </button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white text-sm font-semibold shadow-md hover:from-sky-500 hover:to-blue-700 transition-all">
              + Nouveau Projet
            </button>
          </div>
        </div>

        {/* CARTES DE STATISTIQUES (KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Projets Actifs', val: '12', change: '+18%', icon: '🚀', color: 'from-sky-500/20 to-blue-500/10' },
            { label: 'Demandes de Contact', val: '48', change: '+7%', icon: '📩', color: 'from-cyan-500/20 to-sky-500/10' },
            { label: 'Taux de Satisfaction', val: '98.4%', change: '+2.1%', icon: '⭐', color: 'from-emerald-500/20 to-teal-500/10' },
            { label: 'Revenu Mensuel (FCFA)', val: '2.4M', change: '+12%', icon: '📈', color: 'from-purple-500/20 to-indigo-500/10' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} border border-slate-800 bg-[#282e3a] shadow-lg flex flex-col justify-between`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">{stat.change}</span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-black text-white mt-1">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION PRINCIPALE : TABLEAU + ACTIVITÉS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tableau des Projets Récents (Occupant 2 colonnes) */}
          <div className="lg:col-span-2 bg-[#282e3a] border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
              <h2 className="text-lg font-bold text-white">Projets Récents</h2>
              <span className="text-xs text-sky-400 font-semibold cursor-pointer hover:underline">Voir tout</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="text-xs uppercase bg-slate-800/60 text-slate-400">
                  <tr>
                    <th className="py-3 px-4 rounded-l-lg">Nom du Projet</th>
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Statut</th>
                    <th className="py-3 px-4 rounded-r-lg">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { name: 'Application Web Somone', client: 'Xarala', status: 'En cours', color: 'bg-amber-500/20 text-amber-400', date: '28 Fév 2026' },
                    { name: 'Plateforme PWA Accessibilité', client: 'Gouvernement', status: 'Terminé', color: 'bg-emerald-500/20 text-emerald-400', date: '20 Fév 2026' },
                    { name: 'Intégration Modèle IA', client: 'TechLab', status: 'En attente', color: 'bg-slate-700 text-slate-300', date: '15 Fév 2026' },
                    { name: 'SaaS Keur Gestion', client: 'Somone Corp', status: 'En cours', color: 'bg-amber-500/20 text-amber-400', date: '10 Fév 2026' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">{row.name}</td>
                      <td className="py-3 px-4 text-slate-400">{row.client}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-500">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activités Récentes & Flux */}
          <div className="bg-[#282e3a] border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
              <h2 className="text-lg font-bold text-white">Flux d'Activité</h2>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Nouveau message reçu', time: 'Il y a 10 min', desc: 'Demande de devis pour un projet FlutterFlow.' },
                { title: 'Déploiement Vercel réussi', time: 'Il y a 2 heures', desc: 'Mise à jour de la version v2.4.0 en production.' },
                { title: 'Nouvel avis client', time: 'Hier', desc: 'Note 5/5 attribuée par l\'équipe Somone.' },
              ].map((act, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400">{act.title}</span>
                    <span className="text-[10px] text-slate-500">{act.time}</span>
                  </div>
                  <p className="text-xs text-slate-400">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}