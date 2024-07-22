import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "like-effects";

import "./css/RecipeDark.css";
import "./css/RecipeLight.css";

import IngredientsImg from "../../../../Images/Icons/ingredientsAmount.png";
export default function Recipe({
  title,
  imgUrl,
  calories,
  protein,
  url,
  ingredients,
  idLink,
  mealType,
  dietLabels,
}) {
  // this value is responsible to detect if the like button is ON or OFF
  const [like, setLike] = useState(false);
  // this value gets initialized according to localStorage and changes only if the user removes the item from the cart
  const [likeInitialValue, setLikeInitialValue] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteStore.favoriteRecipes);

  let proteinColorStyle = {
    color: "black",
  };
  if (Math.round((protein / calories) * 100) > 9 && protein > 0) {
    proteinColorStyle.color = "#24BD67";
  } else if (Math.round((protein / calories) * 100) > 3 && protein > 0) {
    proteinColorStyle.color = "orange";
  }

  useEffect(() => {
    const likedRecipes = localStorage.getItem("favorites");
    const likeValue = likedRecipes
      ? JSON.parse(likedRecipes).includes(idLink)
      : false;
    setLike(likeInitialValue);
    setLikeInitialValue(likeValue);
  }, [idLink]);

  useEffect(() => {
    if (like) {
      const foundFavorite = favorites.find(
        (favorite) => favorite.title === title
      );
      setLikeInitialValue(foundFavorite ? true : false);
    }
  }, [favorites]);

  useEffect;

  function handleLikeButton(value) {
    setLike(value);
    console.log(proteinColorStyle.color);
    if (value) {
      dispatch({
        type: "ADD_FAVORITE",
        payload: {
          idLink,
          imgUrl,
          title,
          ingredients,
          protein,
          proteinColor: proteinColorStyle.color,
          calories,
          url,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: {
          title,
        },
      });
    }
  }

  return (
    <div className="recipe-container w-full h-auto text-center items-center relative cursor-default gap-0 my-10 rounded-xl flex flex-wrap flex-col border-2 border-solid border-gray-300 px-4 font-Montserrat sm:min-w-[400px] sm:max-w-[400px] md:min-w-[420px] md:max-w-[420px]">
      {proteinColorStyle.color != "black" && (
        <i
          className="fa-solid fa-medal absolute top-[15px] right-[10px] text-green-600 text-[23px]"
          style={proteinColorStyle}
          title={
            proteinColorStyle.color === "orange"
              ? "High in protein"
              : "Time to make serious gains!"
          }
        ></i>
      )}
      <span className="absolute right-[40px] top-[7px]">
        <like-effects checked={likeInitialValue} width="40px" height="40px">
          <motion.i
            slot="unchecked"
            onClick={() => handleLikeButton(true)}
            className="fa-regular fa-heart rounded-[50%]  cursor-pointer text-[24px] p-2"
            whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.2)", scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={{ color: "red" }}
          ></motion.i>
          <motion.i
            slot="checked"
            onClick={() => handleLikeButton(false)}
            className="fa-solid fa-heart rounded-[50%] cursor-pointer text-[24px] p-2"
            style={{ color: "red" }}
            whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.2)", scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          ></motion.i>
        </like-effects>
      </span>
      <a
        href={url}
        target="_blank"
        className="w-[250px] h-[250px] mt-12 overflow-hidden rounded-[20px] hover:opacity-75 duration-300 ease-in-out cursor-pointer xl:w-[300px] xl:h-[300px]"
      >
        <img
          src={imgUrl}
          alt={`Image for recipe ${title}`}
          title={title}
          className="w-full h-full bg-white block object-cover rounded-[20px] border-solid border border-gray-300 shadow-md hover:scale-110 duration-300 ease-in-out"
        />
      </a>
      <div className="mt-4 text-slate-600">
        <p className="text-base font-semibold xl:text-[17px]">{title}</p>
      </div>
      <ul className="text-left pl-2 pt-[20px] pb-[20px] text-[15px] flex justify-center flex-row rounded-bl-[9px] w-full text-sm xl:text-base xl:pl-0">
        <li className="text-center">
          <i
            className="fa-solid fa-fire-flame-simple text-red-400"
            title="Calories per 100gr"
          ></i>
          <label className="ml-1">{calories} Kcal</label>
        </li>
        <li className="mx-5 text-center">
          <i
            className="fa-solid fa-dumbbell"
            title="Protein per 100gr"
            style={proteinColorStyle}
          ></i>
          <label className="ml-1">{protein} Protein</label>
        </li>
        <li className="text-center">
          <img
            src={IngredientsImg}
            alt="Ingredients icon"
            className="cursorPointer inline-block w-[20px] xl:w-[25px]"
            width={25}
            title="Ingredients needed for recipe"
          />
          <label className="ml-1">{ingredients} Ingredients</label>
        </li>
      </ul>
      <ul className="flex mb-3 w-auto flex-wrap justify-center gap-y-2 text-sm xl:text-base xl:mb-4">
        <li
          className={`rounded-[30px] bg-slate-300 text-black px-2 py-1 xl:px-3 ${
            dietLabels.length > 0 ? "mr-4" : ""
          }
          `}
        >
          {mealType}
        </li>
        {dietLabels &&
          dietLabels.map((meal, index) => {
            const listClass = "rounded-[30px] bg-slate-300 text-black px-2 py-1 xl:px-3"
            if (index === dietLabels.length - 1) {
              return (
                <li
                  key={index}
                  className={`${listClass}`}
                >
                  {meal}
                </li>
              );
            } else {
              return (
                <li
                  key={index}
                  className={`${listClass} mr-4`}
                >
                  {meal}
                </li>
              );
            }
          })}
      </ul>
      <div className="h-[25px] relative w-[300px] m-auto my-4 xl:h-[30px]">
        <a
          href={url}
          target="_blank"
          className="p-[6px] absolute left-1/2 bottom-0 -translate-x-1/2 rounded-lg bg-orange-500 text-white font-Quicksand font-light opacity-80 text-[15px] hover:opacity-100 hover:p-3 duration-300 ease-in-out xl:text-lg xl:p-2"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
