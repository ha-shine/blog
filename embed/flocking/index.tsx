import { useEffect, useRef } from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import Boid from "./Boid";
import Vector2D from "../../lib/math/Vector2D";
import { Application, Graphics } from "pixi.js";

class App {
  private app: Application;
  private elapsed: number;

  private boids: Array<Boid>;
  private boidsGraphics: Array<Graphics>;

  constructor(boidCount: number) {
    this.app = new Application({
      width: 800,
      height: 400,
      backgroundColor: "#171923",
      resolution: window.devicePixelRatio,
      autoDensity: true,
    });
    this.elapsed = 0;
    this.boids = [];
    this.boidsGraphics = [];

    for (let i = 0; i < boidCount; i++) this.addBoid();
    this.app.ticker.add((delta) => this.update(delta));
  }

  private addBoid(pos?: Vector2D) {
    let position =
      pos ??
      new Vector2D(
        Math.random() * this.app.screen.width,
        Math.random() * this.app.screen.height
      );

    let graphics = new Graphics();
    graphics.beginFill(0xff0000, 1.0);
    graphics.drawCircle(0, 0, 3.0);
    graphics.endFill();

    this.boids.push(new Boid(position));
    this.boidsGraphics.push(graphics);
    this.app.stage.addChild(graphics);
  }

  private update(delta: number) {
    this.updateState(delta);
    this.updateGraphics();

    this.elapsed += delta;
  }

  private updateState(delta: number) {
    // Flock the boids
    for (let boid of this.boids) {
      boid.flock(this.boids);
    }

    // Update position and velocity, use a snapshot of previous frame
    let boids = [];
    for (let boid of this.boids) {
      boids.push(boid.update(delta));
    }
    this.boids = boids;

    // Wrap-around the edges
    for (let boid of this.boids) {
      if (boid.position.x < 0) {
        boid.position.x = this.app.screen.width;
      } else if (boid.position.x > this.app.screen.width) {
        boid.position.x = 0;
      }

      if (boid.position.y < 0) {
        boid.position.y = this.app.screen.height;
      } else if (boid.position.y > this.app.screen.height) {
        boid.position.y = 0;
      }
    }
  }

  private updateGraphics() {
    for (let i = 0; i < this.boids.length; i++) {
      this.boidsGraphics[i].position.set(
        this.boids[i].position.x,
        this.boids[i].position.y
      );
    }
  }

  view() {
    return this.app.view;
  }

  destroy(): void {
    this.app.destroy(true, true);
  }
}

export default function Flocking() {
  const ref = useRef(null);

  useEffect(() => {
    const flocking = new App(100);
    const view = flocking.view();
    view.style.width = "100%";

    ref.current.appendChild(view);

    return () => {
      flocking.destroy();
    };
  }, []);

  return (
    <AspectRatio ratio={8 / 4}>
      <Box ref={ref} width="100%" />
    </AspectRatio>
  );
}
