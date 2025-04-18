import Contact from "./sections/Contact";
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
    </>
  );
};

export default App;
