import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    revealElements.forEach(el => observer.observe(el));
  }, []);
}