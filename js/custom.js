function validateSubscribe() {
    var x = document.forms["subscribeForm"]["subscription"].value;
    var y = document.forms["subscribeForm"]["email"].value;
    if (x == "" || y == "") {
         alert("Please complete all the fields !");
        return false;
    }
    else
    {
        alert("We thank you for your subscribe ! Please confirm your email !");
        return true;
    }
}

function movie1(){
    var action=["The Outlaws(2017)","Tears of the Sun (2003)"," Tomb Raider (2018)"," Man of Steel (2013)"," Jumanji: Welcome to the Jungle (2017)"," Infernal Affairs (2002)"," Jurassic World: Fallen Kingdom (2018)"];
    document.getElementById("action1").innerHTML=action[Math.floor(Math.random() * action.length)];
 }
 function movie2(){
    var anim=[" Finding Nemo (2003)"," Coco (I) (2017)"," The Tale of Despereaux (2008)"," Brother Bear (2003)"," Happy Feet (2006)"," Flushed Away (2006)"," My Neighbour Totoro (1988)"," Over the Hedge (2006)","Kung Fu Panda (2008)"," How to Train Your Dragon (2010)"];
    document.getElementById("animated1").innerHTML=anim[Math.floor(Math.random() * anim.length)];
 }
 function movie3(){
    var bio=[" Gandhi (1982)","Schindler's List (1993)"," Braveheart (1995)"," Catch Me If You Can (2002)"," Walk the Line (2005)"," The Imitation Game (2014)"," The Theory of Everything (2014)"," Miracle (2004)",       " Cinderella Man (2005)"," Ali (2001)"," Lincoln (2012)"," Lawrence of Arabia (1962)"];
    document.getElementById("bio1").innerHTML=bio[Math.floor(Math.random() * bio.length)];
 }
 function movie4(){
    var com=[" Mr. Bean's Holiday (2007)","Role Models (2008)"," The Other Guys (2010)","The Hot Chick (2002)"," This is the End (2013)"," American Reunion (2012)"," Step Brothers (2008)"," We're the Millers (2013)"," Due Date (2010)"," Horrible Bosses (2011)","White Chicks (2004)"," The Hangover (2009)"];
    document.getElementById("comedy1").innerHTML=com[Math.floor(Math.random() * com.length)];
 }
 function movie5(){
    var crim=[" The Godfather (1972)"," The Departed (2006)","Leon (1994)"," The Hateful Eight (2015)","Once Upon a Time in America (1984)"," Scarface (1983)"," Carlito's Way (1993)","No Country for Old Men (2007)","Catch Me If You Can (2002)"," Heat (1995)"," The Dark Knight (2008)"," Pulp Fiction (1994)"," Serpico (1973)"," Casino (1995)"];
    document.getElementById("crim1").innerHTML=crim[Math.floor(Math.random() * crim.length)];
 }
 function movie6(){
    var horr=[" The Wailing (2016)","Train to Busan (2016)","A Quiet Place (2018)","The Witch (2015)"," It Follows (2014)","Baskin (2015)"," The Void (I) (2016)","The Autopsy of Jane Doe (2016)"," The Neon Demon (2016)","The Babadook (2014)","Don't Breathe (2016)"," Goodnight Mommy (2014)"];
    document.getElementById("horr1").innerHTML=horr[Math.floor(Math.random() * horr.length)];
 }
 function movie7(){
    var rom=[" Titanic (1997)"," The Big Blue (1988)"," A Very Long Engagement (2004)"," A Walk to Remember (2002)"," The Notebook (2004)","","500 Days of Summer (2009)"," Remember Me (2010)","Leap Year (2010)"," Before Sunset (2004)","Once (2007)"," My Sassy Girl (2008)"];
    document.getElementById("rom1").innerHTML=rom[Math.floor(Math.random() * rom.length)];
    }
 function movie8(){
    var sci=[" Jurassic World: Fallen Kingdom (2018)","Inception (2010)","Mad Max: Fury Road (2015)"," Interstellar (2014)"," Donnie Darko (2001)"," The Martian (2015)"," Moon (2009)","Avatar (2009)"," Gravity (2013)"," Star Trek (2009)"];
    document.getElementById("sci1").innerHTML=sci[Math.floor(Math.random() * sci.length)];
    }

