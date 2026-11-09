# DESIGN.md — The Plant Journal: Art Direction & Design System

## 1. Skill Orchestration Plan

| Installed Skill Name | Intended Responsibility | Phase Used | Expected Contribution |
| :--- | :--- | :--- | :--- |
| `impeccable` | Editorial art direction, typography discipline, spatial rhythm, and anti-AI-slop craft floor enforcement | Phase 1 (Art Direction), Phase 3 (Frontend Build), Phase 5 (QA & Detector Audit) | Establishes print-inspired hierarchy, bans generic card-grid/eyebrow clichés, enforces contrast and browser-surface theming |
| `emil-design-eng` | Restrained motion architecture, custom cubic-bezier easing, clip-path reveals, and tactile button feedback | Phase 3 (Frontend Build) & Phase 4 (Motion Polish) | Ensures UI transitions stay fast (<250ms), uses `cubic-bezier(0.23, 1, 0.32, 1)`, avoids `scale(0)` entries, and respects `prefers-reduced-motion` |
| `accessibility` | Semantic HTML5 landmarks, WCAG 2.2 AA contrast, keyboard navigation, ARIA states, and focus visibility | Phase 3 (Frontend Build) & Phase 5 (QA) | Ensures every filter, search input, expandable care drawer, and route transition works cleanly with keyboard and assistive tech |
| `chrome-devtools` | Live browser inspection across 375px, 390px, 768px, 1024px, and 1440px viewports, plus console verification | Phase 5 (Quality Assurance) | Verifies layout integrity, image loading, interactive states, and zero console/runtime errors |

---

## 2. Concept, Personality & Emotional Objective

