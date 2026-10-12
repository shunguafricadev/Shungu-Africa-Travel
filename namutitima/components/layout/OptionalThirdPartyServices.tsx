"use client";

import dynamic from "next/dynamic";
import Script from "next/script";
import { useSyncExternalStore } from "react";
import {
  parsePrivacyPreferences,
  PRIVACY_PREFERENCES_KEY,
  readPrivacyPreferences,
  subscribeToPrivacyPreferences,
} from "@/lib/privacy/preferences";

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((module) => module.Analytics),
  { ssr: false },
);
const SpeedInsights = dynamic(
  () =>
    import("@vercel/speed-insights/next").then((module) => module.SpeedInsights),
  { ssr: false },
);

function getStoredPreferences() {
  try {
    return window.localStorage.getItem(PRIVACY_PREFERENCES_KEY);
  } catch {
    return null;
  }
}

export function OptionalThirdPartyServices() {
  const storedPreferences = useSyncExternalStore(
    subscribeToPrivacyPreferences,
    getStoredPreferences,
    () => null,
  );
  const preferences = parsePrivacyPreferences(storedPreferences);

  return (
    <>
      {preferences.analytics && (
        <>
          <Analytics
            beforeSend={(event) =>
              readPrivacyPreferences().analytics ? event : null
            }
          />
          <SpeedInsights
            beforeSend={(event) =>
              readPrivacyPreferences().analytics ? event : null
            }
          />
        </>
      )}
      {preferences.whatsappChat && (
        <>
          <Script
            id="elfsight-platform"
            src="https://elfsightcdn.com/platform.js"
            strategy="afterInteractive"
          />
          <div
            className="elfsight-app-1291b997-e60e-49fe-a912-6d32f6713472"
            data-elfsight-app-lazy=""
          />
        </>
      )}
    </>
  );
}
