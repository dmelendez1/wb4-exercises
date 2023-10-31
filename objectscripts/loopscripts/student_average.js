let students = [
    { name: "Diana", scores: [100, 96, 99, 92] },
    { name: "Alex", scores: [90, 91, 85, 88] },
    { name: "Brian", scores: [75, 89, 80, 83] },
    { name: "Carla", scores: [100, 80, 90, 85] },
    { name: "Eva", scores: [70, 79, 88, 92] },
    { name: "Frank", scores: [65, 69, 78, 80] }
];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalScore = 0;

    // Inner loop to iterate over each student's scores
    for (let j = 0; j < student.scores.length; j++) {
        totalScore += student.scores[j];
    }

    let averageScore = totalScore / student.scores.length;
    console.log(`${student.name}'s average score is: ${averageScore.toFixed(2)}`);
}
