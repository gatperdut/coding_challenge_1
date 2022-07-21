// Interface
const app = new PIXI.Application({ width: 900, height: 400, backgroundColor: white });

document.body.appendChild(app.view);

const topView = new TopView(app);

const renderView = new RenderView(app, topView);

renderView.container.x = 500;

function onKeydown(event) {
  console.log(event);
  if (event.key == 'q') {
    topView.guy.dir -= 1;
  }

  if (event.key == 'e') {
    topView.guy.dir +=1;
  }

  if (event.key == 'w') {
    topView.guy.pos[0] += Math.cos(d2r(topView.guy.dir)) * 1;

    topView.guy.pos[1] += Math.sin(d2r(topView.guy.dir)) * 1;
  }

  if (event.key == 's') {
    topView.guy.pos[0] -= Math.cos(d2r(topView.guy.dir)) * 1;

    topView.guy.pos[1] -= Math.sin(d2r(topView.guy.dir)) * 1;
  }
}

// Keyboard
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

  const hits = topView.draw();

  renderView.draw(hits, topView.guy.pos);

  last = now;
}

app.ticker.add(animationUpdate);
