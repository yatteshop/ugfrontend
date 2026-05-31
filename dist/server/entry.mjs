import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DznJnqjp.mjs';
import { manifest } from './manifest_CMfk_O7x.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/_---path_.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/devis/merci.astro.mjs');
const _page5 = () => import('./pages/devis.astro.mjs');
const _page6 = () => import('./pages/intervention-rapide.astro.mjs');
const _page7 = () => import('./pages/services/_slug_.astro.mjs');
const _page8 = () => import('./pages/zones/_city_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/[...path].js", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/devis/merci.astro", _page4],
    ["src/pages/devis/index.astro", _page5],
    ["src/pages/intervention-rapide.astro", _page6],
    ["src/pages/services/[slug].astro", _page7],
    ["src/pages/zones/[city].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/EMMA/ug/ugfrontend/dist/client/",
    "server": "file:///C:/Users/EMMA/ug/ugfrontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
