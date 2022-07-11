import React from "react";
import { FormattedMessage } from "react-intl";
import LoadingSpinner from "./LoadingSpinner";

const LoadMore = ({
  handlePagination,
  noMore,
  loadingMore,
}: {
  handlePagination: () => void;
  noMore: boolean;
  loadingMore: boolean;
}) => {
  return (
    <button
      onClick={handlePagination}
      className={`w-36 h-12 relative bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded ${
        noMore && "opacity-50"
      }`}
      disabled={noMore}
    >
      {noMore ? (
        <FormattedMessage id="no.more" />
      ) : loadingMore ? (
        <LoadingSpinner btn={true} />
      ) : (
        <FormattedMessage id="load.more" />
      )}
    </button>
  );
};

export default LoadMore;
