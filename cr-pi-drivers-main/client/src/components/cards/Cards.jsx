import React, { useState } from 'react';
import Card from '../card/Card';

const Cards = ({ drivers }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageButtons = 5; // Número máximo de botones de página a mostrar a la vez

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDrivers = Array.isArray(drivers) ? drivers.slice(startIndex, endIndex) : [];

  const totalPages = Math.ceil(drivers.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => setCurrentPage(number)}
        className={currentPage === number ? 'active' : ''}
      >
        {number}
      </button>
    ));
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calcular el rango de botones de página a mostrar centrado alrededor de la página actual
  const halfMaxButtons = Math.floor(maxPageButtons / 2);
  let pageRangeStart = currentPage - halfMaxButtons;
  let pageRangeEnd = currentPage + halfMaxButtons;

  // Ajustar el rango si se encuentra en los bordes
  if (pageRangeStart < 1) {
    pageRangeStart = 1;
    pageRangeEnd = Math.min(totalPages, maxPageButtons);
  }
  if (pageRangeEnd > totalPages) {
    pageRangeEnd = totalPages;
    pageRangeStart = Math.max(1, totalPages - maxPageButtons + 1);
  }

  return (
    <div>
      {currentDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          name={driver.name}
          image={driver.image.url}
          dob={driver.dob}
          teams={driver.teams}
        />
      ))}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {pageRangeStart > 1 && (
          <button onClick={() => setCurrentPage(1)}>1</button>
        )}
        {pageRangeStart > 2 && (
          <span className="ellipsis">...</span>
        )}
        {renderPageNumbers().slice(pageRangeStart - 1, pageRangeEnd)}
        {pageRangeEnd < totalPages - 1 && (
          <span className="ellipsis">...</span>
        )}
        {pageRangeEnd < totalPages && (
          <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
        )}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
