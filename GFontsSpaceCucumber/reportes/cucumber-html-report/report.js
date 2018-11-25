$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testGFontsSpace.feature");
formatter.feature({
  "line": 1,
  "name": "Prueba de GFontsSpace",
  "description": "",
  "id": "prueba-de-gfontsspace",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test number 1",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter a text \"\u003ctext\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Change the color of the text",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Change text properties"
    }
  ],
  "line": 9,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-1;",
  "rows": [
    {
      "cells": [
        "text"
      ],
      "line": 12,
      "id": "prueba-de-gfontsspace;test-number-1;;1"
    },
    {
      "cells": [
        "Yendry"
      ],
      "line": 13,
      "id": "prueba-de-gfontsspace;test-number-1;;2"
    },
    {
      "cells": [
        "Viloria"
      ],
      "line": 14,
      "id": "prueba-de-gfontsspace;test-number-1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Test number 1",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter a text \"Yendry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Change the color of the text",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Change text properties"
    }
  ],
  "line": 9,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.open_browser()"
});
formatter.result({
  "duration": 6115007696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yendry",
      "offset": 14
    }
  ],
  "location": "StepsDefinitions.enter_a_text(String)"
});
formatter.result({
  "duration": 1088337057,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.change_the_color_of_the_text()"
});
formatter.result({
  "duration": 364698757,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.close_browser()"
});
formatter.result({
  "duration": 730378454,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test number 1",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter a text \"Viloria\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Change the color of the text",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Change text properties"
    }
  ],
  "line": 9,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.open_browser()"
});
formatter.result({
  "duration": 4570639858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viloria",
      "offset": 14
    }
  ],
  "location": "StepsDefinitions.enter_a_text(String)"
});
formatter.result({
  "duration": 1690189187,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.change_the_color_of_the_text()"
});
formatter.result({
  "duration": 403365059,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.close_browser()"
});
formatter.result({
  "duration": 721201558,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Test number 2",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter a text \"\u003ctext\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Change the text size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then Change text properties"
    }
  ],
  "line": 22,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-2;",
  "rows": [
    {
      "cells": [
        "text",
        "size"
      ],
      "line": 25,
      "id": "prueba-de-gfontsspace;test-number-2;;1"
    },
    {
      "cells": [
        "Viloria",
        "20"
      ],
      "line": 26,
      "id": "prueba-de-gfontsspace;test-number-2;;2"
    },
    {
      "cells": [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "30"
      ],
      "line": 27,
      "id": "prueba-de-gfontsspace;test-number-2;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Test number 2",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter a text \"Viloria\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Change the text size \"20\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then Change text properties"
    }
  ],
  "line": 22,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.open_browser()"
});
formatter.result({
  "duration": 4283344816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viloria",
      "offset": 14
    }
  ],
  "location": "StepsDefinitions.enter_a_text(String)"
});
formatter.result({
  "duration": 763314381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.change_the_text_size(String)"
});
formatter.result({
  "duration": 265757445,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.close_browser()"
});
formatter.result({
  "duration": 703370432,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Test number 2",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter a text \"Lorem Ipsum is simply dummy text of the printing and typesetting industry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Change the text size \"30\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#Then Change text properties"
    }
  ],
  "line": 22,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.open_browser()"
});
formatter.result({
  "duration": 4342703283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "offset": 14
    }
  ],
  "location": "StepsDefinitions.enter_a_text(String)"
});
formatter.result({
  "duration": 1194676302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 22
    }
  ],
  "location": "StepsDefinitions.change_the_text_size(String)"
});
formatter.result({
  "duration": 289276673,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.close_browser()"
});
formatter.result({
  "duration": 683262170,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test number 3",
  "description": "",
  "id": "prueba-de-gfontsspace;test-number-3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@tag003"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Click on the compare button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Enter a text",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Click on the classification buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Hide the control buttons",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Show control buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.open_browser()"
});
formatter.result({
  "duration": 4493010168,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.click_on_the_compare_button()"
});
formatter.result({
  "duration": 1064685878,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.enter_a_text()"
});
formatter.result({
  "duration": 422567445,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.click_on_the_classification_buttons()"
});
formatter.result({
  "duration": 909467977,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.hide_the_control_buttons()"
});
formatter.result({
  "duration": 125940248,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.show_control_buttons()"
});
formatter.result({
  "duration": 78245197,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.close_browser()"
});
formatter.result({
  "duration": 704106038,
  "status": "passed"
});
});