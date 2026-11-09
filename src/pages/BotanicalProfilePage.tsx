import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Sun,
  Droplets,
  Thermometer,
  Wind,
  Layers,
  MapPin,
  Mountain,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { PLANT_SPECIMENS, getPlantBySlug } from '../data/plants';
import { useHerbarium } from '../context/HerbariumContext';

export const BotanicalProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark, personalNotes, savePersonalNote } = useHerbarium();

  const currentPlant = getPlantBySlug(slug || 'monstera-deliciosa') || PLANT_SPECIMENS[0];
  const currentIndex = PLANT_SPECIMENS.findIndex((p) => p.slug === currentPlant.slug);
  const prevPlant =
    PLANT_SPECIMENS[(currentIndex - 1 + PLANT_SPECIMENS.length) % PLANT_SPECIMENS.length];
  const nextPlant = PLANT_SPECIMENS[(currentIndex + 1) % PLANT_SPECIMENS.length];

  const [openCareIds, setOpenCareIds] = useState<string[]>([
    currentPlant.careNotes[0]?.id || 'hydration',
    currentPlant.careNotes[1]?.id || 'light',
  ]);
  const [noteDraft, setNoteDraft] = useState(personalNotes[currentPlant.slug] || '');
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setOpenCareIds([
      currentPlant.careNotes[0]?.id || '',
      currentPlant.careNotes[1]?.id || '',
    ]);
    setNoteDraft(personalNotes[currentPlant.slug] || '');
    setNoteSavedToast(false);
  }, [currentPlant.slug, currentPlant.careNotes, personalNotes]);

  const toggleCareSection = (id: string) => {
    setOpenCareIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allExpanded = openCareIds.length === currentPlant.careNotes.length;

  const handleToggleAllCare = () => {
    if (allExpanded) {
      setOpenCareIds([]);
    } else {
      setOpenCareIds(currentPlant.careNotes.map((c) => c.id));
    }
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    savePersonalNote(currentPlant.slug, noteDraft.trim());
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 2500);
  };

  const relatedPlants = currentPlant.relatedSlugs
    .map((s) => getPlantBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const saved = isBookmarked(currentPlant.slug);

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      {/* Top Archival Navigation & Specimen Switcher Bar */}
      <nav
        aria-label="Botanical Monograph Navigation"
        className="flex flex-wrap items-center justify-between gap-4 border-b pb-5"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <Link
          to="/index"
          className="btn-press inline-flex items-center gap-2 border px-3.5 py-2 text-xs font-semibold sm:text-sm"
          style={{
            borderColor: 'var(--border-strong)',
            backgroundColor: 'var(--bg-parchment)',
            color: 'var(--ink-primary)',
          }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to 15-Species Index</span>
        </Link>

        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          <label htmlFor="specimen-jump-select" className="sr-only">
            Jump to another botanical specimen
          </label>
          <select
            id="specimen-jump-select"
            value={currentPlant.slug}
            onChange={(e) => navigate(`/plants/${e.target.value}`)}
            className="min-h-[38px] min-w-0 flex-1 max-w-full truncate border px-3 py-1.5 text-xs sm:w-auto sm:flex-initial sm:text-sm"
            style={{
              backgroundColor: 'var(--bg-paper)',
              borderColor: 'var(--border-strong)',
              color: 'var(--ink-primary)',
            }}
          >
            {PLANT_SPECIMENS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.accessionNumber} — {p.commonName} ({p.scientificName})
              </option>
            ))}
          </select>

          <div className="inline-flex">
            <Link
              to={`/plants/${prevPlant.slug}`}
              aria-label={`Previous specimen: ${prevPlant.commonName}`}
              className="btn-press inline-flex h-[38px] items-center gap-1 border px-3 text-xs font-medium"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-parchment)',
                color: 'var(--ink-primary)',
              }}
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Prev</span>
            </Link>
            <Link
              to={`/plants/${nextPlant.slug}`}
              aria-label={`Next specimen: ${nextPlant.commonName}`}
              className="btn-press inline-flex h-[38px] items-center gap-1 border-y border-r px-3 text-xs font-medium"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-parchment)',
                color: 'var(--ink-primary)',
              }}
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Split Specimen Plate & Monograph Layout */}
      <article className="reveal-entry mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN (5 Cols): Framed Photographic Plate, Taxonomic Table & Field Note Pad */}
        <div className="lg:col-span-5 space-y-8">
          <figure
            className="border p-3.5 sm:p-5"
            style={{
              borderColor: 'var(--border-hairline)',
              backgroundColor: 'var(--bg-parchment)',
            }}
          >
            <div className="plate-frame aspect-[4/5] w-full border" style={{ borderColor: 'var(--border-hairline)' }}>
              <img
                src={currentPlant.image}
                alt={`${currentPlant.commonName} (${currentPlant.scientificName}) botanical plate`}
                className="plate-image"
              />
            </div>
            <figcaption
              className="mt-3 text-xs leading-relaxed tabular-nums"
              style={{ color: 'var(--ink-muted)' }}
            >
              {currentPlant.figureCaption}
            </figcaption>
          </figure>

          {/* Herbarium Taxonomic Classification Ledger */}
          <section
            aria-labelledby="taxonomic-ledger-heading"
            className="border p-5 sm:p-6"
            style={{
              borderColor: 'var(--border-hairline)',
              backgroundColor: 'var(--bg-parchment)',
            }}
          >
            <h2 id="taxonomic-ledger-heading" className="text-2xl">
              Taxonomic Classification
            </h2>
            <p className="mt-1 text-xs tabular-nums" style={{ color: 'var(--ink-muted)' }}>
              Accession Stamp: {currentPlant.accessionNumber} · Verified Kew POWO
            </p>

            <dl
              className="mt-4 divide-y border-t text-xs sm:text-sm"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Binomial Name</dt>
                <dd className="binomial font-medium text-right" style={{ color: 'var(--ink-primary)' }}>
                  {currentPlant.scientificName}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Authority</dt>
                <dd className="text-right tabular-nums" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.taxonomicAuthority}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Botanical Family</dt>
                <dd className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>
                  {currentPlant.family}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Order</dt>
                <dd className="text-right" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.order}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Section Category</dt>
                <dd className="text-right" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.category}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 gap-4">
                <dt style={{ color: 'var(--ink-muted)' }}>Mature Scale</dt>
                <dd className="text-right tabular-nums" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.matureDimensions}
                </dd>
              </div>
              <div className="pt-2.5">
                <dt className="text-xs font-semibold" style={{ color: 'var(--ink-primary)' }}>
                  Biochemistry &amp; Safety Note
                </dt>
                <dd className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.toxicityNote}
                </dd>
              </div>
            </dl>
          </section>

          {/* Reader's Local Specimen Field Note Pad */}
          <section
            aria-labelledby="reader-field-note-heading"
            className="border p-5 sm:p-6"
            style={{
              borderColor: 'var(--border-hairline)',
              backgroundColor: 'var(--bg-paper)',
            }}
          >
            <h2 id="reader-field-note-heading" className="text-xl">
              Personal Herbarium Bench Note
            </h2>
            <p className="mt-1 text-xs" style={{ color: 'var(--ink-muted)' }}>
              Record your own window placement, repotting date, or leaf observations for{' '}
              <em className="binomial">{currentPlant.scientificName}</em> (saved locally in your
              browser).
            </p>

            <form onSubmit={handleSaveNote} className="mt-3 space-y-3">
              <label htmlFor="personal-specimen-note" className="sr-only">
                Personal cultivation note for {currentPlant.commonName}
              </label>
              <textarea
                id="personal-specimen-note"
                rows={3}
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="e.g., Repotted into bark/pumice mix on March 14; placed 1.5m from east window..."
                className="w-full border p-3 text-sm"
                style={{
                  backgroundColor: 'var(--bg-parchment)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--ink-primary)',
                }}
              />
              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="btn-press inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold"
                  style={{
                    backgroundColor: 'var(--accent-botanical)',
                    borderColor: 'var(--accent-botanical)',
                    color: 'var(--canopy-text-primary)',
                  }}
                >
                  <span>Save Observation to Ledger</span>
                </button>
                {noteSavedToast && (
                  <span
                    role="status"
                    aria-live="polite"
                    className="inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: 'var(--accent-botanical)' }}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Saved locally</span>
                  </span>
                )}
              </div>
            </form>
          </section>
        </div>

        {/* RIGHT COLUMN (7 Cols): Monograph Header, Origin, Habitat, Morphology, Conditions & Expandable Care */}
        <div className="lg:col-span-7">
          <header
            className="border-b pb-6"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl" style={{ color: 'var(--ink-primary)' }}>
                  {currentPlant.commonName}
                </h1>
                <p
                  className="binomial mt-2 text-2xl sm:text-3xl"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {currentPlant.scientificName}{' '}
                  <span
                    className="not-italic text-base font-normal"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    {currentPlant.taxonomicAuthority}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleBookmark(currentPlant.slug)}
                aria-pressed={saved}
                className="btn-press inline-flex min-h-[42px] items-center gap-2 border px-4 py-2 text-xs font-semibold sm:text-sm"
                style={{
                  backgroundColor: saved ? 'var(--accent-terracotta)' : 'var(--bg-parchment)',
                  borderColor: saved ? 'var(--accent-terracotta)' : 'var(--border-strong)',
                  color: saved ? 'var(--canopy-text-primary)' : 'var(--ink-primary)',
                }}
              >
                <Bookmark
                  className="h-4 w-4"
                  style={{ fill: saved ? 'currentColor' : 'none' }}
                  aria-hidden="true"
                />
                <span>{saved ? 'Saved in Herbarium' : 'Save to Herbarium'}</span>
              </button>
            </div>

            <p
              className="mt-5 text-base sm:text-lg leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              {currentPlant.shortExcerpt}
            </p>
          </header>

          {/* Origin & Native Habitat */}
          <section
            aria-labelledby="origin-habitat-heading"
            className="border-b py-8"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <h2 id="origin-habitat-heading" className="text-2xl sm:text-3xl">
              Geographic Origin &amp; Natural Habitat
            </h2>

            <div
              className="mt-4 grid grid-cols-1 gap-4 border p-4 sm:grid-cols-2"
              style={{
                borderColor: 'var(--border-hairline)',
                backgroundColor: 'var(--bg-parchment)',
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: 'var(--accent-botanical)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-medium">Native Distribution</h3>
                  <p className="mt-0.5 text-xs sm:text-sm" style={{ color: 'var(--ink-secondary)' }}>
                    {currentPlant.originRegion}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mountain
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: 'var(--accent-botanical)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-medium">Biogeographic Elevation</h3>
                  <p
                    className="mt-0.5 text-xs sm:text-sm tabular-nums"
                    style={{ color: 'var(--ink-secondary)' }}
                  >
                    {currentPlant.nativeElevation}
                  </p>
                </div>
              </div>
            </div>

            <p
              className="mt-5 text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              {currentPlant.habitatNarrative}
            </p>
          </section>

          {/* Botanical Description & Field Observation */}
          <section
            aria-labelledby="morphology-heading"
            className="border-b py-8"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <h2 id="morphology-heading" className="text-2xl sm:text-3xl">
              Botanical Morphology &amp; Foliar Architecture
            </h2>
            <p
              className="mt-4 text-base leading-relaxed prose-measure"
              style={{ color: 'var(--ink-secondary)' }}
            >
              {currentPlant.botanicalDescription}
            </p>

            <div
              className="mt-6 border p-5"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-parchment)',
              }}
            >
              <h3 className="text-lg" style={{ color: 'var(--ink-primary)' }}>
                Glasshouse Curator’s Observation
              </h3>
              <p
                className="mt-1.5 text-sm leading-relaxed"
                style={{ color: 'var(--ink-secondary)' }}
              >
                {currentPlant.fieldObservation}
              </p>
            </div>
          </section>

          {/* Growing Conditions Telemetry Grid */}
          <section
            aria-labelledby="growing-conditions-heading"
            className="border-b py-8"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <h2 id="growing-conditions-heading" className="text-2xl sm:text-3xl">
              Cultivation Parameters &amp; Growing Conditions
            </h2>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-muted)' }}>
              Calibrated environmental targets for long-term indoor conservatory health.
            </p>

            <div
              className="mt-5 grid grid-cols-1 border-t border-l sm:grid-cols-2"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div
                className="border-r border-b p-4"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <div className="flex items-center gap-2">
                  <Sun
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-botanical)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg">Solar Irradiance</h3>
                </div>
                <p
                  className="mt-1 text-sm font-semibold tabular-nums"
                  style={{ color: 'var(--ink-primary)' }}
                >
                  {currentPlant.lightLevel} · {currentPlant.footCandles}
                </p>
              </div>

              <div
                className="border-r border-b p-4"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <div className="flex items-center gap-2">
                  <Droplets
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-botanical)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg">Hydration Rhythm</h3>
                </div>
                <p className="mt-1 text-sm" style={{ color: 'var(--ink-secondary)' }}>
                  {currentPlant.waterCadence}
                </p>
              </div>

              <div
                className="border-r border-b p-4"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <div className="flex items-center gap-2">
                  <Wind
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-botanical)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg">Atmospheric Humidity</h3>
                </div>
                <p
                  className="mt-1 text-sm font-semibold tabular-nums"
                  style={{ color: 'var(--ink-primary)' }}
                >
                  {currentPlant.humidityRange} ({currentPlant.difficulty} Care)
                </p>
              </div>

              <div
                className="border-r border-b p-4"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                <div className="flex items-center gap-2">
                  <Thermometer
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-botanical)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg">Thermal Envelope</h3>
                </div>
                <p
                  className="mt-1 text-sm font-semibold tabular-nums"
                  style={{ color: 'var(--ink-primary)' }}
                >
                  {currentPlant.temperatureRange}
                </p>
              </div>

              <div
                className="border-r border-b p-4 sm:col-span-2"
                style={{
                  borderColor: 'var(--border-hairline)',
                  backgroundColor: 'var(--bg-parchment)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Layers
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-botanical)' }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg">Recommended Substrate Formulation</h3>
                </div>
                <p
                  className="mt-1 text-sm tabular-nums"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {currentPlant.substrateMix}
                </p>
              </div>
            </div>
          </section>

          {/* Expandable Care Notes & Seasonal Protocols */}
          <section aria-labelledby="expandable-care-heading" className="py-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="expandable-care-heading" className="text-2xl sm:text-3xl">
                  Detailed Care Guidance &amp; Protocols
                </h2>
                <p className="mt-1 text-sm" style={{ color: 'var(--ink-muted)' }}>
                  Expand individual sections for physiological care instructions and propagation
                  notes.
                </p>
              </div>

              <button
                type="button"
                onClick={handleToggleAllCare}
                className="btn-press border px-3 py-1.5 text-xs font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  backgroundColor: 'var(--bg-parchment)',
                  color: 'var(--ink-primary)',
                }}
              >
                {allExpanded ? 'Collapse All Notes' : 'Expand All Care Notes'}
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {currentPlant.careNotes.map((note) => {
                const isOpen = openCareIds.includes(note.id);
                const panelId = `care-panel-${note.id}`;
                const triggerId = `care-trigger-${note.id}`;

                return (
                  <div
                    key={note.id}
                    className="border"
                    style={{
                      borderColor: isOpen
                        ? 'var(--border-strong)'
                        : 'var(--border-hairline)',
                      backgroundColor: isOpen ? 'var(--bg-parchment)' : 'var(--bg-paper)',
                    }}
                  >
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        onClick={() => toggleCareSection(note.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="btn-press flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
                      >
                        <div>
                          <span
                            className="block font-editorial text-xl sm:text-2xl"
                            style={{ color: 'var(--ink-primary)' }}
                          >
                            {note.title}
                          </span>
                          <span
                            className="mt-0.5 block font-ui text-xs tabular-nums"
                            style={{ color: 'var(--ink-muted)' }}
                          >
                            {note.seasonOrMetric}
                          </span>
                        </div>
                        <span
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center border"
                          style={{
                            borderColor: 'var(--border-hairline)',
                            backgroundColor: 'var(--bg-paper)',
                          }}
                        >
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        className="border-t px-4 pb-5 pt-4 sm:px-5 text-sm sm:text-base leading-relaxed"
                        style={{
                          borderColor: 'var(--border-hairline)',
                          color: 'var(--ink-secondary)',
                        }}
                      >
                        {note.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </article>

      {/* Related Botanical Specimens Section */}
      <section
        aria-labelledby="related-plants-heading"
        className="mt-12 border-t pt-12"
        style={{ borderColor: 'var(--border-hairline)' }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="related-plants-heading" className="text-3xl">
              Companion &amp; Related Herbarium Taxa
            </h2>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-secondary)' }}>
              Specimens sharing similar conservatory microclimates or taxonomic affinities with{' '}
              <em className="binomial">{currentPlant.scientificName}</em>.
            </p>
          </div>
          <Link
            to="/index"
            className="editorial-link inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: 'var(--ink-primary)' }}
          >
            <span>Return to Full Plant Index</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="mt-6 grid grid-cols-1 border-t border-l sm:grid-cols-3"
          style={{ borderColor: 'var(--border-hairline)' }}
        >
          {relatedPlants.map((rel) => (
            <article
              key={rel.slug}
              className="plate-group flex flex-col justify-between border-r border-b p-5"
              style={{ borderColor: 'var(--border-hairline)' }}
            >
              <div>
                <h3 className="text-2xl">
                  <Link
                    to={`/plants/${rel.slug}`}
                    className="hover:underline"
                    style={{ color: 'var(--ink-primary)' }}
                  >
                    {rel.commonName}
                  </Link>
                </h3>
                <p className="binomial text-sm" style={{ color: 'var(--ink-secondary)' }}>
                  {rel.scientificName} · {rel.family}
                </p>

                <Link
                  to={`/plants/${rel.slug}`}
                  className="plate-frame mt-3 block aspect-[4/5] border"
                  style={{ borderColor: 'var(--border-hairline)' }}
                >
                  <img
                    src={rel.image}
                    alt={rel.commonName}
                    className="plate-image"
                    loading="lazy"
                  />
                </Link>

                <p className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  {rel.shortExcerpt}
                </p>
              </div>

              <div
                className="mt-4 flex items-center justify-between border-t pt-3 text-xs tabular-nums"
                style={{
                  borderColor: 'var(--border-hairline)',
                  color: 'var(--ink-muted)',
                }}
              >
                <span>{rel.lightLevel}</span>
                <Link
                  to={`/plants/${rel.slug}`}
                  className="editorial-link font-semibold"
                  style={{ color: 'var(--ink-primary)' }}
                >
                  Open Profile →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

