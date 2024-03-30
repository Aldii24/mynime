import Link from "next/link";

const Footer = ({ linkTitle, linkHref }) => {
  return (
    <div className="flex justify-center p-2">
      <Link
        href={linkHref}
        className="text-center font-bold text-color-tertiary p-2 bg-color-primary w-60 rounded hover:bg-color-tertiary hover:text-color-primary transition-all hover:border-2 hover:border-color-primary"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Footer;
