"use client"
import React, { useState, useEffect } from "react";
import Icons from "./common/Icons";

const TheamToggle = () => {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div className=" min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex items-center justify-center">
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-lg transition"
                >
                    {theme === "light" ? <Icons icon="moon"/> : <Icons icon="sun" />}
                    <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </button>
            </div>
            <p className="dark:text-white text-black">change color</p>
            <h1 className="dark:text-red-400 text-green-900">heading color</h1>
        </div>
    );
};

export default TheamToggle;
