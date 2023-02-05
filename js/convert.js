$(document).ready(function () {
  $("button#convert_btn").click(function () {
    var text = $("textarea#input_text").val();
    $.post(
      "https://api.funtranslations.com/translate/pirate.json",
      {
        text: text,
      },
      function (data, status) {
        $("p#output_text").text(data["contents"]["translated"]);
      }
    );
  });
});
