# qiime2.org

Source for the QIIME 2 homepage, https://qiime2.org.

## Attribution

This site is built on [AstroWind](https://github.com/onwidget/astrowind), an [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) template created by [onWidget](https://onwidget.com) and its [contributors](https://github.com/onwidget/astrowind/graphs/contributors).
AstroWind is licensed under the MIT license; its copyright and license notice are in [LICENSE.md](./LICENSE.md).

## Where things live

- `src/pages/index.mdx`: the home page content (MDX: Markdown with Astro components).
- `src/navigation.ts`: header and footer links.
- `src/config.yaml`: site name, SEO metadata, and theme options.
- `src/content/config.ts`: loaders that fetch data at build time:
  - the distribution list, from https://library.rachis.org/json/distros.json;
  - the news posts, from the release tag and news category on https://forum.qiime2.org.
- `src/components/CustomStyles.astro` and `src/assets/styles/tailwind.css`: colors, fonts, and other styles; `tailwind.config.js` holds the typography plugin settings.

## Building locally

Requires Node.js 18.17.1 or later.
Run these commands from the root of the repository:

| Command           | Action                                                      |
| :---------------- | :---------------------------------------------------------- |
| `npm ci`          | Install the locked dependencies                             |
| `npm run dev`     | Serve the site at http://localhost:4321, reloading on edits |
| `npm run build`   | Build the site into `dist/`                                 |
| `npm run preview` | Serve the built `dist/` locally                             |
| `npm run check`   | Run `astro check`, ESLint, and Prettier                     |

The build needs network access, because the loaders in `src/content/config.ts` fetch the distribution list and forum posts.
If `DISCOURSE_API_KEY` is set, the forum is queried with that key; without it, the forum's public endpoints are used, which is enough for a local build.

## Deployment

The site is deployed with Cloudflare Pages.
Cloudflare builds previews only for pull requests from branches in this repository, not from forks, so push a branch here when you want a preview.
