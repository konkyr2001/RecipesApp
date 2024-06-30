import SearchIngredients from "./Components/Sections/Ingredients/Ingredients/Ingredients";
import Recipes from "./Components/Sections/Recipes/Recipes/Recipes";
import Widgets from "./Components/NavigationBar/Widgets";
import Welcome from "./Components/Sections/Welcome/Welcome";
import WebsiteDetails from "./Components/Sections/Details/WebsiteDetails/WebsiteDetails";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";

import "./scrollerCss/ScrollerDark.css";
import "./scrollerCss/ScrollerLight.css";

import { useSelector } from "react-redux";
function App() {
  return (
    <>
      <div
        id="main-content"
        className="flex w-full bg-slate-200 relative flex-col justify-center align-center mx-auto"
      >
        <Welcome />
        <WebsiteDetails />
        <SearchIngredients />
        <Recipes />
        <Widgets />
        <Links />
        <Footer />
      </div>
    </>
  );
}

export default App;
