import { useState } from "react";
import "./App.css";
import Flowers from "./Components/Flowers/Flowers";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const inputField = document.getElementById("search-input");
    const input = inputField.value;
    console.log(input);
    setSearchText(input);

    inputField.value = "";
  };

  return (
    <>
      <div className="container mx-auto px-5 md:px-8 pt-8">
        <div className="md:flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Flowers Website
          </h1>
          <div className="relative">
            <label className="input">
              <input
                id="search-input"
                className="w-full md:w-[300px] pr-5"
                type="search"
                required
                placeholder="Search"
              />
            </label>
            <button
              onClick={handleSearch}
              type="button"
              className="cursor-pointer absolute right-4 top-3 z-10"
            >
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Flowers searchText={searchText}></Flowers>
    </>
  );
}

export default App;
