const survey = new Survey.Model(json);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.render(document.getElementById("surveyElement"));
fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sender.data),
  })
  .then(response => response.json())
  .then(result => {
    console.log("Success:", result);
    alert("✅ Your response has been submitted successfully!");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("⚠ There was an error submitting your response. Please try again later.");
  });
});
