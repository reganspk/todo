import React, { useState } from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function ListItems(props) {
  const {
    items,
    handleEdit,
    handleUpdate,
    setUpdate,
    deleteItem,
    editChange,
  } = props;
  console.log(editChange);

  // const handleUpdate = ()=>{
  //   const value =
  // }
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            disabled={item.boolValue ? false : true}
            id={item.key}
            value={item.text}
            onChange={(e) => {
              setUpdate(e.target.value, item.key);
            }}
          />
          {/* <span>
            <button className = "edit">edit</button>
          </span>*/}
          <span>
            {console.log(item.boolValue)}
            {item.boolValue ? (
              <i
                className="fa fa-trash"
                onClick={() => handleUpdate(item.key)}
              ></i>
            ) : (
              <i
                className="fa fa-edit"
                onClick={() => handleEdit(item.key)}
              ></i>
            )}
          </span>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
