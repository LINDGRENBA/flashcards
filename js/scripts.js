$(document).ready(function() {
  $(".word", ".grid-item").click(function() {
    $(this).hide();
    $(this).siblings(".definition").show();
  });

  $(".definition", ".grid-item").click(function() {
    $(this).hide();
    $(this).siblings(".word").show();
  });
});