
var x = document.getElementsByClassName("tools");
input = document.createElement("input");
input.type = "submit";
input.value = "Open all assigned submissions in new tabs";
input.onmousedown=openAllAssignedSubmissions;
input2 = document.createElement("input");
input2.type = "submit";
input2.value = "Open all ungraded submissions";
input2.onmousedown=getAllAssignedGrades;
x[0].appendChild(input);
x[0].appendChild(input2);
console.log("test");


function openAllAssignedSubmissions(){
    var grades = document.getElementById('grades');
    var gradessub = grades.childNodes[1];
    var gscn = gradessub.childNodes;
    for (var i = 0; i<gscn.length; i++){
    
        if (gradessub.childNodes[i].childNodes[1].childNodes[0].nodeName=="FONT"){
            console.log(gradessub.childNodes[i].childNodes[1].childNodes[0].innerText.concat(" at row ",i+1));
            console.log(gradessub.childNodes[i].childNodes[4].childNodes[0].childNodes[0].textContent);
            window.open(gradessub.childNodes[i].childNodes[1].childNodes[3].href, '_blank');
        }
        

    }
}

function getAllAssignedGrades(){
    //Return true if finished grading
    var grades = document.getElementById('grades');
    var gradessub = grades.childNodes[1];
    var gscn = gradessub.childNodes;
    
    var finishedGrading = true;
    for (var i = 0; i<gscn.length; i++){
    
        if (gradessub.childNodes[i].childNodes[1].childNodes[0].nodeName=="FONT"){
            console.log(gradessub.childNodes[i].childNodes[1].childNodes[0].innerText.concat(" at row ",i+1));
            
            var text=[];
            var openNewTab = false;
            for (var z = 0; z<gradessub.childNodes[i].childNodes.length; z++){
                if (gradessub.childNodes[i].childNodes[z].className=="problem edit"){
                    var grade = gradessub.childNodes[i].childNodes[z].childNodes[0].innerText;
                    text.push(grade);
                    if (grade=="–"){
                        finishedGrading = false;
                        openNewTab = true;
                    }
                }
            }
            if (openNewTab){
                window.open(gradessub.childNodes[i].childNodes[1].childNodes[3].href, '_blank');
            }
            console.log(text.join(" | "));
            
        }
        

    }

    return finishedGrading;
}
//getAllAssignedGrades();
// openAllAssignedSubmissions();






