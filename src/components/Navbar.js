import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <header className="md:sticky top-0 z-10 py-6">
        <div className="container mx-auto ">
          <nav className="flex justify-end gap-4 items-center">
            <Link to="/"> Home </Link>
            <Link to="/gob"> GOBBBB </Link>
            <Link to="/zum"> HELLOZUM </Link>
            <Button>
              <a href="#">Hire Me</a>
            </Button>
          </nav>
        </div>
      </header>
    );
  }