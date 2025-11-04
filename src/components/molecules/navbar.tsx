"use client";

import { ChevronRight, Code, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import menus from "@/data/menus.json";
import app from "@/data/app.json";
import Link from "next/link";

interface NavbarProps {
  isActive: boolean;
  toggleMenu: () => void;
}

export function Navbar({ isActive, toggleMenu }: NavbarProps) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleHashClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) {
    if (path.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  if (!mounted) return null;
  return (
    <header className="fixed top-0 w-full bg-background flex justify-center z-30">
      <div className="w-full max-w-7xl flex justify-between items-center p-4">
        <div
          className="font-bold flex gap-2 items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            handleHashClick(e, app.path);
          }}
        >
          <Code className="duration-300" />
          <p className="font-mono duration-300">{app.title}</p>
        </div>

        <div className="md:hidden flex items-center gap-5">
          <div
            className="rounded-full cursor-pointer duration-300"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? <Sun /> : <Moon />}
          </div>
          <div
            className="cursor-pointer duration-300"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            {isActive ? <X /> : <Menu />}
          </div>
        </div>
        <ul className="md:flex gap-5 text-sm hidden">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="cursor-pointer border-b-3 border-transparent hover:border-primary px-5 duration-300"
              onClick={(e) => {
                e.stopPropagation();
                handleHashClick(e, menu.path);
              }}
            >
              {menu.name}
            </div>
          ))}
        </ul>
        <div className="md:flex gap-4 items-center justify-center hidden">
          <Button
            className="rounded-full cursor-pointer p-5"
            variant="secondary"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Link href={app.contact} target="_blank">
            <Button
              className="cursor-pointer hover:scale-105 transition-transform flex gap-2 items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p>Contact Me</p>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
