import { Toaster } from "react-hot-toast";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen min-w-[365px] bg-base-100 flex items-center flex-col">
      <div className="max-w-[1280px] p-4 w-full">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "oklch(var(--b1))",
              color: "oklch(var(--bc))",
              border: "1px solid oklch(var(--p))",
              borderRadius: "10px",
            },
          }}
        />
        <Header />
        <AboutMe />
        <hr className="border-primary mt-12 mb-12 border-t-[4px] rounded w-full" />
      </div>
    </div>
  );
}

export default App;
