import {  type FormEvent } from "react";
import { atom, useSetAtom } from 'jotai';
import { useRouter } from "next/router";

export const artistAtom = atom('')

export default function Search() {
  const router = useRouter();
  const setArtist = useSetAtom(artistAtom)
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const artistName = formData.get("artist") as string;
    setArtist(artistName)
    void router.push('/Quiz');
  }

  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <label>Enter artist name:</label>
      <input type="text" name="artist"></input>
      <button>Search Artist</button>
    </form>
  );
}
