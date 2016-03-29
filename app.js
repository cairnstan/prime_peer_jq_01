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

  // generate random employee
  $("#random").on('click', function(){
    // loop to create random strings
    // var randomFirst = '';
    // for (var it = 0; it < 10; it++){
    //   var tempNum = Math.random()*100;
    //   while(tempNum > 65 && tempNum < 122){
    //     tempNum = Math.random()*100;
    //     console.log(tempNum);
    //   }
    //   console.log()
    //   var character = String.fromCharCode(tempNum);
    //   randomFirst += character;
    // }
    // console.log(randomFirst);

    // generate random rating
    var randomNumber = Math.random();
    var randomRating = 0;
    if(randomNumber < 0.19){
      randomRating = 1;
    } else if (randomNumber < 0.39 && randomNumber > 0.19){
      randomRating = 2;
    } else if (randomNumber < 0.59 && randomNumber > 0.39){
      randomRating = 3;
    } else if (randomNumber < 0.79 && randomNumber > 0.59){
      randomRating = 4;
    } else if (randomNumber < 1 && randomNumber > 0.79){
      randomRating = 5;
    }

    // random titles
    randomNumber = Math.random();
    randomTitle = '';
    if(randomNumber < 0.19){
      randomTitle = 'Manager';
    } else if (randomNumber < 0.39 && randomNumber > 0.19){
      randomTitle = 'Mail Person';
    } else if (randomNumber < 0.59 && randomNumber > 0.39){
      randomTitle = 'CEO';
    } else if (randomNumber < 0.79 && randomNumber > 0.59){
      randomTitle = 'Janitor';
    } else if (randomNumber < 1 && randomNumber > 0.79){
      randomTitle = 'Copy Editor';
    }

    // random first names
    randomNumber = Math.random();
    randomFirstName = '';
    if(randomNumber < 0.19){
      randomFirstName = 'Steve';
    } else if (randomNumber < 0.39 && randomNumber > 0.19){
      randomFirstName = 'Clarissa';
    } else if (randomNumber < 0.59 && randomNumber > 0.39){
      randomFirstName = 'Melissa';
    } else if (randomNumber < 0.79 && randomNumber > 0.59){
      randomFirstName = 'Frankie';
    } else if (randomNumber < 1 && randomNumber > 0.79){
      randomFirstName = 'Will';
    }

    // random last names
    randomNumber = Math.random();
    randomLastName = '';
    if(randomNumber < 0.19){
      randomLastName = 'Brubaker';
    } else if (randomNumber < 0.39 && randomNumber > 0.19){
      randomLastName = 'Smith';
    } else if (randomNumber < 0.59 && randomNumber > 0.39){
      randomLastName = 'Peterson';
    } else if (randomNumber < 0.79 && randomNumber > 0.59){
      randomLastName = 'Lee';
    } else if (randomNumber < 1 && randomNumber > 0.79){
      randomLastName = 'Mason';
    }

    // random employee number
    randomEmployeeNumber = Math.round(Math.random()*1000);

    // random salary
    randomSalary = Math.round(Math.random()*100000);

    totalSalaries += parseInt(randomSalary);

    $("#totalSalaries").html(totalSalaries);

    var randomEmployee = new Employee(randomFirstName, randomLastName, randomEmployeeNumber, randomTitle, randomRating, randomSalary);

    var tableEmployee = '<tr><td>' + randomFirstName + '</td><td>' + randomLastName + '</td><td>' + randomEmployeeNumber + '</td><td>' + randomTitle + '</td><td class="review' + randomRating + '">' + randomRating + '</td><td>' + randomSalary + '</td><td><button class=\'remove\'>Remove</button></td></tr>';

    $("table").append(tableEmployee);

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
