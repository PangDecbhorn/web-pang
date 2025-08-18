"use client";

import { useState } from "react";
import { Button } from "@/app/(components)/Button";
import { Menu, X, type LucideIcon } from "lucide-react";
import menuItems from "@/app/(components)/_menu";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-10 bg-[#ffffff] mx-auto mt-2 flex max-w-5xl text-black items-center justify-between rounded-full border border-gray-500 shadow-md px-6 py-2 relative">
      <div className="font-semibold">D. Jittrabhorn</div>

      {/* Desktop nav */}
      <nav className="hidden gap-6 text-sm font-medium md:flex">
        {menuItems.map((item) => {
          if (!item.url) return null;
          const IconComponent = item.icon as LucideIcon;
          return (
            <Link
              key={item.id}
              href={item.url}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <IconComponent size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Desktop button */}
      <div className="hidden md:block">
        <Link href="/contact">
          <Button className="rounded-full border border-gray-500 px-6 text-black bg-[#ab644b] hover:bg-[#72383d] hover:text-white">
            Contact
          </Button>
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 z-50 rounded-md border border-black bg-white p-4 text-sm shadow-md md:hidden">
          <div className="grid grid-cols-1 gap-3">
            {menuItems.map((item) => {
              if (!item.url) return null;
              const IconComponent = item.icon as LucideIcon;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setMenuOpen(false)}   {/* 👈 เพิ่มตรงนี้ */}
                  className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-3 hover:border-blue-400 hover:text-blue-600"
                >
                  <IconComponent size={16} className="shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <Button className="mt-4 w-full rounded-full border border-black bg-[#ab644b] hover:bg-[#72383d] hover:text-white">
              Contact
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
