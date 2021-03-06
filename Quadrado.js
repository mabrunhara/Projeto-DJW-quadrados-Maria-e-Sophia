class Quadrado {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
//desenha o quadrado na tela
   draw() {
 
       ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.x,this.y);
	ctx.fillRect (this.x,this.y,this.x,this.x);
       
    
	
	
  
    ctx.fill();
	
   }
  
   //atualiza a posição do quadrado na tela

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }
//veruifica a colisão entre os quadrados
   collisionDetect(Quadrado) {
      for (var quadrado of Quadrado) {
         if (!(this === quadrado)) {
            const dx = this.x - quadrado.x;
            const dy = this.y - quadrado.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + quadrado.size) {
              quadrado= this.color = randomRGB();
            }
         }
      }
   }

}
