var sun = {
  x: 595,
  y: 175,
  tr: 0
};

var skycol = {
  r: 75,
  g: 0,
  b: 130
};

var moon = {
  t: 255
};

var clt = {
  l:165,
  r:50
}

var inc = 1;

var c1 = [490, //0            <<== The points of both clouds were put into arrays, in case they
  495, 503, 520, //1,2,3           needed to be manipulated in any way for the sketch.
  527, 535, 550, //4,5,6
  550, 553, 557, //7,8,9
  561, 564, 564, //10,11,12
  573, 579, 582, //13,14,15
  579, 573, 564, //16,17,18
  562, 550, 545, //19,20,21
  536, 530, 526, //22,23,24
  520, 514, 508, //25,26,27
  500, 493, 488, //28,29,30
  480, 475, 474, //31,32,33
  474, 480, 485, //34,35,36
  481, 478, 478, //37,38,39
  481, 487, 490 //40,41,42
];

var c2 = [200, //0
  206, 210, 218, //1,2,3
  228, 238, 250, //4,5,6
  250, 258, 263, //7,8,9
  268, 265, 263, //10,11,12
  283, 290, 285, //13,14,15
  280, 270, 260, //16,17,18
  260, 258, 248, //19,20,21
  244, 241, 238, //22,23,24
  222, 192, 212, //25,26,27
  170, 175, 205 //28,29,30
];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  stroke(1);
  background(255, 182, 193);
  fill(255);
  rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(1);
  rect(15, 300, 30, 600);// y axis
  
  //text
  fill(0);
  text("Move the mouse within the white bar on the left to change sky colour. Click & hold within the bar to see stars at night.", 90, 550);

  //nail
  strokeWeight(3);
  fill(150);
  ellipse(400, 20, 20, 20);
  strokeWeight(1);
  line(390, 20, 340, 80);
  line(410, 20, 460, 80);

  //frame
  strokeWeight(3);
  fill(130, 82, 1);
  rect(400, 305, 600, 450); //outer
  fill(skycol.r, skycol.g, skycol.b); //sky
  rect(400, 305, 510, 360); //inner
  line(100, 80, 145, 125); //top left
  line(700, 80, 655, 125); //top right
  line(100, 530, 145, 485);
  line(700, 530, 655, 485);

  //sea
  fill(0, 123, 174);
  rect(400, 445, 510, 80);

  //ship
  fill(255, 99, 71);
  quad(305, 405, 285, 365, 515, 365, 495, 405); //bottom
  quad(283, 365, 273, 355, 527, 355, 517, 365); //top
  rect(395, 274, 8, 160); //pole
  fill(255);
  triangle(390, 205, 375, 345, 295, 295); //left sail
  triangle(400, 210, 420, 350, 475, 300); //right sail

  //cloud 1
  noStroke();
  fill(255, clt.r);
  beginShape();
  vertex(c1[0], 190);
  bezierVertex(c1[1], 167, c1[2], 157, c1[3], 160);
  //(520, 154)2
  bezierVertex(c1[4], 160, c1[5], 160, c1[6], 190);
  //(550, 190)3
  bezierVertex(c1[7], 189, c1[8], 187, c1[9], 187);
  //(557, 187)4
  bezierVertex(c1[10], 190, c1[11], 193, c1[12], 200);
  //(564, 200)5
  bezierVertex(c1[13], 200, c1[14], 203, c1[15], 215);
  //(582, 215)6
  bezierVertex(c1[16], 220, c1[17], 223, c1[18], 225);
  //(564, 225)7
  bezierVertex(c1[19], 237, c1[20], 240, c1[21], 240);
  //(545, 240)8
  bezierVertex(c1[22], 238, c1[23], 230, c1[24], 222);
  //(526, 222)9
  bezierVertex(c1[25], 224, c1[26], 225, c1[27], 226);
  //(508, 226)10
  bezierVertex(c1[28], 226, c1[29], 225, c1[30], 220);
  //(488, 224)11
  bezierVertex(c1[31], 226, c1[32], 222, c1[33], 215);
  //(474, 215)12
  bezierVertex(c1[34], 210, c1[35], 206, c1[36], 206);
  //(485, 206)13
  bezierVertex(c1[37], 200, c1[38], 198, c1[39], 193);
  //(478, 193)
  bezierVertex(c1[40], 187, c1[41], 189, c1[42], 190);
  endShape();


  //cloud 2
  fill(255, clt.r);
  beginShape();
  vertex(c2[0], 195); //1
  bezierVertex(c2[1], 185, c2[2], 178, c2[3], 177);
  //(218, 177)2
  bezierVertex(c2[4], 178, c2[5], 183, c2[6], 197);
  //(236, 197)3
  bezierVertex(c2[7], 190, c2[8], 186, c2[9], 188);
  //(263, 188)4
  bezierVertex(c2[10], 195, c2[11], 200, c2[12], 208);
  //(263, 188)5
  bezierVertex(c2[13], 199, c2[14], 205, c2[15], 228);
  //(285, 228)6
  bezierVertex(c2[16], 243, c2[17], 253, c2[18], 244);
  //(260, 244)7
  bezierVertex(c2[19], 255, c2[20], 260, c2[21], 260);
  //(248, 260)8
  bezierVertex(c2[22], 260, c2[23], 245, c2[24], 249);
  //(238, 249)9
  bezierVertex(c2[25], 252, c2[26], 235, c2[27], 229);
  //(200, 229)10
  bezierVertex(c2[28], 220, c2[29], 200, c2[30], 195);
  endShape();
  
  //cloud animations
  if (clt.r > 254 || clt.r <= 0) {
   inc = inc *-1 
  }
  clt.r = clt.r + inc;
  
  if (clt.l > 254 || clt.l <= 0) {
   inc = inc *-1 
  }
  clt.l = clt.l + inc;
  

  //sky
  //Purple
  if (mouseX > 0 && mouseX <= 30 && mouseY > 0 && mouseY <= 74) {
    skycol.r = map(mouseY, 0, 74, 75, 25);
    skycol.g = map(mouseY, 0, 74, 0, 25);
    skycol.b = map(mouseY, 0, 74, 130, 112);
  }
  //Navy
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 75 && mouseY <= 149) {
    skycol.r = map(mouseY, 75, 149, 25, 255);
    skycol.g = map(mouseY, 75, 149, 25, 97);
    skycol.b = map(mouseY, 75, 149, 112, 3);
  }
  //Orange
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 150 && mouseY <= 224) {
    skycol.r = map(mouseY, 150, 224, 255, 148);
    skycol.g = map(mouseY, 150, 224, 97, 224);
    skycol.b = map(mouseY, 150, 224, 3, 255);
  }
  //Blue
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 225 && mouseY <= 299) {
    skycol.r = map(mouseY, 225, 299, 148, 148);
    skycol.g = map(mouseY, 225, 299, 224, 224);
    skycol.b = map(mouseY, 225, 299, 255, 255);
  }
  //Blue
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 300 && mouseY <= 374) {
    skycol.r = map(mouseY, 300, 374, 148, 148);
    skycol.g = map(mouseY, 300, 374, 224, 224);
    skycol.b = map(mouseY, 300, 374, 255, 255);
  }
  //Blue to orange
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 375 && mouseY <= 449) {
    skycol.r = map(mouseY, 375, 449, 148, 255);
    skycol.g = map(mouseY, 375, 449, 224, 97);
    skycol.b = map(mouseY, 375, 449, 255, 3);
  }
  //Orange to navy
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 450 && mouseY <= 524) {
    skycol.r = map(mouseY, 450, 524, 255, 25);
    skycol.g = map(mouseY, 450, 524, 97, 25);
    skycol.b = map(mouseY, 450, 524, 3, 112);
  }
  //Navy to purple
  if (mouseX > 0 && mouseX <= 30 && mouseY > 525 && mouseY <= 600) {
    skycol.r = map(mouseY, 525, 600, 25, 75);
    skycol.g = map(mouseY, 525, 600, 25, 0);
    skycol.b = map(mouseY, 525, 600, 112, 130);
  }

  //sun
  noStroke();
  fill(253, 184, 19, sun.tr);
  ellipse(sun.x, sun.y, 40, 40);

  //sunrise  
  if (mouseX > 0 && mouseX <= 30 && mouseY > 150 && mouseY <= 224) {
    sun.y = map(mouseY, 150, 224, 405, 165);
    sun.tr = map(mouseY, 150, 199, 0, 255);
  }
  //sun up
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 225 && mouseY <= 374) {
    sun.y = map(mouseY, 225, 374, 165, 165);
  }
  //sunset
  else if (mouseX > 0 && mouseX <= 30 && mouseY > 375 && mouseY <= 449) {
    sun.y = map(mouseY, 375, 449, 165, 405);
    sun.tr = map(mouseY, 424, 449, 255, 0);
  }

  //moon
  fill(254, 252, 215, moon.t);
  beginShape();
  vertex(160, 140);
  bezierVertex(210, 120, 210, 195, 160, 195);
  bezierVertex(180, 200, 190, 145, 160, 140);
  endShape();

  //moon animations
  if (mouseX > 0 && mouseX <= 30 && mouseY > 0 && mouseY <= 74) {
    moon.t = map(mouseY, 0, 74, 255, 255);
  } else if (mouseX > 0 && mouseX <= 30 && mouseY > 75 && mouseY <= 149) {
    moon.t = map(mouseY, 75, 149, 255, 0);
  } else if (mouseX > 0 && mouseX <= 30 && mouseY > 450 && mouseY <= 524) {
    moon.t = map(mouseY, 450, 524, 0, 255);
  } else if (mouseX > 0 && mouseX <= 30 && mouseY > 525 && mouseY <= 600) {
    moon.t = map(mouseY, 525, 600, 255, 255);
  }
  
  //stars
  if (mouseX > 0 && mouseX <= 30 && mouseY > 0 && mouseY <= 149 && mouseIsPressed) {
    fill(254, 252, 215, moon.t);
    for (var x = 155; x <= 645; x += random(5,50)) {
      for(var y = 135; y <= 300; y += random(20,30)) {
        ellipse(x, y, 5, 5);
      }
    }
  } else if (mouseX > 0 && mouseX <= 30 && mouseY > 450 && mouseY <= 600 && mouseIsPressed) {
      fill(254, 252, 215, moon.t);
      for (var s = 155; s <= 645; s += random(5,50)) {
      for(var d = 135; d <= 300; d += random(20,30)) {
        ellipse(s, d, 5, 5);
      }
      }  
  }
}
