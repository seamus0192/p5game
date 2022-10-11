// scene 1

var pebblesX = [];
var pebblesY = [];
var numPebbles = 50;
var mountainX, mountainY = [];
var mountainBounds = [];
var mountainColor = [];
var mountainTops = [];
var mountainWidth = [];
var c = [];
var dx1 = 300;
var dy1 = 350;
var monster_dy = 500;
var heliX = 300;
var heliY = -20;
var rescue = false;
var workman;
//----------------------------------------------------------------------------------

// scene 2
var dir;
var loc;
var sc;
var col;

var rockX = [];
var rockY = [];
var rockScale = [];
var rockColor = [];
var numRocks;
//----------------------------------------------------------------------------------

// scene 3
let scrl = 0
let skycol = []
var build1 = 0; buildWd = []; buildHt = []; buildSp = []
var build2 = 0; build2Col = []; build2Wd = []; build2Ht = []; build2Sp = []
var dx, dy;
var img;
var flip = true
var party = false
var football = false
var stadium = false
var bloodSp = false
var num1 = false
var num2 = false
var num3 = false
var bcount = 0;
var teachFlip = false
var lightColor = 'rgba(255, 255, 0, 0.5)';
var lightSwitch = 0;
var lightMove = 0;
var smokeQuant = 300;
var smokeSize = 8;
var grav = -0.4;
var smokeLayers = 5;
var smokeArr = [];
var batCh = 0;
//----------------------------------------------------------------------------------

// scene4
// images
let airplane, pJW, asteroidImg;

// plane variables for first screen
let planeX, planeY;
let pX, pY;

// for earth rotation
let angle = 0;

// Booleans
let earthRot, fly; 
let pageState = 'startPage'; 
let confettiDisplay; // changes stars to confetti when true

// Arrays
let parachute;
let stars;
let shootingStars;
let asteroids;

// gamePlay scoring system
let score;
//----------------------------------------------------------------------------------

// scene 5
var hand;
var opphand;
var chips;
let bet;
let fold;
let winChips;
let loseChips;
let winMes;
let loseMes;
let moveCard;
let workmanNormal;
let workmanSad;
let workmanHappy;
let busted;
let endScreen;
var cy;


function preload() {
   // scene 1
    workman = loadImage('WorkmanClimb.png');
    monster = loadImage('demogorgon.png');
//----------------------------------------------------------------------------------

   // scene 3
   //prince = loadSound('assets/Prince.mp3')

   img = loadImage('assets/WorkmanBike.png')
   img1 = loadImage('assets/WorkmanHappy.png')
   img2 = loadImage('assets/WorkmanNormal.png')
   dodgers = loadImage('assets/Dodgers.jpg')
   sf = loadImage('assets/sf.png')
   fans = loadImage('assets/fans.jpg')
   player = loadImage('assets/player.jpg')
   qb = loadImage('assets/qb.jpg')
   bat = loadImage('assets/bat.png')
   blood = loadImage('assets/blood.png')

//----------------------------------------------------------------------------------

   // scene 4
   airplane = loadImage('airplane.png');
   pJW = loadImage('WorkmanHappy.png');
   asteroidImg = loadImage('asteroid.png')
//----------------------------------------------------------------------------------

   // scene 5
   //imageMode(CORNER);
   normalWorkman = loadImage('Teddy Final Images/WorkmanNormal.png');
   sadWorkman = loadImage('Teddy Final Images/WorkmanSad.png');
   happyWorkman = loadImage('Teddy Final Images/WorkmanHappy.png');
   casino = loadImage('Teddy Final Images/casino.jfif');
   spade = loadImage('Teddy Final Images/spade.png');
   heart = loadImage('Teddy Final Images/heart.png');
   diamond = loadImage('Teddy Final Images/diamond.png');
   clubs = loadImage('Teddy Final Images/club.png');

}

function setup() {
   createCanvas(600, 450);
   // scene 1
    for (let i =0; i<100; i++){
        mountainY[i] = random(80, 205);
        mountainWidth[i] = random(120, 135);
        c[i] = color(random(150, 190), random(170, 210), random(245, 255));
    }

    for(var i = 0; i < numPebbles; i++){
        pebblesX.push(random(width));
        pebblesY.push(random(200, 300));
    }

   // scene 2
   loc = createVector(0, 250);
   dir = 0;
   sc = 0.75;  

   numRocks = 500;

   //set up rock variables
   for (var i = 0; i < numRocks; i++)
   {
      rockX.push(random(width));
      rockY.push(random(height));
      rockScale.push(random(0.25, 2));
      rockColor.push(color(152, 133, 88));
   }

//----------------------------------------------------------------------------------
   // scene 3
   for (let l = 0; l < smokeLayers; l++) {
      smokeArr.push([])
      for (let i = 0; i < smokeQuant; i++) {
         smokeArr[l].push({
            x: random(2000),
            y: random(4000),
            mass: random(0.75, 1.25),
            l: l + 1
         })
      }
   }

   for (let i = 0; i<50; i++){
      buildWd[i] = random(15,25)
      buildHt[i] = random(20,45)
      buildSp[i] = build1
      build1 += random(15,35)
      build2Ht[i] = random(100,200)
      build2Wd[i] = random(50,100)
      build2Sp[i] = build2
      build2Col[i] = color(random(150,225))
      build2 += random(100,130)
   }
   build2Col[3] = color(100,0,100)
   build2Col[8] = color(0,0,200)
   build2Col[10] = color(90,0,0)

   for (let i = 0; i<160000; i++){
      skycol[i] = color(random(150,175),random(150,175),random(240,250));
   }
//----------------------------------------------------------------------------------

   // scene 4
   // static stars
   stars = [];
   for (let i = 0; i < 100; i++) {
      stars.push(new Stars());
   }

   // moving stars
   shootingStars = [];
   for (let i = 0; i < 10; i++) {
      shootingStars.push(new ShootingStars());
   }

   // asteroids
   asteroids = [];
   for (let i = 0; i < 20; i++) {
      asteroids.push(new Asteroid());
   }

   // parachute
   parachute = new Parachute();

   // Booleans 
   earthRot = false;
   fly = false;
   confettiDisplay = false;
   drop = false;

   planeX = width/2 - 10;
   planeY = height - 270;

   pX = width/2;
   pY = height - 260;

   dim = 70;

   score = 0;
   hit = false;
//----------------------------------------------------------------------------------
   // scene 5
   hand = random(1,5);
   hand = int(hand);
   opphand = random(1,5);
   chips = 5;
   bet = false;
   fold = false;
   winChips = false;
   loseChips = false;
   winMes = false;
   loseMes = false;
   moveCard = false;
   workmanNormal = true;
   workmanSad = false;
   workmanHappy = false;
   busted = false;
   endScreen = false;
   cy = 300;
}

