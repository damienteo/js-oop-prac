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

  let defaultLocation = { x: 0, y: 0 };

  let shownDefaultProperty = { show: "showing" };

  let computeOptimumLocation = factor => {
    console.log("computing optimum location", factor);
  };

  this.getDefaultLocation = () => {
    return defaultLocation;
  };

  this.draw = () => {
    computeOptimumLocation(0.1);
    console.log(`The radius of this circle is ${this.radius}`);
  };

  Object.defineProperty(this, "shownDefaultProperty", {
    get: function() {
      return shownDefaultProperty;
    },
    set: function(value) {
      if (!value) throw new Error("invalid value");
      shownDefaultProperty = { show: value };
    }
  });
}

const anotherCircle = new Circle(5);

const propertyName = "location";
anotherCircle[propertyName] = { x: 1 };

for (let key in anotherCircle) {
  if (typeof anotherCircle[key] !== "function")
    console.log(key, anotherCircle[key]);
}

const keys = Object.keys(circle);
console.log("keys", keys);

if ("radius" in circle) console.log("circle has a radius");

// delete anotherCircle.location;

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };

  this.stop = () => {
    if (!running) throw new Error("Stopwatch has not started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
