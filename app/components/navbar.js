import React from "react";
import Button from "./button";
import { Nabla } from "next/font/google";

const navbar = () => {
  return (
    <nav className="bg-blue-800 p-6  text-white ">
      <div className="container flex items-center justify-between">
        <a className="mr-20">PPRD</a>

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Research Portal</li>
          <li>Legal Bases</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <Button name={"Customers Feedback"}></Button>
      </div>
    </nav>
  );
};

export default navbar;
