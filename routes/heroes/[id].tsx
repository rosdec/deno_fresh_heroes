import { Handlers } from "$fresh/server.ts";
import { json, ReqWithBody } from 'https://deno.land/x/parsec@0.1.1/mod.ts';
import heroes from "../../data/heroes.ts";

export const handler: Handlers = {
    GET(_req, _ctx) {
        return new Response(JSON.stringify(globalThis.heroes.find(x => x.id == Number(_ctx.params.id))), {
            status: 200
        });
    },
    async POST(_req, _ctx) {
        const body:ReqWithBody = _req;
        
        await json(body);

        globalThis.heroes[globalThis.heroes.findIndex(x => x.id === Number(_ctx.params.id))].name = body.parsedBody?.name as string;

        return new Response(JSON.stringify(globalThis.heroes), {
            status: 200
        });
    },
    DELETE(_req, _ctx) {
        // You probably already know what should happen here
        return new Response(JSON.stringify(globalThis.heroes), {
            status: 200
        });
    }
}
