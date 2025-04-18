import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Hero />
      <ShowCase />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
