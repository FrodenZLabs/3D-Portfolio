import Contact from "./sections/Contact";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowCase from "./sections/ShowCase";
import { ToastContainer } from "react-toastify";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Hero />
      <ShowCase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      {/* <TechStack /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
