const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbx2EfzZmql4J6XCEOF4nTSLvcvSbk0Ob9ydu9kCMICgCBJNfIXoEAVr42b-Z9wCHB8rEA/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));

