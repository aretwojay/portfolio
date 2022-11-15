import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
