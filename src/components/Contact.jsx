import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row ">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}></h3>
          <div className="flex-center-center mt-8 flex-wrap gap-2">
            <div>
              <a href="mailto:moong3555@gmail.com">
                <Button variant="outlined" endIcon={<Email />}>
                  Email
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/usman-ghani-moon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<LinkedIn />}>
                  LinkedIn
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/UsmanGhaniMoon/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<GitHub />}>
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src="/assets/contact.png"
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
      <div className="mb-4 ml-5">
        <h1 className="my-3  text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/11hs9SiAyo9IQlx106tcmc_OVRAYHxMUZ/view?usp=sharing"
          >
            <Button variant="outlined" endIcon={<ArrowOutward />}>
              Resume
            </Button>
          </a>
        </div>
      </div>
      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
