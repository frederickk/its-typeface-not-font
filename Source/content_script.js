walk(document.body);

function walk(node) {
	// function taken from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
};

function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bFont\b/g, "Typeface");
	v = v.replace(/\bfont\b/g, "typeface");
	v = v.replace(/\bFonts\b/g, "Typefaces");
	v = v.replace(/\bfonts\b/g, "typefaces");

	textNode.nodeValue = v;
};


