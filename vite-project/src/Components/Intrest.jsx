import { motion } from "framer-motion";
import { FaCogs, FaChartLine, FaIndustry } from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry />,
    title: "Industrial Strategy",
    desc: "Comprehensive industrial frameworks aligning production ecosystems with long-term business strategy."
  },
  {
    icon: <FaCogs />,
    title: "Process Engineering",
    desc: "Optimizing technical workflows through engineering precision and performance-driven methodologies."
  },
  {
    icon: <FaChartLine />,
    title: "Operational Growth",
    desc: "Accelerating scalable expansion with data-backed operational intelligence systems."
  },
];

const Intrest = () => {
  return (
    <section id="expertise" className="py-32 bg-[#CEEDB2] relative overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#CEF17B]/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-wide text-[#084734]"
        >
          Core <span className="font-bold">Expertise</span>
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[3px] bg-[#084734] mx-auto mt-6 mb-20 rounded-full"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="bg-[#084734] text-[#CEF17B] p-12 rounded-[35px] shadow-2xl transition duration-500 relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[#CEF17B]/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-8 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold tracking-wide uppercase">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Intrest;
