//creates the variable
var email;

function preload(){
    //loads the image 
    backImg = loadImage("design_files/images/backImg2.PNG");
}
function setup(){
    //creates the canvas
    canvas = createCanvas(windowWidth - 20, windowHeight-30);

    //creates the page for sending mail with class Mail
    email = new Mail();
    email.sendMail();
}
function draw(){
    //sets the background
    background(backImg);
}