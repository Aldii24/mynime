"use client";

import Header from "@/components/AnimeList/Header";
import Characters from "@/components/Characters";
import PaginationTopCharacters from "@/components/Utils/PaginationTopCharacters";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [topCharacters, setTopCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataTopCharacters = async () => {
    const characters = await getAnimeResponse("top/characters", `page=${page}`);
    setTopCharacters(characters);
  };

  useEffect(() => {
    fetchDataTopCharacters();
  }, [page]);

  return (
    <>
      <div>
        <Header title="Top Karakter" />
        <Characters api={topCharacters} />
        <PaginationTopCharacters
          page={page}
          lastPage={topCharacters.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
