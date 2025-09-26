import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each map showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Projects ShowCase" sub="🛠️ My Projects Overview" />
        <div className="showcaselayout mt-12 md:mt-24">
          <div className="first-project-wrapper" ref={rydeRef}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>Smart Credit Risk Assessment System</h2>
              <p className="text-white-50 md:text-xl">
                A web platform that helps financial institutions evaluate
                student loan risks. Built with Node.js (Express), MongoDB, and
                React.js, the system calculates dynamic risk scores and provides
                real-time analytics.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Cross-Platform Delivery Application"
                />
              </div>
              <h2>Cross-Platform Delivery Application</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.png"
                  alt="AI-Powered Plant Disease Detection"
                />
              </div>
              <h2>AI-Powered Plant Disease Detection</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
