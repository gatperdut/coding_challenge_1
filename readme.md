# Setup

Start the server with `npm run challenge`.

Then point your browser to `localhost:8080/src`.

If you need any new js files, don't forget to reference them in `index.html`.

# Introduction

Wolfenstein 3D used a pretty cool trick to give the illusion of a 3D rendered world while, under the hood, it used a 2D map.

![](https://media.moddb.com/images/members/4/3094/3093390/profile/screen04.png)

The most glaring limitation of this technique is the inability of the engine to display any floor that is at a different height, be it above or below, so essentially movement occurs in a plane.

(Doom was notable in achieving heights from a 2D map with another trick, which in turn had limitations of its own - like no floor ever stacked on top of another floor - but that's beyond scope.)

Your task is to replicate Wolfenstein's technique (just the walls and maybe the floor and ceiling, you can safely ignore the enemies and the rest of the interface).

# Challenge

When launching the app you'll see a canvas with 2 black squares. Each is 400x400 pixels, 0-indexed, origin is top-left, and the `x` is horizontal.

* Left square (`top-view.js`): Use it to draw your 2D map walls. A few random lines should be enough (and optionally 4 additional ones to bound the world). Also, your character's position should be marked here (more on that below).

* Right square (`render-view.js`): Use it to render your "3D" environment in first person ;)

There should be a direct match between one view and the other.

## General hints

* In order to make the visualization clearer, you might want to display your character in your top view (a thick dot will suffice). Consider also its [field of view](https://en.wikipedia.org/wiki/Field_of_view) angle. Moving it around with `WASD` and rotating with `Q` and `E` will qualify you for top nerdness.

* You will definitely want to give a quick read to the wikipedia articles on [line intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line_segment) and [euclidean vectors](https://en.wikipedia.org/wiki/Euclidean_vector).

* Have you ever noticed how things that are further away from you look smaller (and hence shorter vertically)?

## PixiJS

* [Documentation](https://pixijs.download/dev/docs/index.html)

Given enough time some [cool things](https://daijima.jp/) can be done with PixiJS. However, we are going to limit ourselves to the basics.

In order to draw stuff you use a [Graphics](https://pixijs.download/dev/docs/PIXI.Graphics.html) object. The library relies on a hierarchy of [Container](https://pixijs.download/dev/docs/PIXI.Container.html) objects (so that transformations like translation, rotation or scaling can be applied to groups of objects instead of iterating through each) but in our case all that has been done for you in the Top View and the Render View.

So to draw a line:

```
this.graphics
.lineStyle(1, 0x00FF00)
.moveTo(100, 200)
.lineTo(150, 250);
```
Note that if many lines share the same [`lineStyle`](https://pixijs.download/dev/docs/PIXI.Graphics.html#lineStyle), you'd issue that command only once. So you can think of it as a state machine of sorts. Also note how each method returns `Graphics` itself, so chaining is possible.
