function setup(){
    canvas=createCanvas(600,480);
    canvas.center;
    video=createCapture();
    video.hide();
 
}


function draw(){
    image(video,0,0,500,380);
    fill(182, 23, 235);
    stroke('#fae');
    circle(35,37,70);
    circle(550,190,70);

    fill(232, 3, 252);
    stroke(48, 3, 252);
    rect(520,80,70,70);
    rect(520,240,70,70);

  
}

function take_snapshot(){
    save('my_image.png'); 
}
