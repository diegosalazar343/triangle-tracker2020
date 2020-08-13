function determineTriangleType(side1, side2, side3) {
  let triangle;

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1 ) {
    triangle = "not";
  } else if (side1 === side2 && side2 === side3) {
    triangle = "equilateral";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    triangle = "scalene";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangle = "isosceles";
  } else {
    triangle = "not";
  }
  
  
  console.log(triangle);
  return triangle;
}


$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    console.log(side1, side2, side3);
    let triangle = determineTriangleType(side1, side2, side3);

    if (triangle === "equilateral") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("equilateral");
      $("#equilateral").show();
    } else if (triangle === "isosceles") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("isosceles");
      $("#isosceles").show();
    } else if (triangle === "scalene") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("scalene");
      $("#scalene").show();
    } else {
      alert("Those measurements won't create a triangle.");
    }

  });
});