function draw() {
   if (pageState === 'startPage') {
      startPage();
   } else if (pageState === 'scene1') {
      scene1();
   } else if (pageState === 'scene2') {
      scene2();
   } else if (pageState === 'scene3') {
      imageMode(CENTER)
      scene3();
   } else if (pageState === 'introPage') {
      introPage();
   } else if (pageState === 'gamePlay') {
      gamePlay();
   } else if (pageState === 'gameEnd') {
      gameEnd();
   } else if (pageState === 'scene5') {
      imageMode(CORNER);
      resizeCanvas(650, 400, true);
      scene5();
   } else if (pageState === 'endScene') {
      endScene();
   }

   // make rotation start when keyPressed == true
   if (earthRot) {
      angle += 0.015;
   } 

   if (fly) {
      // subtract from y val of plane until a certain point
      if (planeY > 100) {
         planeY --;
         pY --; 
      } else if (planeY == 100) {
         earthRot = false;
      }
   }
}



// start page
function startPage(){
   background(255);
   fill(0);
   textFont('Futura');
   textSize(30);
   text("WORKMAN'S ADVENTURE", 110, height/2 + 10);
   textSize(15);
   text('Press SHIFT to start', 235, height/2 + 70);
}

function scene1() {
   noStroke();
 var j = 1

    background(255);

    mountainX = 0;

    while(mountainX < width)

    {

        

        fill(c[j]);

        quad(mountainX - 1, mountainY[j-1], mountainX - 1, height + 10, mountainX + mountainWidth[j] + 1, height + 10, mountainX + mountainWidth[j] + 1, mountainY[j]);

        mountainBounds.push(mountainX);

        mountainBounds.push(mountainX + mountainWidth[j]);

        mountainTops.push(mountainY[j]);

        mountainTops.push(mountainY[j]);

        mountainX += mountainWidth[j];

        mountainColor.push(c[j]);

        j++

    }

    for(var j = 0; j < numPebbles; j++)

            {

                if(pebblesX[j] > mountainBounds[0] && pebblesX[j] < mountainBounds[1])

                        fill(mountainColor[0]);

                else if(pebblesX[j] > mountainBounds[2] && pebblesX[j] < mountainBounds[3])

                    fill(mountainColor[1]);

                else if(pebblesX[j] > mountainBounds[4] && pebblesX[j] < mountainBounds[5])

                    fill(mountainColor[2]);

                else if(pebblesX[j] > mountainBounds[6] && pebblesX[j] < mountainBounds[7])

                    fill(mountainColor[3]);

                else

                    fill(mountainColor[4]);

                    

                        ellipse(pebblesX[j], pebblesY[j], 6);

                pebblesX[j] += random(-1,1);

                pebblesY[j] += random(1, 3);

                fill(255);

                ellipse(pebblesX[j], pebblesY[j], 5);

                

            

                if(pebblesY[j] > height)

                {

                    pebblesY[j] = random(175, 225);

                }

            }

    

    

   

    image(workman, dx1, dy1, 40, 40);

    

    fill(mountainColor[2]);

    ellipse(dx1, monster_dy, 15);

    

    if(dy1 < monster_dy)

        monster_dy -= 0.75;

             

    if(dy1 < ((mountainTops[2] + mountainTops[3])/2) + 20)

             {

             monster_dy += 2;

        var heliColor = color(255);

        var propellerColor = color(255);

        drawHelicopter(heliX, heliY, heliColor, propellerColor, 1.01);

        heliY += 0.5;

        if(heliY > dy1)

                {

                    rescue = true;

                }

        if(rescue)

        {

            heliY--;

            dy1 -= 0.5;
        }
        heliColor = color(255, 0, 0);
        propellerColor = color(50);
        drawHelicopter(heliX, heliY, heliColor, propellerColor, 1);
   }

   if (dy1 == 0) {
      pageState = 'scene2';
   }
   image(monster, dx1, monster_dy, 50, 50);
   console.log(monster_dy);
}

