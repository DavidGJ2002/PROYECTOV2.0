const segundo = 1000,
minuto = segundo * 60,
hora = minuto * 60,
dia = hora * 24;

let diaObjetivo = new Date('September 01, 2023 00:00:00').getTime(),
reloj= setInterval(function() {
  let fechaA = new Date().getTime(), distancia = diaObjetivo - fechaA;
  let days = Math.floor(distancia / (dia)), hours= Math.floor((distancia % (dia)) / (hora)),
             minutes = Math.floor((distancia % (hora)) / (minuto)), seconds = Math.floor((distancia % (minuto)) / segundo);
  document.getElementById('dias').innerText = days,
  document.getElementById('horas').innerText = hours,
  document.getElementById('minutos').innerText = minutes,
  document.getElementById('segundos').innerText = seconds;}, segundo)
