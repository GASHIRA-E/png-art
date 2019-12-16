const textArea = document.getElementById('js-test');

window.addEventListener('deviceorientation', function(event) {
  console.log(event);
  textArea.value = `pitch:${event.beta}\nyaw:${event.gamma}\nrole:${event.alpha}`;
});
document.getElementById("doeSupported").innerText = "Supported!";
