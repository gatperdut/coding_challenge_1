class Wall {

  constructor(graphics, a, b, color) {
    this.graphics = graphics;

    this.a = a;
    this.b = b;

    this.color = color;
  }

  draw() {
    this.graphics.lineStyle(
      {
        width: 1,
        color: this.color,
        alignment: 0
      }
    )
    .moveTo(this.a[0], this.a[1])
    .lineTo(this.b[0], this.b[1]);

    // this.graphics._lineStyle.reset();
  }

  cutBy(a, b) {
    const den = (this.a[0] - this.b[0]) * (a[1] - b[1]) - (this.a[1] - this.b[1]) * (a[0] - b[0]);

    if (!den) {
      return null;
    }

    const numT = (this.a[0] - a[0]) * (a[1] - b[1]) - (this.a[1] - a[1]) * (a[0] - b[0]);

    const numU = (this.a[0] - a[0]) * (this.a[1] - this.b[1]) - (this.a[1] - a[1]) * (this.a[0] - this.b[0]);

    const t = numT / den;

    const u = numU / den;

    if (t < 0 || t > 1) {
      return null;
    }

    if (u < 0) {
      return null;
    }

    return {
      color: this.color,
      pos: [
        this.a[0] + t * (this.b[0] - this.a[0]),
        this.a[1] + t * (this.b[1] - this.a[1])
      ]
    };
  }

}
