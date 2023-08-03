import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-[#e0eeec]">
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4 text-[#244b45]" />
        <CustomLink
          href="/about"
          title="About"
          className="mx-4 text-[#244b45]"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4 text-[#244b45]"
        />
        <CustomLink
          href="/articles"
          title="Articles"
          className="ml-4 text-[#244b45]"
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://github.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#17244f"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ozgenur-ozkara/"
            target="_blank"
            fgColor="#17244f"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://dribbble.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#17244f"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/ozkaraozgee"
            target="_blank"
            fgColor="#17244f"
            bgColor="transparent"
          />
        </motion.div>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
