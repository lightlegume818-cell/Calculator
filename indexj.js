const display = document.getElementById("display")
const buttons = document.querySelectorAll(".btn input")
const AC = document.getElementById("AC")
const De = document.getElementById("De")


function calculate(display){
  try{
    display.value = math.evaluate(display.value)
  }
  catch{
    display.value = "Error"
  }
}

document.addEventListener("keydown", function(event){
  if("0123456789./+-*".includes(event.key)){
    display.value += event.key      
  }

  if(event.key === "Backspace"){
    display.value = display.value.slice(0, -1)
  }

  if(event.key === "Enter"){
    calculate(display)
  }

  
})

let justCalculated = false; 


buttons.forEach(button => {
  button.addEventListener("click", function(){

    

    if(button.value === "AC"){
      display.value = ""
    }

    else if(button.value === "De"){
      display.value = display.value.slice(0, -1)
    }
    else if(button.value === "="){
      calculate(display)
       justCalculated = true;
    } else {
      if (justCalculated && "0123456789".includes(button.value)) {
      
        display.value = button.value;
      } else {
        display.value += button.value;
      }
      justCalculated = false; 
    }
    
    
  })
})





