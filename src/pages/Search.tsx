import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [shouldRoute, setShouldRoute] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(
      "artistPicked",
      event.currentTarget.artist.value
    );
    setShouldRoute(true)

  };
  if (shouldRoute) {
  router.push("/Quiz")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Artist Name</label>
      <input type="text" id="artist" name="artist" required></input>
      <button type="submit"> Submit </button>
    </form>
  );
}
