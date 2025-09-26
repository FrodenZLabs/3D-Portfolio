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
              <img
                src="/images/project1.png"
                alt="Ryde App Interface"
                loading="lazy"
              />
            </div>
            <div className="text-content">
              <a
                href="https://github.com/FrodenZLabs/MERN-Tech-Store.git"
                target="_blank"
                className="text-2xl text-white-50 font-semibold pt-4"
              >
                Smart Credit Risk Assessment System
              </a>
              <p className="text-white md:text-xl">
                A web platform that helps financial institutions evaluate
                student loan risks. Built with Node.js (Express), MongoDB, and
                React.js, the system calculates dynamic risk scores and provides
                real-time analytics.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper group bg-[#ffefdb] mb-4">
                <img
                  src="/images/project2.png"
                  alt="Cross-Platform Delivery Application"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-300 to-blue-300 font-semibold text-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-xl">
                  <p className="px-4 text-sm md:text-2xl italic text-gray-800">
                    A Flutter + Node.js powered app enabling real-time order
                    tracking, push notifications, and delivery status updates.
                    Designed with an offline-first architecture, ensuring
                    usability even in low connectivity.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/FrodenZLabs/Flutter-Delivery-App.git"
                target="_blank"
                className="text-2xl text-white-50 font-semibold pt-4"
              >
                Cross-Platform Delivery Application
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper group bg-[#ffe7eb] mb-4">
                <img
                  src="/images/project3.png"
                  alt="AI-Powered Plant Disease Detection"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-yellow-200 text-black font-semibold text-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-xl">
                  <p className="px-4 text-sm md:text-2xl italic text-gray-800">
                    A machine learning-powered web application that detects
                    plant diseases from images, helping farmers with instant
                    crop health diagnostics.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/FrodenZLabs/Plant-Disease-CNN-Project.git"
                target="_blank"
                className="text-2xl text-white-50 font-semibold pt-4"
              >
                AI-Powered Plant Disease Detection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
