const white = 0xFFFFFF;

const red = 0xFF0000;

const blue = 0x0000FF;

const yellow = 0xFFFF00;

const pink = 0xFF00FF;

const cyan = 0x00FFFF;

const green = 0x00FF00;

const black = 0x000000;

const colors = [white, red, blue, yellow, pink, cyan, green, black];

function rndColor() {
  const idx = rnd(0, colors.length - 1);

  return colors[idx];
}
