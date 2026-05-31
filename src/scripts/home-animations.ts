import Splide from "@splidejs/splide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)");

function animateActiveSlide(sliderElement: HTMLElement) {
  const slides = sliderElement.querySelectorAll<HTMLElement>(".showcase-slide");

  slides.forEach((slide) => {
    const container = slide.closest(".splide__slide");
    const isActive = container?.classList.contains("is-active") ?? false;
    const image = slide.querySelector<HTMLElement>(".showcase-slide__media img");
    const content = slide.querySelector<HTMLElement>(".showcase-slide__content");
    const tags = slide.querySelectorAll<HTMLElement>(".showcase-slide__tags span");

    gsap.to(slide, {
      y: isActive ? 0 : 12,
      duration: 0.8,
      ease: "power3.out",
      force3D: false,
      onComplete: () => {
        if (isActive) {
          gsap.set(slide, { clearProps: "transform" });
        }
      }
    });

    if (image) {
      gsap.to(image, {
        scale: isActive ? 1.02 : 1.12,
        duration: 1.2,
        ease: "power3.out"
      });
    }

    if (content) {
      gsap.to(content, {
        y: isActive ? 0 : 14,
        opacity: isActive ? 1 : 0.8,
        duration: 0.72,
        ease: "power3.out",
        force3D: false,
        onComplete: () => {
          if (isActive) {
            gsap.set(content, { clearProps: "transform" });
          }
        }
      });
    }

    if (tags.length > 0) {
      gsap.to(tags, {
        y: isActive ? 0 : 10,
        opacity: isActive ? 1 : 0.82,
        stagger: 0.03,
        duration: 0.62,
        ease: "power2.out",
        force3D: false,
        onComplete: () => {
          if (isActive) {
            gsap.set(tags, { clearProps: "transform" });
          }
        }
      });
    }
  });
}

function initSlider(root: HTMLElement) {
  const sliderElement = root.querySelector<HTMLElement>(".js-showcase-slider");

  if (!sliderElement) {
    return;
  }

  const splide = new Splide(sliderElement, {
    type: "loop",
    speed: 950,
    rewindSpeed: 900,
    autoplay: !prefersReducedMotion.matches,
    interval: 4800,
    pauseOnHover: !desktopPointer.matches,
    pauseOnFocus: !desktopPointer.matches,
    arrows: true,
    pagination: false,
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    trimSpace: true,
    padding: 0
  });

  splide.on("mounted moved", () => animateActiveSlide(sliderElement));
  splide.mount();
}

function initScrollReveals(root: HTMLElement) {
  const revealSets: Array<{ trigger: string; targets: string[] }> = [
    {
      trigger: ".showcase-section",
      targets: [
        ".showcase-heading > *",
        ".showcase-stage"
      ]
    },
    {
      trigger: ".signature-section",
      targets: [
        ".signature-copy > *",
        ".signature-card"
      ]
    }
  ];

  revealSets.forEach(({ trigger, targets }) => {
    const section = root.querySelector<HTMLElement>(trigger);

    if (!section) {
      return;
    }

    const elements = targets.flatMap((selector) =>
      Array.from(section.querySelectorAll<HTMLElement>(selector))
    );

    if (elements.length === 0) {
      return;
    }

    gsap.from(elements, {
      y: 56,
      opacity: 0,
      rotateX: 8,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        once: true
      }
    });
  });
}

function initHoverLift(root: HTMLElement) {
  const hoverTargets = root.querySelectorAll<HTMLElement>(
    ".signature-card, .hero-button, .contact-panel"
  );

  hoverTargets.forEach((element) => {
    const moveY = gsap.quickTo(element, "y", {
      duration: 0.28,
      ease: "power2.out"
    });
    const scaleTo = gsap.quickTo(element, "scale", {
      duration: 0.28,
      ease: "power2.out"
    });

    const handleEnter = () => {
      moveY(-6);
      scaleTo(1.012);
    };

    const handleLeave = () => {
      moveY(0);
      scaleTo(1);
    };

    element.addEventListener("pointerenter", handleEnter);
    element.addEventListener("pointerleave", handleLeave);
  });
}

export function initHomeAnimations() {
  const root = document.querySelector<HTMLElement>(".home-shell");

  if (!root || root.dataset.motionReady === "true") {
    return;
  }

  root.dataset.motionReady = "true";
  initSlider(root);

  if (prefersReducedMotion.matches) {
    return;
  }

  const context = gsap.context(() => {
    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    heroTimeline
      .from(".hero-copy__bg", {
        x: -70,
        opacity: 0,
        duration: 1
      })
      .from(
        ".brand-lockup",
        {
          y: 28,
          opacity: 0,
          duration: 0.65
        },
        0.08
      )
      .from(
        ".hero-title span",
        {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.75
        },
        0.14
      )
      .from(
        ".hero-rule",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.52
        },
        0.3
      )
      .from(
        ".hero-description",
        {
          y: 24,
          opacity: 0,
          duration: 0.58
        },
        0.36
      )
      .from(
        ".feature-item",
        {
          y: 22,
          opacity: 0,
          stagger: 0.08,
          duration: 0.55
        },
        0.42
      )
      .from(
        ".hero-button",
        {
          y: 24,
          opacity: 0,
          stagger: 0.1,
          duration: 0.55
        },
        0.5
      )
      .from(
        ".hero-media",
        {
          x: 68,
          opacity: 0,
          duration: 1
        },
        0.16
      )
      .from(
        ".hero-bottom",
        {
          y: 30,
          opacity: 0,
          duration: 0.7
        },
        0.62
      );

    gsap.to(".hero-media img", {
      y: -10,
      scale: 1.055,
      duration: 5.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    initScrollReveals(root);
    initHoverLift(root);
  }, root);

  window.addEventListener(
    "pagehide",
    () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { once: true }
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomeAnimations, {
    once: true
  });
} else {
  initHomeAnimations();
}
