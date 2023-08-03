import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TransitionEffect from "../components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-2xl border border-solid border-slate-300 bg-white shadow-xl relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-indigo-300 rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-[40%] cursor-pointer overflow-hidden rounded-lg m-10"
      >
        <img src={img} alt={title} className="w-full h-[500px] object-cover" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-2xl font-semibold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-base text-slate-500">{summary}</p>
        <div className="mt-2 flex items-center">
          <SocialIcon
            url="https://github.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#475569"
            bgColor="transparent"
          />

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-indigo-600 text-white p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-slate-300 bg-white p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-indigo-300 rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-[450px] object-cover" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-2xl font-semibold">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold"
          >
            Visit
          </Link>
          <SocialIcon
            url="https://github.com/ozgeozkaraa01"
            target="_blank"
            fgColor="#475569"
            bgColor="transparent"
          />
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <Header />
      <main className="w-full flex flex-col items-center justify-center bg-[#e0eeec]">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Lorem ipsum dolor"
                img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-bts-202306_GEO_TR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1688581467437"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Lorem ipsum dolor"
                img="https://www.apple.com/tr/mac/home/images/overview/mdt/mdt_family__gkejyxsh4p26_large_2x.jpg"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Lorem ipsum dolor"
                img="https://www.apple.com/tr/ipad/images/overview/ipados17__fbavkgtxnxyu_large_2x.jpg"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Lorem ipsum dolor"
                img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-bts-202306_GEO_TR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1688581467437"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Lorem ipsum dolor"
                img="https://www.apple.com/tr/mac/home/images/overview/macos/continuity__f7o5n4kqigeq_large_2x.jpg"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Lorem ipsum dolor"
                img="https://www.apple.com/tr/mac/home/images/overview/mdt/mdt_family__gkejyxsh4p26_large_2x.jpg"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                link="/"
                github="/"
                type="Lorem ipsum"
              />
            </div>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
