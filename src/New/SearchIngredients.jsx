import "./SearchIngredients.css";
import img from "../img/Ingredients-Section/background.jpg";
import SelectIngredients from "./SelectIngredients";
import QuestionModal from "./QuestionModal";
import QuestionButton from "./QuestionButton";

import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

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
    console.log(ingredients);
    console.log(onlyIngredients);
    console.log(calories);
    console.log(protein);
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
      className="search-ingredients section w-full h-[100vh] flex justify-center items-center relative text-white"
      id="ingredients-section"
    >
      <div
        className="absolute w-full h-[100vh] bg-cover bg-bottom top-0 left-0 block"
        style={{
          backgroundImage: `url(${img})`,
          // backgroundAttachment: "fixed",
          // filter: "blur(2px)",
          // WebkitFilter: "blur(2px)",
        }}
      ></div>
      <div className="ingredients-filter-container w-[800px] h-1/2 relative">
        <div className="calories-container absolute w-full h-1/4 flex justify-center items-center gap-10">
          <label
            htmlFor="slider"
            // style={{ color: "white", textShadow: "black 0px 0px 5px" }}
          >
            Set Calories
            <i
              className="fa-solid fa-fire-flame-simple text-red-500 inline-block ml-3"
              title="Calories per 100gr"
            ></i>
          </label>
          <div
            id="slider"
            className="inline-block w-[400px] m-0"
            // style={{ color: "white", textShadow: "black 0px 0px 3px" }}
            ref={sliderRef}
          ></div>
          <QuestionButton
            text="Adjust the calories per serving of your recipes to be around the calories you will give as min and max value."
            extraClass="right-5"
          />
        </div>
        <div className="protein-container absolute top-1/4  w-full h-1/4 flex justify-center items-center">
          <label
            htmlFor="protein-input"
            // style={{ color: "white", textShadow: "black 0px 0px 5px" }}
          >
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
            // style={{ color: "white", textShadow: "black 0px 0px 5px" }}
            onChange={handleProtein}
            placeholder="0"
            ref={proteinRef}
            min="0"
            max="100"
          />
          <QuestionButton
            extraClass="ml-5"
            text="Adjust the minimum amount of protein per serving that your recipes will contain."
          />
        </div>
        <div className="ingredients-container absolute top-2/4  w-full h-1/4 flex justify-center items-center flex-col gap-5">
          <span className="flex justify-center items-center">
            <SelectIngredients
              selectedIngredients={ingredients}
              setSelectedIngredients={setIngredients}
            />
            <QuestionButton
              text="Add the ingredients that your recipes will include"
              extraClass="ml-5"
            />
          </span>
          <span className="flex h-[50px]">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              id="only-ingredients-checkbox"
              className="accent-blue-500 hover:accent-blue-500 w-[18px] h-[18px]"
            />
            <label
              className="ml-[5px]"
              htmlFor="only-ingredients-checkbox"
              // style={{ color: "white", textShadow: "black 0px 0px 5px" }}
            >
              I have only this ingredients
            </label>
            <QuestionButton
              text="Check the checkbox if you only want recipes with the ingredients you just added."
              extraClass="ml-5 mt-[3px]"
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
