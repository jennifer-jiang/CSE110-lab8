# Lab 8 - Starter
Jennifer Jiang

Question 1) "1. Within a Github action that runs whenever code is pushed." The point of automated tests is to automatically test code that is added/pushed throughout the development process. Therefore, manually running tests or running tests after all development is completed would not be an effecient or effective choice.

Question 2) No, end to end testing test for entire user action flows from start to finish. A unit test would be more applicable for checking if a function returns the correct output. 

Question 3) No, a end to end test would be more applicable in this scenario. A unit test tests a single function while and end to end test tests for a more comprehensive flow. For this "message" feature, there are multiple steps; the user writes a message, the message gets saved, and the message gets sent to the other user. By uing and end to end test here, we can check how the different individual components interact with each other on an application/feature level.

Question 4) Yes, a unit test would make sense in testing that a message does not exceed 80 characters. The "max message length" feature is an individual part of the code that should be tested on its own before testing how this component interacts with another component.
