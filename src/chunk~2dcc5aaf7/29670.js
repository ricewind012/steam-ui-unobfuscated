var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./42318.js");
var a = require(/*webcrack:missing*/ "./46108.js");
var s = require("./63367.js");
var o = require("./10606.js");
var l = require("./64608.js");
var c = require("./92445.js");
var m = c;
var u = require(/*webcrack:missing*/ "./11131.js");
var d = require("./35488.js");
var A = require(/*webcrack:missing*/ "./26853.js");
var _p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./18869.js");
var h = require(/*webcrack:missing*/ "./43691.js");
export function V(e) {
	const t = e && e[0] == '"' ? e.slice(1, -1) : e || "";
	return SteamClient.System.OpenFileDialog({
		strTitle: (0, a.we)("#AddNonSteam_PickAppTitle"),
		rgFilters: _(),
		strInitialFile: t,
	});
}
function _() {
	switch (h.TS.PLATFORM) {
		case "windows":
			return [
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_Exe_Windows"),
					rFilePatterns: ["*.exe"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*.*"],
				},
			];
		case "macos":
			return [
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_Exe_MacOS"),
					rFilePatterns: ["*.app"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
		case "linux":
			return [
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_Exe_Linux"),
					rFilePatterns: ["*.application", "*.exe", "*.sh", "*.AppImage"],
					bUseAsDefault: true,
				},
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
		default:
			return [
				{
					strFileTypeName: (0, a.we)("#AddNonSteam_Filter_All"),
					rFilePatterns: ["*"],
				},
			];
	}
}
export const p = (0, i.Nr)(function () {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState();
	n.useEffect(
		() =>
			s.Dt.RegisterForRunSteamURL(7, "open/addnonsteamgame", (e, r) => {
				t(true);
			}).unregister,
		[],
	);
	const c = n.useCallback(() => {
		t(false);
	}, [t]);
	if (!e) {
		return null;
	}
	const u = (0, a.we)("#AddNonSteam_Title");
	return n.createElement(
		o.hM,
		{
			strTitle: u,
			onDismiss: c,
			resizable: true,
			popupWidth: 700,
			popupHeight: 650,
			minWidth: 600,
			minHeight: 400,
			refPopup: i,
			className: m.AddNonSteamGameDialog,
		},
		n.createElement(
			l.Y9,
			{
				className: m.DialogHeader,
			},
			u,
		),
		n.createElement(y, null),
	);
});
var b;
function y(e) {
	const [t, r] = n.useState();
	const i = (0, u.R7)();
	const [s, o] = n.useState(b.Name);
	const [c, d] = n.useState("");
	const A = (0, g.br)();
	n.useEffect(() => {
		SteamClient.Apps?.ScanForInstalledNonSteamApps().then(r);
	}, [r]);
	const [h, _] = n.useState(new Set());
	const f = (e, t, r) => {
		if (t) {
			if (!h.has(e.strCmdline) && (h.add(e.strCmdline), _(new Set(h)), r)) {
				const t = i.ownerWindow.document.getElementById(e.strCmdline);
				if (t) {
					t.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		} else if (h.delete(e.strCmdline)) {
			_(new Set(h));
		}
	};
	const y = () => {
		if (h.size == 0) {
			return;
		}
		let e = false;
		for (let r of h) {
			const n = t.find((e) => e.strCmdline == r);
			if (n) {
				SteamClient.Apps?.AddShortcut(
					n.strAppName,
					n.strExePath,
					n.strArguments,
					n.strCmdline,
				).then((t) => {
					if (!e) {
						e = true;
						A.App(t);
					}
				});
			} else {
				console.log("Could not find app in our list", r);
			}
		}
		i.ownerWindow.close();
	};
	let v;
	let I;
	switch (s) {
		case b.Name:
			v = "up";
			break;
		case b.NameReverse:
			v = "down";
			break;
		case b.Path:
			I = "up";
			break;
		case b.PathReverse:
			I = "down";
	}
	let E = [];
	const M = c.toLocaleLowerCase();
	for (let e of t ?? []) {
		if (
			!(c.length > 0) ||
			!!e.strAppName.toLocaleLowerCase().includes(M) ||
			!!e.strExePath.toLocaleLowerCase().includes(M)
		) {
			E.push(e);
		}
	}
	E.sort((e, t) =>
		(function (e, t, r) {
			switch (e) {
				case b.Name:
					return t.strAppName.localeCompare(r.strAppName);
				case b.NameReverse:
					return r.strAppName.localeCompare(t.strAppName);
				case b.Path:
					return t.strExePath.localeCompare(r.strExePath);
				case b.PathReverse:
					return r.strExePath.localeCompare(t.strExePath);
			}
			return 0;
		})(s, e, t),
	);
	return n.createElement(
		l.lV,
		{
			onSubmit: y,
		},
		n.createElement(
			"div",
			{
				className: (0, _p.A)(m.AddNonSteamGameDialogContent, m.Desktop),
			},
			n.createElement(
				l.a3,
				{
					className: m.DialogBodyText,
				},
				(0, a.we)("#AddNonSteam_Desc"),
			),
			n.createElement(l.pd, {
				onChange: (e) => d(e.currentTarget.value),
				placeholder: (0, a.we)("#AddNonSteam_Filter_Placeholder"),
				bShowClearAction: true,
				value: c,
			}),
			n.createElement(
				"div",
				{
					className: m.Header,
				},
				n.createElement("div", {
					className: m.Checkbox,
				}),
				n.createElement("div", {
					className: m.Icon,
				}),
				n.createElement(
					"div",
					{
						className: m.AppName,
						onClick: () => {
							if (s == b.Name) {
								o(b.NameReverse);
							} else {
								o(b.Name);
							}
						},
					},
					(0, a.we)("#AddNonSteam_Program"),
					n.createElement(w, {
						dir: v,
					}),
				),
				n.createElement(
					"div",
					{
						className: m.ExePath,
						onClick: () => {
							if (s == b.Path) {
								o(b.PathReverse);
							} else {
								o(b.Path);
							}
						},
					},
					(0, a.we)("#AddNonSteam_Location"),
					n.createElement(w, {
						dir: I,
					}),
				),
			),
			n.createElement(
				"div",
				{
					className: m.GameList,
				},
				!t && n.createElement(S, null),
				E?.map((e) =>
					n.createElement(B, {
						key: e.strCmdline,
						app: e,
						bIsSelected: h.has(e.strCmdline),
						setSelected: (t) => f(e, t),
					}),
				),
			),
			n.createElement(
				"div",
				{
					className: m.Footer,
				},
				n.createElement(
					l.$n,
					{
						onClick: async () => {
							d("");
							const e = await V();
							if (!e) {
								return;
							}
							const n = t.find((t) => t.strExePath == e);
							if (n) {
								f(n, true, true);
							} else {
								let n = await SteamClient.Apps.GetShortcutDataForPath(e);
								if (typeof n == "number") {
									console.error("Failed to get shortcut data for app", e);
									return;
								}
								r([...t, n]);
								f(n, true, true);
							}
						},
						disabled: t === undefined,
						className: m.BrowseButton,
					},
					(0, a.we)("#AddNonSteam_Browse"),
				),
				n.createElement("div", {
					className: m.Spacer,
				}),
				n.createElement(
					l.jn,
					{
						disabled: h.size == 0,
						onClick: y,
					},
					(0, a.we)("#AddNonSteam_AddSelected"),
				),
				n.createElement(
					l.$n,
					{
						onClick: i.ownerWindow.close,
					},
					(0, a.we)("#Button_Cancel"),
				),
			),
		),
	);
}
function S(e) {
	return n.createElement(
		"div",
		{
			className: m.LoadingContainer,
		},
		n.createElement(
			"div",
			null,
			n.createElement(A.t, {
				size: "medium",
				position: "center",
				string: (0, a.we)("#AddNonSteam_Loading"),
			}),
		),
	);
}
function w(e) {
	if (e.dir) {
		return n.createElement(
			"div",
			{
				className: m.SortArrowContainer,
			},
			n.createElement(d.Carat, {
				className: m.Arrow,
				direction: e.dir,
			}),
		);
	} else {
		return null;
	}
}
function B(e) {
	const { app: t, bIsSelected: r, setSelected: i } = e;
	return n.createElement(
		"div",
		{
			className: m.GameRow,
			id: t.strCmdline,
			onClick: () => i(!r),
		},
		n.createElement(
			"div",
			{
				className: m.Checkbox,
			},
			n.createElement(l.Yh, {
				checked: r,
				onChange: i,
			}),
		),
		n.createElement(
			"div",
			{
				className: m.IconContainer,
			},
			!!t.strIconDataBase64 &&
				n.createElement("img", {
					src: "data:image/png;base64, " + t.strIconDataBase64,
				}),
		),
		n.createElement(
			"div",
			{
				className: m.AppName,
			},
			t.strAppName,
		),
		n.createElement(
			"div",
			{
				className: m.ExePath,
			},
			t.strCmdline,
		),
	);
}
(function (e) {
	e[(e.Name = 0)] = "Name";
	e[(e.NameReverse = 1)] = "NameReverse";
	e[(e.Path = 2)] = "Path";
	e[(e.PathReverse = 3)] = "PathReverse";
})((b ||= {}));
