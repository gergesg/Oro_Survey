const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
  fetch("https://script.google.com/macros/s/AKfycbxroOwdyzn6o_dSQ4ciQXepgRF34peL7ogQStF5p5cGHvx396zsl8ITGm5hJUdunkz7uw/exec", {
    method: "POST",
    body: JSON.stringify(sender.data)
  });
});
survey.render(document.getElementById("surveyElement"));


