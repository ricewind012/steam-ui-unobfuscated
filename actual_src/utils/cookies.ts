// Webpack module ID: 9626

/**
 * Reads a cookie value
 */
export function GetCookie(strCookieName: string) {
	if (!BCanAccessDocument() || !window.document.cookie) {
		return null;
	}
	const rgMatches = document.cookie.match(
		"(^|; )" + strCookieName + "=([^;]*)",
	);
	if (rgMatches && rgMatches[2]) {
		return decodeURIComponent(rgMatches[2]);
	} else {
		return null;
	}
}

/**
 * Writes a cookie value
 */
export function SetCookie(
	strCookieName: string,
	strValue: string,
	nExpiresInDays: number,
	strPath: string,
) {
	if (!BCanAccessDocument()) {
		return;
	}
	strPath ||= "/";
	let strDate = "";
	if (nExpiresInDays !== undefined && nExpiresInDays) {
		const dtExpires = new Date();
		dtExpires.setTime(dtExpires.getTime() + nExpiresInDays * 86400000);
		strDate = "; expires=" + dtExpires.toUTCString();
	}
	document.cookie =
		encodeURIComponent(strCookieName) +
		"=" +
		encodeURIComponent(strValue) +
		strDate +
		";path=" +
		strPath;
}

/**
 * Checks for access to cookies
 *
 * Currently this plays a role for React Native, where there is no document to access.
 */
export function BCanAccessDocument() {
	return !!window.document;
}
