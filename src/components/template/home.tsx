"use client";

import { Footer } from "@/components/molecules/footer";
import { Hero } from "@/components/molecules/hero";
import { Menu } from "@/components/molecules/menu";
import { Navbar } from "@/components/molecules/navbar";
import { TechStack } from "@/components/molecules/tech-stack";
import { useState } from "react";
import { Projects } from "@/components/molecules/projects";

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);
  const handleDiv = () => setIsActive(false);

  return (
    <div onClick={handleDiv}>
      <Navbar isActive={isActive} toggleMenu={toggleMenu} />
      <Menu isActive={isActive} />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}
