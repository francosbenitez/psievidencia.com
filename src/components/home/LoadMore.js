import React from "react";

const LoadMore = ({ handlePagination }) => {
  return (
    <div className="flex justify-center my-3">
      <button
        onClick={handlePagination}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
