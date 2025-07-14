export default {
  async fetch(request: Request, env: {}, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    try {
      // Load HTML files from your deployed Pages repo or Worker asset path
      const [indexHtml, headerHtml, footerHtml] = await Promise.all([
        fetchAsset("/index.html"),
        fetchAsset("/partials/header.html"),
        fetchAsset("/partials/footer.html")
      ]);

      // Inject header and footer
      const finalHtml = indexHtml
        .replace("<!-- header.html will be injected here by Cloudflare Worker -->", headerHtml)
        .replace("<!-- footer.html will be injected here by Cloudflare Worker -->", footerHtml);

      return new Response(finalHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });

    } catch (err) {
      return new Response("Error loading page content.", {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
};

// Helper function to fetch HTML content from public asset URL
async function fetchAsset(path: string): Promise<string> {
  const res = await fetch(`https://fancyhtml.bfftalk143.workers.dev${path}`);
  if (!res.ok) throw new Error(`Failed to fetch: ${path}`);
  return await res.text();
}
