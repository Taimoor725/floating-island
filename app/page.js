"use client";

import Navbar from "@/components/Navbar";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./Projects/page";
import Contact from "./contact/page";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
} 