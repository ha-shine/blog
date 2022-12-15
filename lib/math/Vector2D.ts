export default class Vector2D {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector2D) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other: Vector2D) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  mul(num: number) {
    this.x *= num;
    this.y *= num;
    return this;
  }

  div(num: number) {
    this.x /= num;
    this.y /= num;
    return this;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  setMag(num: number) {
    this.normalize();
    this.mul(num);
    return this;
  }

  normalize() {
    const len = this.mag();

    if (len !== 0)
      this.mul(1 / len);
    return this;
  }

  limit(num: number) {
    const mSq = this.magSq();
    if (mSq > num * num) {
      this.div(Math.sqrt(mSq)).mul(num);
    }
    return this;
  }

  distTo(other: Vector2D) {
    let xDiff = Math.abs(this.x - other.x);
    let yDiff = Math.abs(this.y - other.y);
    return Math.sqrt(
      (xDiff * xDiff) + (yDiff * yDiff)
    );
  }
}