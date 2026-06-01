export const prerender = false;

const backendBaseUrl =
  process.env.PRIVATE_API_BASE_URL ??
  import.meta.env.PUBLIC_API_BASE_URL ??
  import.meta.env.PUBLIC_API_URL ??
  "https://universglass.pythonanywhere.com/api";

const proxyRequest = async ({ request, url }) => {
  const proxyPath = url.pathname.replace(/^\/api\/?/, "");
  const normalizedBase = backendBaseUrl.endsWith("/")
    ? backendBaseUrl
    : `${backendBaseUrl}/`;
  const targetUrl = new URL(`${proxyPath}${url.search}`, normalizedBase);

  // Only forward the headers the Django API actually needs.
  const headers = new Headers();
  for (const headerName of [
    "accept",
    "content-type",
    "authorization",
    "x-requested-with"
  ]) {
    const headerValue = request.headers.get(headerName);
    if (headerValue) headers.set(headerName, headerValue);
  }

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
