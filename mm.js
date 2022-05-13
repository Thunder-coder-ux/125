leftWristx = 0;
rightWristx = 0;
difference = 0;
go = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150);

    canvas = createCanvas(799,492);
    canvas.position(1000,210);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PosetNet initiliazed!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function start(){
    go = "go";
    console.log("Started");
}

function gotPoses(results){
    if((results.length > 0) && (go == "go")){
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;

        difference = floor(leftWristx - rightWristx);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}

function draw(){
    document.getElementById("moron").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#5137d4");
    text('Kamin', 40, 400);
}