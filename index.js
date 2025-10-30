const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbyzP8K34gNTMFEAkq1vFAyUUPtaawSHTVoHVJ-mDt-0VHCaWhvOcjKrkOV339vTe5ij0Q/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));







