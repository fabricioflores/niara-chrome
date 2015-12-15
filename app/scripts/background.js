'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

var searchOnNiara;
var buildUrl;

buildUrl = function (url, query) {
  var buildedUrl = '';

  if (url.lastIndexOf('/') !== url.length - 1) {
    buildedUrl = buildedUrl + '/';
  }

  if (url.indexOf('http') < 0) {
    buildedUrl = 'https://' + url;
  }

  buildedUrl = buildedUrl + '/#/integration/source:chrome-extension+entity:' + query;
  return buildedUrl;
};

searchOnNiara = function (word) {
  var query = word.selectionText;
  var endpointUrl;

  chrome.storage.sync.get(['niaraUrl'], function (items) {
    if (items.niaraUrl) {
      endpointUrl = buildUrl(items.niaraUrl, query);
      chrome.tabs.create({ url: endpointUrl });
    } else {
      chrome.runtime.openOptionsPage();
    }
  });
};
chrome.contextMenus.create({
  title: 'Search "%s" in Niara',
  contexts: ['selection'],
  onclick: searchOnNiara
});
//# sourceMappingURL=background.js.map
