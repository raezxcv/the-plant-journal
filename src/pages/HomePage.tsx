import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark, Sun, Droplets, Compass } from 'lucide-react';
import { PLANT_SPECIMENS } from '../data/plants';
import { JOURNAL_ARTICLES, SEASONAL_PHENOLOGY } from '../data/articles';
import { useHerbarium } from '../context/HerbariumContext';

export const HomePage: React.FC = () => {
  const { isBookmarked, toggleBookmark } = useHerbarium();
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(0);

  const recentSpecimens = PLANT_SPECIMENS.slice(0, 6);
  const leadEssay = JOURNAL_ARTICLES[0];
  const secondaryEssays = JOURNAL_ARTICLES.slice(1, 4);
  const activeSeason = SEASONAL_PHENOLOGY[activeSeasonIndex];

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      {/* 1. GREENHOUSE HERO — ASYMMETRIC PERIODICAL SPREAD */}
      <section
        aria-labelledby="hero-monograph-title"
        className="reveal-entry border-b pb-12 lg:pb-16"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left 7 Columns: Primary Glasshouse Plate */}
          <div className="lg:col-span-7">
            <figure
              className="plate-group border p-3 sm:p-4"
              style={{
                borderColor: 'var(--border-hairline)',
                backgroundColor: 'var(--bg-parchment)',
              }}
            >
              <div className="plate-frame aspect-[16/10] w-full">
                <img
                  src="/images/greenhouse-hero.jpg"
                  alt="Morning sunlight filtering through the iron-and-glass conservatory roof onto lush tropical palms and ferns"
                  className="plate-image"
                />
              </div>
              <figcaption
                className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs tabular-nums"
                style={{ color: 'var(--ink-muted)' }}
              >
                <span>
                  Cover Plate XIV — Palm &amp; Pteridophyte Conservatory, 07:50 AM Solar Oblique
                </span>
                <span>Medium Format 35mm · Natural Daylight</span>
              </figcaption>
            </figure>
          </div>

          {/* Right 5 Columns: Lead Monograph Dispatch */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <h1
                id="hero-monograph-title"
                className="text-4xl sm:text-5xl lg:text-[3.35rem]"
                style={{ color: 'var(--ink-primary)' }}
              >
                Under Glass: The Architecture of Humid Light
              </h1>

              <div
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-y py-2.5 text-xs tabular-nums"
                style={{
                  borderColor: 'var(--border-hairline)',
                  color: 'var(--ink-muted)',
                }}
              >
                <span>Issue No. 14 Monograph</span>
                <span>·</span>
                <span>15 Documented Taxa</span>
                <span>·</span>
                <span>Autumn / Winter Conservatory Study</span>
              </div>

              <p
                className="mt-5 text-base sm:text-lg leading-relaxed prose-measure"
                style={{ color: 'var(--ink-secondary)' }}
              >
                Every glasshouse is an instrument for slowing down the seasons. Within panes of
                misted lime-washed glass, montane ferns from the Andean foothills share damp cedar
                benches with creeping Colombian aroids and winter-fragrant vines from Yunnan.
              </p>

              <p
                className="mt-4 text-sm sm:text-base leading-relaxed prose-measure"
                style={{ color: 'var(--ink-secondary)' }}
              >
                In this fourteenth volume of <em className="font-editorial">The Plant Journal</em>,
                we examine how directional window light, root-zone aeration, and patient daily
                observation transform ordinary domestic rooms into living herbarium studies.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/index"
                  className="btn-press inline-flex min-h-[44px] items-center gap-2 border px-5 py-2.5 text-sm font-semibold"
                  style={{
                    backgroundColor: 'var(--accent-botanical)',
                    borderColor: 'var(--accent-botanical)',
                    color: 'var(--canopy-text-primary)',
                  }}
                >
                  <span>Explore the 15-Species Index</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/journal"
                  className="btn-press inline-flex min-h-[44px] items-center gap-2 border px-5 py-2.5 text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--bg-parchment)',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--ink-primary)',
                  }}
                >
                  <span>Read Issue XIV Essays</span>
                </Link>
              </div>

              {/* Specimen Quick Reference Bar */}
              <div
                className="grid grid-cols-3 border text-xs tabular-nums"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-parchment)',
                }}
              >
                <div
                  className="border-r p-3"
                  style={{ borderColor: 'var(--border-hairline)' }}
                >
                  <p className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                    15 Species
                  </p>
                  <p style={{ color: 'var(--ink-muted)' }}>11 Botanical Families</p>
                </div>
                <div
                  className="border-r p-3"
                  style={{ borderColor: 'var(--border-hairline)' }}
                >
                  <p className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                    200–4,500 fc
                  </p>
                  <p style={{ color: 'var(--ink-muted)' }}>Calibrated Light Metrics</p>
                </div>
                <div className="p-3">
                  <p className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                    5 Essays
                  </p>
                  <p style={{ color: 'var(--ink-muted)' }}>Original Field Studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED BOTANICAL STORY — FULL EDITORIAL DISPATCH */}
      <section
        aria-labelledby="featured-story-heading"
        className="border-b py-12 lg:py-16"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2
              id="featured-story-heading"
              className="text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-primary)' }}
            >
              The Quiet Reciprocity of Foliar Care
            </h2>
            <p
              className="mt-2 font-editorial italic text-lg"
              style={{ color: 'var(--ink-muted)' }}
            >
              Field study on Ficus lyrata, stomatal respiration, and the ten-minute morning round
            </p>

            <p
              className="mt-5 text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              In the lowland rainforests of Sierra Leone and Cameroon, convective afternoon
              downpours wash the broad, violin-waisted blades of{' '}
              <em className="binomial">Ficus lyrata</em> clean every day. Indoors, however, those
              same horizontal leaves accumulate a microscopic veil of household dust that diminishes
              photosynthetically active radiation by nearly a third.
            </p>

            <p
              className="mt-4 text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              Supporting the abaxial surface of each leaf with an open palm while wiping the upper
              cuticle with a damp, unbleached linen cloth is more than housekeeping. It is an
              intimate tactile inspection—allowing the grower to feel leaf turgor, notice early
              edema flecks on emerging buds, and observe how each petiole angles toward the sash
              window.
            </p>

            <blockquote
              className="mt-6 border-y py-4 font-editorial italic text-xl"
              style={{
                borderColor: 'var(--border-hairline)',
                color: 'var(--ink-primary)',
              }}
            >
              “A plant does not ask for haste; it asks only that we notice the posture of its
              youngest leaf before reaching for the watering can.”
            </blockquote>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
              <Link
                to="/plants/ficus-lyrata"
                className="editorial-link inline-flex items-center gap-1.5 font-semibold"
                style={{ color: 'var(--ink-primary)' }}
              >
                <span>Examine the Ficus lyrata Botanical Profile</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/journal?article=reciprocity-of-tending-everyday-botany"
                className="editorial-link inline-flex items-center gap-1.5"
                style={{ color: 'var(--ink-secondary)' }}
              >
                <span>Read full essay: Biological Time in a Hurried Room</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <figure
                className="plate-group border p-3 sm:col-span-7"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-parchment)',
                }}
              >
                <div className="plate-frame aspect-[4/5]">
                  <img
                    src="/images/tending-plants.jpg"
                    alt="Botanist caring for broad green indoor plant foliage near a sunlit window"
                    className="plate-image"
                  />
                </div>
                <figcaption
                  className="mt-2.5 text-xs tabular-nums"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  Fig. 06a — Cuticle grooming on panduriform foliage in morning window light.
                </figcaption>
              </figure>

              <figure
                className="plate-group border p-3 sm:col-span-5 flex flex-col justify-between"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-parchment)',
                }}
              >
                <div>
                  <div className="plate-frame aspect-[4/5]">
                    <img
                      src="/images/pressed-herbarium.jpg"
                      alt="Pressed botanical herbarium specimen mounted on cream cotton paper"
                      className="plate-image"
                    />
                  </div>
                  <figcaption
                    className="mt-2.5 text-xs tabular-nums"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    Fig. 10a — Archival herbarium sheet mounting protocol on 100% cotton rag.
                  </figcaption>
                </div>

                <div
                  className="mt-4 border-t pt-3 text-xs"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--ink-secondary)',
                  }}
                >
                  <p className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                    Herbarium Note
                  </p>
                  <p className="mt-1">
                    All 15 species in our index include calibrated foot-candle ranges, substrate
                    ratios, and expandable seasonal protocols.
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECENT HERBARIUM ACCESSIONS (6 CURATED PLANTS) */}
      <section
        aria-labelledby="recent-plants-heading"
        className="border-b py-12 lg:py-16"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              id="recent-plants-heading"
              className="text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-primary)' }}
            >
              Recent Herbarium Accessions
            </h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--ink-secondary)' }}>
              Six selected monographs from our 15-species living collection, documented with
              taxonomic authorities and environmental parameters.
            </p>
          </div>
          <Link
            to="/index"
            className="btn-press inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium self-start sm:self-auto"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-parchment)',
              color: 'var(--ink-primary)',
            }}
          >
            <span>View Full 15-Plant Index</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="mt-8 grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: 'var(--border-hairline)' }}
        >
          {recentSpecimens.map((plant) => {
            const saved = isBookmarked(plant.slug);
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
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-2xl">
                        <Link
                          to={`/plants/${plant.slug}`}
                          className="hover:underline"
                          style={{ color: 'var(--ink-primary)' }}
                        >
                          {plant.commonName}
                        </Link>
                      </h3>
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
                          ? `Remove ${plant.commonName} from Herbarium bookmarks`
                          : `Save ${plant.commonName} to Herbarium bookmarks`
                      }
                      aria-pressed={saved}
                      className="btn-press inline-flex h-9 w-9 shrink-0 items-center justify-center border"
                      style={{
                        borderColor: saved ? 'var(--accent-terracotta)' : 'var(--border-hairline)',
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
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    {plant.shortExcerpt}
                  </p>
                </div>

                <div
                  className="mt-5 border-t pt-3.5 text-xs tabular-nums"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--ink-muted)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>
                      {plant.accessionNumber} · {plant.family}
                    </span>
                    <span
                      className="border px-2 py-0.5 font-medium"
                      style={{
                        borderColor: 'var(--border-hairline)',
                        backgroundColor: 'var(--bg-parchment)',
                        color: 'var(--ink-primary)',
                      }}
                    >
                      {plant.difficulty}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1">
                      <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                      {plant.lightLevel}
                    </span>
                    <Link
                      to={`/plants/${plant.slug}`}
                      className="editorial-link font-semibold"
                      style={{ color: 'var(--ink-primary)' }}
                    >
                      Open Monograph →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. SEASONAL JOURNAL & PHENOLOGY ALMANAC */}
      <section
        aria-labelledby="seasonal-journal-heading"
        className="border-b py-12 lg:py-16"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div
          className="border p-6 sm:p-8 lg:p-10"
          style={{
            backgroundColor: 'var(--bg-canopy)',
            borderColor: 'var(--border-canopy)',
            color: 'var(--canopy-text-primary)',
          }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                id="seasonal-journal-heading"
                className="text-3xl sm:text-4xl"
                style={{ color: 'var(--canopy-text-primary)' }}
              >
                Seasonal Phenology &amp; Conservatory Almanac
              </h2>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--canopy-text-secondary)' }}
              >
                Indoor plants remain tethered to solar declination and day length even behind double
                glazing. Select a seasonal quarter below to inspect how photoperiod governs
                hydration, vernalization, and substrate renewal.
              </p>

              <div className="mt-6 flex flex-col gap-2" role="tablist" aria-label="Seasonal Quarters">
                {SEASONAL_PHENOLOGY.map((item, idx) => {
                  const isSelected = idx === activeSeasonIndex;
                  return (
                    <button
                      key={item.season}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveSeasonIndex(idx)}
                      className="btn-press flex items-center justify-between border px-4 py-3 text-left text-sm transition-colors"
                      style={{
                        backgroundColor: isSelected
                          ? 'var(--canopy-text-primary)'
                          : 'var(--bg-canopy-elevated)',
                        borderColor: isSelected
                          ? 'var(--canopy-text-primary)'
                          : 'var(--border-canopy)',
                        color: isSelected
                          ? 'var(--bg-canopy)'
                          : 'var(--canopy-text-primary)',
                      }}
                    >
                      <span className="font-medium">{item.season}</span>
                      <span className="tabular-nums text-xs opacity-80">{item.photoperiod}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div
                role="tabpanel"
                className="border p-6 sm:p-8"
                style={{
                  backgroundColor: 'var(--bg-canopy-elevated)',
                  borderColor: 'var(--border-canopy)',
                }}
              >
                <h3
                  className="text-2xl sm:text-3xl"
                  style={{ color: 'var(--canopy-text-primary)' }}
                >
                  {activeSeason.focusTitle}
                </h3>
                <div
                  className="mt-2 flex flex-wrap gap-4 text-xs tabular-nums"
                  style={{ color: 'var(--canopy-text-muted)' }}
                >
                  <span>{activeSeason.solarDeclination}</span>
                  <span>·</span>
                  <span>Photoperiod: {activeSeason.photoperiod}</span>
                </div>

                <p
                  className="mt-4 text-base leading-relaxed"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  {activeSeason.botanicalGuidance}
                </p>

                <div
                  className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-sm"
                  style={{ borderColor: 'var(--border-canopy)' }}
                >
                  <div>
                    <span className="text-xs" style={{ color: 'var(--canopy-text-muted)' }}>
                      Key Indicator Taxon:{' '}
                    </span>
                    <span
                      className="binomial font-medium"
                      style={{ color: 'var(--canopy-text-primary)' }}
                    >
                      {activeSeason.prioritySpecies}
                    </span>
                  </div>
                  <Link
                    to={`/plants/${activeSeason.prioritySlug}`}
                    className="btn-press inline-flex items-center gap-1.5 border px-3.5 py-1.5 text-xs font-semibold"
                    style={{
                      borderColor: 'var(--canopy-text-primary)',
                      color: 'var(--canopy-text-primary)',
                    }}
                  >
                    <span>Inspect Specimen Protocol</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Recent Journal Dispatches Strip */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[leadEssay, ...secondaryEssays.slice(0, 2)].map((article) => (
                  <Link
                    key={article.id}
                    to={`/journal?article=${article.slug}`}
                    className="border p-4 transition-colors hover:bg-[#23352A]"
                    style={{
                      borderColor: 'var(--border-canopy)',
                      backgroundColor: 'var(--bg-canopy)',
                    }}
                  >
                    <h4
                      className="text-lg leading-snug"
                      style={{ color: 'var(--canopy-text-primary)' }}
                    >
                      {article.title}
                    </h4>
                    <p
                      className="mt-2 text-xs tabular-nums"
                      style={{ color: 'var(--canopy-text-muted)' }}
                    >
                      {article.topic} · {article.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PUBLICATION INTRODUCTION & EDITORIAL COLOPHON */}
      <section aria-labelledby="publication-intro-heading" className="pt-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <figure
              className="plate-group border p-3"
              style={{
                borderColor: 'var(--border-hairline)',
                backgroundColor: 'var(--bg-parchment)',
              }}
            >
              <div className="plate-frame aspect-[16/10]">
                <img
                  src="/images/botanical-still-life.jpg"
                  alt="Botanical worktable still life with vessels, clippings, and linen cloth"
                  className="plate-image"
                  loading="lazy"
                />
              </div>
              <figcaption
                className="mt-2.5 text-xs tabular-nums"
                style={{ color: 'var(--ink-muted)' }}
              >
                Plate V — Editorial worktable in the North Studio prior to specimen pressing.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <h2
              id="publication-intro-heading"
              className="text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-primary)' }}
            >
              An Independent Publication, Never a Shop
            </h2>
            <p
              className="mt-2 font-editorial italic text-lg"
              style={{ color: 'var(--ink-muted)' }}
            >
              On botanical accuracy, unhurried reading, and why we treat houseplants as living
              ecology rather than disposable interior decor
            </p>

            <p
              className="mt-4 text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              Founded by a small collective of herbarium curators, conservatory horticulturists, and
              editorial photographers, <em className="font-editorial">The Plant Journal</em> bridges
              the gap between technical botanical monographs and independent print magazines. We
              verify every binomial name and physiological recommendation against peer-reviewed
              horticultural literature.
            </p>

            <div
              className="mt-6 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div className="flex items-start gap-3">
                <Compass
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: 'var(--accent-botanical)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg">Habitat Context</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                    Understanding whether a plant evolved on limestone cliffs or cloud-forest bark
                    explains its soil needs immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: 'var(--accent-botanical)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg">Measured Light</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                    We replace vague labels with real foot-candle and lux intervals alongside window
                    orientation advice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Droplets
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: 'var(--accent-botanical)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg">Root Physiology</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                    Detailed substrate recipes tailored to epiphytic velamen roots, terrestrial
                    rhizomes, and lithophytic succulents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

