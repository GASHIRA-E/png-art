const textArea: HTMLTextAreaElement | null = document.getElementById('js-test') as HTMLTextAreaElement;

window.addEventListener('deviceorientation', function(event: DeviceOrientationEvent) {
  console.log(event);
  if (!textArea) return;
  textArea.value = `pitch:${event.beta}\nyaw:${event.gamma}\nrole:${event.alpha}`;
});
