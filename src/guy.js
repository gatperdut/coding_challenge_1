class Guy {

  constructor(graphics) {
    this.graphics = graphics;

    this.fov = 45;

    this.l = 30;

    this.pos = [
      rnd(0, 399),
      rnd(0, 399)
    ];

    this.dir = rnd(0, 359);
    // this.dir = 315;
  }

  look(walls) {
    const interval = this.fov / 400;

    const start = this.dir - this.fov / 2;

    const end = this.dir + this.fov / 2;

    const result = [];

    for (let angle = start; angle < end; angle += interval) {
      let intersection = null;

      let minDistance = Infinity;

      walls.forEach(
        (wall) => {
          const hit = wall.cutBy(
            [
              this.pos[0],
              this.pos[1]
            ],
            [
              this.pos[0] + this.lookX(angle),
              this.pos[1] + this.lookY(angle)
            ]
          );

          if (!hit) {
            return;
          }

          const distance = magnitude([hit.pos[0] - this.pos[0], hit.pos[1] - this.pos[1]]);

          if (distance < minDistance) {
            intersection = hit;

            minDistance = distance;
          }
        }
      );

      result.push(intersection);
    }

    return result;
  }

  draw() {
    this.drawDot();

    this.drawFov();
  }

  drawDot() {
    this.graphics
    .lineStyle(
      {
        color: white
      }
    )
    .beginFill(white)
    .drawCircle(this.pos[0], this.pos[1], 3, 3)
    .endFill();
  }

  drawFov() {
    // this.drawFovLine(this.dir, red);

    this.drawFovLine(this.dir - this.fov / 2, green);
    this.drawFovLine(this.dir + this.fov / 2, green);
  }

  lookX(angle) {
    return this.l * Math.cos(d2r(angle))
  }

  lookY(angle) {
    return this.l * Math.sin(d2r(angle))
  }

  drawFovLine(angle, color) {
    const x = this.lookX(angle);
    const y = this.lookY(angle);

    this.graphics
    .lineStyle(
      {
        width: 1,
        color: color
      }
    )
    .moveTo(this.pos[0], this.pos[1])
    .lineTo(this.pos[0] + x, this.pos[1] + y)
  }

}
