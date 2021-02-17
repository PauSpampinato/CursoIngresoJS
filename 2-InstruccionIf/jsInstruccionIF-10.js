<<<<<<< HEAD
function mostrar() {
  let nota;
  let min;
  let max;

  min = 1;
  max = 10;

  nota = Math.round(Math.random() * (max - min) + min);
=======
function mostrar()
{
	let nota
	

	nota = Math.round((Math.random()*9) + 1);
>>>>>>> a965f7c832b65cc304d65f57cec57dc1dfb5e71f

  if (nota >= 9) {
    alert(`Su nota es ${nota} y es EXCELENTE`);
  } else if (nota >= 4) {
    alert(`Su nota es ${nota} usted APROBÓ`);
  } else {
    alert(`Su nota es ${nota}. Vamos, la próxima se puede.`);
  }
} //FIN DE LA FUNCIÓN
