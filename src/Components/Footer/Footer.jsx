import { motion } from "framer-motion";

import "./Footer.css";

export default function Footer() {
  return (
    <div
      className="footer-lightMode w-full h-[300px] relative text-white font-Poppins font-light"
      id="footer"
    >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="flex justify-center items-center h-full flex-col pt-0">
        <li className="block m-3">
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/konstantinos-kyriazopoulos-4a44b8233/"
            className="m-8 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            variants={{
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              hidden: { opacity: 0, x: -100, filter: "blur(5px)" },
            }}
          >
            <i className="fa-brands fa-linkedin text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </motion.a>
          <motion.a
            href="https://github.com/konkyr2001"
            target="_blank"
            className="m-8 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              hidden: { opacity: 0, x: -100, filter: "blur(5px)" },
            }}
          >
            <i className="fa-brands fa-github text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </motion.a>
          <motion.a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQMFzfGwrQbMnttmsTQvqnlsJRKmNMHbNHHLvGSSpFGxqBsskplGFzKBMqBVJXkDgfSFMP"
            target="_blank"
            className="m-8 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              hidden: { opacity: 0, x: -100, filter: "blur(5px)" },
            }}
          >
            <i className="fa-brands fa-google-plus text-4xl hover:-translate-y-2 duration-300 ease-in-out"></i>
          </motion.a>
        </li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <a
            href="#welcome-section"
            className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out"
          >
            Home
          </a>
          <a
            href="#website-details-section"
            className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out"
          >
            About
          </a>
          <a
            href="#ingredients-section"
            className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out"
          >
            Filter
          </a>
          <a
            href="#recipes-section"
            className="m-5 text-[18px] opacity-75 hover:opacity-100 hover:text-[22px] duration-200 ease-in-out"
          >
            Recipes
          </a>
        </motion.li>
        <motion.li
          className="absolute bottom-1 font-extralight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
            hidden: { opacity: 0, scale: 0, filter: "blur(5px)" },
          }}
        >
          © 2024 RecipesApp. All Rights Reserved.
        </motion.li>
      </ul>
    </div>
  );
}
