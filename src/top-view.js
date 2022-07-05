class TopView {

  constructor(app) {
    this.setupPIXI(app);
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

  background() {
    this.graphics.beginFill(black);
    this.graphics.drawRect(0, 0, 400, 400);
    this.graphics.endFill(0);
  }

  draw() {
    this.background();

    // TODO
  }

}
