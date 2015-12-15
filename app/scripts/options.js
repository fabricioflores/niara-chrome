'use strict'

// Saves options to chrome.storage.sync.
;
function saveOptions() {
  var url = document.getElementById('niara_url').value;
  chrome.storage.sync.set({
    niaraUrl: url
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get(['niaraUrl'], function (items) {
    if (items.niaraUrl) {
      document.getElementById('niara_url').value = items.niaraUrl;
    }
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
//# sourceMappingURL=options.js.map
