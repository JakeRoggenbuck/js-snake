// Flags the canvas
let cnv;



/** Sleep function
  @param {int} ms number of milliseconds that the computer will sleep
  @return {Promise} promise that sets a timeout
*/
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


/** Centers the canvas */
function centerCanvas() {
  // Centers the canvas
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
} function windowResized() {
    centerCanvas();
  }


async function setup() {
    // Create the canvas
    cnv = createCanvas(windowWidth, windowHeight);
    // Center the Canvas
    centerCanvas();
  }

  /** p5 draw function */
function draw() {
  // Remove the ugly stroke from the rectangle
  noStroke();
  // Set the background to black
  background(0);
}