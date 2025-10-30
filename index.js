const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbwLO_kUg9ivXW9tupq7flkfA2JlFLnZaXbWxR8MjMQenSxRUSDyNk_ljqcJBOZqNtDDEQ/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));