function scene2() {
   var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10;

   background('#856C42');

   for (var i = 0; i < numRocks; i++)
   {
      drawRocks(rockX[i], rockY[i], rockScale[i], rockColor[i]);
     
   }
   

   drawBike(loc.x, loc.y, dir.x, dir.y, sc);
   loc.add(dir);

   // test for CRASH!
   line1 = imp_line(loc.x, loc.y, 0, 190, 300, 0);
   line2 = imp_line(loc.x, loc.y, 0, 290, 430, 0);
   line3 = imp_line(loc.x, loc.y, 0, 100, 500, 500);
   line4 = imp_line(loc.x, loc.y, 0, 0, 650, 500);
   line5 = imp_line(loc.x, loc.y, 600, 0, 300, 500);
   line6 = imp_line(loc.x, loc.y, 700, 0, 400, 500);
   line7 = imp_line(loc.x, loc.y, 200, 0, 900, 500);
   line8 = imp_line(loc.x, loc.y, 350, 0, 1000+50, 500);
   line9 = imp_line(loc.x, loc.y, 300, 500, 1000, 150);
   line10 = imp_line(loc.x, loc.y, 500, 500, 1000, 250);
   
 

   if (line1 < 0)
   {
      loc = createVector(0, 250);
      dir = 0;
   }

   if (line2 > 0 && line3 >0)
   {
      loc = createVector(0, 250);
      dir = 0;
   }

   if (line4 < 0 && line2 < 0) {
      loc = createVector(0, 250);
      dir = 0;
   }

   if(line4 < 0 && line5 > 0) {
      loc = createVector(0, 250);
      dir = 0;
   }

   if (line6 < 0 && line7 > 0) {
      loc = createVector(0, 250);
      dir = 0;
   }

   if(line10 > 0) {
      loc = createVector(0, 250);
      dir = 0;
   }
   if (line8 < 0 && line9 < 0) {
      loc = createVector(0, 250);
      dir = 0;

   }

   if (loc.x > width) {
      pageState = 'scene3';
   }

   noStroke();
   fill(92, 64, 51, 200);
   triangle(1, 190, 0, 0, 300, 0);
   triangle(0, 0, 410, 317, 600, 0);
   triangle(350, 0, 740, 280, 1300, 0);
   triangle(-300, 500, 130, 205, 500, 500);
   triangle(400, 500, 550, 250, 900, 500);
   triangle(500, 500, 1000, 500, 1000, 250);
 

   fill(255);
   textSize(15);
   textFont("Arial");
   text("Press any key to start", 28, 30);

}

function scene3() {
 var j = 0
 push();
   translate(scrl,0)
   if (keyIsPressed === true && keyCode === LEFT_ARROW && scrl<0 && !football) {
      scrl += 3;
      flip = false
   } else if (keyIsPressed === true && keyCode === RIGHT_ARROW && !party && scrl>-1030 && !football) {
      scrl -= 3;
      flip = true;
   }

   if (scrl < -1000) {
      pageState = 'introPage';
   }

   console.log(scrl)

   noStroke()
   background(255)
   push()
      translate(-scrl/3,0)
      for (var y=-2; y<250; y+=6){  //sky generation
         for (var x=-2; x<width*10; x+=6){
            fill(skycol[j])
            rect(x,y,6,6)
            j++
         }
      }
   pop()

   for (let l = 0; l < smokeArr.length; l++) { //smoke particles
      var layer = smokeArr[l]
      for (let i = 0; i < layer.length; i++) {
         var smoke = layer[i]
         rect(smoke.x, smoke.y, (smoke.l * smokeSize) / smokeLayers, (smoke.l * smokeSize) / smokeLayers)
         updateSmoke(smoke)
      }
   }


   for  (let i = 0; i<50; i++){  //horizon buildings
      fill(38,30,17)
      rect(buildSp[i],190 - buildHt[i],buildWd[i],buildHt[i])
   }

   fill(38,30,17)
   rect(-100,190,8000,400)

   push()
      translate(scrl/2,0)
      for  (let i = 0; i<50; i++){  //mid buildings
         fill(build2Col[i])
         rect(build2Sp[i],350 - build2Ht[i],build2Wd[i],build2Ht[i])
         if (build2Ht[i]<115 && i != 3){
            ellipse((build2Sp[i]+build2Wd[i]/2),350-build2Ht[i], build2Wd[i]-10)
            push()
               fill(0)
               rect((build2Sp[i]+build2Wd[i]/2),300,10,20)
            pop()
         }
         if (build2Ht[i]>175 && build2Wd[i]>70){
            rect(rect(build2Sp[i]+10,350 - (build2Ht[i]*1.5),build2Wd[i]-20,build2Ht[i]))
            rect(rect(build2Sp[i]+20,350 - (build2Ht[i]*2.25),build2Wd[i]-40,build2Ht[i]))
         }
      }


      fill(82)
      rect(-100,320,8000,200)
      fill(50)
      rect(-100,325,4000,40)
      club()



      if (party){
         translate(-scrl * 1.5,0)
         fill(0)
         rect(0,0,600,450)


         changeLight()
         fill(lightColor);
         rect(0,325,width,150)
         if (frameCount % 10 == 0)
            teachFlip = !teachFlip

         if (teachFlip){
            push();
                scale(-1, 1)
                image(img1, -width/2,height/2,450,450);
            pop();
         }

         if(!teachFlip)
            image(img1, width/2,height/2,450,450);

         arc(width/2-100, height/2+100, 200, 90, 0, PI, OPEN);
         triangle(width/2,height/2+100, width/2-200, height/2+100, width, -50)
         arc(width/2+100, height/2+100, 200, 90, 0, PI, OPEN);
         triangle(width/2,height/2+100, width/2+200, height/2+100, -50, -50)   
         fill(120,80,40)
         rect(525,200,75,125)
         fill(0)
         ellipse(545,266,10)
      }   

      if (football){
         translate(-scrl * 1.5,0)
         fill(80,40,10)
         rect(-10,-10,700,500)
         image(qb,width/4,height/1.5,300,300)
         image(player,width/1.3, height/1.5,400,300)
         image(img1,width/2,height/1.3,400,400)
         fill(255)
         rect(50,20,500,80)
         triangle(100,100,200,100,150,175)
         triangle(500,100,400,100,450,175)
         fill(255,0,0)
         push()
         stroke(0)
            rect(450,350,120,40)
         pop()
         fill(0)
         textSize(15)
         text('We Love You Ms. Workman thank you for being our number one fan!!!',280,53)
         textSize(30)
         text('NEXT',508,382)
      }

      if (stadium){
         translate(-scrl * 1.5,0)
         image(fans,width/2,height/2,650,475)
         image(img2, width/1.15, height/1.5,300,300)
         image(bat,width/2,height+50-batCh,150,250)
         if (batCh<150)
            batCh += 4
         else if (!bloodSp){
            target(125,50)
            target(252,160)
            target(346,110)
         }

         if (bloodSp){
            bcount++
            if (num1)
               image(blood,125,60,80,80)
            if (num2)
               image(blood,250,160,80,40)
            if (num3)
               image(blood,346,110,80,80)
         }

         console.log(bcount)

         if (bcount>20){
            fill(0)
            rect(-10,-10,1000,1000)
            image(img1, width/2, height, 800,800)
            fill(255,0,0)
            rect(450,350,120,40)
            fill(0)
            textSize(35)
            text('NEXT',508,387)
         }
      }   

      if (!party && !stadium && !football){
         if (flip) {
            push();
                scale(-1, 1)
                image(img, -100 + scrl*2, 320, 100, 80);
            pop();
         }
         else {
            image(img, -(-100 + scrl*2), 320, 100, 80);
         }
         push()  //foreground
         translate(scrl/2,0)
            plantBed(-40,383,40)
            drawFractal(0,400,50,20,50)
            plantBed(527,371,25)
            drawFractal(550,380,30,12,50)
            plantBed(870,390,30)
            drawFractal(900,410,60,6,50)
            plantBed(1368,435,35)
            drawFractal(1400,450,50,9,40)
         pop()
         fill(210,180,140)
         rect(1700,100,600,400)
         beginShape()
            vertex(1700,100)
            vertex(1625,50)
            vertex(2200,50)
            vertex(2200,100)
         endShape()
         fill(150,150,255)
         rect(1750,125,75,120)
         rect(1850,125,75,120)
         rect(1950,125,75,120)
         rect(2050,125,75,120)
      }
   pop();
pop();
}


