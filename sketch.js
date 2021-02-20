var player ;
var enmy1,enmy2, enmy3, enmy4,enmy5 ,enmy6 ,enmy7
var shoot
var bullet
var score = 0
var gameState = "level1"
function preload (){
plright = loadImage("player.png")
plleft = loadImage("player2.png")
pl = loadImage("player3.png")

en2 = loadImage("enemy1.png")
en3 = loadImage("enemyies1.png")


bulet = loadImage("bulletright1.png")
bulet1 = loadImage("bulletleft.png")
shot = loadImage("fire.png")

bck = loadImage("bckgrnd.jpg")



}
function setup() {
  createCanvas(1000,700);
  player = createSprite(500,600,50,50)
  player.addImage(pl)
  player.scale=0.4

  shoot = createSprite(800,600,30,30)
  shoot.addImage(shot)
  shoot.scale=0.19

 enmyGroup = new Group();
  bulletGroup = new Group();
}

function draw() {
  background(bck);  
  drawSprites();
  //bullet = createSprite(500,600,30,30)
  //bullet.debug= true;
  //bullet.x =player.x
  //bullet.y = player.y
//bullet.visible=false;
//enmyGroup.setDepthEach(bullet.depth)
//if (mousePressedOver(shoot)){}

//bullets();
fill("white")
textSize(30)
text ("Score:"+score,800,100)

  if (keyDown("up")){
player.y = player.y-10
bullets();
  }
  if (keyDown("down")){
    player.y = player.y+10
    bullets();
  }
  if(keyDown("right")){
  //  player.x= player.x+10;
  player.addImage(plright)
  player.scale =1
  bullets();
  }

  if(keyDown("left")){
   // player.x = player.x-10
    player.addImage(plleft)
    player.scale =1
    bullets();
  }
  
if(frameCount %400===0){
    enemy= createSprite(950,random(200,700),30,30)
    enemy.scale= 0.25
    enmyGroup.add(enemy);
    var monster= Math.round(random(1,2))
    switch(monster){
      case 1: enemy.addImage(en2)
              enemy.velocityX=-2     
              


              
      break;
      case 2: enemy.addImage(en3)
              enemy.x= 50
              enemy.velocityX=2
              break;
     
        default:break;
         
    }
}  
 

//  if(enmyGroup.collide(bulletGroup)){
//  enmyGroup.destroyEach();
//  // enmyGroup.setVisibleEach(false)
//   bulletGroup.destroyEach();
//      console.log("sahithi")
// // enmyGroup.setVelocityEach(0)
// // bulletGroup.setVelocityEach(0)
// score = score + 10;

// }
 
 // enemies();



if(enmyGroup.collide(bulletGroup)){
  enmyGroup.destroyEach();
  // enmyGroup.setVisibleEach(false)
   bulletGroup.destroyEach();
      console.log("sahithi")
 // enmyGroup.setVelocityEach(0)
 // bulletGroup.setVelocityEach(0)
 score = score + 10;
 
 }//level1 completed


if (score === 100){
fill("white")
textSize(30);
text("LEVEL2 STARTS",350,350)
gameState = "level2"
}
if (gameState==="level2"){

  if(frameCount %350===0){
    enemy= createSprite(950,random(200,700),30,30)
    enemy.scale= 0.25
    enmyGroup.add(enemy);
    var monster= Math.round(random(1,2))
    switch(monster){
      case 1: enemy.addImage(en2)
              enemy.velocityX=-2      
      break;
      case 2: enemy.addImage(en3)
              enemy.x= 50
              enemy.velocityX=2
              break;
     
        default:break;
         
    }
}  



if(enmyGroup.collide(bulletGroup)){
  enmyGroup.destroyEach();
  // enmyGroup.setVisibleEach(false)
   bulletGroup.destroyEach();
      console.log("sahithi")
 // enmyGroup.setVelocityEach(0)
 // bulletGroup.setVelocityEach(0)
 score = score + 20;
 
 }}//level 2 completed




 if (score === 150){
  fill("white")
  textSize(30);
  text("LEVEL3 STARTS",350,350)
  gameState = "level3"
  }
  if (gameState==="level3"){
  
    if(frameCount %300===0){
      enemy= createSprite(950,random(200,700),30,30)
      enemy.scale= 0.25
      enmyGroup.add(enemy);
      var monster= Math.round(random(1,2))
      switch(monster){
        case 1: enemy.addImage(en2)
                enemy.velocityX=-4      
        break;
        case 2: enemy.addImage(en3)
                enemy.x= 50
                enemy.velocityX=4
                break;
       
          default:break;
           
      }
  }  
  
  
  
  if(enmyGroup.collide(bulletGroup)){
    enmyGroup.destroyEach();
    // enmyGroup.setVisibleEach(false)
     bulletGroup.destroyEach();
        console.log("sahithi")
   // enmyGroup.setVelocityEach(0)
   // bulletGroup.setVelocityEach(0)
   score = score + 25;
   
   }}//level 3 completed



}  



