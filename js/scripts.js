function determineTriangleType(side1, side2, side3) {
  let triangle;

  if (side1 === side2 && side1=== side3) {
    triangle = "equialateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangle = "isosceles";
  } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    triangle = "not";
  } else {
    triangle = "scalene";
  }
  return triangle;
}
