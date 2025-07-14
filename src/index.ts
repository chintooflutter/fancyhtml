// src/index.ts

export default {
    async fetch(request: Request): Promise<Response> {
      return new Response("Hello from FancyLetters Worker!", {
        headers: { "Content-Type": "text/plain" },
      });
    },
  };
  