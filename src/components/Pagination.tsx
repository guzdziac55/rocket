import React from "react";

interface ParginationProps {
  activePage: number;
  count: number;
  rowsPerPage: number;
  totalPages: number;
  setActivePage: (page: number) => void;
}

const Pagination: React.FC<ParginationProps> = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  //   const beginning: number =
  //     activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;

  return (
    <>
      <div className="pagination">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏮️ First
        </button>{" "}
        /
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next ➡️
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last ⏭️
        </button>
      </div>

      <p>
        {/*  actual page info  ! */}
        Page {activePage} of {totalPages}
      </p>
      <p>
        {/* rows info */}
        {/* Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count} */}
      </p>
    </>
  );
};

export default Pagination;
