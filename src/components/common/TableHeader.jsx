import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = column => {
    const { sortColumn, onSort } = this.props;
    if (sortColumn.path === column.path) {
      onSort({
        path: sortColumn.path,
        order: sortColumn.order === "asc" ? "desc" : "asc"
      });
    } else onSort({ path: column.path, order: "asc" });
  };

  renderSortIcon = () => {
    const { sortColumn } = this.props;
    return sortColumn.order === "asc" ? (
      <i className="fa fa-arrow-up mx-1" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-arrow-down mx-1" aria-hidden="true"></i>
    );
  };

  render() {
    const { columns, sortColumn } = this.props;
    return (
      <thead className="thead-dark">
        <tr>
          {columns.map((column, index) => {
            return (
              <th
                key={column.path || index}
                onClick={() => {
                  column.path && this.raiseSort(column);
                }}
              >
                {column.label}
                {column.path === sortColumn.path && this.renderSortIcon()}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
