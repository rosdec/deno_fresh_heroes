// deno-lint-ignore-file
import Hero from "./interface.ts";

declare global {
  var heroes: Hero[];
}

export default heroes; 