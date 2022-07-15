function rnd(from, to) {
  return Math.floor(Math.random() * (from - to)) + to
}

function d2r(degrees) {
  return degrees * Math.PI / 180;
}

function r2d(radians) {
  return radians * 180 / Math.PI;
}

function magnitude(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
