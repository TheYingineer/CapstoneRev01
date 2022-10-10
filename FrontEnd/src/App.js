import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
      <br/>
    </div>
  );
}

export default App;
