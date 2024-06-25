import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer w-full h-[300px] relative text-white font-Poppins font-light">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul className="flex justify-center items-center h-full flex-col pt-0">
        <li className="block m-3">
          <a target="_blank" href="https://www.linkedin.com/in/konstantinos-kyriazopoulos-4a44b8233/" className="m-8 inline-block">
            <i className="fa-brands fa-linkedin text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </a>
          <a href="https://github.com/konkyr2001" target="_blank" className="m-8 inline-block">
            <i className="fa-brands fa-github text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMFzfGwrQbMnttmsTQvqnlsJRKmNMHbNHHLvGSSpFGxqBsskplGFzKBMqBVJXkDgfSFMP" target="_blank" className="m-8 inline-block">
            <i className="fa-brands fa-google-plus text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </a>
        </li>
        <li>
          <a href="#welcome-section" className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out">Home</a>
          <a href="#website-details-section" className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out">About</a>
          <a href="#ingredients-section" className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out">Filter</a>
          <a href="#recipes-section" className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out">Recipes</a>
        </li>
        <li className="absolute bottom-1 font-extralight">
            © 2024 RecipesApp. All Rights Reserved.
        </li>
      </ul>
    </div>
  );
}
