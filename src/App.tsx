import "./App.css";
import HomePage from "./components/pages/HomePage";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
