let color = '#3aa757';
/*

chrome.runtime.onInstalled.addListener(() => {}
  Fired when the extension is first installed,
  when the extension is updated to a new version, and when Chrome is updated to a new version.
chrome.storage
  is a chrome API to store, retrieve, and track changes to user data.
chrome.scripting
  It is an API to inject JavaScript and CSS into websites.
*/
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
