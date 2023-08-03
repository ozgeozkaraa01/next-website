import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] border-solid border-gray-400 font-medium text-base bg-[#e0eeec]">
      <Layout className="py-8 flex items-center justify-between">
        <span className="text-[#244b45]">
          {new Date().getFullYear()} &copy; All Right Reserved. Rights
        </span>
        <div className="flex items-center text-[#244b45]">
          Build With{" "}
          <span className="text-[#64748b] text-base px-1">&#9734;</span>
          by&nbsp;
          <Link
            href="https://ozgenurozkara.vercel.app/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            ozgenurozkara
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
