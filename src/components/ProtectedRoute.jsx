import React from 'react'


export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-600/70 to-sky-500/70 text-slate-800">
        <div className="p-8 bg-white shadow-md rounded-lg text-center max-w-md border border-slate-200">
          <h2 className="text-xl font-bold mb-2">Accès restreint</h2>
          <p className="text-slate-600 mb-6">
            Connectez-vous d'abord via le <span className="font-medium text-blue-600">switch</span> pour pouvoir accéder au contenu du dashboard.
          </p>
        </div>
      </div>
    );
  }

  return children;
}

