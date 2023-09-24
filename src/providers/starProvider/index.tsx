export default interface IStar {
  giant: boolean;
  comet: boolean;
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  fadingOut: boolean | null;
  fadingIn: boolean;
  opacity: number;
  opacityTresh: number;
  doValue: number;
  reset(): void;
  fadeIn(): void;
  fadeOut(): void;
  move(): void;
  draw(context: CanvasRenderingContext2D): void;
}
