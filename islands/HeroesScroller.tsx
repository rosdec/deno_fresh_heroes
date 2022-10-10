// deno-lint-ignore-file no-empty
/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
  firstName: string;
}

export default function HeroesScroller(props: CounterProps) {
  const [currentHero, setCurrentHero] = useState({id:props.start, name:props.firstName});

  const previousHero = async () => {
    let response;
    if (currentHero.id == 1) {
      const hero_len = await (await fetch("/heroes/total")).text();
      response = await fetch("/heroes/" + hero_len);
    } else {
      response = await fetch("/heroes/" + (currentHero.id - 1));
    }

    try { 
      const newHero = await response.json();

      const newCurrentHero = { id: newHero.id, name: newHero.name };

      setCurrentHero((currentHero) => ({
        ...currentHero,
        ...newCurrentHero,
      }));
    } catch {}
  };

  const nextHero = async () => {
    const hero_len = Number(await (await fetch("/heroes/total")).text());
    let response;
    if (currentHero.id == hero_len) {
      response = await fetch("/heroes/" + 1);
    } else {
      response = await fetch("/heroes/" + (currentHero.id + 1));
    }

    try {
      const newHero = await response.json();

      const newCurrentHero = { id: newHero.id, name: newHero.name };

      setCurrentHero((currentHero) => ({
        ...currentHero,
        ...newCurrentHero,
      }));
    } catch {}
  };

  const btn = tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <button
        class={btn}
        onClick={(e) => previousHero()}
        disabled={!IS_BROWSER}
      >
        Previous Hero
      </button>
      <p class={tw`border rounded shadow-md px-4 py-2 w-72`}>{currentHero.id}</p>
      <p class={tw`border rounded shadow-md px-4 py-2 w-72`}>{currentHero.name}</p>
      <button
        class={btn}
        onClick={(e) => nextHero()}
        disabled={!IS_BROWSER}
      >
        Next Hero
      </button>
    </div>
  );
}
