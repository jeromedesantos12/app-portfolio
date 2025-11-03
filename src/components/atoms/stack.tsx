import { LogoLoop } from "@/components/ui/logo-loop";
import { DynamicSiIcon } from "./dynamic-si-icon";

const techLogos = [
  {
    name: "SiHtml5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "SiCss3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
  },
  {
    name: "SiJavascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "SiTypescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { name: "SiBootstrap", title: "Bootstrap", href: "https://getbootstrap.com" },
  {
    name: "SiTailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { name: "SiReact", title: "React", href: "https://react.dev" },
  { name: "SiMysql", title: "MySQL", href: "https://www.mysql.com" },
  {
    name: "SiPostgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { name: "SiMongodb", title: "MongoDB", href: "https://www.mongodb.com" },
  { name: "SiExpress", title: "Express", href: "https://expressjs.com" },
  { name: "SiNodedotjs", title: "Node.js", href: "https://nodejs.org" },
  { name: "SiDotnet", title: ".NET", href: "https://dotnet.microsoft.com" },
];

const techLogosMapped = techLogos.map((tech) => ({
  node: <DynamicSiIcon name={tech.name as any} />,
  title: tech.title,
  href: tech.href,
}));

export function Stack() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogosMapped}
        speed={30}
        direction="right"
        logoHeight={48}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor=""
        ariaLabel="Technology partners"
      />
    </div>
  );
}
