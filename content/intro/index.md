---
part: Introduction
title: Welcome to NextBook!
---

![A screenshot of NexBook page. raw](https://next-book.vercel.app/screenshot.png)

**NextBook** is quick and easy way to buid technical books or documentation that support modern standards and run blazingly fast. It works by compiling markdown and MDX to static pages. This way, first content render on user's device is near instant.

NextBook makes writing technical docs stupid simple while keeping featureset minimal but open for further extension.

## Getting Started

1. Having Node installed beforehand, bootstrap a new project with `npx create-next-app my-awesome-book -e https://github.com/amiroff/NextBook`
2. Run `npm run dev:watch` and open [http://localhost:3000/](http://localhost:3000/)
3. Check documentation to see what's possible with NextBook.
4. Create your [markdown](/reference/markdown) or [MDX](/reference/using-mdx) content in `content` folder. Pages should auto-refresh as you modify markdown content.
5. Update `config/config.json` with your table of contents and other information.
6. Update `pages/index.jsx` to suit your needs as a standalone landing page or as a redirect to content.
7. [Deploy](https://vercel.com/new) your repository to any static hosting provider like Vercel, Netlify, Github Pages or Google Cloud.
8. Have fun! 🎉

This should be enough to have a statically generated documentation page / book.

With the advantages of [Next.js](https://nextjs.com) and [React](https://reactjs.org), anything fancy (grading, level switching...) can be added along the way.

## What's New In NextBook 2.0?

- Support for multiple books in one project.
- Design based on [tailwindcss](https://tailwindcss.com/).
- Markdown content is now being loaded with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote). This means content is now separated from routed pages.
- Auto-centered layout on big resolutions leading to one less configuration option.
- 40% smaller bundle size.
- Navigation bar.
- Updated dependencies.
- Refined mobile UI.
- Less code (−4,000 LOC).

## Primary Features 🧿

- 💅 Good looking, simple and readable UI based on [tailwindcss](https://tailwindcss.com/) including `dark` mode and `auto-centered` layout,
- 🌎 Great SEO out of the box,
- 📱 Mobile & printer friendly,
- 🚀 Single page application with pre-fetching,
- 🧾 Easy content creation with [markdown](https://www.markdownguide.org/) and [MDX](https://mdxjs.com/) support,
- 💻 Something more than what basic fenced code offers. Like line highlighting, linking to source and copying to clipboard,
- 🤓 Familiar [Git](https://github.com/) workflow and collaboration,
- ⌨︎ Keyboard shortcuts for frequently used actions (theme change (T), page navigation (<-->)),
- 🔎 In-page optional table of contents with scroolspy,
- © You own your data, **code is the data**. Committing to repository and seeing results in the simplest form,
- 🏎 Fast to get started, just one command for up & running locally,
- 🎊 One click (or push) [deployment](https://vercel.com/new),
- 🛠 Unlimited dynamic features can be added with [MDX](https://mdxjs.com/),
- ⚙︎ Customisable, extensible and simple codebase,
- ❤ Built on open-source,
- 👍 And many more small details...

!> Use Right Tool For The Job 
NextBook is not geared towards API documentation, rather it is optimised for tutorial/book style documentation. For API docs [ReadTheDocs](https://readthedocs.org/), [Docusaurus](https://docusaurus.io/) or plain [Sphinx](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) would be a better fit.
