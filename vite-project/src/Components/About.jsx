import { motion } from "framer-motion";
import { FaCogs, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#CEF17B]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-wide text-[#084734]"
        >
          About <span className="font-bold">Soledge</span>
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[3px] bg-[#084734] mx-auto mt-6 mb-10 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[#084734]/80 font-light leading-relaxed max-w-4xl mx-auto"
        >
          Founded with a clear strategic vision,{" "}
          <span className="font-medium text-[#084734]">
            Soledge Consulting Inc.
          </span>{" "}
          bridges industrial engineering precision with executive-level
          operational leadership. We empower organizations through
          intelligent process optimization, performance analytics, and
          sustainable transformation frameworks.
        </motion.p>

        {/* Icon Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">

          {[
            {
              icon: <FaCogs />,
              title: "Process Optimization",
              desc: "Engineering-driven operational refinement for scalable efficiency."
            },
            {
              icon: <FaChartLine />,
              title: "Strategic Growth",
              desc: "Data-backed decision systems enabling measurable business expansion."
            },
            {
              icon: <FaUsers />,
              title: "Leadership Integration",
              desc: "Aligning technical expertise with executive vision and workforce synergy."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#084734] text-[#CEF17B] p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <div className="text-4xl mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-wide">
                {item.title}
              </h3>
              <p className="mt-4 text-sm opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;
