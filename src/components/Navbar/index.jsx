import Link from "next/link";
import InputSearch from "./InputSearch";
import Image from "next/image";
import HeaderLogo from "../AnimeList/HeaderLogo";

const Navbar = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-1 mb-4">
          <Link className="flex items-center" href={"/"}>
            <Image
              src={"/images/catside.png"}
              alt={"logo"}
              width={40}
              height={40}
            />
            <h1 className="text-3xl font-bold text-color-primary">Mynime</h1>
          </Link>
          <InputSearch />
        </div>
        <hr />
      </div>
      <HeaderLogo />
    </>
  );
};

export default Navbar;
