import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import { spring, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <Header />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Biography
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quas eum possimus omnis dolorem dolores placeat voluptatum,
                tenetur sed iusto praesentium maxime totam, eaque dicta id
                aspernatur magnam provident expedita.
              </p>
              <p className="my-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                quas eum possimus omnis dolorem dolores placeat voluptatum,
                tenetur sed iusto praesentium maxime totam, eaque dicta id
                aspernatur magnam provident expedita.
              </p>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                ab aliquam velit provident corrupti fuga repellendus accusamus
                enim ratione quam, cupiditate voluptatum fugiat possimus alias
                nam, quibusdam fugit aut deserunt.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-blue-300 bg-white p-10">
              <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[100%] rounded-[2rem] bg-blue-300" />
              <img
                src="/assets/ozge.jpeg"
                alt="photo"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl font-semibold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-lg font-medium capitalize text-zinc-500">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl font-semibold">
                  {" "}
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-lg font-medium capitalize text-zinc-500">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl font-semibold">
                  {" "}
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-lg font-medium capitalize text-zinc-500">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default About;
