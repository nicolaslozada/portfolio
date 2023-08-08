import React from "react";
import Button from "./Button";

export default function Navbar() {
    return (
      <header className="md:sticky top-0 z-10 py-6">
        <div className="container mx-auto ">
          <nav className="flex justify-end gap-4 items-center">
            <a href="#projects" className="hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#testimonials" className="hover:text-white">
              Testimonials
            </a>
            <Button>
              <a href="#">Hire Me</a>
            </Button>
          </nav>
        </div>
      </header>
    );
  }