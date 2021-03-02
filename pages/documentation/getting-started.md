---
part: Documentation
title: Getting Started With NextBook
---

## Up & Running In 5 Easy Steps

- Clone the repo from [repo](https://github.com/amiroff/NextBook) or just use degit: `npx degit amiroff/NextBook`
- Run `npm install` or `yarn install` in project folder.
- Create your [markdown, mdx](/documentation/markdown) or jsx content in `pages` folder.
- Update `config.json` with your table of contents.
- Deploy your respository to [edge](https://vercel.com/new).
- Profit!

## Why NextBook? 

I needed a usable, fairly dynamic and good looking book/documentation creation tool. All available options like [GitBook](https://www.gitbook.com/), [mdBook](https://rust-lang.github.io/mdBook/), [Gatsby](https://www.gatsbyjs.com/) and [Leanpub](https://leanpub.com/) while great tools themeselves (kudos to devs!), did not meet my needs. Some of them offered parts of these, but overall even payed ones could not offer the full package. The features I was looking for were:

- Good looking, simple, responsive and readable UI.
- A single page application with good SEO.
- Fast interface, page loading and pre-loading.
- Keyboard shortcuts for frequently used actions.
- Dark mode support!
- Owning my data, committing to repository and seeing the results.
- Customizable and easy to read code. I want to tweak it to fit my needs.
- In-page dynamic table of contents with scroolspy.
- Rich markdown support, with extras like notes, footnotes, sub and sup support.
- Something more than what basic fenced code offers. Like line highlighting and linking to source, copying to clipboard.
- Use JSX inside markdown, to add interactivity.
- Use frontmatter for all the metadata.
- Fast markdown editor, or better yet, use my own favourite editor.
- Have unlimited and **free** contributors.
- And other small details.

## Enter NextBook

With NextBook, I tried to make it stupid simple writing technical docs while keeping featureset minimal. Just creating markdown content files and updating table of contents should be enough to deploy a statically generated docs/book with the advantages of hybrid React app and even node API to do anything fancy (grading, level switching, you name it..) along the road.

**Ready To Start?**

<a
  href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Famiroff%2FNextBook'
  target='_blank'
  rel='noopener'
>
  <img src='https://vercel.com/button' alt='Deploy with Vercel' className='raw' />
</a>

