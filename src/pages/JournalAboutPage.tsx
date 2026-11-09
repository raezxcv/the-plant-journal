import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Compass, Camera, Feather } from 'lucide-react';
import { JOURNAL_ARTICLES, type JournalArticle } from '../data/articles';
import { PLANT_SPECIMENS, getPlantBySlug } from '../data/plants';

const TOPICS: Array<'All' | JournalArticle['topic']> = [
  'All',
  'Light & Architecture',
  'Propagation',
  'Small-Space Ecology',
  'Botanical Photography',
  'Everyday Botany',
];

export const JournalAboutPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTopic, setSelectedTopic] = useState<'All' | JournalArticle['topic']>('All');

  const activeArticleSlug = searchParams.get('article') || JOURNAL_ARTICLES[0].slug;
  const activeArticle =
    JOURNAL_ARTICLES.find((a) => a.slug === activeArticleSlug) || JOURNAL_ARTICLES[0];

  // Interactive Window Light & Foot-Candle Field Instrument
  const [windowAspect, setWindowAspect] = useState<'East' | 'South' | 'West' | 'North'>('East');
  const [distanceMeters, setDistanceMeters] = useState<'0.5' | '1.5' | '3.0'>('1.5');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedTopic === 'All') return JOURNAL_ARTICLES;
    return JOURNAL_ARTICLES.filter((a) => a.topic === selectedTopic);
  }, [selectedTopic]);

  const selectArticle = (slug: string) => {
    setSearchParams({ article: slug });
    const readerEl = document.getElementById('active-essay-reader');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculate estimated foot-candles and recommended species
  const lightEstimate = useMemo(() => {
    const baseFc: Record<typeof windowAspect, number> = {
      South: 2800,
      West: 2200,
      East: 1400,
      North: 550,
    };
    const multiplier: Record<typeof distanceMeters, number> = {
      '0.5': 1.0,
      '1.5': 0.42,
      '3.0': 0.16,
    };
    const estimatedFc = Math.round(baseFc[windowAspect] * multiplier[distanceMeters]);

    let regime: 'Direct Morning Sun' | 'Bright Indirect' | 'Dappled Shade' = 'Bright Indirect';
    if (estimatedFc >= 1000) {
      regime = 'Direct Morning Sun';
    } else if (estimatedFc < 450) {
      regime = 'Dappled Shade';
    }

    const matchingPlants = PLANT_SPECIMENS.filter((p) => p.lightLevel === regime).slice(0, 4);
    return { estimatedFc, regime, matchingPlants };
  }, [windowAspect, distanceMeters]);

  const relatedSpecimens = activeArticle.relatedPlantSlugs
    .map((slug) => getPlantBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      {/* Page Masthead Header */}
      <header
        className="reveal-entry border-b pb-8"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <h1 className="text-4xl sm:text-5xl" style={{ color: 'var(--ink-primary)' }}>
          The Botanical Journal &amp; Editorial Colophon
        </h1>
        <p
          className="mt-3 text-base sm:text-lg leading-relaxed prose-measure"
          style={{ color: 'var(--ink-secondary)' }}
        >
          Long-form essays on photobiology, vegetative propagation in glass, small-space
          conservatory ecology, medium-format botanical photography, and the quiet rhythm of living
          with plants.
        </p>

        {/* Topic Filter Bar */}
        <div
          className="mt-6 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter journal essays by subject"
        >
          {TOPICS.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                aria-pressed={active}
                className="btn-press border px-3.5 py-1.5 text-xs font-semibold"
                style={{
                  backgroundColor: active ? 'var(--accent-botanical)' : 'var(--bg-parchment)',
                  borderColor: active ? 'var(--accent-botanical)' : 'var(--border-hairline)',
                  color: active ? 'var(--canopy-text-primary)' : 'var(--ink-primary)',
                }}
              >
                {topic === 'All' ? 'All 5 Issue XIV Essays' : topic}
              </button>
            );
          })}
        </div>
      </header>

      {/* SECTION 1: ESSAY DIRECTORY CARDS + ACTIVE MONOGRAPH READER */}
      <section aria-labelledby="essays-directory-heading" className="mt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left 4 Columns: Essay Index List */}
          <div className="lg:col-span-4 space-y-4">
            <h2 id="essays-directory-heading" className="text-2xl">
              Issue No. 14 Table of Contents
            </h2>
            <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
              Select any dispatch below to read the full monograph and field telemetry.
            </p>

            <div className="space-y-3">
              {filteredArticles.map((article) => {
                const isCurrent = article.slug === activeArticle.slug;
                return (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => selectArticle(article.slug)}
                    aria-current={isCurrent ? 'true' : undefined}
                    className="btn-press block w-full border p-4 text-left transition-colors"
                    style={{
                      backgroundColor: isCurrent ? 'var(--bg-parchment)' : 'var(--bg-paper)',
                      borderColor: isCurrent
                        ? 'var(--accent-botanical)'
                        : 'var(--border-hairline)',
                    }}
                  >
                    <h3 className="text-xl leading-snug" style={{ color: 'var(--ink-primary)' }}>
                      {article.title}
                    </h3>
                    <p
                      className="mt-1.5 text-xs leading-relaxed"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      {article.summary}
                    </p>
                    <div
                      className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-2.5 text-xs tabular-nums"
                      style={{
                        borderColor: 'var(--border-hairline)',
                        color: 'var(--ink-muted)',
                      }}
                    >
                      <span>
                        {article.dispatchCode} · {article.topic}
                      </span>
                      <span className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                        {isCurrent ? 'Reading Now' : article.readingTime}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right 8 Columns: Full Literary Monograph Reader */}
          <article
            id="active-essay-reader"
            aria-labelledby="active-essay-title"
            className="lg:col-span-8 border p-6 sm:p-8 lg:p-10"
            style={{
              backgroundColor: 'var(--bg-paper)',
              borderColor: 'var(--border-hairline)',
            }}
          >
            <header
              className="border-b pb-6"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <h2
                id="active-essay-title"
                className="text-3xl sm:text-4xl lg:text-[2.65rem]"
                style={{ color: 'var(--ink-primary)' }}
              >
                {activeArticle.title}
              </h2>

              <p
                className="mt-3 font-editorial italic text-lg sm:text-xl leading-relaxed"
                style={{ color: 'var(--ink-secondary)' }}
              >
                {activeArticle.subtitle}
              </p>

              <div
                className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-xs tabular-nums"
                style={{
                  borderColor: 'var(--border-hairline)',
                  color: 'var(--ink-muted)',
                }}
              >
                <div>
                  <strong style={{ color: 'var(--ink-primary)' }}>{activeArticle.author}</strong> —{' '}
                  {activeArticle.authorRole}
                </div>
                <div className="flex items-center gap-3">
                  <span>{activeArticle.dispatchCode}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {activeArticle.readingTime}
                  </span>
                </div>
              </div>
            </header>

            {/* Primary Essay Photographic Plate */}
            <figure
              className="mt-6 border p-3 sm:p-4"
              style={{
                borderColor: 'var(--border-hairline)',
                backgroundColor: 'var(--bg-parchment)',
              }}
            >
              <div className="plate-frame aspect-[16/9] w-full">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="plate-image"
                />
              </div>
              <figcaption
                className="mt-2.5 text-xs tabular-nums"
                style={{ color: 'var(--ink-muted)' }}
              >
                {activeArticle.figureCaption}
              </figcaption>
            </figure>

            {/* Long-Form Editorial Body Paragraphs */}
            <div className="mt-8 space-y-5">
              {activeArticle.paragraphs.map((para, idx) => (
                <React.Fragment key={idx}>
                  <p
                    className="font-editorial text-lg sm:text-[1.2rem] leading-[1.78] prose-measure"
                    style={{ color: 'var(--ink-primary)' }}
                  >
                    {para}
                  </p>

                  {idx === 1 && (
                    <blockquote
                      className="my-6 border-y py-5 font-editorial italic text-xl sm:text-2xl leading-relaxed"
                      style={{
                        borderColor: 'var(--border-strong)',
                        color: 'var(--ink-primary)',
                      }}
                    >
                      “{activeArticle.pullQuote}”
                    </blockquote>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Calibrated Field Note Callout */}
            <div
              className="mt-8 border p-5 sm:p-6"
              style={{
                backgroundColor: 'var(--bg-parchment)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <h3 className="text-xl" style={{ color: 'var(--ink-primary)' }}>
                {activeArticle.fieldNote.heading}
              </h3>
              <p
                className="mt-1 text-xs font-semibold tabular-nums"
                style={{ color: 'var(--accent-botanical)' }}
              >
                Measured Benchmark: {activeArticle.fieldNote.metric}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                {activeArticle.fieldNote.detail}
              </p>
            </div>

            {/* Linked Herbarium Specimens Referenced in this Essay */}
            <div
              className="mt-8 border-t pt-6"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <h3 className="text-xl" style={{ color: 'var(--ink-primary)' }}>
                Specimens Referenced in This Study
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {relatedSpecimens.map((plant) => (
                  <Link
                    key={plant.slug}
                    to={`/plants/${plant.slug}`}
                    className="flex items-center gap-3 border p-3 transition-colors hover:bg-[#EDE8DC]"
                    style={{
                      borderColor: 'var(--border-hairline)',
                      backgroundColor: 'var(--bg-paper)',
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.commonName}
                      className="h-14 w-12 shrink-0 object-cover border"
                      style={{ borderColor: 'var(--border-hairline)' }}
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p
                        className="font-editorial text-base font-medium truncate"
                        style={{ color: 'var(--ink-primary)' }}
                      >
                        {plant.commonName}
                      </p>
                      <p
                        className="binomial text-xs truncate"
                        style={{ color: 'var(--ink-secondary)' }}
                      >
                        {plant.scientificName}
                      </p>
                      <span
                        className="mt-1 inline-flex items-center gap-0.5 text-xs font-semibold"
                        style={{ color: 'var(--accent-botanical)' }}
                      >
                        <span>Monograph</span>
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CONSERVATORY WINDOW LIGHT & FOOT-CANDLE INSTRUMENT */}
      <section
        aria-labelledby="light-instrument-heading"
        className="mt-16 border-t pt-14"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div
          className="border p-6 sm:p-8 lg:p-10"
          style={{
            backgroundColor: 'var(--bg-parchment)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 id="light-instrument-heading" className="text-3xl">
                Interactive Window Irradiance &amp; Placement Guide
              </h2>
              <p
                className="mt-2.5 text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--ink-secondary)' }}
              >
                Based on Essay I (<em className="font-editorial">The Inverse-Square Law of the Casement Window</em>), select your window compass orientation and interior distance below to estimate available foot-candles and compatible herbarium species.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <span
                    className="block text-xs font-semibold mb-2"
                    style={{ color: 'var(--ink-primary)' }}
                  >
                    1. Window Compass Orientation (Northern Hemisphere)
                  </span>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {(['East', 'South', 'West', 'North'] as const).map((aspect) => {
                      const active = windowAspect === aspect;
                      return (
                        <button
                          key={aspect}
                          type="button"
                          onClick={() => setWindowAspect(aspect)}
                          aria-pressed={active}
                          className="btn-press border px-3 py-2 text-xs font-semibold"
                          style={{
                            backgroundColor: active
                              ? 'var(--accent-botanical)'
                              : 'var(--bg-paper)',
                            borderColor: active
                              ? 'var(--accent-botanical)'
                              : 'var(--border-hairline)',
                            color: active
                              ? 'var(--canopy-text-primary)'
                              : 'var(--ink-primary)',
                          }}
                        >
                          {aspect} Window
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <span
                    className="block text-xs font-semibold mb-2"
                    style={{ color: 'var(--ink-primary)' }}
                  >
                    2. Distance from Window Glass to Foliage
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: '0.5', label: '0.5 m (Sill)' },
                      { value: '1.5', label: '1.5 m (Desk)' },
                      { value: '3.0', label: '3.0 m (Interior)' },
                    ].map((dist) => {
                      const active = distanceMeters === dist.value;
                      return (
                        <button
                          key={dist.value}
                          type="button"
                          onClick={() =>
                            setDistanceMeters(dist.value as '0.5' | '1.5' | '3.0')
                          }
                          aria-pressed={active}
                          className="btn-press border px-3 py-2 text-xs font-semibold tabular-nums"
                          style={{
                            backgroundColor: active
                              ? 'var(--accent-botanical)'
                              : 'var(--bg-paper)',
                            borderColor: active
                              ? 'var(--accent-botanical)'
                              : 'var(--border-hairline)',
                            color: active
                              ? 'var(--canopy-text-primary)'
                              : 'var(--ink-primary)',
                          }}
                        >
                          {dist.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="border p-6"
                style={{
                  backgroundColor: 'var(--bg-paper)',
                  borderColor: 'var(--border-hairline)',
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border-hairline)' }}>
                  <div>
                    <h3 className="text-2xl" style={{ color: 'var(--ink-primary)' }}>
                      Estimated Irradiance: ~{lightEstimate.estimatedFc} foot-candles
                    </h3>
                    <p className="mt-0.5 text-xs tabular-nums" style={{ color: 'var(--ink-muted)' }}>
                      ({Math.round(lightEstimate.estimatedFc * 10.76)} lux · Classified as{' '}
                      <strong style={{ color: 'var(--ink-primary)' }}>{lightEstimate.regime}</strong>)
                    </p>
                  </div>
                  <Link
                    to="/index"
                    className="editorial-link text-xs font-semibold"
                    style={{ color: 'var(--accent-botanical)' }}
                  >
                    Filter Index by {lightEstimate.regime} →
                  </Link>
                </div>

                <p className="mt-4 text-xs font-semibold" style={{ color: 'var(--ink-muted)' }}>
                  Recommended Herbarium Species for This Microclimate:
                </p>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {lightEstimate.matchingPlants.map((plant) => (
                    <Link
                      key={plant.slug}
                      to={`/plants/${plant.slug}`}
                      className="flex items-center justify-between border p-3 transition-colors hover:bg-[#EDE8DC]"
                      style={{ borderColor: 'var(--border-hairline)' }}
                    >
                      <div>
                        <p className="font-editorial text-lg font-medium" style={{ color: 'var(--ink-primary)' }}>
                          {plant.commonName}
                        </p>
                        <p className="binomial text-xs" style={{ color: 'var(--ink-secondary)' }}>
                          {plant.scientificName} · {plant.footCandles.split('(')[0].trim()}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0" style={{ color: 'var(--ink-muted)' }} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT THE PUBLICATION, EDITORIAL PHILOSOPHY & MASTHEAD */}
      <section
        aria-labelledby="about-publication-heading"
        className="mt-16 border-t pt-14"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5">
            <h2 id="about-publication-heading" className="text-3xl sm:text-4xl">
              About The Plant Journal &amp; Our Archival Standards
            </h2>
            <p
              className="font-editorial italic text-xl"
              style={{ color: 'var(--ink-muted)' }}
            >
              A quarterly study of cultivated botany, glasshouses, and the human impulse to tend
              living things
            </p>

            <p
              className="text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              <em className="font-editorial">The Plant Journal</em> was established as an antidote
              to both sterile academic textbooks and commercial plant-shopping catalogs. We believe
              that every houseplant sitting on an apartment sill carries millions of years of
              evolutionary architecture—from the nocturnal CAM metabolism of West African{' '}
              <em className="binomial">Dracaena trifasciata</em> to the hydro-repellent pinnules of
              Andean <em className="binomial">Adiantum raddianum</em>.
            </p>

            <p
              className="text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              Each issue documents fifteen botanical taxa through natural-light photography,
              verified binomial nomenclature (cross-referenced with Royal Botanic Gardens, Kew’s{' '}
              <em>Plants of the World Online</em>), and physiological care notes tested in working
              glasshouses and urban apartments.
            </p>

            <div
              className="grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div className="border p-4" style={{ borderColor: 'var(--border-hairline)', backgroundColor: 'var(--bg-parchment)' }}>
                <Compass className="h-5 w-5" style={{ color: 'var(--accent-botanical)' }} aria-hidden="true" />
                <h3 className="mt-2 text-lg">Taxonomic Rigor</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  Current phylogenetic classifications (including Goeppertia and Dracaena revisions)
                  with original botanical authorities.
                </p>
              </div>

              <div className="border p-4" style={{ borderColor: 'var(--border-hairline)', backgroundColor: 'var(--bg-parchment)' }}>
                <Camera className="h-5 w-5" style={{ color: 'var(--accent-botanical)' }} aria-hidden="true" />
                <h3 className="mt-2 text-lg">Daylight Plates</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  Photographed exclusively in natural window and glasshouse light to preserve honest
                  chlorophyll and clay tones.
                </p>
              </div>

              <div className="border p-4" style={{ borderColor: 'var(--border-hairline)', backgroundColor: 'var(--bg-parchment)' }}>
                <Feather className="h-5 w-5" style={{ color: 'var(--accent-botanical)' }} aria-hidden="true" />
                <h3 className="mt-2 text-lg">Zero Commerce</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  Strictly reader-supported editorial publishing. No checkout carts, sponsored pots,
                  or miracle tonics.
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Publication Masthead & Colophon Ledger */}
          <div className="lg:col-span-5">
            <div
              className="border p-6 sm:p-8"
              style={{
                backgroundColor: 'var(--bg-parchment)',
                borderColor: 'var(--border-hairline)',
              }}
            >
              <h3 className="text-2xl" style={{ color: 'var(--ink-primary)' }}>
                Editorial Masthead &amp; Colophon
              </h3>
              <p className="mt-1 text-xs tabular-nums" style={{ color: 'var(--ink-muted)' }}>
                Issue No. 14 · Autumn / Winter Edition · ISSN 2791-408X
              </p>

              <dl
                className="mt-5 divide-y border-t text-xs sm:text-sm"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Founding Editor-in-Chief</dt>
                  <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                    Elena Rostova
                  </dd>
                </div>
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Herbarium Curator &amp; Morphologist</dt>
                  <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                    Dr. Henrik Vance
                  </dd>
                </div>
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Photobiology &amp; Architecture</dt>
                  <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                    Clara Lindqvist
                  </dd>
                </div>
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Horticultural Essayist</dt>
                  <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                    Maren Solberg
                  </dd>
                </div>
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Botanical Photography</dt>
                  <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                    Julian Mercer
                  </dd>
                </div>
                <div className="flex justify-between py-3 gap-4">
                  <dt style={{ color: 'var(--ink-muted)' }}>Typography &amp; Paper Specification</dt>
                  <dd className="text-right" style={{ color: 'var(--ink-secondary)' }}>
                    EB Garamond &amp; Source Sans 3 on 120gsm Uncoated Cotton Rag
                  </dd>
                </div>
              </dl>

              <div
                className="mt-6 border-t pt-4 flex items-center justify-between text-xs"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <span style={{ color: 'var(--ink-muted)' }}> Conservatory Correspondence:</span>
                <span className="font-medium" style={{ color: 'var(--ink-primary)' }}>
                  editors@theplantjournal.org
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
