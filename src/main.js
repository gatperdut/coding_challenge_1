// Interface
const app = new PIXI.Application({ width: 900, height: 400, backgroundColor: white });

document.body.appendChild(app.view);

const topView = new TopView(app);

const renderView = new RenderView(app, topView);

renderView.container.x = 500;

// Loop
const FPS = 30;

let last = 0;

const interval = 1e3 / FPS;

const animationUpdate = function(delta) {
  const now = performance.now();

  const elapsed = now - last;

  if (elapsed < interval) {
    return;
  }

  topView.draw();

  renderView.draw();

  last = now - (elapsed % interval);
}

app.ticker.add(animationUpdate);
