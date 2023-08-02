import React, { useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    // console.log(event.pageX);
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    // console.log(event.pageX);
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        width="200"
        height="200"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-gray-800 first:mt-0 border border-solid border-gray-800 border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-[#a3e635] font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-gray-800 rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gray-800 rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto object-cover"
          width="200"
          height="200"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="font-semibold">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              time="9 min read"
              link="/"
              img="https://images.unsplash.com/photo-1557681619-aa3ab318509d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80"
            />
            <FeaturedArticle
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              time="9 min read"
              link="/"
              img="https://images.unsplash.com/photo-1557681619-aa3ab318509d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80"
            />
          </ul>
          <h2 className="font-semibold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Lorem ipsum dolor sit amet"
              date="March 22, 2023"
              link="/"
              img="https://images.unsplash.com/photo-1586210819111-29c763c5292a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <Article
              title="Lorem ipsum dolor sit amet"
              date="March 22, 2023"
              link="/"
              img="https://images.unsplash.com/photo-1586210819111-29c763c5292a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <Article
              title="Lorem ipsum dolor sit amet"
              date="March 22, 2023"
              link="/"
              img="https://images.unsplash.com/photo-1586210819111-29c763c5292a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <Article
              title="Lorem ipsum dolor sit amet"
              date="March 22, 2023"
              link="/"
              img="https://images.unsplash.com/photo-1586210819111-29c763c5292a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
