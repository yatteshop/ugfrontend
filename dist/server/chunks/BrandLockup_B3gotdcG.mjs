import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_0AjLyGG5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$BrandLockup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BrandLockup;
  const { href = "/", label = "Univers Glass", size = "compact" } = Astro2.props;
  const dimensions = size === "hero" ? { width: 200, height: 80 } : { width: 100, height: 40 };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`brand-lockup brand-lockup--${size}`, "class")}${addAttribute(href, "href")}${addAttribute(label, "aria-label")} data-astro-cid-tx7w572m> <img class="brand-lockup__logo" src="/goodlogo.png" alt="" aria-hidden="true"${addAttribute(dimensions.width, "width")}${addAttribute(dimensions.height, "height")} loading="eager" decoding="async" data-astro-cid-tx7w572m> </a> `;
}, "C:/Users/EMMA/ug/ugfrontend/src/components/ui/BrandLockup.astro", void 0);

export { $$BrandLockup as $ };
