import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies, tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "@mui/material";

const ServiceCard = ({ index, title, icon }) => (
  <div className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1 + 0.2, 0.6)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />

        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:587px)");
  const isLargeScreen = useMediaQuery("(min-width:1248px)");
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a skilled full-stack developer with expertise in both <strong>JavaScript</strong> and <strong>PHP</strong> ecosystems. On the frontend, I specialize in <strong>React</strong>, <strong>Vue.js</strong>, and modern JavaScript frameworks. For backend development, I have extensive experience with <strong>Node.js (Express)</strong>, <strong>Laravel</strong>, <strong>CodeIgniter</strong>, and <strong>Yii</strong>.
        <br /><br />
        My database proficiency spans both SQL (<strong>MySQL</strong>) and NoSQL (<strong>MongoDB</strong>) solutions, and I'm experienced in <strong>WordPress</strong> theme customization, plugin development, and <strong>RESTful API</strong> design.
        <br /><br />
        A quick learner and collaborative problem-solver, I partner closely with clients to build efficient, scalable applications that address real-world challenges. Let's work together to bring your ideas to life!
      </motion.p>
      <div
        className={`flex-center-center ${
          isSmallScreen ? "linearToL" : isLargeScreen ? "linearToB" : "circle"
        } mt-20 flex-wrap gap-10`}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="flex-center-center mt-20 flex-col">
        <h3 className={`${styles.sectionHeadText} marker`}>Skills</h3>
        <div className="mt-2 flex flex-wrap  justify-center gap-10 ">
          {technologies.map((item, i) => (
            <div key={i} className="flex-around-center w-[80px] flex-col">
              <img src={item.icon} width="100%" alt={item.name} />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-center-center mt-20 flex-col">
        <h3 className={styles.sectionSubText}>Tools and Software</h3>
        <div className="mt-2 flex flex-wrap  justify-center gap-10 ">
          {tools.map((item, i) => (
            <div key={i} className="flex-around-center w-[80px] flex-col">
              <img src={item.icon} width="100%" alt={item.name} />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
