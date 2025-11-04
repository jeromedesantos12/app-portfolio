import { motion } from "framer-motion";
import { Experiences } from "../atoms/experiences";
import experience from "@/data/experience.json";
import experiences from "@/data/experiences.json";

export default function Experience() {
  return (
    <section
      id={experience.id}
      className="min-h-screen pt-20 pb-40 px-5 flex flex-col gap-15 items-center scroll-mt-10"
    >
      <div className="max-w-5xl px-4 flex flex-col gap-5 justify-center items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
          {experience.id}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          {experience.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-sm sm:text-base text-muted-foreground"
        >
          {experience.description}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 max-w-6xl md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <Experiences key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}
