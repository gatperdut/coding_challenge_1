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
    // TODO
  }

  setupGuy() {
    // TODO
  }

  draw() {
    this.background();

    this.drawWalls();

    // TODO
  }

  background() {
    this.graphics
    .beginFill(black)
    .drawRect(0, 0, 399, 399)
    .endFill();
  }

  drawWalls() {
    // TODO
  }

}
