function appendToDisplay(value) {
    var number = document.getElementById('display').value;

    if(number == "0" && value == 0){

    }else if(value == '+' || value == '-' || value == '*' || value == '/'){
        const array = number;
        var last = array.slice(-1)[0];
        // alert(last);
        if(last == '+' || last == '-' || last == '*' || last == '/'){
            // alert("No");
        }else{
            document.getElementById("display").value += value;
        }
    }else{
        document.getElementById("display").value += value;
    }
}

function backDisplay(){
    var number = document.getElementById('display').value;
    const array = number;
    if(array.length > 0){
        document.getElementById("display").value = array.slice(0,-1);
    }  
}

function clearDisplay(){
    document.getElementById('display').value = null;

}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        if(result == null){

        }else if(isFinite(result)){
            document.getElementById('display').value = result;
        }else{
            document.getElementById('display').value = "Error";
        }
        
    }  catch (error) {
        document.getElementById('display').value = 'Error';
    }
    
}