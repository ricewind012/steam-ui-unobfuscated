// Webpack module ID: 54644

/** Type guard for Elements that are HTMLElements.
 * The "is" here tells typescript to treat the parameter as an HTMLElement if this function returns true,
 * so you can do eg IsHTMLElement( thing ) && thing.parentElement
 */
export function IsHTMLElement(element: HTMLElement) {
	// Note: instanceof HTMLElement would seem to be a more general solution,
	// but I have personally witnessed HTML elements that were not instanceof HTMLElement,
	// so some other method (e.g. this one) seems necessary.
	return element != null && element.focus !== undefined;
}

export function BIsDragLeaveOutOfElement(event) {
	if (!event.clientX && !event.clientY && !event.screenX && !event.screenY) {
		// This is a drag off of a window
		return true;
	}
	if (event.relatedTarget) {
		return !BIsParentOrSelf(event.currentTarget, event.relatedTarget);
	}
	{
		// only chrome has relatedTarget, in other browsers this API is borderline nonfunctional
		const rect = event.currentTarget.getBoundingClientRect();
		return (
			(event.clientX <= rect.left ||
				event.clientX >= rect.right ||
				event.clientY <= rect.top ||
				event.clientY >= rect.bottom) &&
			(console.log(
				`${event.clientX} <= ${rect.left} || ${event.clientX} >= ${rect.right} ||\n\t\t\t\t${event.clientY} <= ${rect.top} || ${event.clientY} >= ${rect.bottom}`,
			),
			true)
		);
	}
}

/**
 * Is the passed "parent" element an ancestor of child or the node itself?
 * Useful for mouseover/mouseout and drag events, but mouseenter/mouseleave are recommended.
 * @param parent
 * @param child
 */
export function BIsParentOrSelf(parent, child) {
	while (child) {
		if (child.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
			child = child.parentNode.host;
		}
		if (child == parent) {
			return true;
		}
		child = child.parentElement;
	}
	return false;
}

/**
 * Is the passed "parent" element an ancestor of child?
 * @param parent
 * @param child
 */
export function BIsParent(parent: HTMLElement, child: HTMLElement) {
	let child = child;
	while (child) {
		child = child.parentElement;
		if (child == parent) {
			return true;
		}
	}
	return false;
}

/**
 * Checks if any element under the specified element has a selection larger than 0 characters
 */
export function BElementContainsSelection(target: HTMLElement) {
	const windowSelection = window.getSelection();
	if (!windowSelection) {
		return false;
	}
	let cRangesInTarget = 0;
	for (let i = 0; i < windowSelection.rangeCount; i++) {
		const range = windowSelection.getRangeAt(i);
		if (range.startOffset == range.endOffset) {
			continue;
		}
		if (BIsParentOrSelf(target, range.commonAncestorContainer)) {
			cRangesInTarget++;
		}
	}
	return (
		windowSelection.rangeCount > 0 &&
		windowSelection.rangeCount == cRangesInTarget
	);
}

//-----------------------------------------------------------------------------
// Purpose: I hope I get the job
//-----------------------------------------------------------------------------
export function GetDistanceFromRect(rect: DOMRect, x: number, y: number) {
	let xdist = 0;
	let ydist = 0;
	if (x < rect.left) {
		xdist = rect.left - x;
	} else if (x > rect.right) {
		xdist = x - rect.right;
	}
	if (y < rect.top) {
		ydist = rect.top - y;
	} else if (y > rect.bottom) {
		ydist = y - rect.bottom;
	}
	return Math.sqrt(xdist * xdist + ydist * ydist);
}

/**
 * The classic
 */
export function DistanceBetweenRects(rectA: DOMRect, rectB: DOMRect) {
	let xdist = 0;
	let ydist = 0;
	if (rectB.right < rectA.left) {
		xdist = rectA.left - rectB.right;
	} else if (rectB.left > rectA.right) {
		xdist = rectB.left - rectA.right;
	}
	if (rectB.bottom < rectA.top) {
		ydist = rectA.top - rectB.bottom;
	} else if (rectB.top > rectA.bottom) {
		ydist = rectB.top - rectA.bottom;
	}
	return Math.sqrt(xdist * xdist + ydist * ydist);
}

/**
 * Helper to convert client rect coordinates to screen rect.  The client rect must be inside
 * the passed-in window
 * @param win window containing the client rect
 * @param rect rect to transform
 */
export function ClientRectToScreenCoords(win: Window, rect: DOMRect) {
	// for some reason, spread operator doesn't work on rect (though typescript is sure it does).
	return {
		top: win.screenTop + rect.top,
		bottom: win.screenTop + rect.bottom,
		left: win.screenLeft + rect.left,
		right: win.screenLeft + rect.right,
	};
}

