import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import ProjectDetails from "./components/projectDetails/ProjectDetails";
import Layout from "./components/layout/Layout";


function App () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/projects" element={<ProjectDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
