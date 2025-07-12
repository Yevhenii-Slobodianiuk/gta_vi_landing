import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-amber-700 text-3xl">Welcome to the world</h1>
      </div>
    </main>
  );
};

export default App;
