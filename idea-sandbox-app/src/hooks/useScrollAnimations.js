import { useEffect } from "react";

export default function useScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-fade-in-up, .animate-scale-in, .animate-fade-in-left"
    );

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            if (el.classList.contains("animate-fade-in-up")) {
              el.style.animation = "fadeInUp 0.8s ease-out forwards";
            }
            if (el.classList.contains("animate-scale-in")) {
              el.style.animation = "scaleIn 0.8s ease-out forwards";
            }
            if (el.classList.contains("animate-fade-in-left")) {
              el.style.animation = "fadeInLeft 0.8s ease-out forwards";
            }

            if (el.classList.contains("delay-200"))
              el.style.animationDelay = "0.2s";
            if (el.classList.contains("delay-400"))
              el.style.animationDelay = "0.4s";

            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
