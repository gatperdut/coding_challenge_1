class RenderView {

  constructor(app) {
    this.setupPIXI(app);
  }

  setupPIXI(app) {
    this.app = app;

    this.container = new PIXI.Container();

    this.graphics = new PIXI.Graphics();

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
