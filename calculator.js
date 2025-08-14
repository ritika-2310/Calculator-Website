const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{ /*2nd argument should always be a function*/
        const value = button.innerText;
        if(value=="="){
            currentInput = eval(currentInput).toString();/*eval calculates the answer*/
            display.value = currentInput; /*display.value is like .innerText for html tags to display value on the input button*/
        }
        else if(value=="C"){
            currentInput = "";
            display.value = "";
        }
        else{
            currentInput += value;
            display.value = currentInput;
        }
    });
});