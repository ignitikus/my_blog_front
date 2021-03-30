import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ReactTagInput from "@pathofdev/react-tag-input";

import { ACTIVE_TAB } from "../../redux/constants/tabConstants";

import "@pathofdev/react-tag-input/build/index.css";
import "./Form.css";

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "text":
        setText(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      const { status } = await axios.post("blogs/post-blog", {
        user: "userId",
        title,
        text,
        tags,
      });
      if (status === 200) {
        dispatch({
          type: ACTIVE_TAB,
          payload: "blogs",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <input
        type="text"
        value={title}
        onChange={handleOnChange}
        name="title"
        placeholder="Title goes here"
      />
      <br />
      <ReactTagInput
        tags={tags}
        onChange={(newTags) => setTags(newTags)}
        name="tags"
        suggestions={["hell"]}
      />
      <br />
      <textarea value={text} onChange={handleOnChange} name="text"></textarea>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
