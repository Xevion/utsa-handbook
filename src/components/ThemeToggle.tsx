import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [themeState, setTheme] = useState((localStorage.getItem("theme") ?? "light"));

  useEffect(() => {
    if (themeState === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", themeState);
  }, [themeState]);


  return (
    <button
    className="text-2xl mt-0.5 mr-1.5"
      onClick={() => {
        setTheme(themeState === "light" ? "dark" : "light");
      }}
    >
      {themeState === "light" ? "🌙" : "🌞"}
    </button>
  );
}
