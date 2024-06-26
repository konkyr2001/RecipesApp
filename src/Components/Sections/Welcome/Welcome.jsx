import homePageImg from "../../../Images/Sections/Welcome/homepage.jpg";

import "./Welcome.css";

export default function Welcome() {
  return (
    <div
      id="welcome-section"
      className="w-full h-[100vh] flex justify-center items-center relative"
    >
      <div className="welcome-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="20%" stopColor="#9ea3e7" />
              <stop offset="80%" stopColor="#7a80d6" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>
      <div className="w-[85%] h-4/5 z-10 flex justify-center items-center max-h-[500px]">
        <div className="w-1/2 mr-5 h-auto">
          <h1 className="text-4xl font-semibold font-Montserrat">
            Find the recipes <br></br> that suits best for you!
          </h1>
          <h1
            className="mix-title text-4xl font-Montserrat"
            id="welcome-mix-title"
          >
            Taste the Joy of Cooking!
          </h1>
          <p className="text-lg text-slate-500 font-Montserrat mt-10 tracking-tight mb-7">
            Dive into a collection of recipes that are designed <br />
            to delight your taste buds and fuel your body. <br />
            Enjoy the perfect balance of flavor and nutrition in every dish.
            <span className="text-slate-800 font-medium mt-1 block">
              Eat well, live well!
            </span>
          </p>
          <a
            className="rounded-[20px] text-lg py-2 px-4 bg-green-400 shadow-md cursor-pointer hover:bg-green-500 hover:shadow-lg duration-200"
            href="#ingredients-section"
          >
            <p className="inline-block">Find your recipe</p>
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </a>
        </div>
        <div className="max-w-[60%]">
          <img
            src={homePageImg}
            alt="HomePage image"
            className="cursorPointer rounded-xl bg-cover opacity-90 max-h-[500px] cursor-default"
          />
        </div>
      </div>
    </div>
  );
}
