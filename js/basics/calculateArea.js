
function areaOfCircle (radius) {
    let area = null;
    if (radius <= 0) return 0;
    else {
        area = Math.PI * radius * radius;
        return area;
    }

}

let radius = 2.3;
let theArea = areaOfCircle(radius);

console.log(`Area of the circle with radius of ${radius} is: ${theArea}`);