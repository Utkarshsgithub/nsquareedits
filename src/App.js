import './App.css';
import CustomerReviews from './components/CustomerReview';
import Hero from './components/Hero';
import Services from './components/Services';
import HWE from './components/HWE';
import './styles/responsive.css'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Hero />
      <Services />
      <HWE />
      <CustomerReviews />
      <Footer />
    </>
  );
}

export default App;
