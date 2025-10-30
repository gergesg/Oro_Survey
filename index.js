const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbwN5QiicaV_ElD-VsxQLy-lC8ddo_MXte-biBUyQJQOpXUxJFzinIaCBTF5jvBidKBRMg/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));









