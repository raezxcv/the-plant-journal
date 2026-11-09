export interface JournalArticle {
  id: string;
  slug: string;
  dispatchCode: string;
  topic: 'Light & Architecture' | 'Propagation' | 'Small-Space Ecology' | 'Botanical Photography' | 'Everyday Botany';
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  publishedSeason: string;
  readingTime: string;
  image: string;
  figureCaption: string;
  summary: string;
  pullQuote: string;
  fieldNote: {
    heading: string;
    metric: string;
    detail: string;
  };
  relatedPlantSlugs: string[];
  paragraphs: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    slug: 'geometry-of-directional-window-light',
    dispatchCode: 'ESSAY I · PHOTOBIOLOGY',
    topic: 'Light & Architecture',
    title: 'The Inverse-Square Law of the Casement Window',
    subtitle:
      'Why human eyes misjudge indoor luminance by an order of magnitude, and how learning to read sky view angle transforms a room into a living conservatory.',
    author: 'Clara Lindqvist',
    authorRole: 'Conservatory Architect & Photobiology Editor',
    publishedSeason: 'Issue No. 14 · Autumn / Winter',
    readingTime: '6 min read',
    image: '/images/greenhouse-interior.jpg',
    figureCaption: 'Plate I — Diffused zenith light filtering through ribbed glass panes in the North Research House, 08:40 AM.',
    summary:
      'Because the human iris adapts logarithmically to dim interiors, a table three meters from a window appears nearly as bright to us as the sill itself—yet a leaf positioned there receives less than a tenth of the photons.',
    pullQuote:
      'To place a plant in a room is to negotiate an architectural treaty between the arc of the sun, the thickness of float glass, and the orientation of a petiole.',
    fieldNote: {
      heading: 'Foot-Candle Decay Across a 4-Meter Study',
      metric: '1,800 fc at glass → 160 fc at 2.5 m interior wall',
      detail:
        'Measured on an overcast November morning with a cosine-corrected quantum sensor facing an unobstructed east sash window.',
    },
    relatedPlantSlugs: ['monstera-deliciosa', 'ficus-lyrata', 'adiantum-raddianum'],
    paragraphs: [
      'Walk from an open courtyard into a white-plastered study at noon and your pupils dilate within fractions of a second. Thanks to the logarithmic sensitivity of the human retina, the interior feels luminous, airy, and evenly lit. Yet if you carry an incident light meter across that same threshold, the numbers drop with startling velocity: from 6,500 foot-candles beneath an overcast sky to 1,100 foot-candles against the interior glass pane, down to 220 foot-candles on a writing desk two meters inland, and barely 45 foot-candles on a bookshelf against the opposite wall.',
      'For a vascular plant—whose chloroplasts count individual photons of photosynthetically active radiation (PAR) rather than perceiving brightness—that two-meter step backward is the difference between a montane cloud forest clearing and the deep floor of a cavern. Light radiating from a finite window aperture obeys a modified inverse-square decay: double the distance from the glass and the available photosynthetic energy falls to roughly one-quarter.',
      'Rather than asking whether a room is "bright," experienced botanical keepers kneel down to the level of the pot and look outward through the leaves. What portion of the celestial dome is actually visible from the lamina? A plant that sees only the brick wall of a neighboring building or the overhang of a balcony receives solely reflected secondary light, whereas a specimen positioned with an unbroken view of the northern sky vault bathes in steady, cool-spectrum diffuse radiation all day.',
      'Observing how plants respond to directional window light reveals a quiet, slow-motion choreography. Within days of placement, the swollen motor joint at the apex of an aroid petiole—the geniculum—redistributes auxin hormones to its shaded flank, lengthening those cells so the leaf blade pivots perpendicular to the glass. Respecting this orientation, rather than endlessly spinning a plant for human symmetry, allows the foliage to settle into a shingle-like mosaic (phyllotactic baffling) where no upper leaf eclipses the sibling beneath it.',
    ],
  },
  {
    id: 'art-02',
    slug: 'anatomy-of-an-adventitious-root',
    dispatchCode: 'ESSAY II · VEGETATIVE PROPAGATION',
    topic: 'Propagation',
    title: 'In Clear Glass: The Quiet Physiology of the Node',
    subtitle:
      'What transpires inside a severed botanical stem between the first clean incision of the scalpel and the emergence of translucent aquatic root hairs.',
    author: 'Dr. Henrik Vance',
    authorRole: 'Plant Morphologist & Herbarium Curator',
    publishedSeason: 'Issue No. 14 · Autumn / Winter',
    readingTime: '7 min read',
    image: '/images/propagation-vessels.jpg',
    figureCaption: 'Plate II — Apothecary glass vessels holding stem cuttings of Pilea peperomioides and Epipremnum aureum on the oak propagation bench.',
    summary:
      'A botanical cutting is an act of cellular dedifferentiation: parenchyma cells near the vascular cambium abandon their former roles to organize an entirely new root apical meristem.',
    pullQuote:
      'Every node along a climbing stem is an archive of totipotency—a dormant blueprint waiting for moisture, darkness, and the wound signal of separation.',
    fieldNote: {
      heading: 'Water-to-Substrate Transition Threshold',
      metric: 'Transfer when primary aquatic roots reach 3–5 cm',
      detail:
        'Waiting until aquatic roots exceed 12 cm delays soil adaptation, as brittle water-formed aerenchyma roots lack the dense root hairs required for bark substrates.',
    },
    relatedPlantSlugs: ['epipremnum-aureum', 'pilea-peperomioides', 'begonia-maculata'],
    paragraphs: [
      'A row of hand-blown glass vessels along a windowsill is the most accessible laboratory in botany. Inside each cylinder of water, suspended just below a leaf node, one can watch the phenomenon of cellular totipotency unfold with the naked eye. Unlike animals, whose differentiated tissues rarely reverse course, a severed plant stem retains living parenchyma cells capable of erasing their prior identity and organizing a de novo root apical meristem.',
      'The sequence begins the moment a sharp, flame-sterilized blade slices cleanly two centimeters below a swollen node. First comes wound sealing: suberin and callose deposit across the severed xylem and phloem vessels to prevent desiccation and microbial entry. Simultaneously, endogenous indole-3-acetic acid (IAA)—the plant’s primary auxin hormone, synthesized in the young leaves above—flows basipetally downward until it pools against the cut boundary.',
      'That localized surge of auxin, concentrated around the nodal vascular ring, awakens dormant pericycle and cambial cells. Within seven to fourteen days in warm, oxygenated water, a pale crystalline nodule ruptures through the epidermis. Under a 10× hand lens, the translucent root cap (calyptra) is clearly visible shielding the dividing meristematic tip as the new adventitious root elongates toward the darker bottom of the vessel.',
      'Crucially, roots formed in liquid water are anatomically distinct from roots formed in airy bark or pumice. Aquatic roots develop large intercellular air canals (aerenchyma) to transport oxygen downward and rarely bother growing microscopic root hairs, since water and dissolved ions surround them on all sides. When moving a rooted cutting from glass into a terracotta pot, do so as soon as the primary roots measure three to five centimeters—and keep the bark-perlite medium evenly moist for the first fortnight while true terrestrial root hairs differentiate.',
    ],
  },
  {
    id: 'art-03',
    slug: 'vertical-conservatory-small-space-gardening',
    dispatchCode: 'ESSAY III · SMALL-SPACE ECOLOGY',
    topic: 'Small-Space Ecology',
    title: 'Microclimates of the Forty-Square-Meter Apartment',
    subtitle:
      'Borrowing canopy stratification from tropical forests to cultivate epiphytes, lithophytes, and understory herbs in compact urban rooms.',
    author: 'Maren Solberg',
    authorRole: 'Horticultural Essayist',
    publishedSeason: 'Issue No. 14 · Autumn / Winter',
    readingTime: '5 min read',
    image: '/images/indoor-conservatory.jpg',
    figureCaption: 'Plate III — Vertical layering of Strelitzia nicolai, mounted Platycerium, and understory Marantaceae in a sunlit apartment study.',
    summary:
      'Small-space gardening succeeds not by crowding floor space with identical pots, but by mapping thermal, evaporative, and vertical strata from floorboards to ceiling molding.',
    pullQuote:
      'In a natural forest, sixteen species occupy a single square meter not by competing on the ground, but by dividing the vertical column of light and moisture.',
    fieldNote: {
      heading: 'Transpirational Guild Grouping',
      metric: '+12% to +16% localized boundary-layer RH',
      detail:
        'Grouping five broad-leaved specimens on a shared cedar tray measurably slows leaf-margin desiccation during winter central-heating cycles.',
    },
    relatedPlantSlugs: ['strelitzia-nicolai', 'platycerium-bifurcatum', 'goeppertia-orbifolia'],
    paragraphs: [
      'The chief constraint of urban indoor gardening is rarely square footage; it is the habit of treating a room as a flat two-dimensional plane. When every plant is placed in a standard nursery pot on the floor or a single low table, five specimens quickly exhaust both the footprints of human passage and the narrow ribbon of window light.',
      'Botanical conservatories and tropical forests solve this geometry through vertical stratification. At the sunlit window threshold stand the architectural heliophytes—a single tall Strelitzia nicolai or container-pruned Olea europaea whose elevated crown intercepts direct solar rays while casting a gentle, dappled penumbra two meters into the room. Directly beneath that living umbrella, where raw sunlight is softened to 400 foot-candles, shade-adapted understory species such as Goeppertia orbifolia and Adiantum raddianum thrive without risk of leaf scorch.',
      'Meanwhile, the vertical plaster walls and timber bookshelves remain open to true epiphytes and lithophytes. Mounting Platycerium bifurcatum on weathered cedar plaques or allowing Epipremnum aureum to ascend a vertical timber batten frees floor space entirely while placing foliage in the warmer, buoyant air currents of the upper room.',
      'When plants are arranged in intentional ecological guilds rather than isolated ornaments, they actively engineer their own microclimate. Through stomatal transpiration, a cluster of broad-leaved aroids and marantas releases water vapor that lingers in a shared boundary layer, buffering delicate unfurling leaves against the arid drafts of winter radiators.',
    ],
  },
  {
    id: 'art-04',
    slug: 'silver-halide-and-chlorophyll-botanical-photography',
    dispatchCode: 'ESSAY IV · VISUAL ARCHIVING',
    topic: 'Botanical Photography',
    title: 'Chlorophyll, Shadow, and the Patient Lens',
    subtitle:
      'Notes on photographing living specimens with natural window light, medium-format optics, and the archival restraint of nineteenth-century cyanotypes.',
    author: 'Julian Mercer',
    authorRole: 'Staff Photographer & Darkroom Archivist',
    publishedSeason: 'Issue No. 14 · Autumn / Winter',
    readingTime: '6 min read',
    image: '/images/botanical-macro-study.jpg',
    figureCaption: 'Plate IV — Oblique morning exposure capturing translucent venation and epidermal texture without artificial strobe.',
    summary:
      'Why artificial ring-lights flatten botanical structure, and how single-source oblique daylight reveals the relief of veins, trichomes, and waxy cuticles.',
    pullQuote:
      'A botanical photograph should never shout for attention; it should hold still long enough for the viewer to count the secondary veins.',
    fieldNote: {
      heading: 'Recommended Optical Setup',
      metric: '85mm–100mm Macro · f/5.6 · Tripod & 1/4s shutter',
      detail:
        'Stopping down to f/5.6 or f/8 on a sturdy tripod preserves crisp detail from the petiole geniculum to the acuminate leaf tip without raising ISO noise.',
    },
    relatedPlantSlugs: ['philodendron-gloriosum', 'echinocactus-grusonii', 'olea-europaea'],
    paragraphs: [
      'Every leaf surface is a topographical landscape in miniature. Some, like Ficus lyrata or Monstera deliciosa, wear a thick, mirror-like epicuticular wax that reflects windows as specular white highlights. Others, like Philodendron gloriosum, are carpeted in microscopic conical papillae that scatter incoming rays into a deep, light-drinking velvet; still others, like Platycerium bifurcatum, scatter light through star-shaped silver trichomes.',
      'When photographed with frontal flash or flat overhead studio strobes, these delicate anatomical distinctions collapse into uniform, plastic green. To document a plant faithfully requires the same directional light by which the plant grows: a single tall north or east window, bordered on the room side by warm lime-washed plaster or an unbleached linen reflector.',
      'By positioning the lens at a forty-five-degree angle to the window axis—sidelighting the lamina—every sunken primary vein casts a hair-thin shadow while translucent secondary veins glow from within via transmitted backlighting. Stopping a 90mm macro lens down to f/5.6 or f/8 on a heavy tripod allows a slow quarter-second exposure after the room’s air currents have settled.',
      'At The Plant Journal, we treat every photographic plate as a continuation of the herbarium tradition begun by Anna Atkins in 1843. We refuse oversaturated digital greens and artificial backgrounds, favoring raw clay, aged cedar, and cotton-rag paper so that the true architecture of the specimen speaks without ornament.',
    ],
  },
  {
    id: 'art-05',
    slug: 'reciprocity-of-tending-everyday-botany',
    dispatchCode: 'ESSAY V · EVERYDAY BOTANY',
    topic: 'Everyday Botany',
    title: 'Biological Time in a Hurried Room',
    subtitle:
      'On the quiet ritual of morning inspection, the patience required by slow-growing wood and frond, and how living plants anchor human attention to seasonal rhythm.',
    author: 'Elena Rostova',
    authorRole: 'Founding Editor-in-Chief',
    publishedSeason: 'Issue No. 14 · Autumn / Winter',
    readingTime: '5 min read',
    image: '/images/botanical-still-life.jpg',
    figureCaption: 'Plate V — Morning worktable with brass secateurs, linen cloth, and field notes before glasshouse rounds.',
    summary:
      'Living with plants asks us to trade instantaneous digital feedback for a slower, biological clock measured in unfurling spears, equinox light shifts, and quiet attentiveness.',
    pullQuote:
      'You cannot hurry a fiddlehead into unrolling; you can only provide water, light, and stillness, and wait for turgor to do its work.',
    fieldNote: {
      heading: 'Phenological Observation Cadence',
      metric: '10 minutes of quiet morning inspection',
      detail:
        'Touching soil moisture with a bare fingertip and checking abaxial leaf surfaces prevents 90% of physiological and pest disorders before they escalate.',
    },
    relatedPlantSlugs: ['monstera-deliciosa', 'jasminum-polyanthum', 'dracaena-trifasciata'],
    paragraphs: [
      'Most objects in a contemporary home exist in a state of static completion. A chair, a ceramic lamp, or a printed book asks nothing of us between uses other than occasional dusting, and looks identical in November as it did in May. A living plant, by contrast, is not an object at all—it is an ongoing physiological process unfolding in slow motion.',
      'To share a study or conservatory with fifteen botanical species is to apprentice oneself to biological time. In April, as the solar altitude climbs and day length crosses twelve hours, dormant apical meristems swell overnight: a tightly furled spear rises from the center of Strelitzia nicolai, translucent chartreuse croziers uncoil from the dark rhizome of Adiantum raddianum, and silver-dusted shoots twine upward from Jasminum polyanthum.',
      'Then comes November, when low-angle sunbeams slant briefly across the floorboards and growth settles into quiet maintenance. The attentive keeper learns not to force summer fertilizer onto resting roots, but instead to wipe accumulated house dust from broad Ficus leaves with a damp linen cloth and test the weight of each terracotta pot by hand.',
      'This daily ten-minute ritual—kettle warming in the kitchen while you inspect a glass propagation beaker for its first white root hair or remove a single senescent yellow leaf at the base of a Peace Lily—restores a tactile reciprocity with the natural world. In tending things that grow, we steady our own attention.',
    ],
  },
];

