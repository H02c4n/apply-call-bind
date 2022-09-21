//Factory Function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw", this.radius);
    },
  };
}

const circle = createCircle(5);

circle.draw();

//Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw", radius);
  };
}

const another = new Circle(6);
another.draw();
