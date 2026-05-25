#!/usr/bin/env python3
"""Static page builder for the redesign demo.

Combines _partials/head.html + _partials/header.html + _content/<page>.html
+ _partials/footer.html into self-contained HTML files at the redesign root.
Run from inside the redesign/ directory: python3 _partials/build.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "_partials"
CONTENT = ROOT / "_content"

HEAD = (PARTIALS / "head.html").read_text()
HEADER = (PARTIALS / "header.html").read_text()
FOOTER = (PARTIALS / "footer.html").read_text()

PAGES = {
    "leistungen.html":  ("Leistungen | Gleisberg & Kühn",  "Komplettsanierung, Maler- und Trockenbauarbeiten in Berlin. Drei Kernkompetenzen, ein Ansprechpartner."),
    "referenzen.html":  ("Referenzen | Gleisberg & Kühn",  "Eine Auswahl unserer Projekte für Hausverwaltungen, Architekten und private Eigentümer in Berlin."),
    "ueber-uns.html":   ("Über uns | Gleisberg & Kühn",    "Seit 2007 im Großraum Berlin. Lernen Sie das Team und die Werte hinter Gleisberg & Kühn kennen."),
    "kontakt.html":     ("Kontakt | Gleisberg & Kühn",     "Schildern Sie uns Ihr Vorhaben. Wir melden uns mit einem transparenten Angebot."),
    "impressum.html":   ("Impressum | Gleisberg & Kühn",   "Impressum der Gleisberg & Kühn GmbH, Berlin."),
    "datenschutz.html": ("Datenschutz | Gleisberg & Kühn", "Datenschutzerklärung der Gleisberg & Kühn GmbH."),
}

for fname, (title, desc) in PAGES.items():
    body = (CONTENT / fname).read_text()
    head = HEAD.replace("__TITLE__", title).replace("__DESC__", desc)
    out = head + HEADER + body + FOOTER
    (ROOT / fname).write_text(out)
    print("wrote", fname)
