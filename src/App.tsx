import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import HomePage from "./components/pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
