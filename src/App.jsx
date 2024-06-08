import "./App.css";
// import SearchIngredients2 from "./SearchIngredients/SearchIngredients";
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
        // className="flex w-[90%] h-[90%] bg-slate-100 rounded-[10px] relative"
        className="flex w-full bg-slate-200 rounded-[20px] relative flex-col justify-center align-center mx-auto"
      >
        <SearchIngredients />
        {/* <SearchIngredients2 /> */}
        <Recipes />
        <Widgets />
      </div>
    </>
  );
}

export default App;
