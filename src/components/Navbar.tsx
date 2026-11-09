import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bookmark, Menu, X, ArrowUpRight, Trash2 } from 'lucide-react';
import { useHerbarium } from '../context/HerbariumContext';
import { PLANT_SPECIMENS } from '../data/plants';

export const Navbar: React.FC = () => {
  const { bookmarkedSlugs, toggleBookmark, clearBookmarks, isDrawerOpen, setDrawerOpen } =
    useHerbarium();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setDrawerOpen]);

  const savedSpecimens = PLANT_SPECIMENS.filter((plant) =>
    bookmarkedSlugs.includes(plant.slug)
  );

  const isProfileActive = location.pathname.startsWith('/plants/');

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main botanical content
      </a>

      <header
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: 'rgba(246, 243, 236, 0.96)',
          backdropFilter: 'blur(8px)',
          borderColor: 'var(--border-hairline)',
        }}
      >
        {/* Top Archival Colophon Strip */}
        <div
          className="border-b px-4 py-1.5 text-xs sm:px-8 lg:px-12"
          style={{
            borderColor: 'var(--border-hairline)',
            backgroundColor: 'var(--bg-parchment)',
            color: 'var(--ink-muted)',
          }}
        >
          <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-2">
            <span className="tabular-nums">
              Vol. IV · Issue No. 14 — Autumn / Winter Conservatory Edition
            </span>
            <span className="hidden sm:inline tabular-nums">
              ISSN 2791-408X · 15 Annotated Botanical Monographs
            </span>
          </div>
        </div>

        {/* Main Periodical Masthead & Navigation */}
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-4 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="group flex flex-col focus-visible:outline-2"
            aria-label="The Plant Journal — Home"
          >
            <span
              className="font-editorial text-2xl sm:text-3xl tracking-tight"
              style={{ color: 'var(--ink-primary)' }}
            >
              The Plant Journal
            </span>
            <span
              className="text-xs italic font-editorial"
              style={{ color: 'var(--ink-muted)' }}
            >
              An Ongoing Study of Things That Grow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? 'border-[#284734] text-[#16211A] font-semibold'
                    : 'border-transparent text-[#433E37] hover:text-[#16211A]'
                }`
              }
            >
              I. Dispatch (Home)
            </NavLink>

            <NavLink
              to="/index"
              className={({ isActive }) =>
                `py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? 'border-[#284734] text-[#16211A] font-semibold'
                    : 'border-transparent text-[#433E37] hover:text-[#16211A]'
                }`
              }
            >
              II. Plant Index (15)
            </NavLink>

            <NavLink
              to="/plants/monstera-deliciosa"
              className={() =>
                `py-1 border-b-2 transition-colors duration-150 ${
                  isProfileActive
                    ? 'border-[#284734] text-[#16211A] font-semibold'
                    : 'border-transparent text-[#433E37] hover:text-[#16211A]'
                }`
              }
            >
              III. Botanical Profile
            </NavLink>

            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `py-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? 'border-[#284734] text-[#16211A] font-semibold'
                    : 'border-transparent text-[#433E37] hover:text-[#16211A]'
                }`
              }
            >
              IV. Journal &amp; About
            </NavLink>
          </nav>

          {/* Right Controls: Herbarium Bookmarks & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={`Open saved herbarium specimens (${bookmarkedSlugs.length} saved)`}
              aria-expanded={isDrawerOpen}
              className="btn-press inline-flex min-h-[40px] items-center gap-2 border px-3.5 py-1.5 text-xs font-medium sm:text-sm"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor:
                  bookmarkedSlugs.length > 0 ? 'var(--bg-parchment)' : 'transparent',
                color: 'var(--ink-primary)',
              }}
            >
              <Bookmark
                className="h-4 w-4"
                style={{
                  color:
                    bookmarkedSlugs.length > 0
                      ? 'var(--accent-terracotta)'
                      : 'var(--ink-secondary)',
                  fill:
                    bookmarkedSlugs.length > 0 ? 'var(--accent-terracotta)' : 'none',
                }}
                aria-hidden="true"
              />
              <span>Herbarium</span>
              <span
                className="tabular-nums inline-flex h-5 min-w-[20px] items-center justify-center px-1.5 text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--accent-botanical)',
                  color: 'var(--canopy-text-primary)',
                }}
              >
                {bookmarkedSlugs.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="btn-press inline-flex h-10 w-10 items-center justify-center border md:hidden"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--ink-primary)',
              }}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Primary"
            className="border-t px-4 py-4 md:hidden"
            style={{
              borderColor: 'var(--border-hairline)',
              backgroundColor: 'var(--bg-paper)',
            }}
          >
            <ul className="flex flex-col space-y-2 text-base">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block px-3 py-2.5 border-l ${
                      isActive
                        ? 'border-[#284734] bg-[#EDE8DC] font-semibold text-[#16211A]'
                        : 'border-transparent text-[#433E37]'
                    }`
                  }
                >
                  I. Dispatch (Home)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/index"
                  className={({ isActive }) =>
                    `block px-3 py-2.5 border-l ${
                      isActive
                        ? 'border-[#284734] bg-[#EDE8DC] font-semibold text-[#16211A]'
                        : 'border-transparent text-[#433E37]'
                    }`
                  }
                >
                  II. Plant Index (15 Species)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plants/monstera-deliciosa"
                  className={() =>
                    `block px-3 py-2.5 border-l ${
                      isProfileActive
                        ? 'border-[#284734] bg-[#EDE8DC] font-semibold text-[#16211A]'
                        : 'border-transparent text-[#433E37]'
                    }`
                  }
                >
                  III. Botanical Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/journal"
                  className={({ isActive }) =>
                    `block px-3 py-2.5 border-l ${
                      isActive
                        ? 'border-[#284734] bg-[#EDE8DC] font-semibold text-[#16211A]'
                        : 'border-transparent text-[#433E37]'
                    }`
                  }
                >
                  IV. Journal &amp; About
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Slide-Over Herbarium Press Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="herbarium-drawer-title"
        >
          <div
            className="fixed inset-0 bg-[#16211A]/50 transition-opacity"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="relative z-10 flex h-full w-full max-w-md flex-col border-l shadow-xl"
            style={{
              backgroundColor: 'var(--bg-paper)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="flex items-start justify-between border-b p-6"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div>
                <h2 id="herbarium-drawer-title" className="text-2xl">
                  Personal Herbarium Press
                </h2>
                <p className="mt-1 text-xs" style={{ color: 'var(--ink-muted)' }}>
                  Locally archived botanical specimens ({savedSpecimens.length} of 15)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close Herbarium Drawer"
                className="btn-press inline-flex h-9 w-9 items-center justify-center border"
                style={{
                  borderColor: 'var(--border-hairline)',
                  color: 'var(--ink-primary)',
                }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {savedSpecimens.length === 0 ? (
                <div
                  className="border p-6 text-center"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    backgroundColor: 'var(--bg-parchment)',
                  }}
                >
                  <p className="font-editorial text-xl" style={{ color: 'var(--ink-primary)' }}>
                    Your herbarium press is currently empty.
                  </p>
                  <p className="mt-2 text-sm" style={{ color: 'var(--ink-secondary)' }}>
                    While reading the Plant Index or any Botanical Profile, press the bookmark
                    emblem to mount specimens here for rapid reference.
                  </p>
                  <Link
                    to="/index"
                    onClick={() => setDrawerOpen(false)}
                    className="btn-press mt-5 inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: 'var(--accent-botanical)',
                      borderColor: 'var(--accent-botanical)',
                      color: 'var(--canopy-text-primary)',
                    }}
                  >
                    <span>Browse the 15-Species Index</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {savedSpecimens.map((plant) => (
                    <li
                      key={plant.slug}
                      className="flex gap-4 border p-3.5"
                      style={{
                        borderColor: 'var(--border-hairline)',
                        backgroundColor: 'var(--bg-parchment)',
                      }}
                    >
                      <Link
                        to={`/plants/${plant.slug}`}
                        onClick={() => setDrawerOpen(false)}
                        className="h-20 w-16 shrink-0 overflow-hidden border"
                        style={{ borderColor: 'var(--border-hairline)' }}
                      >
                        <img
                          src={plant.image}
                          alt={plant.commonName}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              to={`/plants/${plant.slug}`}
                              onClick={() => setDrawerOpen(false)}
                              className="font-editorial text-lg font-medium hover:underline"
                              style={{ color: 'var(--ink-primary)' }}
                            >
                              {plant.commonName}
                            </Link>
                            <button
                              type="button"
                              onClick={() => toggleBookmark(plant.slug)}
                              aria-label={`Remove ${plant.commonName} from herbarium`}
                              className="btn-press p-1 text-xs"
                              style={{ color: 'var(--ink-muted)' }}
                            >
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <p
                            className="binomial text-sm"
                            style={{ color: 'var(--ink-secondary)' }}
                          >
                            {plant.scientificName} · {plant.family}
                          </p>
                        </div>
                        <div
                          className="mt-2 flex items-center justify-between text-xs tabular-nums"
                          style={{ color: 'var(--ink-muted)' }}
                        >
                          <span>{plant.accessionNumber}</span>
                          <span>{plant.lightLevel}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {savedSpecimens.length > 0 && (
              <div
                className="flex items-center justify-between border-t p-6"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-parchment)',
                }}
              >
                <button
                  type="button"
                  onClick={clearBookmarks}
                  className="btn-press text-xs underline"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  Clear all pressed specimens
                </button>
                <Link
                  to="/index?filter=bookmarked"
                  onClick={() => setDrawerOpen(false)}
                  className="btn-press inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold"
                  style={{
                    backgroundColor: 'var(--accent-botanical)',
                    borderColor: 'var(--accent-botanical)',
                    color: 'var(--canopy-text-primary)',
                  }}
                >
                  <span>Open in Index Ledger</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

