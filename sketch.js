var trex, trexCorrendo ;
var chao, imagemDoChao, chaoInvisivel; 
var nuvem, nuvemImagem;
var aleatorio;
var obstaculo;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
var pontuacao = 0

var JOGAR = 1;
var ENCERRAR = 0;
var estadoDeJogo = JOGAR;

var  grupoDeObstaculos;
var  grupoDeNuvens;

function preload() {
  trexCorrendo = loadAnimation("img/trex1.png","img/trex2.png","img/trex3.png");
imagemDoChao=loadImage("img/ground2.png");
nuvemImagem=loadImage("img/cloud.png")
obstaculo1= loadImage("img/obstacle1.png")
obstaculo2= loadImage("img/obstacle2.png")
obstaculo3= loadImage("img/obstacle3.png")
obstaculo4= loadImage("img/obstacle4.png")
obstaculo5= loadImage("img/obstacle5.png")
obstaculo6= loadImage("img/obstacle6.png")

}




function setup() {
  createCanvas(600,200);

 trex = createSprite(50,160,20,50);
 trex.addAnimation("correndo",trexCorrendo);
 trex.scale=0.6;
 edges = createEdgeSprites();

chao = createSprite(300,180,600,20);
chao.addImage("chao", imagemDoChao);

chaoInvisivel = createSprite(300,195,600,10)
/*serve pra gerar nûmeros aleatorios
aleatorio = Math.round(random(1,100))
console.log(aleatorio)
*/

grupoDeObstaculos = new Group();
grupoDeNuvens = new Group();

}
function draw() {
  background(rgb(238,233,233));

  text ("Pontuaçâo" + pontuacao,500,50)
 


if (estadoDeJogo === JOGAR) {
  pontuacao = pontuacao + Math.round(frameCount/60);
if (keyDown("space")&& trex.y >= 140) {
  trex.velocityY=-10;
}
  chao.velocityX= -4;
if(chao.x<0){
chao.x= chao.width/2;
}
if (grupoDeObstaculos.isToching(trex)) {
  estadoDeJogo = ENCERRAR;
}   

gerarNuvens();

gerarObstaculos();


}else  if(estadoDeJogo === ENCERRAR){
   chao.velocityX = 0;  
}

  

}
trex.velocityY = trex.velocityY + 0.5;


trex.collide(chaoInvisivel);

chaoInvisivel.visible = false



drawSprites();

}
function gerarNuvens() {
  if (frameCount % 85===0) {
  nuvem = createSprite(600,100,40,10)
  nuvem.addImage("nuvem",nuvemImagem)
  nuvem.velocityX= -5;
  nuvem.scale= 0.7
  nuvem.y = Math.round(random(100,1))
  nuvem.depth = trex.depth
  trex.depth = trex.depth+1;
  nuvem.lifetime = 130
  grupoDeNuvens.add(nuvem);
 }
}
function gerarObstaculos(){
if (frameCount % 80 === 0){
obstaculo = createSprite(600,165,10,40);
obstaculo.velocityX = -4;
obstaculo.scale = 0.5;


var NumAleatorio = Math.round (random(1,6));

switch(NumAleatorio) {

case 1: obstaculo.addImage(obstaculo1);
break;
case 2: obstaculo.addImage(obstaculo2);
break;
case 3: obstaculo.addImage(obstaculo3);
break;
case 4: obstaculo.addImage(obstaculo4);
break;
case 5: obstaculo.addImage(obstaculo5);
break;  
case 6: obstaculo.addImage(obstaculo6);
default: break;
grupoDeObstaculos.add(obstaculo);






         }
          }
    
}
