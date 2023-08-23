import { type FormEvent, useState, useEffect } from "react";
import { atom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { api } from "../utils/api";
export const artistAtom = atom("");

export default function Search() {
  const [searchedArtist, setSearchedArtist] = useState("");
  const [artistlist, setArtistList] = useState<{ name: string }[] | null>();
  const router = useRouter();
  const setArtist = useSetAtom(artistAtom);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const artistName = formData.get("artist") as string;
    setArtist(artistName);
    void router.push("/Quiz");
  }
  const possibleArtists = api.mbdb.getAllArtists.useQuery(searchedArtist).data
  useEffect(() => {
    setArtistList(possibleArtists)
  },[possibleArtists])



  
  return (

    
    <Combobox>
      <form onSubmit={handleSubmit}>
      <button type="submit">Search Artist</button>
      <Combobox.Input name="artist" onChange={(event) => setSearchedArtist(event.target.value)} />
      <Combobox.Options>
        {artistlist?.map((person) => (
          <Combobox.Option key={person.name} value={person.name}>
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
      </form>
    </Combobox>

  );
}
