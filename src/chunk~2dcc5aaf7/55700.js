var n = require(/*webcrack:missing*/ "./63696.js");
export function v(e, t, r = {}) {
	const [i, a] = n.useState();
	const [s, o] = n.useState(false);
	const {
		strURL: l,
		strUserAgentIdentifier: c,
		strVROverlayKey: m,
		bOnlyAllowTrustedPopups: u = true,
	} = r;
	n.useEffect(() => {
		if (!e) {
			return;
		}
		const r = SteamClient.BrowserView.Create({
			parentPopupBrowserID: e.SteamClient.Browser.GetBrowserID(),
			strUserAgentIdentifier: c || "Valve Steam Client",
			strVROverlayKey: m,
			strInitialURL: l,
			bOnlyAllowTrustedPopups: u,
		});
		r.SetName(t);
		r.on("finished-request", () => {
			o(true);
		});
		a(r);
		return () => {
			r.SetVisible(false);
			a(undefined);
			SteamClient.BrowserView.Destroy(r);
		};
	}, [t, e, c, m, u]);
	return [i, s];
}
