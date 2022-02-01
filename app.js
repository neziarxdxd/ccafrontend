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
    };

    $.ajax({
        data : JSON.stringify(studenTest),
        contentType : 'application/json',
        type:'POST',
        url:'http://localhost:3000/post',           

    });
} );
var currentID;
// this use to register student
$('#save-grade').on('click',function(){
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
            addRowData();            
        }
    });
}

