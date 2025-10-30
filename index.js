const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbwrgM5LfIEPsvOACmW7TOPEhHfE8Cy5r6kkHz7xAE93i2Pk--eEVpgXNdDXN14VF18xoQ/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));












