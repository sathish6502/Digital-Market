import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GLogo from "./../../assets/Header/GLogo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#0b1220] to-[#020617] border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <div className="flex items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={GLogo} alt="logo" className="w-8 h-8 rounded-full" />
            <span className="text-white font-medium text-lg hidden lg:block">
              GraphiKrafts
            </span>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-10 text-sm text-gray-300 ml-auto">

            <a href="/" className="hover:text-white">Home</a>

            {/* Services */}
            <div className="relative flex items-center gap-1">
              <a href="/services">Services</a>

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

              {showServices && (
                <div className="absolute top-6 left-0 bg-[#0b1220] px-3 py-2 rounded text-sm z-50">
                  <a href="/services/individualservice" className="whitespace-nowrap block">
                    Individual Service
                  </a>
                </div>
              )}
            </div>

            <a href="/work">Work</a>
            <a href="/about">About Us</a>
            <a href="/ourprocess">Our Process</a>
            <a href="/blog">Blog</a>

            {/* STATIC CONTACT BUTTON */}
            <div className="bg-blue-600 px-5 py-2 rounded-lg text-white cursor-default">
              Contact Us
            </div>
          </div>

          {/* TABLET */}
          <div className="hidden md:flex lg:hidden items-center gap-6 ml-auto text-sm text-gray-300">

            <a href="/">Home</a>

            <div className="relative flex items-center gap-1">
              <a href="/services">Services</a>

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

              {showServices && (
                <div className="absolute top-6 left-0 bg-[#0b1220] px-3 py-2 rounded text-sm">
                  <a href="/services/individualservice" className="block whitespace-nowrap">
                    Individual Service
                  </a>
                </div>
              )}
            </div>

            <a href="/work">Work</a>
            <a href="/about">About Us</a>
            <a href="/process">Process</a>
            <a href="/blog">Blog</a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617] border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-white">

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
              <div className="ml-4 mt-2">
                <a href="/services/individualservice" className="whitespace-nowrap">
                  Individual Service
                </a>
              </div>
            )}
          </div>

          <a href="/work">Work</a>
          <a href="/about">About Us</a>
          <a href="/process">Our Process</a>
          <a href="/blog">Blog</a>

          {/* STATIC CONTACT BUTTON */}
          <div className="bg-blue-600 py-2 rounded-lg text-center cursor-default">
            Contact Us
          </div>

        </div>
      )}
    </header>
  );
}