export function No(e) {
	return e.right - e.left;
}

export function SY(e) {
	return e.bottom - e.top;
}

/** @returns The total zoom of an element (the product of element CSS zoom values up the DOM). */
export function GetTotalZoom(element: HTMLElement) {
	let flZoom = 1;
	let e = element;
	while (e != null && e.tagName != "HTML") {
		const s = getComputedStyle(e);
		if (s.zoom) {
			const z = Number.parseFloat(s.zoom);
			if (!isNaN(z)) {
				flZoom *= z;
			}
		}
		e = e.parentElement;
	}
	return flZoom;
}

/** Returns the window targetted by the given event. */
export function GetOwningWindowForEvent(event) {
	let owningWindow: Window;
	if (event && IsHTMLElement(event.currentTarget)) {
		owningWindow = event.currentTarget.ownerDocument.defaultView;
	}
	return owningWindow;
}

/**
 * Return the window that holds the given element
 */
export function GetOwningWindowForElement(element: HTMLElement) {
	let owningWindow: Window;
	if (element) {
		owningWindow = element.ownerDocument.defaultView;
	}
	return owningWindow;
}

export function ew(win: Window) {
	return win.navigator.clipboard.readText();
}

/**
 * Put the passed text on the user's clipboard
 * @param strText
 */
export function CopyTextToClipboard(strText: string) {
	// on Steam Deck, this runs in the iframe for friendsui, so we need
	// to ask the parent document to do it, since it has focus
	let activeDocument = window.document;
	try {
		activeDocument = window.top.document;
	} catch (e) {}
	const textarea = activeDocument.createElement("textarea");
	textarea.textContent = strText;
	textarea.style.position = "fixed";
	activeDocument.body.appendChild(textarea);
	textarea.select();
	try {
		activeDocument.execCommand("copy");
	} catch (ex) {
		console.warn("Copy to clipboard failed.", ex);
	} finally {
		activeDocument.body.removeChild(textarea);
	}
}

/**
 * Put the passed URL on the user's clipboard. Trims off anything gross that
 * we don't want in the clipboard.
 * @param strURL
 */
export function CopyURLToClipboard(strURL: string) {
	const k_strSteamOpenPrefix = "steam://openurl/";
	if (strURL.startsWith(k_strSteamOpenPrefix)) {
		strURL = strURL.slice(16);
	}
	CopyTextToClipboard(strURL);
}

/**
 * Sees if there is a file present in a OnPaste event.
 * Caller should preventDefault on the event if a file is returned.
 * @param event an on paste event.
 * @return {File} The file present in the paste event, or null if the event was some other kind of paste like text
 */
export function GetFileFromPasteEvent(event: ClipboardEvent) {
	if (!event) {
		return null;
	}
	// Certain applications, many of which being Microsoft Office products,
	// send multiple flavors of text, including an image of the text. We
	// need to pay attention to the ClipboardData's types array to figure
	// out if we actually want to upload an image here, or if there's
	// associated text version to share.
	// If there are no files, we can't upload an image here, so we're done.
	if (event.clipboardData.files.length == 0) {
		return null;
	}
	// Look through the list of types to see if there's a text variant that
	// the browser can handle for us. We might only want to actually care
	// about 'text' and 'text/plain', but I'm not sure of any examples
	// where we have a 'text/html' or something with a 'Files' that doesn't
	// also have a 'text/plain', where we'd want to use the image instead
	// of the rich text.
	if (
		event.clipboardData.types.some(
			(s) => (s == "text" || s.startsWith("text/")) && s !== "text/html",
		)
	) {
		return null;
	} else {
		// Alright, we've filtered out all of the text clipboards, and now this
		// should just be the images, so start the uploading process.
		return event.clipboardData.files[0];
	}
}

/**
 * Returns true if element is fullscreen in browser
 */
export function BElementFullscreen(element) {
	const doc = element.ownerDocument;
	return (
		doc.fullscreen ||
		doc.webkitIsFullScreen ||
		doc.mozFullScreen ||
		doc.msFullscreenElement
	);
}

/**
 * Tries to open element in fullscreen
 */
export function RequestFullscreen(element, videoElement?) {
	const e = element;
	if (e.requestFullscreen) {
		e.requestFullscreen();
	} else if (e.webkitRequestFullscreen) {
		e.webkitRequestFullscreen();
	} else if (videoElement && videoElement.webkitSetPresentationMode) {
		videoElement.webkitSetPresentationMode("fullscreen");
	} else if (e.mozRequestFullScreen) {
		e.mozRequestFullScreen();
	} else if (e.msRequestFullscreen) {
		e.msRequestFullscreen();
	}
}