// scene 4
function introPage() {
   let designColor = color(66, 120, 56);
   background(0);

   // static stars
   for (let star of stars) {
      star.displayStars();
   }

   // moving stars
   for (let shootingStar of shootingStars) {
      shootingStar.displayShootingStars();
      shootingStar.moveShootingStars();
   }

   // earth
   push();
      translate(width/2, height);
      rotate(angle);
      fill('#01A3FF');
      ellipse(0, 0, 500); 

      // left earth
      push();
      noStroke();
         fill('#79FA76')
         beginShape();
            curveVertex(-70, 239);
            curveVertex(-70, 239);
            curveVertex(-120, 220);
            curveVertex(-190, 160);
            curveVertex(-220, 100);
            curveVertex(-240, 70);
            curveVertex(-245, -55);
            curveVertex(-187, -160);
            curveVertex(-110, -70);
            curveVertex(-50, 0);     
            endShape(CLOSE);
         pop();

      // right earth
      push();
      noStroke();
         fill('#79FA76')
         beginShape();
            curveVertex(-20, -249);
            curveVertex(-20, -249);  
            curveVertex(90, -235);
            curveVertex(200, -150);
            curveVertex(250, 0);
            curveVertex(100, -20);
            curveVertex(5, -100);
         endShape(CLOSE);
      pop();

   pop();

   // planets
   parametric(50, 100);
   fill(200, 120, 200);
   ellipse(50, 100, 40);

   parametric(100, 200);
   fill(100, 120, 250);
   ellipse(100, 200, 20);

   parametric(330, 70);
   fill(100, 220, 200);
   ellipse(330, 70, 30);

   parametric(480, 175);
   fill(250, 220, 200);
   ellipse(480, 175, 50);

   // text
   textFont('Futura');
   textSize(15);
   fill(255);
   text('1: PRESS UP ARROW TO FLY', 10, 30);
   text('2: PRESS DOWN ARROW TO DROP', 10, 60);

   // plane
   image(airplane, planeX, planeY + 30, 100, 60);

   // professor
   image(pJW, pX, pY - 10, 50, 50);
}


// game code
function gamePlay() {
   let bLine = line(parachute.x - 20, parachute.y + 30, parachute.x + 40, parachute.y + 30);

   background(0);

   // static stars
   for (let star of stars) {
      star.displayStars();
   }

   // moving stars
   for (let shootingStar of shootingStars) {
      shootingStar.displayShootingStars();
      shootingStar.moveShootingStars();
   }

   for (let asteroid of asteroids) {
      asteroid.drawAsteroids();
      asteroid.moveAsteroids();

      //increment score when the bottom of the image == the asteroid
      if (parachute.hits(asteroid)) {
         hit = true;
         score ++;
         asteroid.removeAsteroid();
      }
   }

   console.log(hit);

   // parachute
   parachute.drawParachute();
   parachute.moveParachute();

   // when the parachute reaches end of screen, display next screen
   if (parachute.y >= height) {
      pageState = 'gameEnd';
   }

   fill(255);
   text(`SCORE: ${score}`, 20, 20);
}

// end game & score screen
function gameEnd() {
   background(0);

   // static stars
   for (let star of stars) {
      star.displayStars();
   }

   // moving stars
   for (let shootingStar of shootingStars) {
      shootingStar.displayShootingStars();
      shootingStar.moveShootingStars();
   }

   textSize(20);
   fill(255);
   text(`FINAL SCORE: ${score}`, width/2 - 80, height/2);
   text('Press ENTER to move on', width/2 - 110, height/2 + 40);
}


