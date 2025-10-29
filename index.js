SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey Creator UI themes
function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator.SurveyCreator();
    return (<SurveyCreator.SurveyCreatorComponent creator={creator} />);
}
const root = ReactDOM.createRoot(document.getElementById("surveyCreatorContainer"));
root.render(<SurveyCreatorRenderComponent />);