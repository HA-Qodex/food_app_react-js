import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import NewItem from "../pages/NewItem";
import Services from "../pages/Services";

function Index() {
  return (
    <BrowserRouter>
    <Header className='fixed z-50'/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/add-new" element={<NewItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Index;
