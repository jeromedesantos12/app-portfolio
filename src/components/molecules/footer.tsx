import { motion } from "framer-motion";
import { Socials } from "@/components/atoms/socials";
import socials from "@/data/socials.json";
import footers from "@/data/footer.json";
import Link from "next/link";

export function Footer() {
  return (
    <footer id={footers.id} className="pt-16 pb-12">
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {socials.map((social) => (
          <Socials key={social.id} {...social} />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="hover:text-secondary-light text-sm font-medium text-center transition duration-300 ease-in-out"
      >
        Made with &#9829; by {""}
        <Link href={footers.href} target="_blank">
          {footers.author}
        </Link>
      </motion.p>
    </footer>
  );
}
