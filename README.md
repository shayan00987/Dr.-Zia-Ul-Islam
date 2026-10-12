# Dr. Zia Ul Islam — Aesthetic & Plastic Surgery Website

A lightweight, responsive static website concept with a warm ivory, navy, and muted-blue visual identity. It includes a custom butterfly-inspired logo, the supplied cropped portrait, locally stored generated illustrative imagery, a manually controllable auto-advancing gallery, FAQ accordions, mobile navigation, and a login/sign-up interface preview.

## Project structure

```text
dr-zia-plastic-surgery-website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo.png
    ├── logo.svg
    ├── dr-zia-portrait.jpg
    ├── hero-consultation.webp
    ├── consultation-room.webp
    ├── consultation-planning.webp
    ├── aesthetic-consult.webp
    ├── clinic-reception.webp
    ├── operating-suite.webp
    ├── clinic-hero.webp
    └── facial-consult.webp
```

## Run locally

Open `index.html` in a browser. No build step or JavaScript framework is required. All website imagery is stored locally in `assets/`; the appointment, Instagram, Facebook and professional-profile links open external websites.

## Publish with GitHub Pages

1. Extract the ZIP.
2. Upload the *contents* of this folder to the repository root (not the enclosing folder).
3. Ensure `index.html` sits in the repository root.
4. Commit the changes and enable GitHub Pages from the repository settings.

## Important before public launch

- **Authentication:** Log-in, sign-up, Facebook and Instagram sign-in are UI previews only. Real accounts require a secure server/authentication provider, OAuth app registrations, callback URLs, privacy/terms pages, and appropriate data protection. Never collect real passwords with this static demo.
- **Medical review:** Confirm every credential, specialty, location, appointment detail and claim with the practice before launch. The credential summary is based on the Aga Khan University faculty profile and should be verified for current accuracy.
- **Illustrative images:** The clinic rooms, consultation scenes, and operating room are AI-generated illustrations, not verified photos of the actual practice, actual staff, or patients. They must not be represented as actual patient results or as proof of outcomes.
- **Scheduling:** The appointment button uses the scheduling URL supplied for this project. Test that it remains active and displays the correct availability.
- **Privacy:** Add the practice's approved privacy policy, terms, accessibility details, and cookie/analytics disclosures if needed.

## Image optimization

The section images are compressed WebP files and the portrait is a compressed JPG. CSS uses responsive layouts and the page does not depend on external font libraries or image CDNs.
