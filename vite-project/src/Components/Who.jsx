import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

const Who = () => {
  return (
    <section
      id="leadership"
      className="py-32 bg-[#CEF17B] relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-[#084734]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side - Icon / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#084734] text-[#CEF17B] rounded-[40px] shadow-2xl h-96 flex items-center justify-center relative"
          >
            <FaUserTie className="text-7xl opacity-90" />

            {/* Decorative Glow */}
            <div className="absolute w-60 h-60 bg-[#CEF17B]/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#084734] tracking-wide">
              Executive <span className="font-bold">Leadership</span>
            </h2>

            {/* Decorative Line */}
            <div className="h-[3px] w-24 bg-[#084734] mt-6 mb-10 rounded-full"></div>

            <p className="text-lg md:text-xl text-[#084734]/80 font-light leading-relaxed">
              <span className="font-medium text-[#084734]">
                Manoj K
              </span>{" "}
              integrates engineering precision with strategic leadership,
              fostering collaborative innovation and driving measurable
              performance transformation across industrial ecosystems.
            </p>

            {/* Quote Style Highlight */}
            <div className="mt-10 border-l-4 border-[#084734] pl-6">
              <p className="text-[#084734] italic text-md md:text-lg">
                “Vision-led strategy combined with engineering discipline
                creates sustainable industrial excellence.”
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Who;
