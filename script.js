$("convert_btn").click(function () {
  var text = $("input_text").text();
  $.post(
    "https://api.funtranslations.com/translate/pirate.json",
    {
      text: text,
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  );
});
