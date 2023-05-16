import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

export const Demo = () => {
const [article, setArticle] = useState({url:'',summary:''})

  const onSubmit = async() => {
    alert('submited')
  };
  const onInputChange = (e) => {
    setArticle({...article, url: e.target.value})
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={onSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Ingrese una url"
            value={article.url}
            onChange={onInputChange}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>

        
      </div>
    </section>
  );
};
