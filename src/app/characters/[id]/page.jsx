import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const topCharacters = await getAnimeResponse(`characters/${id}`);

  console.log(topCharacters);

  return (
    <>
      <div className="p-4">
        <div className="flex md:flex-row flex-col gap-2">
          <div>
            <Image
              className="img-anime rounded"
              src={topCharacters.data.images.webp.image_url}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="rounded text-color-primaty border-b-2 border-color-primary">
              {topCharacters.data.name}
            </p>
            <p className="font-bold">{topCharacters.data.name_kanji}</p>
            <p className="font-bold">
              <span className="bg-color-primary text-color-tertiary rounded p-1">
                Favorite
              </span>{" "}
              : {topCharacters.data.favorites} People
            </p>
            <hr />
            <div className="scrollbar md:fixed top-96 md:h-32 md:overflow-y-auto">
              <p>{topCharacters.data.about}</p>
            </div>
          </div>
        </div>
        <div className="pt-4 md:mx-10">
          <Link
            className="bg-color-primary text-color-tertiary p-1 rounded font-bold"
            href={topCharacters.data.url}
          >
            More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
