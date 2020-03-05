import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  const pageNumbers = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation">
      <ul class="pagination">
        {pageNumbers.map(number => {
          return (
            <li
              className={
                number === currentPage ? "page-item active" : "page-item"
              }
              key={number}
              onClick={() => {
                onPageChange(number);
              }}
            >
              <span className="page-link">{number}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
