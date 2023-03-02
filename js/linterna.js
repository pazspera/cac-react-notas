let estadoLinterna = false;

let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");

let batman = document.querySelector("#batman");
let boton = document.querySelector("#bati_boton");

boton.addEventListener("click", () => {
  controlarBatman();
});

function controlarBatman() {
  if (estadoLinterna === false) {
    estadoLinterna = true;
    sonidoLinterna();
    batman.classList.add("batman_activo");
  } else {
    estadoLinterna = false;
    sonidoLinterna();
    batman.classList.remove("batman_activo");
  }
}

function sonidoLinterna() {
  if (sonidoBatman.paused) {
    sonidoBoton.play();
    sonidoBatman.play();
  } else {
    sonidoBoton.play();
    sonidoBatman.pause();
    // reinicia audio
    sonidoBatman.currentTime = 0;
  }
}
