import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import ProjectDetail from "./Components/ProjectDetail";
import Login from "./Components/Login";
import Contact from "./Components/Contact"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/contactform" element={<Contact />} />
    </Routes>
  );
};

export default Router;
