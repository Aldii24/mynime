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
    <div className="relative">
      <input
        className="p-1.5 rounded-xl bg-color-gray placeholder:text-color-primary w-full"
        type="text"
        placeholder="Search..."
        ref={searchAnime}
        onKeyDown={handleSearch}
      />
      <MagnifyingGlass
        className="absolute top-1 right-2 cursor-pointer "
        size={25}
        onClick={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
