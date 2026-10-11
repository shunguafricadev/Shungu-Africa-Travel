"use client";

import { useSyncExternalStore } from "react";
import {
  parsePrivacyPreferences,
  PRIVACY_PREFERENCES_KEY,
  subscribeToPrivacyPreferences,
} from "@/lib/privacy/preferences";

function getStoredPreferences() {
  try {
    return window.localStorage.getItem(PRIVACY_PREFERENCES_KEY);
  } catch {
    return null;
  }
}

export default function GoogleMapsEmbed({
  name,
  country,
}: {
  name: string;
  country: string;
}) {
  const storedPreferences = useSyncExternalStore(
    subscribeToPrivacyPreferences,
    getStoredPreferences,
    () => null,
  );
  const allowed = parsePrivacyPreferences(storedPreferences).googleMaps;
  const query = encodeURIComponent(`${name}, ${country}`);

  if (!allowed) {
    return (
      <div className="flex h-full min-h-48 flex-col items-center justify-center gap-3 bg-neutral-100 p-6 text-center">
        <p className="max-w-md text-sm leading-6 text-neutral-700">
          Google Maps is an optional third-party service. Allow it in privacy
          settings to view this map.
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
          className="rounded-sm border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Open privacy settings
        </button>
      </div>
    );
  }

  return (
    <iframe
      title={`${name} map`}
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      className="h-full w-full"
      loading="lazy"
      referrerPolicy="strict-origin"
    />
  );
}
