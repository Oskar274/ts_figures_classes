export interface Figure {
  color: string;
  shape: string;
  getarea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  color: string;

  public shape: string;

  constructor(color: string, a: number, b: number, c: number) {
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

  public getarea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  radius: number;

  color: string;

  public shape: string;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
    this.color = color;
    this.shape = 'circle';
  }

  public getarea(): number {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public width: number;

  public height: number;

  color: string;

  shape: string;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = 'rectangle';
  }

  public getarea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getarea()}`;
}
