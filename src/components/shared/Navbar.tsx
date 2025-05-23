"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";




// { user }: { user: ICurrentUser  }
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  


  // Base nav links that are always shown
  const baseNavLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },

   
  ];

  // Add Dashboard link only if user exists
  const navLinks = baseNavLinks

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-1">
            <span className="text-lg font-semibold">
              <span className="text-green-600 font-quicksand">Md Kamrul Islam</span>
              
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-green-600 text-lg ${
                  pathname === link.href
                    ? "text-green-600"
                    : "text-foreground/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
             
              
                <Link href="#contact">
                  <Button className="text-lg cursor-pointer">
                    Contact Me
                  </Button>
                </Link>
              
          
            
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-t shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-4">
              {" "}
              {navLinks?.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    pathname === link.href
                      ? "bg-green-50 text-green-600"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                
                 
                  <div className="flex flex-col gap-2">
                    <Link href="#contact">
                      <Button variant="outline" className="w-full">
                        Contact Me
                      </Button>
                    </Link>
                    
                  </div>
                
                
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
