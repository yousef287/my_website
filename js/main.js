console.log("console log test");

for (var i = 0; i < 5; i++) {
    console.log(i + "test for  for loops");
}

function gbtn() {
    console.log("you just clicked a button!");
    var nameInput = document.getElementsByClassName("my-input");
    document.getElementById("hello-name").innerHTML =
        "Hello " + nameInput[0].value + "!";
    var results = document.getElementById("greetings");
    console.log(nameInput);
    results.innerHTML = "Nice to meet you, " + nameInput[0].value;
}

var btn = document.getElementById("gbutton");
btn.addEventListener("click", gbtn);

var testAray = ["baseball", "basketball", "football"];

function inlist(lItem) {
    if (testAray.indexOf(lItem) > -1) {
        console.log(lItem + " is in the list");
    } else {
        console.log(lItem + " is not in the list :(");
    }
}

var practice = [0, 5, 6, 1, 3, 2, 7, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20];

function missing(array) {
    var numm = [];
    array.sort(function (a, b) {
        return a - b;
    });
    for (var i = array[0]; i <= array[array.length - 1]; i++) {
        if (array.indexOf(i) === -1) {
            numm.push(i);
        }
    }
    return numm;
}
