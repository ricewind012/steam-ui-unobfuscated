var n = require("./78057.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require("./10606.js");
var l = require("./13869.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require(/*webcrack:missing*/ "./54644.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require("./29597.js");
var p = A;
export function F(e, t, r, n) {
	(0, l.pg)(
		a.createElement(h, {
			app: t,
			onClose: n,
			bShowDontShowCheckbox: r,
		}),
		e,
	);
}
const h = (0, i.PA)((e) => {
	const { app: t, bShowDontShowCheckbox: r, onClose: i, closeModal: l } = e;
	const A = (0, n.T)(t.appid);
	const g = A?.bSupportsCDKeyCopyToClipboard;
	const [h, C] = a.useState(false);
	const [_, f] = a.useState("");
	const b = a.useCallback(
		(e) => {
			if (g) {
				u.OG(e);
				f(e);
				setTimeout(() => f(""), 2000);
			}
		},
		[g],
	);
	const y = a.useCallback(() => {
		if (i) {
			i(h);
		}
		if (l) {
			l();
		}
	}, [h, i, l]);
	a.useEffect(() => {
		SteamClient.Apps.RequestLegacyCDKeysForApp(t.appid);
	}, [t.appid]);
	if (A) {
		return a.createElement(
			o.eV,
			{
				className: p.CDKeysDialog,
				onCancel: y,
			},
			a.createElement(s.Y9, null, (0, c.we)("#GameAction_ShowCDKeys")),
			a.createElement(
				s.nB,
				null,
				a.createElement(
					s.nB,
					null,
					a.createElement(
						"div",
						{
							className: p.Description,
						},
						(0, c.we)(
							g
								? "#GameAction_ShowCDKeys_Desc"
								: "#GameAction_ShowCDKeys_Desc_NoCopy",
							t.display_name,
						),
					),
					a.createElement(
						"div",
						{
							className: p.KeyList,
						},
						A.vecLegacyCDKeys.map((e, t) => {
							if (e.eResult != 1 || !e.strKey || !e.strName) {
								return null;
							}
							const r = _ == e.strKey;
							return a.createElement(
								m.Z,
								{
									focusable: true,
									key: t,
									className: p.CDKeyOption,
									onActivate: () => b(e.strKey),
								},
								a.createElement(
									"div",
									{
										className: p.KeyName,
									},
									e.strName,
								),
								a.createElement(
									"div",
									{
										className: (0, d.A)(p.KeyValue, r && p.CopyAnimation),
									},
									r ? (0, c.we)("#GameAction_ShowCDKeys_Copied") : e.strKey,
								),
							);
						}),
					),
					r &&
						a.createElement(s.Yh, {
							controlled: true,
							checked: h,
							onChange: C,
							label: (0, c.we)("#GameAction_ShowCDKeys_DontShowAgain"),
						}),
				),
				a.createElement(
					s.$n,
					{
						onClick: y,
					},
					(0, c.we)("#Generic_Close"),
				),
			),
		);
	} else {
		return null;
	}
});
