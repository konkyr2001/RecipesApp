export default function Link({
  section,
  handleButton,
  visibleButton,
  buttonValue,
}) {
  function handleButton(section) {
    const element = document.getElementById(section);
    element.scrollIntoView(
      element,
      {
        behavior: "smooth",
        block: "start",
      },
    );
  }

  let cssClass =
    "cursor-pointer bg-white rounded-1/2 rounded-[20px] p-0 m-0 border-2 border-gray-600 border-solid hover:border-gray-900 hover:bg-gray-100 transition-all duration-150 ease-in-out flex justify-center items-center w-3 ";

  const cssClickedClass = cssClass + "h-8";

  cssClass += "h-3 hover:h-5";

  return (
    // <a href={section}>
    <button
      className={visibleButton === buttonValue ? cssClickedClass : cssClass}
      onClick={() => handleButton(section)}
    >
      <div
        className={`bg-gray-800 w-[80%] h-[91%] rounded-[20px] m-auto transition-all duration-500 ease-in-out ${
          visibleButton === buttonValue ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </button>
    // </a>
  );
}
