"use client";

import Header from "@/components/AnimeList/Header";
import AnimeSeasons from "@/components/SeasonsNow";
import PaginationSeasons from "@/components/Utils/PaginationSeasons";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [seasons, setSeasons] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataSeasons = async () => {
    const season = await getAnimeResponse("seasons/now", `page=${page}`);
    setSeasons(season);
  };

  useEffect(() => {
    fetchDataSeasons();
  }, [page]);

  return (
    <>
      <div>
        <Header title="Season Sekarang" />
        <AnimeSeasons api={seasons} />
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
