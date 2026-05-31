import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_AvIwMfAC.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_TLWSRWAh.mjs';
import { $ as $$BrandLockup } from '../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                                   */
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const phoneDisplay = "07 68 74 30 02";
  const phoneLink = "tel:0768743002";
  const whatsappLink = "https://wa.me/33768743002";
  const emailAddress = "nchodavyphilippe@gmail.com";
  const emailLink = `mailto:${emailAddress}`;
  const contactTrustItems = [
    {
      icon: "clock",
      label: "R\xC9PONSE RAPIDE"
    },
    {
      icon: "people",
      label: "CONTACT DIRECT"
    },
    {
      icon: "shield",
      label: "PRISE EN CHARGE CLAIRE"
    },
    {
      icon: "quality",
      label: "ACCOMPAGNEMENT S\xC9RIEUX"
    }
  ];
  const contactFlow = [
    {
      step: "01",
      title: "Appelez-nous",
      description: "Pour un besoin imm\xE9diat, vous pouvez nous joindre directement par t\xE9l\xE9phone."
    },
    {
      step: "02",
      title: "Ecrivez sur WhatsApp",
      description: "Partagez rapidement votre besoin, vos dimensions ou une premi\xE8re photo sur WhatsApp."
    },
    {
      step: "03",
      title: "Envoyez un email",
      description: "Pour une demande plus d\xE9taill\xE9e, vous pouvez \xE9galement nous \xE9crire par email."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Contactez Univers Glass par t\xE9l\xE9phone, WhatsApp ou email.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell" data-astro-cid-uw5kdbxl> <section class="hero-card" data-astro-cid-uw5kdbxl> <div class="hero-main" data-astro-cid-uw5kdbxl> <div class="hero-copy" data-astro-cid-uw5kdbxl> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-uw5kdbxl></div> ${renderComponent($$result2, "BrandLockup", $$BrandLockup, { "size": "hero", "data-astro-cid-uw5kdbxl": true })} <h1 class="hero-title" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>CONTACTEZ</span> <span class="hero-title--accent" data-astro-cid-uw5kdbxl>UNIVERS</span> <span data-astro-cid-uw5kdbxl>GLASS</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-uw5kdbxl></span> <p class="hero-description" data-astro-cid-uw5kdbxl>
Téléphone, WhatsApp ou email : choisissez le canal le plus simple
            pour nous joindre et lancer votre demande.
</p> <div class="feature-list" data-astro-cid-uw5kdbxl> <div class="feature-item feature-item--blue" data-astro-cid-uw5kdbxl> <span class="feature-item__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M7.4 4.6h2.8l1 4-1.7 1.7a14 14 0 0 0 4.9 4.9l1.7-1.7 4 1v2.8a1.4 1.4 0 0 1-1.4 1.4A15.3 15.3 0 0 1 5.9 6a1.4 1.4 0 0 1 1.5-1.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" data-astro-cid-uw5kdbxl></path> </svg> </span> <span class="feature-item__copy" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>APPEL</span> <span data-astro-cid-uw5kdbxl>DIRECT</span> </span> </div> <div class="feature-item feature-item--red" data-astro-cid-uw5kdbxl> <span class="feature-item__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M20 11.4c0 4.4-3.7 8-8.3 8-.8 0-1.7-.1-2.4-.4L4 20.5l1.5-4.9a7.7 7.7 0 0 1-1-4.2c0-4.4 3.7-8 8.3-8S20 7 20 11.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> <path d="M9.6 8.9h1.4l.5 2-1 1a7 7 0 0 0 2.5 2.5l1-1 2 .5v1.4c0 .5-.4.9-.9.9a8.7 8.7 0 0 1-7.8-7.8c0-.5.4-.9.9-.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> </svg> </span> <span class="feature-item__copy" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>WHATSAPP</span> <span data-astro-cid-uw5kdbxl>RAPIDE</span> </span> </div> <div class="feature-item feature-item--blue" data-astro-cid-uw5kdbxl> <span class="feature-item__icon" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-uw5kdbxl": true })} </span> <span class="feature-item__copy" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>EMAIL</span> <span data-astro-cid-uw5kdbxl>DIRECT</span> </span> </div> </div> <div class="hero-actions" data-astro-cid-uw5kdbxl> <a class="hero-button hero-button--blue"${addAttribute(phoneLink, "href")} data-astro-cid-uw5kdbxl> <span class="hero-button__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M7.4 4.6h2.8l1 4-1.7 1.7a14 14 0 0 0 4.9 4.9l1.7-1.7 4 1v2.8a1.4 1.4 0 0 1-1.4 1.4A15.3 15.3 0 0 1 5.9 6a1.4 1.4 0 0 1 1.5-1.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" data-astro-cid-uw5kdbxl></path> </svg> </span> <span class="hero-button__copy" data-astro-cid-uw5kdbxl> <small data-astro-cid-uw5kdbxl>APPELER AU</small> <strong data-astro-cid-uw5kdbxl>${phoneDisplay}</strong> </span> </a> <a class="hero-button hero-button--red"${addAttribute(whatsappLink, "href")} target="_blank" rel="noreferrer" data-astro-cid-uw5kdbxl> <span class="hero-button__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M20 11.4c0 4.4-3.7 8-8.3 8-.8 0-1.7-.1-2.4-.4L4 20.5l1.5-4.9a7.7 7.7 0 0 1-1-4.2c0-4.4 3.7-8 8.3-8S20 7 20 11.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> <path d="M9.6 8.9h1.4l.5 2-1 1a7 7 0 0 0 2.5 2.5l1-1 2 .5v1.4c0 .5-.4.9-.9.9a8.7 8.7 0 0 1-7.8-7.8c0-.5.4-.9.9-.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> </svg> </span> <span class="hero-button__copy" data-astro-cid-uw5kdbxl> <small data-astro-cid-uw5kdbxl>OUVRIR</small> <strong data-astro-cid-uw5kdbxl>WHATSAPP</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-uw5kdbxl> <img src="/fonds.png" alt="Façade vitrée moderne" loading="eager" data-astro-cid-uw5kdbxl> </div> </div> <div class="hero-bottom" data-astro-cid-uw5kdbxl> <div class="hero-bottom__items" data-astro-cid-uw5kdbxl> ${contactTrustItems.map((item) => renderTemplate`<div class="trust-item" data-astro-cid-uw5kdbxl> <span class="trust-item__icon" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-uw5kdbxl": true })} </span> <span class="trust-item__label" data-astro-cid-uw5kdbxl>${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/" data-astro-cid-uw5kdbxl> <span class="contact-panel__icon" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-uw5kdbxl": true })} </span> <span class="contact-panel__copy" data-astro-cid-uw5kdbxl> <strong data-astro-cid-uw5kdbxl>RETOUR À L'ACCUEIL</strong> <small data-astro-cid-uw5kdbxl>Revenir à la page d'accueil</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-uw5kdbxl> <div class="showcase-heading" data-astro-cid-uw5kdbxl> <span class="section-kicker" data-astro-cid-uw5kdbxl>CONTACT DIRECT</span> <h2 data-astro-cid-uw5kdbxl>Choisissez le canal le plus simple pour nous joindre.</h2> <p data-astro-cid-uw5kdbxl>
Vous pouvez nous appeler, nous écrire sur WhatsApp ou nous envoyer un
          email selon la nature de votre demande.
