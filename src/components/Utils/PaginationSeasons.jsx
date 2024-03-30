const PaginationSeasons = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  
  const handlePrev = () => {
    setPage((prev) => prev - 1);
    scrollToTop();
  };

  const handleNext = () => {
    setPage((next) => next + 1);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center p-4 gap-4">
      {page <= 1 ? null : (
        <button
          className="text-color-tertiary font-bold w-20 p-2 rounded bg-color-primary"
          onClick={handlePrev}
        >
          Prev
        </button>
      )}
      <p className="text-color-primary font-bold gap-2">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="text-color-tertiary font-bold w-20 p-2 rounded bg-color-primary"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PaginationSeasons;
