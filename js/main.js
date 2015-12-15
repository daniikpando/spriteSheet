(function(){
	//Clase
	App = function(c){
		t = this;
		t.canvas = c;
		t.ctx = t.canvas.getContext("2d");
		t.posX = 250;
		t.posY = 20;
		t.ite = 0;
		t.load_image();
		t.addEvents();
	}
	p = App.prototype;
	// Carga de imagenes al canvas
	p.load_image = function(){
		// Fondo pokemon
		t.fondo = new Image();
		t.fondo.src = "img/vermilion_city.png";
		t.fondo.onload = function(){
			t.clean();
		}
		// Objeto ash con todas sus carateristicas y la posicion de la imagenes en el spriteSheet
		t.ash = {
			img: new Image(),
			src: "img/ash.png",
			width: 16,
			height: 31,
			down: {
				c1:{x: 0, y: 0},
				c2:{x: 16, y: 0},
				c3:{x: 31, y: 0},
				c4:{x: 48, y: 0}
			},
			left: {
				c1:{x: 0, y: 30},
				c2:{x: 16, y: 30},
				c3:{x: 32, y: 30},
				c4:{x: 48, y: 30}
			},
			right: {
				c1:{x: 0, y: 62},
				c2:{x: 16, y: 62},
				c3:{x: 31, y: 62},
				c4:{x: 48, y: 62}
			},
			up: {
				c1:{x: 0, y: 94},
				c2:{x: 16, y: 94},
				c3:{x: 31, y: 94},
				c4:{x: 48, y: 94}
			}
		};
		t.ash.img.src = t.ash.src;
		t.ash.img.onload = function(){
			t.newPerson(t.ash.down.c1.x,t.ash.down.c1.y);
		}
 	}
 	//Llama a la funcion draw para dibujar y cambia la imagenes dependiendo del que posicion este
 	p.newPerson = function(x,y){
 		t.draw(t.ash.img, x, y, t.ash.width , t.ash.height , t.posX , t.posY, t.ash.width , t.ash.height )
 	}
 	// Dibujo de ash en el canvas con la imagen del spritesheet correspondiente
	p.draw =function(i, x_sp, y_sp, an_sp, al_sp,x_c,y_c,an_c,al_c){
		//(<Objeto Image>, <X Sprite>, <Y Sprite>, <Ancho Sprite>, <Alto Sprite>, <X en Canvas>, <Y en Canvas>, <Ancho en Canvas>, <Alto en Canvas>)
		t.ctx.drawImage(i,x_sp,y_sp,an_sp,al_sp,x_c,y_c,an_c,al_c)
	}	
	// Añadir evento Keydown
	p.addEvents = function(){
		document.addEventListener("keydown", listener)
	}
	// Dependiendo de la tecla ejecuta la condicion sí la condicion es verdadera borra el canvas y ejecuta la funcion newPerson que dibuja la image correspondiente al estado
	function listener(e){
		// t.ite acumula los pasos
		var c = e.keyCode;
		if(c== 40){
			t.posY += 5;
			t.clean();
			if(t.ite == 0) t.newPerson(t.ash.down.c1.x,t.ash.down.c1.y);
			else if(t.ite == 1) t.newPerson(t.ash.down.c2.x,t.ash.down.c2.y);
			else if(t.ite == 2) t.newPerson(t.ash.down.c3.x,t.ash.down.c3.y);
			else if(t.ite == 3) t.newPerson(t.ash.down.c4.x,t.ash.down.c4.y);
		}
		if(c== 37){ 
			t.posX -=5;
			t.clean();
			if(t.ite == 0) t.newPerson(t.ash.left.c1.x,t.ash.left.c1.y);
			else if(t.ite== 1) t.newPerson(t.ash.left.c2.x,t.ash.left.c2.y);
			else if(t.ite == 2) t.newPerson(t.ash.left.c3.x,t.ash.left.c3.y);
			else if(t.ite == 3) t.newPerson(t.ash.left.c4.x,t.ash.left.c4.y);
		}
		if(c== 39){ 
			t.posX += 5;
			t.clean();
			if(t.ite == 0) t.newPerson(t.ash.right.c1.x,t.ash.right.c1.y);
			else if(t.ite == 1) t.newPerson(t.ash.right.c2.x,t.ash.right.c2.y);
			else if(t.ite == 2) t.newPerson(t.ash.right.c3.x,t.ash.right.c3.y);
			else if(t.ite == 3) t.newPerson(t.ash.right.c4.x,t.ash.right.c4.y);
		}
		if(c== 38){ 
			t.posY -= 5;
			t.clean();
			if(t.ite == 0) t.newPerson(t.ash.up.c1.x,t.ash.up.c1.y);
			else if(t.ite == 1) t.newPerson(t.ash.up.c2.x,t.ash.up.c2.y);
			else if(t.ite == 2) t.newPerson(t.ash.up.c3.x,t.ash.up.c3.y);
			else if(t.ite == 3) t.newPerson(t.ash.up.c4.x,t.ash.up.c4.y);
		}
		t.ite++;
		if(t.ite > 3 ) t.ite = 0;
	}
	// Borra el canvas y dibuja nuevamente el fondo pokemon
	p.clean = function(){
		t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height);
		t.ctx.drawImage(t.fondo, 0, 0, t.canvas.width, t.canvas.height)
	}
}());
