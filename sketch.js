var ball,database,position,ball2;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"

    var location = database.ref("data/position")
    location.on("value",readPosition,error)
    ball2 = createSprite(300,250,10,10);
    ball2.shapeColor = "blue"
}

function draw(){
    background("white");
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
console.log(position.x)
   ball.x = position.x
   ball.y = position.y


}

function writePosition(x,y){
database.ref("ball/position").set({
x:position.x+x,
y: position.y+y
})

}




function error(){
    console.log(eroor)
}
