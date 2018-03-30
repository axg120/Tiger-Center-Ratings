/**
  * extension background page
  * @author Andy Gin
 */
chrome.webNavigation.addListener(function(details) {
  console.log("fjkdl");
  if(hostContains("tigercenter.rit.edu/tigerCenterSearch/#/results?query=") {
    chrome.pageAction.show(details.tabId);
  }
});

//var instructors = document.getElementsByClassName("cdSmallInstructor non-mobile");
