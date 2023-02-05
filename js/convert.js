$(document).ready(function () {
  $("button#convert_btn").click(function () {
    var text = $("p#input_text").text();
    $.post(
      "https://api.funtranslations.com/translate/pirate.json",
      {
        text: text,
      },
      function (data, status) {
        $("p#output_text").text(data["contents"]);
      }
    );
  });
});

function updateOutputText() {
  const input_text = document.getElementById("input_text");
  const output_text = document.getElementById("output_text");

  output_text.innerHTML = input_text.value;
}
