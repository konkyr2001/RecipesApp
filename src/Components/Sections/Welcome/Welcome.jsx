import homePageImg from "../../../Images/Sections/Welcome/homepage.jpg";

import "./css/WelcomeDark.css";
import "./css/WelcomeLight.css";

export default function Welcome() {
  return (
    <div
      id="welcome-section"
      className="welcome-section-lightMode w-full min-h-[840px] flex justify-center items-center relative sm:min-h-[970px] md:min-h-[1000px]"
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
            <linearGradient id="gradient-Dark">
              <stop offset="20%" stopColor="#4C3BCF" />
              <stop offset="80%" stopColor="#402E7A" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            id="welcome-wave-fill"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>
      <div className="w-[85%] h-4/5 z-10 flex flex-col gap-12 justify-center items-center -mt-8 lg:flex-row lg:gap-0 lg:mt-0">
        <div className="w-full h-auto lg:w-1/2 lg:mr-5">
          <h1 className="text-2xl font-semibold font-Montserrat lg:text-3xl xl:text-4xl">
            Find the recipes <br></br> that suits best for you!
          </h1>
          <h1
            className="mix-title text-2xl mt-1 font-Montserrat lg:text-3xl xl:text-4xl"
            id="welcome-mix-title"
          >
            Taste the Joy of Cooking!
          </h1>
          <p className="text-slate-500 font-Montserrat mt-6 mb-7 xl:text-lg lg:mt-10 lg:mb-7 lg:tracking-tight">
            Dive into a collection of recipes that are designed <br className="hidden lg:block"/>
            to delight your taste buds and fuel your body. <br />
            Enjoy the perfect balance of flavor and nutrition in every dish.
            <span className="text-slate-800 font-medium mt-1 block">
              Eat well, live well!
            </span>
          </p>
          <a
            className="rounded-[5px] text-base py-1 px-2 font-medium bg-green-400 shadow-md cursor-pointer hover:bg-green-500 hover:shadow-lg duration-200 sm:py-2 sm:px-3 md:px-4 md:text-lg"
            href="#ingredients-section"
          >
            <p className="inline-block">Find your recipe</p>
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </a>
        </div>
        <div className="max-w-[500px] lg:max-w-[60%]">
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
