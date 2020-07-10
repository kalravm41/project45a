var database;
var button1;
var button2;
var form1;
var form2;
var button8;
var k;
var l;
var i;
var latitude = 23;
var longitude = 72;
var l = 42;
var lo = 93;
var userl = [];
var userlo = []; 

function setup(){
var canvas = createCanvas(displayWidth-20,displayHeight-30);
textSize(50);
text("Login Who are you : ",displayWidth/2-250,100);
button1 = createButton("Hospital Authority");
button1.position(displayWidth/2-250,displayHeight/2-100);
button2 = createButton("User");
button2.position(displayWidth/2+150,displayHeight/2-100);
form1 = new Form1();
form2 = new Form2();
}


function draw(){
a();
console.log(userl);
console.log(userlo);
button1.mousePressed(()=>{
clear();
button1.hide();
button2.hide();
form1.display();
})

button2.mousePressed(()=>{
clear();
button1.hide(); 
button2.hide();    
form2.display();   
})
}
function a(){

    if(latitude+20>l && longitude+20>lo || latitude-20<l && longitude-20<lo){
        console.log("k");
    }

}