/**
 * Tries to open element in fullscreen
 */
export function CancelFullscreen(element) {
	const t = element.ownerDocument;
	if (t.cancelFullscreen) {
		t.cancelFullscreen();
	} else if (t.webkitCancelFullScreen) {
		t.webkitCancelFullScreen();
	} else if (t.mozCancelFullScreen) {
		t.mozCancelFullScreen();
	} else if (t.msExitFullscreen) {
		t.msExitFullscreen();
	}
}

export function ToggleFullscreen(element: HTMLElement) {
	if (BElementFullscreen(element)) {
		CancelFullscreen(element);
	} else {
		RequestFullscreen(element);
	}
}

/** Type guard for html input elements. */
export function IsHTMLInputElement(htmlElement: HTMLElement) {
	return htmlElement.nodeName === "INPUT";
}

export function IsHTMLElementTextInput(
	strTagName: string,
	strInputType: string,
) {
	switch (strTagName) {
		case "TEXTAREA":
			return true;
		case "INPUT":
			switch (strInputType) {
				case "date":
				case "datetime-local":
				case "datetime":
				case "email":
				case "month":
				case "number":
				case "password":
				case "search":
				case "tel":
				case "text":
				case "time":
				case "url":
				case "week":
					return true;
				default:
					return false;
			}
		default:
			return false;
	}
}

export function BlobToFile(blob, fileName) {
	const b = blob;
	// A Blob() is almost a File() - it's just missing the two properties below which we will add
	b.lastModifiedDate = new Date();
	b.name = fileName || Date.now().toString();
	// Cast to a File() type
	return blob;
}

export function _f(e, t) {
	let n = e?.parentElement;
	while (n) {
		if (IsHTMLElement(n)) {
			if (!t || t == "x") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowX == "scroll" ||
					e.overflowX == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
			if (!t || t == "y") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowY == "scroll" ||
					e.overflowY == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
		}
		n = n.parentElement;
	}
	if (IsHTMLElement(n)) {
		return n;
	} else {
		return null;
	}
}

export function $e(e, t) {
	const n = [];
	let r = e;
	while ((r = _f(r, t))) {
		n.push(r);
	}
	return n;
}

/**
 * Walks up the hierarchy searching for an element that matches the predicate, or undefined if none found.
 */
export function FindAncestrally(element, predicate) {
	let el = element;
	while (el) {
		if (predicate(el)) {
			return el;
		}
		el = el.parentElement;
	}
}

/**
 * Returns a map of url -> link for all style sheets in the given document
 */
export function GetStyleSheetLinks() {
	return (function (doc) {
		const hrefs = {};
		doc.querySelectorAll('link[rel="stylesheet"]').forEach((node) => {
			hrefs[node.href] = node;
		});
		return hrefs;
	})(document);
}

/**
 * Adds any missing stylesheets in the provided map to the specified window
 */
export function AddMissingStylesheetsToWindow(win: Window, styleSheetLinks) {
	AddStylesheetsToDocument(win.document, styleSheetLinks, true);
}

/**
 * Adds any missing stylesheets in the provided map to the specified document, optionally removing an existing stylesheet links that are not in the passed set.
 * @returns array of links added
 */
export function AddStylesheetsToDocument(
	doc: Document,
	styleSheetLinks,
	bRemoveExistingLinks: boolean,
) {
	const objNeededLinks = Object.assign({}, styleSheetLinks);
	const elHead = doc.getElementsByTagName("head")[0];
	const rgLinks = elHead.getElementsByTagName("link");
	const nLinkCount = rgLinks.length;
	for (let i = 0; i < nLinkCount; ++i) {
		const link = rgLinks[i];
		if (objNeededLinks[link.href]) {
			delete objNeededLinks[link.href];
		} else if (bRemoveExistingLinks) {
			link.parentNode?.removeChild(link);
		}
	}
	const rgAddedLinks = [];
	for (const strHref in objNeededLinks) {
		const elLink = objNeededLinks[strHref];
		const elNewLink = doc.createElement("link");
		for (
			let iAttribute = 0;
			iAttribute < elLink.attributes.length;
			iAttribute++
		) {
			const attribute = elLink.attributes.item(iAttribute);
			elNewLink.setAttribute(attribute.name, attribute.value);
		}
		rgAddedLinks.push(elNewLink);
	}
	// add to top
	elHead.prepend(...rgAddedLinks);
	return rgAddedLinks;
}

export function BA(element: HTMLElement, node: HTMLElement) {
	let el = element ?? null;
	while (el && !el.contains(node)) {
		el = el.parentElement;
	}
	return el;
}
