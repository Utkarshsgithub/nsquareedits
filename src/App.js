import './App.css';
import CustomerReviews from './components/CustomerReview';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import './styles/responsive.css'
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <>
      <Hero />
      <Services />
      <section className="two"> 
      <About />
        <Process />
        <CustomerReviews />
        <Footer />
      </section>
    </>
  );
}

export default App;
