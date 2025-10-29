// This function runs when the survey is completed
survey.onComplete.add(function (sender) {
  // Send the survey data to your Google Apps Script Web App
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
