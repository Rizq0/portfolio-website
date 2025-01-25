import { Toaster } from "react-hot-toast";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen min-w-[365px] bg-backgroundlight dark:bg-backgrounddark flex items-center flex-col">
      <div className="max-w-[1280px] p-4 w-full">
        <Toaster position="top-center" />
        <Header />
        <AboutMe />
        <hr className="text-button mt-12 mb-12 border-t-[4px] rounded w-full" />
      </div>
    </div>
  );
}

export default App;
