import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceProps {
  id: number;
  logo: string;
  company: string;
  job: string;
  date: string;
  description: string;
}

export function Experiences({
  id,
  logo,
  company,
  job,
  date,
  description,
}: ExperienceProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, translateY: "50px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-card rounded-lg shadow-lg p-6 flex flex-col"
    >
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={logo}
            alt={`${company} logo`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-1">{job}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {company} | {date}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
