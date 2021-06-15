console.log("illegal console accses");
var ISPremuimUser = false;

if (ISPremuimUser == true) {
  console.log("OMG TYSM UR MOM IS NOT FAT");
} else if (ISPremuimUser == false) {
  console.log("Subscribe or ur mom gay");
} else {
  console.log("what tf yo");
}

for (var i = 0; i < 5; i++) {
  console.log(i + "ligma");
}

function gbtn() {
  console.log("mlg yolo u just clicked dream mom!!");
  var tBox = document.getElementsByClassName("my-input");
  document.getElementById("omgg").innerHTML =
    tBox[0].value +
    " , i dont know man you been seeming sus lately, its almost like we have an impostor among us &#x1F633;";
  var results = document.getElementById("lit");
  console.log(tBox);
  results.innerHTML = "dont lie to me " + tBox[0].value + "! , you sussy baka";
}

var btn = document.getElementById("gbutton");
btn.addEventListener("click", gbtn);

var leAray = ["kik", "kekw", "fring"];

function inlist(lItem) {
  if (leAray.indexOf(lItem) > -1) {
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
