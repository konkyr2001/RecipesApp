import "./SearchIngredients.css";
import Ingredients from "../Ingredients/Ingredients";

console.log("mpike searchIOngreditsns")
export default function SearchIngredients() {
  return (
    <section
      id="ingredients-section"
      className="w-1/4 h-full border-solid border-black border-r-4"
    >
      <div className="flex w-full h-full pt-[60px] pb-0 flex-col">
        <div className="inline-block relative mx-auto">
          <label
            className="block opacity-20 font-bold text-[20px]"
            htmlFor="search-ingredients"
          >
            Search ingredients
          </label>
          <span className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-[9px] text-[17px]"></i>
            <input
              type="text"
              className="border-gray border-solid border-4 rounded-[20px] ps-[25px] text-[15px] h-[28px] w-[160px]"
              placeholder="Search"
              id="search-ingredients"
            />
          </span>
        </div>
        <Ingredients />
      </div>
    </section>
  );
}
