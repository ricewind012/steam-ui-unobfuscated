/** Returns true if SteamClient exists and has the given interface */
function BSteamClientHasInterface(wnd: Window, strInterface: string) {
	return (
		!!wnd &&
		typeof wnd.SteamClient == "object" &&
		strInterface in wnd.SteamClient
	);
}

export function BSharedJSContextHasInterface(strInterface: string) {
	return BSteamClientHasInterface(window, strInterface);
}

/** Returns true if SteamClient exists and has the given method (passed as 'Interface.MethodName') */
export function BSteamClientHasMethod(
	wnd: Window,
	strInterfaceFunction: string,
) {
	if (!wnd) {
		return false;
	}
	const [strInterface, strFunction] = strInterfaceFunction.split(".", 2);
	return (
		strInterface &&
		strFunction &&
		BSteamClientHasInterface(wnd, strInterface) &&
		strFunction in wnd.SteamClient[strInterface]
	);
}

export function BSharedJSContextHasMethod(strInterface: string) {
	return BSteamClientHasMethod(window, strInterface);
}
