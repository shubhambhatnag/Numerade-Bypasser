chrome.action.onClicked.addListener(tab => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    var siteURL = tab.url;
    const url = new URL(siteURL);
    var host = url.host;
    if (host == "www.numerade.com") {
      console.log("base site")
      chrome.tabs.sendMessage(tab.id, {
      type: "numerade",
      qURL: url,
    });  
    
    }

    if (host == "cdn.numerade.com") {
      console.log("cdn site")
    }
    

    
  });  
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, finalURL } = obj;
  if (type === "openURL") {
    chrome.tabs.create({url: finalURL});
  } else if (type === "nuke") {
    chrome.tabs.remove(sender.tab.id);
  }
});