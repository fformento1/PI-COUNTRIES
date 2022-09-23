import "./App.css";
import CountriesCards from "./Components/CountriesCards/CountriesCards";
import LandingPage from "./Components/LandingPage/LandingPage";
import CountryCardDetail from "./Components/CountryCardDetail/CountryCardDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={CountriesCards} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/detail/:id" component={CountryCardDetail} />
    </div>
  );
}

export default App;
