import VideoPlayer from "@/components/Utils/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="p-4 mx-2">
        <div className="flex md:flex-row flex-col gap-10">
          <div>
            <Image
              className="img-anime rounded"
              src={anime.data.images.webp.image_url}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="rounded text-color-primaty border-b-2 border-color-primary">
              {anime.data.title} - {anime.data.year}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Rank
              </span>{" "}
              : {anime.data.rank}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Type
              </span>{" "}
              : {anime.data.type}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Popularity
              </span>{" "}
              : {anime.data.popularity}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Duration
              </span>{" "}
              : {anime.data.duration}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Source
              </span>{" "}
              : {anime.data.source}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Rating
              </span>{" "}
              : {anime.data.rating}
            </p>
          </div>
          <div className="flex flex-col pt-8 gap-2">
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Title Japanese
              </span>{" "}
              : {anime.data.title_japanese}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Title English
              </span>{" "}
              : {anime.data.title_english}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Episode
              </span>{" "}
              : {anime.data.episodes} Episodes
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Score
              </span>{" "}
              : {anime.data.score}
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Member
              </span>{" "}
              : {anime.data.members} Members
            </p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Favorites
              </span>{" "}
              : {anime.data.favorites} People
            </p>
          </div>
          <div>
            <Image
              src={"/images/catside.png"}
              alt="cat"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">Synopsis</h3>
          <hr />
          <p className="text-color-primary text-justify">
            {anime.data.synopsis}
          </p>
        </div>
        <hr />
        <div>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
        <hr />
        <div className="pt-4">
          <p>
            We always appreciate developers out there, so we always provide
            credit from developers who provide free APIs between developers.
            Sincerely fellow developers.
          </p>
        </div>
        <div className="pt-2">
          <Link
            className="bg-color-primary p-1.5 font-bold rounded text-color-tertiary"
            href={anime.data.url}
          >
            Watch More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

{
  /* <Link href={anime.data.url}>
          <p className="font-bold bg-color-primary rounded p-2 w-20 text-center mt-4 text-color-tertiary">
            Watch
          </p>
        </Link> */
}
