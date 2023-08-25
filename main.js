diferencia = 0;
muñeca_derechaX = 0;
muñeca_izquierdaX = 0;

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(800, 150);

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(250, 150);

    posenet = ml5.poseNet(video, modelLoad);
    posenet.on("pose", gotPoses);
}

function modelLoad(){
    console.log("modelo cargado");
}

function gotPoses(results, error){
    if(results.length > 0){
        console.log(results);
        muñeca_derechaX = results[0].pose.rightWrist.x;
        muñeca_izquierdaX = results[0].pose.leftWrist.x;
        diferencia = floor(muñeca_derechaX - muñeca_izquierdaX);
    }

    else{
        console.error(error);
    }
}

function draw(){
    background("red");
    document.getElementById("Texto").innerHTML = "El tamaño de letra será = " + diferencia;
    fill("blue");
    textSize(diferencia);
    text("Hola, soy el creador de esta app y esto es un mansage de prueba, leelo si puedes >:D.", 50, 400);
}