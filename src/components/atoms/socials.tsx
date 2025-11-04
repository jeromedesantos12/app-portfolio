import { Button } from "@/components/ui/button";
import { DynamicIcon } from "@/components/ui/icon";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Link from "next/link";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface SocialsProps {
  id: number;
  name: string;
  href: string;
}

export function Socials({ id, name, href }: SocialsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link href={href} target="_blank">
        <Button
          variant="secondary"
          className="rounded-full cursor-pointer p-5 transition-transform hover:scale-115"
        >
          <Suspense>
            <DynamicIcon
              name={name as keyof typeof dynamicIconImports}
              className="w-5 h-5"
            />
          </Suspense>
        </Button>
      </Link>
    </motion.div>
  );
}
