const display=document.getElementById("display");

function toAdd(input){
    display.value += input;
}
function toClear(){
    display.value = "";
}
function toRemove(){
    let n=(display.value).lenth;
    display.value = (display.value).slice(0,((display.value.length)-1));
}
function toCalculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

