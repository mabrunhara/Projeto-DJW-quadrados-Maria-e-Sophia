// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//define um vetor de quadrados
const quadrados = [];

while (quadrados.length < 8) {
   const size = random(10,8);
   const quadrado = new Quadrado(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-3,2),
      random(-3,2),
      randomRGB(),
      size
   );
 //atualiza o vetor
  quadrados.push(quadrado);
   }

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0,0,128, 0.01)';
   ctx.fillRect(0, 0,  width, height);

   for (const quadrado of quadrados) {
    quadrado.draw();
    quadrado.update();
    quadrado.collisionDetect(quadrados);
   }

   requestAnimationFrame(loop);
}

loop();
