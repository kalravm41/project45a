class Form1{

constructor(){
    this.question1 = createElement("h1");
    this.input1 = createInput("");
    this.input2 = createInput("Main Address");
    this.input3 = createInput("City - Pincode");
    this.input4 = createInput("District");
    this.input5 = createInput("State");
    this.button12 = createButton("NEXT");
    this.button11 = createButton("NEXT");
    this.button10 = createButton("Other");
    this.button9 = createButton("Genral Hospital");
    this.button8 = createButton("Special care");
    this.button7 = createButton("Multi speciality");
    this.button6 = createButton("private");
    this.button5 = createButton("Government");
    this.button4 = createButton("NEXT");
    this.button3 = createButton("NEXT");
    this.button2 = createButton("NEXT");
    this.button1 = createButton("NEXT");
    this.question2 = createElement("h1");
    this.question3 = createElement("h1");
    this.input6 = createInput("Registration number");
    this.question4 = createElement("h1");
    this.question5 = createElement("h1");
    this.question6 = createElement("h1");
  k = this.input7 = createInput("");

}

display(){
    this.question1.html("Q1. what is the Name of Hospital ?");
    this.question1.position(displayWidth/2-650,20);
    this.input1.position(displayWidth/2-650,displayHeight/2-300);
    this.button1.position(displayWidth/2-650,displayHeight/2-110);
    this.question2.html("Q2. What is the address of the Hospital ?");
    this.question2.position(displayWidth/2-650,20);
    this.question2.hide();
    this.button2.position(displayWidth/2-650,displayHeight/2-110);
    this.button2.hide();
    this.input2.position(displayWidth/2-650,displayHeight/2-300);
    this.input3.position(displayWidth/2-650,displayHeight/2-250);
    this.input4.position(displayWidth/2-650,displayHeight/2-200);
    this.input5.position(displayWidth/2-650,displayHeight/2-150);
   this.input2.hide();
   this.input3.hide();
   this.input4.hide();
   this.input5.hide();
   this.question3.html("Q3. What is the registration number of the Hospital ?");
   this.question3.position(displayWidth/2-650,20);
   this.question3.hide();
   this.input6.position(displayWidth/2-650,displayHeight/2-300);
   this.input6.hide();
   this.question4.html("Q4. Which type of Hospital is this ?");
   this.question4.position(displayWidth/2-650,20);
   this.question4.hide();
   this.button3.position(displayWidth/2-650,displayHeight/2-110);
   this.button3.hide();
   this.button4.position(displayWidth/2-650,displayHeight/2-110);
   this.button4.hide();
   this.button5.position(displayWidth/2-650,displayHeight/2-300);
   this.button6.position(displayWidth/2-650,displayHeight/2-250);
  this.button5.hide();
  this.button6.hide();
  this.button7.position(displayWidth/2-650,displayHeight/2-300);
  this.button8.position(displayWidth/2-650,displayHeight/2-250);
  this.button9.position(displayWidth/2-650,displayHeight/2-200);
  this.button10.position(displayWidth/2-650,displayHeight/2-150);
 this.button7.hide();
 this.button8.hide();
 this.button9.hide();
 this.button10.hide();
 this.question5.html("Q5. Which category of Hospital is this ?");
 this.question5.position(displayWidth/2-650,20);
 this.question5.hide();
 this.button11.position(displayWidth/2-650,displayHeight/2-110);
 this.button11.hide();
 this.question6.html("Q6. How many Doctors are Working there (in number) ?");
 this.question6.position(displayWidth/2-650,20);
 this.question6.hide();
 k.position(displayWidth/2-650,displayHeight/2-300);
 k.hide();
 this.button11.position(displayWidth/2-650,displayHeight/2-110);
 this.button11.hide();

    this.button1.mousePressed(()=>{
        this.question1.hide();
        this.input1.hide();
        this.button1.hide();
        this.question2.show();
        this.button2.show();
        this.input2.show();
        this.input3.show();
        this.input4.show();
        this.input5.show();
    })

    this.button2.mousePressed(()=>{
       this.button2.hide();
        this.question2.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.question3.show();
        this.input6.show();
        this.button3.show();
    })

    this.button3.mousePressed(()=>{
        this.button3.hide();
         this.question3.hide();
         this.input6.hide();
         this.question4.show();
         this.button5.show();
         this.button6.show(); 
         this.button4.show();
         this.button5.mousePressed(()=>{
          this.button5.style("background-color","yellow");
          this.button6.style("background-color","white");
         })
         this.button6.mousePressed(()=>{
            this.button6.style("background-color","yellow");
            this.button5.style("background-color","white");
           })
     })
     this.button4.mousePressed(()=>{
       this.button4.hide();    
       this.question4.hide();
       this.button5.hide();
       this.button6.hide();  
       this.button7.show(); 
       this.button8.show(); 
       this.button9.show(); 
       this.button10.show(); 
       this.button11.show();
       this.question5.show();

       })
       this.button7.mousePressed(()=>{
        this.button7.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button9.style("background-color","white");
        this.button10.style("background-color","white");
        this.button11.mousePressed(()=>{
        this.question5.hide();      
        this.button7.hide(); 
        this.button8.hide();
        this.button9.hide(); 
        this.button10.hide();
        this.button11.hide();  
        this.question6.show();
        k.show();
        this.button11.show();
        console.log(k.value());
        

        })
       })

       this.button8.mousePressed(()=>{
        this.button8.style("background-color","yellow");
        this.button7.style("background-color","white");
        this.button9.style("background-color","white");
        this.button10.style("background-color","white");
       })

       this.button9.mousePressed(()=>{
        this.button9.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button7.style("background-color","white");
        this.button10.style("background-color","white");
       })

       this.button10.mousePressed(()=>{
        this.button10.style("background-color","yellow");
        this.button8.style("background-color","white");
        this.button9.style("background-color","white");
        this.button7.style("background-color","white");
       })
       




}


};