# Git Basics

Git is a Verson Control System (VCS). Others include Mercurial and SVN, but git is most widely used now.

It is a CLI (command line interface) based app, but does have GUI (graphical user interface) implementations.

Git's WHOLE purpose is to keep a history of a project and allow developers to work independently on the same codebase and manage their work with respect to others' work.

# Referencing
Atlassian Guide: https://www.atlassian.com/git

This does slightly favour Bitbucket over Github, but its still applicable. It also might reference SourceTree, a GUI for Git. I use this as I find it looks best (at least of the free Git GUIs).

## Difference between git and github

Git is the system, github is the app.

GitHub is just an application. Alternatives are bitbucket, gitlab and other small ones.

## How does it work
Git has this idea of a local and remote. Local is on your computer, remote is the central repository from which is the code base by which your app is served from. The remote is what is bundled and built to then be served to customers.

You make changes to your local files, stage the changes, commit the changes, then push them to the remote repository so others can access/pull them.

You create a repository in a directory by initialising git in it (git init).

## Common commands
* git add .

Adds the files to staging area. The staging area is for files you want to commit, after editing them. The '.' is for all. You could specify a specific file here by typing its path.

* git commit -m "message"

Makes a commit (think of it as like a marker) on your repository history with a message.

* git push

Pushes your commit from your local copy, to the remote repository. This then makes it available for others to see it and pull from it (see below)

* git pull

Pull changes from the remote repository to your local repository. Let's say you and your friend are working on a project. One day you list 10 flavours of cie cream, each on one line. Then stage, commit, and push your changes. Next day your friend pulls the changes, and adds 5 more flavours after your 10. He pushes his changes. You pull. And now you see his 5 extra flavours.

* git status

shows you the files edited, staged files, status of repo, and so on.

## Branches

Branches are a way for a developer to work from a certain point of code development on his own little feature without disturbing others. You would be creating a branch for every feature of fix you do, then merging your changes into what is designated as a master/trunk/production branch when finished.

```
        E --- F --- G // feature/about-page
       /             \
      /               \
A --- B --- C --- .. -- H // MASTER
      \         /
       \       /
        I --- J // feature/home-redesign
```

In the above we see we have a master branch that is our perfect, ready for users branch. Thisis what users see. We want to make a shiny new page to tell them about us. But we want to take our time and not show it until it is ready. We would create our own branch to make these changes. Make our commits (E, F, G) then merge it into Master (H) when done.

At the same time, another developer can made changes to the home redesign and their changes will not intefere with our work. We might be working on diffrent pages but edit common CSS styles, but on different parts of the CSS files. Git knows to only update the parts of files you updated and not the whole file, allowing updates on the same files but on different lines to just be changed.
