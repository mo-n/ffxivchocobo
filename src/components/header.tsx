import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "assets/home.svg";
import { ReactComponent as GithubIcon } from "assets/github.svg";

function Header() {
  return (
    <header className="sticky shadow-lg top-0 z-40 w-full mx-auto bg-blue-500 flex-none flex items-center py-2 px-6">
      <Link to="/" className="inline-flex h-6 cursor-pointer text-white">
        <span className="text-lg"><HomeIcon className="relative inline-block w-7 box-content mr-2 -top-0.5"/>Chocobo Colors</span>
      </Link>
      <div className="flex-auto"></div>
      <a
        href="https://github.com/mo-n/ffxivchocobo"
        className="inline-flex w-6 h-6 p-2 box-content cursor-pointer text-white"
      >
        <GithubIcon />
      </a>
    </header>
  );
}

export default Header;
