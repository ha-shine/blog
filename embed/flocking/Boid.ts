import Vector2D from "../../lib/math/Vector2D";

export default class Boid {
  position: Vector2D;
  velocity: Vector2D;
  acceleration: Vector2D;

  private static readonly RADIUS: number = 20;
  private static readonly MAX_FORCE: number = 0.5;
  private static readonly MAX_SPEED: number = 2.5;

  constructor(
    position: Vector2D,
    velocity?: Vector2D,
    acceleration?: Vector2D
  ) {
    this.position = position;
    this.velocity =
      velocity ??
      new Vector2D(
        Boid.MAX_SPEED * Math.random(),
        Boid.MAX_SPEED * Math.random()
      );
    this.acceleration =
      acceleration ??
      new Vector2D(
        Boid.MAX_FORCE * Math.random(),
        Boid.MAX_FORCE * Math.random()
      );
  }

  // Alignment - steer towards the average heading of local flockmates.
  // Align or change direction based on the average direction of the
  // other boids around this. The change of direction should be limited
  // (here MAX_FORCE is used), otherwise it will be unlimited.
  align(others: Array<Boid>) {
    let vector = new Vector2D();
    let total = 0;

    for (let other of others) {
      if (other != this && this.position.distTo(other.position) < Boid.RADIUS) {
        vector.add(other.velocity);
        total++;
      }
    }

    if (total > 0) {
      vector.div(total);
      vector.setMag(Boid.MAX_SPEED);
      vector.sub(this.velocity);
      vector.limit(Boid.MAX_FORCE);
    }

    return vector;
  }

  // Cohesion - steer to move towards the average position of local flockmates.
  // Move to the average position (or center) of the other boids around this.
  cohesion(others: Array<Boid>) {
    let vector = new Vector2D();
    let total = 0;

    for (let other of others) {
      if (other != this && this.position.distTo(other.position) < Boid.RADIUS) {
        vector.add(other.position);
        total++;
      }
    }

    if (total > 0) {
      vector.div(total);
      vector.sub(this.position);
      vector.setMag(Boid.MAX_SPEED);
      vector.sub(this.velocity);
      vector.limit(Boid.MAX_FORCE);
    }

    return vector;
  }

  // Separation - steer to avoid crowding local flockmates
  // Steer away from the other boids around this by using the vector that is
  // pointing away from the other boid, finding out the inversely proportional
  // value based on distance from that boid and adding it to the resultant vector.
  // Do this for all the boids in the vicinity from the current boid.
  separation(others: Array<Boid>) {
    let vector = new Vector2D();
    let total = 0;

    for (let other of others) {
      let dist = this.position.distTo(other.position);
      if (other != this && dist < Boid.RADIUS) {
        let diff = new Vector2D(this.position.x, this.position.y).sub(
          other.position
        );
        diff.div(dist * dist);
        vector.add(diff);
        total++;
      }
    }

    if (total > 0) {
      vector.div(total);
      vector.setMag(Boid.MAX_SPEED);
      vector.sub(this.velocity);
      vector.limit(Boid.MAX_FORCE);
    }

    return vector;
  }

  flock(others: Array<Boid>) {
    this.acceleration.mul(0);
    this.acceleration.add(this.align(others));
    this.acceleration.add(this.cohesion(others));
    this.acceleration.add(this.separation(others));
  }

  update(delta: number) {
    let position = new Vector2D(this.position.x, this.position.y).add(
      new Vector2D(this.velocity.x, this.velocity.y).mul(delta)
    );
    let velocity = new Vector2D(this.velocity.x, this.velocity.y)
      .add(new Vector2D(this.acceleration.x, this.acceleration.y).mul(delta))
      .limit(Boid.MAX_SPEED);
    let acceleration = new Vector2D();

    this.position.add(
      new Vector2D(this.velocity.x, this.velocity.y).mul(delta)
    );
    this.velocity.add(
      new Vector2D(this.acceleration.x, this.acceleration.y).mul(delta)
    );
    this.velocity.limit(Boid.MAX_SPEED);
    this.acceleration.mul(0);

    return new Boid(position, velocity, acceleration);
  }
}
