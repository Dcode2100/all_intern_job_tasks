import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  TheBjym  from "./Pages/TheBjym/TheBjym";
import OurPresident from "./Pages/OurPresident/OurPresident";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TheBjym />} />
          <Route path="/ourpresident" element={<OurPresident />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
