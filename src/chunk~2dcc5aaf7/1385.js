var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./18057.js");
var a = require("./64608.js");
var s = require("./10606.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require("./34428.js");
var m = require(/*webcrack:missing*/ "./98995.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./19840.js");
var A = require(/*webcrack:missing*/ "./69164.js");
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require("./60291.js");
var h = require(/*webcrack:missing*/ "./90242.js");
var C = require(/*webcrack:missing*/ "./49519.js");
var _ = require(/*webcrack:missing*/ "./52451.js");
var f = require("./43152.js");
var b = require("./71729.js");
var y = require("./3499.js");
var S = require("./78721.js");
var w = require("./26094.js");
var B = require(/*webcrack:missing*/ "./4690.js");
var v = require(/*webcrack:missing*/ "./26667.js");
var I = require("./13869.js");
var E = require("./35488.js");
var M = require(/*webcrack:missing*/ "./47742.js");
var T = require("../awards/utils.js");
var R = require(/*webcrack:missing*/ "./31084.js");
var k = require(/*webcrack:missing*/ "./88750.js");
export function iN(e) {
	const { handle: t, onClick: r, bGrowScreenshotToFit: i } = e;
	const a = (0, y.FD)(t);
	const [s, c] = (0, n.useState)(false);
	(0, n.useEffect)(() => c(false), [t]);
	const m = a.data;
	const u = (0, C.W6)();
	const d = n.useCallback(() => u.goBack(), [u]);
	if (a.isLoading) {
		return n.createElement(g.O0, {
			className: b.FocusedScreenshotSkeleton,
		});
	}
	if (a.isError || s || !m) {
		return n.createElement(
			TR,
			{
				className: b.FocusedScreenshotError,
			},
			n.createElement(
				A.Z,
				{
					className: b.Message,
					onCancel: d,
				},
				(0, l.we)("#ScreenshotUploader_FailedToLoadScreenshot"),
			),
		);
	}
	const { strUrl: p } = m;
	return n.createElement(
		g.Kz,
		{
			direction: "column",
			space: "md",
			grow: true,
		},
		n.createElement(
			A.Z,
			{
				className: (0, o.A)(
					b.FocusedScreenshotContainer,
					i && b.GrowScreenshot,
				),
				onCancel: d,
				noFocusRing: true,
			},
			n.createElement(
				"div",
				{
					className: b.FocusedScreenshotImageContainer,
					onClick: r,
					onContextMenu: (e) => {
						(0, R.lX)(
							n.createElement(N, {
								screenshot: m,
							}),
							e,
						);
						return true;
					},
				},
				p &&
					n.createElement("img", {
						onError: () => c(true),
						src: p,
						className: b.FocusedScreenshot,
					}),
			),
			n.createElement(O, {
				handle: t,
				screenshot: m,
				key: t,
			}),
		),
	);
}
function N(e) {
	const { screenshot: t } = e;
	const r = !!t.local;
	return n.createElement(
		k.tz,
		null,
		n.createElement(
			k.kt,
			{
				onSelected: () => (0, w.H9)(t),
				tone: "destructive",
			},
			(0, l.we)("#ExportClip_CopyClipboard"),
		),
		r &&
			n.createElement(
				k.kt,
				{
					onSelected: () =>
						SteamClient.Screenshots.ShowScreenshotsOnDisk(t.strGameID),
				},
				(0, l.we)("#ScreenshotUploader_ShowOnDisk"),
			),
	);
}
export function Pj(e) {
	const { handle: t, controlsVisible: r, fnOnContentWidth: i } = e;
	const a = (0, y.FD)(t);
	const [s, o] = (0, n.useState)(false);
	(0, n.useEffect)(() => o(false), [t]);
	const c = a.data;
	const m = n.useCallback(
		(e) => {
			const t = e.target;
			i(t.clientWidth);
		},
		[i],
	);
	const u = (0, _.wY)(m);
	if (a.isLoading) {
		return n.createElement(g.O0, {
			className: b.FocusedScreenshotSkeleton,
		});
	}
	if (a.isError || s || !c) {
		return n.createElement(
			TR,
			{
				className: b.FocusedScreenshotError,
			},
			n.createElement(
				A.Z,
				{
					className: b.Message,
				},
				(0, l.we)("#ScreenshotUploader_FailedToLoadScreenshot"),
			),
		);
	}
	const { strUrl: d } = c;
	return n.createElement(
		g.Kz,
		{
			direction: "column",
			space: "md",
			grow: true,
		},
		n.createElement(
			A.Z,
			{
				className: b.FocusedScreenshotContainer,
			},
			n.createElement(
				"div",
				{
					className: b.FocusedScreenshotImageContainer,
				},
				n.createElement("img", {
					ref: u,
					onError: () => o(true),
					src: d,
					className: b.FocusedScreenshot,
				}),
			),
			n.createElement(G, {
				handle: t,
				screenshot: c,
				key: t,
				controlsVisible: r,
			}),
		),
	);
}
function G(e) {
	const { controlsVisible: t } = e;
	const r = (0, f.u6)();
	if ((0, u.Y2)()) {
		return n.createElement(W, {
			...e,
		});
	}
	const i = e.screenshot.bUploaded
		? n.createElement(P, {
				...e,
			})
		: n.createElement(U, {
				...e,
			});
	return n.createElement(
		A.Z,
		{
			className: (0, o.A)(
				b.FloatingItemControls,
				t && b.Visible,
				r && b.KeyboardOpen,
			),
		},
		i,
	);
}
function O(e) {
	if ((0, u.Y2)()) {
		return n.createElement(W, {
			...e,
		});
	} else if (e.screenshot.bUploaded) {
		return n.createElement(P, {
			...e,
		});
	} else {
		return n.createElement(U, {
			...e,
		});
	}
}
function P(e) {
	const { screenshot: t } = e;
	const { rtCreated: r } = t;
	const a = t.remote || {};
	const s = a.hcontent_file;
	const o = a.file_size;
	const c = (0, i.bG)("CommunitySingleScreenshot", s);
	const m = (0, w.jE)();
	const d = (0, C.W6)();
	const { mutateAsync: A } = (0, y.Ab)();
	const {
		short_description: p,
		favorited: h = 0,
		num_comments_public: _ = 0,
		vote_data: f = {},
		reactions: S = [],
		visibility: B,
		spoiler_tag: v,
	} = a;
	const I = (0, l.PP)(
		"#UGC_Visibility_Field",
		n.createElement(
			"span",
			{
				className: b.Link,
				onClick: c,
			},
			(0, g.AI)(B),
		),
	);
	const E = (0, l.PP)(
		"#UGC_Spoilers_Field",
		n.createElement(
			"span",
			{
				className: b.Link,
				onClick: c,
			},
			(0, l.we)(v ? "#UGC_Spoilers_Field_Yes" : "#UGC_Spoilers_Field_None"),
		),
	);
	const M = (0, u.Qn)();
	return n.createElement(
		Y,
		null,
		n.createElement(
			K,
			{
				grow: true,
				justifyContent: "spaceBetween",
				alignSelf: "stretch",
			},
			n.createElement($, {
				timeCreated: r,
				size: o,
			}),
			n.createElement(
				ee,
				null,
				n.createElement(g._X, {
					className: b.UploadedIcon,
				}),
				I,
				" | ",
				E,
			),
		),
		n.createElement(
			K,
			{
				grow: true,
				justifyContent: "spaceBetween",
				alignSelf: "stretch",
			},
			n.createElement(
				"div",
				{
					className: b.UGCMetadata,
				},
				p &&
					n.createElement(
						"div",
						{
							className: b.Caption,
						},
						'"',
						p,
						'"',
					),
				n.createElement(
					"div",
					{
						className: b.UGCCounts,
						onClick: c,
					},
					n.createElement(L, {
						type: "likes",
						value: f?.votes_up || 0,
					}),
					n.createElement(L, {
						type: "comments",
						value: _,
					}),
					n.createElement(L, {
						type: "favorites",
						value: h,
					}),
					S.map((e) =>
						n.createElement(x, {
							...e,
							key: e.reactionid,
						}),
					),
				),
			),
			n.createElement(
				K,
				null,
				n.createElement(V, {
					onDelete: () =>
						A({
							screenshots: [t],
							location: "all",
						}).finally(() => d.goBack()),
					count: {
						total: 1,
						local: 1,
						uploaded: 1,
					},
				}),
				n.createElement(
					g.$n,
					{
						onClick: c,
					},
					(0, l.we)("#ScreenshotUploader_Action_ViewOnProfile"),
				),
				n.createElement(
					g.$n,
					{
						autoFocus: M,
						onClick: (e) => m(t, e.currentTarget),
					},
					(0, l.we)("#Generic_Share"),
				),
			),
		),
	);
}
function L(e) {
	const { type: t, value: r } = e;
	const i = {
		likes: E.ThumbsUp,
		comments: E.Comment,
		favorites: z,
	}[t];
	return n.createElement(
		"div",
		{
			className: b.UGCCount,
		},
		n.createElement(i, {
			className: b.UGCCountIcon,
		}),
		n.createElement("span", null, r || 0),
	);
}
function z(e) {
	const [t, r] = (0, M.l)();
	return n.createElement(
		"svg",
		{
			width: "36",
			height: "36",
			viewBox: "0 0 36 36",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: e.className,
		},
		n.createElement(
			"g",
			{
				clipPath: r,
			},
			n.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M22.5253 12.7729V12.7715L22.5256 12.7715C22.3357 12.7588 22.1614 12.6393 22.084 12.4523L18.0001 2.45807L13.9318 12.4115C13.87 12.6083 13.6914 12.7574 13.4734 12.7729L2.71118 13.5688L10.9519 20.5396C11.0967 20.6619 11.1684 20.8588 11.1206 21.0557L9.51216 27.6172L9.58315 27.6881L20.1361 17.141L23.6091 20.614L18.3308 25.8948L27.4486 31.5438L24.8851 21.0825C24.8288 20.8912 24.8851 20.6761 25.0468 20.5397L33.2875 13.5689L22.5253 12.7729Z",
				fill: "#0056D6",
			}),
			n.createElement("path", {
				d: "M20.1358 18.555L9.58335 29.1017L5.15585 24.68L3.09668 26.7392L9.58335 33.2317L22.195 20.6142L20.1358 18.555Z",
				fill: "#1A9FFF",
			}),
		),
		n.createElement(
			"defs",
			null,
			n.createElement(
				"clipPath",
				{
					id: t,
				},
				n.createElement("rect", {
					width: "36",
					height: "36",
					fill: "white",
				}),
			),
		),
	);
}
function x(e) {
	const { count: t, reactionid: r } = e;
	return n.createElement(
		"div",
		{
			className: b.UGCReaction,
		},
		n.createElement("img", {
			src: T.GetReactionImageURL(r, false),
			className: b.ReactionImage,
		}),
		t > 1 && n.createElement("span", null, t),
	);
}
function U(e) {
	const { screenshot: t } = e;
	const r = t.rtCreated;
	const i = (0, y.tS)(t);
	const { mutateAsync: a } = (0, y.Ab)();
	const s = (0, C.W6)();
	const o = (0, w.jE)();
	const c = (0, u.Qn)();
	return n.createElement(
		Y,
		null,
		n.createElement($, {
			timeCreated: r,
			size: i.data?.strSizeOnDisk,
		}),
		n.createElement(
			K,
			{
				grow: true,
				alignSelf: "stretch",
				justifyContent: "flexEnd",
				preferredFocus: true,
			},
			n.createElement(
				X,
				null,
				n.createElement(V, {
					onDelete: () =>
						a({
							screenshots: [t],
							location: "local",
						}).finally(() => s.goBack()),
					count: {
						total: 1,
						local: 1,
						uploaded: 0,
					},
				}),
				n.createElement(
					g.$n,
					{
						autoFocus: c,
						onClick: (e) => o(t, e.currentTarget),
					},
					(0, l.we)("#Generic_Share"),
				),
			),
		),
	);
}
function W(e) {
	const { screenshot: t } = e;
	const r = (0, C.W6)();
	const { mutateAsync: i } = (0, y.Ab)();
	return n.createElement(
		Y,
		null,
		n.createElement(
			K,
			{
				grow: true,
				alignSelf: "stretch",
				justifyContent: "flexEnd",
			},
			n.createElement(
				X,
				null,
				n.createElement(V, {
					disabled: false,
					onDelete: () =>
						i({
							screenshots: [t],
							location: "local",
						}).finally(() => r.goBack()),
					count: {
						total: 1,
						local: 1,
						uploaded: 0,
					},
				}),
			),
		),
	);
}
function V(e) {
	const { onDelete: t, disabled: r, count: i } = e;
	const [a, s] = (0, n.useState)(false);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(g.K0, {
			disabled: r,
			icon: "trashcan",
			onClick: () => s(true),
			title: (0, l.we)("#Generic_Delete"),
		}),
		n.createElement(H, {
			active: a,
			onConfirm: t,
			onRequestClose: () => s(false),
			count: i,
		}),
	);
}
function H(e) {
	const {
		active: t,
		count: { total: r, local: i, uploaded: a },
	} = e;
	if (r === 1) {
		return n.createElement(
			s.EN,
			{
				active: t,
			},
			n.createElement(j, {
				...e,
			}),
		);
	} else {
		return n.createElement(
			s.EN,
			{
				active: t,
			},
			i === r &&
				a === 0 &&
				n.createElement(q, {
					...e,
				}),
			a === r &&
				i === 0 &&
				n.createElement(Q, {
					...e,
				}),
			a !== 0 &&
				i !== 0 &&
				n.createElement(Z, {
					...e,
				}),
		);
	}
}
function j(e) {
	const {
		onConfirm: t,
		onRequestClose: r,
		count: { total: i, local: a },
	} = e;
	return n.createElement(
		s.o0,
		{
			strTitle: (0, l.Yp)("#ScreenshotUploader_ConfirmDelete_Title", i),
			strOKButtonText: (0, l.we)("#Generic_Delete"),
			onOK: () => {
				t();
				r();
			},
			onCancel: r,
		},
		n.createElement(
			g.EY,
			{
				color: "secondary",
			},
			(0, l.we)("#ScreenshotUploader_DeleteAllData"),
		),
	);
}
function q(e) {
	const {
		onConfirm: t,
		onRequestClose: r,
		count: { total: i, local: a },
	} = e;
	return n.createElement(
		s.o0,
		{
			strTitle: (0, l.Yp)("#ScreenshotUploader_ConfirmDelete_Title", i),
			strOKButtonText: (0, l.we)("#Generic_Delete"),
			onOK: () => {
				t();
				r();
			},
			onCancel: r,
		},
		n.createElement(
			g.EY,
			{
				color: "secondary",
			},
			(0, l.Yp)("#ScreenshotUploader_DeleteLocalOnlyData", a),
		),
	);
}
function Q(e) {
	const {
		onRequestClose: t,
		count: { total: r, local: a },
	} = e;
	const o = (0, i.bG)("CommunityScreenshots");
	return n.createElement(
		s.o0,
		{
			strTitle: (0, l.Yp)("#ScreenshotUploader_ConfirmDelete_Title", r),
			onOK: t,
			onCancel: t,
			bAlertDialog: true,
		},
		n.createElement(
			g.EY,
			{
				color: "warning",
			},
			(0, l.Yp)("#ScreenshotUploader_RemoteOnly_Message", a),
		),
		n.createElement("br", null),
		n.createElement("br", null),
		n.createElement(
			g.EY,
			{
				color: "warning",
			},
			(0, l.um)(
				"#ScreenshotUploader_RemoteOnly_Description",
				a,
				n.createElement(g.EY, {
					link: true,
					color: "warning",
					onClick: o,
				}),
			),
		),
	);
}
function Z(e) {
	const {
		onConfirm: t,
		onRequestClose: r,
		count: { total: a, local: o },
	} = e;
	const c = (0, i.bG)("CommunityScreenshots");
	return n.createElement(
		s.o0,
		{
			strTitle: (0, l.Yp)("#ScreenshotUploader_ConfirmDelete_Title", a),
			strOKButtonText: (0, l.we)("#Generic_Delete"),
			onOK: () => {
				t();
				r();
			},
			onCancel: r,
		},
		n.createElement(
			g.EY,
			null,
			(0, l.Yp)("#ScreenshotUploader_DeleteLocalData", o, a),
		),
		n.createElement("br", null),
		n.createElement("br", null),
		n.createElement(
			g.EY,
			{
				color: "secondary",
			},
			(0, l.oW)(
				"#ScreenshotUploader_DeleteRemoteDataNote",
				n.createElement(g.EY, {
					link: true,
					color: "secondary",
					onClick: c,
				}),
			),
		),
	);
}
function Y(e) {
	return n.createElement(
		A.Z,
		{
			className: b.ScreenshotForm,
			"flow-children": "grid",
			autoFocus: true,
			retainFocus: true,
			navEntryPreferPosition: B.iU.PREFERRED_CHILD,
		},
		e.children,
	);
}
function K(e) {
	const {
		children: t,
		alignSelf: r,
		justifyContent: i,
		grow: a,
		preferredFocus: s,
	} = e;
	const l = (0, o.A)(
		b.ScreenshotFormRow,
		r === "stretch" && b.Stretch,
		i === "flexEnd" && b.JustifyEnd,
		i === "spaceBetween" && b.JustifyBetween,
		a && b.Grow,
	);
	return n.createElement(
		A.Z,
		{
			className: l,
			"flow-children": "row",
			preferredFocus: s,
		},
		t,
	);
}
function X(e) {
	return n.createElement(
		"div",
		{
			className: b.ScreenshotFormActions,
		},
		e.children,
	);
}
function J(e) {
	const { details: t } = e;
	const r = t
		? (0, l.we)(
				"#ScreenshotUploader_CloudStorageImpact",
				t.strSizeOnDisk,
				t.strCloudAvailable,
				t.strCloudTotal,
			)
		: n.createElement("span", null, "\xA0");
	return n.createElement(
		"div",
		{
			className: b.CloudStorageImpact,
		},
		r,
	);
}
function $(e) {
	const { timeCreated: t, size: r } = e;
	const { strDay: i, strTime: a } = nN(t);
	const s = (0, l.we)("#ScreenshotUploader_DateTaken", i, a);
	const o = !!r;
	const m =
		typeof r != "string" || /[0-9]+$/g.test(r)
			? (0, c.dm)(parseInt(r), {
					nDigitsAfterDecimal: 0,
				})
			: r;
	return n.createElement(
		ee,
		null,
		n.createElement("div", null, s, o && ` - ${m}`),
	);
}
function ee(e) {
	return n.createElement("div", {
		className: b.Metadata,
		...e,
	});
}
export function nN(e) {
	const t = new Date(e * 1000);
	const r = t?.toLocaleString(l.pf.GetPreferredLocales(), {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const n = t?.toLocaleString(l.pf.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
	});
	return {
		strDay: r,
		strTime: n,
	};
}
function re(e) {
	const { value: t, onChange: r, onBlur: i, disabled: a } = e;
	return n.createElement(h.dO, {
		className: b.CaptionField,
		placeholder: (0, l.we)("#ScreenshotUploader_CaptionField_Placeholder"),
		value: t || "",
		onChange: r ? (e) => r(e.target.value) : undefined,
		onBlur: i,
		maxLength: 140,
		disabled: a,
		onMoveUp: () => true,
	});
}
function ne(e) {
	const { value: t, onChange: r, disabled: i } = e;
	return n.createElement(
		m.he,
		{
			className: b.VisibilityField,
			toolTipContent: ie(t),
			direction: "top",
		},
		n.createElement(
			"div",
			{
				className: b.Label,
			},
			(0, l.we)("#ScreenshotUploader_VisibilityFieldLabel"),
		),
		n.createElement(g.G3, {
			options: [0, 1, 2, 3],
			value: t,
			onChange: r,
			renderLabel: g.AI,
			className: b.Dropdown,
			disabled: i,
		}),
	);
}
function ie(e) {
	const t = {
		0: "#ScreenshotUploader_Visibility_Public_Explanation",
		1: "#ScreenshotUploader_Visibility_FriendsOnly_Explanation",
		2: "#ScreenshotUploader_Visibility_Private_Explanation",
		3: "#ScreenshotUploader_Visibility_Unlisted_Explanation",
	}[e];
	return (0, l.we)(t);
}
function ae(e) {
	const { value: t, onChange: r, disabled: i } = e;
	return n.createElement(
		"div",
		{
			className: b.SpoilerField,
		},
		n.createElement(
			"div",
			{
				className: (0, o.A)(b.Label, b.Wide),
			},
			(0, l.we)("#ScreenshotUploader_SpoilerFieldLabel"),
		),
		n.createElement(
			m.he,
			{
				toolTipContent: (0, l.we)("#ScreenshotUploader_SpoilerFieldLabel"),
				className: (0, o.A)(b.Label, b.Narrow),
			},
			t
				? n.createElement(ce, {
						className: b.Eye,
					})
				: n.createElement(me, {
						className: b.Eye,
					}),
		),
		n.createElement(a.J0, {
			value: t,
			onChange: r,
			disabled: i,
		}),
	);
}
function se(e) {
	const { count: t, progress: r, label: i } = e;
	const [a, s] = (0, n.useState)(0);
	(0, n.useEffect)(() => {
		s(0);
		const e = window.setInterval(
			() =>
				s((e) => {
					const t = (5 - Math.ceil(e / 25)) / 4;
					return Math.min(95, e + t);
				}),
			100,
		);
		return () => window.clearInterval(e);
	}, [r]);
	const o = Math.min(100, (r / t) * 100 + a / t);
	return n.createElement(
		"div",
		{
			className: b.UploadProgressIndicatorContainer,
		},
		i &&
			n.createElement(
				"div",
				{
					className: b.Label,
				},
				i,
			),
		n.createElement(oe, {
			progress: o,
		}),
	);
}
function oe(e) {
	const { progress: t } = e;
	return n.createElement(
		"div",
		{
			className: b.ProgressContainer,
		},
		n.createElement("div", {
			className: b.ProgressTrack,
		}),
		n.createElement("div", {
			className: b.Progress,
			style: {
				width: `${t}%`,
			},
		}),
	);
}
export function TR(e) {
	const { className: t, children: r, onClick: i } = e;
	return n.createElement(
		"div",
		{
			onClick: i,
			className: (0, o.A)(t, b.ErrorScreenshot),
		},
		n.createElement(p.eTF, {
			className: b.Caution,
			color: "#FFFFFF",
		}),
		r,
	);
}
function ce(e) {
	const t = e.color || "#FFFFFF";
	return n.createElement(
		"svg",
		{
			viewBox: "0 0 21.839 15.428",
			...e,
		},
		n.createElement("path", {
			fill: t,
			d: "M21.632 7.103c-.184-.231-4.824-5.65-10.681-5.65-1.217 0-2.366.23-3.446.6l7.581 5.766c.161-.461.252-.946.252-1.453 0-.807-.229-1.545-.597-2.191 2.228 1.015 4.042 2.652 4.916 3.529a20.28 20.28 0 0 1-2.228 1.914l1.539 1.176c1.585-1.246 2.573-2.399 2.665-2.491a.974.974 0 0 0-.001-1.2zM20.392 13.745L2.59.184c-.414-.3-.987-.23-1.286.185-.299.415-.23.991.183 1.291l2.688 2.052C1.832 5.234.34 6.987.224 7.102a.913.913 0 0 0 0 1.199c.184.231 4.824 5.65 10.704 5.65 1.837 0 3.537-.53 5.03-1.245l3.308 2.537a.993.993 0 0 0 .552.185.891.891 0 0 0 .735-.369c.321-.438.229-1.015-.161-1.314zm-9.464-1.661c-3.951 0-7.419-3.067-8.729-4.382a18.178 18.178 0 0 1 3.538-2.79l.896.669a4.77 4.77 0 0 0-.069.807 4.37 4.37 0 0 0 4.364 4.382c.689 0 1.332-.161 1.906-.461l1.424 1.084a8.52 8.52 0 0 1-3.33.691z",
		}),
	);
}
function me(e) {
	const t = e.color || "#FFFFFF";
	return n.createElement(
		"svg",
		{
			viewBox: "0 0 21.839 15.428",
			...e,
		},
		n.createElement("path", {
			fill: t,
			d: "m21.632,7.13629c-0.184,-0.247 -4.801,-5.827 -10.704,-5.827c-5.881,0 -10.497,5.603 -10.704,5.827a0.928,0.928 0 0 0 0,1.21c0.184,0.247 4.8,5.827 10.704,5.827c5.88,0 10.498,-5.603 10.704,-5.827a0.988,0.988 0 0 0 0,-1.21zm-10.704,5.087c-3.882,0 -7.281,-3.137 -8.568,-4.482c0.804,-0.829 2.389,-2.331 4.41,-3.384a4.202,4.202 0 0 0 -0.391,1.793c0,2.442 2.045,4.437 4.548,4.437c2.504,0 4.548,-1.995 4.548,-4.437c0,-0.628 -0.138,-1.233 -0.391,-1.793c2.021,1.031 3.606,2.532 4.41,3.384c-1.285,1.344 -4.684,4.482 -8.566,4.482z",
		}),
	);
}
export function tL(e) {
	const { handle: t, width: r, left: i } = e;
	const a = (0, y.FD)(t);
	const [s, c] = (0, n.useState)(false);
	(0, n.useEffect)(() => c(false), [t]);
	const m = a.data;
	if (a.isLoading) {
		return n.createElement(g.O0, {
			className: b.FocusedScreenshotSkeleton,
		});
	}
	if (a.isError || s) {
		return n.createElement(
			TR,
			{
				className: b.FocusedScreenshotError,
			},
			n.createElement(
				A.Z,
				{
					className: b.Message,
				},
				(0, l.we)("#ScreenshotUploader_FailedToLoadScreenshot"),
			),
		);
	}
	const { strUrl: u } = m;
	return n.createElement(
		"div",
		{
			className: (0, o.A)(b.ScreenshotPreview),
		},
		u &&
			n.createElement("img", {
				onError: () => c(true),
				src: u,
				className: (0, o.A)(b.FocusedScreenshot, i && b.Left),
				style: i && {
					transform: "transform: translateX( -100% ) translateX( " + r + "px )",
				},
			}),
	);
}
function de() {
	const { mutateAsync: e } = (0, y.b4)();
	const { mutateAsync: t } = (0, y.TW)();
	const { mutateAsync: r } = (0, y.PM)();
	const { mutateAsync: n } = (0, y.jh)();
	return (0, v.n)({
		mutationFn: async (i) => {
			const {
				screenshot: a,
				fields: { strCaption: s, bSpoilers: o, ePrivacy: l },
			} = i;
			await e({
				screenshot: a,
				strCaption: s,
			});
			await t({
				screenshot: a,
				bSpoilers: o,
			});
			await r({
				screenshot: a,
				eVisibility: (0, S.Kh)(l),
			});
			const c = await n({
				screenshot: a,
				eVisibility: (0, S.Kh)(l),
			});
			if (!c) {
				throw 2;
			}
			return c;
		},
	});
}
export function MS(e, t) {
	(0, I.pg)(
		n.createElement(pe, {
			screenshot: e,
		}),
		t,
	);
}
function pe(e) {
	const { closeModal: t, screenshot: r } = e;
	const [i, s] = (0, d.M)("screenshot_defaultprivacy", 2);
	const [o, c] = (0, n.useState)({
		strCaption: "",
		bSpoilers: false,
		ePrivacy: i,
	});
	const m = (0, y.tS)(r);
	const { mutate: u, isPending: p, isError: g } = de();
	const h = (0, n.useCallback)(
		(e, t) => {
			c((r) => ({
				...r,
				[e]: t,
			}));
			if (e === "ePrivacy") {
				s(t);
			}
		},
		[s],
	);
	const C = p;
	return n.createElement(
		Ce,
		{
			onRequestClose: t,
		},
		n.createElement(re, {
			disabled: C,
			value: o.strCaption,
			onChange: (e) => h("strCaption", e),
		}),
		n.createElement(
			A.Z,
			{
				"flow-children": "row",
				className: b.ShareDialogRow,
			},
			n.createElement(ne, {
				disabled: C,
				value: (0, S.Kh)(o.ePrivacy),
				onChange: (e) => h("ePrivacy", (0, S.s$)(e)),
			}),
			n.createElement(ae, {
				disabled: C,
				value: o.bSpoilers,
				onChange: (e) => h("bSpoilers", e),
			}),
		),
		n.createElement(J, {
			details: m.data,
		}),
		g &&
			n.createElement(
				"div",
				{
					className: b.Error,
				},
				(0, l.we)("#MediaManager_UploadScreenshot_Failure"),
			),
		n.createElement(
			A.Z,
			{
				"flow-children": "row",
				className: b.Buttons,
			},
			n.createElement(
				a.$n,
				{
					className: b.Button,
					disabled: C,
					onClick: t,
				},
				(0, l.we)("#Button_Cancel"),
			),
			n.createElement(
				a.jn,
				{
					className: b.Button,
					disabled: C,
					onClick: () =>
						u(
							{
								screenshot: r,
								fields: o,
							},
							{
								onSuccess: t,
							},
						),
				},
				(0, l.we)("#Button_Upload"),
			),
		),
	);
}
export function OF(e, t) {
	(0, I.pg)(
		n.createElement(he, {
			screenshots: e,
		}),
		t,
	);
}
function he(e) {
	const { closeModal: t, screenshots: r } = e;
	const [i, s] = (0, d.M)("screenshot_defaultprivacy", 2);
	const o = r.filter((e) => !e.bUploaded);
	const c = (0, y.bj)(o);
	const { mutateAsync: m } = de();
	const [u, p] = (0, n.useState)();
	const g = !!u;
	const h = !!u && u.iCur >= u.cTotal;
	if (o.length === 0) {
		return n.createElement(
			Ce,
			{
				onRequestClose: t,
			},
			n.createElement(
				fe,
				null,
				(0, l.we)("#ShareSheet_ShareOnSteam_AllUploaded"),
			),
			n.createElement(
				A.Z,
				{
					"flow-children": "row",
					className: b.Buttons,
				},
				n.createElement(
					a.$n,
					{
						className: b.Button,
						onClick: t,
					},
					(0, l.we)("#Button_Close"),
				),
			),
		);
	}
	const C = r.length - o.length;
	return n.createElement(
		Ce,
		{
			onRequestClose: t,
		},
		n.createElement(ne, {
			disabled: g,
			value: (0, S.Kh)(i),
			onChange: (e) => s((0, S.s$)(e)),
		}),
		n.createElement(J, {
			details: c.data,
		}),
		C > 0 &&
			n.createElement(
				fe,
				null,
				(0, l.Yp)("#ShareSheet_ShareOnSteam_PartialUploaded", C),
			),
		u &&
			n.createElement(_e, {
				...u,
			}),
		n.createElement(
			A.Z,
			{
				"flow-children": "row",
				className: b.Buttons,
			},
			n.createElement(
				a.$n,
				{
					className: b.Button,
					disabled: g && !h,
					onClick: t,
				},
				(0, l.we)(h ? "#Button_Close" : "#Button_Cancel"),
			),
			n.createElement(
				a.jn,
				{
					className: b.Button,
					disabled: g,
					onClick: async () => {
						p({
							cTotal: o.length,
							iCur: 0,
							cFailed: 0,
						});
						let e = false;
						for (const t of o) {
							let r = false;
							try {
								await m({
									screenshot: t,
									fields: {
										ePrivacy: i,
										bSpoilers: false,
										strCaption: "",
									},
								});
							} catch (t) {
								console.error("Failed to upload screenshot: ", t);
								r = true;
								e = true;
							}
							p((e) => ({
								...e,
								iCur: e.iCur + 1,
								cFailed: e.cFailed + (r ? 1 : 0),
							}));
						}
						if (!e) {
							t();
						}
					},
				},
				(0, l.we)("#Button_Upload"),
			),
		),
	);
}
function Ce(e) {
	const { onRequestClose: t, children: r } = e;
	return n.createElement(
		s.eV,
		{
			closeModal: t,
		},
		n.createElement(
			"div",
			{
				className: b.ScreenshotShareDialog,
			},
			n.createElement(a.Y9, null, (0, l.we)("#MediaManager_ShareOnSteam")),
			r,
		),
	);
}
function _e(e) {
	const { cTotal: t, iCur: r, cFailed: i } = e;
	const a = r >= t;
	return n.createElement(
		n.Fragment,
		null,
		!a &&
			n.createElement(se, {
				count: t,
				progress: r,
				label: (0, l.we)("#ShareSheet_ShareOnSteam_UploadProgress", r + 1, t),
			}),
		i > 0 &&
			n.createElement(
				fe,
				{
					error: true,
				},
				(0, l.Yp)("#ShareSheet_ShareOnSteam_UploadProgress_Failures", i),
			),
	);
}
function fe(e) {
	const { children: t, error: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, o.A)(b.ShareOnSteamDialogText, r && b.Error),
		},
		t,
	);
}
