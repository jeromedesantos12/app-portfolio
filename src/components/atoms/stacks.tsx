import { LogoItem, LogoLoop } from "@/components/ui/logo-loop";

interface StackProps {
  logoMapped: LogoItem[];
}

export function Stacks({ logoMapped }: StackProps) {
  return (
    <div
      className="flex justify-center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <LogoLoop
        logos={logoMapped}
        speed={30}
        direction="right"
        logoHeight={48}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  );
}
