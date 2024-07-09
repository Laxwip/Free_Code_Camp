function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++){
    // console.log(scores[i])
    sum = sum + scores[i];
  }
  sum = sum / scores.length
  return sum
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


function hasPassingGrade(score) {
  if (getGrade(score) !== "F"){
    return true
  } else {
    return false
  }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores).toFixed(1);
  const studentGrade = getGrade(studentScore);
  let message = `Class average: ${classAverage}. Your grade: ${studentGrade}.`;

  if (hasPassingGrade(studentScore)) {
    message += " You passed the course.";
  } else {
    message += " You failed the course.";
  }

  return message;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));