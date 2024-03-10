  function digitos(numero) {
    return numero < 10 ? '0' + numero : numero;
  }

  function regressiva() {
    const agora = new Date();
    const meiaNoite = new Date(agora);
    meiaNoite.setHours(24, 0, 0, 0);

    const tempo = meiaNoite - agora;
    const horas = Math.floor(tempo / (1000 * 60 * 60));
    const min = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    const seg = Math.floor((tempo % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${digitos(horas)}:${digitos(min)}:${digitos(seg)}`;

    const c = document.getElementById("contador");
    c.style.textAlign = "center";
    c.style.background = "grey"; 
    c.style.fontSize = "50px"; 
    c.style.fontFamily = 'Bubblegum Sans', sans-serif; 
  }
  
  setInterval(regressiva, 1000);

  regressiva();
