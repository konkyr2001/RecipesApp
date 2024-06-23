import "./Recipe.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "like-effects";

import QuestionModal from "../New/QuestionModal";
export default function Recipe({
  title,
  imgUrl,
  time,
  servings,
  calories,
  protein,
  carbs,
  url,
  ingredients,
  idLink,
  mealType,
  dietLabels,
}) {
  const [like, setLike] = useState(false); // this value is responsible to detect if the like button is ON or OFF
  const [likeInitialValue, setLikeInitialValue] = useState(false); // this value gets initialized according to localStorage and changes only if the user removes the item from the cart
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteStore.favoriteRecipes);

  const [caloriesQuestionVisibility, setCaloriesQuestionVisibility] =
    useState(false);

  let proteinColorStyle = {
    color: "black",
  };
  if (Math.round((protein / calories) * 100) > 9 && protein > 0) {
    proteinColorStyle.color = "green";
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
      // setLike(foundFavorite);
      // setLikeInitialValue(foundFavorite);
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
          time,
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
    <div className="recipe-container min-w-[450px] max-w-[450px] text-center items-center relative cursor-default gap-0 my-10 rounded-xl flex flex-wrap flex-col border-2 border-solid border-gray-300 px-4 font-Montserrat">
      {proteinColorStyle.color != "black" && (
        <i
          className="fa-solid fa-medal absolute top-[15px] right-[10px] text-green-600 text-[23px]"
          onClick={() =>
            setCaloriesQuestionVisibility((prevState) => !prevState)
          }
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
        className="w-[300px] h-[300px] mt-7 overflow-hidden rounded-[20px] hover:opacity-80 duration-300 ease-in-out"
      >
        <img
          src={imgUrl}
          alt={`Image for recipe ${title}`}
          title={title}
          className="w-full h-full recipe-image rounded-[20px] border-solid border border-gray-300 shadow-md hover:scale-110 duration-300 ease-in-out"
        />
      </a>
      <div className="mt-4 text-slate-600">
        <p className="text-[17px] font-semibold">{title}</p>
      </div>
      <ul className="text-left pl-[10px] pt-[20px] pb-[20px] text-[15px] flex justify-center flex-row rounded-bl-[9px] w-full">
        <li className="text-[16px]">
          <i
            className="fa-solid fa-clock text-neutral-600"
            title="Time to be cooked"
          ></i>
          <label className="ml-1">{time} minutes</label>
        </li>
        <li className="text-[16px] mx-5">
          <i
            className="fa-solid fa-fire-flame-simple text-red-400"
            title="Calories per 100gr"
          ></i>
          <label className="ml-1">{calories} kcal</label>
        </li>
        <li className="text-[16px]">
          <i
            className="fa-solid fa-dumbbell"
            title="Protein per 100gr"
            style={proteinColorStyle}
          ></i>
          <label className="ml-1">{protein} protein</label>
        </li>
      </ul>
      <ul className="flex mb-4 w-auto flex-wrap justify-center gap-y-2">
        <li className="rounded-[30px] bg-slate-300 text-black px-3 py-1 mr-4">
          {mealType}
        </li>
        {dietLabels &&
          dietLabels.map((meal, index) => (
            <li
              key={index}
              className="rounded-[30px] bg-slate-300 text-black px-2 py-1 mr-4"
            >
              {meal}
            </li>
          ))}
      </ul>
    </div>

    // <div className="recipe-container min-w-[510px] max-w-[600px] text-center justify-center relative cursor-default max-h-[550px] gap-0 min-h-[400px] my-10">
    //   {proteinColorStyle.color != "black" && (
    //     <i
    //       className="fa-solid fa-medal absolute top-[15px] right-[10px] text-green-600 text-[23px]"
    //       style={proteinColorStyle}
    //       title={
    //         proteinColorStyle.color === "orange"
    //           ? "High in protein"
    //           : "Time to make serious gains!"
    //       }
    //     ></i>
    //   )}
    //   <span className="absolute right-[45px] top-[7px]">
    //     <like-effects checked={likeInitialValue} width="40px" height="40px">
    //       <motion.i
    //         slot="unchecked"
    //         onClick={() => handleLikeButton(true)}
    //         className="fa-regular fa-heart rounded-[50%]  cursor-pointer text-[24px] p-2"
    //         whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.2)", scale: 1.1 }}
    //         whileTap={{ scale: 0.8 }}
    //         style={{ color: "red" }}
    //       ></motion.i>
    //       <motion.i
    //         slot="checked"
    //         onClick={() => handleLikeButton(false)}
    //         className="fa-solid fa-heart rounded-[50%] cursor-pointer text-[24px] p-2"
    //         style={{ color: "red" }}
    //         whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.2)", scale: 1.1 }}
    //         whileTap={{ scale: 0.8 }}
    //       ></motion.i>
    //     </like-effects>
    //   </span>

    //   <div className="item1 w-1/2 flex justify-center rounded-br-[20px] rounded-tr-[20px] rounded-tl-[8px] bg-purple-300 h-[270px] gap-0">
    //     <a href={url} target="_blank" className="w-[200px] h-[200px] m-auto">
    //       <img
    //         src={imgUrl}
    //         alt={`Image for recipe ${title}`}
    //         title={title}
    //         className="w-full h-full recipe-image rounded-[8px] border-white-200 border-solid border-4"
    //       />
    //     </a>
    //   </div>
    //   <div className="item2 w-1/2 h-[270px] text-center flex items-center justify-center">
    //     <p className="text-[16px] font-bold">{title.toUpperCase()}</p>
    //   </div>
    //   <div className="absolute left-0 bg-purple-300 h-[100px] top-[270px] w-1/3"></div>
    //   <div className="item3 w-1/3 min-w-[160px] bg-purple-300 gap-0 z-10 min-h-[150px]">
    //     <ul className="text-left pl-[10px] pt-[20px] pb-[20px] text-[15px] flex justify-center flex-col rounded-bl-[9px] w-[150px]">
    //       <li className="ingredients-icons-text">
    //         <i className="fa-solid fa-clock" title="Time to cook"></i>
    //         <label>{time} time</label>
    //       </li>
    //       <li className="ingredients-icons-text">
    //         <i className="fa-solid fa-bowl-food" title="Servings"></i>
    //         <label>{servings} servings</label>
    //       </li>
    //       <li className="ingredients-icons-text">
    //         <i
    //           className="fa-solid fa-fire-flame-simple text-red-400"
    //           title="Calories per 100gr"
    //         ></i>
    //         <label>{calories} kcal</label>
    //       </li>
    //       <li className="ingredients-icons-text">
    //         <i
    //           className="fa-solid fa-dumbbell"
    //           title="Protein per 100gr"
    //           style={proteinColorStyle}
    //         ></i>
    //         <label>{protein} protein</label>
    //       </li>
    //       <li className="ingredients-icons-text">
    //         <i
    //           className="fa-solid fa-wheat-awn"
    //           title="Carbohydrates per 100gr"
    //         ></i>
    //         <label>{carbs} carbs</label>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="item4 w-2/3 flex items-center justify-center gap-0">
    //     <ul className="flex justify-center pl-[20px] pr-[10px] py-[10px] flex-col">
    //       {ingredients.map((ingredient, index) => (
    //         <li key={index} className="text-left text-[14px]">
    //           - {ingredient.text.toLowerCase()}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}
