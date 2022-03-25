import CustomerReviews from './components/CustomerReview';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import './styles/responsive.css'
import Footer from './components/Footer';
import About from './components/About';
import WhyUs from './components/WhyUs';
import PastWork from './components/PastWork';

function App() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <section className="two"> 
        <About />
        <Process />
        <PastWork />
        <CustomerReviews />
        <Footer />
      </section>
    </>
  );
}

export default App;
