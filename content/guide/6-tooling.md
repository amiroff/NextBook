---
title: Further Development & Tooling
---

# 6.0 Further Development & Tooling

## 6.1 UNIX command-line

At this point you should have had some interaction with the command-line shell using `git`. The command-line is a powerful and dangerous tool, and you should never enter commands from sources you don’t trust, as some pranks encourage running `sudo rm -rf /*`, which will wipe your entire system and data. Let's look into what this command does.

sudo - “Superuser Do,” runs the proceeding command with full root/administrator privileges

rm - “Remove,” a Unix command to delete files from the system

\-rf - Flags follow a command and can come in a few forms, “-r -f”, “--recursive –force”, “-rf” all have the same meaning

\-r - Recursive, meaning the remove command will delete directories and loop into the child directories to delete files as well

\-f - Force, meaning the remove command will ask for no confirmations before deleting files

/ - a “/” means “root directory,” or the highest folder within the file system. On Windows OS this is usually `C:\`. This tells the remove command from which directory to begin deleting files

/\* - an asterisk\* is a wildcard character that tells the remove command to match any file/folder name. It can be used with partial strings like `wedding*` to match “wedding-photo.jpg” file and “wedding photos” folder or “\*.jpg” to match any JPG image

Project: Using the command-line, change directories (`cd`) to your home folder (`/home/<username>` or `~`) and create a new directory (`mkdir`) named “Repos”.

Change directories into the newly-created “Repos” folder and create a new file (`touch`) named “hello.txt”. Open the file using `nano` and add the word “world” to the file contents. Save (`ctrl-O`) and exit (`ctrl-X`)

### 6.2 Configuration Files

Configuration files are specific to the language, framework, or application you are working with. They may contain information about the project or its dependencies. The filenames may begin with a `.` , which usually indicates a hidden file/directory.

#### Git

Git configuration files are stored in the `.git` directory. These can include hooks or requirements for code to be committed or pushed.

#### Node

Node comes with a built-in package manager to handle dependencies. `npm` is the Node Package Manager. `yarn` is an `npm` alternative. Since we will be working with NodeJS, you'll want to familiarize yourself with [the `package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) file.

Once you have Node installed, you can generate a new `package.json` file by running `npm init` within a project directory.

### 6.3 CSS Pre-processors

SASS (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into CSS. **SCSS is the main syntax for the SASS which builds on top of the existing CSS syntax.** CSS is a subset of SCSS, which means that CSS is valid SCSS.

<mark>**Assignment:**</mark> Complete this [Sass Crash Course](https://www.youtube.com/watch?v=Zz6eOVaaelI).

### 6.4 Javascript Bundling & Scaffolding

<mark>**Watch this video:**</mark> [Why do we use a Javascript bundler?](https://www.youtube.com/watch?v=3UWlufSzO4k) This is a dead simple explanation to bundling and why it is useful.

Scaffolding is used to quickly generate a baseline project template from a set of parameters.

For this course we will be using the [Vite](https://vitejs.dev/) to handle bundling and scaffolding our files.

Follow along in [this tutorial](https://codedamn.com/news/javascript/what-is-vite-js) that demonstrates using Vite to bundle a react app.

### Module 6.0 Survey

Wow you're getting so close to the end! Remember, **these surveys also help us track where you are in the process!** Please turn them in for all of us :)

<mark>**Please complete this**</mark> [**short survey here**](https://docs.google.com/forms/d/e/1FAIpQLSeSNkXXal1MJVstUu3Asmsb56qeADTPdGIVNzzV5Hv8LUjzeA/viewform) <mark>**for this module.**</mark>
