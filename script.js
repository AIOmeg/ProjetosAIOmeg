const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
/*console.log(segundos) verifica se o js esta puxando corretamente do html*/

const relogio = setInterval(()=>{
	const DateToday = new Date();
	const hr = DateToday.getHours();
	const min = DateToday.getMinutes();
	const s = DateToday.getSeconds();

	/*if (hr  < 10) ? `0${hr}`  : hr
	/*if (min < 10) ? `0${min}` : min
	if (s   < 10) ? `0${s}`	: s*/

	/*const h      = hr   < 10 ? `0${hr}`   : hr
  	const minutos    = min < 10 ? `0${min}` : min
  	const segundos   = s < 10 ? `0${s}` : s*/
	/*relogio.innerHTML = `${hr}:${min}:${s}`*/

	horas.textContent = hr;
	minutos.textContent = min;
	segundos.textContent = s;


})
