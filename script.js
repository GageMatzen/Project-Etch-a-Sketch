let currentSize = 16;
let drawMode = 'solid';

/* ── makeGrid(size) ──────────────────────────────────────────────────────────
   Clears the container and fills it with size×size grid cells.
   Each cell gets a mouseover listener that draws based on the current mode.
──────────────────────────────────────────────────────────────────────────── */
function makeGrid(size) {
  const container = document.getElementById('container');

  // Wipe all existing cells before building the new grid
  container.innerHTML = '';

  // Divide the fixed 480px container evenly so the total space never changes
  const cellSize = 480 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';

    // Used by shading mode to track how dark this cell currently is (0–1)
    cell.dataset.opacity = '0';

    cell.addEventListener('mouseover', function () {
      if (drawMode === 'solid') {
        // Simplest approach: add a CSS class; the stylesheet handles the color
        this.classList.add('colored');

      } else if (drawMode === 'rainbow') {
        // HSL lets us pick any hue (0–360°) while keeping saturation/lightness fixed
        const hue = Math.floor(Math.random() * 360);
        this.style.background = `hsl(${hue}, 80%, 60%)`;

      } else if (drawMode === 'shade') {
        // Each hover adds 10% opacity, capping at fully opaque (1.0)
        let opacity = parseFloat(this.dataset.opacity);
        if (opacity < 1) {
          opacity = Math.min(1, opacity + 0.1);
          this.dataset.opacity = opacity;
          this.style.background = `rgba(124, 58, 237, ${opacity})`;
        }
      }
    });

    container.appendChild(cell);
  }

  document.getElementById('grid-info').textContent = `${size} × ${size}`;
  currentSize = size;
}

/* ── changeGrid() ────────────────────────────────────────────────────────────
   Asks the user for a new grid size via prompt(), validates the input,
   then rebuilds the grid.
──────────────────────────────────────────────────────────────────────────── */
function changeGrid() {
  const input = prompt('How many squares per side? (1–100)', currentSize);

  // prompt() returns null if the user cancels — bail out gracefully
  if (input === null) return;

  // prompt() always returns a string, so we convert it to a number
  const size = parseInt(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a whole number between 1 and 100.');
    return;
  }

  makeGrid(size);
}

/* ── clearGrid() ─────────────────────────────────────────────────────────────
   Resets every cell back to its original uncolored state.
──────────────────────────────────────────────────────────────────────────── */
function clearGrid() {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.classList.remove('colored');
    cell.style.background = '';
    cell.dataset.opacity = '0';
  });
}

/* ── setMode(mode) ───────────────────────────────────────────────────────────
   Switches the active draw mode and updates which toolbar button looks active.
──────────────────────────────────────────────────────────────────────────── */
function setMode(mode) {
  drawMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btn-' + mode).classList.add('active');
}

// Build the initial 16×16 grid when the page first loads
makeGrid(16);
