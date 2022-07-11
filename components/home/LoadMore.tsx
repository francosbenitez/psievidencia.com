import React from "react";
import { FormattedMessage } from "react-intl";

const LoadMore = ({
  handlePagination,
  noMore,
}: {
  handlePagination: () => void;
  noMore: boolean;
}) => {
  return (
    <button
      onClick={handlePagination}
      className={`bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded ${
        noMore && "opacity-50"
      }`}
      disabled={noMore}
    >
      {!noMore ? (
        <FormattedMessage id="load.more" />
      ) : (
        <FormattedMessage id="no.more" />
      )}
    </button>
  );
};

export default LoadMore;
