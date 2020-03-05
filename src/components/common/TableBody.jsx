import React from "react";
import _ from "lodash";

const TableBody = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((row, index) => {
        return (
          <tr key={index}>
            {columns.map((column, index) => {
              return column.content ? (
                <td key={index}>{column.content(row)}</td>
              ) : (
                <td key={index}>{_.get(row, column.path)}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
