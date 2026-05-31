export const prerender = false;

const backendBaseUrl =
  import.meta.env.PRIVATE_API_BASE_URL ??
  import.meta.env.PUBLIC_API_BASE_URL ??
  "http://127.0.0.1:8000/api";

const proxyRequest = async ({ request, url }) => {
  const proxyPath = url.pathname.replace(/^\/api\/?/, "");
  const normalizedBase = backendBaseUrl.endsWith("/")
    ? backendBaseUrl
    : `${backendBaseUrl}/`;
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
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.text(),
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

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
export const OPTIONS = proxyRequest;
