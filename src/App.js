import React, { useState } from 'react';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>React Pagination Example</h1>
      <div className="data">
        {/* Placeholder for data */}
        {`Showing page ${currentPage} of ${totalPages}`}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
