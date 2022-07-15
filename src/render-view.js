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
    .lineStyle(0)
    .beginFill(black)
    .drawRect(0, 0, 399, 399)
    .endFill();
  }

  draw(hits, guyPos) {
    this.background();

    hits.forEach(
      (hit, index) => {
        if (!hit) {
          return;
        }

        const mag = magnitude([hit.pos[0] - guyPos[0], hit.pos[1] - guyPos[1]]);

        const height = 400 - mag / 1.42;

        this.drawLine(index, height, hit.color);
      }
    );
  }

  drawLine(x, height, color) {
    const colorMod = (height / 400) * (height / 400);

    const colorHex = PIXI.utils.hex2rgb(color);

    colorHex[0] *= colorMod;
    colorHex[1] *= colorMod;
    colorHex[2] *= colorMod;

    this.graphics
    .lineStyle(
      {
        width: 1,
        color: PIXI.utils.rgb2hex([colorHex[0], colorHex[1], colorHex[2]])
      }
    )
    .moveTo(x, 200 - height / 2)
    .lineTo(x, 200 + height / 2);
  }

}
