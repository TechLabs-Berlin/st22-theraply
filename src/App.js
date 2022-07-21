import React from "react";

import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
