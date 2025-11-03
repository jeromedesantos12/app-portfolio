import { motion } from "framer-motion";
import { Card } from "@/components/atoms/card";
import project from "@/data/project.json";
import projects from "@/data/projects.json";

export function Project() {
  return (
    <section
      className="pb-50 pt-40 px-5 flex flex-col gap-15 items-center"
      id={project.id}
    >
      <div className="flex flex-col gap-5 max-w-6xl items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
          {project.id}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-sm sm:text-base text-muted-foreground"
        >
          {project.description}
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl px-4">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
