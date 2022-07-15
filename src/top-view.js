class TopView {

  constructor(app) {
    this.setupPIXI(app);

    this.setupWalls();

    this.setupGuy();
  }

  setupPIXI(app) {
    this.app = app;

    this.container = new PIXI.Container();
    this.container.interactive = true;

    this.graphics = new PIXI.Graphics();
    this.graphics.interactive = true;

    this.container.addChild(this.graphics);
    this.app.stage.addChild(this.container);
  }

  setupWalls() {
    this.walls = [];

    this.walls.push(new Wall(this.graphics, [  0,   0], [399,   0], red));
    this.walls.push(new Wall(this.graphics, [399,   0], [399, 399], red));
    this.walls.push(new Wall(this.graphics, [399, 399], [  0, 399], red));
    this.walls.push(new Wall(this.graphics, [  0, 399], [  0,   0], red));

    for (let i = 0; i < 10; i++) {
      let x1 = Math.floor(Math.random() * 400);
      let y1 = Math.floor(Math.random() * 400);

      let x2 = Math.floor(Math.random() * 400);
      let y2 = Math.floor(Math.random() * 400);

      this.walls.push(new Wall(this.graphics, [x1, y1], [x2, y2], rndColor()))
    }
  }

  setupGuy() {
    this.guy = new Guy(this.graphics);
  }

  draw() {
    this.background();

    this.drawWalls();

    this.guy.draw();

    const hits = this.guy.look(this.walls);

    hits.forEach(
      (hit) => {
        if (!hit) {
          return;
        }

        this.graphics
        .lineStyle(
          {
            color: white
          }
        )
        .beginFill(white)
        .drawCircle(hit.pos[0], hit.pos[1], 2, 2)
        .endFill();
      }
    );

    return hits;
  }

  background() {
    this.graphics
    .beginFill(black)
    .drawRect(0, 0, 399, 399)
    .endFill();
  }

  drawWalls() {
    this.walls.forEach(
      (wall) => wall.draw()
    );
  }

}
