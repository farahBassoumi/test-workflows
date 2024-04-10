import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/constants";
import { logo, menu, close, bird } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); //scroll to tha top of the page
          }}
        >
          <img src={bird} alt="logo" className="w-12 h-12 object-contain -ml-14" />
          <p className="text-white text-[18px] font-bold " >farah <span className="sm:block hidden" > | farah bassoumi</span> </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
{navLinks.map((link) => (
<li>
  <a href={`#${nav.id}`}>{nav.title}</a>
</li>
) 

)
}


        </ul>
        <p className="text-red-500">asdes</p>
      </div>
    </nav>
  );
};

export default Navbar;
