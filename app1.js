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

// function everyoneGW(){
//     let userAnswer = prompt("How many pictures of XXXX would you like?");
//         While(userAnswer !== 5){
//             if(userAnswer ==5){
//                 alert('You like them just the right amount');
//                 let url ="president seal.jpg";
//                 let picsofGW = 5
//                 for(let i=0; i <= picsofGW; i++){
//                     document.write('<img src="' + url + '">');
//                 }
//                 break;
//             }
//             else if(userAnswer < 5){
//                 alert("Come on you like them more than that!")
//             }
//             if(userAnswer > 5){
//                 alert("mmm...you might like them too much")
//             } 
//         }

// }

function tumbleweed(){
    let userAnswer = prompt("How many pictures of Lawrence Brock (Nebraskan Representative from 1959-1961) would you like to see?");
        while(userAnswer !== 5){
            
            if(userAnswer == 5){
                    alert('You like them just the right amount');
                    let url ="LawrenceBrock.jpg";
                    let picsofGW = 4
                    for(let i=0; i<=picsofGW; i++){
                        document.write('<img src="' + url + '">');
                    }
                    break;
            } else if(userAnswer < 5){
                alert("Come on you like them more than that!");
                userAnswer =prompt('How many pictures of Lawrence Brock (Nebraskan Representative from 1959-1961) would you like to see?');

            } else if(userAnswer > 5){
                alert("mmm...you might like them too much")
                userAnswer =prompt('How many pictures of Lawrence Brock (Nebraskan Representative from 1959-1961) would you like to see?');
            }
        }
}