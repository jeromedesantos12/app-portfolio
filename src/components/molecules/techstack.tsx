"use client";

import { motion } from "framer-motion";
import { LogoSlider } from "./slider";

export function TechStack() {
  return (
    <section
      id={"#techstack"}
      className="flex flex-col gap-10 pt-20 py-10 px-5 items-center bg-accent"
    >
      <div className="flex flex-col gap-5">
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {"Tools I Use Everyday"}
        </motion.h1>
      </div>
      <section id="tech-stack">
        <LogoSlider />
      </section>
    </section>
  );
}
