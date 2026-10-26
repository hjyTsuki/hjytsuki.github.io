# Jinyang Huang

Personal academic website: <https://hjytsuki.github.io/>.

An English homepage covering code agents, environment scaling, and post-training, with nine research works, experience, education, and a downloadable Chinese CV. Author roles, publication and submission status, and numerical results follow the supplied resume. Additional short descriptions and figures are grounded in the respective papers.

## Preview locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. The site uses static HTML, CSS, and a small JavaScript file for publication filters and the figure viewer. No build step or dependencies are required. With JavaScript disabled, all works remain visible and figure links open the larger image directly.

## Files

- `index.html`: biography, research, experience, and education.
- `stylesheet.css`: responsive layout, Times New Roman typography, and print styles.
- `site.js`: accessible research filters and figure viewer.
- `pdf/resume-zh.pdf`: the original Chinese CV.
- `assets/papers/`: seven official paper figures, larger images, thumbnails, and source records.
- `assets/papers/SOURCES.md`: figure URLs and provenance; `sources.json` also records crop coordinates and source checksums.
- `sitemap.xml`, `robots.txt`, `.nojekyll`: GitHub Pages and indexing configuration.

When updating the CV, replace `pdf/resume-zh.pdf` and check the corresponding page text. For new figures, record the paper or official repository URL in the figure source records.
