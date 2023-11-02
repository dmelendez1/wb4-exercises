let courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    }
   ];

   function startDateByCourseId(courseList, courseId) {
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].CourseId === courseId) {
            return courseList[i].StartDate;
        }
    }
    return null;
}



function titleByCourseId(courseList, courseId) {
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].CourseId === courseId) {
            return courseList[i].Title;
        }
    }
    return null;
}



function titlesByMaxFee(courseList, maxFee) {
    let titles = [];
    for (let i = 0; i < courseList.length; i++) {
        if (parseFloat(courseList[i].Fee) <= maxFee) {
            titles.push(courseList[i].Title);
        }
    }
    return titles;
}



function courseIdsByLocation(courseList, location) {
    let courseIds = [];
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].Location === location) {
            courseIds.push(courseList[i].CourseId);
        }
    }
    return courseIds;
}


console.log(startDateByCourseId(courses, "PROG200")); 

console.log(titleByCourseId(courses, "PROG300")); 


console.log(titlesByMaxFee(courses, 100)); 

console.log(courseIdsByLocation(courses, "Classroom 1")); 