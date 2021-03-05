---
layout: index
part: Documentation
title: NextBook Features
description: While this is not a complete markdown referece, here are markdown features that you can use right away in your books.
tags: [markdown, reference, NextBook, md]
updated: 25-02-2021
---

## Front Matter

YAML front matter can be used to add title, description, part info, tags and update date to your pages. This page includes a front matter like this:

```yaml
---
layout: index
part: Documentation
title: NextBook Features
description: While this is not a complete markdown referece, here are markdown features that you can use right away in your books.
tags: [markdown, reference, NextBook, md]
updated: 25-02-2021
---
```

!> Note: specifying layout is optional
By default, all `.md` and `.mdx` files will use `layouts/index.jsx` as layout. You can use this property to use another one and completely change looks and layout of the page.

## HTML Tags

Markdown allows using html tags. This way you can use modern html5 tags, embed audio and video and everything else not covered by standard markdown. Here is an example and what it generates:

```html
<details>
  <summary>Toggle Me...</summary>
  <p>
    ...and see my content
  </p>
</details>
```
results in: 

<details>
  <summary>Toggle Me...</summary>
  <p>
    ...and see my content
  </p>
</details>

## Text Manipulation

```text
**This is bold text**

_This is italic text_

**_This is bold italic text_**

~~This is Strikethrough text~~

Superscript: 19^th^

Subscript: H~2~O
```
results in: 

**This is bold text**

_This is italic text_

**_This is bold italic text_**

~~This is Strikethrough text~~

Superscript: 19^th^

Subscript: H~2~O

## Horizontal Lines

Both of these work:

```text
---
***
```
results in:

---
***

## Marking Text
Wrap the text you want to mark/highlight  with `==`

```text
Lorem ==ipsum dolor== sit amet.
```
results in:

Lorem ==ipsum dolor== sit amet.

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

**Inline Code**

~~~
`$ rm -rf /`
~~~
results in: `$ rm -rf /`

**Indented Code (4 spaces)**

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

** Using Fenced Code Blocks**

Most of the time you'll use codefences. Here is a simple example, but you can do a lot more with them. For advanced fenced code block usages, see [Fenced Code](/documentation/fencedcode) chapter.

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

**Unordered List**

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

**Ordered List**

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

**Start Numbering With Offset**

```
57. foo
1. bar
```
results in:

57. foo
1. bar

## Checkboxes

These are often used to indicate todo items.

```
**TODO LIST**

- [x] Clone repo
- [x] Create some pages
- [ ] Commit & Push
- [ ] Deploy!
```
results in:

**TODO LIST**

- [x] Clone repo
- [x] Create some pages
- [ ] Commit & Push
- [ ] Deploy!

## Tables

Tables are a bit tricky, because you have to use all those pipes, but this is how markdown was designed. Using a special markdown editor like [Typora](https://typora.io/) will make your life easier with these. 

**Standard columns**

```
| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |
```
results in:

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

**Right Aligned Columns**

```
| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |
```
results in:

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

**Mixed Columns**

```
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |
```
results in:

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

## Links

Links can be auto-detected, but it would be better to be implicit and have support other markdown tools. Also, all external links in your documentation will be autodetected and appropriate html code will be generated.

```
[link to github](https://github.com)

[link with title](https://github.com 'Github FTW')

With angle brackets: <https://github.com/remarkjs>

Autoconverted link https://github.com/remarkjs

Cross page [absolute link](/documentation/getting-started) for single page app navigation.
```
results in:

[link to github](https://github.com)

[link with title](https://github.com 'Github FTW')

With angle brackets: <https://github.com/remarkjs>

Autoconverted link https://github.com/remarkjs

Cross page [absolute link](/documentation/getting-started) for single page app navigation.



## Images

You will use images a lot! Drop your images or svg vectors in public folder and link to them. NextBook will autoscale them for small displays. You can add captions and `alt` information to your images.

```
![](/images/octocat.png) 
![The Surface](/images/surface.jpg 'The Surface Device')
![Git Branching](/images/branching.svg 'Excalidraw FTW')
```
results in:

![](/images/octocat.png) 
![The Surface](/images/surface.jpg 'The Surface Device')
![Git Branching](/images/branching.svg)

If you want to just include simple image without bells and whistles above, use html `img` tag with `raw` class:

```
<a
  href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Famiroff%2FNextBook'
  target='_blank'
  rel='noopener'
>
  <img src='https://vercel.com/button' alt='Deploy with Vercel' className='raw' />
</a>
```
results in:

<a
  href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Famiroff%2FNextBook'
  target='_blank'
  rel='noopener'
>
  <img src='https://vercel.com/button' alt='Deploy with Vercel' className='raw' />
</a>

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
<kbd>control + command + space</kbd> on MacOS and <kbd>windows + .</kbd> on Windows.

## Tabs

While [markdown spec](https://commonmark.org) does not offer any tabbed interface, NextBook has you covered here. Use `tabs` and `tab` tags as follows. Note that these are not JSX elements, just pseudo-html, you don't have to import them into your document.

```html
<tabs>
<tab label='Windows Directions'>

Install via [chocolatey](https://chocolatey.org):

`choco install python`

</tab>
<tab label='MacOS Directions'>

Install via [brew](https://brew.sh):

`brew install python3`
</tab>
</tabs>
```
results in:

<tabs>
<tab label='Windows Directions'>

Install via [chocolatey](https://chocolatey.org):

`choco install python`

</tab>
<tab label='MacOS Directions'>

Install via [brew](https://brew.sh):

`brew install python3`
</tab>
</tabs>