// scene 5
function scene5(){
 busted = false;
   loseChips = false;
   winChips = false;
   fill('#7A5227');
   rect(0,0,650,400)

   push()
      scale(0.55)
      image(casino,0,-210);
   pop()

   if (workmanNormal == true)
   {
      push()
         translate(200,-10)
         scale(0.17);
         image(normalWorkman,0,0);
      pop()
   }

   if (workmanSad == true)
   {
      push()
         translate(205,-10)
         scale(0.17);
         image(sadWorkman,0,0);
      pop()
   }

   if (workmanHappy == true)
   {
      push()
         translate(200,-10)
         scale(0.17);
         image(happyWorkman,0,0);
      pop()
   }

   fill('#247023');
   //strokeWeight(5);
   ellipse(325,470,1100,600);

   //strokeWeight(5);

   if (hand == 1)
   {
      fill('#F8F7F2');
      rect(140,cy,50,70);
      rect(220,cy,50,70);
      rect(300,cy,50,70);
      rect(380,cy,50,70);
      rect(460,cy,50,70);
      fill(0);
      textSize(20);
      push()
         translate(154,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('4',160,350);
      push()
         translate(230,310)
         scale(0.035);
         image(heart,0,0);
      pop()
      text('Ace',230,350);
      push()
         translate(314,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('6',319,350);
      push()
         translate(395,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('8',400,350);
      push()
         translate(475,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('10',474,350);
      textSize(30);
      text('Ace High',265,250);
   }

   if (hand == 2)
   {
      fill('#F8F7F2');
      rect(140,cy,50,70);
      rect(220,cy,50,70);
      rect(300,cy,50,70);
      rect(380,cy,50,70);
      rect(460,cy,50,70);
      fill(0);
      textSize(20);
      push()
         translate(154,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('4',160,350);
      push()
         translate(230,310)
         scale(0.035);
         image(heart,0,0);
      pop()
      text('Ace',230,350);
      push()
         translate(314,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('6',319,350);
      push()
         translate(395,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('6',400,350);
      push()
         translate(475,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('10',474,350);
      textSize(30);
      text('Pair of Sixes',245,250);
   }

   if (hand == 3)
   {
      fill('#F8F7F2');
      rect(140,cy,50,70);
      rect(220,cy,50,70);
      rect(300,cy,50,70);
      rect(380,cy,50,70);
      rect(460,cy,50,70);
      fill(0);
      textSize(20);
      push()
         translate(154,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('5',160,350);
      push()
         translate(230,310)
         scale(0.035);
         image(heart,0,0);
      pop()
      text('6',240,350);
      push()
         translate(315,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('7',320,350);
      push()
         translate(395,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('8',400,350);
      push()
         translate(475,305)
         scale(0.025);
         image(diamond,0,0);
      pop()
      text('9',480,350);
      textSize(30);
      text('Straight',270,250);
   }

   if (hand == 4)
   {
      fill('#F8F7F2');
      rect(140,cy,50,70);
      rect(220,cy,50,70);
      rect(300,cy,50,70);
      rect(380,cy,50,70);
      rect(460,cy,50,70);
      fill(0);
      textSize(20);
      push()
         translate(153,305)
         scale(0.022);
         image(clubs,0,0);
      pop()
      text('4',160,350);
      push()
         translate(233,305)
         scale(0.022);
         image(clubs,0,0);
      pop()
      text('Ace',230,350);
      push()
         translate(313,305)
         scale(0.022);
         image(clubs,0,0);
      pop()
      text('6',320,350);
      push()
         translate(393,305)
         scale(0.022);
         image(clubs,0,0);
      pop()
      text('8',400,350);
      push()
         translate(473,305)
         scale(0.022);
         image(clubs,0,0);
      pop()
      text('10',475,350);
      textSize(30);
      text('Flush',290,250);
   }

   if (hand == 5)
   {
      fill('#F8F7F2');
      rect(140,cy,50,70);
      rect(220,cy,50,70);
      rect(300,cy,50,70);
      rect(380,cy,50,70);
      rect(460,cy,50,70);
      fill(0);
      textSize(20);
      push()
         translate(155,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('10',155,350);
      push()
         translate(234,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('J',240,350);
      push()
         translate(315,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('Q',319,350);
      push()
         translate(395,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('K',400,350);
      push()
         translate(475,305)
         scale(0.04);
         image(spade,0,0);
      pop()
      text('Ace',469,350);
      textSize(30);
      text('Royal Flush',245,250);
   }

   //strokeWeight(2);
   fill('#00CF0A')
   ellipse(185,240,85,50);
   fill(0);
   textSize(20);
   text('Bet',170,245);

   fill('#D10101');
   ellipse(465,240,85,50);
   fill(0);
   textSize(20);
   text('Fold',445,245);

   fill(0);
   textSize(20);
   text('chip count: ',10,385);
   text(chips,110,385);

   if (bet == true)
   {
      if (hand > opphand)
      {
         fill(0)
         textSize(50);
         text('You Win',225,220);
         winChips = true;
         winMes = true;
         bet = false;
      }
      else
      {
         fill(0)
         textSize(50);
         text('You Lose',220,220);
         loseChips = true;
         winlose = true;
         loseMes = true;
         bet = false;
      }
   }

   if (winMes == true)
   {
      fill(0)
      textSize(50);
      text('You Win',225,220);
      moveCard = true;
      workmanHappy = true;
      workmanSad = false;
      workmanNormal = false;
   }

   if (loseMes == true)
   {
      fill(0)
      textSize(50);
      text('You Lose',220,220);
      moveCard = true;
      workmanSad = true;
      workmanHappy = false;
      workmanNormal = false;
   }

   if (winChips == true)
   {
      winChips = false;
      chips = chips + 3;
      hand = random(1,6);
      hand = int(hand);
   }

   if (loseChips == true)
   {
      loseChips = false;
      chips = chips - 3;
      hand = random(1,6);
      hand = int(hand);
   }

   if (fold == true)
   {
      hand = random(1,6);
      hand = int(hand);
      fold = false;
      chips = chips - 1;
      workmanSad = false;
      workmanHappy = false;
      workmanNormal = true;
   }

   if(chips <= 0)
   {
   fill('#247023');
   //strokeWeight(5);
   ellipse(325,470,1100,600);
   workmanSad = true;
   workmanNormal = false;
   workmanHappy = false;
   textSize(50);
   fill(0);
   text('Busted', 245,260)
   fill('#00CF0A')
   ellipse(325,330,200,100);
   fill(0);
   textSize(30);
   text('Buy More',265,330);
   text('chips',290,360);
   fill('#F6D61F')
   rect(460,290,150,70);
   fill(0);
   textSize(22)
   text('Leave Casino',470,331);
   busted = true;
   }

   if (endScreen == true)
   {
      fill(255);
      rect(0,0,650,400);
      image(pJW, width/2, height/2, 300, 300);
      fill(0);
      text('T h a t  w a s  s o  m u c h  f u n :)', 100, 100);
   }
}

// end scene
function endScene() {
   background(0);
   image(pJW, width/2, height/2, 100, 100);
}


class Stars {
   constructor(){  
      this.x = random(width);
      this.y = random(height);
      this.radius = random(1, 4)
      this.color = 255;
   }

   displayStars() {
   if (confettiDisplay) {
      this.color = color(random(255), random(255), random(255));
      fill(this.color);
   } else {
      fill(this.color);      
   }

      noStroke();
      ellipse(this.x, this.y, this.radius);
      stroke(0);
   }
}

class ShootingStars {
   constructor(){  
      this.x = random(width);
      this.y = random(height);
      this.radius = random(1, 4)
      this.xVel = random(5, 10);
      this.yVel = -this.xVel;
      this.color = 255;
   }

   moveShootingStars() {
      this.x += this.xVel;
      this.y += this.yVel;

      if (confettiDisplay) {
         this.xVel = random(1);
         this.yVel = -this.xVel;
      }

      if (this.x + this.radius > width) {
         this.x = random(width);
      } else if (this.x + this.radius < 0) {
         this.x = random(width);
      } else if (this.y + this.radius > height) {
         this.y = random(height);
      } else if (this.y + this.radius < 0) {
         this.y = random(height);
      }
   }

   displayShootingStars() {
      if (confettiDisplay) {
         this.color = color(random(255), random(255), random(255));
         fill(this.color);
      } 
      else {
         fill(this.color);
      }

      noStroke();
      ellipse(this.x, this.y, this.radius);
      stroke(0);
   }
}

class Parachute {
   constructor() {
      this.x = width/2 - 10;
      this.y = 0;
      this.size = 60;
      this.xDir = 0;
      this.yDir = 1;
   }

   drawParachute() {
      fill(color(220, 100, 100));

      // replace with face image
      image(pJW, this.x + 10, this.y, this.size, this.size)

      strokeWeight(2);
      stroke(255);
      line(this.x - 20, this.y - 40, this.x + 1, this.y);
      line(this.x + 19, this.y, this.x + 40, this.y - 40);
      arc(this.x + 10, this.y - 40, 70, 70, radians(-180), radians(180));
   }

   setDir(dir) {
      this.xDir = dir;
   }

   moveParachute(dir) {
      this.x += this.xDir * 5;
      this.y += this.yDir;
      if (this.x + this.size/2 > width) {
         this.x = 0;
      } else if (this.x < 0) {
         this.x = width - this.size/2;
      }
   }

   hits(asteroid) {
      let d = dist(this.x, this.y, asteroid.x, asteroid.y);
      // if the distance is neg, them hit = true
      if (d < this.size/2 + asteroid.size/2) {
         return true;
      } else {
         return false;
      }
   }
}

class Asteroid {
   constructor() {
      this.x = random(width);
      this.y = height;
      this.yVel = random(1, 3);
      this.size = 20;
      this.remove = false;
   }

   drawAsteroids() {
      image(asteroidImg, this.x, this.y, this.size, this.size);
   }

   moveAsteroids() {
      this.y -= this.yVel;
      if (this.y < 0) {
         this.x = random(width);
         this.y = height;
      }      
   }

   // "removes" asteroid (makes the x = 1000 when hits(asteroid))
   removeAsteroid() {
      this.remove = true;
      this.x = 1000;
   }
}

// scene 1

function drawHelicopter(hX, hY, hC, pC, sc)

       {

        push();

        translate(hX, hY);

        scale(sc);

        strokeWeight(2);

        stroke(pC);

        line(0, 0, 0, -18);

        line(-15, -15, 15, -21);

        line(-15, -21, 15, -15);

        line(0, 0, -12, 17);

        line(0, 0, 12, 17);

        line(-15, 17, 15, 17);

        noStroke();

        fill(hC);

        ellipse(0, 0, 30, 20);

        triangle(0, -5, 0, 5, 30, 0);

        triangle(23, 0, 33, -6, 28, 0);

        triangle(23, 0, 33, 6, 28, 0);

        fill('#BAE9FF');

        arc(0, 0, 28, 18, PI, 3*PI/2);

        pop();

    }

// scene 3
function mouseClicked(){
   if (mouseX>build2Sp[3]+scrl*1.5 && mouseY>350 - build2Ht[3] && mouseX<build2Sp[3]+build2Wd[3]+scrl*1.5 && mouseY<320){
         translate(0,0)
         party = true
   }
   if (mouseX>build2Sp[8]+scrl*1.5 && mouseY>350 - build2Ht[8] && mouseX<build2Sp[8]+build2Wd[8]+scrl*1.5 && mouseY<320){
         translate(0,0)
         stadium = true
   }
   if (mouseX>build2Sp[10]+scrl*1.5 && mouseY>350 - build2Ht[10] && mouseX<build2Sp[10]+build2Wd[10]+scrl*1.5 && mouseY<320){
      translate(0,0)
      football = true
   }

   if (party && mouseX>525 && mouseX<width && mouseY<325 && mouseY>200)
         party = false

   if(stadium && mouseX>450 && mouseY>350 && mouseX<570 && mouseY<390)
         stadium = false

   if(football && mouseX>450 && mouseY>350 && mouseX<570 && mouseY<390)
         football = false

   var result; var result1; var result2;
   result = implicit_circle(mouseX, mouseY, 125,50,25)
   result1 = implicit_circle(mouseX, mouseY, 250,160,25)
   result2 = implicit_circle(mouseX, mouseY, 346,110,25)

   if (result <= 0){
      bloodSp = true
      num1 = true
   }
   if (result1 <= 0){
      bloodSp = true
      num2 = true
   }
   if (result2 <= 0){
      bloodSp = true
      num3 = true
   }
//----------------------------------------------------------------------------------

    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)

    {

    //fill(mountainColor[2]);

    ellipse(dx1, dy1, 7);

    if(dy1 > ((mountainY[2] + mountainY[3])/2) - 20 && dy1 < monster_dy)

    {

    dx1 += random(-2, 2);

    dy1 -= 10;

    }

    fill(0);

    ellipse(dx1, dy1, 5)

       }
//----------------------------------------------------------------------------------

       // scene 5
   if (mouseX<230 && mouseX>140 && mouseY<265 && mouseY>215 && busted == false)
   {
      bet = true;
      loseMes = false;
      winMes = false;
      opphand = random(1,6);
      opphand = int(opphand);
   }

   if (mouseX<510 && mouseX>420 && mouseY<265 && mouseY>215 && busted == false)
   {
      fold = true;
      loseMes = false;
      winMes = false;
      opphand = random(1,6);
      opphand = int(opphand);
   }

   if (mouseX>225 && mouseX<425 && mouseY<380 && mouseX>280 && busted == true)
   {
      chips = 5;
      busted = false;
      workmanSad = false;
      workmanNormal = true;
      workmanHappy = false;
   }

   if (mouseX>460 && mouseX<610 && mouseY<360 && mouseY>290 && busted == true)
   {
      endScreen = true;
   }

}

function plantBed(x,y,sz){
   fill(70,45,10)
   rect(x,y,sz*2,sz)
   fill(0,175,0)
   rect(x+5,y+5,(sz*2)-10, (sz-10))
}

function drawFractal(x,y,len,st,col){
   push()
      translate(x,y)
      fractal(len,st,col)
   pop()
}

function fractal(len, st , col) {
   push()
      strokeWeight(st)
      stroke(110,col,40)
      line(0,0,0,-len)
      translate(0,-len)
      if (len>3){
         push()
            rotate(.3)
            fractal(len*.75, st * .7, col*1.1)
         pop()
         push()
            rotate(-.3)
            fractal(len*.75, st * .7,col * 1.2)
         pop()
      }
   pop()
}

function club(){
   fill(122,122,0)
   ellipse(build2Sp[3] + (build2Wd[3]/5),358-build2Ht[3],4)
   ellipse(build2Sp[3] + (build2Wd[3]/2.5),358-build2Ht[3],4)
   ellipse(build2Sp[3] + (build2Wd[3]/1.25),358-build2Ht[3],4)
   ellipse(build2Sp[3] + (build2Wd[3]/1.67),358-build2Ht[3],4)
   textSize(15)
   textAlign(CENTER)
   text('CLUB',build2Sp[3] + (build2Wd[3]/2),380-build2Ht[3])
   image(dodgers, build2Sp[8] + (build2Wd[8]/2),380-build2Ht[8],50,50)
   image(sf, build2Sp[10] + (build2Wd[10]/2),380-build2Ht[10],50,50)
}

function target(x,y){
   push()
      fill(255,0,0)
      ellipse(x,y,50)
      fill(255)
      ellipse(x,y,40)
      fill(255,0,0)
      ellipse(x,y,30)
      fill(255)
      ellipse(x,y,20)
      fill(255,0,0)
      ellipse(x,y,10)
   pop()
}

function changeLight(){
  if (frameCount % 10 == 0){
    lightSwitch++
  }
  if(lightSwitch == 0){
    lightColor = 'rgba(0, 255, 0, 0.3)'
  }

  if (lightSwitch == 1){
    lightColor = 'rgba(255, 0, 0, 0.3)'
  }

  if (lightSwitch == 2){
    lightColor = 'rgba(0, 0, 255, 0.3)'
  }

  if (lightSwitch == 3){
    lightColor = 'rgba(255, 255, 0, 0.4)'
    lightSwitch = -1;
  }
}

function updateSmoke(smoke) {
  const diameter = (smoke.l * smokeSize) / smokeLayers;
  if (smoke.y > height + diameter) smoke.y = -diameter;
  else smoke.y += grav * smoke.l * smoke.mass;
}


function probability(n){
    return Math.random() < n;
}

function implicit_circle(x, y, cx, cy, rad){
   return sq(x-cx)+sq(y-cy)-rad*rad
}

// scene 2
function mouseMoved()
{
   dir.x = mouseX - loc.x;
   dir.y = mouseY - loc.y;
   dir.normalize();
   dir.mult(3);
}

function drawBike(x, y, dx, dy, sc) {
   push();
   translate(x, y);
   rotate(atan2(dy, dx));
   scale(sc);
     
      push();
      fill('#735670');
      rotate(radians(-10));
      rect(-19, -20, 6, 14);
     
      fill('#FFDAB5');
      rect(-18,-10, 5, 15);
      fill(0);
      ellipse(-13, 13.5, 9, 4);
      pop();

      fill(0);
      ellipse(-30, 10, 25);
      ellipse(15, 10, 25);

      fill('#fffffd');
      ellipse(-30, 10, 20);
      ellipse(15, 10, 20);

      fill('#5EADD6');
      ellipse(-12, 10, 10);
      fill('#ffffff');
      ellipse(-12, 10, 7);

      stroke('#5EADD6')
      strokeWeight(1.75);
      line(-17, 10, -30, 10);
      line(-30, 10, -20, -10);
      line(-7, 10, 5, -10);
      line(-7, 10, -20, -10);
      line(-20, -10, 5, -10);
      line(16, 10, 5, -10);
      stroke('#735670');
      line(6, -13, 4, -17);
      line(4, -17,10, -17);
      line(10, -17, 9, -11);
      line(4, -18, 0, -18);
      line(0, -18, 2, -15);
      stroke('#fffffd');
      line(-20, -10, -24, -14);
      stroke('#735670');
      line(-12, 10, -8, 4);
      line(-8, 4, -6, 4);
     
      noStroke();
      fill(0);
      ellipse(-25, -14, 5);
      triangle(-25, -16, -15, -16, -23, -12);

      fill('#735670');
      ellipse(-19, -18, 8);

      push();
      rotate(radians(30));
      rect(-25, -10, 12, 7);
      fill('#FFDAB5');
      rect(-15, -10, 5, 7);
      ellipse(-10, -7, 6);
      pop();

      push();
      fill('#FFDAB5');
      rotate(radians(25));
      rect(-11, -8, 5, 8);
      fill('#fffffd');
      rect(-10.5, -3, 4, 8);
      pop();

      push();
      fill(0);
      rotate(radians(30));
      ellipse(-6, 4, 9, 4);
      pop();

      fill('#FFDAB5');
      triangle(-23,-24, -13, -20, -23, -20);
      ellipse(2, -40, 8, 10);
      triangle(4, -38, 7, -36, 3, -35);

      push();
      fill('#FFDAB5');
      rotate(radians(40));
      ellipse(-21, -29, 5, 3);
      pop();

      push();
      fill('#ff2300');
      rotate(radians(25));
      arc(-15.25, -38, 8, 10, radians(180), radians(0));
      ellipse(-11, -39, 6, 1.5);
      pop();

      push();
      fill('#FFDAB5');
      rotate(radians(-15));
      rect(5, -40, 6, 5);
      pop();

      push();
      rotate(radians(25));
      fill('#6f894e');
      rect(-31, -23, 10, 11);
      pop();

      push();
      fill('#6f894e');
      rotate(radians(60));
      ellipse(-34, -7, 11, 20);
      pop();

      push();
      fill('#FFDAB5');
      rotate(radians(-30));
      rect(13, -30, 4.5, 10);
      pop();

      push();
      fill('#6f894e');
      rotate(radians(-30));
      rect(13, -34, 4.5, 6);
      pop();

      push();
      fill('#FFDAB5');
      rotate(radians(-45));
      rect(17.5, -16, 4.5, 7);
      pop();

      push();
      fill('#FFDAB5');
      ellipse(8, -19.5, 7, 4);
      pop();
     
   pop();

}

function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}
 
function drawRocks(x, y, sc, c)
{
   push();
      translate(x, y);
      scale(sc);
      fill(c);
      ellipse(0, 0, 10);
   pop();
}


// scene 4

// used for asteroids around other planets
function parametric(centerX, centerY) {
   let cx, cy;
   let penguinColor = color(random(255), random(255), random(255));
   let penguinHat = color(random(255), random(255), random(255));
   drawPlanets(centerX, centerY);
   let t = radians(45)
   for (let i = 0; i < 360; i++) {
      cx = centerX + 40 * cos(t);
      cy = centerY + 40 * sin(t);

      image(asteroidImg, cx - 3, cy - 2, 5, 5);

      t += radians(200); 
   }   
}

function gameAsteroids(x, y){
   image(asteroidImg, x, y, 20, 20);
}

function drawPlanets(x, y){
   let radius = dim/2;
   let h = 200;
   for (let r = radius; r > 0; --r) {
       fill(h, 90, 90);
       ellipse(x, y, r, r);
       h = (h + 1) % 360;
  }
}

// key functions
function keyPressed() {
   // scene 2
   dir = createVector(random(-1,1), random(-1,1));

   if (keyCode === SHIFT && pageState === 'startPage') {
      pageState = 'scene1';
   }

   if (keyCode === ESCAPE) {
      pageState = 'scene2';
   }

   // keys for movement on first screen
   if (keyCode === UP_ARROW && pageState === 'introPage') {
      // animation starts
      earthRot = true;
      fly = true;
      confettiDisplay = true; 
   } 
   // key for moving to gameplay screen
   else if (keyCode === DOWN_ARROW && pageState === 'introPage') {
      pageState = 'gamePlay';
   } 

   // keys for game play to move parachute
   if (keyCode === LEFT_ARROW && pageState === 'gamePlay') {
      parachute.setDir(-1);
   } else if (keyCode === RIGHT_ARROW && pageState === 'gamePlay') {
      parachute.setDir(1);
   }

   //keys to move to next scene
   if (keyCode === ENTER && pageState === 'gameEnd') {
      pageState = 'scene5';
   }
}

function keyReleased() {
  if (keyCode != LEFT_ARROW || keyCode != RIGHT_ARROW) {
    parachute.setDir(0);    
  }
}