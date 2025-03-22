var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./16251.js");
var a = require(/*webcrack:missing*/ "./85243.js");
var s = require("./34790.js");
var o = s;
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require(/*webcrack:missing*/ "./31084.js");
var m = require(/*webcrack:missing*/ "./88750.js");
var u = require("./97023.js");
var d = require("./96593.js");
var A = require("./55489.js");
var p = require("./61175.js");
var g = require("./10606.js");
var h = require("./13869.js");
var C = require("./64608.js");
var _ = require("./51095.js");
var _f = require(/*webcrack:missing*/ "./88696.js");
var b = require("./76356.js");
var y = require("./46422.js");
require(/*webcrack:missing*/ "./43691.js");
function S(e, t) {
	if (!t) {
		return;
	}
	const r = (0, _.Yz)(JSON.stringify(t));
	return `Apps\\${e}\\DefaultLaunchOption\\${(r < 0 ? 4294967295 + r + 1 : r).toString(16)}`;
}
export async function lZ(e, t) {
	const r = d.tw.GetAppOverviewByAppID(e.appid);
	console.log("showing launch options", e.appid, r.display_name);
	if (y.oy.ActiveWindowInstance?.BrowserWindow?.ConfigContext.IN_VR) {
		const r = t.filter(
			(e) =>
				e.eType == u.oI.k_ELaunchOptionType_OpenVR ||
				e.eType == u.oI.k_ELaunchOptionType_OpenVROverlay,
		);
		const n = t.filter((e) => e.eType == u.oI.k_ELaunchOptionType_OpenXR);
		const a = t.filter((e) => e.eType == u.oI.k_ELaunchOptionType_OculusVR);
		if (r.length === 1) {
			e.continue(r[0].nIndex);
			return;
		}
		if (n.length === 1) {
			e.continue(n[0].nIndex);
			return;
		}
		if (a.length === 1) {
			if (
				(await SteamClient?.OpenVR?.DeviceProperties?.GetStringDeviceProperty?.(
					"/user/head",
					i.fD.ActualTrackingSystemName_String,
				)) === "oculus"
			) {
				e.continue(a[0].nIndex);
				return;
			}
		}
	}
	const a = await v(e.appid, t);
	if (a == -1 || e.alwaysShowDialog) {
		if (p.n6.IsGamepadUIWindowActive()) {
			(0, c.lX)(
				n.createElement(B, {
					...e,
					launchOptions: t,
				}),
				y.oy.ActiveWindowInstance?.BrowserWindow?.document.documentElement,
				{
					onCancel: e.onCancel,
				},
			);
		} else {
			(0, h.mK)(
				n.createElement(M, {
					...e,
					launchOptions: t,
				}),
				e.ownerWindow || document.defaultView,
				{
					strTitle: r.display_name,
					bForcePopOut: true,
					popupWidth: 476,
					popupHeight: 430,
					fnOnClose: e.onCancel,
				},
			);
		}
	} else {
		e.continue(a);
	}
}
function B(e) {
	const t = n.useRef(undefined);
	const r = n.useCallback(() => {
		t.current.Hide();
	}, [t]);
	const {
		ready: i,
		selection: s,
		setSelection: o,
		onPlay: c,
		onCancel: u,
	} = E(e, r);
	const { launchOptions: p } = e;
	(0, A.Bx)(a.I5.Opaque, "LaunchOptionsMenu");
	if (!i) {
		return null;
	}
	const g = p.map((e) =>
		n.createElement(
			m.Vs,
			{
				key: "option-" + e.nIndex,
				label: (0, l.we)(e.strDescription, e.strGameName),
			},
			n.createElement(
				m.kt,
				{
					key: "option-forever",
					disabled: false,
					onSelected: () => c(e.nIndex, true),
				},
				(0, l.we)("#LaunchOptionsDialog_Forever"),
			),
			n.createElement(
				m.kt,
				{
					key: "option-once",
					disabled: false,
					onSelected: () => c(e.nIndex, false),
				},
				(0, l.we)("#LaunchOptionsDialog_JustOnce"),
			),
		),
	);
	const h = d.tw.GetAppOverviewByAppID(e.appid);
	return n.createElement(
		m.tz,
		{
			refInstance: t,
			label: (0, l.we)("#LaunchOptionsDialog_MakeSelection", h.display_name),
			onCancel: u,
		},
		g,
	);
}
async function v(e, t) {
	const r = S(e, t);
	const n = new _f.A();
	let i = await n.GetString(r);
	if (i?.length) {
		const e = parseInt(i);
		if (e >= t.length) {
			n.RemoveObject(r);
			return -1;
		} else {
			return e;
		}
	}
	return -1;
}
export function f(e, t) {
	const r = n.useMemo(() => S(e, t), [e, t]);
	const [i, a] = n.useState();
	const s = n.useMemo(() => new _f.A(), []);
	n.useEffect(() => {
		(async () => {
			a(t ? await v(e, t) : undefined);
		})();
	}, [r, t, e, s]);
	const o = n.useCallback(
		(e) => {
			a(e);
			s.StoreString(r, e.toString());
		},
		[r, s],
	);
	const l = n.useCallback(() => {
		a(-1);
		s.RemoveObject(r);
	}, [r, s]);
	return n.useMemo(
		() => ({
			value: i,
			set: o,
			clear: l,
		}),
		[i, o, l],
	);
}
function E(e, t) {
	const { appid: r, launchOptions: i } = e;
	const a = e.continue;
	const s = f(r, i);
	const [o, l] = n.useState(0);
	const [c, m] = n.useState(false);
	const [u, d] = n.useState(false);
	(0, b.MH)(e.gameActionID, {
		OnGameActionEnd: t,
	});
	n.useEffect(() => {
		if (s.value !== undefined) {
			if (!u) {
				if (s.value == -1) {
					l(0);
				} else if (s.value >= i.length || s.value < 0) {
					s.clear();
					l(0);
					m(true);
				} else {
					l(s.value);
					m(true);
				}
				d(true);
			}
		}
	}, [s, l, m, u, d, t, a, i]);
	return {
		ready: u,
		selection: o,
		setSelection: l,
		rememberAnswer: c,
		setRememberAnswer: m,
		onPlay: (r, n) => {
			const i = r !== undefined ? r : o;
			const a = n === undefined ? c : n;
			if (i !== undefined) {
				e.continue(i);
				t();
				if (a) {
					s.set(i);
				} else {
					s.clear();
				}
			}
		},
		onCancel: () => {
			e.onCancel();
			t();
		},
	};
}
function M(e) {
	const {
		ready: t,
		selection: r,
		setSelection: i,
		rememberAnswer: a,
		setRememberAnswer: s,
		onPlay: c,
		onCancel: m,
	} = E(e, e.closeModal);
	const { launchOptions: u } = e;
	if (!t) {
		return null;
	}
	const A = d.tw.GetAppOverviewByAppID(e.appid);
	const p = e.launchOptions.map((e) => {
		const t = () => i(e.nIndex);
		const a = e.nIndex.toString();
		return n.createElement(
			"div",
			{
				className: o.ListItem,
				key: a,
				onClick: t,
			},
			n.createElement("input", {
				type: "radio",
				name: "LaunchOption",
				id: a,
				value: e.nIndex,
				checked: e.nIndex == r,
				onChange: t,
			}),
			n.createElement(
				"label",
				{
					htmlFor: a,
				},
				(0, l.we)(e.strDescription, e.strGameName),
			),
		);
	});
	return n.createElement(
		g.x_,
		{
			onEscKeypress: e.onCancel,
		},
		n.createElement(
			"div",
			{
				className: o.LaunchOptionDialog,
			},
			n.createElement(
				C.JU,
				{
					className: o.AppNameHeader,
				},
				A.display_name,
			),
			n.createElement(
				"div",
				{
					className: o.OptionList,
				},
				n.createElement(
					C.JU,
					{
						className: o.ListHeader,
					},
					(0, l.we)("#LaunchOptionsDialog_SelectHeader", u.length),
				),
				n.createElement(
					"div",
					{
						className: o.ListContainer,
					},
					p,
				),
				n.createElement(
					"div",
					{
						className: o.CheckboxRow,
					},
					n.createElement(C.Yh, {
						label: (0, l.we)("#LaunchOptionsDialog_Remember"),
						checked: a,
						onChange: s,
					}),
				),
				n.createElement(
					C.JU,
					{
						className: o.SeeProperties,
					},
					(0, l.we)("#LaunchOptionsDialog_SeeProperties"),
				),
			),
			n.createElement(
				"div",
				{
					className: o.ButtonContainer,
				},
				n.createElement(
					"div",
					{
						className: o.PlayButton,
						onClick: () => c(),
					},
					(0, l.we)("#GameAction_Play"),
				),
				n.createElement(
					"div",
					{
						className: o.CancelButton,
						onClick: m,
					},
					(0, l.we)("#GameAction_Cancel"),
				),
			),
		),
	);
}
