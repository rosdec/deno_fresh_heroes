/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  function capitalizeFirstLetter(a:string) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }

  return <div>Hello { capitalizeFirstLetter(props.params.name) }!<br/>The server time is: { new Date().toDateString() } </div>;
}
 