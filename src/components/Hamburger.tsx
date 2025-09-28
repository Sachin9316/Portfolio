import { navigate } from "./Navbar";
import { NavLink } from "react-router-dom";

type Props = {
  setToggel: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ setToggel }: Props) => {
  return (
    <div className="flex justify-start px-8 duration-500 transition-all">
      <div className="gap-5 flex flex-col">
        {navigate?.map((item) => {
          return (
            <div key={item?.id} onClick={() => setToggel(false)}>
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
    </div>
  );
};

export default Hamburger;
