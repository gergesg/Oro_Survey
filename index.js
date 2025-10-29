// This function runs when the survey is completed
survey.onComplete.add(function (sender) {
  // Send the survey data to your Google Apps Script Web App
  fetch("https://script.google.com/macros/s/AKfycbymG0bjN291PJGO1I8j3GYJEX7E30OjN0r-HP16R8lQRoxsMTQD9oLjjEEOd0R5vc8s/exec", {
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

