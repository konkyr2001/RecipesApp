import { useState } from "react";
import Hamburger from "hamburger-react";

export default function NavigationBurger() {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <div className="inline-block ml-20 static">
      <div className="z-40 relative">
        <Hamburger
          color="#5F01C9"
          rounded
          label="Enable Navigation Bar"
          hideOutline={false}
          toggled={openNavBar}
          toggle={setOpenNavBar}
        ></Hamburger>
      </div>
      <div
        className={`bg-slate-500 h-[100vh] fixed top-0 left-0 z-30 pt-3 transition-all
          ${openNavBar ? 'w-[30vw] opacity-100' : 'w-[0vw] opacity-0'}`}
        style={{ transition: "width 300ms ease-in-out, opacity 400ms ease-in-out, visibility 400ms ease-in-out" }}
      >
        <div className="mt-[100px] text-center">
          <p className="font-appleLookALike text-[20px] font-medium">You can find me here: </p>
          <ul className="mt-10 flex justify-center">
            <li className="mx-3">
              <a href="https://www.linkedin.com/in/konstantinos-kyriazopoulos-4a44b8233/" target="_blank">
                <i className="fa-brands fa-linkedin text-[35px] text-blue-600 "></i>
              </a>
            </li>
            <li className="mx-3">
              <a href="https://github.com/konkyr2001" target="_blank">
                <i className="fa-brands fa-github text-[35px]"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
