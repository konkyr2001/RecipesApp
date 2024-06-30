import DetailsContainer from "../DetailsContainer";
import nutritionImg from "../../../../Images/Sections/Details/macros.png";
import foodImg from "../../../../Images/Sections/Details/ingredients.svg";
import recipesImg from "../../../../Images/Sections/Details/recipes2.png";
import likeImg from "../../../../Images/Sections/Details/save.svg";

import "./css/WebsiteDetailsDark.css";
import "./css/WebsiteDetailsLight.css";

export default function WebsiteDetails() {
  return (
    <div
      id="website-details-section"
      className="website-details-section-lightMode relative w-[full] h-[100vh] flex justify-center items-center"
    >
      <ul className="w-full flex justify-center items-center gap-5">
        <li className="w-1/5 h-[400px]">
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
