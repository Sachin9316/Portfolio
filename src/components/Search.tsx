import  { useEffect, useState } from "react";
import { Volleyball } from "lucide-react";

const placeHolderText = ["Search", "Home", "About", "Portfolio", "Contact"];

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [placeholder, setPlaceholder] = useState("Search");
  const [toggel, setToggle] = useState<boolean>(false);
  const handleHamburgerToggel = () => {
    setToggle(!toggel);
  };

  useEffect(() => {
    let i = 0;

    const intervalId = setInterval(() => {
      console.log("hello");
      if (i < placeHolderText.length) {
        setPlaceholder(placeHolderText[i]);
        i++;
      } else {
        i = 0;
      }

      console.log(i);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <div className="flex bg-gradient-to-r from-teal-200 via-purple-600 to-pink-400 rounded-2xl p-2">
      {toggel && (
        <input
          name="search"
          value={searchText}
          placeholder={placeholder}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-2xl outline outline-none px-3 py-2 placeholder-pink-500 text-white font-bold text-xl duration-1000 transition-all"
        />
      )}

      <button
        className="text-white duration-700 transition-all cursor-pointer"
        onClick={handleSearch}
      >
        <Volleyball onClick={handleHamburgerToggel} />
      </button>
    </div>
  );
};

export default Search;
