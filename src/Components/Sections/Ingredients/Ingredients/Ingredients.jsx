import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectIngredients from "../SelectIngredients/SelectIngredients";
import InformationButton from "../../../InformationButton/InformationButton";

import "./css/IngredientsLight.css";
import "./css/IngredientsDark.css";

import backgroundImg from "../../../../Images/Sections/Ingredients/background.jpg";

export default function SearchIngredients() {
  const [sliderInitialized, setSliderInitialized] = useState(false);
  const sliderRef = useRef();

  const initialCalories = useSelector(
    (state) => state.ingredientStore.calories
  );
  const initialIngredients = useSelector(
    (state) => state.ingredientStore.ingredients
  );
  const initialProtein = useSelector((state) => state.ingredientStore.protein);
  const proteinRef = useRef();
  const dispatch = useDispatch();

  const [calories, setCalories] = useState(initialCalories);
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [protein, setProtein] = useState(initialProtein);
  const [onlyIngredients, setOnlyIngredients] = useState(false);

  useEffect(() => {
    proteinRef.current.value = initialProtein.value;
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!sliderInitialized) {
      try {
        noUiSlider.create(slider, {
          start: [calories.from, calories.to],
          connect: true,
          range: {
            min: 0,
            max: 1500,
          },
          step: 50,
          margin: 100,
          tooltips: {
            to: function (numericValue) {
              return Math.round(numericValue);
            },
          },
        });
        const inputSliderText = document.querySelectorAll(".noUi-origin");
        slider.noUiSlider.on("update", function (values, handle) {
          // values is an array containing the slider values
          inputSliderText[handle].style.zIndex = "10"; // change z-index of text's input
        });
        // Add event listener for the 'update' event
        slider.noUiSlider.on("change", function (values, handle) {
          // values is an array containing the slider values
          inputSliderText[handle].style.zIndex = "0"; // change z-index of text's input
          setCalories({
            from: Math.round(values[0]),
            to: Math.round(values[1]),
          });
        });
        setSliderInitialized(true);
      } catch (error) {
        console.log(error);
      }
    }
  }, [sliderInitialized]);

  function handleProtein(event) {
    let set = true;
    let ingredientProtein = event.target.value;

    // Check if the input value exceeds 3 digits
    if (ingredientProtein.length > 3) {
      // If so, truncate the input value to 3 digits
      ingredientProtein = ingredientProtein.slice(0, 3);
    }

    // Update the input value
    event.target.value = ingredientProtein;

    if (ingredientProtein === "" || ingredientProtein == 0) {
      setProtein;
      ingredientProtein = 0;
      set = false;
    }
    setProtein({
      set,
      value: ingredientProtein,
    });
  }

  function handleCheckbox() {
    setOnlyIngredients((prevState) => !prevState);
  }

  function handleSearch(event) {
    event.preventDefault();
    dispatch({
      type: "SUBMIT_BUTTON",
      payload: {
        ingredients,
        onlyIngredients,
        calories,
        protein,
        isSet: true,
      },
    });
  }

  return (
    <div
      className="ingredients-section-lightMode font-Montserrat section w-full min-h-[800px] flex justify-center items-center relative text-white xl:min-h-[1200px] p-4"
      id="ingredients-section"
    >
      <div
        className="ingredients-img absolute w-full h-full bg-cover bg-left md:bg-bottom xl:bg-center top-0 left-0 block"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      <div className="ingredients-filter-container w-[800px] min-h-[600px] relative text-sm lg:text-base">
        <div className="calories-container absolute w-full h-1/4 flex justify-between sm:justify-center items-center sm:gap-10">
          <label htmlFor="slider" className="pl-2 min-w-fit">
            Set Calories
            <i
              className="fa-solid fa-fire-flame-simple text-red-500 inline-block ml-1 sm:ml-3"
              title="Calories per 100gr"
            ></i>
          </label>
          <div
            id="slider"
            className="inline-block text-sm w-[180px] sm:w-[300px] lg:w-[400px]"
            ref={sliderRef}
          ></div>
          <InformationButton
            text="Adjust the calories per serving of your recipes to be around the calories you will give as min and max value."
            extraClass="right-3 sm:right-5"
          />
        </div>
        <div className="protein-container absolute top-1/4  w-full h-1/4 flex justify-center items-center">
          <label htmlFor="protein-input">
            Set protein
            <i
              className="fa-solid fa-dumbbell text-green-500 ml-3 mr-3"
              title="Protein per 100gr"
            ></i>
          </label>
          <input
            type="number"
            id="protein-input"
            className="p-[5px] ml-[10px] w-[55px] bg-blue-300 h-[30px] rounded-[20px] border-gray-200 border-solid border-2 text-center transition ease-in-out delay-70 focus:outline-none focus:border-gray-400"
            onChange={handleProtein}
            placeholder="0"
            ref={proteinRef}
            min="0"
            max="100"
          />
          <InformationButton
            extraClass="ml-3 sm:ml-5"
            text="Adjust the minimum amount of protein per serving that your recipes will contain."
          />
        </div>
        <div className="ingredients-container absolute top-2/4  w-full h-1/4 flex justify-center items-center flex-col gap-5">
          <span className="flex justify-center items-center p-2">
            <SelectIngredients
              selectedIngredients={ingredients}
              setSelectedIngredients={setIngredients}
            />
            <InformationButton
              text="Add the ingredients that your recipes will include"
              extraClass="ml-2 sm:ml-5"
            />
          </span>
          <span className="flex h-[50px]">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              id="only-ingredients-checkbox"
              className="accent-blue-500 hover:accent-blue-500 w-[18px] h-[18px]"
            />
            <label className="ml-[5px]" htmlFor="only-ingredients-checkbox">
              I have only this ingredients
            </label>
            <InformationButton
              text="Check the checkbox if you only want recipes with the ingredients you just added."
              extraClass="ml-2 mt-[2px] xl:mt-[3px] sm:ml-5"
            />
          </span>
        </div>
        <form
          onSubmit={handleSearch}
          className="sarch-div absolute top-[78%] w-full h-1/4 flex justify-center items-center"
        >
          <button
            className="bg-emerald-500 rounded-t-[20px] rounded-bl-[20px] py-[5px] px-[10px] border-solid border-blue-300 border-2 h-[40px] mb-[15px] transition-all ease delay-50 hover:bg-emerald-600 hover:border-blue-400 hover:rounded-br-[20px] active:bg-emerald-700 active:border-blue-700"
            onClick={handleSearch}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
