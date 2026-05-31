export { renderers } from '../../renderers.mjs';

const prerender = false;
const backendBaseUrl = "http://127.0.0.1:8000/api";
const proxyRequest = async ({ request, url }) => {
  const proxyPath = url.pathname.replace(/^\/api\/?/, "");
  const normalizedBase = backendBaseUrl.endsWith("/") ? backendBaseUrl : `${backendBaseUrl}/`;
  const targetUrl = new URL(`${proxyPath}${url.search}`, normalizedBase);
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");
  headers.delete("expect");
  headers.delete("connection");
  headers.delete("origin");
  headers.delete("referer");
  headers.delete("cookie");
  headers.delete("x-csrftoken");
  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? void 0 : await request.text(),
    redirect: "manual"
  });
  const responseHeaders = new Headers(response.headers);
  responseHeaders.delete("content-length");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders
  });
};
const GET = proxyRequest;
const POST = proxyRequest;
const PUT = proxyRequest;
const PATCH = proxyRequest;
const DELETE = proxyRequest;
const OPTIONS = proxyRequest;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  OPTIONS,
  PATCH,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
