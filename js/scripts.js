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

    $("#death").show();
    $("#blanks").hide();
    event.preventDefault();
  });
});
