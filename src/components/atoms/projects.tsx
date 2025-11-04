import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
  id: number;
  image: string;
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
}

export function Projects({
  id,
  image,
  title,
  description,
  githubLink,
  websiteLink,
}: ProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true, amount: 0 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex gap-3 mt-auto">
          {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 hover:brightness-110"
              >
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </Link>
          )}
          {websiteLink && (
            <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 hover:brightness-110">
                <Globe className="w-4 h-4" /> Website
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
