import DetailsContainer from "./DetailsContainer";
import nutritionImg from "./img/Details-Section/macros.png";
import foodImg from "./img/Details-Section/ingredients.svg";
import recipesImg from "./img/Details-Section/recipes2.png";
import likeImg from "./img/Details-Section/save.svg";

import "./WebsiteDetails.css";
export default function WebsiteDetails() {
  return (
    <div
      id="website-details-section"
      className="relative w-[full] h-[100vh] flex justify-center items-center"
    >
      <ul className="w-full flex justify-center items-center gap-5">
        <li className="w-[300px] h-[400px]">
          <DetailsContainer
            image={nutritionImg}
            title={"Macros"}
            description={
              "Customize your meal’s nutrients for a balanced and delicious dish!"
            }
            delay="0"
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={foodImg}
            title={"Ingredients"}
            description={
              "Choose your favorite ingredients and find the recipe that suits you the best!"
            }
            delay="0.4"
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={recipesImg}
            title={"Recipes"}
            description={
              "Find bunch of recipes according to your cravings and become the best chef of the house!"
            }
            delay="0.8"
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={likeImg}
            title={"Save"}
            description={
              "Save your favorite recipes so you can come back anytime and re-create them!"
            }
            delay="1.2"
          />
        </li>
      </ul>
    </div>
  );
}
