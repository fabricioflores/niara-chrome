'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

var searchOnNiara;
searchOnNiara = function (word) {
  var query = word.selectionText;
  console.log(query);
  //we need to send the query as a param to an exposed url
  var endpointUrl;
  chrome.storage.sync.get(['niaraUrl'], function (items) {
    if (items.niaraUrl) {
      endpointUrl = items.niaraUrl;
    }
  });
  chrome.tabs.create({ url: endpointUrl });
};
chrome.contextMenus.create({
  title: 'Search "%s" in Niara',
  contexts: ['selection'],
  onclick: searchOnNiara
});
//# sourceMappingURL=background.js.map
