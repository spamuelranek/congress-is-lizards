// console.log('weeee')
// function buttonclick() {
//     var correct = "CORRECT"
//     document.getElementById('result').innerHTML = correct;
// }
// document.getElementById('senateButton').addEventListener('click',buttonclick); 

function senateClick(){
    document.getElementById("correct").innerHTML = "CORRECT";
}

function houseClick(){
    document.getElementById("correct").innerHTML = "wrong";
}

function name_generate(){
    var fname = document.getElementById("first_name").value;

    var lname = document.getElementById("last_name").value;

    var lizard = lname + " Lizard " + fname

    document.getElementById("result").innerHTML = lizard;
}

function lcool(){
    var answer = document.getElementById("coolness").value;
        if(answer.toLowerCase() == "yes"){
            document.getElementById("lizardAnswer").innerHTML = "SUPER COOL";
        }
        if(answer.toLowerCase() == "no"){
            document.getElementById("lizardAnswer").innerHTML = "BOO"
        }
}