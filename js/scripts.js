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


$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    determineTriangleType(side1, side2, side3);

    if (triangle === "equilateral") {
      $("div").hide();
      $("div").show();
      $("#equilateral").show();
    } else if (triangle === "isosceles") {
      $("div").hide();
      $("div").show();
      $("#isosceles").show();
    } else if (triangle === "scalene") {
      $("div").hide();
      $("div").show();
      $("#scalene").show();
    } else {
      alert("Those measurements won't create a triangle.");
    }

  });
});
