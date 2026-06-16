import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import cvUrl from "../assets/Joe Brown CV PDF DEV.pdf";
import { ContactMe } from "./ContactMe";
import { Theme } from "../types/header.ts";

const THEMES: Theme[] = [
  "portfolio-dark",
  "portfolio-light",
  "cupcake",
  "night",
  "retro",
  "halloween",
  "garden",
  "forest",
  "luxury",
  "dracula",
  "autumn",
  "dim",
  "aqua",
  "nord",
];

const THEME_LABELS: Record<string, string> = {
  "portfolio-dark": "Portfolio Dark",
  "portfolio-light": "Portfolio Light",
  cupcake: "Cupcake",
  night: "Night",
  retro: "Retro",
  halloween: "Halloween",
  garden: "Garden",
  forest: "Forest",
  luxury: "Luxury",
  dracula: "Dracula",
  autumn: "Autumn",
  dim: "Dim",
  aqua: "Aqua",
  nord: "Nord",
};

const initialiseTheme = (): Theme => {
  const stored = localStorage.getItem("theme");
  if (stored && THEMES.includes(stored)) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "portfolio-dark"
    : "portfolio-light";
};

export const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => initialiseTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const openDialog = () => setModalOpen(true);
  const closeDialog = () => setModalOpen(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    setTheme(next);
    toast(`Theme: ${THEME_LABELS[next] ?? next}`, { icon: "🎨" });
  };

  const handleDownload = () => {
    if (confirm("Are you sure you want to download this file?")) {
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Joe Brown - CV DEV PDF.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header className="w-full">
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"
          onClick={closeDialog}
        >
          <div
            className="bg-base-100 text-base-content rounded-lg p-6 max-w-lg w-full mx-4 font-gabarito"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-medium mb-4">Contact Me</h3>
            <ContactMe />
            <div className="flex justify-end mt-4">
              <button className="btn btn-ghost" onClick={closeDialog}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-32 md:h-32 mx-auto flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center w-full pt-4 md:pt-0">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
          <nav>
            <ul className="flex space-x-4">
              <li className="flex items-center justify-center flex-grow">
                <a
                  href="https://www.linkedin.com/in/joe-brown0/"
                  target="_blank"
                  title="LinkedIn"
                  className="text-base-content hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="40"
                    height="40"
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
                  className="text-base-content hover:text-primary"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="40"
                    height="40"
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
                  className="text-base-content hover:text-primary"
                  title="Download CV"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="40"
                    height="40"
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
                <button
                  className="text-base-content hover:text-primary"
                  onClick={openDialog}
                  title="Contact Me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="40"
                    height="40"
                    strokeWidth="2"
                  >
                    <path d="M10 14l11 -11"></path>
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="select select-sm bg-base-100 text-base-content border-base-content/30 font-gabarito"
            title="Select Theme"
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {THEME_LABELS[t] ?? t}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center pt-4 md:pt-0">
          <h1 className="text-base-content font-gabarito font-medium text-5xl">
            Joe Brown
          </h1>
          <h2 className="text-primary font-gabarito font-medium sm:text-2xl text-xl">
            Platform & DevOps Engineer
          </h2>
        </div>
      </div>
    </header>
  );
};
