class Rocket {

    constructor() {
        this.particles = [];
        this.createRocket();
    }

    update() {
        if (this.particles[0].velocity.y > 0 && !this.isExploded) {
            let x = this.particles[0].position.x;
            let y = this.particles[0].position.y;
            this.particles.pop();
            this.createExplosionParticles(x, y);
            this.isExploded = true;
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            this.particles[i].applyGravity();
        }
    }

    draw() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw();
        }
    }

    explode() {

        if (this.explosionTime < 70) {
            fill(this.r, this.g, this.b, 255-255*this.explosionTime/50+150);
            noStroke();
            for (let i = 0; i < this.particleCount; i++) {
                let t = TWO_PI*i/this.particleCount;
                let xOffset = 16*pow(sin(t), 3);
                let yOffset = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
                let x = this.x + xOffset*this.explosionTime*0.1 + random(2);
                let y = this.y - yOffset*this.explosionTime*0.1 + random(2);
                ellipse(x, y, this.size, this.size);
            }
            this.explosionTime ++;
        } 
        else {
            this.createRocket();
        }
    }

    createRocket() {
        let x = random(displayWidth);
        let y = displayHeight+random(0.4*displayHeight, 0.6*displayHeight);
        this.particleCount = random(40, 60);
        this.particles.push(new Particle(x, y, 0.75*TWO_PI, random(16,19), 0.2, color(255)));
        this.isExploded = false;
    }

    createExplosionParticles(x, y) {
        let col = color(random(100,255), random(100,255), random(100,255));
        for (let k = 0; k < this.particleCount; k++) {
            let t = random(TWO_PI);
            let xOffset = 16*pow(sin(t), 3);
            let yOffset = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
            let vel = sqrt(pow(xOffset, 2) + pow(yOffset, 2));
            this.particles.push(new Particle(x, y, t - PI/2, vel, 0, col, 0.05));
        }
    }
}