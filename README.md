# Sketchpad

A browser-based drawing toy inspired by the Etch-A-Sketch — hover your mouse across the grid to leave a pixelated trail of color.

## Features

- **16×16 default grid** that fills a fixed 480px canvas
- **Resize on demand** — enter any grid size from 1×1 up to 100×100 via a prompt dialog
- **Three drawing modes:**
  - **Solid** — fills cells with a single color
  - **Rainbow** — each cell gets a random hue as you pass over it
  - **Shading** — cells darken gradually with each hover pass, building up to full opacity
- **Clear button** — resets the entire canvas without changing the grid size

## How It Works

The grid is built entirely with JavaScript — no cells are written by hand in the HTML. A single `<div id="container">` acts as the parent, and a `makeGrid(size)` function dynamically creates and appends `size × size` child divs to it. Flexbox with `flex-wrap: wrap` is what turns that row of divs into a grid. Each cell gets a `mouseover` event listener that applies color based on the current draw mode.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and element IDs |
| `style.css` | Flexbox grid layout, button styles, color classes |
| `script.js` | Grid generation, event listeners, draw modes, resize logic |

## Usage

Download all three files into the same folder and open `index.html` in any modern browser. No build tools, dependencies, or internet connection required.

## Credits

Built as a learning project following [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

Code written with guidance and instruction from [Claude.ai](https://claude.ai) (Claude Sonnet 4.5 by Anthropic), which helped construct the project step by step while explaining the thought process, code structure, and underlying concepts along the way.
Sketchpad
A browser-based drawing toy inspired by the Etch-A-Sketch — hover your mouse across the grid to leave a pixelated trail of color.
Features

16×16 default grid that fills a fixed 480px canvas
Resize on demand — enter any grid size from 1×1 up to 100×100 via a prompt dialog
Three drawing modes:

Solid — fills cells with a single color
Rainbow — each cell gets a random hue as you pass over it
Shading — cells darken gradually with each hover pass, building up to full opacity

Clear button — resets the entire canvas without changing the grid size

## Live Demo
[Play it here](https://gagematzen.github.io/Project-Etch-a-Sketch/)

Credits
Built as a learning project following The Odin Project Foundations curriculum.
Code written with guidance and instruction from Claude.ai (Claude Sonnet 4.5 by Anthropic), which helped construct the project step by step while explaining the thought process, code structure, and underlying concepts along the way.
