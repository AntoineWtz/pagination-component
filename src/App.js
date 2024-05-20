
import React, { useState } from 'react';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = 28;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Data simulation
  const getData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = [];

    for (let i = startIndex; i < endIndex && i < totalItems; i++) {
      data.push(
        <div key={i} className="card">
          Item {i + 1}
        </div>
      );
    }

    return data;
  };

  return (
    <div className="App">
      <h1>React Pagination Example</h1>
      <div className="data">
        <div className="cards-container">
          {getData()}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
