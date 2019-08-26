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

function createCircle(radius) {
  return {
    radius,
    draw: () => {
      console.log("drawing");
    }
  };
}

const circle = createCircle(5);