function validateInfo() {
     var x = document.forms["contactForm"]["name"].value;
     var y = document.forms["contactForm"]["email"].value;
     var z = document.forms["contactForm"]["msg"].value;
     if (x == "" || y == "" || z=="") {
          alert("Please complete all the fields !");
         return false;
       }
      else
       {
        alert("We will get in contact as soon as possible ! ");
        return true;
    }
}

 /* start matrix function */
 
 var canvas = document.getElementById("c");
 var ctx = canvas.getContext("2d");

 c.height =490;
 c.width = 300;

 var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";

 matrix = matrix.split("");

 var font_size = 10;
 var columns = c.width/font_size; 
  
 var drops = [];
 
 for(var x = 0; x < columns; x++)
    drops[x] = 1; 
 
 function draw()
 {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; 
    ctx.font = font_size + "px arial";
   
    for(var i = 0; i < drops.length; i++)
    {
        
        var text = matrix[Math.floor(Math.random()*matrix.length)];
      
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
 }

 setInterval(draw, 35);
 
 /* end matrix function */

 
 /* start game*/
 
function startGame() {
      

   var GAME_WIDTH = 640;
   var GAME_HEIGHT = 360;

   var gameLive = true;


   var level = 1;
   var life = 5;

   var color = "rgb(0, 0, 0)";

   var enemies = [
     {
       x: 100, 
       y: 100, 
       speedY: 2, 
       w: 40, 
       h: 40 
     },
     {
       x: 200,
       y: 0,
       speedY: 2,
       w: 40,
       h: 40
     },
     {
       x: 330,
       y: 100,
       speedY: 3,
       w: 40,
       h: 40
     },
     {
       x: 450,
       y: 100,
       speedY: -3,
       w: 40,
       h: 40
     }
   ];

   var player = {
     x: 10,
     y: 160,
     speedX: 2,
     isMoving: false,  
     w: 40,
     h: 40
   };


   var goal = {
     x: 580,
     y: 160,
     w: 50,
     h: 36
   }

   var movePlayer = function() {
     player.isMoving = true;
   }

   var stopPlayer = function() {
     player.isMoving = false;
   }
   
   var canvas = document.getElementById("mycanvas");
   var ctx = canvas.getContext("2d");

   canvas.addEventListener('mousedown', movePlayer);
   canvas.addEventListener('mouseup', stopPlayer);   
     
   var update = function() {

     if(checkCollision(player, goal)) {
       
       alert('Congratulations! You have reached the next level !');
       level += 1;
       life += 1;
       player.speedX += 1;
       player.x = 10;
       player.y = 160;
       player.isMoving = false;
       
       for(var ab = 0; ab < enemies.length; ab++){
           if(enemies[ab].speedY > 1){
             enemies[ab].speedY += 1 ;
           }
           else{
               enemies[ab].speedY -= 1 ;
           }
       }
     }

     if(player.isMoving) {
       player.x = player.x + player.speedX;
     }

     var i = 0;
     var n = enemies.length;
     
     enemies.forEach(function(element, index){

       if(checkCollision(player, element)) {

         if(life === 0){
             
             alert('Game Over');
             
             for(var ab = 0; ab < enemies.length; ab++){
                 
                 if(enemies[ab].speedY > 1){
                 enemies[ab].speedY -= (level - 1) ;
                 }
                 
                 else{
                     enemies[ab].speedY += (level - 1) ;
                 }
             }
             level = 1;
             life = 6;
             player.speedX = 2;
             color ="rgb(0, 0, 0)";
         }
         
         if(life > 0){
             
             life -= 1 ;
             color ="rgb(0, 0, 0)";
         }
         
         player.x = 10; 
         player.y = 160;
         player.isMoving = false;
       }
      
       element.y += element.speedY;
       
       if(element.y <= 10) {
         element.y = 10;
         element.speedY *= -1;
       }
       else if(element.y >= GAME_HEIGHT - 50) {
         element.y = GAME_HEIGHT - 50;
         element.speedY *= -1;
       }
     });
   };

   var draw = function() {
     
     ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);        

     ctx.font = "15px Verdana";
     ctx.fillStyle = "rgb(0,0,0)";
     ctx.fillText("Level : " + level , 10, 15);
     ctx.fillText("Life : " + life , 10, 35);
     ctx.fillText("Speed : " + player.speedX , 10, 55);
     
     ctx.fillStyle = color;
     ctx.fillRect(player.x, player.y, player.w, player.h);

     ctx.fillStyle = "rgb(255, 213, 135)";
     enemies.forEach(function(element, index){
       ctx.fillRect(element.x, element.y, element.w, element.h);
     });

     ctx.fillStyle = "rgb(255, 203, 0)";
     ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
     ctx.fillStyle = "rgb(0,0,0)";
     ctx.fillText("Goal", goal.x + 7, goal.y + 25);
   };

   var step = function() {

     update();
     draw();

     if(gameLive) {
       window.requestAnimationFrame(step); 
     }     
   };

   var checkCollision = function(rect1, rect2) {

     var closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
     var closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);
     return closeOnWidth && closeOnHeight;
   }

   step();
 };

 /* end game*/ 

 

