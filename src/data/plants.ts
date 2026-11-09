export type PlantCategory =
  | 'Tropical Foliage'
  | 'Ferns & Epiphytes'
  | 'Flowering & Bracts'
  | 'Arid & Sculptural'
  | 'Woody & Conservatory';

export type DifficultyLevel = 'Approachable' | 'Attentive' | 'Specialist';

export type LightProfile = 'Bright Indirect' | 'Dappled Shade' | 'Direct Morning Sun';

export interface CareNoteSection {
  id: string;
  title: string;
  seasonOrMetric: string;
  body: string;
}

export interface PlantSpecimen {
  id: string;
  slug: string;
  accessionNumber: string;
  commonName: string;
  scientificName: string;
  taxonomicAuthority: string;
  family: string;
  order: string;
  category: PlantCategory;
  difficulty: DifficultyLevel;
  lightLevel: LightProfile;
  footCandles: string;
  waterCadence: string;
  humidityRange: string;
  temperatureRange: string;
  substrateMix: string;
  matureDimensions: string;
  toxicityNote: string;
  originRegion: string;
  nativeElevation: string;
  image: string;
  figureCaption: string;
  shortExcerpt: string;
  habitatNarrative: string;
  botanicalDescription: string;
  fieldObservation: string;
  careNotes: CareNoteSection[];
  relatedSlugs: string[];
}

export const PLANT_CATEGORIES: PlantCategory[] = [
  'Tropical Foliage',
  'Ferns & Epiphytes',
  'Flowering & Bracts',
  'Arid & Sculptural',
  'Woody & Conservatory',
];

export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  'Approachable',
  'Attentive',
  'Specialist',
];

export const LIGHT_PROFILES: LightProfile[] = [
  'Bright Indirect',
  'Dappled Shade',
  'Direct Morning Sun',
];

