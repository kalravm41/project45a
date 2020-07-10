class Form2{

constructor(){

this.input3 = createInput("");
this.question1 = createElement("h1");
this.button3 = createButton("NEXT");
this.question2 = createElement("h1");
this.button4 = createButton("Submit");
this.input4 = createInput("Latitude");
this.input5 = createInput("Longitude");
this.greetings = createElement("h1");
}

display(){

this.question1.html(" Q1.What is Your Name ?");
this.question2.html(" Q2. what is your location ?(in Latitudes and Longitudes)");
this.question1.position(displayWidth/2-650,20);
this.input3.position(displayWidth/2-650,displayHeight/2-300);
this.button3.position(displayWidth/2-650,320);
this.question2.position(displayWidth/2-650,20);
this.question2.hide();
this.button4.position(displayWidth/2-650,320);
this.button4.hide();
this.input4.position(displayWidth/2-650,displayHeight/2-300);
this.input4.hide();
this.input5.position(displayWidth/2-650,displayHeight/2-250);
this.input5.hide();
this.greetings.html(" Thanks For Registering !!");
this.greetings.position(displayWidth/2-300,displayHeight/2-300);
this.greetings.hide();

this.button3.mousePressed(()=>{
this.question1.hide();
this.button3.hide();
this.input3.hide();
this.question2.show();
this.button4.show();
this.input4.show();
this.input5.show();
})

this.button4.mousePressed(()=>{
this.question2.hide();
this.button4.hide();
this.input4.hide();
this.input5.hide();
this.getLocation(); 
this.greetings.show();
})


}

getLocation(){

userl.push(this.input4.value());
userlo.push(this.input5.value());
}

};