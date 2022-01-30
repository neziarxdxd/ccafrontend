listOfGrades = [];
$(function () {
    var $orders = $('#students');
    $.ajax({
    type: 'GET', 
    
    url: 'http://localhost:3000/', 
    success: function (orders) {
         $.each(orders, function(i, order) {     
             console.log(order.studentID)       
            //$orders.append('<li>name: '+ order.name +', drink: '+ order.drink + '</li>');
        
        });
     }
    });
    
});

function addTable(){
    for(i =0; i<listOfGrades.length; i++){
        $('#myTable tr:last').after('<tr>...</tr><tr>...</tr>');
    }
   
}

$('#add-student').on('click',function(){
    var $studentName = $("#studentName");
    var $studentID = $("#studentID");
    var studenTest =  {
    "studentID":$studentID.val(),
    "studentName":$studentName.val(),
    "gradeList":listOfGrades
    };

    $.ajax({
        data : JSON.stringify(studenTest),
        contentType : 'application/json',
        type:'POST',
        url:'http://localhost:3000/post',
                

    });
} );

$("#add-grade").on('click', function(){
var $name = $("#name");
var $grade = $("#grade");
listOfGrades.push(
    {name:$name.val(), 
    grade:$grade.val()}
    );
console.log(listOfGrades);
addTable();
});