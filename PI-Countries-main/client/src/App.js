import "./App.css";
import CountriesCards from "./Components/CountriesCards/CountriesCards";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={CountriesCards} />
    </div>
  );
}

export default App;
