var studentData = [{
    "gradeList": [{
            "name": "PH",
            "grade": "99"
        },
        {
            "name": "ME",
            "grade": "98"
        }
    ],
    "_id": "61f8a712a172f104506d0210",
    "studentID": "18-20122",
    "studentName": "Pedro Sama ",
    "datestamp": "2022-02-01T03:20:50.989Z",
    "__v": 1
}];

studentID = studentData[0].studentID;
studentName = studentData[0].studentName;
gradeList = listToString(studentData[0].gradeList);

console.log(`Student Name: ${studentName}\nStudent ID: ${studentID}\nList of Grades: \n${gradeList}`)

function listToString(gradeList){
    stringData = [];
    for(i=0; i<gradeList.length;i++){
        stringData.push(`${gradeList[i].name}:${gradeList[i].grade}`);
    }

    return stringData.join("\n")
}