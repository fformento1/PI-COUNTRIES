import "./App.css";
import CountriesCards from "./Components/CountriesCards/CountriesCards";
import LandingPage from "./Components/LandingPage/LandingPage";
import CountryCardDetail from "./Components/CountryCardDetail/CountryCardDetail";
import SearchBar from "./Components/SearchBar/SearchBar";
import CountryDetailByName from "./Components/CountryCardDetail/CountryDetailByName";
import CreateActivity from "./Components/Formulario/Fromulario";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="fotoDeFondo">
      <Route
        path={["/home", "/detail/:id", "/form", "/detailByName"]}
        component={SearchBar}
      />
      <Route path="/home" component={CountriesCards} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/detail/:id" component={CountryCardDetail} />
      <Route path="/detailByName" component={CountryDetailByName} />
      <Route path="/form" component={CreateActivity} />
    </div>
  );
}

export default App;
