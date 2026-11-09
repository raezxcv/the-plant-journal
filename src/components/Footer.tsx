import React from 'react';
import { Link } from 'react-router-dom';
import { NewsletterDispatch } from './NewsletterDispatch';

export const Footer: React.FC = () => {
  return (
    <footer
      className="mt-20 border-t"
      style={{
        backgroundColor: 'var(--bg-canopy)',
        borderColor: 'var(--border-canopy)',
        color: 'var(--canopy-text-primary)',
      }}
    >
      <div className="mx-auto max-w-[1380px] px-4 py-14 sm:px-8 lg:px-12">
        <NewsletterDispatch variant="canopy" idPrefix="footer-dispatch" />

        <div
          className="mt-14 grid grid-cols-1 gap-10 border-t pt-12 md:grid-cols-12"
          style={{ borderColor: 'var(--border-canopy)' }}
        >
          {/* Publication Colophon */}
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl" style={{ color: 'var(--canopy-text-primary)' }}>
              The Plant Journal
            </h2>
            <p
              className="mt-1 font-editorial italic text-base"
              style={{ color: 'var(--canopy-text-muted)' }}
            >
              An Ongoing Study of Things That Grow
            </p>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'var(--canopy-text-secondary)' }}
            >
              Published quarterly as an independent botanical monograph and living digital
              herbarium. Dedicated to plant morphology, conservatory light architecture, and the
              quiet reciprocity between domestic rooms and cultivated flora.
            </p>
            <p
              className="mt-4 text-xs tabular-nums"
              style={{ color: 'var(--canopy-text-muted)' }}
            >
              ISSN 2791-408X · Set in EB Garamond &amp; Source Sans 3 on Warm Rag Ivory (#F6F3EC)
            </p>
          </div>

          {/* Periodical Sections */}
          <div className="md:col-span-3">
            <h3 className="text-lg" style={{ color: 'var(--canopy-text-primary)' }}>
              Periodical Sections
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  I. Issue No. 14 Cover Dispatch
                </Link>
              </li>
              <li>
                <Link
                  to="/index"
                  className="hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  II. 15-Species Taxonomic Index
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/monstera-deliciosa"
                  className="hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  III. Specimen Monographs
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  IV. Long-Form Essays &amp; Masthead
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Herbarium Specimens */}
          <div className="md:col-span-4">
            <h3 className="text-lg" style={{ color: 'var(--canopy-text-primary)' }}>
              Selected Herbarium Accessions
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link
                  to="/plants/monstera-deliciosa"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Monstera deliciosa
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/adiantum-raddianum"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Adiantum raddianum
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/philodendron-gloriosum"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Philodendron gloriosum
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/echinocactus-grusonii"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Echinocactus grusonii
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/goeppertia-orbifolia"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Goeppertia orbifolia
                </Link>
              </li>
              <li>
                <Link
                  to="/plants/olea-europaea"
                  className="binomial hover:underline"
                  style={{ color: 'var(--canopy-text-secondary)' }}
                >
                  Olea europaea
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center"
          style={{
            borderColor: 'var(--border-canopy)',
            color: 'var(--canopy-text-muted)',
          }}
        >
          <span>
            © 2026 The Plant Journal · Independent Botanical Press &amp; Herbarium Archive.
          </span>
          <span className="tabular-nums">
            Taxonomic authorities verified against Royal Botanic Gardens, Kew (POWO).
          </span>
        </div>
      </div>
    </footer>
  );
};

