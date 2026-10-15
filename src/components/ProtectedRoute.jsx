import React from 'react';

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-tr from-blue-600/70 to-sky-500/70 text-slate-800">
        {/* Ajout de mx-4 et w-full pour un meilleur rendu responsive sur mobile */}
        <div className="w-full max-w-md p-6 sm:p-8 bg-white shadow-xl rounded-2xl text-center border border-slate-200 mx-4">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
            🔒
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-800">Accès restreint</h2>
          <p className="text-sm sm:text-base text-slate-600 mb-4">
            Connectez-vous d'abord via le <span className="font-semibold text-blue-600">switch</span> pour pouvoir accéder au contenu du dashboard.
          </p>
        </div>
      </div>
    );
  }

  return children;
}