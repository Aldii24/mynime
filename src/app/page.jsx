import AnimeList from "@/components/AnimeList";
import Footer from "@/components/AnimeList/Footer";
import Header from "@/components/AnimeList/Header";
import Characters from "@/components/Characters";
import AnimeSeasons from "@/components/SeasonsNow";
import SeasonsUpcoming from "@/components/SeasonsUpcoming";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=14");
  const seasonsNow = await getAnimeResponse("seasons/now", "limit=14");
  const seasonsUpcoming = await getAnimeResponse("seasons/upcoming", "limit=7");
  const topCharacters = await getAnimeResponse("top/characters", "limit=14");

  return (
    <>
      {/* Populer Anime */}
      <section>
        <AnimeList api={topAnime} />
        <Footer linkTitle="Lihat Semua" linkHref="/populer" />
      </section>

      {/* Season Sekarang */}
      <section>
        <Header title="Season Sekarang" />
        <AnimeSeasons api={seasonsNow} />
        <Footer linkTitle="Lihat Semua" linkHref={"/seasonsnow"} />
      </section>

      {/* Season Mendatang */}
      <section>
        <Header title="Season Mendatang" />
        <SeasonsUpcoming api={seasonsUpcoming} />
        <Footer linkTitle="Lihat Semua" linkHref="/seasonsupcoming" />
      </section>

      {/* Karakter */}
      <section>
        <Header title="Karakter" />
        <Characters api={topCharacters} />
        <Footer linkTitle="Lihat Semua" linkHref="/topcharacters" />
      </section>
    </>
  );
};

export default Page;
