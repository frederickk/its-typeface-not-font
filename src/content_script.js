/**!
 * It's Typeface Not Font
 * content_script.js
 *
 * Ken Frederick
 * ken.frederickk@gmx.de
 *
 */


// ------------------------------------------------------------------------
//
// Properties
//
// ------------------------------------------------------------------------
var lastTabId;



// ------------------------------------------------------------------------
//
// Methods
//
// ------------------------------------------------------------------------
(function() {
    walk(document.body);
})();


// ------------------------------------------------------------------------
// function taken from here:
// http://is.gd/mwZp7E
function walk(node) {
    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

// ------------------------------------------------------------------------
function handleText(textNode) {
    var v = textNode.nodeValue;

    if (v.indexOf('font') > -1 ||
        v.indexOf('Font') > -1) {
        chrome.extension.sendRequest('font!');
    }

    v = v.replace(/\bFont\b/g, 'Typeface');
    v = v.replace(/\bfont\b/g, 'typeface');
    v = v.replace(/\bFonts\b/g, 'Typefaces');
    v = v.replace(/\bfonts\b/g, 'typefaces');

    textNode.nodeValue = v;
};



// ------------------------------------------------------------------------
chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.message === 'font?') {
        walk(document.body);
    }
});



