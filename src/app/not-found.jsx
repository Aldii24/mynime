"use client";

import AnimeList from "@/components/AnimeList";
import Footer from "@/components/AnimeList/Footer";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [animeSeason, setAnimeSeason] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataSeason = async () => {
    const response = await getAnimeResponse("seasons/upcoming", `page=${page}`);
    setAnimeSeason(response);
  };

  useEffect(() => {
    fetchDataSeason();
  }, [page]);

  return (
    <>
      <section>
        <h1 className="text-center font-bold">404 || NOT FOUND</h1>
        <Image
          className="img-notfound"
          src={"/images/notfound.png"}
          width={200}
          height={200}
        />
      </section>

      <section>
        <Header title="Rekomendasi Season Mendatang" />
        <AnimeList api={animeSeason} />
        <Footer linkTitle={"Lihat Semua"} linkHref={"/seasonsupcoming"} />
      </section>
    </>
  );
};

export default Page;
