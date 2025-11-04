import { motion } from "framer-motion";
import { Stacks } from "@/components/atoms/stacks";
import { DynamicSiIcon } from "@/components/ui/icon-si";
import stack from "@/data/stack.json";
import stacks from "@/data/stacks.json";

export function Stack() {
  const logoMapped = stacks.map((stack) => ({
    node: <DynamicSiIcon name={stack.name} />,
    title: stack.title,
    href: stack.href,
  }));

  return (
    <section
      id={stack.id}
      className="relative flex flex-col min-h-1/2 py-20 justify-center items-center gap-12 px-6 overflow-hidden bg-accent scroll-mt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-12 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center gap-3">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
          {stack.id}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          {stack.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-sm sm:text-base text-muted-foreground"
        >
          {stack.description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl rounded-2xl border border-border/60 bg-gradient-to-r from-background via-background/70 to-background p-4 sm:p-6 backdrop-blur shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
      >
        <Stacks logoMapped={logoMapped} />
      </motion.div>
    </section>
  );
}
