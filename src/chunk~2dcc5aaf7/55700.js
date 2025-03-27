import n from "./63696.js";
export function v(e, t, r = {}) {
	const [i, setI] = n.useState();
	const [s, setS] = n.useState(false);
	const {
		strURL,
		strUserAgentIdentifier,
		strVROverlayKey,
		bOnlyAllowTrustedPopups = true,
	} = r;
	n.useEffect(() => {
		if (!e) {
			return;
		}
		const r = SteamClient.BrowserView.Create({
			parentPopupBrowserID: e.SteamClient.Browser.GetBrowserID(),
			strUserAgentIdentifier: strUserAgentIdentifier || "Valve Steam Client",
			strVROverlayKey: strVROverlayKey,
			strInitialURL: strURL,
			bOnlyAllowTrustedPopups: bOnlyAllowTrustedPopups,
		});
		r.SetName(t);
		r.on("finished-request", () => {
			setS(true);
		});
		setI(r);
		return () => {
			r.SetVisible(false);
			setI(undefined);
			SteamClient.BrowserView.Destroy(r);
		};
	}, [t, e, strUserAgentIdentifier, strVROverlayKey, bOnlyAllowTrustedPopups]);
	return [i, s];
}
