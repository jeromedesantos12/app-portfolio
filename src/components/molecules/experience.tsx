import experiences from "@/data/experiences.json";
import experience from "@/data/experience.json";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section id={experience.id} className="scroll-mt-15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-5 max-w-6xl items-center text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-card rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{exp.job}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company} | {exp.date}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