</p> </div> <div class="contact-grid" data-astro-cid-uw5kdbxl> <article class="contact-card" data-astro-cid-uw5kdbxl> <span class="contact-card__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M7.4 4.6h2.8l1 4-1.7 1.7a14 14 0 0 0 4.9 4.9l1.7-1.7 4 1v2.8a1.4 1.4 0 0 1-1.4 1.4A15.3 15.3 0 0 1 5.9 6a1.4 1.4 0 0 1 1.5-1.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" data-astro-cid-uw5kdbxl></path> </svg> </span> <h3 data-astro-cid-uw5kdbxl>Téléphone</h3> <p data-astro-cid-uw5kdbxl>Pour un échange immédiat et direct.</p> <strong data-astro-cid-uw5kdbxl>${phoneDisplay}</strong> <a${addAttribute(phoneLink, "href")} data-astro-cid-uw5kdbxl>Appeler maintenant</a> </article> <article class="contact-card contact-card--whatsapp" data-astro-cid-uw5kdbxl> <span class="contact-card__icon" data-astro-cid-uw5kdbxl> <svg class="contact-inline-icon" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M20 11.4c0 4.4-3.7 8-8.3 8-.8 0-1.7-.1-2.4-.4L4 20.5l1.5-4.9a7.7 7.7 0 0 1-1-4.2c0-4.4 3.7-8 8.3-8S20 7 20 11.4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> <path d="M9.6 8.9h1.4l.5 2-1 1a7 7 0 0 0 2.5 2.5l1-1 2 .5v1.4c0 .5-.4.9-.9.9a8.7 8.7 0 0 1-7.8-7.8c0-.5.4-.9.9-.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-astro-cid-uw5kdbxl></path> </svg> </span> <h3 data-astro-cid-uw5kdbxl>WhatsApp</h3> <p data-astro-cid-uw5kdbxl>Pratique pour envoyer rapidement un message ou un visuel.</p> <strong data-astro-cid-uw5kdbxl>${phoneDisplay}</strong> <a${addAttribute(whatsappLink, "href")} target="_blank" rel="noreferrer" data-astro-cid-uw5kdbxl>Ouvrir WhatsApp</a> </article> <article class="contact-card" data-astro-cid-uw5kdbxl> <span class="contact-card__icon" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-uw5kdbxl": true })} </span> <h3 data-astro-cid-uw5kdbxl>Email</h3> <p data-astro-cid-uw5kdbxl>Idéal pour une demande plus détaillée.</p> <strong data-astro-cid-uw5kdbxl>${emailAddress}</strong> <a${addAttribute(emailLink, "href")} data-astro-cid-uw5kdbxl>Envoyer un email</a> </article> </div> </section> <section class="signature-section" data-animate="signature" data-astro-cid-uw5kdbxl> <div class="signature-copy" data-astro-cid-uw5kdbxl> <span class="section-kicker" data-astro-cid-uw5kdbxl>PARCOURS SIMPLE</span> <h2 data-astro-cid-uw5kdbxl>Trois façons claires de nous joindre selon votre besoin.</h2> <p data-astro-cid-uw5kdbxl>
Que vous souhaitiez une réponse rapide, partager quelques détails ou
          envoyer une demande plus complète, la prise de contact reste simple.
</p> </div> <div class="signature-grid" data-astro-cid-uw5kdbxl> ${contactFlow.map((item) => renderTemplate`<article class="signature-card" data-astro-cid-uw5kdbxl> <span class="signature-card__step" data-astro-cid-uw5kdbxl>${item.step}</span> <h3 data-astro-cid-uw5kdbxl>${item.title}</h3> <p data-astro-cid-uw5kdbxl>${item.description}</p> </article>`)} </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/contact.astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