function bullets(){
  
bullet = createSprite(500,600,30,30)
   bullet.debug= true;
  //bullet.x =player.x
  //bullet.y = player.y
bullet.visible=false;
bulletGroup.add(bullet)


if (keyDown("up")){
  
  bullet.y = player.y
    }

if (keyDown("down")){
    
    bullet.y = player.y
    }
if(keyDown ("right")){
    //  player.x= player.x+10;
    
  bullet.addImage(bulet)
  bullet.y = player.y
  //bullet.velocityX=10
  bullet.scale=0.19
  bullet.velocityX=2
  bullet.visible=true
    }

if(keyDown("left")){
      // player.x = player.x-10
     
    bullet.visible=true;
    bullet.addImage(bulet1)
   bullet.velocityX=-2;
   bullet.scale=0.19
   bullet.y = player.y
     }
}




// function enemies ()
// {

//   if(bullet.collide(enmyGroup)){
//     // enmyGroup.destroyEach();
//     enmyGroup.setVisibleEach(false)
//       bullet.destroy();
//      }
// if  (frameCount%300===0) {
//   enmy1 = createSprite(50,random(200,700),30,30)
//   enmy1.velocityX = 2
//   enmy1.addImage(en4)
//   enmy1.scale=0.25
//   enmyGroup.add(enmy1)
//   enmy1.debug=true;
 
//   /*if(enmy1.isTouching(bullet)){
//     enmy1.destroy();
//     bullet.destroy();
//     console.log("enmydies")
//    }*/


//   enmy4 = createSprite(950,random(200,700),30,30)
//   enmy4.velocityX = -2
//   enmy4.addImage(en2)
//   enmy4.scale=0.25
//   enmyGroup.add(enmy4)
//   // // if(enmy4.isTouching(bullet)){
//   //   enmy4.destroy();
//   //   bullet.destroy();
//   //  }
// }

// if (frameCount%400===0) {
//   enmy2 = createSprite(50,random(200,700),30,30)
//   enmy2.velocityX = 2
// enmy2.addImage(en2)
// enmy2.scale = 0.25
// enmyGroup.add(enmy2)

// // if(enmy2.isTouching(bullet)){
// //   enmy2.destroy();
// //   bullet.destroy();
// //  }
//   enmy5 = createSprite(950,random(200,700),30,30)
//   enmy5.velocityX = -2
//   enmy5.addImage(en5)
//   enmy5.scale = 0.25
//   enmyGroup.add(enmy5)
//   // if(enmy5.isTouching(bullet)){
//   //   enmy5.destroy();
//   //   bullet.destroy();
//   //  }
// }

// if (frameCount%200===0){


//   enmy3 = createSprite(50,random(200,700),30,30)
//   enmy3.velocityX = 2
//   enmy3.addImage(en3)
//   enmy3.scale=0.25
//   enmyGroup.add(enmy3)
//   // if(enmy3.isTouching(bullet)){
//   //   enmy3.destroy();
//   //   bullet.destroy();
//   //  }

//   enmy6 = createSprite(950,random(200,700),30,30)
//   enmy6.velocityX = -2
//   enmy6.addImage(en6)
//   enmy6.scale = 0.25
//   enmyGroup.add(enmy6)
//   // if(enmy6.isTouching(bullet)){
//   //   enmy6.destroy();
//   //   bullet.destroy();
//   //  }
// }

// }


// function enemys(){
//   if(frameCount %400===0){
// enemy= createSprite(950,random(200,700),30,30)
// enemy.scale= 0.25
// var monster= Math.round(random(2,6))
// switch(monster){
//   case 2: enemy.addImage(en2)
//           enemy.velocityX=-2
//   break;
//   case 3: enemy.addImage(en3)
//           enemy.x= 50
//           enemy.velocityX=2
//           break;
//     case 4: enemy.addImage(en4)
//          enemy.velocityX=-2
//     break;
//     case 5:enemy.addImage(en5)
//     enemy.x= 50
//     enemy.velocityX=2
//     break;
           
//     case 6:enemy.addImage(en6)
//     enemy.velocityX=-2
//     break;
//     default:break;
     
// }

// enmyGroup.add(enemy);

//   }



  
// 