let rockets = [];

function setup() {
  createCanvas(displayWidth, displayHeight*0.884);
  
  for (let i = 0; i < 10; i++) {
    rockets.push(new Rocket());
  }
}

function draw() {
  background(23, 23, 25);
  
  for (let i = 0; i < rockets.length; i++) {
    rockets[i].update();
    rockets[i].draw();
  }
}
