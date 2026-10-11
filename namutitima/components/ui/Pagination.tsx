"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

type PaginationProps = {
  children: ReactNode;
  className: string;
  pageSize?: number;
};

export function Pagination({
  children,
  className,
  pageSize = 6,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const firstItem = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(firstItem, firstItem + pageSize);

  useEffect(() => {
    function restorePageFromUrl() {
      const pageParam = new URLSearchParams(window.location.search).get("page");
      const requestedPage = Number(pageParam);
      const page =
        pageParam && Number.isInteger(requestedPage) && requestedPage > 0
          ? Math.min(requestedPage, pageCount)
          : 1;

      setCurrentPage(page);
    }

    restorePageFromUrl();
    window.addEventListener("popstate", restorePageFromUrl);

    return () => window.removeEventListener("popstate", restorePageFromUrl);
  }, [pageCount]);

  function changePage(page: number) {
    const nextPage = Math.min(pageCount, Math.max(1, page));
    const url = new URL(window.location.href);

    if (nextPage === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", String(nextPage));
    }

    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
    setCurrentPage(nextPage);

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior, block: "start" });
    });
  }

  return (
    <>
      <div
        ref={gridRef}
        id="paginated-items"
        className={`${className} scroll-mt-24`}
      >
        {visibleItems}
      </div>

      <nav
        aria-label="Pagination"
        className="mt-10 flex items-center justify-center gap-5"
      >
        <button
          type="button"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="border border-neutral-300 px-4 py-2 text-sm text-foreground transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <span aria-live="polite" className="text-sm text-subtle">
          Page {currentPage} of {pageCount}
        </span>
        <button
          type="button"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pageCount}
          className="border border-neutral-300 px-4 py-2 text-sm text-foreground transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </nav>
    </>
  );
}
