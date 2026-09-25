import './index.css';
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Home/Testimonials';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
