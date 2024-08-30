import { FC, useState } from "react";
import { LuMenu } from "react-icons/lu";
import NetworkSwitcher from "./NetworkSwitcher";

export const AppBar: FC = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Features", link: "#features" },
    { name: "Tools", link: "#tools" },
    { name: "Price", link: "#price" },
    { name: "Faq", link: "#faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header id="navbar-sticky" className="navbar">
        <div className="container">
          <nav>
            <a href="/" className="logo">
              <img src="assets/images/logo1.png" alt="logo" className="h-10" />
            </a>
            <div className="ms-auto flex items-center px-2.5 lg:hidden">
              <button
                className="bg-default-100/5 inline-flex h-9 w-12 items-center justify-center rounded-md border border-white/20"
                type="button"
                onClick={toggleMenu}
              >
                <LuMenu className="stroke-white" />
              </button>
            </div>
            <div
              id="mobileMenu"
              className={`mx-auto mt-2 grow basis-full items-center justify-center overflow-hidden transition-all duration-300 ease-in-out lg:mt-0 lg:flex lg:basis-auto ${
                isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul id="navbar-navlist" className="navbar-nav">
                {menu.map((list, index) => (
                  <li className="nav-item" key={index}>
                    <a href={list.link} className="nav-link">
                      {list.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NetworkSwitcher />
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
};
