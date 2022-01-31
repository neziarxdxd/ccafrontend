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
    $("table tbody").html("");
    for(var i=0; i<listOfGrades.length; i++){     
            var markup = `<tr>${listOfGrades[i].name}</td><td>${listOfGrades[i].grade}</td></tr>`;
            $("table tbody").append(markup);        
      
    }

}
// this use to register student
$('#add-student').on('click',function(){
    var $studentName = $("#studentName");
    var $studentID = $("#studentID");
    var studenTest =  {
    "studentID":$studentID.val(),
    "studentName":$studentName.val(),   
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
addRowData();

});