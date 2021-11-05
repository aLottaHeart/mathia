class Particle {

    /**
     * @param {*} xPosotion x coordinate of the Particle
     * @param {*} yPosition y coordinate of the Particle
     * @param {*} angle angle of the velocity vektor (from the x-axis clockwise)
     * @param {*} velocity length of the velocity vektor
     */
    constructor(xPos, yPos, beta, vel, acc, col, m = 1) {
        this.position = createVector(
            xPos, 
            yPos
            );
        this.velocity = createVector(
            vel*cos(beta),
            vel*sin(beta)
        );
        this.acceleration = createVector(
            acc*cos(beta),
            acc*sin(beta),
        )
        this.mass = m;
        this.color = col;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.x += this.velocity.x*this.mass;
        this.position.y += this.velocity.y*this.mass;
    }

    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.position.x, this.position.y, 10, 10);
    }

    applyGravity() {
        this.acceleration.y += 9.81*10e-4;
    }
}