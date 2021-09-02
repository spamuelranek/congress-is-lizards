function name_generate(){
    var fname = document.getElementById("first_name").value;

    var lname = document.getElementById("last_name").value;

    var lizard = lname + " Lizard " + fname

    document.getElementById("result").innerHTML = lizard;
}