export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  public shape: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle: longest side is too long');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
    this.shape = 'triangle';
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  color: string;

  public shape: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
    this.color = color;
    this.shape = 'circle';
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  color: string;

  shape: string;

  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = 'rectangle';
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
