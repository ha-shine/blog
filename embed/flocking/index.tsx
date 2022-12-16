import React from "react";
import { AspectRatio, Box, Input } from "@chakra-ui/react";
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
      backgroundColor: "#1A202C",
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
    graphics.beginFill(0xae2012);
    graphics.drawPolygon([
      { x: 0, y: -3 },
      { x: -3, y: 4 },
      { x: 3, y: 4 },
    ]);
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

      this.boidsGraphics[i].rotation =
        Math.atan2(this.boids[i].velocity.y, this.boids[i].velocity.x) + 1.5;
    }
  }

  setBoidCount(count: number) {
    if (count >= this.boids.length) {
      while (this.boids.length != count) {
        this.addBoid();
      }
    } else if (count < this.boids.length) {
      while (this.boids.length != count) {
        this.boids.pop();
        this.boidsGraphics.pop().destroy(true);
      }
    }
  }

  view() {
    return this.app.view;
  }

  destroy(): void {
    this.app.destroy(true, true);
  }
}

interface State {
  boidCount: number;
}

export default class Flocking extends React.Component<any, State> {
  canvasRef;
  app?: App;

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.state = {
      boidCount: 100,
    };
  }

  componentDidMount() {
    const app = new App(this.state.boidCount);
    const view = app.view();
    view.style.width = "100%";
    view.style.height = "100%";

    this.canvasRef.current.appendChild(view);
    this.app = app;
  }

  componentWillUnmount() {
    this.app?.destroy();
  }

  setBoidCount(count: string) {
    let parsed = parseInt(count);

    if (parsed < 1 || isNaN(parsed))
      parsed = 1
    else if (parsed > 1000)
      parsed = 1000

    this.setState({
      boidCount: parsed,
    });
    this.app?.setBoidCount(parsed);
  }

  render() {
    return (
      <>
        <Input
          value={this.state.boidCount}
          onChange={(event) => this.setBoidCount(event.target.value)}
          placeholder="100"
          fontWeight="normal"
          size="lg"
          color="gray.200"
          type="number"
          variant="flushed"
        />
        <AspectRatio ratio={8 / 4}>
          <Box ref={this.canvasRef} width="100%" />
        </AspectRatio>
      </>
    );
  }
}
