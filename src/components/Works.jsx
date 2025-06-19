import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.7)}>
      <div className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={alt}
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src="/assets/webLink.png"
                alt="live link"
                className="h-full w-full rounded-full  object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src="/assets/github.png"
                alt="source code"
                className="h-3/4 w-3/4 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p key={i} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3  text-[17px] leading-[30px] text-secondary"
        >
          The following projects showcase my expertise and hands-on experience through real-world applications. Each project demonstrates my ability to solve complex problems, leverage diverse technologies, and deliver effective solutions. Below, you’ll find descriptions along with links to live demos or repositories, reflecting my commitment to quality, innovation, and project management.
        </motion.p>
      </div>

      <div className="flex-around-center mt-20 flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
