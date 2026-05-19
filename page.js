"use client";

import Navbar from "@/components/Navbar";
import {BrowserRouter,Routes,Route,} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/about" element={"about"} />
          <Route path="/projects" element={"projects"} />
          <Route path="/contac" element={"contact"} />
        </Routes>
    </BrowserRouter>
  );
} 