"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import PaginationSearch from "@/components/Utils/PaginationSearch";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);
  const fetchDataSearch = async () => {
    const data = await getAnimeResponse(
      "anime",
      `q=${decodedKeyword}`,
      `page=${page}`
    );
    setAnime(data);
  };

  useEffect(() => {
    fetchDataSearch();
  }, [page]);

  return (
    <div>
      <Header title={`Kamu Mencari ${decodedKeyword}...`} />
      <AnimeList api={anime} />
      <PaginationSearch
        page={page}
        lastPage={anime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
