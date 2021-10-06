let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
  chrome.topSites.get(console.log);
});

//chrome.storage.sync.get('defaultnewtab', storage => { if (storage.defaultnewtab) { chrome.tabs.update({ url: 'chrome-search://local-ntp/local-ntp.html' }); } });