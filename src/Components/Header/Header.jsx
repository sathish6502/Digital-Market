import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GLogo from "./../../assets/Header/GLogo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "Services", "Work", "About Us", "Our Process", "Blog"];

  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#0b1220] to-[#020617] border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">

        {/* 🔝 Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={GLogo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hide text in tablet */}
            <span className="text-white font-medium text-lg hidden lg:block">
              GraphiKrafts
            </span>
          </div>

          {/* 🖥️ Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-10 text-sm">
              {navLinks.map((link) => (
                <div
                  key={link}
                  onClick={() => setActive(link)}
                  className={`cursor-pointer transition ${
                    active === link
                      ? "text-blue-500 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link === "Services" ? (
                    <span className="flex items-center gap-1">
                      {link} <ChevronDown size={14} />
                    </span>
                  ) : (
                    link
                  )}
                </div>
              ))}
            </nav>

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm text-white font-medium">
              Contact Us
            </button>
          </div>

          {/* 📱 Tablet Layout (INLINE + GLASS PILL) */}
          <div className="hidden md:flex lg:hidden items-center justify-between flex-1 ml-6">

            {/* Center Glass Pill */}
            <div className="mx-auto">
              <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2">

                {navLinks.map((link) => (
                  <div
                    key={link}
                    onClick={() => setActive(link)}
                    className={`cursor-pointer text-sm transition ${
                      active === link
                        ? "text-blue-500 font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link === "Services" ? (
                      <span className="flex items-center gap-1">
                        {link} <ChevronDown size={14} />
                      </span>
                    ) : (
                      link
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Right Button */}
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm text-white font-medium">
              Contact
            </button>
          </div>

          {/* 📱 Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>

        </div>

      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-5 text-sm bg-[#020617] border-t border-white/10">
          
          {navLinks.map((link) => (
            <div
              key={link}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`cursor-pointer ${
                active === link
                  ? "text-blue-500 font-medium"
                  : "text-gray-300"
              }`}
            >
              {link === "Services" ? (
                <span className="flex items-center gap-1">
                  {link} <ChevronDown size={14} />
                </span>
              ) : (
                link
              )}
            </div>
          ))}

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-medium">
            Contact Us
          </button>

        </div>
      )}
    </header>
  );
}