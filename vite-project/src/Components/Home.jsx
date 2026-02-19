import { motion } from "framer-motion";
import { FaIndustry } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#CEEDB2] pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-[#084734] leading-[1.1] tracking-tight">
            Strategic <br />
            <span className="font-bold tracking-wide">
              Industrial Excellence.
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[#084734]/80 font-light leading-relaxed max-w-xl">
            <span className="font-medium text-[#084734]">
              Soledge Consulting Inc.
            </span>{" "}
            delivers high-impact consulting solutions led by Manoj K,
            integrating engineering precision with operational strategy
            to drive measurable industrial growth.
          </p>
        </motion.div>

        {/* Right Visual Box */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-[#084734] h-96 rounded-[40px] shadow-2xl flex items-center justify-center"
        >
          {/* Icon */}
          <FaIndustry className="text-[#CEF17B] text-7xl opacity-90" />

          {/* Decorative Glow */}
          <div className="absolute w-64 h-64 bg-[#CEF17B]/20 rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
