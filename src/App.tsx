import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen min-w-[365px] bg-backgroundlight dark:bg-backgrounddark flex items-center flex-col">
      <div className="max-w-[1280px] px-4">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
