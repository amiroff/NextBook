---
part: Documentation
title: Markdown Usage
description: While this is not a complete markdown reference, here are markdown features that you can use right away in your books.
tags: [markdown, reference, NextBook, md]
updated: '2021-03-14'
---

## Front Matter

YAML front matter can be used to add title, description, part info, tags and update date to your pages. This page includes a front matter like this:

```yaml
---
part: Documentation
title: Markdown Usage
description: While this is not a complete markdown reference, here are markdown features that you can use right away in your books.
tags: [markdown, reference, NextBook, md]
updated: '2021-03-14'
---
```

## HTML Tags

Markdown allows using html tags except scripts. This way you can use modern html5 tags, embed audio and video and everything else not covered by standard markdown.

## Text Manipulation

```text
**This is bold text**

_This is italic text_

**_This is bold italic text_**

~~This is Strikethrough text~~

Superscript: 19^th^

Subscript: H~2~O

This is ==highlighted== text.
```
results in: 

**This is bold text**

_This is italic text_

**_This is bold italic text_**

~~This is Strikethrough text~~

Superscript: 19^th^

Subscript: H~2~O

This is ==highlighted== text.

## Horizontal Lines

Both of these work:

```text
---
***
```
results in:

---
***

## Blockquotes

```text
> Here is a blockquote.

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
```
results in: 

> Here is a blockquote.

> Blockquotes can also be nested...
>
> > ...by using additional `greater-than` signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Footnotes

```
Footnote 1 link. [^first]

Footnote 2 link. [^second]

[^first]: Footnote **can have markup**.

[^second]: Simple footnote text.
```
results in: 

Footnote 1 link. [^first]

Footnote 2 link. [^second]

[^first]: Footnote **can have markup**

[^second]: Footnote text.

## Code

A special care was given to displaying code on screen.

### Inline Code

~~~
`$ rm -rf /`
~~~
results in: `$ rm -rf /`

### Indented Code (4 spaces)

~~~
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
~~~
results in:

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### Fenced Code Blocks

Most of the time you'll use codefences. Here is a simple example, but you can do a lot more with them. For advanced fenced code block usages, see [Fenced Code](/reference/fencedcode) chapter.

````
```bash
#!/bin/bash
echo "Hello World"
```
````
results in: 

```bash
#!/bin/bash
echo "Hello World"
```

## Lists

### Unordered List

```
- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```
results in:

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### Ordered List

```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```
results in:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

## Checkboxes

These are often used to indicate task items.

```
- [x] Clone repo
- [x] Create some pages
- [ ] Commit & Push
- [ ] Deploy!
```
results in:

- [x] Clone repo
- [x] Create some pages
- [ ] Commit & Push
- [ ] Deploy!

## Tables

