"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type TripItemType =
  | "activity"
  | "package"
  | "accommodation"
  | "transfer";

export type TripItem = {
  type: TripItemType;
  slug: string;
  details?: {
    date?: string;
    adults?: number;
    children?: number;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    passengers?: number;
  };
};

type TripContextValue = {
  items: TripItem[];
  count: number;
  addItem: (item: TripItem) => void;
  removeItem: (item: TripItem) => void;
  hasItem: (item: TripItem) => boolean;
  clear: () => void;
};

const STORAGE_KEY = "travelAsambeTrip";
const TripContext = createContext<TripContextValue | null>(null);

function sameItem(left: TripItem, right: TripItem) {
  return left.type === right.type && left.slug === right.slug;
}

function sameDetails(left: TripItem, right: TripItem) {
  return JSON.stringify(left.details ?? {}) === JSON.stringify(right.details ?? {});
}

function restoreItems(value: unknown): TripItem[] {
  if (!Array.isArray(value)) {
    throw new Error("Saved trip data is not a list.");
  }

  return value.map((entry): TripItem => {
    if (
      !entry ||
      typeof entry !== "object" ||
      typeof entry.slug !== "string" ||
      !["activity", "package", "special", "accommodation", "transfer"].includes(
        entry.type,
      )
    ) {
      throw new Error("Saved trip contains an invalid item.");
    }

    return {
      ...entry,
      type: entry.type === "special" ? "package" : entry.type,
    };
  });
}

export function TripProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<TripItem[]>([]);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const restoreTimeout = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setItems(restoreItems(JSON.parse(stored)));
        }
      } catch (error) {
        console.error("Could not restore the saved trip.", error);
      } finally {
        setRestored(true);
      }
    }, 0);

    return () => window.clearTimeout(restoreTimeout);
  }, []);

  useEffect(() => {
    if (restored) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, restored]);

  const value = useMemo<TripContextValue>(
    () => ({
      items,
      count: items.length,
      addItem: (item) => {
        setItems((current) =>
          current.some((existing) => sameItem(existing, item))
            ? current.map((existing) =>
                sameItem(existing, item) ? item : existing,
              )
            : [...current, item],
        );
      },
      removeItem: (item) => {
        setItems((current) =>
          current.filter((existing) => !sameItem(existing, item)),
        );
      },
      hasItem: (item) =>
        items.some(
          (existing) =>
            sameItem(existing, item) &&
            (!item.details || sameDetails(existing, item)),
        ),
      clear: () => setItems([]),
    }),
    [items],
  );

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

export function useTrip() {
  const context = useContext(TripContext);

  if (!context) {
    throw new Error("useTrip must be used within TripProvider");
  }

  return context;
}
