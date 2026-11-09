# Project 16 — The Plant Journal: An Ongoing Study of Things That Grow

An independent botanical publication and digital herbarium documenting cultivated flora, glasshouse architecture, indoor greenery, and the quiet reciprocity between people and nature.

## Architecture & Four Pages

1. **Home (`/`) — Issue No. 14 Cover Dispatch**:
   - Asymmetric Victorian glasshouse monograph hero (`greenhouse-hero.jpg`).
   - Lead botanical story (*The Quiet Reciprocity of Foliar Care* on *Ficus lyrata* stomatal hygiene).
   - Recent Herbarium Accessions (6 annotated specimens with binomial nomenclature, family, light, difficulty, and bookmarking).
   - Interactive Seasonal Phenology & Conservatory Almanac (4 equinox/solstice quarters with photoperiod and indicator species).
   - Publication Introduction & Archival Standards.
2. **Plant Index (`/index`) — 15-Species Herbarium & Taxonomic Ledger**:
   - Complete index of 15 botanical species across 11 plant families (*Araceae*, *Pteridaceae*, *Moraceae*, *Cactaceae*, *Polypodiaceae*, *Oleaceae*, *Begoniaceae*, *Urticaceae*, *Strelitziaceae*, *Marantaceae*, *Asparagaceae*).
   - Live search across common name, scientific binomial, family, origin, and accession code.
   - Category filters (`Tropical Foliage`, `Ferns & Epiphytes`, `Flowering & Bracts`, `Arid & Sculptural`, `Woody & Conservatory`), Light Regime filter, Cultivation Difficulty filter, and Saved Herbarium filter.
   - Switchable view modes: **Specimen Plates Grid** (with inline expandable curator observations) and **Taxonomic Archive Ledger** (comparison table).
3. **Botanical Profile (`/plants/:slug`) — Specimen Monographs**:
   - Framed natural-light botanical photography with figure captions and accession stamps.
   - Complete Taxonomic Classification Ledger (Binomial name, Authority, Family, Order, Scale, Biochemistry/Safety note).
   - Geographic Origin, Native Elevation, Natural Habitat narrative, and Morphological description.
   - Calibrated Growing Conditions telemetry (foot-candles/lux, hydration rhythm, relative humidity, thermal envelope, substrate recipe).
   - Expandable Care Guidance protocols (4 physiological sections per specimen, plus Expand/Collapse All).
   - Local Personal Herbarium Bench Note pad (`localStorage` persistence) and Companion/Related Taxa links.
4. **Journal & About (`/journal`) — Original Essays & Masthead**:
   - Five original long-form botanical essays covering directional window light, vegetative propagation in glass, small-space vertical conservatory ecology, medium-format botanical photography, and everyday botany.
   - Interactive **Window Irradiance & Placement Guide** (calculates estimated foot-candles and recommends compatible species by compass aspect and distance from glass).
   - Publication philosophy, archival standards, and editorial masthead.

## Technical Stack

- **React 19** + **TypeScript**
- **Vite 6** + **Tailwind CSS v4**
- **React Router v7**
- **Lucide Icons**

## Development & Build

```bash
npm install
npm run dev
npm run lint
npm run build
```

