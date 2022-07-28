import { Handlers } from "$fresh/server.ts";
import { json, ReqWithBody } from 'https://deno.land/x/parsec@0.1.1/mod.ts';
import Hero from "../data/interface.ts";

export const handler: Handlers = {
    GET(_req, _ctx) {
        return new Response(JSON.stringify(globalThis.heroes), {
            status: 200
        });
    },
    async POST(_req, _ctx) {
        const body: ReqWithBody = _req;

        await json(body);

        const newHero: Hero = {
            id: globalThis.heroes.length + 1,
            name: body.parsedBody?.name as string,
        };
        globalThis.heroes.push(newHero);

        return new Response(JSON.stringify(globalThis.heroes), {
            status: 200
        });
    }
}
