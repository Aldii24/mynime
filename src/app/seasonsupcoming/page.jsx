"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import PaginationSeasons from "@/components/Utils/PaginationSeasons";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [seasons, setSeasons] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataSeasons = async () => {
    const season = await getAnimeResponse("seasons/upcoming", `page=${page}`);
    setSeasons(season);
  };

  useEffect(() => {
    fetchDataSeasons();
  }, [page]);

  return (
    <>
      <div>
        <Header title="Season Mendatang" />
        <AnimeList api={seasons} />
        <PaginationSeasons
          page={page}
          lastPage={seasons.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
