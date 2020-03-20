var x = document.getElementsByClassName("tools");
console.log(x);
input = document.createElement("input");
console.log(input);

input.value = "Open all assigned submissions in new tabs";
input.type = "submit";
//input.onmousedown=openAllAssignedSubmissions;
//input2 = document.createElement("input");
//input2.type = "submit";
//input2.value = "Open all ungraded submissions";
//input2.onmousedown=getAllAssignedGrades;
var inputbox = document.documentElement.childNodes[2].getElementsByClassName("page-wrapper")[0].getElementsByClassName("container")[0].childNodes[15].childNodes[1].childNodes[1].childNodes[0];
inputbox.childNodes[0] = input;
//x[0].appendChild(input2);
console.log("test");
