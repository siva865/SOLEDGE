import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = ["Home", "About", "Expertise", "Leadership"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed w-full z-50 bg-[#084734]/95 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Company Name */}
        <div className="text-[#CEF17B]">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-[6px] uppercase font-poppins">
            Soledge
          </h1>
          <p className="hidden md:block text-[10px] tracking-[5px] mt-1 opacity-80">
            Consulting Inc.
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-14 text-[#CEF17B] text-sm tracking-widest uppercase font-medium">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group pb-2"
            >
              {item}

              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#CEF17B] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-[#CEF17B] text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#084734] text-[#CEF17B] flex flex-col items-center py-8 space-y-6 uppercase tracking-widest text-sm"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="relative group pb-2"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#CEF17B] transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
