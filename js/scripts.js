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
    $("#deathIntro").fadeIn(3000);
    $("#deathParagraph01").fadeIn(3000);
    $("#glyphicon01").click(function() {
        $("#deathParagraph01").hide();
        $("#deathParagraph02").fadeIn(3000);
    });
    $("#glyphicon02").click(function() {
        $("#glyphicon02").hide();
        $("#deathParagraph03").fadeIn(3000);
    });
    $("#glyphicon03").click(function() {
        $("#glyphicon03").hide();
        $("#deathParagraph04").fadeIn(3000);
    });
    $("#glyphicon04").click(function() {
        $("#glyphicon04").hide();
        $("#deathParagraph05").fadeIn(3000);
    });
    $("#glyphicon05").click(function() {
        $("#glyphicon04").hide();
        $("#deathParagraph05").hide();
        $("#deathParagraph04").hide();
        $("#deathParagraph03").hide();
        $("#deathParagraph02").hide();
        $("#deathIntro").hide();
        $("body").css("background-color", hatedColor);
    });




    event.preventDefault();
  });
});
