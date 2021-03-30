import React from "react";
import { useSelector } from "react-redux";
import Blogs from "../Blogs/Blogs";
import Form from "../Form/Form";
import Navigation from "../Navigation/Navigation";

export default function Wrapper() {
  const activeTab = useSelector((state) => state.activeTab.activeTab);

  console.log(activeTab);
  return (
    <div className="app-container">
      {activeTab === "blogs" && <Blogs />}
      {activeTab === "form" && <Form />}
      <Navigation />
    </div>
  );
}
