import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
interface Navigate {
  id: number;
  name: string;
  route: string;
}

export const navigate = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 3,
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    id: 3,
    name: "Skills",
    route: "/skills",
  },
  {
    id: 2,
    name: "About",
    route: "/about",
  },
  {
    id: 4,
    name: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const [toggel, setToggle] = useState<boolean>(false);
  const handleHamburgerToggel = () => {
    setToggle(!toggel);
  };

  return (
    <div className="flex justify-between text-white w-full p-4 lg:flex-row md:flex-row sm:flex-row border-b-1">
      <div className="flex">
        <div>
          {/* <DotLottieReact
            src="https://lottie.host/43480faa-d5f2-41b6-ba0a-e701c033d70f/EoT2io14n5.lottie"
            loop
            width={15}
            height={15}
            autoplay
          /> */}
        </div>
        <NavLink to={navigate[0]?.route}>丂卂匚卄丨几</NavLink>
      </div>

      <div className="gap-5 hidden lg:flex">
        {navigate?.map((item: Navigate) => {
          return (
            <div key={item?.id}>
              <NavLink
                to={item?.route}
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-orange-400 duration-300 transition-all hover:text-xl font-bold"
                    : "text-white"
                }
              >
                {item?.name}
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="visible lg:hidden" onClick={handleHamburgerToggel}>
        <Menu />
      </div>

      {toggel && (
        <div className="bg-black absolute top-15 z-99 right-0 py-10 lg:hidden">
          <HamburgerMenu setToggel={setToggle} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
