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
  return color;
};

export const invertColor = function (hex) {
  let color = hex.replace("#", "");

  // Parse red, green, and blue as integers
  let red = parseInt(color.substring(0, 2), 16);
  let green = parseInt(color.substring(2, 4), 16);
  let blue = parseInt(color.substring(4, 6), 16);

  // Invert the colors
  red = (255 - red).toString(16).padStart(2, "0");
  green = (255 - green).toString(16).padStart(2, "0");
  blue = (255 - blue).toString(16).padStart(2, "0");

  // Combine the inverted values back into a hex color string
  return `#${red}${green}${blue}`;
};

export default randomColorGenerator;
