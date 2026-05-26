# Gleisberg & Kühn – Website (Redesign)

Statische Demo-Website für **Gleisberg & Kühn GmbH** (Bauunternehmen Berlin).
Reines HTML/CSS/Vanilla-JS, **kein Build-Tool nötig**.

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Oder die `index.html` direkt im Browser per Doppelklick öffnen.

## Struktur

```
index.html          Startseite
leistungen.html     Leistungsübersicht
referenzen.html     Projekte + Vorher/Nachher-Slider
ueber-uns.html      Team & Werte
kontakt.html        Kontaktformular
impressum.html      Impressum (Demo)
datenschutz.html    Datenschutz (Demo)

assets/
├── styles.css      Alle Styles
└── main.js         Sticky Header, Mobile-Menu, Reveal, Vorher/Nachher-Slider

_partials/          Wiederverwendbare HTML-Snippets (Header/Footer/Head)
_content/           Page-Bodies pro Seite
_partials/build.py  Generiert die finalen HTMLs aus Partials + Content
```

## Inhalte bearbeiten

Zwei Wege:

**A) Direkt** in den finalen `.html`-Dateien editieren – einfach, aber Header/Footer
müssen ggf. in mehreren Dateien synchron gehalten werden.

**B) Über die Partials** (sauberer):

```bash
# 1. In _content/<seite>.html oder _partials/header.html editieren
# 2. Pages neu generieren:
python3 _partials/build.py
```

## Deployment auf Vercel

Repo verbinden → **Framework Preset: Other** (oder einfach Default lassen,
`vercel.json` setzt `framework: null`). Kein Build, keine Install-Schritte.
Vercel liefert die Dateien direkt aus.

## Anpassungen vor Go-Live

- Higgsfield-Demo-Bilder (cloudfront-URLs) durch echte Kundenfotos ersetzen
- Plus Jakarta Sans **lokal** einbinden statt Google Fonts (DSGVO)
- Impressum & Datenschutzerklärung rechtssicher vervollständigen (HRB, USt-IdNr.)
- Kontaktformular an ein echtes Backend anbinden (z. B. Formspree, Resend)
