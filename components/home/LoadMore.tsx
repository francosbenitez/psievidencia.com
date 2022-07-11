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
    <div className="flex justify-center my-3">
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
    </div>
  );
};

export default LoadMore;
