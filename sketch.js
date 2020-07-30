//https://youtu.be/0bcnj-16H6w
var tela = 1;
var largura  = 150;
var altura = 35;
var xMenu = 10;
var yMenu1 = 15;
var yMenu2 = 50;
var zMenu3 = 85;
var altura1 = 55;
var largura1 = 100;
var ax = 287;
var cy = 165;
var dz = 255;
var gm = 30;
var ax2 = 200;
var cy2 = 150;
var dz2 = 250;
var ax3 = 75;
var cy3 = 45;
var dz3 = 90;
var ax4 = 365;
var cy4 = 172;
var dz4 = 255;
var ax5 = 234;
var cy5 = 174;
var dz5 = 255;
var ax7 = 371;
var cy7 = 170;
var dz7 = 250;
var altura2 = 50;
var largura2 = 90;
var imgmenu;
var imaginstru;
var imgcred;
var img1;
var img2;
var img6;
var entrada1;
var questao1 = true;

function preload() {
  imgmenu  = loadImage('menus.png');
  imginstru = loadImage('jogoss.png');
  imgcred = loadImage('jogoss.png');
  img1 = loadImage('fase.png');
  img2 = loadImage('jogo.jpg');
  img6 = loadImage('gameovers.png');

}

function setup() {
  createCanvas(665,480);
  
}
 
