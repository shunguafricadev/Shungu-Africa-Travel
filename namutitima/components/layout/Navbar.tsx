"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Destinations",
    href: "/destinations",
  },

   {
    label: "Packages",
     href: "/packages",
  },

  {
    label: "Experiences",
    href: "/activities",
  },

  {
    label: "Transfers",
    href: "/transfers",
  },

  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const desktopNavId = useId();
  const navRef = useRef<HTMLElement>(null);

  /*
   * Scroll state
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close desktop dropdown when clicking outside
   */
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current) {
        return;
      }

      if (
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, []);

  /*
   * Escape closes desktop dropdown
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  /*
   * Close dropdown when switching to mobile
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) =>
      current === label ? null : label,
    );
  };

  const logo = isScrolled
    ? "/images/branding/logo-2.png"
    : "/images/branding/logo-4.png";

  return (
    <header
      className={`absolute left-0 top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "fixed bg-background shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          aria-label="Shungu Africa Travel home"
          className="flex shrink-0 items-center"
        >
          <Image
            src={logo}
            alt="Shungu Africa Travel"
            width={2080}
            height={1050}
            quality={70}
            sizes="(min-width: 1024px) 200px, 130px"
            className="h-auto w-50.5 object-contain sm:w-32.5 lg:w-50"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div
          className={`hidden items-center gap-8 md:flex lg:gap-10`}
        >
          <nav
            ref={navRef}
            id={desktopNavId}
            aria-label="Main navigation"
            className="flex items-center gap-7 lg:gap-9"
          >
            {navItems.map((item) => {
              const hasChildren =
                Boolean(item.children?.length);

              const isDropdownOpen =
                openDropdown === item.label;

              const dropdownId = `${desktopNavId}-${item.label
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;

              /*
               * ---------------------------------------------
               * REGULAR NAVIGATION ITEM
               * ---------------------------------------------
               */
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group relative flex items-center gap-1.5 py-2 text-xs font-medium tracking-[0.12em] transition-colors duration-200 ${
                      isScrolled
                        ? "text-earth hover:text-brand"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.label}

                    {/* Underline */}
                    <span
                      className={`absolute bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                        isScrolled
                          ? "bg-brand"
                          : "bg-white"
                      }`}
                    />
                  </Link>
                );
              }

              /*
               * ---------------------------------------------
               * DROPDOWN NAVIGATION ITEM
               * ---------------------------------------------
               */
              return (
                <div
                  key={item.label}
                  className="relative"
                >
                  {/* Parent Link + Chevron */}
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-1.5 py-2 text-xs tracking-[0.12em] transition-colors duration-200 ${
                        isScrolled
                          ? "text-earth hover:text-brand"
                          : "text-white hover:text-white/80"
                      }`}
                    >
                      {item.label}

                      {/* Underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                          isScrolled
                            ? "bg-brand"
                            : "bg-white"
                        }`}
                      />
                    </Link>

                    {/* Chevron Button */}
                    <button
                      type="button"
                      onClick={() =>
                        toggleDropdown(item.label)
                      }
                      aria-expanded={isDropdownOpen}
                      aria-controls={dropdownId}
                      aria-label={`${
                        isDropdownOpen
                          ? "Close"
                          : "Open"
                      } ${item.label} submenu`}
                      className={`ml-1 flex h-6 w-6 items-center justify-center transition-colors ${
                        isScrolled
                          ? "text-earth hover:text-brand"
                          : "text-white hover:text-white/80"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          isDropdownOpen
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* =================================================
                      DESKTOP DROPDOWN
                  ================================================== */}
                  <div
                    id={dropdownId}
                    className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      isDropdownOpen
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xs border border-border bg-white shadow-xl">
                      <ul
                        className="py-2"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children?.map(
                          (child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() =>
                                  setOpenDropdown(
                                    null,
                                  )
                                }
                                className="block px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-earth transition-colors duration-200 hover:bg-background hover:text-brand"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* =====================================================
              ENQUIRE BUTTON
          ====================================================== */}
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center rounded-xs px-5 py-2.5 text-xs font-medium tracking-[0.12em] transition-colors duration-200 ${
              isScrolled
                ? "bg-earth text-white hover:bg-brand"
                : "bg-white text-black hover:bg-brand hover:text-white"
            }`}
          >
            Enquire
          </Link>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        <div className="md:hidden">
          <MobileNavbar
            items={navItems}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </header>
  );
}