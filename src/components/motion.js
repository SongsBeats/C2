"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, createTimeline, cubicBezier, stagger } from "animejs";

const entranceEase = cubicBezier(.22, 1, .36, 1);

export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const main = document.querySelector("main");
    if (preference.matches || !main) return;

    const running = new Set();
    const visuals = new Set();

    // Leave server-rendered content visible. Only promote layers while they move,
    // and restore inline styles afterwards so CSS hover/focus transforms still work.
    function reveal(targets, sequence = false) {
      const originalHints = targets.map((target) => target.style.willChange);
      targets.forEach((target) => { target.style.willChange = "transform, opacity"; });
      let animation;
      const cleanup = () => {
        animation.revert();
        targets.forEach((target, index) => {
          if (originalHints[index]) target.style.willChange = originalHints[index];
          else target.style.removeProperty("will-change");
        });
        running.delete(cleanup);
      };
      const properties = {
        opacity: [0, 1],
        translateY: [sequence ? 14 : 20, 0],
        duration: 680,
        ease: entranceEase,
        delay: stagger(sequence ? 65 : 85),
      };
      if (sequence) {
        animation = createTimeline({ autoplay: false, onComplete: cleanup })
          .add(targets, properties, 0);
      } else {
        animation = animate(targets, { ...properties, autoplay: false, onComplete: cleanup });
      }
      running.add(cleanup);
      animation.play();
    }

    const observer = new IntersectionObserver((entries) => {
      const batches = new Map();
      entries.forEach((entry) => {
        if (!entry.isIntersecting || preference.matches) return;
        const target = entry.target;
        observer.unobserve(target);
        if (target.matches(".transformation-visual")) {
          target.dataset.motionActive = "true";
          visuals.add(target);
        }
        // Do not move a form or link a visitor has already focused.
        if (target.contains(document.activeElement)) return;
        if (target.dataset.reveal === "stagger") {
          reveal([...target.children], true);
        } else {
          const siblings = batches.get(target.parentElement) || [];
          siblings.push(target);
          batches.set(target.parentElement, siblings);
        }
      });
      batches.forEach((targets) => reveal(targets));
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    main.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    const finishRunning = () => [...running].forEach((cleanup) => cleanup());
    const stop = () => {
      observer.disconnect();
      finishRunning();
      visuals.forEach((element) => { delete element.dataset.motionActive; });
      visuals.clear();
    };
    const preferenceChanged = () => { if (preference.matches) stop(); };
    // Keyboard users never have to wait for a focused control to fade into view.
    main.addEventListener("focusin", finishRunning);
    preference.addEventListener("change", preferenceChanged);
    return () => {
      stop();
      main.removeEventListener("focusin", finishRunning);
      preference.removeEventListener("change", preferenceChanged);
    };
  }, [pathname]);
  return null;
}
