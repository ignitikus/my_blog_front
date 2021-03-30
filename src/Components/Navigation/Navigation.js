import React from "react";
import { useDispatch } from "react-redux";
import { ACTIVE_TAB } from "../../redux/constants/tabConstants";
import "./Navigation.css";

export default function Navigation() {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    console.log(e.target.id);
    dispatch({
      type: ACTIVE_TAB,
      payload: e.target.id,
    });
  };

  return (
    <div className="navigation-container">
      <ul className="navigation-list">
        <li onClick={handleOnClick} id="blogs">
          Blogs
        </li>
        <li onClick={handleOnClick} id="form">
          Post
        </li>
      </ul>
    </div>
  );
}
