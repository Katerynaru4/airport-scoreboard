import React from 'react';

const ContentTableHead = () => {
  return (
    <thead className="content-table__thead">
      <tr className="content-table__thead-row">
        <th scope="col" className="content-table__thead-item">
          Terminal
        </th>
        <th scope="col" className="content-table__thead-item">
          Local time
        </th>
        <th scope="col" className="content-table__thead-item">
          Destination
        </th>
        <th scope="col" className="content-table__thead-item">
          Status
        </th>
        <th scope="col" className="content-table__thead-item">
          Airline
        </th>
        <th scope="col" className="content-table__thead-item">
          Flight
        </th>
      </tr>
    </thead>
  );
};

export default ContentTableHead;
