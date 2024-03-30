import Image from "next/image";
import Link from "next/link";

const AnimeSeasons = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-2 gap-4 p-4">
        {api.data?.map((season) => {
          return (
            <>
              <Link
                className="p-2 hover:bg-color-secondary rounded transition-all"
                href={`/anime/${season.mal_id}`}
              >
                <Image
                  className="img-anime rounded"
                  src={season.images.webp.image_url}
                  alt={season.title}
                  width={200}
                  height={200}
                />
                <p className="text-center text-color-primary mt-2 font-bold">
                  {season.title}
                </p>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AnimeSeasons;
