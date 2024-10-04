const randomColorGenerator = function () {
  let color = "#";
  let red = Math.floor(Math.random() * 256).toString(16);
  let green = Math.floor(Math.random() * 256).toString(16);
  let blue = Math.floor(Math.random() * 256).toString(16);
  if (red.length === 1) {
    red = "0".concat(red);
  }
  if (green.length === 1) {
    green = "0".concat(green);
  }
  if (blue.length === 1) {
    blue = "0".concat(blue);
  }
  color = color.concat(red, green, blue);
  console.log(color);
  return color;
};

export default randomColorGenerator;
