import { type FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { api } from "../utils/api";

export default function Search() {
  const [searchedArtist, setSearchedArtist] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    void router.push("/SearchResults/" + searchedArtist);
  }

  const possibleArtists = api.mbdb.getAllArtists.useQuery(searchedArtist, {
    refetchOnWindowFocus: false,
  }).data;

  return (
<>
      <p
        className="font-metropolist absolute left-1/3  top-[29.06rem] h-[6.75rem] w-[72.375rem]
      text-center text-[4rem] font-black leading-none text-white"
      >
        Type in something to generate a custom quiz
      </p>
      <div className="absolute left-1/3 top-[44.62rem] flex h-[5rem] w-[80rem]">
        <form onSubmit={handleSubmit} name="artist">
          <Combobox
            value={searchedArtist}
            onChange={setSearchedArtist}
            name="artist"
          >
            <Combobox.Input
              onChange={(event) => {
                setSearchedArtist(event.target.value);
              }}
              className=" line-normal placeholder-shown:line-normal h-[4.9375rem]
              w-[49rem] flex-none items-center justify-center gap-[7.8rem]
              bg-[#979797] px-[6.44rem] font-metropolis text-[2.32rem]
              font-bold text-[#C2C2C2] placeholder:font-metropolis placeholder:italic
              placeholder:text-[#C2C2C2]"
              placeholder="Type artist name in here..."
            ></Combobox.Input>
            <button
              className=" 
          line-normal h-[4.9375rem]  w-[20.5625rem] flex-none items-center
          justify-center gap-[7.8rem] bg-white font-metropolis text-[2.32rem] font-bold
          text-black"
            >
              Search
            </button>

            <Combobox.Options
              className="h-[23.875rem] w-[49rem] justify-center
            bg-[#4E4545]"
            >
              {possibleArtists?.map((person) => (
                <Combobox.Option
                  className="pt-[2.12rem] font-metropolis text-[2.33rem]
                  font-medium leading-none text-white"
                  key={person.name}
                  value={person.name}
                >
                  {person.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </form>
      </div>
    </>
  );
}
