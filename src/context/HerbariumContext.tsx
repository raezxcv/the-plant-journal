import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface HerbariumContextValue {
  bookmarkedSlugs: string[];
  isBookmarked: (slug: string) => boolean;
  toggleBookmark: (slug: string) => void;
  clearBookmarks: () => void;
  personalNotes: Record<string, string>;
  savePersonalNote: (slug: string, note: string) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const BOOKMARKS_STORAGE_KEY = 'tpj_herbarium_bookmarks_v1';
const NOTES_STORAGE_KEY = 'tpj_specimen_notes_v1';

const HerbariumContext = createContext<HerbariumContextValue | undefined>(undefined);

export const HerbariumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>(() => {
    try {
      const raw = window.localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Fallback if localStorage is unavailable
    }
    return ['monstera-deliciosa', 'adiantum-raddianum'];
  });

  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>(() => {
    try {
      const raw = window.localStorage.getItem(NOTES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {
      // Fallback
    }
    return {
      'monstera-deliciosa': 'Positioned 1.2m from east sash window; fifth leaf emerging with double fenestration rows.',
    };
  });

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedSlugs));
    } catch {
      // Ignore storage errors
    }
  }, [bookmarkedSlugs]);

  useEffect(() => {
    try {
      window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(personalNotes));
    } catch {
      // Ignore storage errors
    }
  }, [personalNotes]);

  const isBookmarked = useCallback(
    (slug: string) => bookmarkedSlugs.includes(slug),
    [bookmarkedSlugs]
  );

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarkedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  }, []);

  const clearBookmarks = useCallback(() => {
    setBookmarkedSlugs([]);
  }, []);

  const savePersonalNote = useCallback((slug: string, note: string) => {
    setPersonalNotes((prev) => ({
      ...prev,
      [slug]: note,
    }));
  }, []);

  return (
    <HerbariumContext.Provider
      value={{
        bookmarkedSlugs,
        isBookmarked,
        toggleBookmark,
        clearBookmarks,
        personalNotes,
        savePersonalNote,
        isDrawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </HerbariumContext.Provider>
  );
};

export function useHerbarium(): HerbariumContextValue {
  const ctx = useContext(HerbariumContext);
  if (!ctx) {
    throw new Error('useHerbarium must be used within a HerbariumProvider');
  }
  return ctx;
}

