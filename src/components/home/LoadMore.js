import React from "react";

const LoadMore = ({ handlePagination, noMore }) => {
  return (
    <div className="flex justify-center my-3">
      <button
        onClick={handlePagination}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          noMore && "opacity-50"
        }`}
        disabled={noMore}
      >
        {!noMore ? "Load more" : "No more data"}
      </button>
    </div>
  );
};

export default LoadMore;
