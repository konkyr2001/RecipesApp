import "./Recipe.css";

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
}) {
  let proteinColorStyle = {
    color: "black",
  };
  if (Math.round((protein / calories) * 100) > 9 && protein > 0) {
    proteinColorStyle.color = "green";
  } else if (Math.round((protein / calories) * 100) > 5 && protein > 0) {
    proteinColorStyle.color = "orange";
  }
  return (
    <button className="recipe-container min-w-[400px] text-center justify-center p-[5px] relative cursor-default">
      {proteinColorStyle.color != "black" && (
        <i
          className="fa-solid fa-medal absolute top-[10px] right-[10px] text-green-600"
          style={proteinColorStyle}
          title={
            proteinColorStyle.color === "orange"
              ? "High in protein"
              : "Time to make serious gains!"
          }
        ></i>
      )}
      <i className="fa-regular fa-heart absolute top-[10px] right-[30px]"></i>
      <p className="text-[17px] font-bold mx-[25px] my-[15px]">
        {title.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 my-[20px] mx-[10px]">
        <a
          href={url}
          target="_blank"
          className="mr-[10px] flex justify-center items-center"
        >
          <img
            src={imgUrl}
            alt={`Image for recipe ${title}`}
            title={title}
            className="recipe-image rounded-[8px] p-[5px] border-white-200 border-solid border-4 w-full"
          />
        </a>
        <ul className="m-auto">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-left">
              {ingredient.text.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
      <i className="fa-solid fa-clock" title="Time to cook">
        &nbsp;{time}
      </i>
      <i className="fa-solid fa-bowl-food" title="Servings">
        &nbsp;{servings}
      </i>
      <i
        className="fa-solid fa-fire-flame-simple text-red-400"
        title="Calories per 100gr"
      >
        &nbsp;{calories} kcal
      </i>
      <i
        className="fa-solid fa-dumbbell"
        title="Protein per 100gr"
        style={proteinColorStyle}
      >
        &nbsp;{protein} protein
      </i>
      <i className="fa-solid fa-wheat-awn" title="Carbohydrates per 100gr">
        &nbsp;{carbs} carbs
      </i>
    </button>
  );
}
