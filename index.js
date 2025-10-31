const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://hook.eu2.make.com/lsw66dqoo5a372qxwgyrfxe3eab1e2wf", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));













