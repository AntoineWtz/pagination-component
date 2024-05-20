import React from 'react';
import './App.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button
                className="arrow"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                &lt;&lt;
            </button>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div className="page-numbers">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            <button
                className="arrow"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                &gt;&gt;
            </button>
        </div>
    );
};

export default Pagination;
