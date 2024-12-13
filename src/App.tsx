import { Toaster } from "react-hot-toast";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen min-w-[365px] bg-backgroundlight dark:bg-backgrounddark flex items-center flex-col">
      <div className="max-w-[1280px] p-4">
        <Toaster position="bottom-center" />
        <Header />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
