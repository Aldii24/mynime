import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="p-4 mx-2">
      <Image
        className="img-bg rounded"
        src={"/images/bg.jpeg"}
        width={200}
        height={200}
        alt={"logo"}
      />
    </div>
  );
};

export default HeaderLogo;