export interface SeasonalNote {
  season: string;
  solarDeclination: string;
  photoperiod: string;
  focusTitle: string;
  botanicalGuidance: string;
  prioritySpecies: string;
  prioritySlug: string;
}

export const SEASONAL_PHENOLOGY: SeasonalNote[] = [
  {
    season: 'Autumn Equinox → Late Autumn',
    solarDeclination: 'Low Oblique Solar Angle · Decreasing PAR',
    photoperiod: '10h 15m → 8h 40m daylight',
    focusTitle: 'Vernalization & Irrigation Tapering',
    botanicalGuidance:
      'As daylight contracts and evapotranspiration slows by nearly 40%, extend intervals between waterings across all aroids and succulents. Expose Jasminum polyanthum to cool 10°C autumn nights to initiate winter floral primordia.',
    prioritySpecies: 'Jasminum polyanthum',
    prioritySlug: 'jasminum-polyanthum',
  },
  {
    season: 'Winter Solstice Conservatory Rest',
    solarDeclination: 'Minimum Solar Altitude · Dry Heating Air',
    photoperiod: '7h 50m → 9h 10m daylight',
    focusTitle: 'Cuticle Hygiene & Vapor Pressure Balance',
    botanicalGuidance:
      'Suspend nitrogen fertilization during winter dormancy. Group broad-leaved Marantaceae and ferns away from radiator currents, wipe Ficus blades with damp linen to maximize scarce photon capture, and keep Echinocactus completely dry.',
    prioritySpecies: 'Echinocactus grusonii',
    prioritySlug: 'echinocactus-grusonii',
  },
  {
    season: 'Vernal Equinox Awakening',
    solarDeclination: 'Rapidly Ascending Solar Arc',
    photoperiod: '12h 00m → 14h 30m daylight',
    focusTitle: 'Substrate Renewal & Rhizome Division',
    botanicalGuidance:
      'The optimal window for repotting root-bound specimens into fresh bark-pumice matrices. As cambial activity surges, take single-node stem cuttings and divide crowded crowns of Spathiphyllum and Pilea.',
    prioritySpecies: 'Monstera deliciosa',
    prioritySlug: 'monstera-deliciosa',
  },
  {
    season: 'Summer Canopy Expansion',
    solarDeclination: 'Peak Zenith Irradiance',
    photoperiod: '15h 30m → 13h 45m daylight',
    focusTitle: 'Deep Drench Cycles & Shear Diffusion',
    botanicalGuidance:
      'Filter harsh midday south-west sun with sheer unbleached linen to protect velvety Philodendron gloriosum and maidenhair fronds from photo-oxidation while providing deep, oxygenated root soakings.',
    prioritySpecies: 'Philodendron gloriosum',
    prioritySlug: 'philodendron-gloriosum',
  },
];

