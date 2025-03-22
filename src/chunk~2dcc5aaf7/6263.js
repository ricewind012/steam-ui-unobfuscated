var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./10606.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./27987.js");
var l = o;
var c = require("./89748.js");
var m = require("./24274.js");
var u = require("./77347.js");
var d = require("./18057.js");
var A = require("./5640.js");
export function P3(e) {
	const [t, r] = n.useState();
	const [i, o] = n.useState();
	const [l, c] = n.useState();
	const m = n.useCallback(() => {
		o(false);
	}, []);
	const u = n.useCallback((e, t, r) => {
		if (t == "PlaytimeExhausted") {
			o(true);
			c(r);
		}
	}, []);
	n.useEffect(
		() => SteamClient.Messaging.RegisterForMessages("Parental", u).unregister,
		[u],
	);
	if (i && l) {
		return n.createElement(
			a.hM,
			{
				strTitle: (0, s.we)("#FamilyView_RequestPlaytime_Title"),
				onDismiss: m,
				popupWidth: 500,
				popupHeight: 350,
				refPopup: r,
				modal: true,
			},
			n.createElement(db, {
				onClose: m,
				strDetails: l,
			}),
		);
	} else {
		return null;
	}
}
export function db(e) {
	const { onClose: t, strDetails: r } = e;
	const a = new Date().getDay();
	const o = (0, c.QR)();
	const p = (0, c.iZ)();
	const g = (0, A.L2)();
	const h = (0, u.Id)() && g;
	const [C, _] = n.useState(n.createElement(n.Fragment, null, "\xA0"));
	const f = n.useCallback(
		(e) => {
			if (e.result === 84) {
				t();
			} else {
				_((0, s.we)("#FamilyView_RequestPlaytime_GenericError", e.result));
			}
		},
		[t],
	);
	const b =
		g.temporary_playtime_restrictions !== undefined &&
		g.temporary_playtime_restrictions.rtime_expires >
			new Date().getTime() / 1000
			? g.temporary_playtime_restrictions.restrictions
			: g.playtime_restrictions?.playtime_days[a];
	const y = (0, m.hn)(p.strSteamID, b, t, f);
	const S = (0, d.Qt)("steam://open/goonline");
	const w = n.useCallback(() => {
		_(n.createElement(n.Fragment, null, "\xA0"));
		y.mutate();
	}, [y]);
	let B;
	switch (r) {
		case "minutes":
			B = (0, s.we)("#AppLaunchError_PlaytimeLimitExceeded_Minutes");
			break;
		case "window":
			B = (0, s.we)("#AppLaunchError_PlaytimeLimitExceeded_Window");
			break;
		case "manual":
			B = (0, s.we)("#FamilyView_RequestPlaytime_LimitUpcoming");
	}
	let v = w;
	let I = (0, s.we)("#FamilyView_RequestPlaytime_Request");
	if (o) {
		v = S;
		I = (0, s.we)("#AppDetails_GoOnline");
	} else if (!h) {
		v = t;
		I = (0, s.we)("#Button_Close");
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.Y9, null, (0, s.we)("#FamilyView_RequestPlaytime_Title")),
		n.createElement(
			i.f3,
			{
				onCancelButton: t,
			},
			n.createElement(
				i.a3,
				null,
				n.createElement(
					"div",
					{
						className: l.ErrorText,
					},
					C,
				),
				n.createElement("div", null, B),
				n.createElement(
					"div",
					null,
					(0, s.we)(
						h
							? "#FamilyView_RequestPlaytime_Description"
							: "#FamilyView_RequestPlaytime_Description_Offline",
					),
				),
			),
			n.createElement(
				i.wi,
				null,
				(h || o) &&
					n.createElement(i.CB, {
						onOK: v,
						strOKText: I,
						onCancel: t,
					}),
				!h &&
					!o &&
					n.createElement(
						i.jn,
						{
							onClick: v,
						},
						I,
					),
			),
		),
	);
}
export function _N(e, t) {
	SteamClient.Messaging.PostMessage("Parental", "PlaytimeExhausted", t);
}
