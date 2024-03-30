import Image from "next/image";
import Link from "next/link";

const Characters = ({ api }) => {
  return (
    <>
      <div className="p-4 grid md:grid-cols-7 sm:grid-cols-4 mx-2 grid-cols-2 gap-2">
        {api.data?.map((character) => {
          return (
            <Link href={`/characters/${character.mal_id}`}>
              <Image
                className="img-character rounded"
                src={character.images.webp.image_url}
                width={200}
                height={200}
              />
              <p className="text-center mt-2 font-bold">{character.name}</p>
              <p className="text-center">{character.name_kanji}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
