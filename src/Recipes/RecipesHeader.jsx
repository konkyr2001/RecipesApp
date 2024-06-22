import SortingMenu from "../SortingMenu/SortingMenu";
import RefreshRecipes from "./RefreshRecipes";
import QuestionButton from "../New/QuestionButton";

export default function RecipesHeader({
  handleRefresh,
  setSortValue,
  setSortBy,
  ...props
}) {
  return (
    <div {...props}>
      <QuestionButton
        extraClass="mr-10 bottom-[2.5px]"
        text="According to your filters you will get up to 20 random recipes that"
      />
      <RefreshRecipes handleRefresh={handleRefresh} />
      <SortingMenu setSortValue={setSortValue} setSortBy={setSortBy} />
    </div>
  );
}
