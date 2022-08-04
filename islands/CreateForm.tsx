/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

export default function CreateForm() {
  const [q, setQ] = useState("");

  async function onSubmit() {
    console.log(q);

    await fetch("/heroes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: q }),
    });
  }

  function handleInput(e:Event) {
    setQ((e.target as HTMLTextAreaElement).value);
  }

  return (
    <div class={tw`flex gap-2 w-full`}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          class={tw`border rounded shadow-md px-4 py-2`}
          name="newHeroName"
          onChange={handleInput}
          placeholder="New hero name"
        />
        <button
          class={tw
            `border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`}
          type="submit"
        >
          Add new hero
        </button>
      </form>
    </div>
  );
}
