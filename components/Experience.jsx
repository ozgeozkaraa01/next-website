import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-semibold text-xl">
          {position}&nbsp;
          <Link
            href={companyLink}
            target="_blank"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
          >
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-semibold text-5xl mb-24 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[1px] h-full bg-slate-300 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Developer"
            company="lorem"
            companyLink="www.company.com"
            time="2022-Present"
            address="Turkey"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus quod sit neque ipsa animi recusandae corporis dolores deserunt architecto?"
          />
          <Details
            position="Software Developer"
            company="lorem"
            companyLink="www.company.com"
            time="2022-Present"
            address="Turkey"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus quod sit neque ipsa animi recusandae corporis dolores deserunt architecto?"
          />
          <Details
            position="Software Developer"
            company="lorem"
            companyLink="www.company.com"
            time="2022-Present"
            address="Turkey"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus quod sit neque ipsa animi recusandae corporis dolores deserunt architecto?"
          />
          <Details
            position="Software Developer"
            company="lorem"
            companyLink="www.company.com"
            time="2022-Present"
            address="Turkey"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus quod sit neque ipsa animi recusandae corporis dolores deserunt architecto?"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
