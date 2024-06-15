import "./App.css";
import SearchIngredients from "./New/SearchIngredients";
import Recipes from "./Recipes/Recipes";
import Widgets from "./Widgets";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const favorites = useSelector((state) => state.favoriteStore.favoriteRecipes);

  useEffect(() => {
    async function scroll() {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    }

    scroll();
  }, []);

  return (
    <>
      <div
        id="main-content"
        className="flex w-full bg-slate-200 rounded-[20px] relative flex-col justify-center align-center mx-auto"
      >
        <SearchIngredients />
        <Recipes />
        <Widgets />
      </div>
    </>
  );
}

export default App;
