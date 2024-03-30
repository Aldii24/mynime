"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utils/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataPopuler = async () => {
    const anime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(anime);
  };

  useEffect(() => {
    fetchDataPopuler();
  }, [page]);

  return (
    <>
      <div>
        <Header title="Paling Populer" />
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
