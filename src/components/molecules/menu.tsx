import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import menus from "@/data/menus.json";
import app from "@/data/app.json";
import Link from "next/link";

interface MenuProps {
  isActive: boolean;
}

export function Menu({ isActive }: MenuProps) {
  return (
    <header
      className={cn(
        "fixed bg-background right-0 top-14 w-full gap-4 px-4 py-5 md:hidden flex-col text-center items-center justify-center z-20",
        isActive ? "flex" : "hidden"
      )}
    >
      <ul className="md:hidden flex flex-col gap-2 text-sm w-full">
        {menus.map((menu) => (
          <Link
            href={`${menu.path}`}
            key={menu.id}
            className="cursor-pointer hover:bg-accent duration-300 py-2"
          >
            {menu.name}
          </Link>
        ))}
      </ul>
      <Link href={app.contact} target="_blank">
        <Button className="cursor-pointer hover:scale-105 transition-transform flex gap-2 items-center justify-center">
          <p>Contact Me</p>
          <ChevronRight />
        </Button>
      </Link>
    </header>
  );
}
