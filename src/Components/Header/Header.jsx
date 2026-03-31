import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GLogo from "./../../assets/Header/GLogo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);

  const navLinks = ["Home", "Services", "Work", "About Us", "Our Process", "Blog"];

  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#0b1220] to-[#020617] border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={GLogo} alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-medium text-lg hidden lg:block">
              GraphiKrafts
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-10 text-sm">

              {navLinks.map((link) => (
                <div
                  key={link}
                  className={`relative cursor-pointer ${
                    active === link
                      ? "text-blue-500 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link === "Services" ? (
                    <div className="flex items-center gap-1">

                      {/* Services main */}
                      <a
                        href="/services"
                        onClick={() => setActive(link)}
                        style={{ textDecoration: "none" }}
                      >
                        Services
                      </a>

                      {/* Arrow */}
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowServices(!showServices);
                        }}
                        className="cursor-pointer"
                      >
                        <ChevronDown size={14} />
                      </span>

                      {/* Dropdown */}
                      {showServices && (
                        <div className="absolute top-6 left-0 bg-[#0b1220] px-3 py-2 rounded text-sm z-50">
                          <a
                            href="/services/individualservice"
                            className="whitespace-nowrap block"
                          >
                            Individual Service
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={
                        link === "Home"
                          ? "/"
                          : link === "Work"
                          ? "/work"
                          : link === "About Us"
                          ? "/about"
                          : link === "Our Process"
                          ? "/process"
                          : link === "Blog"
                          ? "/blog"
                          : "#"
                      }
                      onClick={() => setActive(link)}
                      style={{ textDecoration: "none" }}
                    >
                      {link}
                    </a>
                  )}
                </div>
              ))}

            </nav>

            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm text-white font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-5 text-sm bg-[#020617] border-t border-white/10">
          
          <a href="/">Home</a>

          {/* Services */}
          <div>
            <div
              onClick={() => setShowServices(!showServices)}
              className="flex items-center gap-1 cursor-pointer"
            >
              Services <ChevronDown size={14} />
            </div>

            {showServices && (
              <div className="ml-4 mt-2 text-xs">
                <a
                  href="/services/individualservice"
                  className="whitespace-nowrap"
                >
                  Individual Service
                </a>
              </div>
            )}
          </div>

          <a href="/work">Work</a>
          <a href="/about">About Us</a>
          <a href="/process">Our Process</a>
          <a href="/blog">Blog</a>

          <a
            href="/contact"
            className="block mt-4 bg-blue-600 px-5 py-2 rounded-lg text-white text-center"
          >
            Contact Us
          </a>

        </div>
      )}
    </header>
  );
}