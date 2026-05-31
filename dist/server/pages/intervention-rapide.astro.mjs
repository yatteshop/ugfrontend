import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_TLWSRWAh.mjs';
import { $ as $$BrandLockup } from '../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                                   */
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$InterventionRapide = createComponent(($$result, $$props, $$slots) => {
  const emergencyHighlights = [
    {
      icon: "repair",
      tone: "red",
      title: "BRIS DE",
      subtitle: "GLACE"
    },
    {
      icon: "shield",
      tone: "blue",
      title: "MISE EN",
      subtitle: "S\xC9CURIT\xC9"
    },
    {
      icon: "glass",
      tone: "blue",
      title: "REPOSE",
      subtitle: "SUR MESURE"
    }
  ];
  const interventionTrustItems = [
    {
      icon: "clock",
      label: "DIAGNOSTIC RAPIDE"
    },
    {
      icon: "shield",
      label: "SITE S\xC9CURIS\xC9"
    },
    {
      icon: "quality",
      label: "FINITION PROPRE"
    },
    {
      icon: "people",
      label: "PRISE EN CHARGE CLAIRE"
    }
  ];
  const emergencyCases = [
    {
      icon: "repair",
      title: "Bris de glace",
      description: "Fen\xEAtre fissur\xE9e, vitrage cass\xE9 ou baie endommag\xE9e : nous organisons une intervention rapide pour remettre les lieux en \xE9tat."
    },
    {
      icon: "shield",
      title: "Mise en s\xE9curit\xE9",
      description: "Protection provisoire, fermeture de zone et mise en protection des acc\xE8s pour limiter les risques et les intrusions."
    },
    {
      icon: "glass",
      title: "Vitrine et fa\xE7ade",
      description: "Commerce, hall ou fa\xE7ade vitr\xE9e : remplacement et r\xE9organisation du vitrage avec une finition propre et professionnelle."
    }
  ];
  const workSteps = [
    {
      step: "01",
      title: "Qualification",
      description: "Nous identifions le type de vitrage, le niveau d'urgence et la meilleure marche \xE0 suivre."
    },
    {
      step: "02",
      title: "S\xE9curisation",
      description: "La zone est prot\xE9g\xE9e et isol\xE9e pour \xE9viter tout risque suppl\xE9mentaire pour les occupants."
    },
    {
      step: "03",
      title: "Remplacement",
      description: "Nous pr\xE9parons la repose avec les bonnes dimensions, le bon vitrage et la bonne finition."
    }
  ];
  const responseCommitments = [
    "Diagnostic rapide de la casse et de la solution adapt\xE9e",
    "Mise en s\xE9curit\xE9 imm\xE9diate si le remplacement n'est pas possible sur place",
    "Organisation du remplacement avec vitrage adapt\xE9 au support",
    "Finitions propres pour retrouver un site pr\xE9sentable rapidement"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Intervention rapide", "description": "Page d\xE9di\xE9e aux interventions rapides de vitrerie professionnelle.", "data-astro-cid-pomhtseb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell" data-astro-cid-pomhtseb> <section class="hero-card" data-astro-cid-pomhtseb> <div class="hero-main" data-astro-cid-pomhtseb> <div class="hero-copy" data-astro-cid-pomhtseb> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-pomhtseb></div> ${renderComponent($$result2, "BrandLockup", $$BrandLockup, { "size": "hero", "data-astro-cid-pomhtseb": true })} <h1 class="hero-title" data-astro-cid-pomhtseb> <span data-astro-cid-pomhtseb>INTERVENTION</span> <span class="hero-title--accent" data-astro-cid-pomhtseb>RAPIDE ET</span> <span data-astro-cid-pomhtseb>PROPRE</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-pomhtseb></span> <p class="hero-description" data-astro-cid-pomhtseb>
En cas de casse, de vitrage fragilisé ou de façade à sécuriser, nous
            intervenons pour protéger vite, remettre en sécurité et relancer une
            finition sérieuse.
</p> <div class="feature-list" data-astro-cid-pomhtseb> ${emergencyHighlights.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")} data-astro-cid-pomhtseb> <span class="feature-item__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon, "data-astro-cid-pomhtseb": true })} </span> <span class="feature-item__copy" data-astro-cid-pomhtseb> <span data-astro-cid-pomhtseb>${feature.title}</span> <span data-astro-cid-pomhtseb>${feature.subtitle}</span> </span> </div>`)} </div> <div class="hero-actions" data-astro-cid-pomhtseb> <a class="hero-button hero-button--red" href="/devis" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>DECLENCHER UNE</small> <strong data-astro-cid-pomhtseb>DEMANDE D'INTERVENTION</strong> </span> </a> <a class="hero-button hero-button--blue" href="#intervention-method" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "shield", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>VOIR LA</small> <strong data-astro-cid-pomhtseb>MÉTHODE D'INTERVENTION</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-pomhtseb> <img src="/fonds.png" alt="Façade vitrée moderne à remettre rapidement en sécurité" loading="eager" data-astro-cid-pomhtseb> </div> </div> <div class="hero-bottom" data-astro-cid-pomhtseb> <div class="hero-bottom__items" data-astro-cid-pomhtseb> ${interventionTrustItems.map((item) => renderTemplate`<div class="trust-item" data-astro-cid-pomhtseb> <span class="trust-item__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-pomhtseb": true })} </span> <span class="trust-item__label" data-astro-cid-pomhtseb>${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/contact" data-astro-cid-pomhtseb> <span class="contact-panel__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-pomhtseb": true })} </span> <span class="contact-panel__copy" data-astro-cid-pomhtseb> <strong data-astro-cid-pomhtseb>CONTACTEZ-NOUS</strong> <small data-astro-cid-pomhtseb>Détaillez l'urgence et la prise en charge souhaitée</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-pomhtseb> <div class="showcase-heading" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>CAS PRIS EN CHARGE</span> <h2 data-astro-cid-pomhtseb>Des urgences traitées avec la même tenue visuelle que la home.</h2> <p data-astro-cid-pomhtseb>
Chaque intervention reste cadrée, lisible et organisée, que l'on parle
          d'une casse simple, d'une sécurisation provisoire ou d'une reprise
          plus complète.
</p> </div> <div class="intervention-cases-grid" data-astro-cid-pomhtseb> ${emergencyCases.map((item) => renderTemplate`<article class="intervention-case-card" data-astro-cid-pomhtseb> <span class="intervention-case-card__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-pomhtseb": true })} </span> <h3 data-astro-cid-pomhtseb>${item.title}</h3> <p data-astro-cid-pomhtseb>${item.description}</p> </article>`)} </div> </section> <section class="signature-section" id="intervention-method" data-animate="signature" data-astro-cid-pomhtseb> <div class="signature-copy" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>MÉTHODE D'INTERVENTION</span> <h2 data-astro-cid-pomhtseb>Une méthode claire pour aller vite sans improviser.</h2> <p data-astro-cid-pomhtseb>
L'urgence n'empêche pas la précision. Qualification, sécurisation et
          remplacement suivent une logique simple et solide.
</p> </div> <div class="signature-grid" data-astro-cid-pomhtseb> ${workSteps.map((item) => renderTemplate`<article class="signature-card" data-astro-cid-pomhtseb> <span class="signature-card__step" data-astro-cid-pomhtseb>${item.step}</span> <h3 data-astro-cid-pomhtseb>${item.title}</h3> <p data-astro-cid-pomhtseb>${item.description}</p> </article>`)} </div> </section> <section class="showcase-section" data-astro-cid-pomhtseb> <div class="showcase-heading" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>ENGAGEMENT CHANTIER</span> <h2 data-astro-cid-pomhtseb>Ce que vous devez retrouver après notre passage.</h2> <p data-astro-cid-pomhtseb>
Une zone plus sûre, une fermeture mieux gérée et une reprise
          visuellement propre pour retrouver vite un site présentable.
</p> </div> <div class="intervention-commitments-grid" data-astro-cid-pomhtseb> ${responseCommitments.map((item) => renderTemplate`<article class="intervention-commitment-card" data-astro-cid-pomhtseb> <span class="intervention-commitment-card__mark" aria-hidden="true" data-astro-cid-pomhtseb></span> <p data-astro-cid-pomhtseb>${item}</p> </article>`)} </div> </section> <section class="signature-section intervention-cta-section" data-astro-cid-pomhtseb> <div class="signature-copy" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>BESOIN D'AGIR VITE</span> <h2 data-astro-cid-pomhtseb>Déclenchez votre demande d'intervention.</h2> <p data-astro-cid-pomhtseb>
Donnez les dimensions, le type de vitrage et la nature du besoin pour
          lancer la prise en charge dans de bonnes conditions.
</p> </div> <div class="intervention-cta-actions" data-astro-cid-pomhtseb> <a class="hero-button hero-button--red" href="/devis" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>ACCÉDER AU</small> <strong data-astro-cid-pomhtseb>FORMULAIRE DE DEVIS</strong> </span> </a> <a class="hero-button hero-button--blue" href="/" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>REVENIR À</small> <strong data-astro-cid-pomhtseb>L'ACCUEIL</strong> </span> </a> </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro";
const $$url = "/intervention-rapide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InterventionRapide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