- **Concept**: A contemporary botanical field guide and herbarium archive merged with an independent nature periodical.
- **Brand Personality**: Observant, unhurried, scholarly yet warm, tactile, and rooted in natural history.
- **Emotional Objective**: Evoke the sensation of stepping into a quiet, humid Victorian glasshouse on an overcast morning with an uncoated cotton-rag notebook in hand—calm contemplation and curiosity for living structure.
- **Visual References & Principles**:
  1. **19th-Century Herbarium Sheets** (Royal Botanic Gardens, Kew & Muséum National d'Histoire Naturelle): Hairline rules (`1px solid`), stamped accession numbers, binomial Latin nomenclature in italics, specimen metadata tables at the bottom corner of plates.
  2. **Independent Print Periodicals** (*Cereal*, *Apartamento*, *The Gourmand*): Asymmetric editorial columns, generous uncoated paper margins, deep forest ink, and uncropped photographic plates with figure captions (`Fig. 01 — ...`).
  3. **Architectural Conservatory Blueprints**: Structured specification tables for light foot-candles, relative humidity percentages, and soil substrate ratios.

---

## 3. Color Palette (Warm Paper Ivory & Deep Botanical Ink)

All secondary colors are tinted from our warm paper and chlorophyll spectrum—never neutral mechanical gray.

| Token | Role | HEX | Usage & Contrast Notes |
| :--- | :--- | :--- | :--- |
| `--bg-paper` | Warm Paper Ivory (Primary Ground) | `#F6F3EC` | Uncoated cotton rag page background |
| `--bg-parchment` | Pressed Herbarium Sheet (Secondary Surface) | `#EDE8DC` | Specimen cards, index ledger panels, sidebars |
| `--bg-linen` | Aged Linen Tint (Tertiary / Interactive Hover) | `#E3DDD0` | Table headers, filter wells, subtle surface shifts |
| `--bg-canopy` | Deep Botanical Green (Dark Editorial Surface) | `#1B2A21` | Full-bleed monograph callouts, footer colophon, dark specimen plates |
| `--ink-primary` | Deep Forest Charcoal (Primary Text) | `#16211A` | Headings and primary editorial copy (14.2:1 on `#F6F3EC`) |
| `--ink-secondary` | Loam & Bark Brown (Secondary Text) | `#433E37` | Body prose, descriptions, metadata values (9.4:1 on `#F6F3EC`) |
| `--ink-muted` | Dry Moss & Earth (Captions & Taxonomic Labels) | `#5C574E` | Figure captions, specimen codes, secondary notes (6.2:1 on `#F6F3EC`) |
| `--accent-botanical` | Chlorophyll Green (Primary Accent) | `#284734` | Active states, primary actions, interactive links |
| `--accent-sage` | Muted Sage (Secondary Accent / Tags) | `#6F8271` | Botanical family indicators, foliage graphics, borders |
| `--accent-terracotta` | Clay Pot & Terracotta (Warm Earth Accent) | `#8C4A32` | Bookmark indicator, flowering/arid specimen markers |
| `--border-hairline` | Herbarium Rule | `#D5CEBF` | 1px editorial column dividers and specimen table borders |

---

## 4. Typography Pairings & Scale

We deliberately avoid overused AI default fonts and select faces rooted in literary botanical publishing:
- **Editorial Display & Body Serif**: `'EB Garamond', Georgia, serif`
  - Used for essay headlines, narrative body paragraphs, pull quotes, and italic scientific binomial names (`*Monstera deliciosa*`).
  - Line measure constrained to `65ch–72ch` for optimal long-form reading.
  - Headings use `letter-spacing: -0.02em`, `line-height: 1.12`, and `text-wrap: balance`.
- **Neutral Editorial Sans-Serif**: `'Source Sans 3', system-ui, sans-serif`
  - Used for navigation, taxonomic metadata tables, filter controls, care metrics, and UI labels.
  - Numerals use `font-variant-numeric: tabular-nums` for specimen numbers, humidity ranges, and issue dates.

---

## 5. Grid, Spacing & Layout Logic

- **Container & Columns**: 12-column editorial grid (`max-width: 1380px`, `padding: clamp(1.25rem, 4vw, 3.5rem)`), separated by visible `1px solid var(--border-hairline)` hairlines where appropriate to echo bound herbarium ledgers.
- **No Generic Card Grids**: Each page uses a distinct layout grammar:
  - **Home**: Asymmetric magazine spread (7-column glasshouse plate paired with 5-column lead monograph dispatch), followed by a 3-column unequal herbarium ledger and a dark-canopy seasonal phenology study.
  - **Plant Index**: Switchable between an **Annotated Herbarium Specimen Grid** (varying aspect ratios, accession stamps, binomial italics, quick care bars) and a **Taxonomic Archive Table** (sortable/filterable multi-column botanical ledger).
  - **Botanical Profile**: Split sticky plate-and-monograph layout on desktop (left column holds framed specimen plate, morphological scale data, and origin telemetry; right column flows through habitat history, cultivation architecture, and expandable seasonal care protocols).
  - **Journal & About**: Multi-column literary reader with interactive full-article reading pane, marginalia notes, photographic field notes, and the publication masthead/colophon.

---

## 6. Motion Principles

- **Restrained & Purposeful**: Motion evokes turning heavy rag paper pages and natural phototropism (leaves orienting toward light).
- **Custom Easing**: `--ease-out-quart: cubic-bezier(0.23, 1, 0.32, 1)` for UI transitions (160ms–220ms) and `--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1)` for image plate reveals (500ms).
- **Tactile Feedback**: Pressable buttons respond with `transform: scale(0.98)` on `:active`.
- **Reduced Motion**: Full `@media (prefers-reduced-motion: reduce)` support disables movement transforms while preserving gentle opacity crossfades.

---

## 7. Original Image Art Direction (16 Photographs)

Every image is custom-generated with natural daylight, realistic plant anatomy, medium-format film grain texture, and zero embedded fake text or UI:

1. `greenhouse-hero.png` — **Greenhouse Hero**: Sunlight filtering through misted iron-and-glass Victorian conservatory roof onto lush tropical palms and tree ferns; eye-level wide architectural composition; 35mm medium format lens; warm morning sunbeams; muted emerald & warm ivory grading; 16:10 aspect ratio; Home page main hero plate.
2. `monstera-leaf.png` — **Monstera Leaf**: Mature fenestrated *Monstera deliciosa* leaf catching side window light against warm lime-washed plaster wall; tight 3/4 macro portrait; 85mm prime lens f/2.8; directional side chiaroscuro; deep chlorophyll green & parchment shadows; 4:5 aspect ratio; Plant Index & Botanical Profile (`monstera-deliciosa`).
3. `fern-frond.png` — **Fern**: Unfurling fiddlehead and delicate pinnae of *Adiantum raddianum* (Delta Maidenhair Fern) with fine water droplets; close-up oblique angle; 90mm macro lens; soft diffused northern skylight; sage, chartreuse, and dark stem black; 4:5 aspect ratio; Plant Index & Botanical Profile (`adiantum-raddianum`).
4. `tropical-foliage.png` — **Tropical Foliage**: Velvety dark green leaves of *Philodendron gloriosum* with pale ivory venation in a terracotta pot; 45-degree botanical study angle; 50mm standard lens; dappled conservatory shade; rich emerald and warm clay tones; 4:5 aspect ratio; Plant Index & Botanical Profile (`philodendron-gloriosum`).
5. `flowering-plant.png` — **Flowering Plant**: Sculptural white spathe and spadix of *Spathiphyllum wallisii* (Peace Lily) and *Anthurium* amidst glossy dark foliage; eye-level botanical portrait; 85mm lens; soft side daylight; creamy white, forest green, ochre pollen tones; 4:5 aspect ratio; Plant Index & Botanical Profile (`spathiphyllum-wallisii`).
6. `cactus-specimen.png` — **Cactus**: Architectural blue-green ribs and golden spines of *Echinocactus grusonii* and *Opuntia* in mineral gravel; straight-on specimen portrait; 65mm macro lens; crisp high-altitude desert morning sun; glaucous sage-blue, ochre, warm sand; 4:5 aspect ratio; Plant Index & Botanical Profile (`echinocactus-grusonii`).
7. `botanical-still-life.png` — **Botanical Still Life**: Linen-covered worktable with brass secateurs, unglazed stoneware vessel, clipped eucalyptus and olive branch, and handmade paper notebook; overhead 30-degree editorial still life; 50mm lens; warm late-afternoon window light; earth brown, linen ivory, muted sage; 16:10 aspect ratio; Home page editorial intro & About masthead.
8. `tending-plants.png` — **Person Caring for Plants**: Hands of a botanist gently wiping dust from a large *Ficus lyrata* (Fiddle-Leaf Fig) leaf with a damp linen cloth near a tall wooden sash window; intimate medium close-up on hands and foliage; 50mm f/2.0 lens; natural backlit morning glow; warm skin tones, deep leaf green, soft ivory; 4:5 aspect ratio; Home featured story & *Ficus lyrata* profile.
9. `greenhouse-interior.png` — **Greenhouse Interior**: Long aisle of a historic botanical research glasshouse with weathered cedar benches, terracotta pots, and hanging epiphytes (*Platycerium bifurcatum* Staghorn Fern); one-point perspective down the damp stone aisle; 28mm wide-angle lens; overcast diffused sky glow; aged cedar brown, moss green, misty gray-ivory; 16:9 aspect ratio; Journal feature essay & *Platycerium bifurcatum* profile.
10. `aquatic-roots.png` — **Roots**: Translucent white and pale tan adventitious roots of *Epipremnum aureum* and *Monstera* suspended in clear hand-blown apothecary glass cylinder on a wooden sill; eye-level macro through glass; 100mm macro lens; backlit window sunlight refracting through water; amber, crystal clear, warm parchment, emerald stem; 4:5 aspect ratio; Propagation essay & *Epipremnum aureum* profile.
11. `morning-garden.png` — **Garden in Morning Light**: Walled botanical courtyard garden with dew-covered hostas, Japanese forest grass, and climbing *Jasminum polyanthum* in golden early-morning mist; low-angle garden path view; 35mm lens; golden hour side light; mossy green, morning gold, damp slate; 16:10 aspect ratio; Seasonal journal & *Jasminum polyanthum* profile.
12. `pressed-herbarium.png` — **Pressed Flowers**: Dried and pressed botanical specimens of *Begonia maculata* and wild ferns mounted with linen tape on cream cotton herbarium paper; flat-lay top-down archival photograph; 50mm macro copy lens; even studio daylight; antique ivory, dried sienna, muted olive; 4:5 aspect ratio; Herbarium archive section & *Begonia maculata* profile.
13. `propagation-vessels.png` — **Propagation Setup**: Row of amber and clear laboratory glass beakers holding node cuttings of *Pilea peperomioides* and *Tradescantia* on an oak workbench; slight high-angle three-quarter view; 50mm lens; bright morning studio window light; warm amber glass, fresh chlorophyll green, pale oak; 16:9 aspect ratio; Journal propagation article & *Pilea peperomioides* profile.
14. `indoor-conservatory.png` — **Indoor Garden**: Sunlit high-ceilinged apartment study with a mature *Strelitzia nicolai* (Bird of Paradise), *Calathea orbifolia*, and timber bookshelves; eye-level interior architectural shot; 35mm lens; soft afternoon sun casting slatted shadows; warm plaster ivory, walnut brown, vibrant foliage green; 16:10 aspect ratio; Journal small-space gardening essay & *Strelitzia nicolai* profile.
15. `calathea-foliage.png` — **Calathea Orbifolia Macro**: Broad pleated round leaves of *Goeppertia orbifolia* (*Calathea orbifolia*) showing metallic silver-sage banding in soft humid shade; close-up 45-degree foliage portrait; 85mm macro lens; diffused rainforest canopy light; silver-sage, deep pine, warm earth; 4:5 aspect ratio; Plant Index & Botanical Profile (`goeppertia-orbifolia`).
16. `olive-specimen.png` — **Mediterranean & Arid Specimens**: Silvery-sage lance-shaped leaves and gnarled trunk of a potted *Olea europaea* (European Olive) alongside *Sansevieria* / *Dracaena trifasciata* and *Zamioculcas zamiifolia* in raw clay; eye-level portrait against limestone wall; 50mm lens; warm Mediterranean sunlight; dusty sage, limestone cream, terracotta; 4:5 aspect ratio; Plant Index & Botanical Profiles (`olea-europaea`, `dracaena-trifasciata`, `zamioculcas-zamiifolia`, `alocasia-amazonica`, `hoya-carnosa`).

