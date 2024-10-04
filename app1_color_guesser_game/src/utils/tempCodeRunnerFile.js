const generateRandomColor = function() {
    let color = '#';
    let red = Math.floor(Math.random()*256).toString(16);
    let green = Math.floor(Math.random()*256).toString(16);
    let blue = Math.floor(Math.random()*256).toString(16);
    if(red.length === 1) {
        red = ' '.concat(red);
    }
    if(green.length === 1) {
        green = ' '.concat(green);
    }
    if(blue.length === 1) {
        blue = ' '.concat(blue);
    }
    color = color.concat(red, green, blue);
    console.log(color);
    return color;
}

generateRandomColor();
