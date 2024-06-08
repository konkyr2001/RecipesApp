import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import "./Ingredients.css";
import IngredientButton from "../IngredientButton/IngredientButton";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const dummyIngredients = [
  "egg",
  "milk",
  "bread",
  "butter",
  "cheese",
  "rice",
  "yoghurt",
];

export default function Ingredients() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  const calories = useSelector((state) => state.calories);
  const protein = useSelector((state) => state.protein);
  const proteinRef = useRef();
  const sliderRef = useRef();
  const [sliderInitialized, setSliderInitialized] = useState(false);

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
          dispatch({
            type: "calories",
            payload: {
              from: Math.round(values[0]),
              to: Math.round(values[1]),
            },
          });
        });
        setSliderInitialized(true);
      } catch (error) {
        console.log(error);
      }
    }
  }, [sliderInitialized]);

  function handleButton(event) {
    const ingredientClicked = event.target.textContent;
    if (ingredients.includes(ingredientClicked)) {
      // clicked 2 times remove
      event.target.classList.remove("lol");
      dispatch({
        type: "remove_ingredient",
        payload: ingredientClicked,
      });
    } else {
      // clicked only once add
      event.target.classList.add("lol");
      dispatch({
        type: "add_ingredient",
        payload: ingredientClicked,
      });
    }
  }

  function handleCheckbox() {
    dispatch({
      type: "onlyIngredients",
    });
  }

  function handleProtein() {
    let set = true;
    let ingredientProtein = proteinRef.current.value;
    if (ingredientProtein.length > 3) {
      proteinRef.current.value = ingredientProtein;
      return;
    }
    if (ingredientProtein === "" || ingredientProtein == 0) {
      ingredientProtein = 0;
      set = false;
    }
    dispatch({
      type: "protein",
      payload: {
        set,
        protein: ingredientProtein,
      },
    });
  }

  function handleSubmit() {}
  return (
    <div className="ingredients px-[10px] py-[20px]">
      <div className="mx-[10px] my-[10px]">
        <label htmlFor="protein-input">Set protein</label>
        <input
          type="number"
          id="protein-input"
          className="p-[5px] ml-[10px] w-[50px] bg-slate-200 h-[30px]"
          onChange={handleProtein}
          value={protein.value}
          ref={proteinRef}
          min="0"
          max="100"
        />
      </div>
      <div className="mx-[10px] my-[10px] mb-[20px]">
        <label className="inline-block">
          Calories Amount
          <i
            className="fa-solid fa-fire-flame-curved text-red-500"
            title="Calories per 100gr"
          ></i>
        </label>
        <div id="slider" className="w-2/3 m-auto" ref={sliderRef}></div>
      </div>
      <ul className="ingredients-list w-full">
        {dummyIngredients.map((ingredient, index) => (
          <IngredientButton
            key={index}
            text={ingredient}
            onClick={handleButton}
          />
        ))}
      </ul>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckbox}
          id="only-ingredients-checkbox"
        />
        <label className="ml-[5px]" htmlFor="only-ingredients-checkbox">
          I have only this ingredients
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
