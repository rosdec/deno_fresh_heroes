/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { platform } from "https://deno.land/std@0.150.0/node/os.ts";

export default function Greet(props: PageProps) {
  function capitalizeFirstLetter(a: string) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }

  return (
    <div>
      Hello {capitalizeFirstLetter(props.params.name)}!<br />
      The server time is: {new Date().toDateString()}<br/>
      The server platform is: {platform() }
    </div>
  );
}
