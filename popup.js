$(document).ready(function() {
    const checkbox = $('#checkbox');
  
    chrome.storage.sync.get('enabled', function(data) {
      checkbox.prop('checked', data.enabled);
    });
    
    checkbox.change(function() {
        chrome.storage.sync.set({ enabled: checkbox.is(':checked') }, function() {
          if (checkbox.is(':checked')) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['contentScript.js']
                });
            });
            
            
          } else {
            chrome.tabs.reload();
          }
        });
    });
});
