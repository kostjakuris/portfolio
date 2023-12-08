import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import ProjectDetails from "./components/projectDetails/ProjectDetails";
import Layout from "./components/layout/Layout";

function App () {
  return (
      
      <Routes >
        <Route path="/portfolio" element={<Layout/>}/>
        <Route path="/projects" element={<ProjectDetails/>}/>
      </Routes>
  );
}

export default App;