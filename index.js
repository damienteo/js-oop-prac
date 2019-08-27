console.log("hello world!");

// const circle = {
//   radius: 5,
//   location: {
//     x: 1,
//     y: 3
//   },
//   draw: () => {
//     console.log(
//       `radius is ${this.radius}. Location is x: ${this.location.x} and y ${this.location.y}`
//     );
//   }
// };

// factory function

function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log(`the radius of this circle is ${radius}`);
    }
  };
}

const circle = createCircle(5);

//constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log(`The radius of this circle is ${this.radius}`);
  };
}

const anotherCircle = new Circle(5);

const propertyName = "location";
anotherCircle[propertyName] = { x: 1 };

delete anotherCircle.location;
