/**
  * extension background page
  * @author Andy Gin
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(tab.url.includes("https://tigercenter.rit.edu/tigerCenterSearch/#/results?query=")) {
    chrome.pageAction.show(tabId);
  }
});
