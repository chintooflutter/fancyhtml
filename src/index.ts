const PAGES_BASE_URL = "https://fancyhtml.pages.dev";

export default {
  async fetch(request: Request, env: {}, ctx: ExecutionContext): Promise<Response> {
    try {
      // Fetch all three HTML files in parallel from Cloudflare Pages
      const [indexHtml, headerHtml, footerHtml] = await Promise.all([
        fetchAsset("/index.html"),
        fetchAsset("/partials/header.html"),
        fetchAsset("/partials/footer.html"),
      ]);

      // Inject header and footer into index.html
      const finalHtml = indexHtml
        .replace("<!-- header.html will be injected here by Cloudflare Worker -->", headerHtml)
        .replace("<!-- footer.html will be injected here by Cloudflare Worker -->", footerHtml);

      return new Response(finalHtml, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });

    } catch (error: any) {
      console.error("Failed to fetch or inject HTML:", error);
      return new Response("Error loading page content.", {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  }
};

// 🔧 Fetch asset from your Cloudflare Pages project
async function fetchAsset(path: string): Promise<string> {
  const url = `${PAGES_BASE_URL}${path}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  return await res.text();
}