export const PLANT_SPECIMENS: PlantSpecimen[] = [
  {
    id: '01',
    slug: 'monstera-deliciosa',
    accessionNumber: 'HERB-14-001',
    commonName: 'Swiss Cheese Vine',
    scientificName: 'Monstera deliciosa',
    taxonomicAuthority: 'Liebm. (1849)',
    family: 'Araceae',
    order: 'Alismatales',
    category: 'Tropical Foliage',
    difficulty: 'Approachable',
    lightLevel: 'Bright Indirect',
    footCandles: '400 – 1,000 fc (4,300 – 10,700 lux)',
    waterCadence: 'Every 9–12 days; allow top 5 cm of substrate to dry',
    humidityRange: '55% – 75% RH',
    temperatureRange: '18°C – 29°C (65°F – 85°F)',
    substrateMix: '40% coarse pine bark, 30% coco coir, 20% pumice, 10% worm castings',
    matureDimensions: '1.8 – 3.0 m indoor height; leaf blades to 65 cm',
    toxicityNote: 'Contains insoluble calcium oxalate raphides; keep away from grazing pets',
    originRegion: 'Southern Mexico (Oaxaca, Chiapas) south to Panama',
    nativeElevation: '200 – 1,500 m in humid montane cloud forests',
    image: '/images/monstera-leaf.jpg',
    figureCaption: 'Fig. 01 — Mature fenestrated lamina of Monstera deliciosa photographed in oblique east window light.',
    shortExcerpt:
      'A hemiepiphytic aroid whose juvenile cordate leaves develop deep lateral perforations (fenestrations) to withstand tropical wind shear and allow sunflecks to reach lower foliage.',
    habitatNarrative:
      'In the premontane wet forests of Oaxaca and Veracruz, Monstera deliciosa germinates on the dark forest floor as a slender, skototropic vine—growing purposefully toward the darkest silhouette on the horizon, which almost invariably belongs to the trunk of a mature canopy tree. Once its clasping feeder roots anchor to rough bark, the stem thickens and ascends into dappled light, shifting abruptly from small, entire juvenile leaves to deeply incised, perforated blades.',
    botanicalDescription:
      'Stout, herbaceous climbing stem with prominent internodal scars and thick, corky adventitious aerial roots. Petioles reach 30 to 90 cm in length, grooved along the adaxial surface with a persistent geniculum (pulvinus) at the blade junction that rotates the lamina toward prevailing light. Mature blades are coriaceous, glossy dark green, ovate-cordate, and pinnatifid with oblong-elliptic perforations along the midrib.',
    fieldObservation:
      'When grown indoors without a vertical moss or cedar totem, internodes elongate and fenestrations regress. Engaging the aerial roots with damp sphagnum moss immediately restores larger leaf ontogeny.',
    careNotes: [
      {
        id: 'hydration',
        title: 'Hydration & Root Oxygenation',
        seasonOrMetric: 'pH 5.8 – 6.5 · Deep drench cycle',
        body: 'As a hemiepiphyte, Monstera deliciosa resents waterlogged fine peat that suffocates its thick velamen-coated roots. Irrigate thoroughly with tepid water until 15% drains freely from the vessel base, then wait until the upper third of the bark-rich medium feels dry to the knuckle. Early morning guttation droplets along leaf margins indicate excess root zone turgor.',
      },
      {
        id: 'light',
        title: 'Phototropism & Window Orientation',
        seasonOrMetric: 'East or filtered South exposure',
        body: 'Notice how the geniculum—the wrinkled joint where petiole meets blade—slowly articulates over days to face the window pane. Rather than rotating the pot weekly (which forces the plant to twist its petioles into knotted postures), stake the dorsal stem against the back of the pot and face the foliage permanently toward the primary light source.',
      },
      {
        id: 'substrate',
        title: 'Epiphytic Aroid Substrate Architecture',
        seasonOrMetric: 'Repot every 24 months in Spring',
        body: 'Standard commercial potting soil compacts within six months, starving roots of oxygen. Blend orchid-grade Douglas fir bark, chunky horticultural perlite or pumice, and fibrous coco chips so water cascades rapidly through the pot while leaving humid air pockets around root hairs.',
      },
      {
        id: 'propagation',
        title: 'Single-Node Stem Division',
        seasonOrMetric: 'Late Spring to Mid-Summer',
        body: 'Sever a mature stem section 2 cm below a swollen node bearing an aerial root primordium using a flame-sterilized blade. Callus the cut in dry shade for two hours, then root in aerated water or damp long-fiber New Zealand sphagnum moss at 22°C.',
      },
    ],
    relatedSlugs: ['philodendron-gloriosum', 'epipremnum-aureum', 'strelitzia-nicolai'],
  },
  {
    id: '02',
    slug: 'adiantum-raddianum',
    accessionNumber: 'HERB-14-002',
    commonName: 'Delta Maidenhair Fern',
    scientificName: 'Adiantum raddianum',
    taxonomicAuthority: 'C.Presl (1836)',
    family: 'Pteridaceae',
    order: 'Polypodiales',
    category: 'Ferns & Epiphytes',
    difficulty: 'Specialist',
    lightLevel: 'Dappled Shade',
    footCandles: '200 – 450 fc (2,150 – 4,800 lux)',
    waterCadence: 'Every 3–5 days; maintain constant, even sponge-like moisture',
    humidityRange: '65% – 85% RH',
    temperatureRange: '16°C – 24°C (60°F – 75°F)',
    substrateMix: '50% fine leaf mold / coco peat, 25% fine perlite, 15% Horticultural charcoal, 10% crushed limestone',
    matureDimensions: '35 – 55 cm arching frond spread',
    toxicityNote: 'Non-toxic to domestic animals and humans',
    originRegion: 'Tropical South America (Andean foothills of Peru, Brazil, and Venezuela)',
    nativeElevation: '400 – 1,800 m on shaded wet limestone seeps',
    image: '/images/fern-frond.jpg',
    figureCaption: 'Fig. 02 — Hydrophobic fan-shaped pinnules and lustrous dark rachis of Adiantum raddianum.',
    shortExcerpt:
      'Celebrated for its hair-thin, ebony-black stipes and translucent cuneate pinnules that shed water droplets without wetting—the Greek root adiantos literally meaning "unwetted."',
    habitatNarrative:
      'Adiantum raddianum colonizes shaded travertine cliffs, waterfall spray zones, and mossy limestone boulders across the Neotropics. Its roots creep through thin, mineral-rich humus where water is perpetually moving and oxygenated, while the canopy overhead filters tropical sunlight into a cool, emerald twilight.',
    botanicalDescription:
      'Short-creeping, scaly rhizome giving rise to densely clustered, tripinnate to quadripinnate arching fronds. Stipes and rachises are terete, wiry, and polished dark chestnut-black. Ultimate segments (pinnules) are fan-shaped (flabellate) on hair-like stalks, pale chartreuse when unfurling from croziers and maturing to soft glaucous green, with discrete reniform false indusia folded under the outer lobe margins.',
    fieldObservation:
      'Because its pinnules are only two cell layers thick and lack a heavy waxy cuticle, a single afternoon in dry radiator drafts will irreversibly crisp the current flush. However, the subterranean rhizome remains viable and will send up fresh fiddleheads within fourteen days if cut back and kept moist.',
    careNotes: [
      {
        id: 'hydration',
        title: 'Continuous Capillary Moisture',
        seasonOrMetric: 'Never allow root ball to desiccate',
        body: 'Unlike aroids that tolerate drying cycles, Adiantum raddianum possesses no water-storage organs in its blades. Keep the root zone evenly damp—similar to a wrung-out natural sponge. Sub-irrigation via a glazed ceramic saucer or self-watering wick pot prevents fatal mid-week drying.',
      },
      {
        id: 'light',
        title: 'Luminous North Sky Exposure',
        seasonOrMetric: 'Zero direct mid-day solar radiation',
        body: 'Position within 1 meter of an unobstructed north-facing window or set back from an east exposure behind sheer linen curtains. Direct sun bleaches chlorophyll rapidly, whereas deep interior corners cause sparse, etiolated fronds.',
      },
      {
        id: 'substrate',
        title: 'Calcareous Humus & Drainage',
        seasonOrMetric: 'Neutral to slightly alkaline pH 6.8 – 7.4',
        body: 'Being native to wet limestone walls, Maidenhair ferns appreciate a pinch of dolomitic lime or crushed oyster shell mixed into a moisture-retentive leaf-mold and fine pumice medium.',
      },
      {
        id: 'revival',
        title: 'Rhizome Renewal Protocol',
        seasonOrMetric: 'Performed after accidental drought stress',
        body: 'If fronds desiccate during travel or winter heating, shear all crisped stipes cleanly to 1 cm above the crown with sharp snips, keep the pot warm and moist under a glass cloche, and watch new emerald croziers emerge from the scaly rhizome.',
      },
    ],
    relatedSlugs: ['platycerium-bifurcatum', 'goeppertia-orbifolia', 'begonia-maculata'],
  },
  {
    id: '03',
    slug: 'philodendron-gloriosum',
    accessionNumber: 'HERB-14-003',
    commonName: 'Velvet Creeping Philodendron',
    scientificName: 'Philodendron gloriosum',
    taxonomicAuthority: 'André (1876)',
    family: 'Araceae',
    order: 'Alismatales',
    category: 'Tropical Foliage',
    difficulty: 'Attentive',
    lightLevel: 'Dappled Shade',
    footCandles: '300 – 700 fc (3,200 – 7,500 lux)',
    waterCadence: 'Every 8–10 days; keep rhizome surface dry and aerated',
    humidityRange: '60% – 80% RH',
    temperatureRange: '19°C – 28°C (66°F – 82°F)',
    substrateMix: '45% medium orchid bark, 25% perlite, 20% coco coir, 10% horticultural charcoal',
    matureDimensions: 'Horizontal rhizome 60 – 90 cm; cordate blades to 50 cm',
    toxicityNote: 'Contains calcium oxalate crystals in all tissues',
    originRegion: 'Colombia (Eastern Cordillera and Meta watershed)',
    nativeElevation: '300 – 1,200 m on shaded forest floor litter',
    image: '/images/tropical-foliage.jpg',
    figureCaption: 'Fig. 03 — Cordate-velutinous leaf blade of Philodendron gloriosum showing ivory midrib and primary lateral veins.',
    shortExcerpt:
      'A terrestrial crawler from Colombia whose thick prostrate stem creeps horizontally across forest leaf litter, sending up heart-shaped emerald velvet blades traced with crystalline ivory venation.',
    habitatNarrative:
      'Collected and described by French botanist Édouard François André in 1876 during his expedition through the Colombian Andes, Philodendron gloriosum is not a climber. Instead, its stout green-to-brown rhizome marches horizontally along the forest floor, rooting solely from its ventral underside while holding great velvety parasols aloft on rigid D-shaped petioles.',
    botanicalDescription:
      'Terrestrial creeping herb with a thick, prostrate rhizomatous stem (2.5–4 cm diameter) clothed in papery reddish-brown cataphyll remnants that weather into fibrous sheaths. Petioles erect, 40–75 cm long, flattened adaxially with pale longitudinal striation. Leaf blades broadly ovate-cordate with deep, rounded basal lobes (sinus parabolic), adaxial surface epidermal cells papillose (producing a deep velvety sheen), dark bottle-green contrasted by prominent pale ivory-to-rose midrib and primary lateral veins.',
    fieldObservation:
      'Planting Philodendron gloriosum in a round pot causes the creeping stem to collide with the pot rim within three leaves. Always house it in a long rectangular trough ("crawler planter") with the rhizome resting wholly above the bark line.',
    careNotes: [
      {
        id: 'rhizome',
        title: 'Horizontal Trough Cultivation',
        seasonOrMetric: 'Rectangular vessel · Unburied rhizome',
        body: 'Position the older end of the rhizome against the back wall of a shallow, wide rectangular planter so the growing apex has 25–35 cm of uninterrupted runway. Never bury the green creeping stem beneath substrate; only the feeder roots emerging from its belly should penetrate the mix.',
      },
      {
        id: 'light',
        title: 'Papillose Epidermis & Shade Adaptation',
        seasonOrMetric: '350 – 600 fc diffused light',
        body: 'The microscopic cone-shaped epidermal cells that give the leaf its velvet texture act as biological lenses to focus weak understory light onto chloroplasts. Direct afternoon sun will scorch these delicate cells into bronze patches.',
      },
      {
        id: 'foliar',
        title: 'Dry-Leaf Humidity Management',
        seasonOrMetric: 'Evaporative humidity without misting',
        body: 'Standing water droplets trapped on velvety leaves invite bacterial leaf spot (Erwinia). Elevate ambient room humidity with an evaporative humidifier and gentle air circulation rather than foliar spraying.',
      },
      {
        id: 'division',
        title: 'Rhizome Sectioning',
        seasonOrMetric: 'Perform when stem reaches trough edge',
        body: 'Slice between internodes along the creeping rhizome while leaving the root system attached in the trough. Allow the cut face to seal with horticultural sulfur or charcoal powder before watering.',
      },
    ],
    relatedSlugs: ['monstera-deliciosa', 'goeppertia-orbifolia', 'begonia-maculata'],
  },
  {
    id: '04',
    slug: 'spathiphyllum-wallisii',
    accessionNumber: 'HERB-14-004',
    commonName: 'Wallis Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    taxonomicAuthority: 'Regel (1877)',
    family: 'Araceae',
    order: 'Alismatales',
    category: 'Flowering & Bracts',
    difficulty: 'Approachable',
    lightLevel: 'Dappled Shade',
    footCandles: '200 – 600 fc (2,150 – 6,450 lux)',
    waterCadence: 'Every 6–8 days; water before petioles droop',
    humidityRange: '50% – 75% RH',
    temperatureRange: '18°C – 27°C (65°F – 80°F)',
    substrateMix: '50% coco peat, 25% fine pine bark, 15% perlite, 10% composted humus',
    matureDimensions: '45 – 75 cm clump height and spread',
    toxicityNote: 'Contains insoluble calcium oxalates; mild oral irritant if chewed',
    originRegion: 'Colombia and Venezuela (Chocó and Magdalena river basins)',
    nativeElevation: '100 – 1,100 m along shaded riparian banks',
    image: '/images/flowering-plant.jpg',
    figureCaption: 'Fig. 04 — Boat-shaped ivory spathe subtending the fertile spadix of Spathiphyllum wallisii.',
    shortExcerpt:
      'Named after German plant explorer Gustav Wallis, this riparian aroid produces sculptural ivory bracts (spathes) that slowly photosynthesize into sage green as seeds mature.',
    habitatNarrative:
      'Along the humid, shaded streambanks of the Colombian Chocó, Spathiphyllum wallisii grows in dense rhizomatous colonies where seasonal rains periodically submerge its root crowns. Its gleaming white spathes act as luminous flags in the dim forest understory, reflecting fragrance and light to attract trigonid bees.',
    botanicalDescription:
      'Acaulescent perennial herb with a short subterranean rhizome. Petioles slender, sheathing for half their length, with a prominent geniculum below the blade. Leaves oblong-lanceolate to elliptic, acuminate at the apex, glossy dark green with deeply impressed primary lateral veins arcing toward the tip. Inflorescence borne on a erect peduncle rising above the foliage; spathe ovate-elliptic, concave, pure ivory at anthesis before turning pale chlorophyll green with age; spadix cylindrical, cream-colored, studded with bisexual flowers.',
    fieldObservation:
      'Wait for the subtle downward inflection of the geniculum—rather than full foliar collapse—as your cue to irrigate. Repeatedly letting the plant wilt completely triggers premature yellowing of the oldest basal leaves.',
    careNotes: [
      {
        id: 'hydration',
        title: 'Mineral-Free Irrigation',
        seasonOrMetric: 'Filtered or rainwater · Even moisture',
        body: 'Spathiphyllum leaf tips are acutely sensitive to dissolved fluorides, chloramine, and excess salts in municipal tap water. Irrigate with rainwater or carbon-filtered water, and flush the pot thoroughly every two months.',
      },
      {
        id: 'blooming',
        title: 'Photoperiod & Spathe Induction',
        seasonOrMetric: '400 – 600 fc bright diffused light',
        body: 'While tolerant of low-light hallways, Spathiphyllum wallisii requires bright diffused light (around 500 foot-candles) during spring and summer to initiate floral peduncles naturally without gibberellic acid treatments.',
      },
      {
        id: 'pruning',
        title: 'Senescent Spathe Removal',
        seasonOrMetric: 'Post-anthesis greening phase',
        body: 'Once the white spathe turns sage green and eventually begins to brown at the margins, trace its peduncle all the way down to the base of the leaf sheath and sever cleanly with a sharp knife.',
      },
      {
        id: 'division',
        title: 'Crown Division at Repotting',
        seasonOrMetric: 'Every 2–3 years in early Spring',
        body: 'When crowded crowns push above the soil line, gently tease apart individual rooted offsets, ensuring each division retains at least four mature leaves and a healthy cluster of fleshy white roots.',
      },
    ],
    relatedSlugs: ['jasminum-polyanthum', 'goeppertia-orbifolia', 'monstera-deliciosa'],
  },
  {
    id: '05',
    slug: 'echinocactus-grusonii',
    accessionNumber: 'HERB-14-005',
    commonName: 'Golden Barrel Cactus',
    scientificName: 'Echinocactus grusonii',
    taxonomicAuthority: 'Hildm. (1891)',
    family: 'Cactaceae',
    order: 'Caryophyllales',
    category: 'Arid & Sculptural',
    difficulty: 'Approachable',
    lightLevel: 'Direct Morning Sun',
    footCandles: '1,500 – 4,500 fc (16,000 – 48,000 lux)',
    waterCadence: 'Every 18–25 days in summer; dry dormancy in winter',
    humidityRange: '20% – 45% RH',
    temperatureRange: '10°C – 35°C (50°F – 95°F)',
    substrateMix: '70% mineral grit (pumice, decomposed granite, coarse sand), 30% sifted loam',
    matureDimensions: '30 – 80 cm spherical diameter',
    toxicityNote: 'Non-toxic chemically, but rigid radial and central spines require careful placement',
    originRegion: 'East-Central Mexico (Querétaro and Hidalgo — Moctezuma River canyon)',
    nativeElevation: '1,400 – 2,000 m on volcanic limestone cliffs',
    image: '/images/cactus-specimen.jpg',
    figureCaption: 'Fig. 05 — Geometric Fibonacci rib arrangement and translucent amber spines of Echinocactus grusonii.',
    shortExcerpt:
      'An architectural globe native to volcanic canyons in Querétaro, featuring 21 to 37 pleated vertical ribs armed with radiant golden-amber spines that diffuse harsh desert radiation.',
    habitatNarrative:
      'Paradoxically ubiquitous in botanical conservatories worldwide yet critically endangered in its wild Mexican habitat following the construction of the Zimapán Dam in the 1990s, Echinocactus grusonii clings to steep volcanic rock ledges in the Moctezuma River gorge. Its accordion-like ribs expand rapidly after brief summer cloudbursts and contract during nine-month dry spells.',
    botanicalDescription:
      'Solitary, globose to short-cylindrical stem succulent, bright emerald green with a dense crown of pale yellow wool at the depressed apical meristem. Ribs 21–37 in mature specimens, acute and tuberculate when young. Areoles confluent toward the apex, bearing 8–10 radial spines (to 3 cm) and 3–4 cross-ribbed central spines (to 5 cm) of translucent golden-yellow that age to bone-ivory. utilizes Crassulacean Acid Metabolism (CAM), opening stomata exclusively at night.',
    fieldObservation:
      'A specimen deprived of direct solar radiation quickly loses its spherical symmetry, elongating into a pale, tapering cone (etiolation) with weak, hair-like spines. Place directly against an unobstructed south or west glass pane.',
    careNotes: [
      {
        id: 'dormancy',
        title: 'Winter Dry Dormancy Protocol',
        seasonOrMetric: 'November through March · 10°C – 15°C',
        body: 'From late autumn until the vernal equinox, suspend watering almost entirely—particularly if kept in a cool conservatory or unheated window sill. Winter moisture combined with low light invites basal stem rot (Fusarium) and unseasonal weak growth.',
      },
      {
        id: 'substrate',
        title: '70% Mineral Lithophytic Grit',
        seasonOrMetric: 'Fast-draining inorganic matrix',
        body: 'Never pot in standard peat-based compost. Combine volcanic pumice, crushed granite, calcined clay (turface), and only 25–30% sifted leaf mold in an unglazed terracotta pot that breathes through its walls.',
      },
      {
        id: 'light',
        title: 'Solar Irradiance & Spine Density',
        seasonOrMetric: 'Minimum 5 hours direct sun daily',
        body: 'The density and golden pigmentation of new apical spines are directly proportional to UV and photosynthetically active radiation. Rotate the pot 45 degrees once a month during summer so the globe swells evenly.',
      },
      {
        id: 'repotting',
        title: 'Dry-Root Repotting Technique',
        seasonOrMetric: 'Every 3–4 years in late Spring',
        body: 'Wrap the globe in folded heavy canvas or thick newspaper tongs to protect both your hands and the brittle radial spines. Pot into completely dry mineral mix and wait 10 days before the first watering so microscopic root abrasions suberize.',
      },
    ],
    relatedSlugs: ['dracaena-trifasciata', 'olea-europaea', 'pilea-peperomioides'],
  },
  {
    id: '06',
    slug: 'ficus-lyrata',
    accessionNumber: 'HERB-14-006',
    commonName: 'Fiddle-Leaf Fig',
    scientificName: 'Ficus lyrata',
    taxonomicAuthority: 'Warb. (1894)',
    family: 'Moraceae',
    order: 'Rosales',
    category: 'Woody & Conservatory',
    difficulty: 'Attentive',
    lightLevel: 'Direct Morning Sun',
    footCandles: '800 – 2,000 fc (8,600 – 21,500 lux)',
    waterCadence: 'Every 7–10 days; drench deeply then allow top 6 cm to dry',
    humidityRange: '45% – 65% RH',
    temperatureRange: '18°C – 30°C (65°F – 86°F)',
    substrateMix: '40% aged pine bark fines, 35% high-porosity potting mix, 25% coarse perlite',
    matureDimensions: '2.0 – 3.5 m indoor tree; panduriform blades to 45 cm',
    toxicityNote: 'White latex sap contains ficin and furocoumarins; mild skin and mucosal irritant',
    originRegion: 'Western and Central lowland rainforests of Africa (Sierra Leone to Cameroon)',
    nativeElevation: '0 – 800 m in lowland tropical canopy',
    image: '/images/tending-plants.jpg',
    figureCaption: 'Fig. 06 — Wiping dust from the coriaceous, panduriform leaf blade of Ficus lyrata to restore stomatal and photosynthetic efficiency.',
    shortExcerpt:
      'An architectural West African canopy species with broad, violin-waisted (panduriform) leaves and prominent pale honey-colored venation that demands abundant window light and regular leaf grooming.',
    habitatNarrative:
      'In the humid lowland rainforests from Sierra Leone to Cameroon, Ficus lyrata frequently begins life as an epiphyte high in the fork of a host tree, where it receives unobstructed equatorial sky light and warm, daily convective rains. Only later do its roots descend to the earth and lignify into a self-supporting trunk.',
    botanicalDescription:
      'Evergreen woody tree with rugged grey-brown bark and persistent papery brown stipules sheathing the terminal apical bud. Leaves alternate, spirally arranged, panduriform (constricted at the middle like a lyre or violin), 25–45 cm long and up to 30 cm wide; apex broadly rounded to truncate, base cordate; margin undulate and Thickened; adaxial surface glabrous, waxy dark green; abaxial surface paler with raised, reticulate ivory-yellow midrib and secondary veins.',
    fieldObservation:
      'Because its horizontal leaves act like broad dust trays indoors, a thin film of household dust can reduce light absorption by up to 30%. Wiping both upper and lower surfaces monthly with a damp linen cloth is as vital as watering.',
    careNotes: [
      {
        id: 'grooming',
        title: 'Foliar Hygiene & Cuticle Care',
        seasonOrMetric: 'Monthly damp linen wipe · No leaf-shine oils',
        body: 'Support the underside of each leathery leaf with one flat palm while gently wiping the upper blade from petiole to margin with a cloth dampened in tepid water. Never apply commercial silicone or oil "leaf shine" products, which clog abaxial stomata.',
      },
      {
        id: 'light',
        title: 'High-Light Canopy Placement',
        seasonOrMetric: 'East or South window · >800 fc',
        body: 'Ficus lyrata is a sun-adapted canopy tree, not a shade plant. Place directly in front of your largest window where it receives several hours of direct morning sun and bright sky exposure all day.',
      },
      {
        id: 'edema',
        title: 'Understanding Reddish-Brown Edema Flecks',
        seasonOrMetric: 'Appears on emerging spring leaves',
        body: 'Tiny rust-colored pinpoint spots on newly unfurled leaves are physiological edema—caused when roots absorb water faster than young leaves can transpire it. Increase light and air movement and let the soil dry slightly more between waterings; the spots fade as the blade hardens into dark green.',
      },
      {
        id: 'lignification',
        title: 'Trunk Flexure & Apical Pinching',
        seasonOrMetric: 'Late Spring structural pruning',
        body: 'Gently shaking the main trunk for 30 seconds each week simulates wind stress (thigmomorphogenesis), encouraging thicker secondary xylem. Pinching the terminal bud in May stimulates lateral branching.',
      },
    ],
    relatedSlugs: ['strelitzia-nicolai', 'olea-europaea', 'monstera-deliciosa'],
  },
  {
    id: '07',
    slug: 'platycerium-bifurcatum',
    accessionNumber: 'HERB-14-007',
    commonName: 'Elkhorn & Staghorn Fern',
    scientificName: 'Platycerium bifurcatum',
    taxonomicAuthority: '(Cav.) C.Chr. (1906)',
    family: 'Polypodiaceae',
    order: 'Polypodiales',
    category: 'Ferns & Epiphytes',
    difficulty: 'Attentive',
    lightLevel: 'Bright Indirect',
    footCandles: '500 – 1,200 fc (5,400 – 12,900 lux)',
    waterCadence: 'Soak mounted root shield every 7–10 days for 15 minutes',
    humidityRange: '50% – 75% RH',
    temperatureRange: '14°C – 28°C (57°F – 82°F)',
    substrateMix: 'Mounted on weathered hardwood or cedar slab with New Zealand sphagnum moss and orchid bark',
    matureDimensions: '60 – 90 cm pendulous fertile frond span',
    toxicityNote: 'Completely non-toxic',
    originRegion: 'Eastern Australia (New South Wales, Queensland) and Lord Howe Island',
    nativeElevation: 'Sea level to 900 m in subtropical rainforest canopy',
    image: '/images/greenhouse-interior.jpg',
    figureCaption: 'Fig. 07 — Mounted Platycerium bifurcatum specimens suspended along the cedar benches of the research glasshouse.',
    shortExcerpt:
      'A dimorphic vascular epiphyte that produces both papery basal "shield fronds" to clasp tree bark and dichotomously forked, silvery-felted fertile fronds.',
    habitatNarrative:
      'High in the eucalyptus and rainforest canopies of eastern Australia, Platycerium bifurcatum forms massive, self-sustaining aerial baskets. Its sterile basal fronds press tightly against host limbs, senescing into overlapping layers of cinnamon-brown parchment that trap falling leaves, rainwater, and nitrogen-rich organic detritus.',
    botanicalDescription:
      'Epiphytic fern displaying pronounced frond dimorphism. Basal sterile fronds (nest or shield fronds) are sessile, rounded to reniform, initially pale green before turning dry, papery chestnut-brown; upper margins Lobed to form a humus-collecting pocket. Fertile foliage fronds are arching to pendulous, 30–90 cm long, dichotomously forked 2 to 3 times near the apex into strap-shaped lobes; surfaces covered in microscopic star-shaped hairs (stellate trichomes) that impart a velvety silver-sage bloom and reduce transpiration; cinnamon-brown sori form dense patches across the underside of the ultimate lobe tips.',
    fieldObservation:
      'Never wipe off the powdery silver-white down covering the fertile fronds; those stellate trichomes are living epidermal structures that reflect excess UV light and trap a boundary layer of humid air.',
    careNotes: [
      {
        id: 'shield',
        title: 'Preserving the Brown Basal Shield Fronds',
        seasonOrMetric: 'Do not remove papery brown shields',
        body: 'Novice growers often mistake the drying brown basal shield for dead foliage and peel it away. These shields are essential structural organs that insulate the roots and digest organic matter into humus.',
      },
      {
        id: 'hydration',
        title: 'Immersion Soaking Method',
        seasonOrMetric: 'Submerge mount for 15 minutes weekly',
        body: 'Because water runs off rounded sphagnum mounts when poured from above, submerge the entire wooden plaque in a basin of room-temperature rainwater until air bubbles cease rising, then hang to drip dry before returning to the wall.',
      },
      {
        id: 'trichomes',
        title: 'Protecting Stellate Trichomes',
        seasonOrMetric: 'Handle fronds by the basal stalk only',
        body: 'Oils from human fingertips flatten and permanently darken the silver stellate hairs on the antler fronds. Once rubbed off, a frond cannot regenerate its protective felt.',
      },
      {
        id: 'mounting',
        title: 'Orientation & Apical Bud Alignment',
        seasonOrMetric: 'Growth point at 12 o’clock position',
        body: 'When remounting onto a wider cedar or cork slab, inspect the center of the rosette to locate the furry green apical bud; orient this bud at the top (12 o’clock) so new antler fronds unfurl upward and outward.',
      },
    ],
    relatedSlugs: ['adiantum-raddianum', 'epipremnum-aureum', 'begonia-maculata'],
  },
  {
    id: '08',
    slug: 'epipremnum-aureum',
    accessionNumber: 'HERB-14-008',
    commonName: 'Solomon Islands Ivy-Arum',
    scientificName: 'Epipremnum aureum',
    taxonomicAuthority: '(Linden & André) G.S.Bunting (1964)',
    family: 'Araceae',
    order: 'Alismatales',
    category: 'Tropical Foliage',
    difficulty: 'Approachable',
    lightLevel: 'Bright Indirect',
    footCandles: '250 – 900 fc (2,700 – 9,700 lux)',
    waterCadence: 'Every 8–12 days in soil; refresh water every 10 days in hydro-culture',
    humidityRange: '40% – 75% RH',
    temperatureRange: '17°C – 30°C (62°F – 86°F)',
    substrateMix: '35% pine bark, 35% coco coir, 20% perlite, 10% compost; or oxygenated glass vessel',
    matureDimensions: 'Trailing vines 2 – 4 m indoors; climbing blades up to 50 cm',
    toxicityNote: 'Contains calcium oxalate raphides',
    originRegion: 'Mo’orea (Society Islands, French Polynesia)',
    nativeElevation: '50 – 600 m in humid volcanic valleys',
    image: '/images/aquatic-roots.jpg',
    figureCaption: 'Fig. 08 — Adventitious root architecture of Epipremnum aureum developing secondary lateral root hairs in hand-blown glass.',
    shortExcerpt:
      'Endemic to the volcanic valleys of Mo’orea, this physiologically remarkable vine carries a natural gibberellin deficiency that keeps it permanently in its juvenile, non-flowering phase indoors.',
    habitatNarrative:
      'Originally collected on the French Polynesian island of Mo’orea and described in 1880, Epipremnum aureum is one of botany’s most intriguing developmental puzzles. Because of a genetic impairment in gibberellin hormone biosynthesis (specifically the EaGA3ox1 gene), the plant rarely flowers in nature or cultivation, pouring all of its metabolic energy into vigorous vegetative stolons and rapid adventitious root initiation.',
    botanicalDescription:
      'Evergreen liana with striate green stems reinforced by collenchyma ridges. Each node bears both clasping feeder roots and a pre-formed adventitious root initial rich in natural auxins (indole-3-butyric acid). Juvenile leaves are cordate-ovate, 8–18 cm long, entire, waxy bright green marbled with aurea-yellow and cream chimeral variegation. When permitted to climb vertically over rough bark in high humidity, adult leaves expand to 60 cm and become deeply pinnatifid.',
    fieldObservation:
      'Water-propagated cuttings form spongy, aerenchyma-rich aquatic roots adapted to dissolved oxygen in liquid. When transitioning an aquatic cutting to bark substrate, keep the soil noticeably moister for the first three weeks while denser terrestrial root hairs form.',
    careNotes: [
      {
        id: 'hydro',
        title: 'Botanical Glass Hydro-Culture',
        seasonOrMetric: 'Change water every 10–14 days',
        body: 'When cultivating Epipremnum cuttings permanently in apothecary glass vessels, submerge only the leafless nodes while keeping petioles above the waterline. Refresh with oxygenated room-temperature water and add a quarter-strength balanced hydroponic mineral solution monthly during summer.',
      },
      {
        id: 'variegation',
        title: 'Chimeral Variegation & Light Balance',
        seasonOrMetric: '400 – 800 fc maintains golden marbling',
        body: 'In dim corners (<150 fc), the plant compensates for reduced photon capture by producing solid dark-green leaves with maximum chlorophyll density. Moving the vine back into bright indirect light restores golden sectorial marbling on subsequent nodes.',
      },
      {
        id: 'auxin',
        title: 'Endogenous Auxin Companion Rooting',
        seasonOrMetric: 'Natural rooting hormone exudate',
        body: 'Because Epipremnum aureum nodes release abundant natural rooting auxins and salicylic acid into water, placing a single cutting alongside slower-rooting woody or begonia cuttings in the same glass beaker measurably accelerates callus and root formation.',
      },
      {
        id: 'pruning',
        title: 'Apical Dominance & Basal Fullness',
        seasonOrMetric: 'Prune trailing tips in Spring',
        body: 'Long unpruned vines channel nutrients primarily to the terminal growing tip, sometimes shedding older leaves near the pot rim. Pruning trailing ends releases dormant axillary buds along the crown.',
      },
    ],
    relatedSlugs: ['pilea-peperomioides', 'monstera-deliciosa', 'philodendron-gloriosum'],
  },
  {
    id: '09',
    slug: 'jasminum-polyanthum',
    accessionNumber: 'HERB-14-009',
    commonName: 'Pink Winter Jasmine',
    scientificName: 'Jasminum polyanthum',
    taxonomicAuthority: 'Franch. (1891)',
    family: 'Oleaceae',
    order: 'Lamiales',
    category: 'Flowering & Bracts',
    difficulty: 'Attentive',
    lightLevel: 'Direct Morning Sun',
    footCandles: '1,000 – 2,500 fc (10,700 – 26,900 lux)',
    waterCadence: 'Every 5–7 days in active growth; sparingly during cool autumn bud set',
    humidityRange: '45% – 65% RH',
    temperatureRange: '8°C – 24°C (46°F – 75°F); requires cool autumn nights',
    substrateMix: '50% loam-based compost, 30% composted pine bark, 20% horticultural grit',
    matureDimensions: '1.2 – 2.5 m twining vine on conservatory trellis or hoop',
    toxicityNote: 'Non-toxic to humans and household pets (true Jasminum species)',
    originRegion: 'Southwestern China (Yunnan, Sichuan, and Guizhou provinces)',
    nativeElevation: '1,400 – 3,000 m in montane valleys and limestone scrub',
    image: '/images/morning-garden.jpg',
    figureCaption: 'Fig. 09 — Twining shoots and carmine-tinted flower buds of Jasminum polyanthum in morning conservatory light.',
    shortExcerpt:
      'Collected in the Yunnan highlands by Père Jean Marie Delavay, this twining member of the olive family fills cool winter rooms with star-shaped white blossoms distilled from rose-carmine buds.',
    habitatNarrative:
      'In the misty limestone ravines of Yunnan and Sichuan at elevations up to 3,000 meters, Jasminum polyanthum scrambles over boulders and deciduous shrubs. Experience of crisp, cool autumn nights (8°C–12°C) followed by bright mountain sunshine is the essential vernalization signal that triggers its explosion of thousands of fragrant panicles in late winter.',
    botanicalDescription:
      'Vigorous evergreen to semi-evergreen twining liana with slender, glabrous, angled green stems. Leaves opposite, odd-pinnate with 5 to 7 leaflets; terminal leaflet notably larger (4–7 cm), ovate-lanceolate with an acuminate tip, lateral leaflets smaller and sessile. Inflorescences axillary and terminal many-flowered paniculate cymes; flower buds deep rose-pink to carmine on the exterior, opening into salverform, 5-lobed pure white corollas (2 cm across) releasing heady benzyl acetate and linalool fragrance, especially at dusk.',
    fieldObservation:
      'Many indoor growers wonder why their healthy winter jasmine never blooms a second year. The secret is autumn chill: keep the vine on a cool porch or unheated bedroom window (10°C / 50°F) from October to December.',
    careNotes: [
      {
        id: 'vernalization',
        title: 'Autumn Vernalization for Bud Initiation',
        seasonOrMetric: '6 weeks at 8°C – 13°C in Autumn',
        body: 'Floral primordia differentiate only when short autumn days coincide with cool night temperatures below 13°C (55°F). A constantly warm, 22°C living room in October keeps the plant strictly vegetative.',
      },
      {
        id: 'training',
        title: 'Counter-Clockwise Twining & Hoop Training',
        seasonOrMetric: 'Train flexible green shoots weekly',
        body: 'New summer shoots elongate rapidly and twine around any adjacent support. Gently weave young pliable stems around a brass or willow hoop before the stems lignify and stiffen.',
      },
      {
        id: 'pruning',
        title: 'Post-Anthesis Renewal Pruning',
        seasonOrMetric: 'Immediately after Spring flowering',
        body: 'Once the last spring blossoms fade in April, prune flowered laterals back by one-third. This encourages fresh summer shoots that will ripen in autumn and carry next winter’s flower buds.',
      },
      {
        id: 'hydration',
        title: 'Bud-Stage Moisture Consistency',
        seasonOrMetric: 'January – March bloom cycle',
        body: 'When pink flower buds are swelling in late winter, never allow the root ball to dry completely or sit near a hot air vent; sudden desiccation causes unopened buds to abscise.',
      },
    ],
    relatedSlugs: ['olea-europaea', 'spathiphyllum-wallisii', 'begonia-maculata'],
  },
  {
    id: '10',
    slug: 'begonia-maculata',
    accessionNumber: 'HERB-14-010',
    commonName: 'Trout & Polka-Dot Cane Begonia',
    scientificName: 'Begonia maculata',
    taxonomicAuthority: 'Raddi (1820)',
    family: 'Begoniaceae',
    order: 'Cucurbitales',
    category: 'Flowering & Bracts',
    difficulty: 'Attentive',
    lightLevel: 'Bright Indirect',
    footCandles: '400 – 900 fc (4,300 – 9,700 lux)',
    waterCadence: 'Every 6–9 days; keep evenly moist without wetting leaf blades',
    humidityRange: '55% – 75% RH',
    temperatureRange: '18°C – 26°C (64°F – 79°F)',
    substrateMix: '45% coco coir, 30% fine perlite, 15% fine orchid bark, 10% leaf compost',
    matureDimensions: '60 – 110 cm bamboo-like cane height',
    toxicityNote: 'Contains soluble oxalates concentrated in underground tubers/rhizomes',
    originRegion: 'Southeastern Brazil (Mata Atlântica coastal rainforest of Rio de Janeiro)',
    nativeElevation: '100 – 900 m in humid Atlantic forest understory',
    image: '/images/pressed-herbarium.jpg',
    figureCaption: 'Fig. 10 — Archival herbarium study of Begonia maculata showing asymmetrical obliquum leaf blades and silver maculations.',
    shortExcerpt:
      'Described by Italian naturalist Giuseppe Raddi in 1820 from Brazil’s Atlantic Forest, featuring angel-wing leaves painted with metallic silver maculations above and deep crimson anthocyanin undersides.',
    habitatNarrative:
      'In the misty Mata Atlântica mountains surrounding Rio de Janeiro, Begonia maculata grows as an erect, bamboo-jointed subshrub in dappled forest clearings. Its dual-toned foliage is an optical masterwork: the burgundy-red abaxial (lower) surface is rich in anthocyanin pigments that bounce unabsorbed green-wavelength light back up through the photosynthetic palisade cells.',
    botanicalDescription:
      'Suffruticose cane-stemmed perennial with erect, glabrous, swollen-noded stems resembling slender bamboo. Leaves alternate, stipulate, markedly asymmetrical (obliquely oblong-lanceolate) with a cordate base and undulate margin, 12–22 cm long; adaxial surface olive-to-emerald green punctuated by circular silver-white blistered maculations (air spaces beneath the epidermis); abaxial surface deep carmine-burgundy. Inflorescences axillary pendulous dichotomous cymes bearing monoecious white-to-blush-pink tepals with bright yellow stamens or twisted stigmas.',
    fieldObservation:
      'When pressing Begonia maculata for the herbarium, its succulent, acidic leaf tissue oxidizes to warm sienna and bronze while preserving the silver epidermal maculations with remarkable clarity.',
    careNotes: [
      {
        id: 'airflow',
        title: 'Dry Foliage & Powdery Mildew Prevention',
        seasonOrMetric: 'Bottom-water or water at soil line only',
        body: 'Like many Brazilian cane begonias, Begonia maculata is susceptible to powdery mildew (Oidium) if water sits on its leaves in stagnant air. Always apply water directly to the substrate and provide gentle room air movement.',
      },
      {
        id: 'anthocyanin',
        title: 'Light Intensity & Abaxial Crimson Pigment',
        seasonOrMetric: 'Bright indirect east or filtered west light',
        body: 'In bright diffused light (600–800 fc), the silver dots gleam brightly and the underside deepens to rich wine-red. Avoid scorching midday sun, which bleaches the olive blade.',
      },
      {
        id: 'staking',
        title: 'Cane Staking & Basal Pinching',
        seasonOrMetric: 'Support swollen nodes with split bamboo',
        body: 'As canes exceed 50 cm, the weight of the succulent leaves and pendulous flower clusters can bow the stems. Tie canes loosely with soft twine to slender bamboo stakes and pinch tall tips in spring to trigger basal canes from the soil line.',
      },
      {
        id: 'propagation',
        title: 'Two-Node Cane Cuttings',
        seasonOrMetric: 'Roots in 18–24 days at 22°C',
        body: 'Take a 10 cm cane cutting with two nodes and one terminal leaf. Root in clear glass water or airy perlite-coco mix; new roots emerge rapidly from the stipule scar ring.',
      },
    ],
    relatedSlugs: ['adiantum-raddianum', 'goeppertia-orbifolia', 'pilea-peperomioides'],
  },
  {
    id: '11',
    slug: 'pilea-peperomioides',
    accessionNumber: 'HERB-14-011',
    commonName: 'Yunnan Coin & Lefse Plant',
    scientificName: 'Pilea peperomioides',
    taxonomicAuthority: 'Diels (1912)',
    family: 'Urticaceae',
    order: 'Rosales',
    category: 'Tropical Foliage',
    difficulty: 'Approachable',
    lightLevel: 'Bright Indirect',
    footCandles: '500 – 1,200 fc (5,400 – 12,900 lux)',
    waterCadence: 'Every 7–10 days; allow upper two-thirds of soil to dry between soakings',
    humidityRange: '40% – 65% RH',
    temperatureRange: '13°C – 26°C (55°F – 79°F)',
    substrateMix: '50% high-porosity potting mix, 30% pumice or perlite, 20% fine bark',
    matureDimensions: '25 – 40 cm height and radial canopy spread',
    toxicityNote: 'Non-toxic to cats, dogs, and humans',
    originRegion: 'Southwestern China (Cangshan Mountain range, Yunnan Province)',
    nativeElevation: '1,500 – 3,000 m on shaded damp dolomite ledges',
    image: '/images/propagation-vessels.jpg',
    figureCaption: 'Fig. 11 — Peltate orbicular leaves and stoloniferous offsets of Pilea peperomioides in amber glass propagation vessels.',
    shortExcerpt:
      'Collected in the Cangshan Mountains of Yunnan by George Forrest in 1906 and passed hand-to-hand across Scandinavian windowsills for decades before its botanical identity was formally reunited at Kew in 1978.',
    habitatNarrative:
      'For over thirty years across Norway and Sweden, this round-leaved plant was known simply as the "Missionary Plant"—brought home from Yunnan in 1946 by Norwegian missionary Agnar Espegren and shared via windowsill cuttings from family to family while remaining virtually unknown to Western botanists until specimens sent to Royal Botanic Gardens, Kew were matched to Ludwig Diels’ 1912 herbarium type.',
    botanicalDescription:
      'Erect, unbranched or sparsely branched succulent-stemmed perennial herb with a lignifying dark brown caudex-like stem covered in crescent leaf scars. Leaves are completely peltate (the slender petiole attaches near the center of the lower lamina surface rather than the margin), orbicular, 4–10 cm in diameter, bright glossy green with a pale yellowish-green circular spot above the petiole insertion and radiate venation. Produces numerous subterranean stolons that surface around the pot perimeter as clonal plantlets.',
    fieldObservation:
      'Because its peltate petioles act as solar-tracking parabolic dishes, Pilea peperomioides leans dramatically toward the window within 72 hours. Quarter-turn the pot twice a week to maintain a symmetrical radial dome.',
    careNotes: [
      {
        id: 'rotation',
        title: 'Symmetrical Canopy Rotation',
        seasonOrMetric: 'Rotate 90° every 3–4 days',
        body: 'Each long petiole elongates on its shaded side through auxin redistribution, tilting the round leaf blade perpendicular to incoming window light. Regular rotation builds a balanced, tree-like central stem.',
      },
      {
        id: 'cupping',
        title: 'Diagnosing Convex vs. Concave Leaf Cupping',
        seasonOrMetric: 'Light & Calcium balance',
        body: 'When leaves curl upward like shallow bowls, the plant is shielding itself from excessive direct heat or solar glare. When new leaves dome downward like umbrellas, increase light intensity and ensure adequate calcium/magnesium nutrition.',
      },
      {
        id: 'stolons',
        title: 'Harvesting Stoloniferous Offsets',
        seasonOrMetric: 'Sever when plantlets reach 5 cm diameter',
        body: 'Trace the underground runner (stolon) connecting a basal pup to the mother stem and slice it cleanly 2 cm below the soil with a sterile scalpel. Offsets already bear adventitious roots and establish within 10 days in water or damp pumice.',
      },
      {
        id: 'substrate',
        title: 'Montane Dolomite Drainage',
        seasonOrMetric: 'Semi-succulent root respiration',
        body: 'Because it inhabits rocky mountain ledges in Yunnan, Pilea peperomioides behaves like a semi-succulent. Use a porous terracotta pot with 30% pumice and allow the pot to feel light before watering again.',
      },
    ],
    relatedSlugs: ['epipremnum-aureum', 'echinocactus-grusonii', 'begonia-maculata'],
  },
  {
    id: '12',
    slug: 'strelitzia-nicolai',
    accessionNumber: 'HERB-14-012',
    commonName: 'Natal Wild Banana & White Bird of Paradise',
    scientificName: 'Strelitzia nicolai',
    taxonomicAuthority: 'Regel & K.Koch (1858)',
    family: 'Strelitziaceae',
    order: 'Zingiberales',
    category: 'Woody & Conservatory',
    difficulty: 'Approachable',
    lightLevel: 'Direct Morning Sun',
    footCandles: '1,000 – 3,000 fc (10,700 – 32,000 lux)',
    waterCadence: 'Every 7–10 days in summer; every 14 days in winter',
    humidityRange: '45% – 70% RH',
    temperatureRange: '15°C – 32°C (59°F – 90°F)',
    substrateMix: '50% rich loam-based compost, 30% coarse pine bark, 20% horticultural grit/perlite',
    matureDimensions: '2.2 – 4.0 m indoor conservatory fan',
    toxicityNote: 'Mild gastrointestinal irritant if chewed by pets',
    originRegion: 'Southeastern Africa (Kwazulu-Natal coastal dune forests to Mozambique)',
    nativeElevation: 'Sea level to 450 m in coastal evergreen forest',
    image: '/images/indoor-conservatory.jpg',
    figureCaption: 'Fig. 12 — Distichous fan arrangement of Strelitzia nicolai anchoring a high-ceilinged residential conservatory.',
    shortExcerpt:
      'An architectural coastal giant from KwaZulu-Natal whose paddle-shaped grey-green leaves emerge in a two-ranked (distichous) plane and naturally split along lateral veins to dissipate wind loads.',
    habitatNarrative:
      'First flowered in the imperial glasshouses of Saint Petersburg in 1858 and named in honor of Grand Duke Nicholas Nikolaevich, Strelitzia nicolai forms towering groves along the wind-swept coastal dunes of South Africa’s Indian Ocean littoral. What many indoor growers fear as a flaw—the clean horizontal splitting of its broad leaf blades—is an evolutionary biomechanical adaptation that prevents coastal gales from snapping the petioles.',
    botanicalDescription:
      'Arborescent clustering monocot with woody pseudostems formed by tightly overlapping leaf bases. Leaves distichous (arranged in two opposite vertical ranks creating a fan), petioles up to 1.5 m long; blades oblong-ovate, 1.0–1.8 m long and 40–60 cm wide, coriaceous, glaucous grey-green with a prominent central midrib and closely spaced parallel lateral veins along which the lamina naturally splits with age. Underground root system consists of thick, fleshy, contractile tuberous roots.',
    fieldObservation:
      'When a central spear leaf is unfurling in dry indoor air, its waxy margins can momentarily stick together, causing ragged tears as the blade expands. Gently running a warm, damp linen cloth along the tightly rolled cigar spear releases the tension smoothly.',
    careNotes: [
      {
        id: 'spear',
        title: 'Assisting Emerging Cigar Spears',
        seasonOrMetric: 'Apply warm damp cloth to stuck margins',
        body: 'New leaves rise vertically from the center of the fan as tightly rolled cylinders ("cigars"). If indoor humidity drops below 45%, wrap a warm, damp cloth around the top of the roll for five minutes to soften the cuticle so it unfurls cleanly.',
      },
      {
        id: 'roots',
        title: 'Accommodating Fleshy Tuberous Roots',
        seasonOrMetric: 'Deep heavy stoneware or terracotta vessel',
        body: 'Strelitzia nicolai develops finger-thick, fleshy white storage roots capable of cracking thin plastic nursery pots. Choose a deep, heavy ceramic or clay container with a 4 cm layer of coarse bark at the base.',
      },
      {
        id: 'light',
        title: 'Full-Spectrum Solar Appetite',
        seasonOrMetric: 'South or West exposure · High foot-candles',
        body: 'To maintain compact petioles and stiff, upright paddles, provide at least 3–5 hours of direct sun through glass alongside bright ambient light. In dim rooms, petioles stretch excessively and droop outward.',
      },
      {
        id: 'splits',
        title: 'Understanding Natural Lamina Splits',
        seasonOrMetric: 'Biomechanical wind-relief seams',
        body: 'Clean splits along the parallel secondary veins are genetically programmed separation zones—not signs of disease. Never tape or trim split lobes unless an oldest lower leaf has turned completely yellow.',
      },
    ],
    relatedSlugs: ['ficus-lyrata', 'monstera-deliciosa', 'olea-europaea'],
  },
  {
    id: '13',
    slug: 'goeppertia-orbifolia',
    accessionNumber: 'HERB-14-013',
    commonName: 'Round-Leaf Prayer Plant',
    scientificName: 'Goeppertia orbifolia',
    taxonomicAuthority: '(Linden) Borchs. & S.Suárez (2012)',
    family: 'Marantaceae',
    order: 'Zingiberales',
    category: 'Tropical Foliage',
    difficulty: 'Specialist',
    lightLevel: 'Dappled Shade',
    footCandles: '250 – 550 fc (2,700 – 5,900 lux)',
    waterCadence: 'Every 5–7 days with distilled or rainwater; keep evenly moist',
    humidityRange: '60% – 80% RH',
    temperatureRange: '18°C – 26°C (65°F – 79°F)',
    substrateMix: '45% coco coir, 25% fine pine bark, 20% perlite, 10% worm castings',
    matureDimensions: '50 – 75 cm height and broad rosetted spread',
    toxicityNote: 'Non-toxic to domestic animals and humans',
    originRegion: 'Southeastern Brazil (Atlantic rainforest of Rio de Janeiro and São Paulo)',
    nativeElevation: '200 – 800 m on humid shaded forest floors',
    image: '/images/calathea-foliage.jpg',
    figureCaption: 'Fig. 13 — Pleated orbicular blade of Goeppertia orbifolia (formerly Calathea orbifolia) with silver-green banding.',
    shortExcerpt:
      'Reclassified from Calathea into Goeppertia following molecular phylogenetic studies in 2012, this Atlantic Forest native performs circadian nyctinastic leaf movements driven by specialized motor cells.',
    habitatNarrative:
      'On the humid, dimly lit floor of Brazil’s coastal Atlantic rainforest, Goeppertia orbifolia spreads by subterranean rhizomes beneath a multi-tiered canopy. Every evening at dusk, potassium and chloride ions flux across the membranes of its pulvinus (the swollen motor joint at the top of the petiole), shifting turgor pressure to fold the broad, pleated round leaves vertically upward as if in prayer.',
    botanicalDescription:
      'Rhizomatous perennial herb reaching 60–75 cm in cultivation. Leaves basal, petioles sheathing at base and terminated by a cylindrical, puberulent pulvinus. Leaf blades broadly elliptic to suborbicular, 20–35 cm long and 15–28 cm wide, apex rounded-apiculate, base truncate to subcordate; adaxial surface pleated along parallel lateral veins, banded alternately with deep emerald green and metallic silver-celadon stripes; abaxial surface uniform pale glaucous green.',
    fieldObservation:
      'Listen closely in a quiet room around nightfall: as the turgor pressure shifts inside the pulvini of a large Goeppertia orbifolia, you can hear the faint, dry rustle of its pleated blades rising against one another.',
    careNotes: [
      {
        id: 'water-purity',
        title: 'Strict Distilled or Rainwater Regimen',
        seasonOrMetric: 'TDS < 50 ppm · Zero fluoride/chlorine',
        body: 'Goeppertia orbifolia lacks a mechanism to excrete excess mineral salts or fluoride, which accumulate at the leaf margins and cause papery brown edges. Irrigate exclusively with rainwater, reverse-osmosis water, or distilled water.',
      },
      {
        id: 'nyctinasty',
        title: 'Monitoring Pulvinus Nyctinasty as a Health Gauge',
        seasonOrMetric: 'Daily circadian leaf elevation',
        body: 'A healthy specimen lowers its blades horizontally by mid-morning to capture light and raises them 45–70 degrees each night. Sluggish or absent evening movement is an early indicator of low humidity, root stress, or spider mite pressure.',
      },
      {
        id: 'humidity',
        title: 'Vapor Pressure Deficit & Draft Protection',
        seasonOrMetric: 'Maintain >60% RH away from HVAC vents',
        body: 'Cluster alongside other broad-leaved tropicals on a humidified conservatory table and shield from cold window drafts or dry heating currents, which cause newly emerging scrolls to desiccate at the tip.',
      },
      {
        id: 'nutrition',
        title: 'Dilute Organic Feeding',
        seasonOrMetric: 'Quarter-strength balanced feed in Summer',
        body: 'Because its root system is sensitive to high electrical conductivity (EC), fertilize at no more than 1/4 the label rate using a gentle organic worm-casting tea or urea-free foliage formula during active growth.',
      },
    ],
    relatedSlugs: ['adiantum-raddianum', 'philodendron-gloriosum', 'spathiphyllum-wallisii'],
  },
  {
    id: '14',
    slug: 'olea-europaea',
    accessionNumber: 'HERB-14-014',
    commonName: 'Mediterranean Cultivated Olive',
    scientificName: 'Olea europaea',
    taxonomicAuthority: 'L. (1753)',
    family: 'Oleaceae',
    order: 'Lamiales',
    category: 'Woody & Conservatory',
    difficulty: 'Attentive',
    lightLevel: 'Direct Morning Sun',
    footCandles: '1,800 – 4,500 fc (19,000 – 48,000 lux)',
    waterCadence: 'Every 8–12 days; allow top half of mineral-loam substrate to dry',
    humidityRange: '30% – 55% RH',
    temperatureRange: '10°C – 32°C (50°F – 90°F)',
    substrateMix: '45% coarse mineral grit (pumice/lava rock), 35% sandy loam, 20% aged pine bark',
    matureDimensions: '1.2 – 2.4 m pruned container standard',
    toxicityNote: 'Non-toxic to humans and pets',
    originRegion: 'Mediterranean Basin (Levant, Anatolia, Crete, and Iberian Peninsula)',
    nativeElevation: 'Sea level to 1,000 m on sun-baked calcareous hillsides',
    image: '/images/olive-specimen.jpg',
    figureCaption: 'Fig. 14 — Silvery lepidote abaxial leaf surfaces and gnarled trunk of container-grown Olea europaea.',
    shortExcerpt:
      'One of humanity’s oldest domesticated trees, bearing narrow sclerophyllous leaves coated beneath with shield-shaped silver scales (peltate trichomes) that conserve water under Mediterranean sun.',
    habitatNarrative:
      'Across the limestone terraces of the Aegean, Sicily, and the Levant, Olea europaea thrives in stony, alkaline soils where summers are fiercely bright and winters are cool and breezy. When brought into a sun-drenched loggia or bright south-facing room, its muted grey-green canopy and chalky bark bring an austere, timeless stillness to the space.',
    botanicalDescription:
      'Slow-growing evergreen sclerophyllous tree with pale grey, fissured bark and opposite, decussate branching. Leaves short-petioled, lanceolate to oblong-elliptic, 4–8 cm long and 1–2 cm wide, coriaceous, margin entire and slightly revolute; adaxial surface matte sage-olive green; abaxial surface silvery-white due to a dense indumentum of overlapping peltate (shield-shaped) scales that shield sunken stomata from desiccating winds.',
    fieldObservation:
      'Examine the underside of an olive leaf under a 10× botanical hand lens: the entire surface is tiled with microscopic, overlapping silver parasols that trap a still layer of air around each stomatal pore.',
    careNotes: [
      {
        id: 'irradiance',
        title: 'Maximum Direct Solar Exposure',
        seasonOrMetric: '6+ hours direct sun · Unobstructed South window',
        body: 'Olea europaea is an uncompromising heliophyte (sun-lover). Indoors, it must stand directly in front of an unshaded south- or west-facing window, or spend May through October outdoors on a sunny balcony before overwintering inside.',
      },
      {
        id: 'substrate',
        title: 'Calcareous Mineral Drainage in Terracotta',
        seasonOrMetric: 'pH 7.0 – 8.0 · Unglazed clay pot',
        body: 'Olive roots suffocate rapidly in wet organic peat. Pot into an unglazed terracotta vessel filled with nearly half pumice, crushed limestone grit, and sandy loam so excess water drains within seconds.',
      },
      {
        id: 'winter',
        title: 'Cool Sunlit Overwintering',
        seasonOrMetric: '10°C – 16°C winter rest',
        body: 'In winter, avoid placing the tree next to radiators. A bright, cool sunporch or unheated room minimizes winter leaf drop and fulfills the tree’s natural seasonal rest.',
      },
      {
        id: 'pruning',
        title: 'Open-Goblet Canopy Pruning',
        seasonOrMetric: 'Late Winter / Early Spring',
        body: 'Traditional Mediterranean pruning opens the center of the crown ("vaso policonico") so sunlight and air penetrate every interior branch. Thin inward-growing twigs with clean secateurs in March.',
      },
    ],
    relatedSlugs: ['jasminum-polyanthum', 'echinocactus-grusonii', 'dracaena-trifasciata'],
  },
  {
    id: '15',
    slug: 'dracaena-trifasciata',
    accessionNumber: 'HERB-14-015',
    commonName: 'Viper’s Bowstring Hemp',
    scientificName: 'Dracaena trifasciata',
    taxonomicAuthority: '(Prain) Mabb. (2017)',
    family: 'Asparagaceae',
    order: 'Asparagales',
    category: 'Arid & Sculptural',
    difficulty: 'Approachable',
    lightLevel: 'Bright Indirect',
    footCandles: '200 – 2,000 fc (2,150 – 21,500 lux)',
    waterCadence: 'Every 14–21 days; allow entire soil column to dry completely',
    humidityRange: '25% – 60% RH',
    temperatureRange: '15°C – 32°C (59°F – 90°F)',
    substrateMix: '55% coarse pumice and mineral grit, 30% bark-loam mix, 15% coarse sand',
    matureDimensions: '60 – 110 cm vertical ensiform blades',
    toxicityNote: 'Contains steroidal saponins; mildly toxic if ingested by pets',
    originRegion: 'Tropical West Africa (Nigeria east to the Congo Basin)',
    nativeElevation: 'Sea level to 900 m in dry rocky savannas and forest margins',
    image: '/images/sansevieria-specimen.jpg',
    figureCaption: 'Fig. 15 — Erect ensiform leaves of Dracaena trifasciata (formerly Sansevieria trifasciata) with transverse glaucous banding.',
    shortExcerpt:
      'Long known as Sansevieria before genomic inclusion into Dracaena, this West African fibrous succulent pairs sword-like architectural blades with nocturnal CAM photosynthesis.',
    habitatNarrative:
      'Across the seasonally dry rocky outcrops and savanna thickets of Nigeria and the Congo basin, Dracaena trifasciata spreads via stout, bright-orange subterranean rhizomes. Indigenous weavers historically retted its extraordinarily tough vascular leaf bundles to spin elastic bowstrings—the origin of its vernacular name, Viper’s Bowstring Hemp.',
    botanicalDescription:
      'Acaulescent rhizomatous succulent perennial with creeping sympodial subterranean rhizomes. Leaves 2 to 6 per rosette, stiffly erect, linear-lanceolate to ensiform (sword-shaped), 45–110 cm tall and 5–8 cm wide, flattened to slightly concave, tapering to a subulate fibrous point; surfaces glabrous, coriaceous, banded transversely with alternating irregular zig-zag zones of deep bottle-green and pale silver-glaucous green. Performs Crassulacean Acid Metabolism (CAM), fixing carbon dioxide into malic acid overnight.',
    fieldObservation:
      'Although celebrated for surviving in dark hallways, Dracaena trifasciata truly thrives when given bright morning window light—sending up thick, wide new sword blades and occasional evening-fragrant racemes of greenish-white tubular flowers.',
    careNotes: [
      {
        id: 'irrigation',
        title: 'Full-Cycle Desiccation Between Waterings',
        seasonOrMetric: 'Water around pot perimeter · Avoid crown',
        body: 'Because its succulent blades store water and transpire minimally during the day via CAM metabolism, water only after the entire pot has dried to the bottom. Never pour water into the tight central leaf rosette.',
      },
      {
        id: 'rhizomes',
        title: 'Rhizome-Bound Terracotta Stability',
        seasonOrMetric: 'Repot only when rhizomes deform pot',
        body: 'Dracaena trifasciata prefers a snug, heavy terracotta pot that anchors its tall, top-heavy vertical blades. Leave 25% of the pot volume as mineral grit so roots remain oxygenated.',
      },
      {
        id: 'light',
        title: 'Transverse Banding Contrast',
        seasonOrMetric: '400 – 1,500 fc preserves silver bands',
        body: 'In bright indirect or morning sun, emerging blades develop crisp silver-sage cross-bands and rigid, thick walls. In deep shade, new leaves emerge narrower and uniformly dark green.',
      },
      {
        id: 'propagation',
        title: 'Rhizome Division vs. Leaf Sectioning',
        seasonOrMetric: 'Chimeral cultivar preservation',
        body: 'While horizontal leaf blade cuttings root readily after callusing for 4 days, variegated cultivars (such as var. laurentii with golden margins) are periclinal chimeras and will revert to solid banded green unless propagated by dividing the subterranean rhizome.',
      },
    ],
    relatedSlugs: ['echinocactus-grusonii', 'olea-europaea', 'strelitzia-nicolai'],
  },
];

export function getPlantBySlug(slug: string): PlantSpecimen | undefined {
  return PLANT_SPECIMENS.find((p) => p.slug === slug);
}

