import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar.js";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Balu");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          ></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
