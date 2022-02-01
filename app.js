listOfGrades = [];
$(function () {
    var $orders = $('#students');
    $.ajax({
    type: 'GET', 
    
    url: 'http://localhost:3000/', 
    success: function (orders) {
         $.each(orders, function(i, order) {     
            optionValue = order._id;     
            optionText = order.studentID
            var markup = `<tr><td>${order.studentID}</td><td>${order.studentName}</td></tr>`;
            $("table tbody").append(markup); 
           $('#select1').append($('<option>').val(optionValue).text(optionText));
        
        });
     }
    });
    
});

function addRowData(){
    
    $("#table1 tbody").html("");
    for(var i=0; i<listOfGrades[0].length; i++){

            var markup = `<tr><td>${listOfGrades[0][i].name}</td><td>${listOfGrades[0][i].grade}</td></tr>`;
        
            $("#table1 tbody").append(markup);  
            console.log(listOfGrades[0][i].name);      
      
    }

}
// this use to register student
$('#add-student').on('click',function(){
    var $studentName = $("#studentName");
    var $studentID = $("#studentID");
    var studenTest =  {
    "studentID":$studentID.val(),
    "studentName":$studentName.val(),
    "gradeList":[],   
    };

    $.ajax({
        data : JSON.stringify(studenTest),
        contentType : 'application/json',
        type:'POST',
        url:'http://localhost:3000/post',           

    });
} );
var currentID;
var currentStudentID;
var currentStudentName;
// add grade button
$('#add-grade').on('click',function(){
    var $name = $("#name");
    var $grade = $("#grade");
    var $gradeRecord =  {
    "name":$name.val(),
    "grade":$grade.val(),   
    };
    listOfGrades[0].push($gradeRecord);
    addRowData();   
    
} );

// save grade
$('#save-grade').on('click',function(){
   
    var $studentID =$('#select1 option:selected').text();
    var $studentName = currentStudentName;
    var studenTest =  {
        "studentName": $studentName,
    "studentID":$studentID,
        "gradeList":listOfGrades[0],
      
    };

    $.ajax({
        data : JSON.stringify(studenTest),
        contentType : 'application/json',
        type:'PATCH',
        url:`http://localhost:3000/update/${currentID}`,           

    });
} );


$(function() { 
$('#select1').change(function(){
    var test = $('#select1');
    
    currentID = test.val();
    console.log(test.val());    
    getGrades(test.val());
    
    
});

});

function getGrades(id){
    $.ajax({
        type: 'GET',        
        url: `http://localhost:3000/${id}`, 
        success: function (orders) {
            listOfGrades=[];        
            listOfGrades.push(orders.gradeList);
            currentStudentName = orders.studentName;
            addRowData();            
        }
    });
}

