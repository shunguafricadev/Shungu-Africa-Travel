"use client";

import type { ReactNode } from "react";

export default function CookieSettingsButton({
  children = "Manage privacy settings",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className={className}
    >
      {children}
    </button>
  );
}
