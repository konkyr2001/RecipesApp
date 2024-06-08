import "./IngredientButton.css";

export default function IngredientButton({ text, ...props }) {
  return (
    <li>
      <button {...props}>{text}</button>
    </li>
  );
}
