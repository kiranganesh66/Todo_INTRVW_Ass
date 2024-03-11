import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./index.css";

const List = (props) => {
  const { inputDate, OndeleteUniq } = props;
  const { text, uniqueNo } = inputDate;

  const Ondelete = () => {
    OndeleteUniq(uniqueNo);
  };

  return (
    <>
      <li className="todo-items">
        <div>
          <p className="listName">{text}</p>
        </div>

        <div className="logo">
          <FaPencilAlt />
          <div className="logo2">
            <ImCross onClick={Ondelete} />
          </div>
        </div>
      </li>
    </>
  );
};

export default List;
