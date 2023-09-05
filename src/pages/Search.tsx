import { type FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { api } from "../utils/api";

export default function Search() {
  const [searchedArtist, setSearchedArtist] = useState("");
  const [artistlist, setArtistList] = useState<{ name: string }[] | null>();
  const router = useRouter();
  const setArtist = api.mbdb.pushArtist.useMutation()


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const artistName = formData.get("artist") as string;
    setArtist.mutate(artistName)
    void router.push("/Quiz");
  }

  // api.mbdb.pushArtist.useMutation().mutate(chosenArtist.current);


  const possibleArtists = api.mbdb.getAllArtists.useQuery(searchedArtist).data;
  useEffect(() => {
    setArtistList(possibleArtists);
  }, [possibleArtists]);

  return (
    <Combobox>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search Artist</button>
        <Combobox.Input
          name="artist"
          onChange={(event) => setSearchedArtist(event.target.value)}
        />
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
