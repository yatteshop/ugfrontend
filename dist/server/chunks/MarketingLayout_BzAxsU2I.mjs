import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, h as createAstro, n as renderSlot } from './astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_AvIwMfAC.mjs';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="site-header__inner"> <a class="site-brand" href="/" aria-label="Univers Glass"> <img class="site-brand__logo" src="/goodlogo.png" alt="" aria-hidden="true" width="682" height="366" loading="eager" decoding="async"> </a> <nav class="site-nav" aria-label="Navigation principale"> <a href="/">Accueil</a> <a href="/intervention-rapide">Intervention rapide</a> <a href="/devis">Devis</a> </nav> <div class="site-header__actions"> <a class="site-header__quick" href="/intervention-rapide">Urgence</a> <a class="site-cta" href="/devis">Demander un devis</a> </div> </div> </header>`;
}, "C:/Users/EMMA/ug/ugfrontend/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="site-footer__inner"> <div class="site-footer__brand"> <strong>Univers Glass</strong> <p>
Vitrerie professionnelle, intervention rapide et pose sur mesure avec
        une exigence propre jusque dans les finitions.
</p> </div> <nav class="site-footer__nav" aria-label="Navigation secondaire"> <a href="/">Accueil</a> <a href="/intervention-rapide">Intervention rapide</a> <a href="/devis">Devis</a> </nav> <a class="site-footer__cta" href="/devis">Lancer un devis</a> </div> </footer>`;
}, "C:/Users/EMMA/ug/ugfrontend/src/components/layout/Footer.astro", void 0);

const $$Astro = createAstro();
const $$MarketingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarketingLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="marketing-layout"> <div class="marketing-layout__glow marketing-layout__glow--blue" aria-hidden="true"></div> <div class="marketing-layout__glow marketing-layout__glow--red" aria-hidden="true"></div> ${renderComponent($$result2, "Header", $$Header, {})} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/layouts/MarketingLayout.astro", void 0);

export { $$MarketingLayout as $ };
