import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Home/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Témoignages from './pages/Témoignages';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';

function App() {
  // État pour gérer la simulation de la connexion
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Passer les props à la Navbar */}
      <Navbar 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
      />

      {/* Contenu principal des pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/témoignages" element={<Témoignages />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route protégée du Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
         </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;