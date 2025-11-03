import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";
import heros from "@/data/heros.json";
import Link from "next/link";
import Image from "next/image";
import { DynamicIcon } from "@/components/atoms/dynamic-icon";
import { Suspense } from "react";

export function Hero() {
  return (
    <section
      id={heros.id}
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
      <div className="absolute inset-0 flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center px-5 py-10 z-10">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-full md:w-[400px] h-64 sm:h-80 md:h-96"
        >
          <Image
            src={`/${heros.image}`}
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
            {heros.title}
          </motion.h1>
          <div className="flex flex-col -mt-5 sm:flex-row gap-3 ">
            <motion.h2
              initial={{ opacity: 0, translateY: "100%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-3xl font-light text-muted-foreground duration-300"
            >
              {heros.caption}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-muted-foreground max-w-lg duration-300"
          >
            {heros.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex gap-4"
          >
            {heros.buttons.map((button) => (
              <Link key={button.id} href={button.link} target="_blank">
                <Button
                  variant={
                    button.variant as
                      | "link"
                      | "outline"
                      | "default"
                      | "destructive"
                      | "secondary"
                      | "ghost"
                      | null
                      | undefined
                  }
                  className="cursor-pointer flex gap-2 items-center justify-center px-6 py-3 shadow-md transform hover:-translate-y-1 transition-transform p-4"
                >
                  <p>{button.name}</p>
                  {button.icon && (
                    // !!! INI YANG HARUS DITAMBAHKAN !!!
                    <Suspense fallback={<div className="w-5 h-5" />}>
                      <DynamicIcon
                        name={button.icon as "home"} // name={button.icon as keyof typeof dynamicIconImports}
                        className="w-5 h-5"
                      />
                    </Suspense>
                  )}
                </Button>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
