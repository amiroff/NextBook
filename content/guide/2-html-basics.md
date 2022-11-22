# 2.0 HTML Basics

**Welcome to Web Dev (continued):**

HTML is the foundation of the web. Check out [this quick video](https://www.youtube.com/watch?v=88QJumITbQA) to get a high level overview of the most important topics. (5 min)

Let's use Codepen to try out writing some basic HTML!&#x20;

Open a new [Codepen instance](https://codepen.io/pen) and follow along with parts of the following, [absolute beginners introduction to HTML](https://www.youtube.com/watch?v=ONin3xInlGw) (50min)

I like this because it starts from absolute zero and describes HTML basics in a pretty thorough manner. Follow along with the video and you'll have the ability to create and view your own HTML page on your computer. Once you've completed that, let's reinforce some of what they went over with these additional videos:

- [Text/Tags](https://www.youtube.com/watch?v=ItZN6o0ylao) (5 min)
- [Images](https://www.youtube.com/watch?v=LyINBQFpL0o) (5 min)
- [Lists](https://www.youtube.com/watch?v=6fmob-VeAMo) (5 min)
- [Links](https://www.youtube.com/watch?v=prG3mvho3tU) (5 min)
- [Meta tags](https://www.youtube.com/watch?v=bi5bfH_gVWE) (5 min)
- [How Meta tags influence your Google Search Ranking](https://developers.google.com/search/docs/crawling-indexing/special-tags)

### 2.1 Create your first webpage

Time to create your first web page! Follow along with the below videos on your computer. You may copy the page in the video, or create your own!

[**Your first web page.**](https://www.youtube.com/watch?v=88QJumITbQA)(5 min) This features a Live Reload plugin for VSCode, which is a super helpful tool when developing static pages!

[**Basic HTML Elements**](https://www.youtube.com/watch?v=PypMN-yui4Y) (10 min)

[**Advanced HTML Elements**](https://www.youtube.com/watch?v=1rbo_HHt5nw) (15 min)

[**Let's go through once more here**](https://www.freecodecamp.org/news/html-basics-for-beginners/) (15min). Follow along in the video and create the same site in VSCode.

### 2.2 Inspecting HTML/CSS

[This article here](https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css) is a great (and quick) overview of what the inspector is and why it is useful.

### 2.3 Intermediate HTML concepts

HTML Basics in VSCode: [Watch this video here](https://www.youtube.com/watch?v=UB1O30fR-EE) and follow along in VSCode. (60 min)

This video re-introduces some concepts, then uses all of the previously-learned knowledge and adds more tags, shows practical uses for the inspector. It could be used in place of all of the above HTML knowledge but I think it works better as a supplement.

Topics:

- Forms and different input types
- HTML5 tags like header, nav, article,
- CSS in HTML
- JS in HTML
- Inspector

### 2.4 Resources: Where to find help

#### Finding non-copyrighted images

We have to abide by software licenses and copyrights when using assets online, but there are some services which offer copyright-free assets. One of these resources is [Unsplash](https://unsplash.com/).&#x20;

Read [this short guide](https://awik.io/generate-random-images-unsplash-without-using-api/) and [follow along in this video](https://www.youtube.com/watch?v=e8p1zSNmK7Q) to see how we can generate mock images of specific sizes to act as a placeholder while your site is being built.

You can use this URL format to grab a random image with a width/height value: `https://source.unsplash.com/featured/480x320`

#### Filler Text or Dummy Content (AKA [Lorem Ipsum](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjspICmgK_7AhUuSzABHb4SAI0QmhN6BAgaEAI&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLorem_ipsum&usg=AOvVaw0_rKsmfs2-75sm_MYbRlS3))

When creating layouts it helps to have fake content in varying lengths to see how the site will render if section content changes. Lorem ipsum is a gibberish text often used for exactly this. Use it to generate paragraphs on the fly:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Aliquam etiam erat velit scelerisque in dictum.
Molestie a iaculis at erat pellentesque adipiscing commodo.
```

#### More Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) and [W3Schools](https://www.w3schools.com/) are _schools and resources for web developers_, if web technologies had a manual, these would be them
- [Can I Use.](https://caniuse.com) Not all HTML/CSS/JS features are created equal. Certain features (Ex: CSS content-queries) may not be available in certain browsers or devices and therefore will only be seen by a fraction of users to your website. You can see browser support for all features using&#x20;
- [StackOverflow](https://stackoverflow.com) is the #1 place to ask programming questions and find answers for common programming knowledge. Remember to do proper research beforehand and include any additional information with your question. Ask your question in the appropriate category:&#x20;
- The **Manual** - Reading the manual or documentation for the library, framework, or language is often the best way to answer your questions, and experienced devs will look here first if they need answers. It's easy to copy code on SO but the documentation will give you much more insight.

### 2.5 Project: HTML

You should now know how to use their IDE, command-line and version control basics, and have the ability to create and view webpages.

- Use Git to create a new repository. You can use the Github UI or `git init` on the command-line.
- Use HTML to create a static webpage: Create your own digital business card or contact card with your name (or nickname), a job title ("awesome web dev!"), and some way to contact you.

#### [Live demo](https://aam-101-html.netlify.app/)

> This was deployed to [Netlify](https://www.netlify.com/) for free, try it yourself!

**Helpful information**

- `git add .`
- Adds all of the files in the current directory `.` to git tracking in order to be committed.
- `git commit -am “Commit message for git history”`
- Commits -a (all) of the currently staged/tracked files with the -m (message) “Commit message for git history”

**Bonus:** Include an Image/Avatar on your page!

> [Example repository](https://github.com/AAM-Institute/project-002)
