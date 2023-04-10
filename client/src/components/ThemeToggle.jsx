import React, { useState, useEffect, useRef } from "react";

const ThemeToggle = ({ setTheme, theme }) => {
  //   const [theme, setTheme] = useState("system");
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  //   useEffect(() => {
  //     // Set theme based on system
  //     const systemPreference =
  //       window.matchMedia &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light";
  //     setTheme(systemPreference);

  //     // Save to local storage
  //     localStorage.setItem("theme", systemPreference);
  //   }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    toggleTheme();
  };

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  //   useEffect(() => {
  //     // Save to local storage
  //     localStorage.setItem("theme", theme);
  //   }, [theme]);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //return (
  // <div className="relative inline-block text-left" ref={node}>
  //   <div>
  //     <span className="rounded-md">
  //       <button
  //         type="button"
  //         className="inline-flex items-center px-2 py-2 border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
  //         onClick={toggleTheme}
  //       >
  //         <svg
  //           className="h-5 w-5"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 20 20"
  //           fill="currentColor"
  //         >
  //           {theme === "light" ? (
  //             <path
  //               fillRule="evenodd"
  //               d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1
  //         0 01-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
  //               clipRule="evenodd"
  //             />
  //           ) : (
  //             <path
  //               fillRule="evenodd"
  //               d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1
  //         0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.465l-.708-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
  //               clipRule="evenodd"
  //             />
  //           )}
  //         </svg>
  //       </button>
  //     </span>
  //   </div>
  // </div>
  //);

  return (
    <div className="relative inline-block text-left" ref={node}>
      <div>
        <span className="rounded-md">
          <button
            type="button"
            className="inline-flex items-center py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            onClick={() => setIsOpen(!isOpen)}
          >
            {theme == "light" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 mr-2"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  class="fill-sky-400/20 stroke-sky-500"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  class="stroke-sky-500"
                ></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  class="fill-sky-400/20 stroke-sky-500"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  class="stroke-sky-500"
                ></path>
              </svg>
            )}
          </button>
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
