"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

type MobileNavbarProps = {
  items: NavItem[];
  isScrolled: boolean;
};

export function MobileNavbar({
  items,
  isScrolled,
}: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((current) => {
      if (current) setOpenDropdown(null);
      return !current;
    });
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    setOpenDropdown(null);
    if (restoreFocus) menuButtonRef.current?.focus();
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) =>
      current === label ? null : label,
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
      document.documentElement.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.documentElement.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.documentElement.classList.remove("mobile-menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openDropdown) {
          setOpenDropdown(null);
        } else {
          closeMenu(true);
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [openDropdown]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        type="button"
        onClick={toggleMenu}
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-controls={menuId}
        aria-expanded={isOpen}
        className={`relative z-10001 flex h-11 w-11 shrink-0 touch-manipulation select-none items-center justify-center ${
          isOpen || isScrolled ? "text-earth" : "text-white"
        }`}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span className="relative flex h-5 w-6 items-center justify-center">
          {/* Top */}
          <span
            className={`absolute block h-px w-6 bg-current transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />

          {/* Middle */}
          <span
            className={`absolute block h-px w-6 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Bottom */}
          <span
            className={`absolute block h-px w-6 bg-current transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </span>
      </button>

      {/* Mobile Menu */}
      <div
        id={menuId}
        className={`fixed inset-x-0 top-0 z-10000 h-dvh w-full bg-background transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="h-full w-full overflow-y-auto overscroll-contain"
        >
          {/* Header space */}
          <div className="h-18.25 shrink-0 sm:h-19.5" />

          <ul className="flex  min-h-[calc(100%-73px)] flex-col px-6 pb-8 pt-4 sm:min-h-[calc(100%-78px)]">
            {items.map((item) => {
              const hasChildren =
                Boolean(item.children?.length);

              const isDropdownOpen =
                openDropdown === item.label;

              const submenuId = `${menuId}-${item.label
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;

              return (
                <li
                  key={item.label}
                  className="border-b border-border"
                >
                  {hasChildren ? (
                    <>
                      {/* Parent Navigation Item */}
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => closeMenu()}
                          className="min-w-0 flex-1 py-5 text-body font-medium tracking-widest text-earth active:text-brand"
                        >
                          {item.label}
                        </Link>

                        {/* Dropdown Toggle */}
                        <button
                          type="button"
                          onClick={() =>
                            toggleDropdown(item.label)
                          }
                          aria-expanded={isDropdownOpen}
                          aria-controls={submenuId}
                          aria-label={`${
                            isDropdownOpen
                              ? "Collapse"
                              : "Expand"
                          } ${item.label} submenu`}
                          className="flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center text-earth"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                            className={`transition-transform duration-300 ${
                              isDropdownOpen
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Dropdown */}
                      <div
                        id={submenuId}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isDropdownOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <ul className="mb-3  ml-3">
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => closeMenu()}
                                  className="block py-3.5 text-[0.9rem] font-normal tracking-[0.08em] text-earth/75 transition-colors active:text-brand"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Regular Navigation Item */
                    <Link
                      href={item.href}
                      onClick={() => closeMenu()}
                      className="block py-5 text-body font-medium tracking-[0.12em] text-earth active:text-brand"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            {/* Enquire CTA */}
            <li className="mt-auto pt-6">
              <Link
                href="/contact"
                onClick={() => closeMenu()}
                className="flex min-h-12 items-center justify-center rounded-xs bg-earth px-(--space-5) py-(--space-3) text-label font-medium tracking-[0.14em] text-white active:bg-brand"
              >
                ENQUIRE
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
