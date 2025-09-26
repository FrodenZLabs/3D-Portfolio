import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";
import { RingLoader } from "react-spinners";

gsap.registerPlugin(ScrollTrigger);

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    const handleLoad = async () => {
      // Step 1: Ensure all assets (images, fonts, etc.) are loaded
      await new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve, { once: true });
        }
      });

      // Step 2: Initialize GSAP + ScrollTrigger in background
      gsap.utils.toArray(".animate-on-load").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // Step 3: Refresh ScrollTrigger to avoid "stuck" animations
      ScrollTrigger.refresh();

      // Step 4: Small delay for smooth fade-out
      setTimeout(() => setLoading(false), 2000);
    };

    handleLoad();
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black-200 to-purple-900 text-white opacity-50">
      <div className="flex flex-col items-center">
        <RingLoader color="#00ff21" size={150} />
        <p className="mt-6 text-sm md:text-4xl font-semibold">
          Loading your experience... {progress.toFixed(0)}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
