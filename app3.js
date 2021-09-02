function name_generate(){
    var fname = document.getElementById("first_name");

    var lname = document.getElementById("last_name");

    var lizard = lname + "Lizard" + fname

    document.getElementById("result").innerHTML = lizard;
}