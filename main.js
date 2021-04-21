function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
   image(video, 100, 120, 150, 150);
   fill("red");
   stroke("black");
   circle(60, 60 , 50)
   fill("green");
   stroke("black");
   rect(85, 60, 200, 10)
   
   fill("red");
   stroke("black");
   circle(300, 60 , 50)
   fill("green");
   stroke("black");
   rect(55, 85, 10, 240)

   fill("green");
   stroke("black");
   rect(300, 85, 10, 240)

   fill("red");
   stroke("black");
   circle(60, 300 , 50)
   fill("green");
   stroke("black");
   rect(85, 300, 200, 10)
   
   fill("red");
   stroke("black");
   circle(300, 300 , 50)
}