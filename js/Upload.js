class Upload{
  
    //creates the inputs for uploading the thief's details
    constructor(){
        this.name = createInput('Enter the name');
        this.age = createInput('Enter the age');
        this.gender = createInput('Enter the gender'); 
        this.addressOfLastCrime = createInput('Enter address of last crime');
        this.button3 = createButton('Save the details');
    }

    //creates the function for uploading the thief's details and setting the position of the inputs
    uploadIt(){
       this.name.position(windowWidth/4-420,windowHeight/2-350);
       this.age.position(windowWidth/4-420,windowHeight/2-300);
       this.gender.position(windowWidth/4-420,windowHeight/2-250);
       this.addressOfLastCrime.position(windowWidth/4-420,windowHeight/2-200);   
       this.button3.position(windowWidth/4-260,230);   

       //creates the function on pressing the button
       this.button3.mousePressed(()=>{
            thief.name =  this.name.value();
            thief.age = this.age.value();
            thief.gender = this.gender.value();
            thief.addressOfLastCrime = this.addressOfLastCrime.value();
            thief.getCount().then(()=>{
                var counting = thiefCount+1;
                thief.index = counting;
                thief.update();
                thief.updateCount(counting);
            })
       });
       
    }
}
