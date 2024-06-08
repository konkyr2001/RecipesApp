import Question from "./Question/Question";
import RandomFood from "./RandomFood/RandomFood";
import LightDarkMode from "./LightDarkMode";
import Favorites from "./Favorites";
export default function Widgets() {
  return (
    <div className="absolute top-8 w-full">
      <ul className="flex flex-row float-right mr-[5px] justify-center items-center">
        <li className="mr-[30px] w-[30px]">
          <Favorites />
        </li>
        <li className="mr-[30px] w-[30px]">
          <RandomFood />
        </li>
        <li className="mr-[30px] w-[30px]">
          <Question />
        </li>
        <li className="mr-[30px]">
          <LightDarkMode />
        </li>
      </ul>
    </div>
  );
}