Tables are a bit tricky, because you have to use all those pipes, but this is how markdown was designed. Using a special markdown editor like [Typora](https://typora.io/) will make your life easier with these. 

### Standard Columns

```
| Option | Description                                                 |
| ------ | ------------------------------------------------------------|
| data   | path to data files to supply the data passed into templates.|
| engine | engine to be used for processing templates.                 |
| ext    | extension to be used for dest files.                        |
```
results in:

| Option | Description                                                 |
| ------ | ------------------------------------------------------------|
| data   | path to data files to supply the data passed into templates.|
| engine | engine to be used for processing templates.                 |
| ext    | extension to be used for dest files.                        |

### Right Aligned Columns

```
| Option | Description                                                   |
| -----: | ------------------------------------------------------------: |
| data   | path to data files to supply the data passed into templates.  |
| engine | engine to be used for processing templates.                   |
| ext    | extension to be used for dest files.                          |
```
results in:

| Option | Description                                                   |
| -----: | ------------------------------------------------------------: |
| data   | path to data files to supply the data passed into templates.  |
| engine | engine to be used for processing templates.                   |
| ext    | extension to be used for dest files.                          |

### Mixed Columns

```
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```
results in:

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

## Images

You will use images a lot! Drop your images or svg vectors in public folder and link to them. NextBook will autoscale them for small displays. You can add captions and `alt` information to your images.

```
![The Octocat](/images/octocat.png) 
![The Surface](/images/surface.jpg 'The Surface Device')
```
results in:

![he Octocat](/images/octocat.png) 
![The Surface](/images/surface.jpg 'The Surface Device')

If you use [Excalidraw](https://excalidraw.com/) svg drawings and want them to change colors accordingly in dark mode, add `|ex` to image alt text. See below example in light/dark modes:

```
![Git Branching|ex](/images/git-branching.svg)
```

results in:

![Git Branching|ex](/images/git-branching.svg)

## Links

Links can be auto-detected, but it would be better to be implicit and have support other markdown tools. Also, all external links in your documentation will be autodetected and appropriate html code will be generated.

```
- [Basic link](https://github.com)
- [Link with title](https://github.com 'Github FTW')
- Link with angle brackets: <https://github.com/remarkjs>
- Autoconverted link https://github.com/remarkjs
- Cross page [absolute link](/nextbook/getting-started) for single page app navigation.
- Link to [part of a page](#links)
- Linking with image: 
- [![Deploy with Vercel raw][1]][2]

[1]:  https://vercel.com/button
[2]:  https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Famiroff%2FNextBook "Deploy With Vercel now!"

```
results in:

- [Basic link](https://github.com)
- [Link with title](https://github.com 'Github FTW')
- Link with angle brackets: <https://github.com/remarkjs>
- Autoconverted link https://github.com/remarkjs
- Cross page [absolute link](/nextbook/getting-started) for single page app navigation.
- Link to [part of a page](#links)
- Linking with image: [![Deploy with Vercel raw][1]][2]

[1]:  https://vercel.com/button
[2]:  https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Famiroff%2FNextBook "Deploy With Vercel now!"


## Notifications

These are custom features often needed to display hints. I find them very useful.

### Hints

```
!> A Hint Title
Make sure to check out [Markdown Guide](https://www.markdownguide.org/) to check the basic markdown syntax you can use with NextBook.
```
results in:

!> A Hint Title
Make sure to check out [Markdown Guide](https://www.markdownguide.org/) to check the basic markdown syntax you can use with NextBook.

### Warnings

```
?> And Warning Title
Try to keep usage of html elements to rare cases where standard markdown does not cover your basic markup needs.
```
results in:

?> And Warning Title
Try to keep usage of html elements to rare cases where standard markdown does not cover your basic markup needs.

### Errors

```
x> An Error Title
Ooooops, an unknown error occured.
```
results in:

x> An Error Title
Ooooops, an unknown error occured.

## Emojis

Nothing fancy, just use typical 🥳 emojis.  
Press <kbd>control + command + space</kbd> on macOS and <kbd>windows + .</kbd> on Windows.

## Containers

### Accordion

``` markdown
::: details
  ::: summary
  Toggle Me
  :::
  ...and see my content
:::
```

results in:

::: details
  ::: summary
  Toggle Me
  :::
  ...and see my content
:::

?> Warning
Accordion component is not print compatible. Use responsibly.

### Tabs

While [markdown spec](https://commonmark.org) does not offer any tabbed interface, NextBook has you covered here. Use `tabs` and `tab` containers as follows:

``` markdown
::: tabs
  ::: tab Windows Directions

  Install via [chocolatey](https://chocolatey.org):
  
  `choco install python`
  :::
  ::: tab macOS Directions

  Install via [brew](https://brew.sh):

  `brew install python3`
  :::

  ::: tab Linux Directions

  Install via apt:

  `sudo apt install python3`
  :::
:::
```
results in:

::: tabs
  ::: tab Windows Directions

  Install via [chocolatey](https://chocolatey.org):
  
  `choco install python`
  :::
  ::: tab macOS Directions

  Install via [brew](https://brew.sh):

  `brew install python3`
  :::

  ::: tab Linux Directions

  Install via apt:

  `sudo apt install python3`
  :::
:::

