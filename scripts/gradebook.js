
//variables for inputs and injecting data 
const enterGrade = document.querySelector('.enterGrade');
const grade = document.querySelector('.grade');
const gradesList = document.querySelector('.gradesList');
const getLetterGrade = document.querySelector('.getGrade');
const average = document.querySelector('.average');
const letterGrade = document.querySelector('.letterGrade');
const reset = document.querySelector('.reset');

//letter grade array 
const letterGrades = ["A", "B", "C", "D", "F"];

let gradeCount = 1;
var averageGrade = 0;
var gradeTotal = 0;

//events for each button 
enterGrade.addEventListener('click', enterGrades);
getLetterGrade.addEventListener('click', calcGrade);
reset.addEventListener('click', resetGrades);

//this function takes the user input, injects it back and calculates the average grade 
function enterGrades(){
    let newGrade = Number(grade.value)
    if (gradeCount === 1){
        gradesList.textContent = 'Entered Grades: ';
    }
        gradesList.textContent += newGrade + ' ';
        gradeTotal += newGrade;
        averageGrade = gradeTotal / gradeCount;
        gradeTotal = parseInt(gradeTotal);
        averageGrade = parseFloat(averageGrade);
        average.textContent = 'Average Grade: ' + averageGrade;
        gradeCount++;
}

//this function takes the average grade and assigns it a letter grade value then injects it
function calcGrade(){
    let gradeLetter = 0;
    if (averageGrade >= 90) {
        gradeLetter = letterGrades[0];
    } else if (averageGrade < 90 && averageGrade >= 80){
        gradeLetter = letterGrades[1];
    } else if (averageGrade < 80 && averageGrade >= 70) {
        gradeLetter = letterGrades[2];
    } else if (averageGrade < 70 && averageGrade >= 60) {
        gradeLetter = letterGrades[3];
    } else if (averageGrade < 60){
        gradeLetter = letterGrades[4];
    }
    letterGrade.textContent = 'Grade Received: ' + gradeLetter;
}

//this function resets the data 
function resetGrades(){
    letterGrade.textContent = '';
    average.textContent = '';
    gradesList.textContent = '';
    averageGrade = 0;
    gradeCount = 1;
    gradeTotal = 0;
}