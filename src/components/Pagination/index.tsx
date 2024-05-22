import '../../styles/Pagination/index.css';
import React, { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 5; // Количество отображаемых страниц
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [pageNumberInput, setPageNumberInput] = useState<number | string>(currentPage);

  const getPageNumbers = () => {
    if (totalPages <= pagesToShow) {
      return pagesArray;
    }

    const middlePage = Math.floor(pagesToShow / 2);
    let startPage = Math.max(currentPage - middlePage, 1);
    let endPage = Math.min(currentPage + middlePage, totalPages);

    if (currentPage <= middlePage) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage >= totalPages - middlePage) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    }

    let pages: (number | null)[] = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const hasLeftDots = startPage > 1;
    const hasRightDots = endPage < totalPages;

    if (hasLeftDots && !hasRightDots) {
      pages = [1, null, ...pages.slice(1)];
    } else if (!hasLeftDots && hasRightDots) {
      pages = [...pages.slice(0, -1), null, totalPages];
    } else if (hasLeftDots && hasRightDots) {
      pages = [1, null, ...pages.slice(1, -1), null, totalPages];
    }

    return pages;
  };

  const handlePageNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumberInput(e.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = typeof pageNumberInput === 'string' ? parseInt(pageNumberInput, 10) : pageNumberInput;
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav>
      <ul
        className="pagination"
        role="navigation"
      >
        {getPageNumbers().map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
            data-testid={pageNumber === currentPage ? 'active-page' : ''}
          >
            {pageNumber ? (
              <button
                onClick={() => onPageChange(pageNumber)}
                className="page-link"
                role="button"
              >
                {pageNumber}
              </button>
            ) : (
              <span
                className="page-link page-dots"
                aria-label="Dots"
              >
                ...
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="pagination-input">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageNumberInput}
          onChange={handlePageNumberChange}
          aria-label="Page number input"
        />
        <button
          onClick={handleGoToPage}
          role="button"
        >
          Перейти
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
