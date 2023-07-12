import type  { FormEvent } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [shouldRoute, setShouldRoute] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const artist = (event.currentTarget.elements.namedItem('artist') as HTMLInputElement).value;

    localStorage.setItem(
      "artistPicked",
      artist
    );
    setShouldRoute(true)

  };
  if (shouldRoute) {
  void router.push("/Quiz")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Artist Name</label>
      <input type="text" id="artist" name="artist" required></input>
      <button type="submit"> Submit </button>
    </form>
  );
}
