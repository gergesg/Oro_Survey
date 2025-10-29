SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey Creator UI themes
function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator.SurveyCreator();
    return (<SurveyCreator.SurveyCreatorComponent creator={creator} />);
    {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "active ingredient",
          "title": "choose active ingredient",
          "isRequired": true,
          "columns": [
            {
              "name": "Caps",
              "title": "Capsules",
              "cellType": "tagbox",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Yes"
                }
              ],
              "showOtherItem": true,
              "showNoneItem": true,
              "storeOthersAsComment": true
            },
            {
              "name": "Pessaries",
              "title": "Pessaries",
              "cellType": "tagbox",
              "choices": [
                {
                  "value": 6,
                  "text": "Yes"
                }
              ],
              "showOtherItem": true,
              "showNoneItem": true,
              "storeOthersAsComment": true
            },
            {
              "name": "other",
              "title": "other",
              "cellType": "tagbox",
              "visible": false,
              "showOtherItem": true,
              "storeOthersAsComment": true
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rows": [
            {
              "value": " Progesterone 200 ",
              "text": "Progesterone 200"
            },
            {
              "value": " Progesterone 200",
              "text": "Progesterone 400"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "Choose trade",
          "title": "choose trade",
          "columns": [
            {
              "name": "Progesterone 200 Capsules",
              "title": "Progesterone 200 Capsules",
              "cellType": "tagbox",
              "minWidth": "6000",
              "visibleIf": "{active ingredient. Progesterone 200 .Caps} = ['Item 1']",
              "choices": [
                {
                  "value": 1,
                  "text": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN)"
                },
                {
                  "value": 2,
                  "text": "PROSTAR- 200 CAPSULES (INDIA)"
                }
              ],
              "showOtherItem": true,
              "storeOthersAsComment": true
            },
            {
              "name": "Progesterone 200 Pessaries",
              "title": "Progesterone 200 Pessaries",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": 1,
                  "text": "BIOGEST 200MG (Egypt)"
                },
                {
                  "value": 2,
                  "text": "UTROGESTAN VAGINAL 200 MG (SPAIN)"
                }
              ],
              "showOtherItem": true,
              "storeOthersAsComment": true,
              "placeholder": "Select..."
            },
            {
              "name": "Other",
              "title": "Other",
              "visible": false
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "placeholder": "Select trade",
          "cellType": "tagbox",
          "allowAddRows": false,
          "allowRemoveRows": false,
          "rowCount": 3
        }
      ]
    },
    {
      "name": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN) Details",
      "title": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN) Details ",
      "elements": [
        {
          "type": "slider",
          "name": "How Many Capsules in the trip",
          "title": "How Many Capsules in the trip"
        },
        {
          "type": "slider",
          "name": "How Many Strips in the Box",
          "title": "How Many Strips in the Box"
        },
        {
          "type": "slider",
          "name": "Total units per box",
          "title": "Total units per box"
        },
        {
          "type": "radiogroup",
          "name": "demand period",
          "title": " demand period",
          "choices": [
            {
              "value": "Item 1",
              "text": "Month"
            },
            {
              "value": "Item 2",
              "text": "Quarter"
            },
            {
              "value": "Item 3",
              "text": "Semester"
            },
            {
              "value": "Item 4",
              "text": "Annual"
            }
          ]
        },
        {
          "type": "text",
          "name": "Please indicate the current or expected factory price",
          "title": "Please indicate the current or expected factory price",
          "placeholder": "USD"
        },
        {
          "type": "text",
          "name": "Estimated demand boxes per selected period",
          "title": "Estimated demand boxes per selected period"
        },
        {
          "type": "comment",
          "name": "Additional Comments or Notes",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "PROSTAR- 200 CAPSULES (INDIA)",
      "title": "PROSTAR- 200 CAPSULES (INDIA)",
      "elements": [
        {
          "type": "slider",
          "name": "question1",
          "title": "How Many Capsules in the trip"
        },
        {
          "type": "slider",
          "name": "question2",
          "title": "How Many Strips in the Box"
        },
        {
          "type": "slider",
          "name": "question3",
          "title": "Total units per box"
        },
        {
          "type": "radiogroup",
          "name": "question4",
          "title": " demand period",
          "choices": [
            {
              "value": "Item 1",
              "text": "Month"
            },
            {
              "value": "Item 2",
              "text": "Quarter"
            },
            {
              "value": "Item 3",
              "text": "Semester"
            },
            {
              "value": "Item 4",
              "text": "Annual"
            }
          ]
        },
        {
          "type": "text",
          "name": "question5",
          "title": "Please indicate the current or expected factory price",
          "placeholder": "USD"
        },
        {
          "type": "text",
          "name": "question6",
          "title": "Estimated demand boxes per selected period"
        },
        {
          "type": "comment",
          "name": "question7",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "Other Progesterone 200 Capsules Trade Name",
      "title": "Other Progesterone 200 Capsules Trade Name",
      "elements": [
        {
          "type": "slider",
          "name": "question8",
          "title": "How Many Capsules in the trip"
        },
        {
          "type": "slider",
          "name": "question9",
          "title": "How Many Strips in the Box"
        },
        {
          "type": "slider",
          "name": "question10",
          "title": "Total units per box"
        },
        {
          "type": "radiogroup",
          "name": "question11",
          "title": " demand period",
          "choices": [
            {
              "value": "Item 1",
              "text": "Month"
            },
            {
              "value": "Item 2",
              "text": "Quarter"
            },
            {
              "value": "Item 3",
              "text": "Semester"
            },
            {
              "value": "Item 4",
              "text": "Annual"
            }
          ]
        },
        {
          "type": "text",
          "name": "question12",
          "title": "Please indicate the current or expected factory price",
          "placeholder": "USD"
        },
        {
          "type": "text",
          "name": "question13",
          "title": "Estimated demand boxes per selected period"
        },
        {
          "type": "comment",
          "name": "question14",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "Other Progesterone 200 Pessaries Trade Name",
      "title": "Other Progesterone 200 Pessaries Trade Name",
      "elements": [
        {
          "type": "slider",
          "name": "question15",
          "title": "How Many Capsules in the trip"
        },
        {
          "type": "slider",
          "name": "question16",
          "title": "How Many Strips in the Box"
        },
        {
          "type": "slider",
          "name": "question17",
          "title": "Total units per box"
        },
        {
          "type": "radiogroup",
          "name": "question18",
          "title": " demand period",
          "choices": [
            {
              "value": "Item 1",
              "text": "Month"
            },
            {
              "value": "Item 2",
              "text": "Quarter"
            },
            {
              "value": "Item 3",
              "text": "Semester"
            },
            {
              "value": "Item 4",
              "text": "Annual"
            }
          ]
        },
        {
          "type": "text",
          "name": "question19",
          "title": "Please indicate the current or expected factory price",
          "placeholder": "USD"
        },
        {
          "type": "text",
          "name": "question20",
          "title": "Estimated demand boxes per selected period"
        },
        {
          "type": "comment",
          "name": "question21",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "choose active ingredient 2",
          "title": "choose active ingredient",
          "isRequired": true,
          "columns": [
            {
              "name": "Caps",
              "title": "Caps",
              "cellType": "tagbox",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Yes"
                }
              ],
              "showOtherItem": true,
              "showNoneItem": true,
              "storeOthersAsComment": true
            },
            {
              "name": "press",
              "title": "Press",
              "cellType": "tagbox",
              "choices": [
                {
                  "value": 6,
                  "text": "Yes"
                }
              ],
              "showOtherItem": true,
              "showNoneItem": true,
              "storeOthersAsComment": true
            },
            {
              "name": "other",
              "title": "other",
              "cellType": "tagbox",
              "visible": false,
              "showOtherItem": true,
              "storeOthersAsComment": true
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rows": [
            "prog 200",
            "Pro 400"
          ]
        }
      ]
    }
  ]
}
}
const root = ReactDOM.createRoot(document.getElementById("surveyCreatorContainer"));

root.render(<SurveyCreatorRenderComponent />);

