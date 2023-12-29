(function ($) {
  //Javascript code goes here
  $(document).ready(function () {
    //Jquery code goes here
    $("#rating-buttons button").click(function () {
      var selectedRating = $(this).text();

      // Update the rating display on Card 2:
      $("#card2 #rating").text(selectedRating);

      // Update the rating text:
      $("#card2 #total-rating").text(
        "You selected " + selectedRating + " out of 5"
      );
    });
    $("#card2").hide();
    $("#submit-btn").click(function () {
      $("#card1");
      $("#card2").fadeIn(800);
    });
    $("#show").click(function () {
      $("#card1").show();
    });
    $("#rating-buttons button").click(function(){
      $(this).css("background-color","hsl(25, 97%, 53%)");
    });

    //$("#target1").css('color','red');
    //$("button").prop("disabled", true);
    //$('#target4').html("<em>Target4</em>")
    //$('#target4').remove()
    //$("#target2").appendTo('#right-well');
    //$("#target5").clone().appendTo('#left-well');
    //$("#target1").parent().css('background-color','red');
    //$(".target:nth-child(2)").addClass("animated bounce");
    //$(".target:even").addClass("animated shake");
    //$("body").addClass('animated fadeOut').addClass("hinge");
  });
})(jQuery);
