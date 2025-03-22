var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./31084.js");
var a = require(/*webcrack:missing*/ "./98995.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require("./71729.js");
var l = require("./41596.js");
var c = require(/*webcrack:missing*/ "./50376.js");
var m = require(/*webcrack:missing*/ "./55007.js");
var u = require("./64608.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require("./51095.js");
var p = require(/*webcrack:missing*/ "./69164.js");
var g = require(/*webcrack:missing*/ "./4690.js");
var h = require(/*webcrack:missing*/ "./88750.js");
var C = require("./36934.js");
var _ = require("./91720.js");
var f = require("./34428.js");
var b = require("./3499.js");
var y = require("./34792.js");
var S = require("./18869.js");
var w = require(/*webcrack:missing*/ "./90242.js");
var B = require("./34461.js");
var v = require("./39730.js");
var I = require("./35488.js");
var E = require("./68438.js");
var M = require("./26094.js");
var T = require("./10905.js");
var R = require("./25633.js");
var k = require(/*webcrack:missing*/ "./736.js");
var D = require(/*webcrack:missing*/ "./54644.js");
var N = require("./83247.js");
var F = require("./1385.js");
var G = require(/*webcrack:missing*/ "./11131.js");
var O = require(/*webcrack:missing*/ "./72476.js");
var P = require("./27541.js");
var L = require("./661.js");
var z = require("./3874.js");
function x(e) {
	const { items: t, summoningElement: r, showConfirmation: i } = e;
	const a = (function (e, t) {
		const {
			copyToClipboard: r,
			saveToFile: i,
			uploadScreenshots: a,
		} = (function (e, t) {
			const { ownerWindow: r } = (0, G.R7)();
			const n = async (t) => {
				const r = [];
				for (const n of e) {
					switch (n.type) {
						case "screenshot":
							r.push(await W(n, t));
							break;
						case "clip":
							r.push(await U(n, t));
							break;
						default:
							console.error(
								`Cannot convert media type "${n.type}" into file path.`,
							);
					}
				}
				return r;
			};
			const i = async (e) => {
				const r = await n();
				SteamClient.System.CopyFilesToClipboard(r.filter(Boolean));
				t(e, (0, d.we)("#Browser_URLCopied"));
			};
			const a = async (e) => {
				const t = (0, D.uX)(e) ?? window;
				const r = await (async function (e) {
					if (!(0, k.Fj)(e, "System.OpenFileDialog")) {
						e = window;
					}
					return e.SteamClient.System.OpenFileDialog({
						strTitle: (0, d.we)("#MediaManager_SaveDialogTitle"),
						bChooseDirectory: true,
					});
				})(t);
				return n(r);
			};
			const s = async (t) => {
				const n = e.filter(
					(e) =>
						e.type === "screenshot" ||
						(console.error(
							"UploadScreenshots called with non-screenshot items.",
						),
						false),
				);
				(0, F.OF)(n, r);
			};
			return {
				copyToClipboard: i,
				saveToFile: a,
				uploadScreenshots: s,
			};
		})(e, t);
		const {
			bAllScreenshots: s,
			bAllClips: o,
			bMixture: l,
		} = (0, n.useMemo)(() => {
			let t = true;
			let r = true;
			e.forEach(({ type: e }) => {
				if (e === "clip") {
					t = false;
				}
				if (e === "screenshot") {
					r = false;
				}
			});
			return {
				bAllClips: r,
				bAllScreenshots: t,
				bMixture: !r && !t,
			};
		}, [e]);
		const m = (0, O.Y2)();
		return [
			s &&
				!m && {
					key: "upload",
					onSelected: a,
					icon: n.createElement(I.Globe, null),
					label: (0, d.we)("#ShareSheet_ShareOnSteam"),
				},
			{
				key: "clipboard",
				onSelected: r,
				icon: n.createElement(I.Copy, null),
				label: (0, d.we)("#MediaManager_MultiSelect_CopyToClipboard"),
			},
			o && {
				key: "export",
				onSelected: i,
				icon: n.createElement(I.Video, null),
				label: (0, d.we)("#MediaManager_MultiSelect_Save"),
			},
			s && {
				key: "export",
				onSelected: i,
				icon: n.createElement(N.pw, null),
				label: (0, d.we)("#MediaManager_MultiSelect_Save_Screenshots"),
			},
			l && {
				key: "export",
				onSelected: i,
				icon: n.createElement(c.dI9, null),
				label: (0, d.we)("#MediaManager_MultiSelect_Save_Mixture"),
			},
		].filter(Boolean);
	})(t, i);
	return n.createElement(
		v.zu,
		{
			chatSendForbiddenMessage: {
				strMessage: (0, d.we)("#ShareMultipleToChatNotSupported"),
				bHeader: true,
			},
			summoningElement: r,
		},
		n.createElement(v.t$, {
			options: a,
		}),
	);
}
async function U(e, t) {
	let r;
	if (t) {
		r = `${t}/${e.summary.name ? ((0, v.kM))(e.summary.name) : e.id}.mp4`;
	}
	const n = (0, E.Q1)((0, R.e3)(e.summary.clip_id), {
		strFilePath: r,
	});
	const i = await n((e) => console.warn(e));
	console.warn("Done!");
	return i.strExportPath;
}
async function W(e, t) {
	if (e.local) {
		const r = await SteamClient.Screenshots.GetLocalScreenshotPath(
			e.local.strGameID,
			e.local.hHandle,
		);
		if (!t) {
			return r;
		}
		const n = `${t}/${(0, T.gO)(r)}`;
		SteamClient.System.CopyFile(r, n);
		return n;
	}
	let r = "";
	if (t) {
		r = `${t}/${e.remote.filename}`;
	} else {
		const t = e.remote.filename.lastIndexOf(".");
		const n = e.remote.filename.slice(t + 1);
		r = await SteamClient.System.CreateTempPath(n);
	}
	if (await (0, M.Ct)(e, r)) {
		return r;
	} else {
		return null;
	}
}
var V = require("./93214.js");
function H(e) {
	const { disabled: t, rgSelected: r, onShareFinished: a } = e;
	const s = r.some((e) => e?.type === "recording");
	const o = (function () {
		const e = (0, B.yZ)();
		const t = (0, P.z)();
		const r = (0, M.jE)();
		const a = (0, L.f)();
		return n.useCallback(
			(s, o) => {
				const l = s.currentTarget;
				if (o.length === 1) {
					switch (o[0].type) {
						case "clip":
							return t((0, R.e3)(o[0].id), l);
						case "screenshot":
							return r(o[0], l);
					}
				}
				(0, i.lX)(
					n.createElement(
						z.IP,
						{
							...a,
						},
						n.createElement(
							B.Zz,
							{
								showConfirmationOverride: e,
							},
							n.createElement(x, {
								key: Date.now(),
								items: o,
								summoningElement: l,
								showConfirmation: e,
							}),
						),
					),
					l,
					{
						bOverlapHorizontal: true,
					},
				);
			},
			[e, t, r, a],
		);
	})();
	return n.createElement(
		Y,
		null,
		n.createElement(K0, {
			icon: "upload",
			disabled: t || s,
			onClick: (e) => o(e, r),
			title: (0, d.we)(
				s
					? "#MediaManager_RecordingShareNotSupported"
					: "#MediaManager_ShareTooltip",
			),
		}),
	);
}
function j(e) {
	const { rgSelected: t, fnDismiss: r, onDeleteFinished: i } = e;
	const { fnDeleteClip: a } = (0, _.Gb)();
	const { mutate: o } = (0, b.Ab)();
	const l = (0, y.VI)("g_background_mode")[0] === 1;
	const c = (0, S.br)();
	const m = () => c.Settings("GameRecording");
	let u = 0;
	let A = false;
	let g = false;
	let h = false;
	t.forEach((e) => {
		switch (e.type) {
			case "screenshot":
				u += Number(e.local?.strSize ?? 0);
				break;
			case "clip":
				A = true;
				const t = (0, _.XA)(e.id);
				if (t) {
					u += Number(t.file_size);
				}
				break;
			case "recording":
				g = true;
				h = h || e.summary.is_active;
		}
	});
	const C = n.createElement(
		q,
		null,
		(0, d.Yp)("#MediaManager_DeleteDialog_Explainer", t.length),
	);
	let B = n.createElement(
		n.Fragment,
		null,
		C,
		!A &&
			u != 0 &&
			!isNaN(u) &&
			n.createElement(
				Q,
				{
					tone: "muted",
				},
				" ",
				(0, d.we)("#MediaManager_DeleteDialog_SizeInfo", (0, f.dm)(u)),
			),
	);
	if (h) {
		B = n.createElement(
			n.Fragment,
			null,
			n.createElement(
				q,
				{
					error: true,
				},
				(0, d.we)("#MediaManager_DeleteDialog_RecordingInProgress"),
			),
			n.createElement(
				Q,
				null,
				(0, d.oW)(
					"#MediaManager_DeleteDialog_RecordingInProgress_Subtext",
					n.createElement(w.Ii, {
						onClick: m,
						className: V.Link,
					}),
				),
			),
		);
	} else if (g && l) {
		B = n.createElement(
			n.Fragment,
			null,
			C,
			n.createElement(
				Q,
				{
					tone: "warning",
				},
				(0, d.oW)(
					"#MediaManager_DeleteDialog_RecordingRecreation",
					n.createElement(w.Ii, {
						onClick: m,
						className: V.Link,
					}),
				),
			),
		);
	}
	const v = () => true;
	return n.createElement(
		p.Z,
		{
			className: (0, s.A)(V.MultiSelectActionDialogContainer, V.DeleteDialog),
			autoFocus: true,
			retainFocus: true,
			onMoveLeft: v,
			onMoveRight: v,
			onMoveUp: v,
			onMoveDown: v,
			onCancel: r,
		},
		n.createElement("div", {
			className: V.DialogCarrot,
		}),
		n.createElement(
			"div",
			{
				className: V.DialogInner,
			},
			n.createElement(
				"div",
				{
					className: V.Title,
				},
				" ",
				(0, d.Yp)("#MediaManager_DeleteDialog_Title", t.length),
			),
			B,
			n.createElement(
				p.Z,
				{
					className: V.ButtonRow,
				},
				n.createElement(
					$n,
					{
						className: V.ActionButton,
						onClick: async () => {
							let e = [];
							let n = [];
							t.forEach((t) => {
								switch (t.type) {
									case "screenshot":
										n.push(t);
										break;
									case "clip":
										a(t.id);
										break;
									case "recording":
										e.push(t.summary.game_id);
								}
							});
							o({
								screenshots: n,
								location: "all",
							});
							(0, _.f5)(e);
							r();
							if (i) {
								i();
							}
						},
						disabled: h,
					},
					(0, d.we)("#MediaManager_DeleteDialog_Delete"),
				),
				n.createElement(
					$n,
					{
						className: V.CancelButton,
						onClick: r,
					},
					(0, d.we)("#MediaManager_DeleteDialog_Cancel"),
				),
			),
		),
	);
}
function q(e) {
	const { children: t, error: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, s.A)(V.ExplainerText, r && V.Error),
		},
		t,
	);
}
function Q(e) {
	const { children: t, tone: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, s.A)(
				V.ExplainerSubtext,
				r === "muted" && V.Muted,
				r === "warning" && V.Warning,
			),
		},
		t,
	);
}
function Z(e) {
	const { disabled: t } = e;
	const [r, i] = n.useState(false);
	return n.createElement(
		Y,
		null,
		r &&
			n.createElement(j, {
				...e,
				fnDismiss: () => i(false),
			}),
		n.createElement(K0, {
			icon: "trashcan",
			disabled: t,
			onClick: () => i(!r),
			title: (0, d.we)("#MediaManager_Delete"),
		}),
	);
}
function Y(e) {
	return n.createElement("div", {
		className: V.ButtonContainer,
		...e,
	});
}
var K = require("./67429.js");
var X = require("./96593.js");
var J = require("./96555.js");
var $ = require("./32676.js");
var ee = require(/*webcrack:missing*/ "./52451.js");
var te = require("./13869.js");
var re = require("./10606.js");
var ne = require("./43014.js");
var ie = require("./53622.js");
var ae = require("./96680.js");
var se = require("./43152.js");
var oe = require("./14629.js");
var le = require("./2773.js");
var ce = require("./49508.js");
var me = require("./18057.js");
var ue = require(/*webcrack:missing*/ "./49519.js");
var de = require("./4069.js");
const Ae = Number.parseInt(l.itemBorderWidth);
const pe = Number.parseInt(o.listGutterWidth);
const ge = Number.parseInt(o.minItemWidth);
const he = Number.parseInt(o.minItemWidthDeck);
const Ce = Number.parseInt(o.gridGapPx);
const _e = Number.parseInt(o.desktopTopPadding);
function fe(e) {
	return (
		e.listSource.type === b.sF.listSource.type &&
		e.mediaType === b.sF.mediaType &&
		e.uploadStatus === b.sF.uploadStatus
	);
}
export function Kz(e) {
	const { children: t, className: r } = e;
	return n.createElement(
		"div",
		{
			className: r,
			style: ye(e),
		},
		t,
	);
}
function ye(e) {
	const t = n.Children.count(e.children);
	const r = {
		display: "flex",
		flexDirection: e.direction,
		minHeight: 0,
	};
	if (e.direction === "row" && e.wrap) {
		r.flexWrap = "wrap";
	}
	if (e.grow) {
		r.flex = "1";
	}
	if (t) {
		r.gap = `${typeof e.space == "number" ? e.space : Se[e.space]}px`;
	}
	return r;
}
const Se = {
	md: 12,
	lg: 24,
};
export function f0(e) {
	const [t, r] = (0, n.useState)({});
	const [i, a] = (0, n.useState)();
	const s = n.useCallback(() => r({}), []);
	return {
		selected: t,
		setSelected: r,
		onSelect: ({ handle: n, index: s, bShiftKey: o, bCtrlKey: l }) => {
			if (o || l) {
				if (o) {
					const n = l
						? {
								...t,
							}
						: {};
					const a = Math.min(s, i);
					const o = Math.max(s, i);
					for (let t = a; t <= o; t++) {
						n[e[t].id] = true;
					}
					r(n);
				} else {
					const e = {
						...t,
					};
					if (e[n]) {
						delete e[n];
					} else {
						e[n] = true;
					}
					r(e);
					a(s);
				}
			} else {
				r({
					[n]: true,
				});
				a(s);
			}
		},
		onSelectAll: () =>
			r(
				e.reduce((e, t) => {
					e[t.id] = true;
					return e;
				}, {}),
			),
		onDeselectAll: s,
	};
}
export function Pc(e) {
	const {
		sortedItems: t,
		numTotal: r,
		selected: a,
		onDeselectAll: l,
		onSelectAll: c,
		bLoadingInitialData: m,
		bFetchingNextPage: u,
		bHasNextPage: A,
		onRequestLoad: g,
		renderItem: h,
		className: C,
		selectModeActive: _,
		numFiltered: f,
		onSelectModeActiveChange: y,
		filter: S,
		onFilterChange: w,
		nInitialScroll: B,
		childFocusDisabled: v,
	} = e;
	const I = t.length > 0;
	const E = fe(S);
	const M = (0, b.NN)(S.listSource);
	const T = S.phaseID;
	const [R, k] = (0, n.useState)({
		gameid: M,
		phaseID: T,
	});
	(0, n.useEffect)(
		() =>
			k({
				gameid: M,
				phaseID: T,
			}),
		[M, T],
	);
	let D = m;
	const N = (0, O.hf)();
	const F = (0, G.R7)();
	const P = (e) =>
		w({
			...S,
			mediaType: e,
		});
	const L = (0, ee.SK)(2000, [t]);
	if (m && t.length > 0 && L) {
		D = false;
	}
	const z = N ? _e : 0;
	const { itemSizeInfo: x, refForResizeObserver: U } = (function () {
		const e = (0, J.l5)();
		const t = (0, O.hf)();
		const r = !(0, O.TL)() || e || t ? ge : he;
		const i = (0, O.TL)() && !e ? 1.6 : 16 / 9;
		const [a, s] = (0, n.useState)({
			itemsPerRow: 3,
			width: r,
			height: r / i,
		});
		const o = n.useCallback(
			(e) => {
				const t = e.target.ownerDocument.defaultView.innerWidth;
				const n = Math.floor((t + Ce - pe * 2) / (r + Ce + Ae * 2));
				const a = (t - pe * 2 - Ce * (n - 1)) / n;
				s({
					itemsPerRow: n,
					width: a,
					height: a / i,
				});
			},
			[s, r, i],
		);
		const l = (0, ee.wY)(o);
		return {
			itemSizeInfo: a,
			refForResizeObserver: l,
		};
	})();
	const W =
		(0, O.Y2)() || !(0, de.BGameRecordingFeatureEnabled)()
			? "#MediaManager_Dialog_Header_China"
			: "#MediaManager_Dialog_Header";
	const V =
		N &&
		n.createElement(
			"div",
			{
				className: o.StickyHeader,
				style: {
					"--stickyHeaderHeight": `${z}px`,
				},
			},
			n.createElement(
				"div",
				{
					className: o.TopListTitle,
				},
				(0, d.we)(W),
			),
			n.createElement(ve, {
				sortedItems: t,
				selected: a,
				filter: S,
				onFilterChange: w,
				selectModeActive: _,
				onSelectModeActiveChange: y,
				onDeselectAll: l,
				onSelectAll: c,
				phaseFilter: R,
				onPhaseFilterChange: k,
			}),
		);
	const H =
		S.listSource.type === b.sF.listSource.type
			? "#MediaManager_AppFilter_Footer"
			: "#MediaManager_AppFilterChange_Footer";
	return n.createElement(
		p.Z,
		{
			className: (0, s.A)(o.TopList, C),
			"flow-children": "column",
			childFocusDisabled: v,
			ref: U,
			onOptionsButton: () => {
				(0, te.pg)(
					n.createElement(Te, {
						mediaTypeProps: {
							value: S.mediaType,
							onChange: P,
						},
					}),
					F.ownerWindow,
				);
				return true;
			},
			onOptionsActionDescription: (0, d.we)("#MediaManager_FilterModal_Footer"),
			onSecondaryButton: (e) => {
				(0, i.lX)(
					n.createElement(Fe, {
						value: S.listSource,
						onChange: (e) =>
							w({
								...S,
								listSource: e,
							}),
					}),
					e,
				);
			},
			onSecondaryActionDescription: (0, d.we)(H),
			retainFocus: !N,
		},
		n.createElement(
			Pe.Provider,
			{
				value: x,
			},
			V,
			n.createElement(
				ue.dO,
				null,
				n.createElement(
					ue.qh,
					{
						path: me.BV.Media.Grid(),
					},
					n.createElement(
						n.Fragment,
						null,
						n.createElement(it, {
							numFiltered: f,
							filter: S,
							haveContent: !D && I,
						}),
						!D &&
							!I &&
							E &&
							n.createElement($.NoContentAvailable, {
								topPadding: z,
							}),
						!D &&
							!I &&
							!E &&
							n.createElement($.AllContentFilteredOut, {
								topPadding: z,
							}),
						!D &&
							I &&
							n.createElement(xe, {
								items: t,
								selected: a,
								onRequestLoad: g,
								numTotal: r,
								renderItem: h,
								nInitialScroll: B,
								bLoadingInitialData: m,
								bFetchingNextPage: u,
								bHasNextPage: A,
								topPadding: z,
							}),
						D &&
							n.createElement(Oe, {
								topPadding: z,
							}),
					),
				),
				n.createElement(
					ue.qh,
					{
						path: me.BV.Media.List(),
					},
					n.createElement(ce.UJ, {
						topPadding: z,
						filter: R,
					}),
				),
			),
			N &&
				n.createElement("div", {
					className: o.DesktopBottomGlass,
				}),
		),
	);
}
function ve(e) {
	return n.createElement(
		ue.dO,
		null,
		n.createElement(
			ue.qh,
			{
				path: me.BV.Media.Grid(),
			},
			n.createElement(Ie, {
				...e,
			}),
		),
		n.createElement(
			ue.qh,
			{
				path: me.BV.Media.List(),
			},
			n.createElement(ce.M4, {
				...e,
			}),
		),
	);
}
function Ie(e) {
	const {
		filter: t,
		selectModeActive: r,
		selected: i,
		sortedItems: a,
		onSelectModeActiveChange: s,
		onSelectAll: o,
		onDeselectAll: l,
		onFilterChange: c,
	} = e;
	const m = Object.keys(i);
	const u = m.length;
	const A = !r || m.length === 0;
	const p = m.map((e) => a.find((t) => t.id === e)).filter(Boolean);
	const g = (0, de.BGameRecordingFeatureEnabled)();
	return n.createElement(fC, {
		...e,
		left: n.createElement(
			n.Fragment,
			null,
			g &&
				n.createElement(Re, {
					value: t.mediaType,
					onChange: (e) =>
						c({
							...t,
							mediaType: e,
						}),
				}),
			t.listSource.type === "phase" &&
				n.createElement(Ee, {
					phase: t.listSource.phase,
					onRemove: () =>
						c({
							...t,
							listSource: {
								type: "app",
								gameid: t.listSource.phase.game_id,
							},
						}),
				}),
		),
		right: n.createElement(
			n.Fragment,
			null,
			n.createElement(H, {
				rgSelected: p,
				disabled: A,
				onShareFinished: () => s(false),
			}),
			n.createElement(Z, {
				rgSelected: p,
				disabled: A,
				onDeleteFinished: () => s(false),
			}),
			r &&
				u < 1 &&
				n.createElement(
					$n,
					{
						onClick: o,
					},
					(0, d.we)("#ScreenshotUploader_SelectAll"),
				),
			r &&
				u >= 1 &&
				n.createElement(
					$n,
					{
						onClick: l,
					},
					(0, d.we)("#ScreenshotUploader_DeselectAll"),
				),
			n.createElement(
				$n,
				{
					onClick: () => s(!r),
				},
				(0, d.we)(
					r
						? "#MediaManager_UploadDialog_Cancel"
						: "#MediaManager_EnterSelectMode",
				),
			),
		),
	});
}
function Ee(e) {
	const { phase: t, onRemove: r } = e;
	const { strDateTime: i } = (0, le.$P)(t);
	return n.createElement(
		o6,
		null,
		n.createElement(
			"div",
			{
				className: o.PhaseFilterTag,
			},
			i,
			n.createElement(
				"div",
				{
					className: o.Close,
					onClick: r,
				},
				n.createElement(I.Close, null),
			),
		),
	);
}
export function fC(e) {
	const { left: t, right: r, filter: i, onFilterChange: a } = e;
	const s = (0, S.br)();
	const l = (0, de.BGameRecordingFeatureEnabled)();
	const c =
		l && !(0, O.Y2)()
			? () => s.Settings("GameRecording")
			: () => s.Settings("InGame");
	const m = !!(0, ue.W5)({
		path: me.BV.Media.Grid(),
	});
	const u = (0, ue.W6)();
	const A = l;
	return n.createElement(
		p.Z,
		{
			className: o.TopListButtonRow,
			"flow-children": "row",
			childFocusDisabled: true,
		},
		n.createElement(
			"div",
			{
				className: o.TopListButtonGroup,
			},
			A &&
				n.createElement(K0, {
					icon: "grid",
					onClick: () => u.replace(me.BV.Media.Grid()),
					title: (0, d.we)("#MediaManager_GridView_Tooltip"),
					active: m,
				}),
			A &&
				n.createElement(K0, {
					icon: "list",
					onClick: () => u.replace(me.BV.Media.List()),
					title: (0, d.we)("#MediaManager_ListView_Tooltip"),
					active: !m,
				}),
			n.createElement(De, {
				value: i.listSource,
				onChange: (e) =>
					a({
						...i,
						listSource: e,
					}),
			}),
			t,
		),
		n.createElement(
			"div",
			{
				className: o.TopListButtonGroup,
			},
			r,
			n.createElement(K0, {
				icon: "gear",
				onClick: c,
				title: (0, d.we)("#ScreenshotUploader_Settings"),
			}),
		),
	);
}
function Te(e) {
	const { mediaTypeProps: t, closeModal: r } = e;
	return n.createElement(
		re.o0,
		{
			strTitle: (0, d.we)("#MediaManager_FilterModal_Title"),
			bAlertDialog: true,
			onOK: () => {
				if (r) {
					r();
				}
			},
		},
		n.createElement(
			p.Z,
			null,
			n.createElement(Re, {
				...t,
			}),
		),
	);
}
function Re(e) {
	const { value: t, onChange: r } = e;
	const i = [
		{
			data: "all",
			label: (0, d.we)("#MediaManager_MediaType_All"),
		},
		{
			data: "clip",
			label: (0, d.we)("#MediaManager_MediaType_Clip"),
		},
		{
			data: "screenshot",
			label: (0, d.we)("#MediaManager_MediaType_Screenshot"),
		},
		{
			data: "recording",
			label: (0, d.we)("#MediaManager_MediaType_Recording"),
		},
	];
	const a = [
		{
			data: "all",
			label: (0, d.we)("#MediaManager_MediaType_All"),
		},
		{
			data: "screenshot",
			label: (0, d.we)("#MediaManager_MediaType_Screenshot"),
		},
	];
	const s = (0, O.Y2)() ? a : i;
	const o = s.find((e) => e.data == t) || s[0];
	const [l, c] = n.useState(o.data);
	const m = (e) => {
		c(e);
		r(e);
	};
	if ((0, O.Qn)()) {
		return n.createElement(
			"div",
			null,
			n.createElement(
				u.iK,
				null,
				(0, d.we)("#MediaManager_FilterModal_MediaType"),
			),
			n.createElement(
				u.zW,
				{
					value: l,
					onChange: m,
				},
				s.map((e) =>
					n.createElement(
						u.a,
						{
							key: e.data,
							value: e.data,
						},
						e.label,
						" ",
					),
				),
			),
		);
	} else {
		return n.createElement(G3, {
			options: s,
			value: o,
			onChange: (e) => r(e.data),
			renderLabel: (e) => e?.label,
			grow: true,
		});
	}
}
function ke(e) {
	const t = (0, b.Re)();
	const r = [];
	t.forEach((e, t) => {
		const n = new K.VS(t);
		if (n.BIsSteamApp()) {
			r.push(n?.GetInternalAppID() ?? 0);
		}
	});
	const i = (0, C.gx)(r);
	const { rgOptions: a, selectedOption: s } = (0, n.useMemo)(() => {
		let r = 0;
		let n = [];
		t?.forEach((e, t) => {
			let a = e;
			if (!!new K.VS(t).BIsShortcut() && (!e || e.length == 0)) {
				a = (0, d.we)("#ScreenshotManager_UnknownApp", r++);
			}
			let s =
				(function (e, t) {
					const r = new K.VS(t);
					const n = e.find((e) => e.appid == r.GetInternalAppID())?.name;
					const i = X.tw.GetAppOverviewByGameID(
						r.ConvertTo64BitString(),
					)?.display_name;
					return n ?? i;
				})(i, t) ?? a;
			n.push({
				data: {
					type: "app",
					gameid: t,
				},
				label: s,
			});
		});
		n?.sort((e, t) => (0, A.lY)(e.label || "", t.label || ""));
		const a = [
			{
				data: {
					type: "recents",
				},
				label: (0, d.we)("#MediaManager_AllApps_Dropdown"),
			},
			...n,
		];
		const s = (0, b.NN)(e);
		const o = s
			? n.find((e) => e.data?.gameid == s)?.label
			: (0, d.we)("#MediaManager_AllApps_Dropdown");
		return {
			rgOptions: a,
			selectedOption: {
				data: e,
				label: o,
			},
		};
	}, [t, i, e]);
	return {
		rgOptions: a,
		selectedOption: s,
	};
}
function De(e) {
	const { value: t, onChange: r } = e;
	const { rgOptions: i, selectedOption: a } = ke(t);
	return n.createElement(G3, {
		options: i,
		value: a,
		onChange: (e) => r(e.data),
		renderLabel: (e) => e?.label,
		searchFilter: Ne,
		grow: true,
	});
}
function Ne(e, t) {
	if (!t.trim()) {
		return e;
	}
	const r = e
		.map((e) => ({
			value: e,
			score: (0, oe.Nm)(t.toLocaleLowerCase(), [
				(e.label || "").toLocaleLowerCase(),
			]),
		}))
		.filter(({ score: e, value: t }) => t.data.type !== "recents" && e > 0.25);
	r.sort((e, t) => t.score - e.score);
	return r.map(({ value: e }) => e);
}
function Fe(e) {
	const { value: t, onChange: r } = e;
	const [i, a] = (0, n.useState)("");
	const { rgOptions: l, selectedOption: c } = ke(t);
	const m = n.useRef(undefined);
	const u = (0, ae.$2)();
	const A = (0, se.u6)();
	const p = (0, n.useMemo)(() => Ne(l, i), [l, i]);
	n.useEffect(
		() => () => u.VirtualKeyboardManager.SetVirtualKeyboardHidden(),
		[u],
	);
	const g = n.createElement("div", {
		style: {
			height: "100vh",
		},
	});
	return n.createElement(
		h.tz,
		{
			footer: g,
			refInstance: m,
		},
		n.createElement(
			"div",
			{
				className: (0, s.A)(o.NoMatches, p.length == 0 && o.Visible),
			},
			(0, d.we)("#ClipMananger_Search_NoMatches"),
		),
		n.createElement(Ge, {
			onChange: a,
			onEnter: () => {
				if (r) {
					r(p[0].data);
				}
				u.VirtualKeyboardManager.SetVirtualKeyboardHidden();
				m.current.Hide();
			},
			value: i,
		}),
		p.map((e, t) =>
			n.createElement(
				h.kt,
				{
					key: t,
					onSelected: r ? () => r(e.data) : undefined,
					preferredFocus: t == 0,
					className: o.Option,
					selected: c.label == e.label,
				},
				((e, t) =>
					n.createElement(
						"div",
						{
							className: o.FilterContextOption,
						},
						n.createElement(
							"span",
							{
								className: o.FilterContextOptionLabel,
							},
							e?.label,
						),
						n.createElement(ie.W, {
							button: ne.g4.RightTrigger,
							className: (0, s.A)(o.SelectItemGlyph, t && o.Visible),
						}),
					))(e, t == 0 && A),
			),
		),
	);
}
function Ge(e) {
	const { value: t, onChange: r, onEnter: i } = e;
	return n.createElement(
		p.Z,
		{
			className: o.SearchBar,
		},
		n.createElement(
			"div",
			{
				className: o.InputContainer,
			},
			n.createElement(u.pd, {
				spellCheck: false,
				onChange: (e) => r(e.target.value),
				onEnterKeyPress: i,
				value: t,
				className: o.Input,
				placeholder: (0, d.we)("#ClipMananger_Search_Placeholder"),
				bShowClearAction: true,
			}),
		),
	);
}
function Oe(e) {
	const { topPadding: t } = e;
	const [r] = (0, n.useState)(() => new Array(200).fill(0));
	const { itemsPerRow: i } = Le();
	const a = {
		"--stickyHeaderHeight": `${NB(t)}px`,
	};
	const l = {
		"--itemsPerRow": i,
	};
	return n.createElement(
		"div",
		{
			className: (0, s.A)(o.ScreenshotList, o.Loading),
			style: a,
		},
		n.createElement(
			"div",
			{
				className: (0, s.A)(o.ScreenshotListInner, o.Loading),
				style: l,
			},
			r.map((e, t) =>
				n.createElement(Ve, {
					key: t,
				}),
			),
		),
	);
}
const Pe = n.createContext({});
const Le = () => n.useContext(Pe);
export function NB(e) {
	if ((0, ae.$2)().IsDesktopOverlayWindow()) {
		return e - 34 + Ce;
	} else {
		return e + Ce;
	}
}
function xe(e) {
	const {
		items: t,
		selected: r,
		onRequestLoad: i,
		numTotal: a,
		bLoadingInitialData: s,
		bFetchingNextPage: l,
		bHasNextPage: c,
		renderItem: u,
		nInitialScroll: d,
		topPadding: A,
	} = e;
	const { itemsPerRow: h } = Le();
	const C = (0, n.useMemo)(() => {
		const e = [];
		const r = t.length > 0 ? t[t.length - 1] : 0;
		let n = {
			items: [],
		};
		for (let i = 0; i < t.length; i++) {
			n.items.push(t[i]);
			if (t[i] === r) {
				n.bRequestLoad = true;
			}
			if ((i + 1) % h == 0) {
				e.push(n);
				n = {
					items: [],
				};
			}
		}
		if (n.items.length) {
			e.push(n);
		}
		return e;
	}, [t, h]);
	const _ = (0, n.useRef)(undefined);
	const f = (0, O.hf)();
	const [b, y] = n.useState(t.length);
	const S = n.useRef(null);
	n.useEffect(() => {
		if (!f && t.length != b) {
			y(t.length);
			S.current?.TakeFocus();
		}
	}, [b, t.length, f]);
	const w = c ? Math.ceil(a / h) : C.length;
	const B = NB(A);
	const v = Le();
	const I = (0, n.useCallback)(() => v.height + Ce, [v.height]);
	const E = (0, m.Te)({
		count: w,
		getScrollElement: () => _.current,
		estimateSize: I,
		overscan: 3,
		paddingStart: f ? B : 0,
	});
	const M = E.getVirtualItems();
	const T = c && !s && !l;
	(0, n.useEffect)(() => {
		const e = M[M.length - 1];
		const t = M.some((e) => C[e.index]?.bRequestLoad);
		if (!e) {
			return;
		}
		const r = e.index >= C.length - 1;
		if ((t || r) && T) {
			i();
			E.measure();
		}
	}, [E, M, C, C.length, T, i]);
	(0, n.useEffect)(() => {
		E.measure();
	}, [v.width, E]);
	(0, n.useEffect)(() => {
		if (d) {
			E.scrollToIndex(Math.floor(d / h));
		}
	}, [d, E, h]);
	return n.useMemo(() => {
		const e = {
			"--listTotalHeight": `${E.getTotalSize()}px`,
		};
		const t = {
			"--stickyHeaderHeight": `${B}px`,
		};
		return n.createElement(
			p.Z,
			{
				autoFocus: !f,
				className: o.ScreenshotList,
				ref: _,
				style: t,
				navRef: S,
			},
			n.createElement(
				"div",
				{
					className: o.ScreenshotListInner,
					style: e,
				},
				M.map((e) => {
					const t = e.index > C.length - 1;
					return n.createElement(
						p.Z,
						{
							key: e.index,
							"flow-children": "row",
							navEntryPreferPosition: g.iU.MAINTAIN_X,
							className: o.ScreenshotListItemRow,
							style: {
								height: e.size - Ce + "px",
								transform: `translateY(${e.start}px)`,
								"--itemsPerRow": h,
								marginLeft: (t ? 2 : 0) + "px",
								marginRight: (t ? 2 : 0) + "px",
							},
						},
						t
							? n.createElement(We, null)
							: n.createElement(Ue, {
									row: C[e.index],
									selected: r,
									rows: C,
									renderItem: u,
									bLoadingInitialData: s,
									bFetchingNextPage: l,
								}),
					);
				}),
			),
		);
	}, [f, l, s, h, B, _, u, C, r, E, M]);
}
function Ue(e) {
	const {
		row: t,
		selected: r,
		renderItem: i,
		bLoadingInitialData: a,
		bFetchingNextPage: s,
	} = e;
	const o = a || s;
	const { itemsPerRow: l } = Le();
	let c;
	if (t.items.length < l) {
		if (o) {
			c = [];
			for (let e = 0; e < l - t.items.length; e++) {
				c.push(
					n.createElement(Ve, {
						key: e,
					}),
				);
			}
		} else {
			c = n.createElement("div", {
				style: {
					flex: l - t.items.length,
					border: "2px solid transparent",
				},
			});
		}
	}
	return n.createElement(
		n.Fragment,
		null,
		t.items.map((e) => i(e, r[e.id], l !== 1)),
		c,
	);
}
function We() {
	const { itemsPerRow: e } = Le();
	const t = [];
	for (let r = 0; r < e; r++) {
		t.push(
			n.createElement(Ve, {
				key: r,
			}),
		);
	}
	return n.createElement(n.Fragment, null, t);
}
function Ve() {
	const e = Le();
	return n.createElement(
		"div",
		{
			className: o.SkeletonContainer,
			style: {
				height: `${e.height}px`,
			},
		},
		n.createElement(O0, {
			className: o.ScreenshotListItemSkeleton,
		}),
	);
}
export function O0(e) {
	return n.createElement(p.Z, {
		focusable: true,
		className: (0, s.A)(e.className, o.Skeleton),
		onCancel: e.fnResetSelection,
		style: e.style,
	});
}
export function G3(e) {
	const {
		value: t,
		options: r,
		onChange: i,
		renderLabel: a,
		className: l,
		disabled: m,
		searchFilter: u,
		...d
	} = e;
	const { ref: A, show: p } = K3(e);
	const g = a(t) ?? n.createElement("span", null, "\xA0");
	return n.createElement(
		o6,
		{
			onClick: m ? undefined : p,
			ref: A,
			className: (0, s.A)(l, o.Combobox),
			disabled: m,
			...d,
		},
		n.createElement(
			EY,
			{
				truncate: true,
			},
			g,
		),
		n.createElement(c.DK4, {
			angle: 0,
		}),
	);
}
export function K3(e) {
	const t = (0, n.useRef)(undefined);
	return {
		ref: t,
		show: () => {
			const r = {
				bOverlapHorizontal: true,
				bMatchWidth: false,
				bFitToWindow: true,
				strClassName: o.ComboboxSelectorContextMenu,
			};
			const a = (0, i.lX)(
				n.createElement(Qe, {
					...e,
					onChange: (t) => {
						a.Hide();
						if (e.onChange) {
							e.onChange(t);
						}
					},
				}),
				t.current,
				r,
			);
		},
	};
}
function Qe(e) {
	const { options: t, onChange: r, renderLabel: i, searchFilter: a } = e;
	const [s, l] = (0, n.useState)("");
	const c = !!a;
	const m = (0, n.useMemo)(() => (a ? a(t, s) : t), [t, a, s]);
	if ((0, O.Qn)()) {
		return n.createElement(
			h.tz,
			null,
			m.length == 0 &&
				n.createElement(
					"div",
					{
						className: o.NoMatches,
					},
					(0, d.we)("#ClipMananger_Search_NoMatches"),
				),
			c &&
				n.createElement(Ge, {
					value: s,
					onChange: l,
				}),
			m.map((e, t) =>
				n.createElement(
					h.kt,
					{
						key: t,
						onSelected: () => r(e),
						className: o.Option,
					},
					i(e),
				),
			),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: o.ComboboxSelector,
			},
			n.createElement(
				h.tz,
				null,
				c &&
					n.createElement(Ge, {
						value: s,
						onChange: l,
					}),
				m.map((e, t) =>
					n.createElement(
						h.kt,
						{
							key: t,
							onSelected: () => r(e),
							className: o.Option,
						},
						i(e),
					),
				),
			),
			m.length == 0 &&
				n.createElement(
					"div",
					{
						className: o.NoMatches,
					},
					(0, d.we)("#ClipMananger_Search_NoMatches"),
				),
		);
	}
}
export function EY(e) {
	const { truncate: t, link: r, className: i, color: a, ...l } = e;
	const c = (0, s.A)(
		o.Text,
		t && o.Truncate,
		r && o.Link,
		i,
		a === "warning" && o.Warning,
		a === "secondary" && o.Secondary,
	);
	return n.createElement("span", {
		className: c,
		...l,
	});
}
const Ye = {
	grid: function (e) {
		return n.createElement(
			"svg",
			{
				className: e.className,
				width: "17",
				height: "17",
				viewBox: "0 0 17 17",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
			},
			n.createElement("path", {
				d: "M4.53963 0.222168H0.222168V4.53963H4.53963V0.222168Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M4.53963 5.97878H0.222168V10.2962H4.53963V5.97878Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M10.2962 0.222168H5.97878V4.53963H10.2962V0.222168Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M10.2962 5.97878H5.97878V10.2962H10.2962V5.97878Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M16.2222 0.222168H11.9047V4.53963H16.2222V0.222168Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M16.2222 5.97878H11.9047V10.2962H16.2222V5.97878Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M4.53963 11.9047H0.222168V16.2222H4.53963V11.9047Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M10.2962 11.9047H5.97878V16.2222H10.2962V11.9047Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M16.2222 11.9047H11.9047V16.2222H16.2222V11.9047Z",
				fill: "currentColor",
			}),
		);
	},
	folder: function (e) {
		return n.createElement(
			"svg",
			{
				className: e.className,
				width: "26",
				height: "24",
				viewBox: "0 0 26 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
			},
			n.createElement("path", {
				d: "M5.71293 9.35986H23.434L20.3766 18.3288H2.65552L5.71293 9.35986Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.65552 3.44043V5.56696H10.9623L9.85471 3.44043H2.65552ZM2.65552 5.57228H20.3766V7.36202H4.37561L2.65552 12.528V5.57228ZM18.446 18.3263H20.3766V12.528L18.446 18.3263Z",
				fill: "currentColor",
			}),
		);
	},
	stackedrectangles: function (e) {
		return n.createElement(
			"svg",
			{
				className: e.className,
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
			},
			n.createElement("path", {
				d: "M18 2H2V9H18V2Z",
				fill: "currentColor",
			}),
			n.createElement("path", {
				d: "M18 11H2V18H18V11Z",
				fill: "currentColor",
			}),
		);
	},
	gear: c.wB_,
	trashcan: function (e) {
		return n.createElement(
			"svg",
			{
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
			},
			n.createElement("path", {
				d: "M4.66675 9.33325H19.3334L18.0001 21.3333H6.00008L4.66675 9.33325ZM16.0001 3.99992L14.6667 1.33325H9.33342L8.00008 3.99992H2.66675V6.66659H21.3334V3.99992H16.0001Z",
				fill: "currentColor",
			}),
		);
	},
	hyperlink: function (e) {
		return n.createElement(
			"svg",
			{
				className: e.className,
				width: "25",
				height: "25",
				viewBox: "0 0 25 25",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
			},
			n.createElement("path", {
				d: "M9.02614 22.8275C7.78134 22.827 6.5646 22.4577 5.52951 21.7662C4.49441 21.0747 3.68736 20.0921 3.21021 18.9424C2.73306 17.7927 2.60721 16.5274 2.84853 15.3062C3.08985 14.085 3.68754 12.9627 4.56614 12.0809L6.73281 9.92754L8.61948 11.8142L6.45948 13.9675C5.77875 14.6483 5.39633 15.5715 5.39633 16.5342C5.39633 17.0109 5.49022 17.4829 5.67263 17.9233C5.85505 18.3637 6.12242 18.7638 6.45948 19.1009C6.79654 19.4379 7.19668 19.7053 7.63707 19.8877C8.07746 20.0701 8.54947 20.164 9.02614 20.164C9.98883 20.164 10.9121 19.7816 11.5928 19.1009L13.7528 16.9409L15.6328 18.8275L13.4795 20.9942C12.8945 21.5781 12.2 22.0406 11.4357 22.3552C10.6715 22.6699 9.85261 22.8304 9.02614 22.8275V22.8275ZM20.5661 13.9075C21.7481 12.7256 22.4122 11.1224 22.4122 9.45087C22.4122 7.7793 21.7481 6.17619 20.5661 4.99421C19.3842 3.81222 17.7811 3.14819 16.1095 3.14819C14.4379 3.14819 12.8348 3.81222 11.6528 4.99421L9.49948 7.16087L11.3861 9.04754L13.5395 6.88754C14.2202 6.20682 15.1435 5.82439 16.1061 5.82439C16.5828 5.82439 17.0548 5.91828 17.4952 6.10069C17.9356 6.28311 18.3357 6.55048 18.6728 6.88754C19.0099 7.2246 19.2772 7.62475 19.4597 8.06514C19.6421 8.50552 19.736 8.97753 19.736 9.4542C19.736 9.93088 19.6421 10.4029 19.4597 10.8433C19.2772 11.2837 19.0099 11.6838 18.6728 12.0209L16.5128 14.1742L18.3995 16.0609L20.5661 13.9075ZM16.4061 11.0475L14.5195 9.16087L8.51948 15.1609L10.4061 17.0475L16.4061 11.0475Z",
				fill: "currentColor",
			}),
		);
	},
	upload: nr,
	list: function (e) {
		return n.createElement(
			"svg",
			{
				width: "30",
				height: "20",
				viewBox: "0 0 30 20",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				...e,
			},
			n.createElement("path", {
				d: "M0.333496 0H29.6668V4H0.333496V0ZM0.333496 16H29.6668V20H0.333496V16ZM29.6668 8H0.333496V12H29.6668V8Z",
				fill: "currentColor",
			}),
		);
	},
};
export function K0(e) {
	const { icon: t, title: r, active: i, className: l, ...c } = e;
	const m = Ye[t];
	return n.createElement(
		a.he,
		{
			toolTipContent: r,
		},
		n.createElement(
			o6,
			{
				square: true,
				...c,
				className: (0, s.A)(l, o.IconButton, i && o.Active),
			},
			n.createElement(m, {
				className: (0, s.A)(o.IconButtonIcon),
			}),
		),
	);
}
export function $n(e) {
	return n.createElement(o6, {
		...e,
	});
}
const Je = {
	primary: o.Primary,
	secondary: o.Secondary,
};
export const o6 = (0, n.forwardRef)(function (e, t) {
	const {
		grow: r,
		square: i,
		disabled: a,
		className: l,
		variant: c = "secondary",
		onClick: m,
		...u
	} = e;
	const d = (0, s.A)(
		o.ButtonBox,
		!!m && o.Interactable,
		r && o.Grow,
		i && o.Square,
		a && o.Disabled,
		Je[c],
		l,
	);
	return n.createElement(p.Z, {
		noFocusRing: true,
		ref: t,
		className: d,
		onActivate: a ? undefined : m,
		...u,
	});
});
export function _X(e) {
	return n.createElement(
		"svg",
		{
			className: e.className,
			width: "34",
			height: "33",
			viewBox: "0 0 34 33",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		n.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M23.8359 6.50266C25.4078 8.09734 26.3342 10.1889 26.4449 12.3932C28.3318 13.0444 29.9212 14.3212 30.933 15.9986C31.9447 17.6761 32.3138 19.6464 31.975 21.5621C31.6363 23.4778 30.6115 25.2159 29.0814 26.4699C27.5513 27.724 25.6141 28.4134 23.6115 28.4166H10.3893C8.38668 28.4134 6.44953 27.724 4.91943 26.4699C3.38934 25.2159 2.36457 23.4778 2.02582 21.5621C1.68707 19.6464 2.05611 17.6761 3.06784 15.9986C4.07958 14.3212 5.66905 13.0444 7.55597 12.3932C7.66779 10.1832 8.59949 8.08695 10.1791 6.49145C11.7587 4.89596 13.8796 3.90888 16.1504 3.7124H17.0193H17.8882C20.1522 3.91724 22.2641 4.90797 23.8359 6.50266ZM9.44481 17.9666L14.5543 22.9166L23.6398 14.0982L21.3826 11.9166L14.5543 18.5441L11.702 15.7757L9.44481 17.9666Z",
			fill: "currentColor",
		}),
	);
}
export function nr(e) {
	return n.createElement(
		"svg",
		{
			className: e.className,
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 23 21",
			fill: "none",
			...e,
		},
		n.createElement("path", {
			fill: "currentColor",
			d: "M15.7968 8.49513L12.7396 5.43792V13.5523H10.0729V5.43796L7.01575 8.49513L5.13014 6.60952L11.4063 0.333374L17.6824 6.60952L15.7968 8.49513Z",
		}),
		n.createElement("path", {
			fill: "currentColor",
			d: "M18.7396 17V14.3334H22.0729V20.3334H0.739594V14.3334H4.07293V17H18.7396Z",
		}),
	);
}
const rt = {
	0: "#ScreenshotUploader_Visibility_Public",
	2: "#ScreenshotUploader_Visibility_Private",
	1: "#ScreenshotUploader_Visibility_FriendsOnly",
	3: "#ScreenshotUploader_Visibility_Unlisted",
};
export function AI(e) {
	return (0, d.we)(rt[e]);
}
function it(e) {
	const { numFiltered: t, filter: r, haveContent: i } = e;
	const a = (0, O.Qn)();
	const l = fe(r);
	if (!a || t == 0 || l) {
		return null;
	}
	const c = r.listSource.type !== b.sF.listSource.type;
	const m = r.mediaType !== b.sF.mediaType;
	const u = !i;
	return n.createElement(
		p.Z,
		{
			className: o.FilteredResultInfo,
			focusable: u,
			noFocusRing: true,
		},
		n.createElement("div", {
			className: o.FilterDivider,
		}),
		n.createElement(
			"div",
			{
				className: o.FilterText,
			},
			(0, d.we)("#MediaManager_FilterText", t),
			c &&
				n.createElement(ie.W, {
					button: ne.g4.X,
					className: (0, s.A)(o.FilterButton, m && o.MultipleGlyphs),
				}),
			c && m && "/",
			m &&
				n.createElement(ie.W, {
					button: ne.g4.Y,
					className: o.FilterButton,
				}),
		),
		n.createElement("div", {
			className: o.FilterDivider,
		}),
	);
}
