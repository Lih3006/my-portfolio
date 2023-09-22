export default interface IStar {
  giant: boolean;
  comet: boolean;
  x: number; //coordenada inical
  y: number; // coordenada inicial
  r: number; // raio
  dx: number; //velocidade horizontal
  dy: number; // velocidade vertical
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
