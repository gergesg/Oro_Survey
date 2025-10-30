const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbz4kPh8GqR3suc1tWXzy8UiAN1_Ko8P-w27o34jS_PFvB1kiJU1DICw0nQLB1CNz0CJJQ/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));








