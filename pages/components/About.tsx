import { NextPage } from "next";
import ButtonCustom from "./ButtonCustom";
import { BiDownload } from "react-icons/bi";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

// const AnimatedLetters = ({ title }) => (
//   <motion.span
//     className="row-title"
//     variants={disabled ? null : banner}
//     initial="initial"
//     animate="animate"
//   >
//     {[...title].map((letter) => (
//       <motion.span
//         className="row-letter"
//         variants={disabled ? null : letterAni}
//       >
//         {letter}
//       </motion.span>
//     ))}
//   </motion.span>
// );

const About: NextPage = () => {
  return (
    <div className="flex flex-col max-w-[78rem] w-4/5 h-screen mx-auto justify-center">
      <motion.div variants={banner} className="dark:text-GreenCustom w-fit">
        Hi, my name is
      </motion.div>
      <br />
      <div className="dark:text-LightestSlateCustom lg:text-7xl font-bold w-fit">
        Andika Rizki Fadhila.
      </div>
      <br />
      <div className="dark:text-SlateCustom lg:text-7xl font-bold w-fit">
        I build things for the web.
      </div>
      <br />
      <div className="w-96">
        <p className="dark:text-SlateCustom">
          I’m a Mechanical Engineer who turned into a Full Stack Developer.
          Currently, I’m focused on building a website for NFT community at
          <span className="dark:text-GreenCustom"> DECON.</span>
        </p>
      </div>
      <br />
      <ButtonCustom
        className="w-fit p-3 font-light flex items-center gap-2"
        icon={<BiDownload />}
      >
        Resume
      </ButtonCustom>
    </div>
  );
};

export default About;
