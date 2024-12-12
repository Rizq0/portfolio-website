import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen min-w-[365px] bg-backgroundlight dark:bg-backgrounddark flex items-center flex-col">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
