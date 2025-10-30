const json = {
  "title": "ORO Survey",
  "description": "Please Write The Description of the Survey",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=9506c782-fcaa-4028-9efb-1950b2e68fbe",
  "pages": [
    {
      "name": "page1",
      "title": "Active Ingredient Page",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "choose active ingredient",
          "title": "choose active ingredient",
          "isRequired": true,
          "columns": [
            {
              "name": "Form 1",
              "title": "Form 1",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": 1,
                  "text": "Capsules"
                },
                {
                  "value": 2,
                  "text": "Pessaries"
                },
                {
                  "value": 3,
                  "text": "Ampoules"
                },
                {
                  "value": 4,
                  "text": "Tablets"
                },
                {
                  "value": 5,
                  "text": "Inhaler"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other",
              "storeOthersAsComment": true
            },
            {
              "name": "Form 2",
              "title": "Form 2",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "1",
                  "text": "Capsules"
                },
                {
                  "value": "2",
                  "text": "Pessaries"
                },
                {
                  "value": "3",
                  "text": "Ampoules"
                },
                {
                  "value": "4",
                  "text": "Tablets"
                },
                {
                  "value": "5",
                  "text": "Inhaler"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other ",
              "storeOthersAsComment": true
            },
            {
              "name": "Form 3",
              "title": "Form 3",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "1",
                  "text": "Capsules"
                },
                {
                  "value": "2",
                  "text": "Pessaries"
                },
                {
                  "value": "3",
                  "text": "Ampoules"
                },
                {
                  "value": "4",
                  "text": "Tablets"
                },
                {
                  "value": "5",
                  "text": "Inhaler"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": " (Please Mention it)",
              "otherText": "Other",
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
              "value": " Progesterone 400",
              "text": "Progesterone 400"
            },
            " Progesterone 50 and 100",
            "Carbetocin 100 mcg",
            "Dienogest 2mg",
            "Budesonide 100 / 6 mcg Formoterol fumarate dihydrate",
            "Budesonide 200 / 6 mcg Formoterol fumarate dihydrate",
            "Salbutamol (as sulphate ) 100 mcg",
            "Fluticasone Furoate 100/ Umeclidinium 62.5 / Vilanterol 25",
            "Fluticasone Furoate 200/ Umeclidinium62.5 / Vilanterol 25"
          ]
        }
      ]
    },
    {
      "name": "Trade Name Page",
      "title": "Trade Name Question",
      "description": "Please Write Trade Name",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "choose active ingredient Trade Name",
          "title": "choose active ingredient Trade Name",
          "isRequired": true,
          "columns": [
            {
              "name": "Trade Name 1",
              "title": "Trade Name 1",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "BIOGEST 200MG (Egypt)"
                },
                {
                  "value": "Item 2",
                  "text": "UTROGESTAN VAGINAL 200 MG (SPAIN)"
                },
                {
                  "value": "Item 3",
                  "text": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN)"
                },
                {
                  "value": "Item 4",
                  "text": "PROSTAR- 200 CAPSULES (INDIA)"
                },
                {
                  "value": "Item 5",
                  "text": "Other Progesterone 200 Trade Name"
                },
                {
                  "value": "Item 6",
                  "text": "BIOGEST 400 MG (Egypt)"
                },
                {
                  "value": "Item 7",
                  "text": "Other Progesterone 400 Trade Name"
                },
                {
                  "value": "Item 8",
                  "text": "BIOGEST 100 MG / 2 ML (Egypt)"
                },
                {
                  "value": "Item 9",
                  "text": "Other Progesterone 50 and 100 Trade Name"
                },
                {
                  "value": "Item 10",
                  "text": "PABAL 100 µG/ML (INDIA)"
                },
                {
                  "value": "Item 11",
                  "text": "Other Carbetocin 100 mcg Trade Name"
                },
                {
                  "value": "Item 12",
                  "text": "EVAFACT 2 MG (Egypt)"
                },
                {
                  "value": "Item 13",
                  "text": "Other Dienogest 2mg Trade Name"
                },
                {
                  "value": "Item 14",
                  "text": "FORACORT-100 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 15",
                  "text": "Other Budesonide 100 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 16",
                  "text": "FORACORT-200 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 17",
                  "text": "Other Budesonide 200 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 18",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 19",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 20",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 21",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 22",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 23",
                  "text": "Other Salbutamol (as sulphate) 100 mcg Trade Name"
                },
                {
                  "value": "Item 24",
                  "text": "Other Fluticasone Furoate 100 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                },
                {
                  "value": "Item 25",
                  "text": "Other Fluticasone Furoate 200 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other ",
              "storeOthersAsComment": true
            },
            {
              "name": "Trade Name 2",
              "title": "Trade Name 2",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "BIOGEST 200MG (Egypt)"
                },
                {
                  "value": "Item 2",
                  "text": "UTROGESTAN VAGINAL 200 MG (SPAIN)"
                },
                {
                  "value": "Item 3",
                  "text": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN)"
                },
                {
                  "value": "Item 4",
                  "text": "PROSTAR- 200 CAPSULES (INDIA)"
                },
                {
                  "value": "Item 5",
                  "text": "Other Progesterone 200 Trade Name"
                },
                {
                  "value": "Item 6",
                  "text": "BIOGEST 400 MG (Egypt)"
                },
                {
                  "value": "Item 7",
                  "text": "Other Progesterone 400 Trade Name"
                },
                {
                  "value": "Item 8",
                  "text": "BIOGEST 100 MG / 2 ML (Egypt)"
                },
                {
                  "value": "Item 9",
                  "text": "Other Progesterone 50 and 100 Trade Name"
                },
                {
                  "value": "Item 10",
                  "text": "PABAL 100 µG/ML (INDIA)"
                },
                {
                  "value": "Item 11",
                  "text": "Other Carbetocin 100 mcg Trade Name"
                },
                {
                  "value": "Item 12",
                  "text": "EVAFACT 2 MG (Egypt)"
                },
                {
                  "value": "Item 13",
                  "text": "Other Dienogest 2mg Trade Name"
                },
                {
                  "value": "Item 14",
                  "text": "FORACORT-100 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 15",
                  "text": "Other Budesonide 100 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 16",
                  "text": "FORACORT-200 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 17",
                  "text": "Other Budesonide 200 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 18",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 19",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 20",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 21",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 22",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 23",
                  "text": "Other Salbutamol (as sulphate) 100 mcg Trade Name"
                },
                {
                  "value": "Item 24",
                  "text": "Other Fluticasone Furoate 100 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                },
                {
                  "value": "Item 25",
                  "text": "Other Fluticasone Furoate 200 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other ",
              "storeOthersAsComment": true
            },
            {
              "name": "Trade Name 3",
              "title": "Trade Name 3",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "BIOGEST 200MG (Egypt)"
                },
                {
                  "value": "Item 2",
                  "text": "UTROGESTAN VAGINAL 200 MG (SPAIN)"
                },
                {
                  "value": "Item 3",
                  "text": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN)"
                },
                {
                  "value": "Item 4",
                  "text": "PROSTAR- 200 CAPSULES (INDIA)"
                },
                {
                  "value": "Item 5",
                  "text": "Other Progesterone 200 Trade Name"
                },
                {
                  "value": "Item 6",
                  "text": "BIOGEST 400 MG (Egypt)"
                },
                {
                  "value": "Item 7",
                  "text": "Other Progesterone 400 Trade Name"
                },
                {
                  "value": "Item 8",
                  "text": "BIOGEST 100 MG / 2 ML (Egypt)"
                },
                {
                  "value": "Item 9",
                  "text": "Other Progesterone 50 and 100 Trade Name"
                },
                {
                  "value": "Item 10",
                  "text": "PABAL 100 µG/ML (INDIA)"
                },
                {
                  "value": "Item 11",
                  "text": "Other Carbetocin 100 mcg Trade Name"
                },
                {
                  "value": "Item 12",
                  "text": "EVAFACT 2 MG (Egypt)"
                },
                {
                  "value": "Item 13",
                  "text": "Other Dienogest 2mg Trade Name"
                },
                {
                  "value": "Item 14",
                  "text": "FORACORT-100 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 15",
                  "text": "Other Budesonide 100 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 16",
                  "text": "FORACORT-200 (LUNG ADMINISTRATION METERED-DOSE POWDER INHALER) (INDIA)"
                },
                {
                  "value": "Item 17",
                  "text": "Other Budesonide 200 / 6 mcg Formoterol fumarate dihydrate Trade Name"
                },
                {
                  "value": "Item 18",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 19",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 20",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 21",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 22",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 23",
                  "text": "Other Salbutamol (as sulphate) 100 mcg Trade Name"
                },
                {
                  "value": "Item 24",
                  "text": "Other Fluticasone Furoate 100 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                },
                {
                  "value": "Item 25",
                  "text": "Other Fluticasone Furoate 200 / Umeclidinium 62.5 / Vilanterol 25 Trade Name"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other",
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
              "value": "Progesterone 200 ",
              "text": "Progesterone 200",
              "visibleIf": "{choose active ingredient. Progesterone 200 .Form 1} notempty or {choose active ingredient. Progesterone 200 .Form 2} notempty or {choose active ingredient. Progesterone 200 .Form 3} notempty"
            },
            {
              "value": "Progesterone 400",
              "visibleIf": "{choose active ingredient. Progesterone 400.Form 1} notempty or {choose active ingredient. Progesterone 400.Form 2} notempty or {choose active ingredient. Progesterone 400.Form 3} notempty"
            },
            {
              "value": "Progesterone 50 and 100",
              "visibleIf": "{choose active ingredient. Progesterone 50 and 100.Form 1} notempty or {choose active ingredient. Progesterone 50 and 100.Form 2} notempty or {choose active ingredient. Progesterone 50 and 100.Form 3} notempty"
            },
            {
              "value": "Carbetocin 100 mcg",
              "visibleIf": "{choose active ingredient.Carbetocin 100 mcg.Form 1} notempty or {choose active ingredient.Carbetocin 100 mcg.Form 2} notempty or {choose active ingredient.Carbetocin 100 mcg.Form 3} notempty"
            },
            {
              "value": "Dienogest 2mg",
              "visibleIf": "{choose active ingredient.Dienogest 2mg.Form 1} notempty or {choose active ingredient.Dienogest 2mg.Form 2} notempty or {choose active ingredient.Dienogest 2mg.Form 3} notempty"
            },
            {
              "value": "Budesonide 100 / 6 mcg Formoterol fumarate dihydrate",
              "visibleIf": "{choose active ingredient.Budesonide 100 / 6 mcg Formoterol fumarate dihydrate.Form 1} notempty or {choose active ingredient.Budesonide 100 / 6 mcg Formoterol fumarate dihydrate.Form 2} notempty or {choose active ingredient.Budesonide 100 / 6 mcg Formoterol fumarate dihydrate.Form 3} notempty"
            },
            {
              "value": "Budesonide 200 / 6 mcg Formoterol fumarate dihydrate",
              "visibleIf": "{choose active ingredient.Budesonide 200 / 6 mcg Formoterol fumarate dihydrate.Form 1} notempty or {choose active ingredient.Budesonide 200 / 6 mcg Formoterol fumarate dihydrate.Form 2} notempty or {choose active ingredient.Budesonide 200 / 6 mcg Formoterol fumarate dihydrate.Form 3} notempty"
            },
            {
              "value": "Salbutamol (as sulphate ) 100 mcg",
              "visibleIf": "{choose active ingredient.Salbutamol (as sulphate ) 100 mcg.Form 1} notempty or {choose active ingredient.Salbutamol (as sulphate ) 100 mcg.Form 2} notempty or {choose active ingredient.Salbutamol (as sulphate ) 100 mcg.Form 3} notempty"
            },
            {
              "value": "Fluticasone Furoate 100/ Umeclidinium 62.5 / Vilanterol 25",
              "visibleIf": "{choose active ingredient.Fluticasone Furoate 100/ Umeclidinium 62.5 / Vilanterol 25.Form 1} notempty or {choose active ingredient.Fluticasone Furoate 100/ Umeclidinium 62.5 / Vilanterol 25.Form 2} notempty or {choose active ingredient.Fluticasone Furoate 100/ Umeclidinium 62.5 / Vilanterol 25.Form 3} notempty"
            },
            {
              "value": "Fluticasone Furoate 200/ Umeclidinium62.5 / Vilanterol 25",
              "visibleIf": "{choose active ingredient.Fluticasone Furoate 200/ Umeclidinium62.5 / Vilanterol 25.Form 1} notempty or {choose active ingredient.Fluticasone Furoate 200/ Umeclidinium62.5 / Vilanterol 25.Form 2} notempty or {choose active ingredient.Fluticasone Furoate 200/ Umeclidinium62.5 / Vilanterol 25.Form 3} notempty"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "question23",
          "title": "choose active ingredient TradeName 2",
          "columns": [
            {
              "name": "Trade Name 1",
              "title": "Trade Name 1",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 18",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 19",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 20",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 21",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 22",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                }
              ],
              "showOtherItem": true,
              "otherPlaceholder": "(Please Mention it)",
              "otherText": "Other Salbutamol (as sulphate) 100 mcg Trade Name",
              "storeOthersAsComment": true
            },
            {
              "name": "Trade Name 2",
              "title": "Trade Name 2",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 2",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 3",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 4",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 5",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                }
              ],
              "showOtherItem": true,
              "otherText": "Other Salbutamol (as sulphate) 100 mcg Trade Name",
              "storeOthersAsComment": true
            },
            {
              "name": "Trade Name 3",
              "title": "Trade Name 3",
              "cellType": "dropdown",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "BONAIR HFA INHALER (100Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER)"
                },
                {
                  "value": "Item 2",
                  "text": "RESCUWAVE (100 Mcg / ACTUATION LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 3",
                  "text": "ASTHALIN (100Mcg / DOSE LUNG ADMINISTRATION CFC-FREE METERED-DOSE INHALER) (INDIA)"
                },
                {
                  "value": "Item 4",
                  "text": "VENTOLIN (100Mcg LUNG ADMINISTRATION METERED-DOSE INHALER) (FRANCE)"
                },
                {
                  "value": "Item 5",
                  "text": "VENTOMAC 100 (LUNG ADMINISTRATION METERED-DOSE INHALER) (INDIA)"
                }
              ],
              "showOtherItem": true,
              "otherText": "Other Salbutamol (as sulphate) 100 mcg Trade Name",
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
              "value": "Salbutamol (as sulphate ) 100 mcg",
              "visibleIf": "{choose active ingredient Trade Name.Salbutamol (as sulphate ) 100 mcg.Trade Name 1} notempty or {choose active ingredient Trade Name.Salbutamol (as sulphate ) 100 mcg.Trade Name 2} notempty or {choose active ingredient Trade Name.Salbutamol (as sulphate ) 100 mcg.Trade Name 3} notempty"
            }
          ],
          "hideIfRowsEmpty": true
        }
      ]
    },
    {
      "name": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN) Details",
      "visibleIf": "{choose active ingredient Trade Name.Progesterone 200 .Trade Name 1} = 'Item 3' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 2} = 'Item 3' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 3} = 'Item 3'",
      "title": "UTROGESTAN 200 MG SOFT CAPSULES (SPAIN) Details ",
      "elements": [
        {
          "type": "slider",
          "name": "How Many Capsules in the UTROGESTAN 200 MG SOFT CAPSULES strip",
          "title": "How Many Capsules in the strip",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "How Many Strips in the UTROGESTAN 200 MG SOFT CAPSULES Box",
          "title": "How Many Strips in the Box",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "Total units per UTROGESTAN 200 MG SOFT CAPSULES box",
          "title": "Total units per box",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "UTROGESTAN 200 MG SOFT CAPSULES demand period",
          "title": " demand period",
          "isRequired": true,
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
          "name": "UTROGESTAN 200 MG SOFT CAPSULES Estimated demand boxes per selected period",
          "title": "Estimated demand boxes per selected period",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "the UTROGESTAN 200 MG SOFT CAPSULES current or expected factory price",
          "title": "Please indicate the current or expected factory price",
          "isRequired": true,
          "placeholder": "USD"
        },
        {
          "type": "comment",
          "name": "UTROGESTAN 200 MG SOFT CAPSULES Additional Comments or Notes",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "PROSTAR- 200 CAPSULES (INDIA)",
      "visibleIf": "{choose active ingredient Trade Name.Progesterone 200 .Trade Name 1} = 'Item 4' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 2} = 'Item 4' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 3} = 'Item 4'",
      "title": "PROSTAR- 200 CAPSULES (INDIA)",
      "elements": [
        {
          "type": "slider",
          "name": "How Many Capsules in the PROSTAR- 200 CAPSULES strip",
          "title": "How Many Capsules in the trip",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "How Many Strips in the PROSTAR- 200 CAPSULES Box",
          "title": "How Many Strips in the Box",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "Total units per PROSTAR- 200 CAPSULES box",
          "title": "Total units per box",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "PROSTAR- 200 CAPSULES demand period",
          "title": " demand period",
          "isRequired": true,
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
          "name": "Estimated demand PROSTAR- 200 CAPSULES boxes per selected period",
          "title": "Estimated demand boxes per selected period",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "the PROSTAR- 200 CAPSULES current or expected factory price",
          "title": "Please indicate the current or expected factory price",
          "isRequired": true,
          "placeholder": "USD"
        },
        {
          "type": "comment",
          "name": "PROSTAR- 200 CAPSULES Additional Comments or Notes",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "Other Progesterone 200 Capsules Trade Name",
      "visibleIf": "{choose active ingredient Trade Name.Progesterone 200 .Trade Name 1} = 'Item 5' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 2} = 'Item 5' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 3} = 'Item 5'",
      "title": "Other Progesterone 200 Capsules Trade Name",
      "elements": [
        {
          "type": "text",
          "name": "Write Other Progesterone 200 Capsules Trade Name",
          "title": "Write Other Progesterone 200 Capsules Trade Name",
          "isRequired": true,
          "placeholder": "Trade Name"
        },
        {
          "type": "slider",
          "name": "How Many Capsules in the Other Progesterone 200 Capsules strip",
          "title": "How Many Capsules in the strip",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "How Many Strips in the Other Progesterone 200 Capsules Box",
          "title": "How Many Strips in the Box",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "Total units per Other Progesterone 200 Capsules box",
          "title": "Total units per box",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "Other Progesterone 200 Capsules demand period",
          "title": "demand period",
          "isRequired": true,
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
          "name": "Other Progesterone 200 Capsules Estimated demand boxes per selected period",
          "title": "Estimated demand boxes per selected period",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "the Other Progesterone 200 Capsules current or expected factory price",
          "title": "Please indicate the current or expected factory price",
          "isRequired": true,
          "placeholder": "USD"
        },
        {
          "type": "comment",
          "name": "Other Progesterone 200 CapsulesAdditional Comments or Notes",
          "title": "Additional Comments or Notes"
        }
      ]
    },
    {
      "name": "Other Progesterone 200 Pessaries Trade Name",
      "visibleIf": "{choose active ingredient Trade Name.Progesterone 200 .Trade Name 1} = 'Item 5' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 2} = 'Item 5' or {choose active ingredient Trade Name.Progesterone 200 .Trade Name 3} = 'Item 5'",
      "title": "Other Progesterone 200 Pessaries Trade Name",
      "elements": [
        {
          "type": "text",
          "name": "Write Other Progesterone 200 Pessaries Trade Name",
          "title": "Write Other Progesterone 200 Pessaries Trade Name",
          "isRequired": true,
          "placeholder": "Trade Name"
        },
        {
          "type": "slider",
          "name": "How Many Capsules in the Other Progesterone 200 Pessaries trip",
          "title": "How Many Capsules in the trip",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "How Many Strips in the Other Progesterone 200 Pessaries Box",
          "title": "How Many Strips in the Box",
          "isRequired": true
        },
        {
          "type": "slider",
          "name": "Total units per Other Progesterone 200 Pessaries box",
          "title": "Total units per box"
        },
        {
          "type": "radiogroup",
          "name": "Other Progesterone 200 Pessaries demand period",
          "title": "demand period",
          "isRequired": true,
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
          "name": "Other Progesterone 200 Pessaries Estimated demand boxes per selected period",
          "title": "Estimated demand boxes per selected period",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "the Other Progesterone 200 Pessaries current or expected factory price",
          "title": "Please indicate the current or expected factory price",
          "isRequired": true,
          "placeholder": "USD"
        },
        {
          "type": "comment",
          "name": "Other Progesterone 200 Pessaries Additional Comments or Notes",
          "title": "Additional Comments or Notes"
        }
      ]
    }
  ]
}
