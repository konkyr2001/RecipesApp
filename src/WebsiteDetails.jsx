import DetailsContainer from "./DetailsContainer";
import nutritionImg from "./img/schedule.png";
import foodImg from "./img/cutlery.png";
import recipesImg from "./img/saute.png"
import likeImg from "./img/heart.png";

export default function WebsiteDetails() {
  return (
    <div
      id="website-details-section"
      className="relative w-[full] h-[70vh] flex justify-center items-center border-solid border-t-2 border-black"
    >
      <ul className="w-full flex justify-center items-center gap-5">
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={nutritionImg}
            title={"Macros"}
            description={"Customize your meal’s nutrients for a balanced and delicious dish!"}
            from={0}
            // to={1000}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={foodImg}
            title={"Ingredients"}
            description={"Choose your favorite ingredients and find the recipe that suits you the best!"}
            from={0}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={recipesImg}
            title={"Recipes"}
            description={"Find bunch of recipes according to your cravings and become the best chef of the house!"}
            from={0}
          />
        </li>
        <li className="w-1/5 h-[400px]">
          <DetailsContainer
            image={likeImg}
            title={"Save"}
            description={"Save your favorite recipes so you can come back anytime and re-create them!"}
            from={0}
          />
        </li>
      </ul>
    </div>
  );
}
