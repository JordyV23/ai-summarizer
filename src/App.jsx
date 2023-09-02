import { Demo, Footer, Hero } from "./components";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
      <Footer />
    </main>
  );
};

export default App;
