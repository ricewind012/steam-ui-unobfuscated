var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./42318.js");
var a = require("./10606.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require("./96593.js");
export const u = (0, i.Nr)(function () {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState();
	const [c, m] = n.useState();
	const u = (0, l.Co)(r?.appid);
	const d = n.useCallback((e, r, n) => {
		t(true);
		i({
			appid: e,
			eResult: r,
			errorCode: n,
		});
	}, []);
	const A = n.useCallback(() => {
		t(false);
	}, [t]);
	n.useEffect(
		() => SteamClient.Apps.RegisterForDRMFailureResponse(d).unregister,
		[d],
	);
	if (!e || !u) {
		return null;
	}
	const p = (0, o.we)("#Game_Start_Problem_Title");
	const g = (0, o.we)("#Game_Start_Problem_Text", u.display_name, r.errorCode);
	return n.createElement(
		a.hM,
		{
			strTitle: p,
			onDismiss: A,
			popupWidth: 500,
			popupHeight: 250,
			refPopup: m,
			modal: true,
		},
		n.createElement(s.Y9, null, p),
		n.createElement(s.a3, null, g),
		n.createElement(
			s.wi,
			null,
			n.createElement(
				s.$n,
				{
					onClick: A,
				},
				(0, o.we)("#Button_Close"),
			),
		),
	);
});
export function T(e) {
	const [t, r] = n.useState(false);
	const [i, s] = n.useState();
	const c = (0, l.Co)(i?.appid);
	const m = n.useCallback((e, t, n) => {
		r(true);
		s({
			appid: e,
			eResult: t,
			errorCode: n,
		});
	}, []);
	const u = n.useCallback(() => {
		r(false);
	}, [r]);
	n.useEffect(
		() => SteamClient.Apps.RegisterForDRMFailureResponse(m).unregister,
		[m],
	);
	if (!t || !c) {
		return null;
	}
	const d = (0, o.we)("#Game_Start_Problem_Title");
	const A = (0, o.we)("#Game_Start_Problem_Text", c.display_name, i.errorCode);
	return n.createElement(
		a.EN,
		{
			active: true,
		},
		n.createElement(a.KG, {
			onOK: u,
			strTitle: d,
			strDescription: A,
		}),
	);
}
