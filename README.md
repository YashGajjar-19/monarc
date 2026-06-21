# Monarc

Monarc is a premium fashion and atelier landing page built as a static web
experience. The site presents a quiet-luxury brand story through cinematic
video, editorial collection sections, hover previews, tabbed storytelling, and
a horizontal standards carousel.

![Monarc logo](./assets/images/logo/logo.png)

## Overview

This project is a front-end brand website for MONARC. It is designed around a
minimal editorial aesthetic with large typography, soft motion, image-led
sections, and smooth page interactions.

The experience includes:

- A full-screen animated preloader.
- Hero section with brand copy, oversized typography, animated background
  shapes, and a video feature.
- Moving text marquee for brand keywords.
- Featured collection list with hover image previews.
- Interactive Craft, Design, and Identity tabs.
- Swiper-powered carousel for the MONARC standard.
- Full-screen mobile navigation overlay.
- Responsive styling for desktop and smaller screens.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) via CDN
- [Swiper](https://swiperjs.com/) via CDN
- Google Fonts via CDN

No build tool or package manager is required.

## Project Structure

```text
.
|-- assets/
|   |-- fonts/
|   |-- images/
|   |   |-- list images/
|   |   |-- logo/
|   |   `-- slider images/
|   `-- videos/
|-- index.html
|-- script.js
|-- style.css
`-- README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YashGajjar-19/Monarc.git
cd Monarc
```

Open `index.html` in a modern browser.

Because the project loads Locomotive Scroll, Swiper, and Google Fonts from
CDNs, an internet connection is recommended when viewing the site locally.

## Running Locally

You can open the file directly:

```text
index.html
```

Or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Main Files

- `index.html` contains the page markup and external stylesheet/script links.
- `style.css` contains the visual system, layout, animations, and responsive
  rules.
- `script.js` initializes Locomotive Scroll, Swiper, loader behavior, collection
  hover previews, tab switching, and the full-screen menu.
- `assets/` contains brand imagery, carousel imagery, logo files, fonts, and
  video media.

## JavaScript Features

The site uses small vanilla JavaScript modules for:

- Smooth scrolling initialization when Locomotive Scroll is available.
- Hover-based fixed image previews for the featured collection list.
- Craft, Design, and Identity tab state updates.
- Swiper carousel setup.
- Mobile menu open and close behavior.
- Timed loader transition after the page starts.

## Browser Support

The site is intended for current desktop and mobile browsers, including:

- Chrome
- Edge
- Firefox
- Safari

## Notes

- External libraries are loaded from CDN links in `index.html`.
- Local brand assets are referenced with relative paths from the project root.
- The project is static and can be deployed to any static hosting provider,
  such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
