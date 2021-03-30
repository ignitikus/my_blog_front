import React, { useState, useEffect } from "react";
import axios from "axios";

const blogsStyle = {
  width: "70%",
  display: "flex",
  flexDirection: "column",
};

const blogStyle = {
  border: "1px solid red",
  marginBottom: "5px",
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const blogs = await axios.get("blogs/get-blogs");
      setBlogs(blogs.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blogs);
  return (
    <div style={blogsStyle}>
      {blogs.map(({ title, author, body, tags }) => (
        <div style={blogStyle}>
          <h2 style={{ textAlign: "center" }}>{title}</h2>
          <p>{author}</p>
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
