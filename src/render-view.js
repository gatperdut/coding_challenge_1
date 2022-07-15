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
    this.graphics
    .beginFill(black)
    .drawRect(0, 0, 399, 399)
    .endFill();
  }

  draw() {
    this.background();

    // TODO
  }

}
