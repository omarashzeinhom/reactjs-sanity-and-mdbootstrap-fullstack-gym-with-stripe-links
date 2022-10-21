import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Classes, MemberShip, Contact,About } from "./pages/index";
import { Nav, Footer, SocialMedia } from "./components/index";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />} component={<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/membership" element={<MemberShip />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <SocialMedia />
        <Footer />
      </Router>
    </>
  );
}

export default App;
