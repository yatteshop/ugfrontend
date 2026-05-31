import { e as createComponent, g as addAttribute, p as renderHead, n as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_0AjLyGG5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "" } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#0f172a">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/EMMA/ug/ugfrontend/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
