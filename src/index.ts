import * as PIXI from 'pixi.js';

const textArea: HTMLTextAreaElement | null = document.getElementById('js-test') as HTMLTextAreaElement;

window.addEventListener('deviceorientation', function(event: DeviceOrientationEvent) {
  console.log(event);
  if (!textArea) return;
  textArea.value = `pitch:${event.beta}\nyaw:${event.gamma}\nrole:${event.alpha}`;
});

window.addEventListener('load', () => {
  const app = new PIXI.Application({width: 256, height: 256});
  const canvas = document.getElementById('myBoard') as HTMLCanvasElement;
  if (!canvas) return;
  canvas.appendChild(app.view);
});
