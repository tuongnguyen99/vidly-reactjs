import React from "react";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            key={item._id || ""}
            className={
              selectedItem._id === item._id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              onItemSelect(item);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
