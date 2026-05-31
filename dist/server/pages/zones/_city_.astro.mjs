import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../../chunks/MarketingIcon_TLWSRWAh.mjs';
import { $ as $$BrandLockup } from '../../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                                      */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$city = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { city = "abidjan" } = Astro2.params;
  if (city.toLowerCase() !== "abidjan") {
    return Astro2.redirect("/zones/abidjan", 301);
  }
  const zoneName = "Abidjan";
  const coverageArea = "toute la C\xF4te d'Ivoire";
  const zoneLabel = `${zoneName} et ${coverageArea}`;
  const zoneContext = {
    kicker: "Zone d'intervention",
    lead: `\xC0 ${zoneName} et dans ${coverageArea}, on garde une r\xE9ponse directe, une qualification rapide et une intervention propre pour les besoins de vitrage et de s\xE9curisation.`,
    media: "/fonds.png",
    alt: "Maison moderne avec large baie vitree",
    showcaseTitle: `Une pr\xE9sence claire \xE0 ${zoneLabel}.`,
    showcaseLead: "Les demandes locales \xE0 Abidjan comme les interventions partout en C\xF4te d'Ivoire sont trait\xE9es avec la m\xEAme exigence visuelle et le m\xEAme niveau de lisibilit\xE9 que sur la home."
  };
  const heroFeatures = [
    {
      icon: "clock",
      tone: "blue",
      title: "REPONSE",
      subtitle: "LOCALE"
    },
    {
      icon: "shield",
      tone: "red",
      title: "PRISE EN",
      subtitle: "CHARGE CLAIRE"
    },
    {
      icon: "people",
      tone: "blue",
      title: "SUIVI",
      subtitle: "DIRECT"
    }
  ];
  const trustItems = [
    {
      icon: "quality",
      label: "CONNAISSANCE DU TERRAIN"
    },
    {
      icon: "clock",
      label: "REACTIVITE"
    },
    {
      icon: "shield",
      label: "DELAIS MAITRISES"
    },
    {
      icon: "people",
      label: "FIABILITE"
    }
  ];
  const zoneCards = [
    {
      icon: "clock",
      tone: "red",
      title: "Repondre vite",
      description: "Pour une casse, une s\xE9curisation ou un remplacement, on privil\xE9gie un \xE9change direct et une suite lisible."
    },
    {
      icon: "glass",
      tone: "blue",
      title: "Adapter la solution",
      description: "On garde un niveau de pr\xE9cision \xE9lev\xE9 pour choisir le vitrage et la finition les plus adapt\xE9s au contexte local."
    },
    {
      icon: "people",
      tone: "blue",
      title: "Garder un echange clair",
      description: "Le parcours reste simple, avec des informations utiles et un suivi facile \xE0 comprendre."
    }
  ];
  const processSteps = [
    {
      step: "01",
      title: "Qualifier",
      description: `On identifie la nature de la demande \xE0 Abidjan ou ailleurs en C\xF4te d'Ivoire, l'adresse et le niveau d'urgence.`
    },
    {
      step: "02",
      title: "Organiser",
      description: "On pr\xE9pare la r\xE9ponse locale, le d\xE9placement et les informations utiles pour avancer sans flou."
    },
    {
      step: "03",
      title: "Intervenir",
      description: "La suite se fait avec des lignes propres, un rendu clair et une fin de chantier soign\xE9e."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Zone d'intervention ${zoneLabel} | Univers Glass`, "description": `Interventions de vitrerie \xE0 Abidjan et dans toute la C\xF4te d'Ivoire.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell"> <section class="hero-card"> <div class="hero-main"> <div class="hero-copy"> <div class="hero-copy__bg" aria-hidden="true"></div> ${renderComponent($$result2, "BrandLockup", $$BrandLockup, { "size": "hero" })} <h1 class="hero-title"> <span>ZONE</span> <span class="hero-title--accent">${zoneName.toUpperCase()}</span> <span>${coverageArea.toUpperCase()}</span> </h1> <span class="hero-rule" aria-hidden="true"></span> <p class="hero-description">${zoneContext.lead}</p> <div class="feature-list"> ${heroFeatures.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")}> <span class="feature-item__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon })} </span> <span class="feature-item__copy"> <span>${feature.title}</span> <span>${feature.subtitle}</span> </span> </div>`)} </div> <div class="hero-actions"> <a class="hero-button hero-button--blue" href="/devis"> <span class="hero-button__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote" })} </span> <span class="hero-button__copy"> <small>DEMANDER UN</small> <strong>DEVIS LOCAL</strong> </span> </a> <a class="hero-button hero-button--red" href="/intervention-rapide"> <span class="hero-button__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow" })} </span> <span class="hero-button__copy"> <small>VOIR L'INTERVENTION</small> <strong>RAPIDE</strong> </span> </a> </div> </div> <div class="hero-media"> <img${addAttribute(zoneContext.media, "src")}${addAttribute(zoneContext.alt, "alt")} loading="eager"> </div> </div> <div class="hero-bottom"> <div class="hero-bottom__items"> ${trustItems.map((item) => renderTemplate`<div class="trust-item"> <span class="trust-item__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon })} </span> <span class="trust-item__label">${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/contact"> <span class="contact-panel__icon"> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail" })} </span> <span class="contact-panel__copy"> <strong>CONTACTEZ-NOUS</strong> <small>Nous sommes à votre écoute</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase"> <div class="showcase-heading"> <span class="section-kicker">${zoneContext.kicker}</span> <h2>${zoneContext.showcaseTitle}</h2> <p>${zoneContext.showcaseLead}</p> </div> <div class="showcase-stage"> <div class="showcase-grid"> ${zoneCards.map((card) => renderTemplate`<article class="showcase-card"> <span${addAttribute(`showcase-card__icon showcase-card__icon--${card.tone}`, "class")}> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": card.icon })} </span> <h3>${card.title}</h3> <p>${card.description}</p> </article>`)} </div> </div> </section> <section class="signature-section" data-animate="signature"> <div class="signature-copy"> <span class="section-kicker">PARCOURS LOCAL</span> <h2>Trois étapes pour une intervention propre à ${zoneLabel}.</h2> <p>
Le parcours reste simple du premier contact à la fin du chantier, avec des repères clairs et un échange direct.
</p> </div> <div class="signature-grid"> ${processSteps.map((step) => renderTemplate`<article class="signature-card"> <span class="signature-card__step">${step.step}</span> <h3>${step.title}</h3> <p>${step.description}</p> </article>`)} </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/zones/[city].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/zones/[city].astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/zones/[city].astro";
const $$url = "/zones/[city]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
