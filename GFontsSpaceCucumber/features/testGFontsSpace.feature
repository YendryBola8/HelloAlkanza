Feature: Prueba de GFontsSpace

@tag001
Scenario Outline: Test number 1 
	Given Open browser
	When Enter a text "<text>"
	Then Change the color of the text
	#Then Change text properties
	Then Close browser
 
 	Examples:
 	| text |
 	| Yendry |
 	| Viloria |

@tag002	
Scenario Outline: Test number 2
	Given Open browser
	When Enter a text "<text>"
	And Change the text size "<size>"
	#Then Change text properties
	Then Close browser
	
	Examples:
 	| text | size |
 	| Viloria | 20 |
 	| Lorem Ipsum is simply dummy text of the printing and typesetting industry | 30 |

@tag003	
Scenario: Test number 3
	Given Open browser
	When Click on the compare button
	When Enter a text
	Then Click on the classification buttons
	And Hide the control buttons
	Then Show control buttons
	Then Close browser