export const PRIVACY_PREFERENCES_KEY = "travel-asambe-cookie-preferences";

export type PrivacyPreferences = {
  googleMaps: boolean;
  analytics: boolean;
  whatsappChat: boolean;
};

export const defaultPrivacyPreferences: PrivacyPreferences = {
  googleMaps: false,
  analytics: false,
  whatsappChat: false,
};

export function parsePrivacyPreferences(value: string | null): PrivacyPreferences {
  if (!value) {
    return defaultPrivacyPreferences;
  }

  try {
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") {
      return defaultPrivacyPreferences;
    }

    return {
      googleMaps: "googleMaps" in parsed && parsed.googleMaps === true,
      analytics: "analytics" in parsed && parsed.analytics === true,
      whatsappChat: "whatsappChat" in parsed && parsed.whatsappChat === true,
    };
  } catch {
    return defaultPrivacyPreferences;
  }
}

export function readPrivacyPreferences(): PrivacyPreferences {
  try {
    return parsePrivacyPreferences(
      window.localStorage.getItem(PRIVACY_PREFERENCES_KEY),
    );
  } catch {
    return defaultPrivacyPreferences;
  }
}

export function subscribeToPrivacyPreferences(onChange: () => void) {
  window.addEventListener("cookie-preferences-updated", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("cookie-preferences-updated", onChange);
    window.removeEventListener("storage", onChange);
  };
}
