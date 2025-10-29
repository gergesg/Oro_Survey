const survey = new Survey.Model(json);
survey.onComplete.add(function (sender) {
  fetch("https://script.google.com/macros/s/AKfycbz7SUZltmr2qM7TV6HaVDdk8aLv4WMRjBp__t_6rfuqP2Ml4ZT7jN8FPLq2X9dCo9gUEg/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});


survey.render(document.getElementById("surveyElement"));
