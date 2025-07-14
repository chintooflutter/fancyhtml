import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    let path = url.pathname

    // remove trailing slash or default to index.html
    if (path === "/") path = "/index.html"
    if (!path.endsWith(".html")) path += ".html"

    try {
      // Load requested HTML
      const asset = await getAssetFromKV({ request: new Request(path, request), waitUntil: ctx.waitUntil.bind(ctx) })

      const content = await asset.text()

      // Only inject into HTML files
      if (path.endsWith(".html")) {
        const header = await (await fetch(new URL('/partials/header.html', request.url))).text()
        const footer = await (await fetch(new URL('/partials/footer.html', request.url))).text()

        const fullHTML = content
          .replace("<!-- header.html will be injected here -->", header)
          .replace("<!-- footer.html will be injected here -->", footer)

        return new Response(fullHTML, {
          headers: {
            'Content-Type': 'text/html',
          },
        })
      }

      // Non-HTML fallback (images, CSS, etc.)
      return asset
    } catch (err) {
      return new Response('404 Not Found', { status: 404 })
    }
  },
}
