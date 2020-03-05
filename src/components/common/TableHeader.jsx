import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="thead-dark">
      <tr>
        {columns.map(column => {
          return <th key={column.path}>{column.label}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
