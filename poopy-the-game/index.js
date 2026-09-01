const godotConfig = {
  args: [],
  canvasResizePolicy: 1, 
  executable: "assets/index",
  "fileSizes":{"index.pck":87968256,"index.wasm":39513091},
  canvas: document.getElementById("canvas"),
};
let engine = new Engine(godotConfig);
const canvas = godotConfig.canvas;

function updateCanvasResolution() {
    const pixelRatio = window.devicePixelRatio || 1; 
    const bounds = canvas.getBoundingClientRect(); 
    canvas.width = bounds.width * pixelRatio;
    canvas.height = bounds.height * pixelRatio;
    if (typeof engine.setWindowSize === 'function') {
        engine.setWindowSize(bounds.width * pixelRatio, bounds.height * pixelRatio);
    }
}

engine.startGame()
  .then(() => {
    updateCanvasResolution();
  });