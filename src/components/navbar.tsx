import React, { useState, useEffect } from "react";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = "text-xl leading-6 font-jost text-primary-200";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all sduration-300 ${scrolled ? "py-4 shadow-xs bg-white" : "py-7 bg-white/0"
        }`}
    >
      <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full flex justify-between items-center">
        <a href="/">
          {" "}
          <Logo />
        </a>

        {/* Nav List for Desktop */}
        {matches && (
          <nav className="flex flex-row gap-6">
            <a href="/" className={linkStyle}>
              Home
            </a>
            <a href="#" className={linkStyle}>
              Chi siamo
            </a>
            <a href="#" className={linkStyle}>
              Servizi
            </a>
            <a href="/contact" className={linkStyle}>
              Contattaci
            </a>
          </nav>
        )}

        {!matches && (
          <div
            onClick={() => setToggled(!toggled)}
            className="space-y-1.5 cursor-pointer z-50 relative"
            role="button"
            aria-label="Toggle menu"
            aria-expanded={toggled}
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 32 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
          </div>
        )}

        {toggled && !matches && (
          <motion.nav
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col fixed h-screen bg-white w-full text-black top-0 left-0 gap-6 items-center justify-center z-40"
          >
            <a href="/" className={linkStyle}>
              Home
            </a>
            <a href="#" className={linkStyle}>
              Chi siamo
            </a>
            <a href="#" className={linkStyle}>
              Servizi
            </a>
            <a href="/contact" className={linkStyle}>
              Contattaci
            </a>
          </motion.nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
