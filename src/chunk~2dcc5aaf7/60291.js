import {
	Localize,
	LocalizePlural,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, {
	useMemo,
	useState,
	useEffect,
	useRef,
	useCallback,
	forwardRef,
} from "./63696.js";
import i, { lX } from "./31084.js";
import a from "./98995.js";
import s, { A as A_1 } from "./90765.js";
import o from "./71729.js";
import l from "./41596.js";
import c from "./50376.js";
import m, { Te as Te_1 } from "./55007.js";
import u from "./64608.js";
import A, { lY } from "./51095.js";
import p from "./69164.js";
import g from "./4690.js";
import h from "./88750.js";
import C, { gx } from "./36934.js";
import _, { Gb, XA, f5 } from "./91720.js";
import f, { dm } from "./34428.js";
import b, { Ab, NN, Re as Re_1 } from "./3499.js";
import y, { VI } from "./34792.js";
import S, { br } from "./18869.js";
import w from "./90242.js";
import B, { yZ } from "./34461.js";
import v, { kM } from "./39730.js";
import I from "./35488.js";
import E, { Q1 } from "./68438.js";
import M, { Ct, jE } from "./26094.js";
import T, { gO } from "./10905.js";
import R, { e3 } from "./25633.js";
import k, { Fj } from "./736.js";
import N from "./83247.js";
import F, { OF } from "./1385.js";
import { R7 } from "./11131.js";
import { Y2, hf, TL, Qn } from "./72476.js";
import P, { z as z_1 } from "./27541.js";
import L, { f as f_1 } from "./661.js";
import z from "./3874.js";
import V from "./93214.js";
import K from "./67429.js";
import X from "./96593.js";
import { l5 } from "./96555.js";
import $ from "./32676.js";
import { SK, wY } from "./52451.js";
import { pg } from "./13869.js";
import re from "./10606.js";
import ne from "./43014.js";
import ie from "./53622.js";
import { $2 } from "./96680.js";
import { u6 } from "./43152.js";
import { Nm } from "./14629.js";
import { $P } from "./2773.js";
import ce from "./49508.js";
import me from "./18057.js";
import ue, { W5, W6 } from "./49519.js";
import { BGameRecordingFeatureEnabled } from "./4069.js";
function x(e) {
	const { items, summoningElement, showConfirmation } = e;
	const a = ((e, t) => {
		const { copyToClipboard, saveToFile, uploadScreenshots } = ((e, t) => {
			const { ownerWindow } = R7();
			const n = async (t) => {
				const r = [];
				for (const n of e) {
					switch (n.type) {
						case "screenshot": {
							r.push(await W(n, t));
							break;
						}
						case "clip": {
							r.push(await U(n, t));
							break;
						}
						default: {
							console.error(
								`Cannot convert media type "${n.type}" into file path.`,
							);
						}
					}
				}
				return r;
			};
			const i = async (e) => {
				const r = await n();
				SteamClient.System.CopyFilesToClipboard(r.filter(Boolean));
				t(e, Localize("#Browser_URLCopied"));
			};
			const a = async (e) => {
				const t = GetOwningWindowForEvent(e) ?? window;
				const r = await (async (e) => {
					if (!Fj(e, "System.OpenFileDialog")) {
						e = window;
					}
					return e.SteamClient.System.OpenFileDialog({
						strTitle: Localize("#MediaManager_SaveDialogTitle"),
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
				OF(n, ownerWindow);
			};
			return {
				copyToClipboard: i,
				saveToFile: a,
				uploadScreenshots: s,
			};
		})(e, t);
		const { bAllScreenshots, bAllClips, bMixture } = useMemo(() => {
			let t = true;
			let r = true;
			e.forEach(({ type }) => {
				if (type === "clip") {
					t = false;
				}
				if (type === "screenshot") {
					r = false;
				}
			});
			return {
				bAllClips: r,
				bAllScreenshots: t,
				bMixture: !r && !t,
			};
		}, [e]);
		const m = Y2();
		return [
			bAllScreenshots &&
				!m && {
					key: "upload",
					onSelected: uploadScreenshots,
					icon: n.createElement(I.Globe, null),
					label: Localize("#ShareSheet_ShareOnSteam"),
				},
			{
				key: "clipboard",
				onSelected: copyToClipboard,
				icon: n.createElement(I.Copy, null),
				label: Localize("#MediaManager_MultiSelect_CopyToClipboard"),
			},
			bAllClips && {
				key: "export",
				onSelected: saveToFile,
				icon: n.createElement(I.Video, null),
				label: Localize("#MediaManager_MultiSelect_Save"),
			},
			bAllScreenshots && {
				key: "export",
				onSelected: saveToFile,
				icon: n.createElement(N.pw, null),
				label: Localize("#MediaManager_MultiSelect_Save_Screenshots"),
			},
			bMixture && {
				key: "export",
				onSelected: saveToFile,
				icon: n.createElement(c.dI9, null),
				label: Localize("#MediaManager_MultiSelect_Save_Mixture"),
			},
		].filter(Boolean);
	})(items, showConfirmation);
	return n.createElement(
		v.zu,
		{
			chatSendForbiddenMessage: {
				strMessage: Localize("#ShareMultipleToChatNotSupported"),
				bHeader: true,
			},
			summoningElement: summoningElement,
		},
		n.createElement(v.t$, {
			options: a,
		}),
	);
}
async function U(e, t) {
	let r;
	if (t) {
		r = `${t}/${e.summary.name ? kM(e.summary.name) : e.id}.mp4`;
	}
	const n = Q1(e3(e.summary.clip_id), {
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
		const n = `${t}/${gO(r)}`;
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
	if (await Ct(e, r)) {
		return r;
	} else {
		return null;
	}
}
function H(e) {
	const { disabled, rgSelected, onShareFinished } = e;
	const s = rgSelected.some((e) => e?.type === "recording");
	const o = (() => {
		const e = yZ();
		const t = z_1();
		const r = jE();
		const a = f_1();
		return n.useCallback(
			(s, o) => {
				const s_currentTarget = s.currentTarget;
				if (o.length === 1) {
					switch (o[0].type) {
						case "clip": {
							return t(e3(o[0].id), s_currentTarget);
						}
						case "screenshot": {
							return r(o[0], s_currentTarget);
						}
					}
				}
				lX(
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
								summoningElement: s_currentTarget,
								showConfirmation: e,
							}),
						),
					),
					s_currentTarget,
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
			disabled: disabled || s,
			onClick: (e) => o(e, rgSelected),
			title: Localize(
				s
					? "#MediaManager_RecordingShareNotSupported"
					: "#MediaManager_ShareTooltip",
			),
		}),
	);
}
function j(e) {
	const { rgSelected, fnDismiss, onDeleteFinished } = e;
	const { fnDeleteClip } = Gb();
	const { mutate } = Ab();
	const l = VI("g_background_mode")[0] === 1;
	const c = br();
	const m = () => c.Settings("GameRecording");
	let u = 0;
	let A = false;
	let g = false;
	let h = false;
	rgSelected.forEach((e) => {
		switch (e.type) {
			case "screenshot": {
				u += Number(e.local?.strSize ?? 0);
				break;
			}
			case "clip": {
				A = true;
				const t = XA(e.id);
				if (t) {
					u += Number(t.file_size);
				}
				break;
			}
			case "recording": {
				g = true;
				h = h || e.summary.is_active;
			}
		}
	});
	const C = n.createElement(
		q,
		null,
		LocalizePlural("#MediaManager_DeleteDialog_Explainer", rgSelected.length),
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
				Localize("#MediaManager_DeleteDialog_SizeInfo", dm(u)),
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
				Localize("#MediaManager_DeleteDialog_RecordingInProgress"),
			),
			n.createElement(
				Q,
				null,
				LocalizeInlineReactWithFallback(
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
				LocalizeInlineReactWithFallback(
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
			className: A_1(V.MultiSelectActionDialogContainer, V.DeleteDialog),
			autoFocus: true,
			retainFocus: true,
			onMoveLeft: v,
			onMoveRight: v,
			onMoveUp: v,
			onMoveDown: v,
			onCancel: fnDismiss,
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
				LocalizePlural("#MediaManager_DeleteDialog_Title", rgSelected.length),
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
							rgSelected.forEach((t) => {
								switch (t.type) {
									case "screenshot": {
										n.push(t);
										break;
									}
									case "clip": {
										fnDeleteClip(t.id);
										break;
									}
									case "recording": {
										e.push(t.summary.game_id);
									}
								}
							});
							mutate({
								screenshots: n,
								location: "all",
							});
							f5(e);
							fnDismiss();
							if (onDeleteFinished) {
								onDeleteFinished();
							}
						},
						disabled: h,
					},
					Localize("#MediaManager_DeleteDialog_Delete"),
				),
				n.createElement(
					$n,
					{
						className: V.CancelButton,
						onClick: fnDismiss,
					},
					Localize("#MediaManager_DeleteDialog_Cancel"),
				),
			),
		),
	);
}
function q(e) {
	const { children, error } = e;
	return n.createElement(
		"div",
		{
			className: A_1(V.ExplainerText, error && V.Error),
		},
		children,
	);
}
function Q(e) {
	const { children, tone } = e;
	return n.createElement(
		"div",
		{
			className: A_1(
				V.ExplainerSubtext,
				tone === "muted" && V.Muted,
				tone === "warning" && V.Warning,
			),
		},
		children,
	);
}
function Z(e) {
	const { disabled } = e;
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
			disabled: disabled,
			onClick: () => i(!r),
			title: Localize("#MediaManager_Delete"),
		}),
	);
}
function Y(e) {
	return n.createElement("div", {
		className: V.ButtonContainer,
		...e,
	});
}
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
	const { children, className } = e;
	return n.createElement(
		"div",
		{
			className: className,
			style: ye(e),
		},
		children,
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
	const [t, r] = useState({});
	const [i, a] = useState();
	const s = n.useCallback(() => r({}), []);
	return {
		selected: t,
		setSelected: r,
		onSelect: ({ handle, index, bShiftKey, bCtrlKey }) => {
			if (bShiftKey || bCtrlKey) {
				if (bShiftKey) {
					const n = bCtrlKey
						? {
								...t,
							}
						: {};
					const a = Math.min(index, i);
					const o = Math.max(index, i);
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
					a(index);
				}
			} else {
				r({
					[handle]: true,
				});
				a(index);
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
		sortedItems,
		numTotal,
		selected,
		onDeselectAll,
		onSelectAll,
		bLoadingInitialData,
		bFetchingNextPage,
		bHasNextPage,
		onRequestLoad,
		renderItem,
		className,
		selectModeActive,
		numFiltered,
		onSelectModeActiveChange,
		filter,
		onFilterChange,
		nInitialScroll,
		childFocusDisabled,
	} = e;
	const I = sortedItems.length > 0;
	const E = fe(filter);
	const M = NN(filter.listSource);
	const S_phaseID = filter.phaseID;
	const [R, k] = useState({
		gameid: M,
		phaseID: S_phaseID,
	});
	useEffect(
		() =>
			k({
				gameid: M,
				phaseID: S_phaseID,
			}),
		[M, S_phaseID],
	);
	let D = bLoadingInitialData;
	const N = hf();
	const F = R7();
	const P = (e) =>
		onFilterChange({
			...filter,
			mediaType: e,
		});
	const L = SK(2000, [sortedItems]);
	if (bLoadingInitialData && sortedItems.length > 0 && L) {
		D = false;
	}
	const z = N ? _e : 0;
	const { itemSizeInfo, refForResizeObserver } = (() => {
		const e = l5();
		const t = hf();
		const r = !TL() || e || e || t ? ge : he;
		const i = TL() && !e ? 1.6 : 16 / 9;
		const [a, s] = useState({
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
		const l = wY(o);
		return {
			itemSizeInfo: a,
			refForResizeObserver: l,
		};
	})();
	const W =
		Y2() || !BGameRecordingFeatureEnabled()
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
				Localize(W),
			),
			n.createElement(ve, {
				sortedItems: sortedItems,
				selected: selected,
				filter: filter,
				onFilterChange: onFilterChange,
				selectModeActive: selectModeActive,
				onSelectModeActiveChange: onSelectModeActiveChange,
				onDeselectAll: onDeselectAll,
				onSelectAll: onSelectAll,
				phaseFilter: R,
				onPhaseFilterChange: k,
			}),
		);
	const H =
		filter.listSource.type === b.sF.listSource.type
			? "#MediaManager_AppFilter_Footer"
			: "#MediaManager_AppFilterChange_Footer";
	return n.createElement(
		p.Z,
		{
			className: A_1(o.TopList, className),
			"flow-children": "column",
			childFocusDisabled: childFocusDisabled,
			ref: refForResizeObserver,
			onOptionsButton: () => {
				pg(
					n.createElement(Te, {
						mediaTypeProps: {
							value: filter.mediaType,
							onChange: P,
						},
					}),
					F.ownerWindow,
				);
				return true;
			},
			onOptionsActionDescription: Localize("#MediaManager_FilterModal_Footer"),
			onSecondaryButton: (e) => {
				lX(
					n.createElement(Fe, {
						value: filter.listSource,
						onChange: (e) =>
							onFilterChange({
								...filter,
								listSource: e,
							}),
					}),
					e,
				);
			},
			onSecondaryActionDescription: Localize(H),
			retainFocus: !N,
		},
		n.createElement(
			PeContext.Provider,
			{
				value: itemSizeInfo,
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
							numFiltered: numFiltered,
							filter: filter,
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
								items: sortedItems,
								selected: selected,
								onRequestLoad: onRequestLoad,
								numTotal: numTotal,
								renderItem: renderItem,
								nInitialScroll: nInitialScroll,
								bLoadingInitialData: bLoadingInitialData,
								bFetchingNextPage: bFetchingNextPage,
								bHasNextPage: bHasNextPage,
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
		filter,
		selectModeActive,
		selected,
		sortedItems,
		onSelectModeActiveChange,
		onSelectAll,
		onDeselectAll,
		onFilterChange,
	} = e;
	const m = Object.keys(selected);
	const m_length = m.length;
	const A = !selectModeActive || m.length === 0;
	const p = m.map((e) => sortedItems.find((t) => t.id === e)).filter(Boolean);
	const g = BGameRecordingFeatureEnabled();
	return n.createElement(fC, {
		...e,
		left: n.createElement(
			n.Fragment,
			null,
			g &&
				n.createElement(Re, {
					value: filter.mediaType,
					onChange: (e) =>
						onFilterChange({
							...filter,
							mediaType: e,
						}),
				}),
			filter.listSource.type === "phase" &&
				n.createElement(Ee, {
					phase: filter.listSource.phase,
					onRemove: () =>
						onFilterChange({
							...filter,
							listSource: {
								type: "app",
								gameid: filter.listSource.phase.game_id,
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
				onShareFinished: () => onSelectModeActiveChange(false),
			}),
			n.createElement(Z, {
				rgSelected: p,
				disabled: A,
				onDeleteFinished: () => onSelectModeActiveChange(false),
			}),
			selectModeActive &&
				m_length < 1 &&
				n.createElement(
					$n,
					{
						onClick: onSelectAll,
					},
					Localize("#ScreenshotUploader_SelectAll"),
				),
			selectModeActive &&
				m_length >= 1 &&
				n.createElement(
					$n,
					{
						onClick: onDeselectAll,
					},
					Localize("#ScreenshotUploader_DeselectAll"),
				),
			n.createElement(
				$n,
				{
					onClick: () => onSelectModeActiveChange(!selectModeActive),
				},
				Localize(
					selectModeActive
						? "#MediaManager_UploadDialog_Cancel"
						: "#MediaManager_EnterSelectMode",
				),
			),
		),
	});
}
function Ee(e) {
	const { phase, onRemove } = e;
	const { strDateTime } = $P(phase);
	return n.createElement(
		o6,
		null,
		n.createElement(
			"div",
			{
				className: o.PhaseFilterTag,
			},
			strDateTime,
			n.createElement(
				"div",
				{
					className: o.Close,
					onClick: onRemove,
				},
				n.createElement(I.Close, null),
			),
		),
	);
}
export function fC(e) {
	const { left, right, filter, onFilterChange } = e;
	const s = br();
	const l = BGameRecordingFeatureEnabled();
	const c =
		l && !Y2() ? () => s.Settings("GameRecording") : () => s.Settings("InGame");
	const m = !!W5({
		path: me.BV.Media.Grid(),
	});
	const u = W6();
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
					title: Localize("#MediaManager_GridView_Tooltip"),
					active: m,
				}),
			A &&
				n.createElement(K0, {
					icon: "list",
					onClick: () => u.replace(me.BV.Media.List()),
					title: Localize("#MediaManager_ListView_Tooltip"),
					active: !m,
				}),
			n.createElement(De, {
				value: filter.listSource,
				onChange: (e) =>
					onFilterChange({
						...filter,
						listSource: e,
					}),
			}),
			left,
		),
		n.createElement(
			"div",
			{
				className: o.TopListButtonGroup,
			},
			right,
			n.createElement(K0, {
				icon: "gear",
				onClick: c,
				title: Localize("#ScreenshotUploader_Settings"),
			}),
		),
	);
}
function Te(e) {
	const { mediaTypeProps, closeModal } = e;
	return n.createElement(
		re.o0,
		{
			strTitle: Localize("#MediaManager_FilterModal_Title"),
			bAlertDialog: true,
			onOK: () => {
				if (closeModal) {
					closeModal();
				}
			},
		},
		n.createElement(
			p.Z,
			null,
			n.createElement(Re, {
				...mediaTypeProps,
			}),
		),
	);
}
function Re(e) {
	const { value, onChange } = e;
	const i = [
		{
			data: "all",
			label: Localize("#MediaManager_MediaType_All"),
		},
		{
			data: "clip",
			label: Localize("#MediaManager_MediaType_Clip"),
		},
		{
			data: "screenshot",
			label: Localize("#MediaManager_MediaType_Screenshot"),
		},
		{
			data: "recording",
			label: Localize("#MediaManager_MediaType_Recording"),
		},
	];
	const a = [
		{
			data: "all",
			label: Localize("#MediaManager_MediaType_All"),
		},
		{
			data: "screenshot",
			label: Localize("#MediaManager_MediaType_Screenshot"),
		},
	];
	const s = Y2() ? a : i;
	const o = s.find((e) => e.data == value) || s[0];
	const [l, c] = n.useState(o.data);
	const m = (e) => {
		c(e);
		onChange(e);
	};
	if (Qn()) {
		return n.createElement(
			"div",
			null,
			n.createElement(
				u.iK,
				null,
				Localize("#MediaManager_FilterModal_MediaType"),
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
			onChange: (e) => onChange(e.data),
			renderLabel: (e) => e?.label,
			grow: true,
		});
	}
}
function ke(e) {
	const t = Re_1();
	const r = [];
	t.forEach((e, t) => {
		const n = new K.VS(t);
		if (n.BIsSteamApp()) {
			r.push(n?.GetInternalAppID() ?? 0);
		}
	});
	const i = gx(r);
	const { rgOptions, selectedOption } = useMemo(() => {
		let r = 0;
		let n = [];
		t?.forEach((e, t) => {
			let a = e;
			if (!!new K.VS(t).BIsShortcut() && (!e || e.length == 0)) {
				a = Localize("#ScreenshotManager_UnknownApp", r++);
			}
			let s =
				((e, t) => {
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
		n?.sort((e, t) => lY(e.label || "", t.label || ""));
		const a = [
			{
				data: {
					type: "recents",
				},
				label: Localize("#MediaManager_AllApps_Dropdown"),
			},
			...n,
		];
		const s = NN(e);
		const o = s
			? n.find((e) => e.data?.gameid == s)?.label
			: Localize("#MediaManager_AllApps_Dropdown");
		return {
			rgOptions: a,
			selectedOption: {
				data: e,
				label: o,
			},
		};
	}, [t, i, e]);
	return {
		rgOptions: rgOptions,
		selectedOption: selectedOption,
	};
}
function De(e) {
	const { value, onChange } = e;
	const { rgOptions, selectedOption } = ke(value);
	return n.createElement(G3, {
		options: rgOptions,
		value: selectedOption,
		onChange: (e) => onChange(e.data),
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

			score: Nm(t.toLocaleLowerCase(), [(e.label || "").toLocaleLowerCase()]),
		}))
		.filter(
			({ score, value }) => value.data.type !== "recents" && score > 0.25,
		);
	r.sort((e, t) => t.score - e.score);
	return r.map(({ value }) => value);
}
function Fe(e) {
	const { value, onChange } = e;
	const [i, a] = useState("");
	const { rgOptions, selectedOption } = ke(value);
	const m = n.useRef(undefined);
	const u = $2();
	const A = u6();
	const p = useMemo(() => Ne(rgOptions, i), [rgOptions, i]);
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
				className: A_1(o.NoMatches, p.length == 0 && o.Visible),
			},
			Localize("#ClipMananger_Search_NoMatches"),
		),
		n.createElement(Ge, {
			onChange: a,
			onEnter: () => {
				if (onChange) {
					onChange(p[0].data);
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
					onSelected: onChange ? () => onChange(e.data) : undefined,
					preferredFocus: t == 0,
					className: o.Option,
					selected: selectedOption.label == e.label,
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
							className: A_1(o.SelectItemGlyph, t && o.Visible),
						}),
					))(e, t == 0 && A),
			),
		),
	);
}
function Ge(e) {
	const { value, onChange, onEnter } = e;
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
				onChange: (e) => onChange(e.target.value),
				onEnterKeyPress: onEnter,
				value: value,
				className: o.Input,
				placeholder: Localize("#ClipMananger_Search_Placeholder"),
				bShowClearAction: true,
			}),
		),
	);
}
function Oe(e) {
	const { topPadding } = e;
	const [r] = useState(() => new Array(200).fill(0));
	const { itemsPerRow } = Le();
	const a = {
		"--stickyHeaderHeight": `${NB(topPadding)}px`,
	};
	const l = {
		"--itemsPerRow": itemsPerRow,
	};
	return n.createElement(
		"div",
		{
			className: A_1(o.ScreenshotList, o.Loading),
			style: a,
		},
		n.createElement(
			"div",
			{
				className: A_1(o.ScreenshotListInner, o.Loading),
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
const PeContext = n.createContext({});
const Le = () => n.useContext(PeContext);
export function NB(e) {
	if ($2().IsDesktopOverlayWindow()) {
		return e - 34 + Ce;
	} else {
		return e + Ce;
	}
}
function xe(e) {
	const {
		items,
		selected,
		onRequestLoad,
		numTotal,
		bLoadingInitialData,
		bFetchingNextPage,
		bHasNextPage,
		renderItem,
		nInitialScroll,
		topPadding,
	} = e;
	const { itemsPerRow } = Le();
	const C = useMemo(() => {
		const e = [];
		const r = items.length > 0 ? items[items.length - 1] : 0;
		let n = {
			items: [],
		};
		for (let i = 0; i < items.length; i++) {
			n.items.push(items[i]);
			if (items[i] === r) {
				n.bRequestLoad = true;
			}
			if ((i + 1) % itemsPerRow == 0) {
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
	}, [items, itemsPerRow]);
	const _ = useRef(undefined);
	const f = hf();
	const [b, y] = n.useState(items.length);
	const S = n.useRef(null);
	n.useEffect(() => {
		if (!f && items.length != b) {
			y(items.length);
			S.current?.TakeFocus();
		}
	}, [b, items.length, f]);
	const w = bHasNextPage ? Math.ceil(numTotal / itemsPerRow) : C.length;
	const B = NB(topPadding);
	const v = Le();
	const I = useCallback(() => v.height + Ce, [v.height]);
	const E = Te_1({
		count: w,
		getScrollElement: () => _.current,
		estimateSize: I,
		overscan: 3,
		paddingStart: f ? B : 0,
	});
	const M = E.getVirtualItems();
	const T = bHasNextPage && !bLoadingInitialData && !bFetchingNextPage;
	useEffect(() => {
		const e = M[M.length - 1];
		const t = M.some((e) => C[e.index]?.bRequestLoad);
		if (!e) {
			return;
		}
		const r = e.index >= C.length - 1;
		if ((t || r) && T) {
			onRequestLoad();
			E.measure();
		}
	}, [E, M, C, C.length, T, onRequestLoad]);
	useEffect(() => {
		E.measure();
	}, [v.width, E]);
	useEffect(() => {
		if (nInitialScroll) {
			E.scrollToIndex(Math.floor(nInitialScroll / itemsPerRow));
		}
	}, [nInitialScroll, E, itemsPerRow]);
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
								height: `${e.size - Ce}px`,
								transform: `translateY(${e.start}px)`,
								"--itemsPerRow": itemsPerRow,
								marginLeft: `${t ? 2 : 0}px`,
								marginRight: `${t ? 2 : 0}px`,
							},
						},
						t
							? n.createElement(We, null)
							: n.createElement(Ue, {
									row: C[e.index],
									selected: selected,
									rows: C,
									renderItem: renderItem,
									bLoadingInitialData: bLoadingInitialData,
									bFetchingNextPage: bFetchingNextPage,
								}),
					);
				}),
			),
		);
	}, [
		f,
		bFetchingNextPage,
		bLoadingInitialData,
		itemsPerRow,
		B,
		_,
		renderItem,
		C,
		selected,
		E,
		M,
	]);
}
function Ue(e) {
	const { row, selected, renderItem, bLoadingInitialData, bFetchingNextPage } =
		e;
	const o = bLoadingInitialData || bFetchingNextPage;
	const { itemsPerRow } = Le();
	let c;
	if (row.items.length < itemsPerRow) {
		if (o) {
			c = [];
			for (let e = 0; e < itemsPerRow - row.items.length; e++) {
				c.push(
					n.createElement(Ve, {
						key: e,
					}),
				);
			}
		} else {
			c = n.createElement("div", {
				style: {
					flex: itemsPerRow - row.items.length,
					border: "2px solid transparent",
				},
			});
		}
	}
	return n.createElement(
		n.Fragment,
		null,
		row.items.map((e) => renderItem(e, selected[e.id], itemsPerRow !== 1)),
		c,
	);
}
function We() {
	const { itemsPerRow } = Le();
	const t = [];
	for (let r = 0; r < itemsPerRow; r++) {
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
		className: A_1(e.className, o.Skeleton),
		onCancel: e.fnResetSelection,
		style: e.style,
	});
}
export function G3(e) {
	const {
		value,
		options,
		onChange,
		renderLabel,
		className,
		disabled,
		searchFilter,
		...d
	} = e;
	const { ref, show } = K3(e);
	const g = renderLabel(value) ?? n.createElement("span", null, "\xA0");
	return n.createElement(
		o6,
		{
			onClick: disabled || show,
			ref: ref,
			className: A_1(className, o.Combobox),
			disabled: disabled,
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
	const t = useRef(undefined);
	return {
		ref: t,
		show: () => {
			const r = {
				bOverlapHorizontal: true,
				bMatchWidth: false,
				bFitToWindow: true,
				strClassName: o.ComboboxSelectorContextMenu,
			};
			const a = lX(
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
	const { options, onChange, renderLabel, searchFilter } = e;
	const [s, l] = useState("");
	const c = !!searchFilter;
	const m = useMemo(
		() => (searchFilter ? searchFilter(options, s) : options),
		[options, searchFilter, s],
	);
	if (Qn()) {
		return n.createElement(
			h.tz,
			null,
			m.length == 0 &&
				n.createElement(
					"div",
					{
						className: o.NoMatches,
					},
					Localize("#ClipMananger_Search_NoMatches"),
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
						onSelected: () => onChange(e),
						className: o.Option,
					},
					renderLabel(e),
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
							onSelected: () => onChange(e),
							className: o.Option,
						},
						renderLabel(e),
					),
				),
			),
			m.length == 0 &&
				n.createElement(
					"div",
					{
						className: o.NoMatches,
					},
					Localize("#ClipMananger_Search_NoMatches"),
				),
		);
	}
}
export function EY(e) {
	const { truncate, link, className, color, ...l } = e;
	const c = A_1(
		o.Text,
		truncate && o.Truncate,
		link && o.Link,
		className,
		color === "warning" && o.Warning,
		color === "secondary" && o.Secondary,
	);
	return n.createElement("span", {
		className: c,
		...l,
	});
}
const Ye = {
	grid(e) {
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
	folder(e) {
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
	stackedrectangles(e) {
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
	trashcan(e) {
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
	hyperlink(e) {
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
	list(e) {
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
	const { icon, title, active, className, ...c } = e;
	const Ye_t = Ye[t];
	return n.createElement(
		a.he,
		{
			toolTipContent: title,
		},
		n.createElement(
			o6,
			{
				square: true,
				...c,
				className: A_1(className, o.IconButton, active && o.Active),
			},
			n.createElement(Ye_t, {
				className: A_1(o.IconButtonIcon),
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
export const o6 = forwardRef((e, t) => {
	const {
		grow,
		square,
		disabled,
		className,
		variant = "secondary",
		onClick,
		...u
	} = e;
	const d = A_1(
		o.ButtonBox,
		!!onClick && o.Interactable,
		grow && o.Grow,
		square && o.Square,
		disabled && o.Disabled,
		Je[c],
		className,
	);
	return n.createElement(p.Z, {
		noFocusRing: true,
		ref: t,
		className: d,
		onActivate: disabled || onClick,
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
	return Localize(rt[e]);
}
function it(e) {
	const { numFiltered, filter, haveContent } = e;
	const a = Qn();
	const l = fe(filter);
	if (!a || numFiltered == 0 || numFiltered == 0 || l) {
		return null;
	}
	const c = filter.listSource.type !== b.sF.listSource.type;
	const m = filter.mediaType !== b.sF.mediaType;
	const u = !haveContent;
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
			Localize("#MediaManager_FilterText", numFiltered),
			c &&
				n.createElement(ie.W, {
					button: ne.g4.X,
					className: A_1(o.FilterButton, m && o.MultipleGlyphs),
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
