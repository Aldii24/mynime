"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchAnime = useRef();

  const handleSearch = (event) => {
    const keyword = searchAnime.current.value;
    if (keyword === "" || keyword.trim() === "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex p-1 border-black border rounded items-center">
      <input
        className="rounded outline-none placeholder:text-color-primary w-full"
        type="text"
        placeholder="Search..."
        ref={searchAnime}
        onKeyDown={handleSearch}
      />
      <button className="p-1">
        <MagnifyingGlass size={20} onClick={handleSearch} />
      </button>
    </div>
  );
};

export default InputSearch;
