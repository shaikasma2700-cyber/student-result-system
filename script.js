function calculate() {
    var name = document.getElementById("name").value;
    var m1 = parseInt(document.getElementById("m1").value);
    var m2 = parseInt(document.getElementById("m2").value);
    var m3 = parseInt(document.getElementById("m3").value);

    var total = m1 + m2 + m3;
    var avg = total / 3;

    var grade = "";

    if (avg >= 90) grade = "A";
    else if (avg >= 75) grade = "B";
    else if (avg >= 60) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML =
        "Name: " + name + "<br>Total: " + total +
        "<br>Average: " + avg + "<br>Grade: " + grade;
}