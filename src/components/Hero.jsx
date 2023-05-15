import { logo } from "../assets";

export const Hero = () => {
  const openGithub = () => {
    window.open("https://github.com/JordyV23/ai-summarizer");
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo de la app" className="w-28 object-contain" />

        <button type="button" onClick={openGithub} className="black_btn">
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with "THE SUMMARIZER", 
        an open source article summarizer
        that transforms lengthy articles into 
        clear and concise summaries
      </h2>
    </header>
  );
};
