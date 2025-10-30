const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbyVA-rxWUi10GFmLiT2x1LaznOZMr_sVQie3NoQlWCCd2h1mF_yqrCYAAPqPKKxoYFbCA/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));





