export default function Footer() {
  return (
    <div className="w-full h-[500px] bg-purple-400 relative">
      <ul className="flex items-center justify-center w-full h-[350px] relative">
        <li className="flex absolute left-[10%]">
          <li className="mx-3 hover:-translate-y-2 duration-200 ease-in-out">
            <a
              href="https://www.linkedin.com/in/konstantinos-kyriazopoulos-4a44b8233/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-[35px] text-blue-600 "></i>
            </a>
          </li>
          <li className="mx-3 hover:-translate-y-2 duration-200 ease-in-out">
            <a href="https://github.com/konkyr2001" target="_blank">
              <i className="fa-brands fa-github text-[35px]"></i>
            </a>
          </li>
        </li>
        <li className="flex absolute right-[10%]">
          <div style={{ width: "100%" }}>
            <iframe
              width="500"
              height="300"
              src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=Aristotle%20University%20of%20Thessaloniki+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </li>
      </ul>
      <div className="w-full h-[100px] bg-purple-600 flex justify-center items-center relative">
        <ul>
          <li className="inline-block absolute left-10">
            <p className="">Copyright 2024 - Konkyr</p>
          </li>
          <li className="inline-block">LOGO</li>
          <li className="inline-block absolute right-0 w-[250px] h-[30px]">
            <li className="inline-block mr-8">
              <a className="cursor-pointer text-[15px] hover:text-[17px] duration-200">
                {" "}
                Terms of Use{" "}
              </a>
            </li>
            <li className="inline-block">
              <a className="cursor-pointer text-[15px] hover:text-[17px] duration-200">
                Privacy Policy
              </a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
