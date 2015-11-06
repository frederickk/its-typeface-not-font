/**!
 * It's Typeface Not Font
 * background.js
 *
 * Ken Frederick
 * ken.frederickk@gmx.de
 *
 */


// ------------------------------------------------------------------------
//
// Methods
//
// ------------------------------------------------------------------------
function send(tabId) {
    chrome.tabs.sendMessage(tabId, {
        message: 'font?',
        id     : tabId
    });
}


// ------------------------------------------------------------------------
//
// Events
//
// ------------------------------------------------------------------------
chrome.extension.onRequest.addListener(function(request, sender) {
    if (request == 'font!') {
        chrome.pageAction.show(sender.tab.id);
    }
});

// ------------------------------------------------------------------------
chrome.tabs.onHighlighted.addListener(function(activeInfo) {
    send(0);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    send(activeInfo.tabId);
});