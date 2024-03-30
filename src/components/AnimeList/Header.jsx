const Header = ({ title }) => {
  return (
    <div className="header flex justify-center p-8 mt-20 rounded mx-4 items-center">
      <h1 className="md:text-3xl text-2xl font-bold text-color-primary text-center">{title}</h1>
    </div>
  );
};

export default Header;
