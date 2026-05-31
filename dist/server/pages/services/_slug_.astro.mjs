import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../../chunks/MarketingIcon_TLWSRWAh.mjs';
import { $ as $$BrandLockup } from '../../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                                      */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug = "service" } = Astro2.params;
  const serviceName = slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const serviceContext = (() => {
    const key = slug.toLowerCase();
    if (key.includes("douche")) {
      return {
        kicker: "Salle de bain",
        lead: "Pour une paroi de douche ou un am\xE9nagement int\xE9rieur, on cherche une ligne nette, une pose propre et une finition facile \xE0 vivre.",
        media: "/fonds.png",
        alt: "Maison moderne avec large baie vitree",
        showcaseTitle: "Un service pens\xE9 pour les espaces d'eau.",
        showcaseLead: "Une prestation claire, pratique et lisible pour garder un r\xE9sultat \xE9l\xE9gant au quotidien."
      };
    }
    if (key.includes("cloison")) {
      return {
        kicker: "Cloison vitr\xE9e",
        lead: "Pour s\xE9parer sans fermer, avec une lecture d'espace claire, beaucoup de lumi\xE8re et une sensation de volume intacte.",
        media: "/fonds.png",
        alt: "Maison moderne avec large baie vitree",
        showcaseTitle: "Une cloison qui organise sans alourdir.",
        showcaseLead: "Le verre garde la lumi\xE8re, dessine les espaces et donne un rendu plus professionnel."
      };
    }
    if (key.includes("garde") || key.includes("corps")) {
      return {
        kicker: "Garde-corps",
        lead: "Pour s\xE9curiser une terrasse ou un \xE9tage sans casser la transparence du lieu ni la sensation de l\xE9g\xE8ret\xE9.",
        media: "/fonds.png",
        alt: "Maison moderne avec large baie vitree",
        showcaseTitle: "La s\xE9curit\xE9 sans perdre la vue.",
        showcaseLead: "Une solution discr\xE8te, lisible et durable pour les lieux qui veulent rester ouverts."
      };
    }
    if (key.includes("escalier")) {
      return {
        kicker: "Escalier en verre",
        lead: "Une pi\xE8ce forte visuellement, avec des lignes nettes, une circulation fluide et un rendu qui devient une signature du lieu.",
        media: "/fonds.png",
        alt: "Maison moderne avec large baie vitree",
        showcaseTitle: "Un point fort architectural.",
        showcaseLead: "L'escalier devient un \xE9l\xE9ment central du d\xE9cor, sans perdre sa fonction technique."
      };
    }
    if (key.includes("facade") || key.includes("vitrine")) {
      return {
        kicker: "Fa\xE7ade vitr\xE9e",
        lead: "Une entr\xE9e visuelle forte, pens\xE9e pour accueillir, prot\xE9ger et mettre en valeur l'image du lieu.",
        media: "/fonds.png",
        alt: "Maison moderne avec large baie vitree",
        showcaseTitle: "Une fa\xE7ade qui donne tout de suite le ton.",
        showcaseLead: "Grand format, lecture propre et pr\xE9sence premium pour un accueil plus marquant."
      };
    }
    return {
      kicker: "Service vitrerie",
      lead: `Un service pens\xE9 pour ${serviceName.toLowerCase()}: on relie le besoin, le support et le bon niveau de finition pour obtenir un r\xE9sultat durable.`,
      media: "/fonds.png",
      alt: "Maison moderne avec large baie vitree",
      showcaseTitle: "Un service construit autour de la pr\xE9cision.",
      showcaseLead: "Chaque projet est cadr\xE9 pour rester clair, coh\xE9rent et durable dans le temps."
    };
  })();
  const heroFeatures = [
    {
      icon: "glass",
      tone: "blue",
      title: "ANALYSE",
      subtitle: "DU SUPPORT"
    },
    {
      icon: "repair",
      tone: "red",
      title: "POSE",
      subtitle: "MAITRISEE"
    },
    {
      icon: "quality",
      tone: "blue",
      title: "FINITIONS",
      subtitle: "PROPRES"
    },
    {
      icon: "shield",
      tone: "blue",
      eyebrow: "Fabrication",
      title: "Verres de s\xE9curit\xE9",
      description: "Fabrication de verres de s\xE9curit\xE9 pour les zones qui demandent plus de r\xE9sistance et de protection."
    },
    {
      icon: "shield",
      tone: "red",
      eyebrow: "Fabrication",
      title: "Verres feuillet\xE9s",
      description: "Production de verres feuillet\xE9s pour renforcer la tenue, la s\xE9curit\xE9 et le confort acoustique."
    },
    {
      icon: "thermo",
      tone: "blue",
      eyebrow: "Isolation",
      title: "Double-vitrage",
      description: "Fabrication de double-vitrage pour am\xE9liorer l'isolation thermique et la performance \xE9nerg\xE9tique."
    },
    {
      icon: "quality",
      tone: "blue",
      eyebrow: "Finition",
      title: "Bords polis",
      description: "Polissage des bords pour obtenir une finition plus nette, plus s\xFBre et plus propre."
    },
    {
      icon: "glass",
      tone: "red",
      eyebrow: "Sur mesure",
      title: "Miroirs circulaires ou formes sur mesure",
      description: "Fabrication de miroirs circulaires ou de d\xE9coupes aux formes souhait\xE9es selon votre projet."
    },
    {
      icon: "glass",
      tone: "blue",
      eyebrow: "D\xE9cor",
      title: "Verres sabl\xE9s",
      description: "R\xE9alisation de verres sabl\xE9s pour filtrer la vue, cr\xE9er des effets d\xE9coratifs ou pr\xE9server l'intimit\xE9."
    }
  ];
  const trustItems = [
    {
      icon: "clock",
      label: "DELAIS CLARIFIES"
    },
    {
      icon: "shield",
      label: "CHANTIER SECURISE"
    },
    {
      icon: "people",
      label: "SUIVI DIRECT"
    },
    {
      icon: "quality",
      label: "RESULTAT DURABLE"
    }
  ];
  const serviceCards = [
    {
      icon: "glass",
      tone: "blue",
      eyebrow: "Architecture",
      title: "Fa\xE7ades vitr\xE9es et murs-rideaux",
      description: "Cr\xE9ation, remplacement et pose de grandes surfaces vitr\xE9es pour valoriser les b\xE2timents et les halls d'accueil."
    },
    {
      icon: "glass",
      tone: "red",
      eyebrow: "Commerce",
      title: "Vitrines commerciales",
      description: "Conception de vitrines, devantures et baies vitr\xE9es pour les commerces, showrooms et espaces de r\xE9ception."
    },
    {
      icon: "people",
      tone: "blue",
      eyebrow: "Bureaux",
      title: "Cloisons de bureaux vitr\xE9es",
      description: "S\xE9paration \xE9l\xE9gante des espaces de travail tout en gardant la lumi\xE8re, la transparence et le confort visuel."
    },
    {
      icon: "thermo",
      tone: "blue",
      eyebrow: "Confort",
      title: "Vitrage isolant et acoustique",
      description: "Solutions de double vitrage et vitrages techniques pour am\xE9liorer l'isolation thermique et phonique."
    },
    {
      icon: "shield",
      tone: "red",
      eyebrow: "S\xE9curit\xE9",
      title: "Garde-corps et protections vitr\xE9es",
      description: "Installation de garde-corps, rampes et protections vitr\xE9es pour s\xE9curiser les circulations et les hauteurs."
    },
    {
      icon: "repair",
      tone: "blue",
      eyebrow: "Urgence",
      title: "Remplacement apr\xE8s casse",
      description: "Mise en s\xE9curit\xE9 rapide, remplacement du vitrage et reprise des finitions pour retrouver un site propre."
    }
  ];
  const processSteps = [
    {
      step: "01",
      title: "Evaluer",
      description: "On commence par comprendre le support, les contraintes et l'attente du projet."
    },
    {
      step: "02",
      title: "Preparer",
      description: "On ajuste le vitrage, les dimensions et les fixations pour un rendu net."
    },
    {
      step: "03",
      title: "Poser",
      description: "La pose se fait avec un alignement propre et une finition soignee."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${serviceName} | Univers Glass`, "description": `Solution vitrerie ${serviceName} sur mesure.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell"> <section class="hero-card"> <div class="hero-main"> <div class="hero-copy"> <div class="hero-copy__bg" aria-hidden="true"></div> ${renderComponent($$result2, "BrandLockup", $$BrandLockup, { "size": "hero" })} <h1 class="hero-title"> <span>SERVICE</span> <span class="hero-title--accent">${serviceName.toUpperCase()}</span> <span>SUR MESURE</span> </h1> <span class="hero-rule" aria-hidden="true"></span> <p class="hero-description">${serviceContext.lead}</p> <div class="feature-list"> ${heroFeatures.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")}> <span class="feature-item__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon })} </span> <span class="feature-item__copy"> <span>${feature.title}</span> <span>${feature.subtitle}</span> </span> </div>`)} </div> <div class="hero-actions"> <a class="hero-button hero-button--blue" href="/devis"> <span class="hero-button__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote" })} </span> <span class="hero-button__copy"> <small>DEMANDER UN</small> <strong>DEVIS CLAIR</strong> </span> </a> <a class="hero-button hero-button--red" href="/intervention-rapide"> <span class="hero-button__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow" })} </span> <span class="hero-button__copy"> <small>VOIR L'INTERVENTION</small> <strong>RAPIDE</strong> </span> </a> </div> </div> <div class="hero-media"> <img${addAttribute(serviceContext.media, "src")}${addAttribute(serviceContext.alt, "alt")} loading="eager"> </div> </div> <div class="hero-bottom"> <div class="hero-bottom__items"> ${trustItems.map((item) => renderTemplate`<div class="trust-item"> <span class="trust-item__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon })} </span> <span class="trust-item__label">${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/contact"> <span class="contact-panel__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail" })} </span> <span class="contact-panel__copy"> <strong>CONTACTEZ-NOUS</strong> <small>Nous sommes à votre écoute</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase"> <div class="showcase-heading"> <span class="section-kicker">SERVICES INDUSTRIELS</span> <h2>Les services qu'une vitrerie industrielle peut fournir.</h2> <p>
Façades vitrées, vitrines commerciales, cloisons de bureaux, vitrage
          isolant, garde-corps, protections vitrées et remplacement après casse:
          voici les principales prestations que nous pouvons prendre en charge.
          Nous assurons aussi la fabrication sur mesure de verres de sécurité,
          verres feuilletés, double-vitrage, bords polis, miroirs circulaires ou
          de forme souhaitée, ainsi que des verres sablés.
</p> </div> <div class="showcase-stage"> <div class="showcase-grid"> ${serviceCards.map((card) => renderTemplate`<article class="showcase-card"> <span${addAttribute(`showcase-card__icon showcase-card__icon--${card.tone}`, "class")}> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": card.icon })} </span> <span class="showcase-card__eyebrow">${card.eyebrow}</span> <h3>${card.title}</h3> <p>${card.description}</p> </article>`)} </div> </div> </section> <section class="signature-section" data-animate="signature"> <div class="signature-copy"> <span class="section-kicker">METHODE</span> <h2>Une progression simple pour garder un rendu propre.</h2> <p>
On garde la lecture du projet claire, du premier échange jusqu'à la pose finale.
</p> </div> <div class="signature-grid"> ${processSteps.map((step) => renderTemplate`<article class="signature-card"> <span class="signature-card__step">${step.step}</span> <h3>${step.title}</h3> <p>${step.description}</p> </article>`)} </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/services/[slug].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/services/[slug].astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
