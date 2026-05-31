import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../chunks/MarketingLayout_BzAxsU2I.mjs';
import { $ as $$BrandLockup } from '../chunks/BrandLockup_B3gotdcG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const recoveryLinks = [
    {
      title: "Retour \xE0 l'accueil",
      description: "Revenir \xE0 la page principale et repartir sur une navigation claire.",
      href: "/"
    },
    {
      title: "Demande de devis",
      description: "Acc\xE9der directement au parcours devis pour un besoin concret.",
      href: "/devis"
    },
    {
      title: "Intervention rapide",
      description: "Basculer vers la page d'urgence si vous cherchez une action imm\xE9diate.",
      href: "/intervention-rapide"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "404", "description": "Page introuvable.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell not-found-page" data-astro-cid-zetdm5md> <section class="not-found-hero" data-astro-cid-zetdm5md> <div class="not-found-hero__copy" data-astro-cid-zetdm5md> ${renderComponent($$result2, "BrandLockup", $$BrandLockup, { "data-astro-cid-zetdm5md": true })} <p class="eyebrow" data-astro-cid-zetdm5md>Navigation interrompue</p> <h1 data-astro-cid-zetdm5md>Cette page n'est plus à l'endroit attendu.</h1> <p data-astro-cid-zetdm5md>
Le lien est peut-être ancien, incomplet ou la page a simplement été
          déplacée. Le plus simple est de repartir sur une entrée propre.
</p> <div class="actions" data-astro-cid-zetdm5md> <a class="button-link" href="/" data-astro-cid-zetdm5md>Retour à l'accueil</a> <a class="button-link button-link--secondary" href="/devis" data-astro-cid-zetdm5md>Accéder au devis</a> </div> </div> <aside class="not-found-hero__panel" data-astro-cid-zetdm5md> <span class="not-found-hero__code" data-astro-cid-zetdm5md>404</span> <p data-astro-cid-zetdm5md>Page introuvable</p> <small data-astro-cid-zetdm5md>Univers Glass reste accessible via l'accueil, le devis et l'intervention rapide.</small> </aside> </section> <section class="not-found-grid" data-astro-cid-zetdm5md> ${recoveryLinks.map((item) => renderTemplate`<article class="page-card not-found-card" data-astro-cid-zetdm5md> <h2 data-astro-cid-zetdm5md>${item.title}</h2> <p data-astro-cid-zetdm5md>${item.description}</p> <a${addAttribute(item.href, "href")} data-astro-cid-zetdm5md>Ouvrir la page</a> </article>`)} </section> </main>  ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/404.astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
