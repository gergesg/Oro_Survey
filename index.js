const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbzvJ2QmvxFlyQnI0rYApskx_l0O9Fs36i4RJiLHLQCuaI98UESaKVu5x0JMjaTtEHekvw/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));











