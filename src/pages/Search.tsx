import { type FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { api } from "../utils/api";

export default function Search() {
  const [searchedArtist, setSearchedArtist] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [artistlist, setArtistList] = useState<{ name: string }[] | null>();
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Get the input element from the form
    const inputElement = e.currentTarget.elements.namedItem(
      "artist",
    ) as HTMLInputElement;

    // Get the value from the input element
    let currentInputValue = inputElement?.value || "";

    // If the inputValue state has a different value, use that
    if (currentInputValue !== inputValue) {
      currentInputValue = inputValue;
    }
    const href = "/Quiz/" + currentInputValue;
    void router.push(href);
  }

  const possibleArtists = api.mbdb.getAllArtists.useQuery(searchedArtist).data;
  useEffect(() => {
    setArtistList(possibleArtists);
  }, [possibleArtists]);

  return (
    <div className="relative h-screen w-screen bg-gradient-to-t from-black to-white to-20%">
      <div className="absolute h-full w-full bg-black opacity-80"></div>
      <p
        className="font-metropolist absolute left-1/3  top-[29.06rem] h-[6.75rem] w-[72.375rem]
      text-center text-[4rem] font-black leading-none text-white"
      >
        Type in something to generate a custom quiz
      </p>
      <div className="absolute left-1/3 top-[44.62rem] flex h-[5rem] w-[80rem]">
        <form onSubmit={handleSubmit} name="artist">
          <Combobox>
            <Combobox.Input
              type="text"
              form="artist"
              name="artist"
              onChange={(event) => {
                setSearchedArtist(event.target.value);
                setInputValue(event.target.value);
              }}
              className=" line-normal placeholder-shown:line-normal h-[4.9375rem]
              w-[49rem] flex-none items-center justify-center gap-[7.8rem]
              bg-[#979797] px-[6.44rem] font-metropolis text-[2.32rem]
              font-bold text-[#C2C2C2] placeholder:font-metropolis placeholder:italic
              placeholder:text-[#C2C2C2]"
              placeholder="Type artist name in here..."
            ></Combobox.Input>
            <button
              type="submit"
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
              {artistlist?.map((person) => (
                <Combobox.Option
                  className="pt-[2.12rem] font-metropolis text-[2.33rem]
                  font-medium leading-none text-white"
                  key={person.name}
                  value={person.name}
                  onSelect={() => {
                    setInputValue(person.name);
                  }}
                >
                  {person.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </form>
      </div>
    </div>
  );
}
