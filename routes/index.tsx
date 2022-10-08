/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import HeroesScroller from "../islands/HeroesScroller.tsx";
import Create from "../islands/CreateForm.tsx";

globalThis.heroes = [
  {
    id: 1,
    name: "Don Ciro"
  },
  {
    id: 2,
    name: "Savastano"
  },
  { 
    id: 3,
    name: "Janfranco"
  }
];

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text(3xl blue-500)`}>Tour of Heroes</h1>
      <HeroesScroller start={1} firstName={"Don Ciro"} />
      <br/>
      <Create></Create>
    </div>
  );
}
