---
part: NextBook
title: Settings & Customization
---

## General Settings

NextBook is very easy to configure. All you need is change configuration in `config/config.json` file to suit your needs and add your table of contents.

## Advanced Settings

There is also an example environment file `.env.local.example` which can be used for advanced usages  like keeping sensitive configration data or keys. To use it, make a local copy with the name `.env.local` and customize content. 

!> Warning When Deploying
Keep in mind that the host you are planning to deploy the application must also support environment variables in order to use them. Most of them do.

## Customizations

NextBook is open source and completely customizable. You can modify look & feel using tailsindcss, or completely change behaviour of components.

Here are customizable files/folders of the project:

```
components  -> Your components and state stores live here
config      -> Main configuration file lives here
content     -> All book/documentation markdown content goes here.
layouts     -> Layouts of your pages go here. Modify these if you want to completely change design.
pages       -> Standard Next.js pages folder. This app uses dynamic routes [part]/[page]. You can add as many pages as you want here.
public      -> Keep assets like images you reference in content files here.
styles      -> Some global style for screen and print. Change as you like.
```
