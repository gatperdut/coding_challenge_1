// Interface
const app = new PIXI.Application({ width: 900, height: 400, backgroundColor: white });

document.body.appendChild(app.view);

const topView = new TopView(app);

const renderView = new RenderView(app, topView);

renderView.container.x = 500;

// Keyboard
function onKeydown(event) {
  console.log(event);

  // TODO
}

document.addEventListener('keydown', onKeydown);

// Loop
const FPS = 30;

let last = 0;

const interval = 1000 / FPS;

const animationUpdate = function() {
  const now = performance.now();

  const elapsed = now - last;

  if (elapsed < interval) {
    return;
  }

  topView.draw();

  renderView.draw();

  last = now;
}

app.ticker.add(animationUpdate);
