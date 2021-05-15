function getmarks() {

    var english= Number(document.getElementById("english").value);
    var physics=Number(document.getElementById("physics").value);
    var chemistry=Number(document.getElementById("chemistry").value);
    var maths=Number(document.getElementById("maths").value);
    var cs=Number(document.getElementById("cs").value);
    var totalMarks = 500;
    var obtainedMarks = english + physics + chemistry + maths + cs;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade ="";
    document.getElementById("percent").innerHTML = percentage + "%"
     
    if (percentage >= 90) {
        grade = "A+";
    }else if (percentage < 90 && percentage >= 80){
        grade = "A";
    }else if (percentage < 80 && percentage >= 75){
        grade = "B+";
    }else if (percentage < 75 && percentage >= 70) {

        grade = "B";
    }else if (percentage < 70 && percentage >= 65){
        grade = "C+"
    }else if (percentage < 65 && percentage >= 60){
        grade = "C";
    }else if (percentage <60 && percentage >= 55){
        grade ="D+";
    }else if (percentage < 55 && percentage >= 50){
        grade = "D";
     }else if (percentage < 50 && percentage >= 40){
         grade = "E";
     }else if (percentage <39 && percentage >0 ){
         grade = "F";
     }
     if (percentage < 39){
         document.getElementById("pass").innerHTML = "Sorry! You have failed. Better luck next time!!"
     }else if (percentage > 40){
         document.getElementById("pass").innerHTML = "Congratulations! You have passed."
     }

      document.getElementById("grade").innerHTML = grade;
}