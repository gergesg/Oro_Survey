const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbzwreFFtYxRyOL4zQqwA0vdmr0jduO9N_CyWZAR04vqcyKAx9a-80ma4CxWMl2coH7KYg/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));




