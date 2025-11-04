import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";
import app from "@/data/app.json";
import hero from "@/data/hero.json";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id={hero.id}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <Particles
        className="absolute inset-0 z-0"
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="absolute inset-0 flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center px-5 z-10">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0 }}
          className="relative w-full md:w-[400px] h-64 sm:h-80 md:h-96"
        >
          <Image
            src={hero.image}
            alt="Profile preview"
            fill
            className="object-cover object-top rounded-2xl shadow-lg"
            priority
          />
        </motion.div>
        <div className="max-w-3xl flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
          >
            {hero.title}
          </motion.h1>
          <div className="flex flex-col -mt-5 sm:flex-row gap-3 ">
            <motion.h2
              initial={{ opacity: 0, translateY: "100%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-3xl font-light text-muted-foreground duration-300"
            >
              {hero.caption}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-muted-foreground max-w-lg duration-300"
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex gap-4"
          >
            <Link href={app.contact} target="_blank">
              <Button className="cursor-pointer flex gap-2 items-center justify-center px-6 py-3 shadow-md transform hover:-translate-y-1 transition-transform p-4">
                <p>Contact Us</p>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href={app.cv} target="_blank">
              <Button
                variant="outline"
                className="cursor-pointer flex gap-2 items-center justify-center px-6 py-3  shadow-md transform hover:-translate-y-1 transition-transform"
              >
                Download CV
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
