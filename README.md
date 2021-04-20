# Scrollburglars Exercise

In this exercise, your goal is to find and fix the scrollburglars across 3 different projects.

## Running the projects

Start by installing NPM dependencies (`npm install` or `yarn install`).

Run a local fileserver by running `npm start` or `yarn start`.

Visit http://localhost:5000, and you'll see a list of files:

![A directory listing of the files and folders in this project, in a web browser](./docs/file-server.png)

The projects are numbered. Start by clicking "01-recut" to view the first project.

## Project 1: Recut

![A screen recording showing that the page can be scrolled horizontally, slightly, in the Chrome responsive emulator](./docs/recut.gif)

Recut is software that helps with video editing, created by Dave Ceddia.

On mobile screen sizes, it overflows horizontally, causing a scrollburglar:

## Project 2: Warp and Weave

![Another example of horizontal overflow](./docs/warp-and-weave.gif)

Warp and Weave is an online course that teaches weavers how to use color effectively. It's a wonderful site created by Tien Chiu. It also has a horizontal overflow on mobile:

## Project 3: Blog example

![Yet another example](./docs/blog-example.gif)

I created this third and final example, and it's a tricky one!

Specifically, in addition to removing the horizontal overflow, you must also take care not to break the sticky social icons on desktop:

![A desktop screen recording, showing icons that sit to the left of the content, and become anchored to the viewport on scroll](./docs/sticky-icons.gif)
