import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Bookmark,
  LayoutGrid,
  Table,
  Sun,
  Droplets,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from 'lucide-react';
import {
  PLANT_SPECIMENS,
  PLANT_CATEGORIES,
  DIFFICULTY_LEVELS,
  LIGHT_PROFILES,
  type PlantCategory,
  type DifficultyLevel,
  type LightProfile,
} from '../data/plants';
import { useHerbarium } from '../context/HerbariumContext';

export const PlantIndexPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { bookmarkedSlugs, isBookmarked, toggleBookmark } = useHerbarium();

  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<'All' | PlantCategory>(() => {
    const cat = searchParams.get('category');
    return PLANT_CATEGORIES.includes(cat as PlantCategory) ? (cat as PlantCategory) : 'All';
  });
  const [selectedLight, setSelectedLight] = useState<'All' | LightProfile>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | DifficultyLevel>('All');
  const [onlyBookmarked, setOnlyBookmarked] = useState(
    () => searchParams.get('filter') === 'bookmarked'
  );
  const [viewMode, setViewMode] = useState<'plates' | 'ledger'>('plates');
  const [expandedQuickCare, setExpandedQuickCare] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (searchParams.get('filter') === 'bookmarked') {
      setOnlyBookmarked(true);
    }
  }, [searchParams]);

  const filteredPlants = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PLANT_SPECIMENS.filter((plant) => {
      if (selectedCategory !== 'All' && plant.category !== selectedCategory) return false;
      if (selectedLight !== 'All' && plant.lightLevel !== selectedLight) return false;
      if (selectedDifficulty !== 'All' && plant.difficulty !== selectedDifficulty) return false;
      if (onlyBookmarked && !bookmarkedSlugs.includes(plant.slug)) return false;

      if (q) {
        const searchable = [
          plant.commonName,
          plant.scientificName,
          plant.family,
          plant.accessionNumber,
          plant.originRegion,
          plant.category,
        ]
          .join(' ')
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedLight,
    selectedDifficulty,
    onlyBookmarked,
    bookmarkedSlugs,
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLight('All');
    setSelectedDifficulty('All');
    setOnlyBookmarked(false);
    setSearchParams({});
  };

  const toggleQuickCare = (slug: string) => {
    setExpandedQuickCare((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedLight !== 'All' ||
    selectedDifficulty !== 'All' ||
    onlyBookmarked;

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      {/* Page Header */}
      <header
        className="reveal-entry border-b pb-8"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl" style={{ color: 'var(--ink-primary)' }}>
              Herbarium Specimen Index &amp; Taxonomic Ledger
            </h1>
            <p
              className="mt-3 text-base sm:text-lg leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              Fifteen cultivated species cataloged by botanical family, binomial nomenclature,
              irradiance interval, hydration cadence, and cultivation complexity.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap items-center justify-start lg:justify-end gap-2">
            <div
              className="inline-flex border p-1"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-parchment)',
              }}
              role="group"
              aria-label="Index display mode"
            >
              <button
                type="button"
                onClick={() => setViewMode('plates')}
                aria-pressed={viewMode === 'plates'}
                className="btn-press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
                style={{
                  backgroundColor:
                    viewMode === 'plates' ? 'var(--accent-botanical)' : 'transparent',
                  color:
                    viewMode === 'plates'
                      ? 'var(--canopy-text-primary)'
                      : 'var(--ink-primary)',
                }}
              >
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Specimen Plates</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('ledger')}
                aria-pressed={viewMode === 'ledger'}
                className="btn-press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
                style={{
                  backgroundColor:
                    viewMode === 'ledger' ? 'var(--accent-botanical)' : 'transparent',
                  color:
                    viewMode === 'ledger'
                      ? 'var(--canopy-text-primary)'
                      : 'var(--ink-primary)',
                }}
              >
                <Table className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Taxonomic Ledger</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter & Search Instrument Panel */}
      <section
        aria-label="Filter and search botanical specimens"
        className="mt-8 border p-5 sm:p-6"
        style={{
          backgroundColor: 'var(--bg-parchment)',
          borderColor: 'var(--border-hairline)',
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Search Input */}
          <div className="md:col-span-5">
            <label
              htmlFor="specimen-search-input"
              className="block text-xs font-semibold mb-1.5"
              style={{ color: 'var(--ink-primary)' }}
            >
              Search by Common Name, Binomial, Family, or Accession Code
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2"
                style={{ color: 'var(--ink-muted)' }}
                aria-hidden="true"
              />
              <input
                id="specimen-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., Monstera, Araceae, Adiantum, Yunnan..."
                className="min-h-[42px] w-full border pl-10 pr-4 py-2 text-sm"
                style={{
                  backgroundColor: 'var(--bg-paper)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--ink-primary)',
                }}
              />
            </div>
          </div>

          {/* Light Filter */}
          <div className="md:col-span-3">
            <label
              htmlFor="light-profile-select"
              className="block text-xs font-semibold mb-1.5"
              style={{ color: 'var(--ink-primary)' }}
            >
              Light Exposure
            </label>
            <select
              id="light-profile-select"
              value={selectedLight}
              onChange={(e) => setSelectedLight(e.target.value as 'All' | LightProfile)}
              className="min-h-[42px] w-full border px-3 py-2 text-sm"
              style={{
                backgroundColor: 'var(--bg-paper)',
                borderColor: 'var(--border-strong)',
                color: 'var(--ink-primary)',
              }}
            >
              <option value="All">All Light Regimes</option>
              {LIGHT_PROFILES.map((light) => (
                <option key={light} value={light}>
                  {light}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="md:col-span-2">
            <label
              htmlFor="difficulty-select"
              className="block text-xs font-semibold mb-1.5"
              style={{ color: 'var(--ink-primary)' }}
            >
              Cultivation Level
            </label>
            <select
              id="difficulty-select"
              value={selectedDifficulty}
              onChange={(e) =>
                setSelectedDifficulty(e.target.value as 'All' | DifficultyLevel)
              }
              className="min-h-[42px] w-full border px-3 py-2 text-sm"
              style={{
                backgroundColor: 'var(--bg-paper)',
                borderColor: 'var(--border-strong)',
                color: 'var(--ink-primary)',
              }}
            >
              <option value="All">All Levels</option>
              {DIFFICULTY_LEVELS.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>

          {/* Saved Herbarium Toggle */}
          <div className="md:col-span-2 flex items-end">
            <button
              type="button"
              onClick={() => setOnlyBookmarked((prev) => !prev)}
              aria-pressed={onlyBookmarked}
              className="btn-press flex min-h-[42px] w-full items-center justify-center gap-2 border px-3 py-2 text-xs font-semibold"
              style={{
                backgroundColor: onlyBookmarked
                  ? 'var(--accent-terracotta)'
                  : 'var(--bg-paper)',
                borderColor: onlyBookmarked
                  ? 'var(--accent-terracotta)'
                  : 'var(--border-strong)',
                color: onlyBookmarked
                  ? 'var(--canopy-text-primary)'
                  : 'var(--ink-primary)',
              }}
            >
              <Bookmark
                className="h-3.5 w-3.5"
                style={{
                  fill: onlyBookmarked ? 'currentColor' : 'none',
                }}
                aria-hidden="true"
              />
              <span>Saved ({bookmarkedSlugs.length})</span>
            </button>
          </div>
        </div>

        {/* Botanical Category Tabs */}
        <div
          className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4"
          style={{ borderColor: 'var(--border-hairline)' }}
        >
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter by botanical category"
          >
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              aria-pressed={selectedCategory === 'All'}
              className="btn-press border px-3.5 py-1.5 text-xs font-semibold"
              style={{
                backgroundColor:
                  selectedCategory === 'All' ? 'var(--accent-botanical)' : 'var(--bg-paper)',
                borderColor:
                  selectedCategory === 'All'
                    ? 'var(--accent-botanical)'
                    : 'var(--border-hairline)',
                color:
                  selectedCategory === 'All'
                    ? 'var(--canopy-text-primary)'
                    : 'var(--ink-primary)',
              }}
            >
              All Taxa (15)
            </button>

            {PLANT_CATEGORIES.map((category) => {
              const count = PLANT_SPECIMENS.filter((p) => p.category === category).length;
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className="btn-press border px-3.5 py-1.5 text-xs font-medium tabular-nums"
                  style={{
                    backgroundColor: active ? 'var(--accent-botanical)' : 'var(--bg-paper)',
                    borderColor: active
                      ? 'var(--accent-botanical)'
                      : 'var(--border-hairline)',
                    color: active ? 'var(--canopy-text-primary)' : 'var(--ink-primary)',
                  }}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs tabular-nums">
            <span style={{ color: 'var(--ink-muted)' }} aria-live="polite">
              Showing <strong style={{ color: 'var(--ink-primary)' }}>{filteredPlants.length}</strong>{' '}
              of 15 documented species
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn-press inline-flex items-center gap-1 font-semibold underline"
                style={{ color: 'var(--accent-terracotta)' }}
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Empty Filter State */}
      {filteredPlants.length === 0 ? (
        <div
          className="mt-10 border p-12 text-center"
          style={{
            borderColor: 'var(--border-hairline)',
            backgroundColor: 'var(--bg-parchment)',
          }}
        >
          <h2 className="text-2xl" style={{ color: 'var(--ink-primary)' }}>
            No Botanical Specimens Match Your Current Filter Criteria
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--ink-secondary)' }}>
            Try clearing your search query or switching back to All Taxa to view the complete
            15-species collection.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="btn-press mt-5 inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-semibold"
            style={{
              backgroundColor: 'var(--accent-botanical)',
              borderColor: 'var(--accent-botanical)',
              color: 'var(--canopy-text-primary)',
            }}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Restore All 15 Herbarium Specimens</span>
          </button>
        </div>
      ) : viewMode === 'plates' ? (
        /* VIEW MODE 1: HERBARIUM SPECIMEN PLATES GRID */
        <section
          aria-label="Botanical specimen plates"
          className="mt-10 grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: 'var(--border-hairline)' }}
        >
          {filteredPlants.map((plant) => {
            const saved = isBookmarked(plant.slug);
            const careOpen = Boolean(expandedQuickCare[plant.slug]);

            return (
              <article
                key={plant.slug}
                className="plate-group flex flex-col justify-between border-r border-b p-5 sm:p-6"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-paper)',
                }}
              >
                <div>
                  {/* Title + Bookmark Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-2xl">
                        <Link
                          to={`/plants/${plant.slug}`}
                          className="hover:underline"
                          style={{ color: 'var(--ink-primary)' }}
                        >
                          {plant.commonName}
                        </Link>
                      </h2>
                      <p
                        className="binomial mt-0.5 text-base"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        {plant.scientificName}{' '}
                        <span className="not-italic text-xs" style={{ color: 'var(--ink-muted)' }}>
                          {plant.taxonomicAuthority}
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(plant.slug)}
                      aria-label={
                        saved
                          ? `Remove ${plant.commonName} from Herbarium`
                          : `Bookmark ${plant.commonName} in Herbarium`
                      }
                      aria-pressed={saved}
                      className="btn-press inline-flex h-9 w-9 shrink-0 items-center justify-center border"
                      style={{
                        borderColor: saved
                          ? 'var(--accent-terracotta)'
                          : 'var(--border-hairline)',
                        backgroundColor: saved ? 'var(--bg-parchment)' : 'transparent',
                      }}
                    >
                      <Bookmark
                        className="h-4 w-4"
                        style={{
                          color: saved ? 'var(--accent-terracotta)' : 'var(--ink-muted)',
                          fill: saved ? 'var(--accent-terracotta)' : 'none',
                        }}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Taxonomic Metadata Strip */}
                  <div
                    className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs tabular-nums"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    <span>
                      {plant.accessionNumber} · Family: <strong>{plant.family}</strong>
                    </span>
                    <span
                      className="border px-2 py-0.5"
                      style={{
                        borderColor: 'var(--border-hairline)',
                        backgroundColor: 'var(--bg-parchment)',
                        color: 'var(--ink-secondary)',
                      }}
                    >
                      {plant.category}
                    </span>
                  </div>

                  {/* Specimen Photograph */}
                  <Link
                    to={`/plants/${plant.slug}`}
                    className="plate-frame mt-4 block aspect-[4/5] border"
                    style={{ borderColor: 'var(--border-hairline)' }}
                  >
                    <img
                      src={plant.image}
                      alt={`${plant.commonName} (${plant.scientificName}) botanical specimen`}
                      className="plate-image"
                      loading="lazy"
                    />
                  </Link>

                  <p
                    className="mt-3.5 text-sm leading-relaxed"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    {plant.shortExcerpt}
                  </p>
                </div>

                {/* Specimen Care Telemetry & Expandable Quick Field Note */}
                <div className="mt-5">
                  <dl
                    className="grid grid-cols-2 gap-2 border-y py-3 text-xs tabular-nums"
                    style={{ borderColor: 'var(--border-hairline)' }}
                  >
                    <div>
                      <dt className="flex items-center gap-1" style={{ color: 'var(--ink-muted)' }}>
                        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Light Regime</span>
                      </dt>
                      <dd className="mt-0.5 font-semibold" style={{ color: 'var(--ink-primary)' }}>
                        {plant.lightLevel}
                      </dd>
                    </div>

                    <div>
                      <dt className="flex items-center gap-1" style={{ color: 'var(--ink-muted)' }}>
                        <Droplets className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Difficulty</span>
                      </dt>
                      <dd className="mt-0.5 font-semibold" style={{ color: 'var(--ink-primary)' }}>
                        {plant.difficulty} ({plant.humidityRange})
                      </dd>
                    </div>

                    <div className="col-span-2 pt-1">
                      <dt style={{ color: 'var(--ink-muted)' }}>Hydration Cadence</dt>
                      <dd className="mt-0.5" style={{ color: 'var(--ink-secondary)' }}>
                        {plant.waterCadence}
                      </dd>
                    </div>
                  </dl>

                  {/* Expandable Quick Care Note Drawer */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => toggleQuickCare(plant.slug)}
                      aria-expanded={careOpen}
                      className="btn-press flex w-full items-center justify-between border px-3 py-2 text-xs font-medium"
                      style={{
                        borderColor: 'var(--border-hairline)',
                        backgroundColor: careOpen ? 'var(--bg-parchment)' : 'transparent',
                        color: 'var(--ink-primary)',
                      }}
                    >
                      <span>Curator’s Field Observation &amp; Substrate</span>
                      {careOpen ? (
                        <ChevronUp className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>

                    {careOpen && (
                      <div
                        className="border-x border-b p-3.5 text-xs leading-relaxed"
                        style={{
                          borderColor: 'var(--border-hairline)',
                          backgroundColor: 'var(--bg-parchment)',
                          color: 'var(--ink-secondary)',
                        }}
                      >
                        <p>{plant.fieldObservation}</p>
                        <p className="mt-2 pt-2 border-t" style={{ borderColor: 'var(--border-hairline)' }}>
                          <strong style={{ color: 'var(--ink-primary)' }}>Substrate:</strong>{' '}
                          {plant.substrateMix}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="tabular-nums" style={{ color: 'var(--ink-muted)' }}>
                      {plant.footCandles.split('(')[0].trim()}
                    </span>
                    <Link
                      to={`/plants/${plant.slug}`}
                      className="editorial-link inline-flex items-center gap-1 font-semibold"
                      style={{ color: 'var(--ink-primary)' }}
                    >
                      <span>Full Botanical Monograph</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        /* VIEW MODE 2: TAXONOMIC ARCHIVE LEDGER TABLE */
        <section aria-label="Taxonomic Archive Ledger" className="mt-10 overflow-x-auto">
          <table
            className="w-full border-collapse border text-left text-sm"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <thead>
              <tr
                className="border-b text-xs uppercase"
                style={{
                  backgroundColor: 'var(--bg-parchment)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--ink-secondary)',
                }}
              >
                <th scope="col" className="py-3.5 pl-4 pr-3 font-semibold">
                  Accession
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold">
                  Common &amp; Scientific Name
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold">
                  Botanical Family
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold">
                  Light &amp; Irradiance
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold">
                  Watering Cadence
                </th>
                <th scope="col" className="px-3 py-3.5 font-semibold">
                  Difficulty
                </th>
                <th scope="col" className="py-3.5 pl-3 pr-4 text-right font-semibold">
                  Herbarium
                </th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: 'var(--border-hairline)' }}>
              {filteredPlants.map((plant) => {
                const saved = isBookmarked(plant.slug);
                return (
                  <tr
                    key={plant.slug}
                    className="transition-colors hover:bg-[#EDE8DC]/60"
                    style={{ borderColor: 'var(--border-hairline)' }}
                  >
                    <td
                      className="py-4 pl-4 pr-3 text-xs tabular-nums whitespace-nowrap"
                      style={{ color: 'var(--ink-muted)' }}
                    >
                      {plant.accessionNumber}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={plant.image}
                          alt={plant.commonName}
                          className="h-12 w-10 shrink-0 object-cover border"
                          style={{ borderColor: 'var(--border-hairline)' }}
                          loading="lazy"
                        />
                        <div>
                          <Link
                            to={`/plants/${plant.slug}`}
                            className="font-editorial text-lg font-medium hover:underline"
                            style={{ color: 'var(--ink-primary)' }}
                          >
                            {plant.commonName}
                          </Link>
                          <p
                            className="binomial text-xs"
                            style={{ color: 'var(--ink-secondary)' }}
                          >
                            {plant.scientificName} {plant.taxonomicAuthority}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-xs" style={{ color: 'var(--ink-secondary)' }}>
                      <span className="font-semibold">{plant.family}</span>
                      <br />
                      <span style={{ color: 'var(--ink-muted)' }}>{plant.category}</span>
                    </td>
                    <td
                      className="px-3 py-4 text-xs tabular-nums"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      <span className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                        {plant.lightLevel}
                      </span>
                      <br />
                      <span>{plant.footCandles.split('(')[0].trim()}</span>
                    </td>
                    <td
                      className="px-3 py-4 text-xs max-w-[230px]"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      {plant.waterCadence}
                    </td>
                    <td className="px-3 py-4 text-xs whitespace-nowrap">
                      <span
                        className="border px-2.5 py-1 font-medium"
                        style={{
                          borderColor: 'var(--border-hairline)',
                          backgroundColor: 'var(--bg-parchment)',
                          color: 'var(--ink-primary)',
                        }}
                      >
                        {plant.difficulty}
                      </span>
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleBookmark(plant.slug)}
                          aria-label={
                            saved
                              ? `Remove ${plant.commonName} from Herbarium`
                              : `Save ${plant.commonName} to Herbarium`
                          }
                          aria-pressed={saved}
                          className="btn-press inline-flex h-8 w-8 items-center justify-center border"
                          style={{
                            borderColor: saved
                              ? 'var(--accent-terracotta)'
                              : 'var(--border-hairline)',
                          }}
                        >
                          <Bookmark
                            className="h-3.5 w-3.5"
                            style={{
                              color: saved ? 'var(--accent-terracotta)' : 'var(--ink-muted)',
                              fill: saved ? 'var(--accent-terracotta)' : 'none',
                            }}
                            aria-hidden="true"
                          />
                        </button>
                        <Link
                          to={`/plants/${plant.slug}`}
                          className="btn-press inline-flex items-center gap-1 border px-2.5 py-1.5 text-xs font-semibold"
                          style={{
                            borderColor: 'var(--accent-botanical)',
                            color: 'var(--accent-botanical)',
                          }}
                        >
                          <span>Profile</span>
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

