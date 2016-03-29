$(function(){
  // console.log("Document is ready");
  // console.log(new Employee('sasah','kramer','2','developer',5,'54000'));

  var totalSalaries = 0;
  $("#create").on('click',function(){
    var tempFirstName = $("#firstName").val();
    var tempLastName = $("#lastName").val();
    var tempEmployeeNumber = $("#employeeNumber").val();
    var tempTitle = $("#jobTitle").val();
    var tempReviewScore = $("#reviewScore").val();
    var tempAnnualSalary = $("#annualSalary").val();

    totalSalaries += parseInt(tempAnnualSalary);

    var tableEmployee = '<tr><td>' + tempFirstName + '</td><td>' + tempLastName + '</td><td>' + tempEmployeeNumber + '</td><td>' + tempTitle + '</td><td class="review' + tempReviewScore + '">' + tempReviewScore + '</td><td>' + tempAnnualSalary + '</td><td><button class=\'remove\'>Remove</button></td></tr>';

    $("table").append(tableEmployee);

    var tempEmployee = new Employee(tempFirstName, tempLastName, tempEmployeeNumber, tempTitle, tempReviewScore, tempAnnualSalary);

    console.log(tempEmployee);

    // scope of this function?
    var removeSalary = 0;
    $(".remove:last").on('click', function(){
      $(this).parent().parent().remove();

      // subtract salary
      removeSalary = parseInt($(this).parent().prev().text());
      console.log(removeSalary);
      console.log('blank');
      totalSalaries -= removeSalary;
      $("#totalSalaries").html(totalSalaries);
      removeSalary = 0;
    });

    $("#totalSalaries").html(totalSalaries);

      // switch(parseInt(tempReviewScore)){
      //   case 1:
      //   var color = "red";
      //   break;
      //   case 2:
      //   var color = "blue";
      //   break;
      //   case 3:
      //   var color = "green";
      //   break;
      //   case 4:
      //   var color = "yellow";
      //   break;
      //   case 5:
      //   var color = "orange";
      //   break;
      // }
      // $(".ratingColor").css("color", color);
  });
  // console.log($("#reviewScore").val());
  $("#displayScore").append($("#reviewScore").val());

  $("#reviewScore").on('mousemove',function(){
    $("#displayScore").html($("#reviewScore").val());
  });

});

function Employee(firstName, lastName, employeeNumber, title, reviewScore, salary){
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNumber = employeeNumber;
  this.title = title;
  this.reviewScore = reviewScore;
  this.salary = salary;
}
