const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3064uXRqZDhsfEEjgzVarJDAKP6';

export const images = {
  hero: `${CDN}/hf_20260520_084856_0099d453-0753-412c-a2e7-eeb09457e6a6.png`,
  after: `${CDN}/hf_20260520_084912_237b4b6a-0e31-4119-b821-ed8c1592c90b.png`,
  before: `${CDN}/hf_20260520_085429_76dd2bf1-6cb5-4254-9b5b-e30ac2c35cf4.png`,
};

export const company = {
  name: 'Gleisberg & Kühn',
  legalName: 'Gleisberg & Kühn GmbH',
  founded: 2007,
  employees: 12,
  street: 'Rosenfelder Straße 13',
  zip: '10317',
  city: 'Berlin',
  phone: '030 / 89 75 10 72',
  phoneHref: '+493089751072',
  fax: '030 / 89 75 11 72',
  email: 'info@bau-gk.de',
  taxId: '37/309/50209',
  managers: ['Ingo Gleisberg', 'Ronny Kühn'],
};

export const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const services = [
  {
    title: 'Komplettsanierung',
    tagline: 'Alles aus einer Hand',
    text: 'Vom Keller bis zum Dach. Wir koordinieren alle Gewerke und bringen Ihr Projekt termingerecht zum Abschluss, vom Altbau bis zum Ladenbau.',
    points: ['Altbausanierung', 'Wärmedämmung', 'Elektro & Sanitär', 'Raumgestaltung'],
    icon: 'Building2',
  },
  {
    title: 'Maler & Tapezier',
    tagline: 'Farbgestaltung aus Meisterhand',
    text: 'Wir kümmern uns um alles: Vorarbeiten, Einkauf, Ausführung und Aufräumen. Frische Farbe, neue Tapete, makellose Wände.',
    points: ['Maler- & Tapezierarbeiten', 'Fassadengestaltung', 'Spachteln & Lackieren', 'Vor-Ort-Beratung'],
    icon: 'PaintRoller',
  },
  {
    title: 'Trockenbau',
    tagline: 'Mit System zum perfekten Innenraum',
    text: 'Für jeden Raum die passende Lösung: Raumtrenner, abgehängte Decken, Dachgeschossausbau mit Dämmung und mehr.',
    points: ['Gipskartonbau', 'Schallschutz', 'Brandschutz', 'Dachgeschossausbau'],
    icon: 'LayoutGrid',
  },
];

export const clients = [
  'Fortuna',
  'Comfort Living',
  'Factor GmbH',
  'Quantum Baugesellschaft',
  'ImmanuelKirchQuartier',
  'BDW Grundstücksges.',
  'LICON Bau GmbH',
  'DEBAG Energiesysteme',
  'Spree Center',
  'Grote Architekt',
];

export const partners = [
  'Ferber Elektrotechnik',
  'B & B Dachkonzept',
  'PB-Bauelemente',
  'Objektservice Erdmann',
  'HGT Gebäudetechnik',
  'Möbeltischlerei Schulze',
];
