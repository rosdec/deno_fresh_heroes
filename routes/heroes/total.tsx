import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req, _ctx) {
        return new Response(globalThis.heroes.length.toString(), {
            status: 200
        });
    }
}
