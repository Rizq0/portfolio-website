import React from "react";
import toast from "react-hot-toast";
import cvUrl from "../assets/Joe Brown CV PDF NC.pdf";

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    if (!darkMode) {
      toast("My old friend!", {
        icon: "🌚",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Let there be Light!", {
        icon: "🌞",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
    }
  };

  const handleDownload = () => {
    if (confirm("Are you sure you want to download this file?")) {
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Joe Brown - CV 2024.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header className="w-full">
      <div className="h-32 mx-auto flex justify-around md:justify-between items-center flex-wrap w-full pt-4 md:pt-0">
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center justify-center flex-grow">
              <a
                href="https://www.linkedin.com/in/joe-brown0/"
                target="_blank"
                className="text-backgrounddark hover:text-button dark:text-backgroundlight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="32"
                  height="32"
                  strokeWidth="2"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center flex-grow">
              <a
                href="https://github.com/Rizq0"
                target="_blank"
                className="text-backgrounddark hover:text-button dark:text-backgroundlight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="32"
                  height="32"
                  strokeWidth="2"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center flex-grow">
              <a
                href="#"
                onClick={handleDownload}
                className="text-backgrounddark hover:text-button dark:text-backgroundlight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="32"
                  height="32"
                  strokeWidth="2"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                  <path d="M13 11l1.5 6l1.5 -6"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center flex-grow">
              <a
                className="text-backgrounddark hover:text-button dark:text-backgroundlight"
                href="#contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="32"
                  height="32"
                  strokeWidth="2"
                >
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
              </a>
            </li>
            <li className="flex items-center justify-center flex-grow">
              <button
                onClick={toggleDarkMode}
                className="text-backgrounddark hover:text-button dark:text-backgroundlight"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="32"
                    height="32"
                    strokeWidth="2"
                  >
                    <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                    <path d="M6.343 17.657l-1.414 1.414"></path>
                    <path d="M6.343 6.343l-1.414 -1.414"></path>
                    <path d="M17.657 6.343l1.414 -1.414"></path>
                    <path d="M17.657 17.657l1.414 1.414"></path>
                    <path d="M4 12h-2"></path>
                    <path d="M12 4v-2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M12 20v2"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="32"
                    height="32"
                    strokeWidth="2"
                  >
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                    <path d="M19 11h2m-1 -1v2"></path>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
        <div className="m-2 text-center">
          <h1 className="text-headlinelight dark:text-headlinedark font-gabarito text-5xl">
            Joe Brown
          </h1>
          <h2 className="text-button font-gabarito text-2xl">
            Junior Software Developer
          </h2>
        </div>
      </div>
    </header>
  );
};
