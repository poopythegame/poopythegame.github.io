const godotConfig = {
  args: [],
  canvasResizePolicy: 0, 
  executable: "assets/index",
  "fileSizes":{"index.pck":87968256,"index.wasm":39513091},
  canvas: document.getElementById("canvas"),
};
const engine = new Engine(godotConfig);
const canvas = godotConfig.canvas;
let canStart = true;

function updateCanvasResolution() {
    const pixelRatio = window.devicePixelRatio || 1; 
    const bounds = canvas.getBoundingClientRect(); 
    canvas.width = bounds.width * pixelRatio;
    canvas.height = bounds.height * pixelRatio;
    if (typeof engine.setWindowSize === 'function') {
        engine.setWindowSize(bounds.width * pixelRatio, bounds.height * pixelRatio);
    }
}

// prevent Godot's loader from overwriting the title and favicon
const title = "Poopy The Game"
document.title = title;
Object.defineProperty(document, 'title', {
    get: function() { return title; },
    set: function(val) { 
      // No-op
    },
    configurable: true
});

let game = document.querySelector('#game');
let status = document.querySelector('#game_status')
canvas.classList.add("hidden");
game.onclick = () => {
  if (canStart) {
    canStart = false;
    status.innerText = "Loading...";
    engine.startGame()
      .then(() => {
        canvas.classList.remove("hidden");
        status.classList.add("hidden");
      });
  }
};