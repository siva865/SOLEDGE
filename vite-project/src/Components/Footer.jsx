import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#084734] text-[#CEF17B] py-16 relative overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#CEF17B]/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Company Name */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[6px] uppercase">
          Soledge Consulting Inc.
        </h2>

        {/* Divider */}
        <div className="h-[2px] w-24 bg-[#CEF17B] mx-auto my-8 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-10">

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/manojhkanchipuram/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#CEF17B]/10 p-4 rounded-full hover:bg-[#CEF17B]/20 transition duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </motion.a>

          {/* Twitter / X */}
          <motion.a
            href="#"
            whileHover={{ y: -6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#CEF17B]/10 p-4 rounded-full hover:bg-[#CEF17B]/20 transition duration-300"
          >
            <FaTwitter className="text-xl" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:yourmail@example.com"
            whileHover={{ y: -6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#CEF17B]/10 p-4 rounded-full hover:bg-[#CEF17B]/20 transition duration-300"
          >
            <FaEnvelope className="text-xl" />
          </motion.a>

        </div>

        {/* Copyright */}
        <p className="text-sm tracking-widest opacity-80">
          © 2026 SOLEDGE CONSULTING INC. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
