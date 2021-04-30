---
part: NextBook
title: Getting Started
---

Here's how to get started with your own book or documentation.

1. Make sure you have NodeJS installed, you can get latest LTS version from [official site](https://nodejs.org/en/download/).
2. Open a terminal/command prompt window and bootstrap a new project with `npx create-next-app my-awesome-book -e https://github.com/amiroff/NextBook`
3. Change into just created project folder with `cd my-awesome-book`
4. Run `npm run dev:watch` command and start local web server.
5. Open [http://localhost:3000/](http://localhost:3000/) in browser of your choise.
6. Check documentation to see what's possible with NextBook.
7. Create your [markdown](/reference/markdown) or [MDX](/reference/using-mdx) content in `content` folder. Pages should auto-refresh as you modify markdown content.
8. Update `config/config.json` with your table of contents and other information.
9. Update `pages/index.jsx` to suit your needs as a standalone landing page or as a redirect to content.
10. Once you are happy with content, deploy your repository to any static hosting provider like Vercel, Netlify, Github Pages or Google Cloud. I recommend [Vercel](https://vercel.com/new).
