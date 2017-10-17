$(document).ready(function() {
  $("#blanks form").submit(function (event) {
    var hatedColor = $("#Color").val();
    var name = $("input#givenName").val();
    var animal = $("#animalFear").val();
    var age = 2 + parseInt($("#givenAge").val());
    var food = $("#worstFood").val();
    var vice = $("input#Vice").val();

    $(".Name").text(name);
    $(".deadlyVice").text(vice);
    $(".scaryAnimal").text(animal);
    $(".hatedFood").text(food);
    $(".hatedColor").text(hatedColor);
    $(".futureAge").text(age);


    $("#blanks").hide();
    $("#deathIntro").show();
    $("#deathParagraph01").show();
    $("#deathParagraph02").show();
    $("#deathParagraph03").show();
    $("#deathParagraph04").show();
    $("#deathParagraph05").show();
    $("body").css("background-color", hatedColor);



    event.preventDefault();
  });
});
