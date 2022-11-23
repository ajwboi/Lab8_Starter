# Lab 8 - Starter

1) I would put tests within a github action, so that they run automatically every time code is changed without a programmer having to manually run tests. This guarantees that tests will always run no matter how small a code change may be, as small code changes can still lead to unexpected effects. 

2) No, you would use a unit test to check a specific function, not an end to end test. An end to end test is supposed to represent end user behavior, not test specific functions.

3) No, because sending a message also entails handling and receiving said message. We can't unit test on both ends, so an end to end test would be more appropriate here.

4) Yes, you would use a unit test as testing the max length is a property that can easily be checked.