function draw() {
 textStyle(BOLDITALIC);
  
  
  //tela de menu
 
  if(tela == 1){
    background(70,20,80,80);
    image(imgmenu,0,0)
    
    textAlign(CENTER);
    textSize(30);
    
    text('SOMA DO SABER',340,50);
    
    textSize(23);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 +altura){
    
    stroke(20)
    fill(0,200,0);
    rect(xMenu,yMenu1,largura, altura,15)
      if(mouseIsPressed){
        tela = 2
      }
    }
    fill(0,0,0)
    noStroke();
    text('Instruções',85,40);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 +altura){
   
    stroke(20)
    fill(0,200,0);
    rect(xMenu,yMenu2,largura,altura,15);
      if(mouseIsPressed){
        tela = 3
      }
    }
    fill(20,0,0);
    noStroke();
    text('Jogar',85,75);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > zMenu3 && mouseY < zMenu3 +altura){
   
    stroke(20)
    fill(0,200,0);
    rect(xMenu,zMenu3,largura,altura,15);
      if(mouseIsPressed){
        tela = 4
              }
    }
    fill(20,0,0);
    noStroke();
    text('Créditos',85,110);
  }

  else if(tela == 3){
   background(0,185,900);
    image(img1,10,10);
  

  
  
  
  textAlign(CENTER);
    textSize(30);
    text('Nível : 1',560, 250);
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('FASE 1',560,40);
  
  textAlign(CENTER)
  textSize(50)
  text (' 2+2=', 330,140);
    
    
    
    if(mouseX > ax && mouseX < ax + largura1 && mouseY > cy && mouseY < cy +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax,cy,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 5
      }
    }
    fill(0,0,0);
    noStroke();
    text('4',335,210);
    
    if(mouseX > ax && mouseX < ax + largura1 && mouseY > dz && mouseY < dz + altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax,dz,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 9
              }
    }
    fill(0,0,0);
    noStroke();
    text('7',335,300);
  
 
  
  
  function validar1() {
  if(this.value()=="4") {
  alert("Acertou!!");
 
  }
  }
  }
  

  else if(tela ==2){ 
     background(240);
     image(imginstru,10,10);
    fill(0,0,0);
    textSize(25);
    noStroke();
    textAlign(RIGHT);
    text(" Para jogar esse jogo é simples e fácil, com o mouse basta clicar na reposta correta da operação apresentada, você vai aumentar a dificuldade do jogo gradativamente até chegar ao fim das 5 fases.",110,120,460,350);
    if(mouseX > ax && mouseX < ax + largura1 && mouseY > gm && mouseY < gm +altura1)
    {
      textSize(30)
    
      
   
    stroke(20)
    fill(0,200,900);
    rect(ax,gm,largura2,altura2,15);
      if(mouseIsPressed){
        tela = 1}
    }
        fill(0,0,0);
    noStroke();
    text('Menu',370,65);
}

  
 else if(tela == 4){ 
     background(240);
    image(imgcred,5,6);
    fill(0,0,0);
    textSize(20);
    noStroke();
    textAlign(RIGHT);
    text("O jogo surgiu de uma ideia conjunta de Luciano Lins e Geyverson Gomes ( Professor de educação física) que percebeu em seus alunos de pouca idade uma dificuldade em contas simples como as operações de soma. A ideia era por meio das perguntas ensinar de forma direta por meio de tentativas e erros as operações básicas para as crianças.",110,120,460,350 )
   textSize(30)
   if(mouseX > ax && mouseX < ax + largura1 && mouseY > gm && mouseY < gm +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax,gm,largura2,altura2,15);
      if(mouseIsPressed){
        tela = 1}
    }
        fill(0,0,0);
    noStroke();
    text('Menu',370,65);
   
   
}
  else if(tela ==9){ 
     background(0,0,0);
     image(img6,1,1);
    fill(240);
    textSize(30);
    noStroke();
    textAlign(RIGHT);
   
    if(mouseX > ax && mouseX < ax + largura1 && mouseY > gm && mouseY < gm +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax,gm,largura2,altura2,15);
      if(mouseIsPressed){
        tela = 1}
    }
        fill(250);
    noStroke();
    text('Menu',370,65);
    
      
    
}
 else if(tela == 5){
   background(0,185,900);
    image(img1,10,10);
  

  textAlign(CENTER);
    textSize(30);
    text('Nível : 1',560, 250);
  
  
  
  
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('FASE 2',560,40);
  
  textAlign(CENTER)
  textSize(50)
  text (' 4+2=', 330,140);
  
   if(mouseX > ax2 && mouseX < ax2 + largura1 && mouseY > cy2 && mouseY < cy2 +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax2,cy2,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 6
      }
    }
    fill(0,0,0);
    noStroke();
    text('6',245,195);
    
    if(mouseX > ax2 && mouseX < ax2 + largura1 && mouseY > dz2 && mouseY < dz2 + altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax2,dz2,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 9
              }
    }
    fill(0,0,0);
    noStroke();
    text('8',245,295);
   
  
  
 
  
       
}
else if(tela == 6){
   background(0,185,900);
    image(img1,10,10);
  

  
  textAlign(CENTER);
    textSize(30);
    text('Nível : 2',560, 250);
  
  
  
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('FASE 3',560,40);
  
  textAlign(CENTER)
  textSize(50)
  text (' 7+3=', 330,140);
  
  if(mouseX > ax4 && mouseX < ax4 + largura1 && mouseY > cy4 && mouseY < cy4 +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax4,cy4,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 7
      }
    }
    fill(0,0,0);
    noStroke();
    text('10',425,215);
    
    if(mouseX > ax4 && mouseX < ax4 + largura1 && mouseY > dz4 && mouseY < dz4 + altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax4,dz4,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 9
              }
    }
    fill(0,0,0);
    noStroke();
    text('13',425,295);
   
  
  
  
   
   

  
  textAlign(CENTER);
    textSize(30);
    text('Nível : 3',560, 250);
  
  
  
  
  
    
   
}
  else if(tela == 7){
   background(0,185,900);
    image(img1,10,10);
  

  
  textAlign(CENTER);
    textSize(30);
    text('Nível : 3',560, 250);
  
  
  
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('FASE 4',560,40);
  
  textAlign(CENTER)
  textSize(50)
  text (' 12+11=', 330,140);
    
    if(mouseX > ax5 && mouseX < ax5 + largura1 && mouseY > cy5 && mouseY < cy5 +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax5,cy5,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 8
      }
    }
    fill(0,0,0);
    noStroke();
    text('23',285,215);
    
    if(mouseX > ax5 && mouseX < ax5 + largura1 && mouseY > dz5 && mouseY < dz5 + altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax5,dz5,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 9
              }
    }
    fill(0,0,0);
    noStroke();
    text('18',275,295);
     
    
    
   
  
  
  
}
  else if(tela == 8){
   background(0,185,900);
    image(img1,10,10);
  

  
  
  
  textAlign(CENTER);
    textSize(30);
    text('Nível : 4',560, 250);
  
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('FASE 5 (Final)',560,40);
  
  textAlign(CENTER)
  textSize(50)
  text (' 19+21=', 330,140);
    
    
     if(mouseX > ax7 && mouseX < ax7 + largura1 && mouseY > cy7 && mouseY < cy7 +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax7,cy7,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 10
      }
    }
    fill(0,0,0);
    noStroke();
    text('40',425,215);
    
    if(mouseX > ax7 && mouseX < ax7 + largura1 && mouseY > dz7 && mouseY < dz7 + altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax7,dz7,largura1,altura1,15);
      if(mouseIsPressed){
        tela = 9
              }
    }
    fill(0,0,0);
    noStroke();
    text('34',425,295);
   

  
  
   
   

  
  
  
  
     
    
    
   
  
}
  else if(tela == 10){
   background(0,185,900);
    image(img2,10,10);
  

  
  
  
  
  
  
    
    textAlign(CENTER);
    textSize(30);
    
    text('Fim de Jogo',350,200);
  
  textAlign(CENTER)
  textSize(30)
  text (' Obrigado por jogar', 330,275);
  if(mouseX > ax && mouseX < ax + largura1 && mouseY > gm && mouseY < gm +altura1){
   
    stroke(20)
    fill(0,200,900);
    rect(ax,gm,largura2,altura2,15);
      if(mouseIsPressed){
        tela = 1}
    }
        fill(0,0,0);
    noStroke();
    text('Menu',330,65);
   
     
}
  
}