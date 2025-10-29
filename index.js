SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey Creator UI themes
function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator.SurveyCreator();
    return (<SurveyCreator.SurveyCreatorComponent creator={creator} />);
    
}
const root = ReactDOM.createRoot(document.getElementById("surveyCreatorContainer"));

root.render(<SurveyCreatorRenderComponent />);

            fetch("survey.json")
  .then(response => response.json())
  .then(surveyJSON => {
    const survey = new Survey.Model(surveyJSON);
    Survey.SurveyNG.render("surveyContainer", { model: survey });
  })
  .catch(error => console.error("Failed to load survey:", error));



