import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_TLWSRWAh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "glass",
      tone: "blue",
      title: "VITRAGE",
      subtitle: "SUR MESURE"
    },
    {
      icon: "repair",
      tone: "red",
      title: "R\xC9PARATION",
      subtitle: "RAPIDE"
    },
    {
      icon: "thermo",
      tone: "blue",
      title: "ISOLATION",
      subtitle: "THERMIQUE"
    }
  ];
  const trustItems = [
    {
      icon: "quality",
      label: "TRAVAIL DE QUALIT\xC9"
    },
    {
      icon: "clock",
      label: "DISPONIBLE 24H/24"
    },
    {
      icon: "shield",
      label: "S\xC9CURIT\xC9 GARANTIE"
    },
    {
      icon: "people",
      label: "SATISFACTION CLIENT"
    }
  ];
  const showcaseSlides = [
    {
      eyebrow: "Fa\xE7ade vitr\xE9e",
      title: "Une entr\xE9e vitr\xE9e qui impose tout de suite le niveau.",
      description: "Grandes surfaces, profils sombres et reflets nets pour donner \xE0 la fa\xE7ade une pr\xE9sence tr\xE8s premium.",
      image: "/carrousel/facade-vitree.jpeg",
      alt: "Fa\xE7ade contemporaine enti\xE8rement vitr\xE9e avec entr\xE9e centrale",
      tags: ["Fa\xE7ade", "Grand format", "Finition premium"]
    },
    {
      eyebrow: "Cloison de bureau",
      title: "Des s\xE9parations en verre qui laissent circuler la lumi\xE8re.",
      description: "Une ligne tr\xE8s propre, une sensation d'espace intacte et une lecture plus \xE9l\xE9gante des volumes int\xE9rieurs.",
      image: "/carrousel/cloison-bureau.jpeg",
      alt: "Bureau ferm\xE9 par une grande cloison vitr\xE9e coulissante",
      tags: ["Cloison", "Lumi\xE8re", "Minimal"]
    },
    {
      eyebrow: "Paroi de douche",
      title: "Une salle d'eau plus nette, plus sobre, plus graphique.",
      description: "Verre, ferrures noires et pose pr\xE9cise pour faire monter la finition sans alourdir l'espace.",
      image: "/carrousel/douche.jpeg",
      alt: "Douche moderne ferm\xE9e par une paroi vitr\xE9e encadr\xE9e de noir",
      tags: ["Salle de bain", "Pose pr\xE9cise", "Design"]
    },
    {
      eyebrow: "Garde-corps vitr\xE9s",
      title: "De la s\xE9curit\xE9 sans casser la vue ni la l\xE9g\xE8ret\xE9.",
      description: "Des lignes discr\xE8tes, une transparence continue et un rendu tr\xE8s propre pour les terrasses et les \xE9tages.",
      image: "/carrousel/garde-corps-vitre.jpeg",
      alt: "Terrasse contemporaine avec garde-corps enti\xE8rement vitr\xE9",
      tags: ["Terrasse", "S\xE9curit\xE9", "Transparence"]
    },
    {
      eyebrow: "Escalier en verre",
      title: "Une pi\xE8ce signature qui capte tout de suite le regard.",
      description: "Marches, garde-corps et baies travaillent ensemble pour donner une impression d'espace tr\xE8s spectaculaire.",
      image: "/carrousel/escalier-verre.jpeg",
      alt: "Int\xE9rieur lumineux avec escalier et garde-corps en verre",
      tags: ["Escalier", "Effet waouh", "Architecture"]
    }
  ];
  const serviceFocus = [
    {
      icon: "glass",
      title: "Vitrage sur mesure",
      description: "D\xE9coupe, fa\xE7onnage et pose adapt\xE9s aux dimensions, aux usages et aux contraintes de chaque ouverture."
    },
    {
      icon: "thermo",
      title: "Isolation performante",
      description: "Double vitrage, optimisation thermique et r\xE9duction des d\xE9perditions pour gagner en confort au quotidien."
    },
    {
      icon: "shield",
      title: "S\xE9curisation rapide",
      description: "Remplacement apr\xE8s bris, mise en s\xE9curit\xE9 et finitions fiables pour prot\xE9ger les lieux sans attendre."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "UNIVERS GLASS", "description": "UNIVERS GLASS, la transparence au service de vos projets.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell" data-astro-cid-j7pv25f6> <section class="hero-card" data-astro-cid-j7pv25f6> <div class="hero-main" data-astro-cid-j7pv25f6> <div class="hero-copy" data-astro-cid-j7pv25f6> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-j7pv25f6></div> <a class="brand-lockup" href="/" aria-label="Univers Glass" data-astro-cid-j7pv25f6> <img class="brand-lockup__logo" src="/goodlogo.png" alt="" aria-hidden="true" width="200" height="80" loading="eager" decoding="async" data-astro-cid-j7pv25f6> </a> <h1 class="hero-title" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>LA TRANSPARENCE</span> <span class="hero-title--accent" data-astro-cid-j7pv25f6>AU SERVICE DE</span> <span data-astro-cid-j7pv25f6>VOS PROJETS</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-j7pv25f6></span> <p class="hero-description" data-astro-cid-j7pv25f6>
Spécialiste en vitrerie moderne : installation, réparation et
            solutions sur mesure.
</p> <p class="hero-description" data-astro-cid-j7pv25f6>
Zone Industrielle Yopougon - 11 BP 1107 Abidjan 11 - 07 11 00 00 07
</p> <div class="feature-list" data-astro-cid-j7pv25f6> ${features.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")} data-astro-cid-j7pv25f6> <span class="feature-item__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon, "data-astro-cid-j7pv25f6": true })} </span> <span class="feature-item__copy" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>${feature.title}</span> <span data-astro-cid-j7pv25f6>${feature.subtitle}</span> </span> </div>`)} </div> <div class="hero-actions" data-astro-cid-j7pv25f6> <a class="hero-button hero-button--blue" href="/devis" data-astro-cid-j7pv25f6> <span class="hero-button__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote", "data-astro-cid-j7pv25f6": true })} </span> <span class="hero-button__copy" data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6>DEMANDEZ VOTRE</small> <strong data-astro-cid-j7pv25f6>DEVIS GRATUIT</strong> </span> </a> <a class="hero-button hero-button--red" href="/intervention-rapide" data-astro-cid-j7pv25f6> <span class="hero-button__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-j7pv25f6": true })} </span> <span class="hero-button__copy" data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6>INTERVENTION RAPIDE</small> <strong data-astro-cid-j7pv25f6>ET PROFESSIONNELLE</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-j7pv25f6> <img src="/fonds.png" alt="Maison moderne avec large baie vitree" loading="eager" data-astro-cid-j7pv25f6> </div> </div> <div class="hero-bottom" data-astro-cid-j7pv25f6> <div class="hero-bottom__items" data-astro-cid-j7pv25f6> ${trustItems.map((item) => renderTemplate`<div class="trust-item" data-astro-cid-j7pv25f6> <span class="trust-item__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-j7pv25f6": true })} </span> <span class="trust-item__label" data-astro-cid-j7pv25f6>${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/contact" data-astro-cid-j7pv25f6> <span class="contact-panel__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-j7pv25f6": true })} </span> <span class="contact-panel__copy" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>CONTACTEZ-NOUS</strong> <small data-astro-cid-j7pv25f6>Nous sommes à votre écoute</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-j7pv25f6> <div class="showcase-heading" data-astro-cid-j7pv25f6> <span class="section-kicker" data-astro-cid-j7pv25f6>SIGNATURE VISUELLE</span> <h2 data-astro-cid-j7pv25f6>Des réalisations qui respirent la lumière.</h2> </div> <div class="showcase-stage" data-astro-cid-j7pv25f6> <div class="splide showcase-splide js-showcase-slider" aria-label="Réalisations vitrées mises en avant" data-astro-cid-j7pv25f6> <div class="splide__track" data-astro-cid-j7pv25f6> <ul class="splide__list" data-astro-cid-j7pv25f6> ${showcaseSlides.map((slide) => renderTemplate`<li class="splide__slide" data-astro-cid-j7pv25f6> <article${addAttribute(`showcase-slide${slide.image === "/carrousel/douche.jpeg" ? " showcase-slide--paroi-douche" : ""}`, "class")} data-lift-card data-astro-cid-j7pv25f6> <div class="showcase-slide__media" data-astro-cid-j7pv25f6> <img${addAttribute(slide.image, "src")}${addAttribute(slide.alt, "alt")} loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="showcase-slide__content" data-astro-cid-j7pv25f6> <span class="showcase-slide__eyebrow" data-astro-cid-j7pv25f6> ${slide.eyebrow} </span> <h3 data-astro-cid-j7pv25f6>${slide.title}</h3> <p data-astro-cid-j7pv25f6>${slide.description}</p> <div class="showcase-slide__tags" data-astro-cid-j7pv25f6> ${slide.tags.map((tag) => renderTemplate`<span data-astro-cid-j7pv25f6>${tag}</span>`)} </div> </div> </article> </li>`)} </ul> </div> <div class="splide__arrows showcase-splide__arrows" data-astro-cid-j7pv25f6> <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Slide précédente" data-astro-cid-j7pv25f6> <svg viewBox="0 0 40 40" aria-hidden="true" data-astro-cid-j7pv25f6> <path d="m15.5 8.5 11 11-11 11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.4" data-astro-cid-j7pv25f6></path> </svg> </button> <button class="splide__arrow splide__arrow--next" type="button" aria-label="Slide suivante" data-astro-cid-j7pv25f6> <svg viewBox="0 0 40 40" aria-hidden="true" data-astro-cid-j7pv25f6> <path d="m15.5 8.5 11 11-11 11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.4" data-astro-cid-j7pv25f6></path> </svg> </button> </div> </div> </div> </section> <section class="signature-section" data-animate="signature" data-astro-cid-j7pv25f6> <div class="signature-copy" data-astro-cid-j7pv25f6> <span class="section-kicker" data-astro-cid-j7pv25f6>EXPERTISE VITRERIE</span> <h2 data-astro-cid-j7pv25f6>Des solutions techniques pensées pour une vitrerie professionnelle.</h2> <p data-astro-cid-j7pv25f6>
Vitrage isolant, remplacement après casse, pose sur mesure et mise en
          sécurité : chaque intervention vise la précision, la durabilité et la
          qualité de finition.
</p> </div> <div class="signature-grid" data-astro-cid-j7pv25f6> ${serviceFocus.map((item) => renderTemplate`<article class="signature-card" data-lift-card data-astro-cid-j7pv25f6> <span class="signature-card__icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-j7pv25f6": true })} </span> <h3 data-astro-cid-j7pv25f6>${item.title}</h3> <p data-astro-cid-j7pv25f6>${item.description}</p> </article>`)} </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/index.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
