# 1.0 Prerequisites

### (OS, Browser, running in a VM) [0-6 hours]

Let's first dig into some key tools that make our experience on the internet possible.

Via The Odin Project:

> **If you are already using MacOS, Ubuntu, or** [**an official flavor of Ubuntu**](https://wiki.ubuntu.com/UbuntuFlavors) **as your operating system and have Google Chrome as an installed browser, you can skip this section and start with the UNIX Command-line.**

> We can only support the operating systems indicated above. Our instructions have been tested with MacOS, Ubuntu, and official flavors of Ubuntu. We do not recommend installing an OS that is only based on Ubuntu (like Mint, Pop!\_OS, ElementaryOS, etc).

#### Operating System

What is an Operating System? [Check this out here.](https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/)

#### Browsers

There are many browsers available for various desktop and mobile platforms, the one we will be using is [Google Chrome](https://www.google.com/chrome/). Some website features may work differently or not at all depending on the user's OS, browser, and versions. Therefore this course will assume you are using the latest version of Chrome.

We suggest using Chrome as your browser. Just like Chrome, Apple's Safari and Microsoft's Edge browsers are built on top of Google's Webkit engine, so they may work perfectly fine. In our opinion, however, Chrome is the leading browser at this time.

### 1.1 Windows Prerequisites (install Ubuntu Linux)

Windows is NOT a UNIX OS, that means that the command prompt in Windows is totally different than Linux or Mac terminal/command-line.

There are some differences in command prompt, bash, and powershell you'll want to be aware of. [Watch this video.](https://www.youtube.com/watch?v=nahtw_csB5w) (5 min)

#### Virtual Machine Setup

Window users only: To better serve you during AAM, let's get you set up on a Virtual Machine. A VM is a completely separate, isolated OS running (or emulated) inside of your normal OS. It allows you to install and run programs in a protected sandbox, without having any effect on your current programs and data.

The Odin Project walks through setup of a UNIX OS in a virtual machine. **Windows users will need to follow these instructions**

- # Read [this page here](https://www.theodinproject.com/lessons/foundations-installation-overview) first, then [this one here](https://www.theodinproject.com/lessons/foundations-installations).&#x20;

## 1.2 UNIX command-line

The command-line is a powerful and dangerous tool, and you should never enter commands from sources you don’t trust, as some pranks encourage running `sudo rm -rf /*`, which will wipe your entire system and data.

sudo - “Superuser Do,” runs the proceeding command with full root/administrator privileges

rm - “Remove,” a Unix command to delete files from the system

\-rf - Flags follow a command and can come in a few forms, “-r -f”, “--recursive –force”, “-rf” all have the same meaning

\-r - Recursive, meaning the remove command will delete directories and loop into the child directories to delete files as well

\-f - Force, meaning the remove command will ask for no confirmations before deleting files

/ - a “/” means “root directory,” or the highest folder within the file system. On Windows OS this is usually `C:\`. This tells the remove command from which directory to begin deleting files

/\* - an asterisk\* is a wildcard character that tells the remove command to match any file/folder name. It can be used with partial strings like `wedding*` to match “wedding-photo.jpg” file and “wedding photos” folder or “\*.jpg” to match any JPG image

Project: Using the command-line, change directories (`cd`) to your home folder (`/home/<username>` or `~`) and create a new directory (`mkdir`) named “Repos”.

Change directories into the newly-created “Repos” folder and create a new file (`touch`) named “hello.txt”. Open the file using `nano` and add the word “world” to the file contents. Save (`ctrl-O`) and exit (`ctrl-X`)

## 1.3 Version Control - Git (AKA a time machine for your files)

**Installing Git**

> On Mac, open a terminal and type `git` to initiate an xcode install prompt that will automatically install git.

Reference [this link here](https://git-scm.com/downloads) while you watch [this video here](https://www.youtube.com/watch?v=N-SKiqoHBnY) (7 min).

**Intro to Git**

Let's get you setup with Git! Follow [this course here](https://www.theodinproject.com/lessons/foundations-git-basics) from The Odin Project to get your account set up.\
**At this point you should be able to open a terminal and check your git version by running the following command: \`git -v\`**

## 1.4 Interactive Development Environment (IDE): Visual Studio Code

Now let's get you VSCode. Watch [this video here](https://code.visualstudio.com/docs/introvideos/basics) and follow along. You can [grab VSCode here](https://vscode.dev/).

## 1.5 NodeJS

We're going to be using Javascript on the command-line, outside of the browser. For that, we'll need NodeJS. The Odin Project can help us install it, [follow along with this article here.](https://www.theodinproject.com/lessons/foundations-installing-node-js)

## 1.6 Welcome to Web Dev

Let's go over the tools we've just installed, and get acquainted with Git. [Watch this video here](https://www.youtube.com/watch?v=HfTXHrWMGVY) (5 min).

### 1.6 PROJECT

Use the command-line, Git, and VSCode to update a repository.

- Create a personal Github account
- Fork [our example project](https://github.com/AAM-Institute/project-001) into your personal account.
- Update the project by adding your name or nickname to the list under "I Was Here"
- Commit to save your changes, then push to your new fork.
- Create a Pull Request back to the original repository. Once it is accepted and merged, your name will be shown on the AAM project page.

This can be done using the Github UI. Bonus points for using the command-line and VSCode!

**Bonus:** Clone your fork to your local machine. Edit the files in VSCode then use the CLI to `git commit` and `git push`. Then create a Pull Request using the Github UI as normal.

> [Example repository](https://github.com/AAM-Institute/project-001)
