# Design direction

Portfolio of Taufik Ilham. Direction set 2026-10-17, revised the same day.

Dial: ENERGY 1 / RHYTHM 1 / MOTION 2

## Reference

The owner asked for the minimal, text-first style of antfu.me. Borrow its structure, not its signature:

- Take: one centered reading column (about 42rem), a large name, gray body text with brighter linked text, small inline chips, a short divider between blocks, and a quiet top nav.
- Leave: the handwritten logo, the dot background, and the giant outlined headings on the projects page. Those are his identity.
- The owner later asked for his growing plum branches as well (see Signature).

## Identity

A full-stack developer and fresh graduate, writing plainly about real work. The page reads like a short personal note followed by evidence: projects, experience, education and credentials.

## Signature

The owner is an FC Barcelona fan. Blue `#004d98` and garnet `#a50044` are the only two colors on an otherwise neutral page.

- Blue is the accent: link underlines, hover and focus.
- Garnet has one job: it marks awards.
- The section divider is a short line in both colors. It is the one repeated motif.
- Hidden background (added at the owner's request, dark theme only): an FC Barcelona crest wallpaper sits under the whole page, covered by the page color. Only a small, irregular opening around the mouse pointer, about 1.5 to 2.7cm across, shows it. It is the one playful moment on an otherwise quiet page. The light theme stays plain white, because the dark photo would read as a black hole there.

- Header crest (added at the owner's request): the header shows the short name "Ilham" followed by a small monochrome FC Barcelona crest, black in the light theme and white in the dark one. It sits after the name, not before it, so it reads as a fan mark rather than the site's own logo. In the dark theme it is the visible hint of the hidden crest wallpaper.

- Scroll meter (added at the owner's request): a small readout in the bottom right corner shows how far down the page the reader is, as a percentage next to a copy of the section divider. The divider fills blue through the first half of the page and garnet through the second, like the two halves of a match. It appears once the page is scrolled and ignores clicks, so it never blocks the text under it.

- Growing branches (added at the owner's request, after the plum background on antfu.me): on each visit, thin gray branches grow in slowly from the edges of the window and stop by themselves. They fade toward the middle, so the text column stays clear. The same faint gray works on the white and the black page. Phones get two trees instead of four.

Dark theme lightens both colors only where they are used as text: `#5a9be8` and `#f0506e`.

## Type

Inter for everything, matching the reference: neutral and readable at 16px. Weights stay thin at the owner's request, thinner than the reference: 200 for the name, 300 for body text and section headings, 400 for the small titles and labels that must stand out from 300 body text. JetBrains Mono uses 300 to match. Size and color carry the hierarchy, not weight. JetBrains Mono only for literal data such as the email address and certificate numbers.

## Content hierarchy

1. Short intro with a small round photo next to the name (the owner asked for it). The KIDECO Innovation Challenge 2026 award comes right after the greeting.
2. Projects, each opening a case study.
3. Experience (work), then Organizations, both newest first.
4. Education, with the thesis.
5. Awards and certifications.
6. Stack.
7. Contact.

## What the dials mean here

- ENERGY 1: quiet. Neutral page, color only on links and awards.
- RHYTHM 1: every section uses the same simple heading and list pattern, on purpose. Reading order is the structure.
- MOTION 2: hover and focus changes, plus the pointer reveal of the hidden background in the dark theme, whose edge slowly changes shape. The growing branches are the one page-load moment: they grow once and stop. The scroll meter moves only with the reader's own scrolling. Images show a gray placeholder that pulses softly until the file arrives (added at the owner's request), and the project screenshot placeholder says what it is loading, or why it failed. Nothing else moves: no scroll animation, smooth-scroll library or custom cursor. The reveal is off on touch screens. When the visitor prefers reduced motion, the reveal keeps a still shape, the branches appear fully grown, and the placeholder stops pulsing.
