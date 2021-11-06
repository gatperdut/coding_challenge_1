const app = new PIXI.Application({ width: 900, height: 400, backgroundColor: white });

document.body.appendChild(app.view);

const topView = new TopView(app);

const renderView = new RenderView(app, topView);

renderView.container.x = 500;

const animationUpdate = function(delta) {
  topView.draw();

  renderView.draw();
}

app.ticker.add(animationUpdate);
