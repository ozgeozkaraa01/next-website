import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-[#17244f] text-white flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#fed7aa",
            "#a3e635",
            "#d946ef",
            "#f43f5e",
            "#c026d3",
            "#f0abfc",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        ÖÖ
      </MotionLink>
    </div>
  );
};

export default Logo;
