var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./8090.js");
var a = require("./1521.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./16117.js");
var l = require("./56840.js");
var c = require("./44164.js");
var m = require(/*webcrack:missing*/ "./53807.js");
var u = require("./69137.js");
var d = require(/*webcrack:missing*/ "./17372.js");
class A extends a.K0 {
	m_LinkFilter = d.O;
	m_parentNode = undefined;
	m_mapHostToComponent;
	m_globalStoreLink;
	constructor(e, t, r, n) {
		super(e);
		this.m_parentNode = t;
		this.m_mapHostToComponent = r;
		this.m_globalStoreLink = n;
	}
	AppendText(e, t = false) {
		let r = e;
		if (
			(t || this.m_parentNode?.tag == "*") &&
			(this.m_parentNode == null || this.m_parentNode.tag != "img")
		) {
			let e = this.m_LinkFilter.exec(r);
			while (e) {
				if (e.index > 0) {
					let r = e.input.substring(0, e.index);
					super.AppendText(r, t);
				}
				let n = e[0];
				let i = false;
				if (this.m_mapHostToComponent) {
					for (let e = 0; e < this.m_mapHostToComponent.length; ++e) {
						if (this.m_mapHostToComponent[e].urlRegExp.exec(n)) {
							i = true;
							super.AppendNode(
								this.m_mapHostToComponent[e].fnBBComponent(
									n,
									this.m_globalStoreLink,
								),
							);
							break;
						}
					}
				}
				if (!i) {
					super.AppendNode((0, u.Pm)(n));
				}
				r = e.input.substring(e.index + n.length);
				e = this.m_LinkFilter.exec(r);
			}
		}
		if (r.length > 0) {
			super.AppendText(r, t);
		}
	}
}
class p extends a.K0 {
	m_EmoteRegex = new RegExp("[ː:]([a-zA-Z0-9_]+)[ː:]");
	AppendText(e, t = false) {
		let r = e;
		if (e.length >= 3) {
			let e = this.m_EmoteRegex.exec(r);
			while (e) {
				if (e.index > 0) {
					let r = e.input.substring(0, e.index);
					super.AppendText(r, t);
				}
				let n = e[1];
				super.AppendNode(
					s.createElement(
						c.nl,
						{
							emoticonHoverStore: l.s,
							emoticon: n,
						},
						[],
					),
				);
				r = e.input.substring(e.index + n.length + 2);
				e = this.m_EmoteRegex.exec(r);
			}
		}
		if (r.length > 0) {
			super.AppendText(r, t);
		}
	}
}
class g extends a.K0 {
	m_parentNode = undefined;
	constructor(e, t) {
		super(e);
		this.m_parentNode = t;
	}
	AppendText(e, t = false) {
		let r = e;
		if (this.m_parentNode && this.m_parentNode.tag == "img") {
			r = (0, m.L$)(r);
		}
		super.AppendText(r, t);
	}
}
var h = require("./69740.js");
var C = require("./90601.js");
var _ = require("./5047.js");
var _f = require("./5859.js");
var b = require("./82594.js");
var y = require("./34091.js");
var S = require("./64608.js");
var w = require("./1624.js");
var B = require("./43088.js");
var v = B;
var I = require("./43397.js");
var E = require(/*webcrack:missing*/ "./90765.js");
var M = require(/*webcrack:missing*/ "./46108.js");
var T = require(/*webcrack:missing*/ "./72476.js");
function R(e) {
	let t = (0, o.j$)(e.args) || (0, o.j$)(e.args, "href");
	const r = (0, o.j$)(e.args, "style");
	const n = (0, o.j$)(e.args, "id");
	const i = (function (e) {
		if (e === "button") {
			return (0, E.A)(B.LinkButton, "LinkButton");
		} else {
			return (0, E.A)(B.Link, "Link");
		}
	})(r);
	e.context.event;
	if (t === undefined) {
		return e.children || "";
	}
	if (typeof t == "string" && t.length > 0) {
		const r = o._D(t, e.language, e.context.event?.rtime32_last_modified);
		t = typeof r == "string" ? r : r[1];
	}
	if (
		T.TS.WEB_UNIVERSE == "dev" &&
		(0, T.yK)() == "store" &&
		(0, m.wm)(t) == "store.steampowered.com"
	) {
		t = t.replace("https://store.steampowered.com/", T.TS.STORE_BASE_URL);
	}
	if (typeof t == "string" && t.length > 0 && t[0] == "#") {
		return s.createElement(
			"a",
			{
				className: i,
				href: t,
			},
			e.children,
		);
	} else if (t == "steam://settings/account") {
		return s.createElement(
			I.uU,
			{
				className: i,
				href: "steam://settings/account",
			},
			e.children,
		);
	} else {
		return s.createElement(
			u.d$,
			{
				className: i,
				url: t,
				event: e.context.event,
				id: n,
			},
			e.children,
		);
	}
}
var k = require("./13352.js");
var D = require("./40772.js");
var N = require("./70057.js");
var F = N;
var G = require(/*webcrack:missing*/ "./26853.js");
const O = (e) => {
	const [t, r] = (0, s.useState)(true);
	const [n, i] = (0, s.useState)(null);
	(0, s.useEffect)(() => {
		if (e.appid == 0 || e.trailerBaseID == 0) {
			i((0, M.we)("#TrailerPlayer_ID_NotProvided"));
			return;
		}
		(async () => {
			await _f.A.Get().QueueAppRequest(e.appid, {
				include_trailers: true,
			});
			if (_f.A.Get().BHasApp(e.appid)) {
				if (
					!_f.A.Get()
						.GetApp(e.appid)
						.GetAllTrailers()
						.GetTrailerByID(e.trailerBaseID)
				) {
					console.error(
						"Trailer " +
							e.trailerBaseID +
							" doesn't existed within appid " +
							e.appid,
					);
					i((0, M.we)("#TrailerPlayer_CouldNotLoad", e.appid, e.trailerBaseID));
				}
				r(false);
			} else {
				i((0, M.we)("#TrailerPlayer_CouldNotLoad", e.appid, e.trailerBaseID));
			}
		})();
	}, [e.appid, e.trailerBaseID]);
	if (n) {
		if (e.bIsPreviewMode) {
			return s.createElement(
				"div",
				{
					className: F.ErrorDiv,
				},
				n,
			);
		} else {
			return null;
		}
	}
	if (t) {
		return s.createElement(G.t, {
			string: (0, M.we)("#Loading"),
			size: "small",
		});
	}
	const a = _f.A.Get()
		.GetApp(e.appid)
		.GetAllTrailers()
		.GetTrailerByID(e.trailerBaseID);
	const o = a.GetTrailerMax();
	const l = {
		sPoster: a.GetScreenshot(),
		rgVideoSources: [
			{
				sURL: o.strWebMURL,
				sFormat: "video/webm",
			},
			{
				sURL: o.strMP4URL,
				sFormat: "video/mp4",
			},
		],
	};
	return s.createElement(D.L, {
		bControls: true,
		bAutoPlay: false,
		bLoop: false,
		video: l,
	});
};
var P = require("./93850.js");
var L = require("./44058.js");
var z = require(/*webcrack:missing*/ "./83957.js");
var x = z;
var U = require(/*webcrack:missing*/ "./42318.js");
const W = s.lazy(() => require.e(8396).then(require.bind(require, 72993)));
const V = (e) => {
	const t = (0, s.useRef)(null);
	const [r, n] = (0, s.useState)(L.K.Get().GetVODForAppID(e.appid));
	const [i, a] = (0, s.useState)(!Boolean(L.K.Get().GetVODForAppID(e.appid)));
	(0, s.useEffect)(() => () => t.current && t.current("VODPlayer: unmounting"));
	(0, s.useEffect)(() => {
		let i = r;
		if (r && r.appid != e.appid) {
			i = L.K.Get().GetVODForAppID(e.appid);
		}
		if (!i) {
			const r = async () => {
				if (t.current) {
					t.current();
				}
				const r = x.CancelToken.source();
				t.current = r.cancel;
				i = await L.K.Get().LoadVODForAppID(e.appid);
				if (!r.token.reason) {
					n(i);
				}
				a(false);
			};
			a(true);
			r();
		}
		if (r != i) {
			n(i);
		}
	}, [e.appid, r]);
	if (!r && e.bPreviewMode) {
		return s.createElement(
			"div",
			null,
			(0, M.we)(i ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading", e.appid),
		);
	} else {
		return s.createElement(
			"div",
			{
				className: P.BroadcastCtn,
			},
			s.createElement(
				U.tH,
				null,
				s.createElement(
					s.Suspense,
					{
						fallback: null,
					},
					s.createElement(W, {
						nAppIDVOD: e.appid,
						watchLocation: 9,
						bStartPaused: true,
					}),
				),
			),
		);
	}
};
var H = require("./23337.js");
var j = require("./12767.js");
var q = require(/*webcrack:missing*/ "./54644.js");
var Q = require(/*webcrack:missing*/ "./90242.js");
var Z = require(/*webcrack:missing*/ "./50376.js");
var Y = require("./29428.js");
function K(e) {
	const { fileUploadManager: t } = e;
	const r = (0, s.useRef)();
	return s.createElement(
		"div",
		{
			className: Y.Ctn,
		},
		s.createElement("input", {
			type: "file",
			accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
			style: {
				display: "none",
			},
			name: "fileupload",
			ref: r,
			onChange: (e) => {
				if (e.currentTarget?.files?.length > 0) {
					t.SetImageFileToUpload(e.currentTarget.files[0]);
					e.currentTarget.value = "";
				}
			},
		}),
		s.createElement(
			Q.fu,
			{
				type: "button",
				title: (0, M.we)("#Button_Upload"),
				onOKActionDescription: (0, M.we)("#Button_Upload"),
				onClick: () => r.current.click(),
			},
			s.createElement(Z.xv8, null),
		),
	);
}
var X = require(/*webcrack:missing*/ "./90095.js");
var J = require("./9123.js");
function $(e) {
	const { fileUploadManager: t } = e;
	const r = (0, X.q3)(() => t.file_upload_props.eUploadState);
	if (r == 1) {
		return s.createElement(ee, {
			fileUploadManager: t,
		});
	} else if (r == 3 || r == 5 || r == 4) {
		return s.createElement(re, {
			fileUploadManager: t,
		});
	} else if (r != 0) {
		return s.createElement(te, {
			fileUploadManager: t,
		});
	} else {
		return null;
	}
}
function ee(e) {
	const { fileUploadManager: t } = e;
	const r = t.file;
	return s.createElement(
		"div",
		{
			className: J.UploadPreviewContainer,
		},
		Boolean(r.type.indexOf("image") != -1) &&
			s.createElement("img", {
				className: J.UploadPreview,
				src: t.file_upload_data_url,
			}),
		Boolean(r.type.indexOf("video") != -1) && s.createElement(Z.CeX, null),
		s.createElement(
			"div",
			{
				className: J.FileUploadFileName,
			},
			"'",
			r.name,
			"'",
		),
		s.createElement(
			"div",
			{
				className: J.FileUploadCancel,
				onClick: () => t.Reset(),
			},
			s.createElement(Z.sED, null),
		),
		s.createElement(
			S.jn,
			{
				className: J.FileUploadBtn,
				onClick: async () => {
					await t.BeginFileUpload();
					t.Reset();
				},
			},
			(0, M.we)("#Button_Upload"),
		),
	);
}
function te(e) {
	const { fileUploadManager: t } = e;
	const [r, n, i] = (0, X.q3)(() => [
		t.file_upload_props.file,
		t.file_upload_props.displayFileName,
		t.file_upload_props.uploadProgress,
	]);
	const a = r ? (0, M.we)("#Uploading_Item", n) : "";
	const o = {
		width: i + "%",
	};
	return s.createElement(
		"div",
		{
			className: J.FileUploadProgressContainer,
		},
		s.createElement(
			"div",
			{
				className: J.FileUploadProgressName,
			},
			a,
		),
		s.createElement(
			"div",
			{
				className: (0, E.A)(
					J.FileUploadProgressBarContainer,
					"DialogProgressBar_ProgressBarContainer",
				),
			},
			s.createElement("div", {
				className: "DialogProgressBar_Value",
				style: o,
			}),
		),
	);
}
function re(e) {
	const { fileUploadManager: t } = e;
	const [r, n, i] = (0, X.q3)(() => [
		t.file_upload_props.strErrorDescription,
		t.file_upload_props.displayFileName,
		t.file_upload_props.eUploadState,
	]);
	const a = n ? (0, M.we)("#Uploading_Item", n) : "";
	const o = r || (0, M.we)("#Chat_Upload_ErrorCloud");
	return s.createElement(
		"div",
		{
			className: J.FileUploadProgressContainer,
		},
		s.createElement(
			"div",
			{
				className: J.FileUploadProgressName,
			},
			a,
		),
		s.createElement(
			"div",
			{
				className: J.FileUploadErrorDescription,
			},
			o,
		),
		s.createElement(
			"div",
			{
				className: J.FileUploadActions,
			},
			s.createElement(
				S.dR,
				{
					className: "DialogLayout_NoMinWidth",
				},
				Boolean(i == 3) &&
					s.createElement(
						S.jn,
						{
							onClick: async () => {
								await t.RetryFileUpload();
								t.Reset();
							},
						},
						(0, M.we)("#Chat_Upload_ErrorAction_Retry"),
					),
				s.createElement(
					S.$n,
					{
						onClick: () => t.ClearFileUploadError(),
					},
					(0, M.we)("#Chat_Upload_ErrorAction_Close"),
				),
			),
		),
	);
}
var ne = require("./6561.js");
var ie = require("./10606.js");
var ae = require("./13869.js");
var se = require("./69412.js");
var oe = require(/*webcrack:missing*/ "./30133.js");
var le = require(/*webcrack:missing*/ "./69164.js");
const ce =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
var me = require("./18522.js");
var ue = require("./95783.js");
var de = require("./86454.js");
var Ae = require("./60833.js");
function pe(e) {
	const { padded: t, gap: r, children: n, bLazyRenderChildren: i } = e;
	const a = s.createElement(
		"div",
		{
			style: {
				gap: r ? r + "px" : "unset",
			},
			className: (0, E.A)({
				[Ae.ScrollSnapCarousel]: true,
				ScrollSnapCarousel: true,
				SaleSectionCarousel: true,
				SaleSectionCarouselPadding: t,
				[e.className]: true,
			}),
		},
		n,
	);
	if (i) {
		return s.createElement(
			ue.K,
			{
				bHorizontal: false,
				placeholderWidth: 1,
				placeholderHeight: 1,
			},
			a,
		);
	} else {
		return a;
	}
}
var ge = require("./55116.js");
class he extends s.Component {
	render() {
		const { showArrows: e, arrowFill: t } = this.props;
		const r = this.props.visibleSlides;
		const n = this.props.totalSlides;
		const i = this.props.currentSlide;
		if (r >= n) {
			return null;
		}
		const a = (i * 100) / n;
		const o = (1 - Math.min(i + r, n) / n) * 100;
		const l = a + (r * 50) / n;
		const c = 100 - l;
		return s.createElement(
			"div",
			{
				className: me.pipScrollerContainer,
			},
			e &&
				s.createElement(
					oe._X,
					{
						className: (0, E.A)(
							me.pipScrollButton,
							me.left,
							me.carouselNavButton,
						),
					},
					s.createElement(Z.uMb, {
						fill: t || "white",
					}),
				),
			s.createElement(
				"div",
				{
					className: me.pipScroller,
				},
				s.createElement("div", {
					className: me.scrollBackground,
				}),
				s.createElement("div", {
					className: me.scrollForeground,
					style: {
						left: a + "%",
						right: o + "%",
					},
				}),
				s.createElement(
					"div",
					{
						className: me.scrollNavDiv,
						style: {
							left: "0%",
							width: l + "%",
						},
					},
					s.createElement(
						oe._X,
						{
							className: (0, E.A)(me.carouselNavButton, me.scrollNavButton),
							style: {
								color: "red",
							},
						},
						s.createElement("div", null),
					),
				),
				s.createElement(
					"div",
					{
						className: me.scrollNavDiv,
						style: {
							right: "0%",
							width: c + "%",
						},
					},
					s.createElement(
						oe.CC,
						{
							className: (0, E.A)(me.carouselNavButton, me.scrollNavButton),
						},
						s.createElement("div", null),
					),
				),
			),
			e &&
				s.createElement(
					oe.CC,
					{
						className: (0, E.A)(
							me.pipScrollButton,
							me.right,
							me.carouselNavButton,
						),
					},
					s.createElement(Z.uMb, {
						fill: t || "white",
					}),
				),
		);
	}
}
const Ce = (0, oe.Yw)(he, (e) => ({
	currentSlide: e.currentSlide,
	totalSlides: e.totalSlides,
	visibleSlides: e.visibleSlides,
}));
function _e(e) {
	const t = (0, T.Qn)();
	if ((!e.screenIsWide && !t) || e.bForceSimpleCarousel) {
		return s.createElement(
			pe,
			{
				...e,
			},
			e.children,
		);
	} else {
		return s.createElement(
			fe,
			{
				...e,
			},
			e.children,
		);
	}
}
function fe(e) {
	const t = (0, T.Qn)();
	const r = () => s.Children.count(e.children);
	const n = r();
	const i = Math.min(r(), e.visibleElements);
	if (!n || !i) {
		return null;
	}
	const a = i < n;
	const o = e.hideArrows || !a;
	const l = !a || e.hidePips;
	let c = 4 / 3;
	let m = true;
	if (e.slideAspectRatio) {
		c = e.slideAspectRatio;
		m = false;
	}
	const u = `items_in_row_${e.visibleElements}`;
	return s.createElement(
		le.Z,
		{
			"flow-children": "row",
			className: (0, E.A)(me.carouselBody, e.className, u),
			navKey: e.navKey,
		},
		s.createElement(
			oe.gi,
			{
				visibleSlides: e.visibleElements,
				totalSlides: r(),
				naturalSlideWidth: c * 100,
				naturalSlideHeight: 100,
				step: e.visibleElements,
				infinite: !e.disableEdgeWrap,
				isIntrinsicHeight: m,
				dragEnabled: false,
				touchEnabled: false,
				lockOnWindowScroll: true,
				orientation: "horizontal",
				disableKeyboard: true,
			},
			s.createElement(
				ye,
				{
					bHideArrows: o,
					bAutoAdvance: e.bAutoAdvance && !t,
					onSlide: e.onSlide,
					arrowFill: e.arrowFill,
				},
				s.Children.map(e.children, (t, r) => {
					const n = e.bLazyRenderChildren
						? s.createElement(
								ue.K,
								{
									rootMargin: "0px -5px 0px 100%",
									bHorizontal: true,
									placeholderWidth: 1,
									placeholderHeight: 1,
								},
								t,
							)
						: t;
					return s.createElement(
						oe.q7,
						{
							className: me.innerSlide,
							key: "slide_" + r,
							index: r,
						},
						n,
					);
				}),
			),
			!l &&
				(e.useTestScrollbar
					? s.createElement(Ce, {
							showArrows: o,
							carouselStore: null,
						})
					: s.createElement(
							"div",
							{
								className: me.breadcrumbContainer,
							},
							((t) =>
								s.Children.map(e.children, (e, r) =>
									r % t != 0
										? null
										: s.createElement(
												oe.cL,
												{
													slide: r,
													className: me.pip,
												},
												s.createElement("img", {
													src: ce,
												}),
											),
								))(i),
						)),
		),
	);
}
function be(e) {
	if (e) {
		window.clearTimeout(e.current);
		e.current = null;
	}
}
function ye(e) {
	const {
		bHideArrows: t,
		bAutoAdvance: r,
		children: n,
		onSlide: i,
		arrowFill: a,
	} = e;
	const o = s.useContext(oe.Yc);
	const l = s.useRef(o.state.currentSlide);
	const [c, m] = s.useState(null);
	const [u, d] = s.useState(!!r);
	const A = s.useRef(null);
	const p = s.useRef(null);
	s.useEffect(() => {
		const e = () => {
			A.current = window.setTimeout(() => {
				if (A.current) {
					be(A);
					let e = 0;
					if (
						o.state.currentSlide + o.state.visibleSlides <
						o.state.totalSlides
					) {
						e = Math.min(
							o.state.currentSlide + o.state.visibleSlides,
							o.state.totalSlides - o.state.visibleSlides,
						);
					}
					o.setStoreState({
						currentSlide: e,
					});
				}
			}, 8000);
		};
		if (u) {
			e();
		}
		const t = () => {
			const t = l.current;
			const r = o.state.currentSlide;
			if (i) {
				i(r);
			}
			m(r > t ? "Right" : r < t ? "Left" : null);
			be(p);
			p.current = window.setTimeout(() => {
				if (p.current) {
					m(null);
					be(p);
				}
			}, 1000);
			l.current = r;
			if (A.current) {
				be(A);
				d(false);
			} else if (u) {
				e();
			}
		};
		o.subscribe(t);
		return () => {
			o.unsubscribe(t);
			be(A);
			be(p);
		};
	}, [o, u]);
	const g = !!c && "CarouselSliding" + c;
	return s.createElement(
		"div",
		{
			className: (0, E.A)(me.sliderBody, "SliderBody", g),
		},
		!t &&
			s.createElement(
				oe._X,
				{
					className: (0, E.A)(
						me.carouselBtnCtn,
						me.left,
						me.carouselNavButton,
						"CarouselBtnLeft",
					),
				},
				s.createElement(Z.uMb, {
					fill: a || "white",
				}),
			),
		s.createElement(
			oe.Ap,
			{
				className: de.J.GetScrollableClassname(),
				classNameTray: me.slideTrayCustomize,
				classNameAnimation: me.DisableSliderMotion,
			},
			s.createElement(ge.q, null, n),
		),
		!t &&
			s.createElement(
				oe.CC,
				{
					className: (0, E.A)(
						me.carouselBtnCtn,
						me.right,
						me.carouselNavButton,
						"CarouselBtnRight",
					),
				},
				s.createElement(Z.uMb, {
					fill: a || "white",
				}),
			),
	);
}
function Se(e) {
	const t = (0, T.Qn)();
	const r = (0, se.a4)(se.Wn);
	const n = String((0, o.j$)(e.args, "autoadvance")).toLowerCase() === "true";
	return s.createElement(
		_e,
		{
			hideArrows: !r,
			hidePips: t,
			visibleElements: 1,
			useTestScrollbar: false,
			bLazyRenderChildren: true,
			screenIsWide: r,
			bAutoAdvance: n,
			className: v.ScreenshotCarousel,
		},
		e.children,
	);
}
var we = require("./4816.js");
var Be = require(/*webcrack:missing*/ "./89193.js");
var ve = require(/*webcrack:missing*/ "./12176.js");
var Ie = require("./31222.js");
var Ee = require("./82301.js");
var Me = require(/*webcrack:missing*/ "./49455.js");
var Te = require("./16154.js");
var Re = require(/*webcrack:missing*/ "./79769.js");
var ke = require(/*webcrack:missing*/ "./52451.js");
class De {
	m_mapInventoryByApp = new Map();
	m_mapPromises = new Map();
	m_listChangeCallback = new Map();
	m_SteamInterface = null;
	GetInventoryForApp(e) {
		return this.m_mapInventoryByApp.get(e);
	}
	GetItemDefsChangeForAppID(e) {
		if (!this.m_listChangeCallback.has(e)) {
			this.m_listChangeCallback.set(e, new Re.lu());
		}
		return this.m_listChangeCallback.get(e);
	}
	BHasLoadedDef(e) {
		return this.m_mapPromises.has(e);
	}
	SetTestAppCommunityItems(e, t) {
		this.m_mapInventoryByApp.set(e, t);
		this.GetItemDefsChangeForAppID(e).Dispatch(t);
		this.m_mapPromises.set(e, Promise.resolve(1));
	}
	async LoadCommunityInventory(e) {
		if (e) {
			if (!this.m_mapPromises.has(e)) {
				this.m_mapPromises.set(e, this.InternalLoadCommunityInventory(e));
			}
			return this.m_mapPromises.get(e);
		} else {
			return 2;
		}
	}
	async InternalLoadCommunityInventory(e) {
		const t = ve.w.Init(Ee.cU);
		t.Body().set_filter_appids([e]);
		let r = null;
		try {
			const n = await Ee.uy.GetCommunityInventory(
				this.m_SteamInterface.GetServiceTransport(),
				t,
			);
			if (n.GetEResult() == 1) {
				const t = new Array();
				n.Body()
					.items()
					.forEach((e) => t.push(e.toObject()));
				this.m_mapInventoryByApp.set(e, t);
				this.GetItemDefsChangeForAppID(e).Dispatch(t);
				return 1;
			}
			r = (0, Te.H)(n);
		} catch (e) {
			r = (0, Te.H)(e);
		}
		console.error(
			"CQuestCommunityInventoryStore.InternalLoadCommunityInventory failed: on appid " +
				e +
				" error: " +
				r?.strErrorMsg,
			r,
		);
		return 2;
	}
	static s_Singleton;
	static Get() {
		if (!De.s_Singleton) {
			De.s_Singleton = new De();
			De.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_QuestCommunityInventoryStore = De.s_Singleton;
			}
		}
		return De.s_Singleton;
	}
	constructor() {}
	Init() {
		const e = (0, T.Tc)("read_inventory_token", "application_config");
		(0, Me.w)(
			e,
			"CQuestCommunityInventoryStore: missing read_inventory:steam oauth permission",
		);
		this.m_SteamInterface = new Ie.D(T.TS.WEBAPI_BASE_URL, e);
	}
}
function Ne(e) {
	const [t, r] = (0, s.useState)(De.Get().GetInventoryForApp(e));
	(0, s.useEffect)(() => {
		if (e && !De.Get().BHasLoadedDef(e)) {
			De.Get().LoadCommunityInventory(e);
		}
	}, [e]);
	(0, ke.hL)(De.Get().GetItemDefsChangeForAppID(e), r);
	return t;
}
(0, n.Cg)([ke.oI], De.prototype, "SetTestAppCommunityItems", null);
var Fe = require("./89697.js");
var Ge = require("./30737.js");
var Oe = require("./22435.js");
class Pe {
	m_mapAppToDefs = new Map();
	m_mapPromises = new Map();
	m_listChangeCallback = new Map();
	GetItemDefForAppID(e) {
		return this.m_mapAppToDefs.get(e);
	}
	GetItemDefsChangeForEventID(e) {
		if (!this.m_listChangeCallback.has(e)) {
			this.m_listChangeCallback.set(e, new Re.lu());
		}
		return this.m_listChangeCallback.get(e);
	}
	BHasLoadedDef(e) {
		return this.m_mapPromises.has(e);
	}
	SetTestItemDefs(e, t) {
		this.m_mapAppToDefs.set(e, t);
		this.GetItemDefsChangeForEventID(e).Dispatch(t);
		this.m_mapPromises.set(e, Promise.resolve(1));
	}
	async LoadAppCommunityItems(e, t) {
		if (e) {
			if (!this.m_mapPromises.has(e)) {
				this.m_mapPromises.set(e, this.InternalLoadAppCommunityItems(e, t));
			}
			return this.m_mapPromises.get(e);
		} else {
			return 2;
		}
	}
	async InternalLoadAppCommunityItems(e, t) {
		let r = null;
		try {
			const n =
				T.TS.COMMUNITY_BASE_URL +
				(t
					? "minigame/ajaxgetgameitemdefsforeditor"
					: "minigame/ajaxgetgameitemdefs");
			const i = {
				appid: e,
				origin: self.origin,
				l: T.TS.LANGUAGE,
				sessionid: t ? T.TS.SESSIONID : undefined,
			};
			const a = await x.get(n, {
				params: i,
				withCredentials: t,
			});
			if (
				a?.status == 200 &&
				a?.data?.success == 1 &&
				a?.data?.item_definitions
			) {
				this.m_mapAppToDefs.set(e, a.data.item_definitions);
				this.GetItemDefsChangeForEventID(e).Dispatch(a.data.item_definitions);
				return 1;
			}
			r = (0, Te.H)(a);
		} catch (e) {
			r = (0, Te.H)(e);
		}
		console.error(
			"CSaleMiniGameItemDefStore.InternalLoadAppCommunityItems failed: on appid " +
				e +
				" edit? " +
				t +
				" error: " +
				r?.strErrorMsg,
			r,
		);
		return 2;
	}
	static s_Singleton;
	static Get() {
		if (!Pe.s_Singleton) {
			Pe.s_Singleton = new Pe();
			Pe.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_SaleMiniGameItemDefStore = Pe.s_Singleton;
			}
		}
		return Pe.s_Singleton;
	}
	constructor() {}
	Init() {}
}
function Le(e, t, r) {
	const n = (function (e, t) {
		const [r, n] = (0, s.useState)(Pe.Get().GetItemDefForAppID(e));
		(0, s.useEffect)(() => {
			if (e && !Pe.Get().BHasLoadedDef(e)) {
				Pe.Get().LoadAppCommunityItems(e, t);
			}
		}, [e, t]);
		(0, ke.hL)(Pe.Get().GetItemDefsChangeForEventID(e), n);
		return r;
	})(e, r);
	const [i, a] = (0, s.useState)(null);
	(0, s.useEffect)(() => {
		if (e && n && i == null) {
			const i = n.find(
				(n) => (r || n.active) && n.appid == e && n.item_type == t,
			);
			if (i) {
				a(i);
			}
		}
	}, [i, n, e, t, r]);
	return i;
}
var ze = require("./6472.js");
function xe(e) {
	const {
		appid: t,
		item_image_small: r,
		item_image_large: n,
		item_movie_mp4: i,
		item_movie_webm: a,
		item_title: o,
	} = e;
	if (i?.length > 0 && a?.length > 0) {
		const n = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r}`;
		const o = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`;
		const l = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${i}`;
		return s.createElement(
			s.Fragment,
			null,
			s.createElement(
				"video",
				{
					muted: true,
					controls: false,
					autoPlay: true,
					loop: true,
					poster: n,
					className: e.videoClassName,
				},
				s.createElement("source", {
					src: o,
					type: "video/webm",
				}),
				Boolean(!T.TS.IN_CLIENT) &&
					s.createElement("source", {
						src: l,
						type: "video/mp4",
					}),
			),
		);
	}
	{
		const i = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r || n}`;
		return s.createElement("img", {
			className: e.className,
			src: i,
			alt: o,
		});
	}
}
function Ue(e) {
	const { appid: t, community_item_type: r, bForEdit: n } = e;
	const i = Le(t, r, n);
	const a =
		i && !i.active
			? s.createElement(
					"div",
					{
						className: ze.WarningStylesBackground,
					},
					(0, M.we)("#Sale_Section_RewardShelf_ItemInActiveWarning"),
				)
			: undefined;
	if (i) {
		return s.createElement(
			s.Fragment,
			null,
			s.createElement(xe, {
				...i,
			}),
			a,
		);
	} else {
		return s.createElement(G.t, {
			size: "small",
			string: (0, M.we)("#Loading"),
		});
	}
}
function We(e) {
	const t = (0, Fe.Oz)();
	const { bLoading: r } = t;
	const { className: n, bPreviewMode: i, rewardType: a } = e;
	return s.createElement(
		S.$n,
		{
			className: (0, E.A)("CSSClaimItemButton", n),
			onClick: (e) => {
				if (t.bCanClaimNewItem) {
					(0, ae.pg)(
						s.createElement(He, {
							rewardType: a,
						}),
						(0, q.uX)(e),
					);
				} else if (
					T.TS.WEB_UNIVERSE == "dev" ||
					T.TS.WEB_UNIVERSE == "beta" ||
					i
				) {
					(0, ae.pg)(
						s.createElement(He, {
							rewardType: a,
						}),
						(0, q.uX)(e),
					);
					console.log(
						"Show dialog for debugging, since already claimed: ",
						(0, Be.HO)(t),
					);
				}
			},
			disabled: r,
		},
		Boolean(r)
			? s.createElement(G.t, {
					string: (0, M.we)("#Loading"),
					size: "small",
				})
			: s.createElement(Ve, {
					claimState: t,
				}),
	);
}
function Ve(e) {
	const { claimState: t, strButtonOverride: r, rewardType: n } = e;
	if (t.bAlreadyClaimedCurrentItem) {
		return s.createElement(
			"div",
			{
				className: (0, E.A)(Oe.CheckMark, "CSSClaimedState"),
			},
			s.createElement(Z.Jlk, null),
			s.createElement(
				"span",
				null,
				" ",
				r?.length > 0 ? r : (0, M.we)("#Sale_ClaimableReward_AlreadyClaimed"),
			),
		);
	}
	let i = (0, M.we)("#Sale_ClaimableReward_generic");
	switch (t?.community_item_class || n) {
		case 11:
			i = (0, M.we)("#Sale_ClaimableReward_sticker");
			break;
		case 8:
			i = (0, M.we)("#Sale_ClaimableReward_profilemodifier");
			break;
		case 15:
			i = (0, M.we)("#Sale_ClaimableReward_animatedavatar");
	}
	return s.createElement(
		"span",
		{
			className: "CSSUnclaimedState",
		},
		i,
	);
}
function He(e) {
	const { closeModal: t, rewardType: r } = e;
	const { fnClaimItem: n } = (0, Fe.CC)();
	const i = (0, Ge.vs)();
	const [a, o] = s.useState(null);
	s.useEffect(() => {
		if (!i.bLoading) {
			i.fnSetLoading(true);
			n()
				.then((e) => {
					o(e);
					console.log("claim response", (0, Be.HO)(e));
					if (e.appid) {
						let t = (0, M.we)("#Sale_ClaimableReward_completed_generic");
						const n = a?.community_item_class || r;
						switch (n) {
							case 11:
								t = (0, M.we)("#Sale_ClaimableReward_completed_sticker");
								break;
							case 8:
								t = (0, M.we)(
									"#Sale_ClaimableReward_completed_profilemodifier",
								);
								break;
							case 15:
								t = (0, M.we)("#Sale_ClaimableReward_completed_animatedavatar");
						}
						i.fnSetStrSuccess("   ");
						i.fnSetElSuccess(
							s.createElement(
								"div",
								{
									className: Oe.DialogCtn,
								},
								s.createElement("span", null, t),
								s.createElement(je, {
									appid: e.appid,
									community_item_type: e.community_item_type,
									rewardType: n,
								}),
							),
						);
					} else {
						i.fnSetStrError((0, M.we)("#Sale_ClaimableReward_Busy"));
					}
				})
				.catch((e) => i.fnSetStrError((0, M.we)("#Sale_ClaimableReward_Busy")));
		}
	}, [a?.community_item_class, i, n, r]);
	let l = (0, M.we)("#Sale_ClaimableReward_generic");
	switch (a?.community_item_class || r) {
		case 11:
			l = (0, M.we)("#Sale_ClaimableReward_sticker");
			break;
		case 8:
			l = (0, M.we)("#Sale_ClaimableReward_profilemodifier");
			break;
		case 15:
			l = (0, M.we)("#Sale_ClaimableReward_animatedavatar");
	}
	return s.createElement(Ge.Hh, {
		state: i,
		strDialogTitle: l,
		closeModal: t,
	});
}
function je(e) {
	const { appid: t, community_item_type: r, rewardType: n } = e;
	if (t && r) {
		return s.createElement(
			s.Fragment,
			null,
			s.createElement(Ue, {
				appid: t,
				community_item_type: r,
			}),
			Boolean(n == 8) &&
				s.createElement(qe, {
					appid: t,
					community_item_type: r,
				}),
		);
	} else {
		return null;
	}
}
function qe(e) {
	const { appid: t, community_item_type: r } = e;
	const n = Ne(t);
	const [i, a] = s.useState(false);
	if (!n) {
		return null;
	}
	const o = n.find((e) => e.item_type == r);
	if (o) {
		return s.createElement(
			"div",
			{
				className: Oe.EquipCtn,
			},
			Boolean(i)
				? s.createElement(
						"div",
						null,
						(0, M.we)("#Sale_ClaimableReward_profilemodifier_apply_success"),
					)
				: s.createElement(
						S.$n,
						{
							onClick: (e) => {
								(0, Fe.ns)(o).then((e) => {
									if (e == 1) {
										a(true);
									}
								});
							},
						},
						(0, M.we)("#Sale_ClaimableReward_profilemodifier_apply"),
					),
			s.createElement(
				Q.Ii,
				{
					href: `${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}`,
				},
				(0, M.we)("#Sale_ClaimableReward_profilemodifier_view"),
			),
		);
	} else {
		return s.createElement(
			"div",
			null,
			s.createElement(
				Q.Ii,
				{
					href: `${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}/edit/goldenprofile`,
				},
				(0, M.we)("#Sale_ClaimableReward_profilemodifier_choose"),
			),
			s.createElement(
				Q.Ii,
				{
					href: `${T.TS.COMMUNITY_BASE_URL}profiles/${T.iA.steamid}`,
				},
				(0, M.we)("#Sale_ClaimableReward_profilemodifier_view"),
			),
		);
	}
}
let Qe = null;
function Ze() {
	if (Qe == null) {
		Qe = new Map([
			[
				"url",
				{
					Constructor: R,
					autocloses: false,
				},
			],
			[
				"h1",
				{
					Constructor: o.Tu(o.Zb, B.Header1),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"h2",
				{
					Constructor: o.Tu(o.Sz, B.Header2),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"h3",
				{
					Constructor: o.Tu(o.ZS, B.Header3),
					autocloses: false,
					skipFollowingNewline: true,
				},
			],
			[
				"quote",
				{
					Constructor: o.Tu(o.Pk, B.BlockQuote),
					autocloses: false,
				},
			],
			[
				"list",
				{
					Constructor: o.Tu(o.B8, B.UnorderedList),
					autocloses: false,
					skipInternalNewline: true,
				},
			],
			[
				"olist",
				{
					Constructor: o.Tu(o._J, B.OrderedList),
					autocloses: false,
					skipInternalNewline: true,
				},
			],
			[
				"*",
				{
					Constructor: o.ck,
					autocloses: true,
					skipInternalNewline: true,
				},
			],
			[
				"img",
				{
					Constructor: Ye,
					autocloses: false,
				},
			],
			[
				"previewyoutube",
				{
					Constructor: y.gH,
					autocloses: false,
				},
			],
			[
				"looping_media",
				{
					Constructor: o.$A,
					autocloses: false,
				},
			],
			[
				"video",
				{
					Constructor: o.UT,
					autocloses: false,
				},
			],
			[
				"youtubeorvideo",
				{
					Constructor: y.Eo,
					autocloses: false,
				},
			],
			[
				"trailer",
				{
					Constructor: Xe,
					autocloses: true,
				},
			],
			[
				"vod",
				{
					Constructor: Je,
					autocloses: false,
				},
			],
			[
				"speaker",
				{
					Constructor: $e,
					autocloses: false,
					skipInternalNewline: true,
					allowWrapTextForCopying: true,
				},
			],
			[
				"giveawayeligible",
				{
					Constructor: tt,
					autocloses: false,
				},
			],
			[
				"claimitem",
				{
					Constructor: rt,
					autocloses: true,
				},
			],
			[
				"packagepurchaseable",
				{
					Constructor: nt,
					autocloses: false,
				},
			],
			[
				"actiondialog",
				{
					Constructor: at,
					autocloses: false,
				},
			],
			[
				"uploadfilebutton",
				{
					Constructor: ot,
					autocloses: true,
				},
			],
			[
				"docimg",
				{
					Constructor: Ke,
					autocloses: false,
				},
			],
			[
				"carousel",
				{
					Constructor: Se,
					autocloses: false,
				},
			],
			[
				"meetsteamsessiongroup",
				{
					Constructor: w.ac,
					autocloses: false,
				},
			],
		]);
	}
	return Qe;
}
function Ye(e) {
	const { showErrorInfo: t, event: r } = e.context;
	let n = (0, o.j$)(e.args, "src") || e.children?.toString();
	if (!n && ((n = (0, o.j$)(e.args)), !n == null)) {
		return null;
	}
	const i = o._D(n, e.language, r?.rtime32_last_modified);
	if (typeof i == "string") {
		let e;
		n = i;
		e = (!r || !r.BHasTag("auto_rssfeed")) && !(0, m.ZF)(n);
		if (!t) {
			n = (0, m.L$)(n);
		}
		if (t) {
			return s.createElement(H.i, {
				src: n,
				crossOrigin: e ? "anonymous" : undefined,
			});
		} else {
			return s.createElement(ne.o, {
				src: n,
				crossOrigin: e ? "anonymous" : undefined,
			});
		}
	}
	return s.createElement(j.c, {
		rgSources: i,
	});
}
function Ke(e) {
	const t = (0, o.j$)(e.args);
	if (t == null || t == null || t.length == 0) {
		return "";
	}
	const r = e && e.children && e.children.toString();
	const n = new Array();
	n.push(
		`${T.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${T.TS.LANGUAGE}/${t}`,
	);
	if (T.TS.LANGUAGE != "english") {
		n.push(
			`${T.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`,
		);
	}
	return s.createElement(j.c, {
		rgSources: n,
		alt: r,
	});
}
function Xe(e) {
	const t = et(
		e.args,
		"appid",
		e.context.event.appid ? e.context.event.appid : 0,
	);
	const r = et(e.args, "trailerid", 0);
	return s.createElement(O, {
		appid: t,
		trailerBaseID: r,
		bIsPreviewMode: e.context.showErrorInfo,
	});
}
function Je(e) {
	const t = et(e.args, "appid", 0);
	return s.createElement(V, {
		appid: t,
		bPreviewMode: e.context.showErrorInfo,
	});
}
function $e(e) {
	const t = (0, o.j$)(e.args, "name");
	const r = (0, o.j$)(e.args, "title");
	const n = (0, o.j$)(e.args, "company");
	const i = (0, o.j$)(e.args, "photo");
	if (e.context.bShowShortSpeakerInfo) {
		return s.createElement(k.S8, {
			name: t,
			title: r,
			company: n,
			photo: i,
			bio: e.children,
		});
	} else {
		return s.createElement(k.$k, {
			name: t,
			title: r,
			company: n,
			photo: i,
			bio: e.children,
		});
	}
}
function et(e, t, r) {
	const n = (0, o.j$)(e, t);
	if (n === undefined || n == null) {
		return r;
	} else {
		return Number.parseInt(n);
	}
}
function tt(e) {
	const t = (0, o.j$)(e.args, "name");
	const r = ((0, o.j$)(e.args, "visible") || "false").toLowerCase() === "true";
	const n = (0, _.h)(t);
	if (!t) {
		if (e.context.showErrorInfo) {
			return s.createElement("div", null, "Failed to provide giveaway name");
		} else {
			return null;
		}
	}
	if (n && n.registered && ((n.eligible && r) || (!n.eligible && !r))) {
		return e.children;
	} else {
		return null;
	}
}
function rt(e) {
	const t = e.context.showErrorInfo;
	if (!T.iA.logged_in) {
		return s.createElement(
			S.$n,
			{
				onClick: we.vg,
				className: "CSSClaimItemLoginButton",
			},
			(0, M.we)("#Sale_ClaimableReward_Login"),
		);
	}
	const r = (0, o.j$)(e.args, "type");
	let n;
	if (r) {
		switch (r) {
			case "profilemodifier":
				n = 8;
				break;
			case "sticker":
				n = 11;
		}
	}
	return s.createElement(We, {
		bPreviewMode: t,
		rewardType: n,
	});
}
function nt(e) {
	const t = Number.parseInt((0, o.j$)(e.args, "id")) || 0;
	const r = ((0, o.j$)(e.args, "visible") || "false").toLowerCase() === "true";
	const n = e.context.showErrorInfo;
	const [i, a] = (0, b.Gg)(t, {});
	if (!t || a == 1) {
		if (!t && n) {
			return s.createElement("div", null, "Error: PackageID Not Set");
		} else {
			return null;
		}
	}
	let l = false;
	l = _f.A.Get().BHasStoreItem(t, 1)
		? Boolean(i.GetBestPurchaseOption())
		: !_f.A.Get().BIsPackageUnavailableDueToCountryRestriction(t);
	if ((!l && !r) || (l && r)) {
		return e.children;
	} else {
		return null;
	}
}
function it(e) {
	if (e === "GameAwardDrop2022") {
		const t = (0, _.h)(e);
		const r = (0, _.Q)();
		if (t) {
			if (t.registered) {
				return {
					bInitialState: false,
					bSuccessState: t.eligible,
					bFailedState: !t.eligible,
					fnAction: t.eligible
						? undefined
						: async () => {
								await r.fnCreateRegistration(e);
							},
				};
			} else {
				return {
					bInitialState: true,
					fnAction: async () => {
						await r.fnCreateRegistration(e);
					},
				};
			}
		} else {
			return {
				bInitialState: true,
			};
		}
	}
	return {
		bInitialState: true,
	};
}
function at(e) {
	const t = (0, o.j$)(e.args, "action");
	const r = (0, o.j$)(e.args, "initialToken");
	const n = (0, o.j$)(e.args, "successToken");
	const i = (0, o.j$)(e.args, "failToken");
	const a = it(t);
	if (!t || !r || !n || !i) {
		if (e.context.showErrorInfo) {
			return s.createElement(
				"div",
				null,
				"Failed to provide all tokens. Dialog will not appear",
			);
		} else {
			return null;
		}
	}
	if (T.iA.logged_in || t == "test" || t == "nologinrequired") {
		return s.createElement(
			S.$n,
			{
				className: "CSSActionDialogButton",
				onClick: (a) => {
					(0, ae.pg)(
						s.createElement(
							st,
							{
								strAction: t,
								strInitialToken: r,
								strSuccessToken: n,
								strFailToken: i,
							},
							e.children,
						),
						(0, q.uX)(a),
					);
				},
			},
			Boolean(a.bInitialState) && (0, M.we)(r),
			Boolean(a.bSuccessState) && (0, M.we)(n),
			Boolean(a.bFailedState) && (0, M.we)(i),
		);
	} else {
		return s.createElement(
			S.$n,
			{
				className: "CSSActionDialogButton",
				onClick: we.vg,
			},
			(0, M.we)("#Login_SignIn"),
		);
	}
}
function st(e) {
	const {
		strAction: t,
		children: r,
		closeModal: n,
		strInitialToken: i,
		strSuccessToken: a,
		strFailToken: o,
	} = e;
	const l = it(t);
	const [c, m] = s.useState(Boolean(l.fnAction));
	s.useEffect(() => {
		if (l.fnAction) {
			m(true);
			l.fnAction().finally(() => m(false));
		}
	}, [l]);
	return s.createElement(
		ie.eV,
		{
			bDisableBackgroundDismiss: true,
			closeModal: n,
			onCancel: n,
			className: "CSSActionDialogDialog",
		},
		s.createElement(
			S.Y9,
			null,
			Boolean(l.bInitialState) && (0, M.we)(i),
			Boolean(l.bSuccessState) && (0, M.we)(a),
			Boolean(l.bFailedState) && (0, M.we)(o),
		),
		s.createElement(
			S.nB,
			null,
			s.createElement(
				S.a3,
				null,
				c
					? s.createElement(G.t, {
							size: "medium",
							position: "center",
							string: (0, M.we)("#Loading"),
						})
					: r,
			),
		),
	);
}
function ot(e) {
	const { showErrorInfo: t, event: r } = e.context;
	const n = r.clanSteamID.GetAccountID();
	const [i] = s.useState(
		new C.i6(
			(function (e) {
				const t = {
					PopulateBeginFileUploadFormData: (t) => {
						t.append("clan_account_id", "" + e);
					},
					PopulateCommitFileUploadFormData: (t) => {
						t.append("clan_account_id", "" + e);
					},
					GetBeginFileUploadURL: () =>
						T.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
					GetCommitFileUploadURL: () =>
						T.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
					LogFileUploadMessage: (e) => {
						console.log("UploadFileButton: ", e);
					},
					GetMaxFileSizeMB: () => 100,
				};
				return t;
			})(n),
		),
	);
	if (
		n == h.GU ||
		n == h.bv ||
		(T.TS.EUNIVERSE == 2 && n == h.mW) ||
		(T.TS.EUNIVERSE == 1 && n == h.Kd)
	) {
		return s.createElement(
			"div",
			null,
			s.createElement(K, {
				fileUploadManager: i,
			}),
			s.createElement($, {
				fileUploadManager: i,
			}),
		);
	} else if (t) {
		return s.createElement("div", null, (0, M.we)("#CloudUpload_NotSupport"));
	} else {
		return null;
	}
}
var lt = require("./50712.js");
var ct = require(/*webcrack:missing*/ "./8573.js");
var mt = require("./83610.js");
var ut = require("./44184.js");
var dt = ut;
var At = require("./52850.js");
var pt = require("./39039.js");
const gt = (e) => /^\d+$/.test(e);
function ht(e) {
	const { sharedFileID: t } = e;
	const r = (0, pt.m)("SharedFileSnippet");
	const [n, i] = (0, s.useState)(false);
	const [a, o] = (0, s.useState)(() => ({
		sharedfileid: t,
		title: (0, M.we)("#Loading"),
		description: "",
		type: "",
		previewurl: "",
		appid: 0,
		url: T.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=" + t,
	}));
	(0, s.useEffect)(() => {
		(async () => {
			try {
				const e = await At.R.LoadSharedFileDynamicData([t], r);
				if (!r.token.reason && e.length > 0) {
					const t = e[0];
					if (gt(t.url)) {
						t.url =
							T.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=" + t.url;
					}
					o(t);
					console.log(e[0]);
					i(true);
				}
			} catch (e) {
				const t = (0, Te.H)(e);
				console.error("SharedFileSnippet: " + t.strErrorMsg, t);
			}
		})();
	}, [r, t]);
	let l = a.personnaname !== undefined && a.personnaname.length > 0;
	return s.createElement(
		"a",
		{
			href: a.url,
			className: dt.DynamicLinkBox,
			"data-modal-content-sizetofit": !!a.bSizeToFit,
			"data-appid": a.appid,
			"data-publishedfileid": t,
		},
		s.createElement("img", {
			className: dt.DynamicLink_Preview,
			src: a.previewurl,
		}),
		s.createElement(
			"div",
			{
				className: dt.DynamicLink_Content,
			},
			s.createElement(
				"div",
				{
					className: dt.DynamicLink_Name,
				},
				a.title,
			),
			s.createElement(
				"div",
				null,
				s.createElement(
					"span",
					{
						className: dt.DynamicLink_Type,
					},
					a.type,
				),
			),
			l &&
				s.createElement(
					"div",
					{
						className: dt.DynamicLink_Author,
					},
					(0, M.PP)(
						"#EventEditor_Author",
						s.createElement(
							"span",
							{
								className: dt.DynamicLink_AuthorName,
							},
							a.personnaname,
						),
					),
				),
			s.createElement(
				"div",
				{
					className: dt.DynamicLink_Description,
				},
				a.description,
			),
		),
	);
}
var Ct = require(/*webcrack:missing*/ "./41230.js");
var _t = require(/*webcrack:missing*/ "./44846.js");
var ft = require("./88341.js");
var bt = require("./78771.js");
var yt = require("./13484.js");
var St = require("./95020.js");
let wt = class extends s.Component {
	state = {
		bLoading: this.props.announcementGID
			? !yt.O3.BHasClanAnnouncementGID(this.props.announcementGID)
			: !yt.O3.BHasClanAnnouncementGID(this.props.eventGID),
		bFailedLoad: false,
	};
	m_cancelSignal = x.CancelToken.source();
	componentDidMount() {
		this.HandleLoadEventInfo();
	}
	async HandleLoadEventInfo() {
		const {
			appid: e,
			strVanity: t,
			announcementGID: r,
			eventGID: n,
			strGroupVanity: i,
		} = this.props;
		let a = this.props.clanSteamID;
		try {
			if (this.state.bLoading) {
				if (t !== undefined) {
					a = (await bt.ac.LoadOGGClanInfoForIdentifier(t)).clanSteamID;
				} else if (i !== undefined) {
					a = (await bt.ac.LoadOGGClanInfoForGroupVanity(i)).clanSteamID;
				}
				const s = yt.O3.LoadPartnerEventGeneric(a, e, n, r, 0);
				let o = await s;
				await Promise.all([
					_f.A.Get().QueueAppRequest(o.appid, {
						include_assets: true,
						include_basic_info: true,
						include_release: true,
					}),
				]);
				this.setState({
					bFailedLoad: false,
					bLoading: false,
				});
			}
		} catch (e) {
			this.HandleError(e);
		}
	}
	HandleError(e) {
		let t = (0, Te.H)(e);
		const {
			eventGID: r,
			announcementGID: n,
			strGroupVanity: i,
			strVanity: a,
		} = this.props;
		console.error(
			"EventSnippet hit error on announceGID " +
				n +
				" eventGID " +
				r +
				" strVanity " +
				a +
				" strGroupVanity " +
				i +
				" error: " +
				t.strErrorMsg,
		);
		this.setState({
			bFailedLoad: true,
		});
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("component unmounted");
	}
	render() {
		const {
			appid: e,
			announcementGID: t,
			eventGID: r,
			strURL: n,
			fnFilterImageURLsForKnownFailures: i,
			fnImageFailureCallback: a,
		} = this.props;
		if (this.state.bFailedLoad) {
			return (0, u.Pm)(n);
		}
		if (this.state.bLoading) {
			return s.createElement(G.t, null);
		}
		let o =
			t !== undefined
				? yt.O3.GetClanEventFromAnnouncementGID(t)
				: yt.O3.GetClanEventModel(r);
		if (o == null) {
			return (0, u.Pm)(n);
		}
		let l = (0, _t.sf)(T.TS.LANGUAGE);
		let c = o.GetImageForSizeAsArrayWithFallback(
			"capsule",
			l,
			ft.wI.capsule_main,
		);
		if (i) {
			c = i(c);
		}
		let m = o.GetNameWithFallback(l);
		let d = o.GetSubTitleWithSummaryFallback(l);
		let A = _f.A.Get().GetApp(e)?.GetName();
		let p = (0, M.TW)(o.GetStartTimeAndDateUnixSeconds());
		return s.createElement(
			St.tj,
			{
				eventModel: o,
				route: St.PH.k_eView,
				className: dt.DynamicLinkBox,
				"data-modal-content-sizetofit": true,
				"data-appid": e,
			},
			s.createElement(j.c, {
				className: dt.DynamicLink_Preview,
				rgSources: c,
				onIncrementalError: (e, t, r) => a && a(t),
			}),
			s.createElement(
				"div",
				{
					className: dt.DynamicLink_Content,
				},
				s.createElement(
					"div",
					{
						className: dt.DynamicLink_Author,
					},
					(0, M.we)(
						o.type == 28
							? "#EventDisplay_Share_Announcement"
							: "#EventDisplay_Share_Event",
						A,
					),
					s.createElement(
						"span",
						{
							className: dt.DynamicLink_Date,
						},
						p,
					),
				),
				s.createElement(
					"div",
					{
						className: dt.DynamicLink_Name,
					},
					s.createElement(
						"div",
						{
							className: dt.DynamicLink_Type,
						},
						m,
					),
				),
				s.createElement(
					"div",
					{
						className: dt.DynamicLink_Description,
					},
					d,
				),
			),
		);
	}
};
wt = (0, n.Cg)([Ct.PA], wt);
var Bt = require("./53272.js");
var vt = Bt;
let It = class extends s.Component {
	state = {
		bSummaryMode: true,
		bLoadedMetaData: false,
	};
	async componentDidMount() {
		let e =
			"https://sketchfab.com/oembed?url=https://sketchfab.com/models/" +
			this.props.modelID;
		try {
			let t = await x.get(e);
			this.setState({
				bLoadedMetaData: true,
				data: t.data,
			});
		} catch (e) {
			this.setState({
				bError: true,
			});
			console.error(
				"SketchFabEmbed failed to load: " + (0, Te.H)(e).strErrorMsg,
			);
		}
	}
	OnSketchFabClick() {
		if (this.state.bLoadedMetaData) {
			this.setState({
				bSummaryMode: false,
			});
		}
	}
	render() {
		const { modelID: e } = this.props;
		if (this.state.bError) {
			return s.createElement(
				"div",
				{
					className: vt.dynamiclink_box,
					onClick: this.OnSketchFabClick,
				},
				s.createElement("span", null, e),
				s.createElement(
					"span",
					null,
					(0, M.we)("#EventDisplay_SketchFab_Error_Network"),
				),
			);
		} else if (this.state.bSummaryMode) {
			return s.createElement(
				"div",
				{
					className: vt.dynamiclink_box,
					onClick: this.OnSketchFabClick,
				},
				Boolean(this.state.bLoadedMetaData)
					? s.createElement(
							s.Fragment,
							null,
							s.createElement("img", {
								className: vt.dynamiclink_preview,
								src: this.state.data.thumbnail_url,
							}),
							s.createElement("img", {
								className: vt.sketchfab_play_overlay_image,
							}),
							s.createElement(
								"div",
								{
									className: vt.dynamiclink_content,
								},
								s.createElement(
									"div",
									{
										className: vt.dynamiclink_name,
									},
									s.createElement(
										"span",
										{
											className: vt.dynamiclink_type,
										},
										(0, M.we)("#EventDisplay_Sketchfab"),
									),
									s.createElement("div", null, this.state.data.title, "\xA0"),
								),
								s.createElement(
									"div",
									{
										className: vt.dynamiclink_author,
									},
									this.state.data.author_name,
								),
							),
						)
					: s.createElement(G.t, {
							size: "medium",
						}),
			);
		} else {
			return s.createElement(
				"div",
				{
					className: vt.sketchfabmodelembedded,
				},
				s.createElement("iframe", {
					className: vt.sketchfabmodelembedded,
					src:
						"https://sketchfab.com/models/" +
						this.props.modelID +
						"/embed?autostart=1",
					frameBorder: 0,
					allowFullScreen: true,
				}),
			);
		}
	}
};
(0, n.Cg)([ke.oI], It.prototype, "OnSketchFabClick", null);
It = (0, n.Cg)([Ct.PA], It);
var Et = require("./75888.js");
class Mt {
	m_mapDefIDtoDefinition = new Map();
	m_mapDefIDToPromise = new Map();
	m_defChangeCallback = new Map();
	m_mapCategoryAndClassToItems = new Map();
	m_mapCategoryAndClassToPromise = new Map();
	m_defCategoryAndClassToChangeCallback = new Map();
	m_SteamInterface = null;
	GetItem(e) {
		return this.m_mapDefIDtoDefinition.get(e);
	}
	GetItemChangeCallback(e) {
		if (!this.m_defChangeCallback.has(e)) {
			this.m_defChangeCallback.set(e, new Re.lu());
		}
		return this.m_defChangeCallback.get(e);
	}
	GetKeyCategoryAndClass(e, t) {
		return e + "_" + t;
	}
	GetItemsByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		return this.m_mapCategoryAndClassToItems.get(r);
	}
	GetItemsByCategoryAndClassCallback(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (!this.m_defCategoryAndClassToChangeCallback.has(r)) {
			this.m_defCategoryAndClassToChangeCallback.set(r, new Re.lu());
		}
		return this.m_defCategoryAndClassToChangeCallback.get(r);
	}
	async LoadRewardDefinition(e) {
		if (!this.m_mapDefIDToPromise.has(e)) {
			this.m_mapDefIDToPromise.set(e, this.InternalLoadRewardDefinition(e));
		}
		return this.m_mapDefIDToPromise.get(e);
	}
	async InternalLoadRewardDefinition(e) {
		if (this.m_mapDefIDtoDefinition.has(e)) {
			return this.m_mapDefIDtoDefinition.get(e);
		}
		const t = ve.w.Init(Et.GB);
		t.Body().set_definitionids([e]);
		let r = null;
		try {
			const n = await Et.a9.QueryRewardItems(
				this.m_SteamInterface.GetServiceTransport(),
				t,
			);
			if (n.GetEResult() == 1 && n.Body().definitions()?.length > 0) {
				(0, Me.w)(
					n.Body().definitions()?.length == 1,
					`Requested definition ID ${e} and receive # ${n.Body().definitions()?.length}, expecting exactly one.`,
				);
				const t = n.Body().definitions()[0].toObject();
				this.m_mapDefIDtoDefinition.set(e, t);
				this.GetItemChangeCallback(e).Dispatch(t);
				return t;
			}
			r = (0, Te.H)(n);
		} catch (e) {
			r = (0, Te.H)(e);
		}
		console.error(
			"CLoyaltyRewardDefinitionStore.LoadRewardDefinition failed: " +
				r?.strErrorMsg,
			r,
		);
		return null;
	}
	async LoadRewardDefinitionByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (!this.m_mapCategoryAndClassToPromise.has(r)) {
			this.m_mapCategoryAndClassToPromise.set(
				r,
				this.InternalLoadRewardDefinitionByCategoryAndClass(e, t),
			);
		}
		return this.m_mapCategoryAndClassToPromise.get(r);
	}
	async InternalLoadRewardDefinitionByCategoryAndClass(e, t) {
		const r = this.GetKeyCategoryAndClass(e, t);
		if (this.m_mapCategoryAndClassToItems.has(r)) {
			return this.m_mapCategoryAndClassToItems.get(r);
		}
		const n = ve.w.Init(Et.GB);
		n.Body().set_community_item_classes([t]);
		n.Body().set_filter_match_any_category_tags([e]);
		let i = null;
		try {
			const a = await Et.a9.QueryRewardItems(
				this.m_SteamInterface.GetServiceTransport(),
				n,
			);
			if (a.GetEResult() == 1 && a.Body().definitions()?.length > 0) {
				const n = a
					.Body()
					.definitions()
					.map((e) => e.toObject());
				n.forEach((e) => {
					if (!this.m_mapDefIDtoDefinition.has(e.defid)) {
						this.m_mapDefIDtoDefinition.set(e.defid, e);
						this.GetItemChangeCallback(e.defid).Dispatch(e);
					}
				});
				this.m_mapCategoryAndClassToItems.set(r, n);
				this.GetItemsByCategoryAndClassCallback(e, t).Dispatch(n);
				if (T.TS.WEB_UNIVERSE == "dev" || T.TS.WEB_UNIVERSE == "beta") {
					console.log(
						"CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass loaded " +
							n.length,
					);
				}
				return n;
			}
			i = (0, Te.H)(a);
		} catch (e) {
			i = (0, Te.H)(e);
		}
		console.error(
			"CLoyaltyRewardDefinitionStore.LoadRewardDefinitionByCategoryAndClass failed: " +
				i?.strErrorMsg,
			i,
		);
		return null;
	}
	static s_Singleton;
	static Get() {
		if (!Mt.s_Singleton) {
			Mt.s_Singleton = new Mt();
			Mt.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_LoyaltyRewardDefinitionStore = Mt.s_Singleton;
			}
		}
		return Mt.s_Singleton;
	}
	constructor() {}
	Init() {
		this.m_SteamInterface = new Ie.D(T.TS.WEBAPI_BASE_URL);
	}
}
var Tt = require(/*webcrack:missing*/ "./98995.js");
var Rt = require("./49433.js");
var kt = Rt;
function Dt(e) {
	const { defid: t, url: r } = e;
	const n = (function (e) {
		const [t, r] = (0, s.useState)(Mt.Get().GetItem(e));
		(0, s.useEffect)(() => {
			if (!t) {
				Mt.Get().LoadRewardDefinition(e);
			}
		}, [e, t]);
		(0, ke.hL)(Mt.Get().GetItemChangeCallback(e), r);
		return t;
	})(t);
	if (!n || !n.community_item_data) {
		return null;
	}
	const i = n.appid;
	const a = n.community_item_data.item_image_large;
	const o = `${T.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${i}/${a}`;
	if (T.TS.WEB_UNIVERSE == "dev") {
		console.log("reward itemdef", (0, Be.HO)(n));
	}
	return s.createElement(
		"div",
		{
			className: kt.Ctn,
		},
		s.createElement(
			Tt.he,
			{
				toolTipContent: n.community_item_data.item_description,
			},
			s.createElement("img", {
				src: o,
				alt: n.community_item_data.item_title,
			}),
		),
	);
}
var Nt = require("./80493.js");
var Ft = require("./55448.js");
var Gt = require("./58839.js");
function Ot(e) {
	const { inputType: t, id: r } = e;
	const [n] = (0, b.G6)(r, (0, Gt.SW)(t), {});
	let i = t == "bundle" ? "bundle" : t == "sub" ? "sub" : "game";
	return s.createElement(
		"div",
		{
			className: (0, E.A)(Ft.AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
		},
		s.createElement(Nt.pb, {
			id: r,
			type: i,
			bShowDemoButton: n?.GetAppType() == 1,
			bAllowTwoLinesForHeader: true,
		}),
	);
}
const Pt =
	/(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|store\.steamchina\.com)\/(app|bundle|sub)\/(\d+)/i;
const Lt =
	/(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
const zt =
	/(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i;
const xt =
	/(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i;
const Ut = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i;
const Wt = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i;
const Vt = /twitter\.com\/(\w+)(\/?)$/i;
const Ht = /twitter\.com\/hashtag\/(\w+)(\/?)$/i;
const jt = /twitch\.tv\/(\w+)(\/?)$/i;
const qt =
	/(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
const Qt =
	/(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
let Zt = null;
function Yt(e, t) {
	if ((0, T.Y2)()) {
		return null;
	}
	const r = (0, lt.XU)(e);
	if (r?.strVideoID !== undefined) {
		return s.createElement(mt.A, {
			videoID: r.strVideoID,
			nStartSeconds: r.nStartSeconds,
			classNameAlign: "",
			classNameSize: dt.sizeFull,
			bShowVideoImmediately: false,
		});
	} else {
		return (0, u.Pm)(e, t?.event);
	}
}
function Kt(e, t) {
	if ((0, T.Y2)()) {
		return null;
	}
	const r = new RegExp(Ut).exec(e);
	if (r && r.length > 1) {
		const e = r[1];
		if (e?.length > 0) {
			let r =
				"https://medal.tv/clip/" +
				e +
				"/?autoplay=0&donate=0" +
				(t && t.event ? "&steamappid=" + t.event.appid : "");
			return s.createElement("iframe", {
				className: B.MedalTVWidget,
				src: r,
				frameBorder: 0,
				allow: "autoplay",
			});
		}
	}
	return (0, u.Pm)(e, t?.event);
}
function Xt(e, t) {
	let r = new RegExp(Wt).exec(e);
	if (r && r.length > 1) {
		let e = r[1];
		if (e && e.length > 1) {
			return s.createElement(It, {
				modelID: e,
			});
		}
	}
	return (0, u.Pm)(e, t?.event);
}
function Jt(e, t) {
	const r = e.split("?");
	let n;
	if (r.length == 2) {
		const e = new URLSearchParams(r[1]);
		if (e.has("id")) {
			n = e.get("id");
		}
	}
	if (n !== undefined) {
		return s.createElement(ht, {
			sharedFileID: n,
		});
	} else {
		return (0, u.Pm)(e, t?.event);
	}
}
function $t(e) {
	let t = (0, m.wm)(e).toLocaleLowerCase();
	let r = (0, m.wm)(T.TS.STORE_BASE_URL);
	let n = (0, m.wm)(T.TS.COMMUNITY_BASE_URL);
	const i =
		T.TS.WEB_UNIVERSE === "dev" ||
		(0, m.wm)(T.TS.STORE_BASE_URL).endsWith(".steam.dev");
	return (
		t == r ||
		t == n ||
		(i &&
			(t.includes("steampowered.com") ||
				t.includes("steamcommunity.com") ||
				t.includes("steamchina.com")))
	);
}
function er(e, t) {
	if ($t(e)) {
		let t = new RegExp(Pt).exec(e);
		if (t && t.length > 2) {
			let e = t[1];
			let r = Number(t[2]);
			if (r > 0) {
				return s.createElement(Ot, {
					id: r,
					inputType: e,
				});
			}
		}
	}
	return (0, u.Pm)(e, t?.event);
}
function tr(e, t) {
	if ($t(e)) {
		const t = new RegExp(Qt).exec(e);
		if (t && t.length > 1) {
			const r = Number(t[1]);
			if (r > 0) {
				return s.createElement(
					"div",
					{
						className: (0, E.A)(B.LoyaltyRewardCtn),
					},
					s.createElement(Dt, {
						defid: r,
						url: e,
					}),
				);
			}
		}
	}
	return (0, u.Pm)(e, t?.event);
}
function rr(e, t) {
	if ($t(e)) {
		let t = new RegExp(Lt).exec(e);
		if (t && t.length > 2) {
			let r;
			let n;
			let i;
			let a;
			if (t[1] == "gid") {
				n = new ct.b(t[2]);
			} else if (t[1] == "groups") {
				a = t[2];
			} else if (isNaN(+t[2])) {
				i = t[2];
			} else {
				r = Number(t[2]);
			}
			let o = t[3];
			if (
				((r !== undefined && r > 0) ||
					i !== undefined ||
					a !== undefined ||
					n !== undefined) &&
				o != null &&
				o.length > 0
			) {
				return s.createElement(wt, {
					appid: r,
					clanSteamID: n,
					strVanity: i,
					strGroupVanity: a,
					announcementGID: o,
					strURL: e,
				});
			}
		}
	}
	return (0, u.Pm)(e, t?.event);
}
function nr(e, t) {
	return mr(xt, e, t);
}
function ir(e, t) {
	return mr(zt, e, t);
}
function ar(e, t) {
	if ((0, T.Y2)()) {
		return null;
	} else {
		return cr(e, s.createElement(Z.KKS, null), "@", t);
	}
}
function sr(e, t) {
	if ((0, T.Y2)()) {
		return null;
	} else {
		return cr(e, s.createElement(Z.KKS, null), "#", t);
	}
}
function or(e, t) {
	if ((0, T.Y2)()) {
		return null;
	} else {
		return cr(e, s.createElement(Z.qcc, null), undefined, t);
	}
}
function lr(e, t) {
	return cr(e, s.createElement(Z.Qte, null), undefined, t);
}
function cr(e, t, r, n) {
	let i;
	const a = e.endsWith("/") ? e.length - 1 : e.length;
	const o = e.lastIndexOf("/", a - 1);
	if (o != -1 && o + 1 < e.length) {
		i = e.substring(o + 1, a);
	}
	if (r && i) {
		i = r + i;
	}
	const l = (0, u.Pm)(e, n?.event, i ?? e);
	return s.createElement(
		"div",
		{
			className: B.SocialLink,
		},
		s.createElement(
			"div",
			{
				className: B.SocialIcon,
			},
			t,
		),
		l,
	);
}
function mr(e, t, r) {
	if ($t(t)) {
		let r = new RegExp(e).exec(t);
		if (r && r.length > 2) {
			let e;
			let n;
			let i;
			let a;
			if (r[1] == "gid") {
				n = new ct.b(r[2]);
			} else if (r[1] == "group") {
				n = ct.b.InitFromClanID(Number.parseInt(r[2]));
			} else if (r[1] == "groups") {
				a = r[2];
			} else if (isNaN(+r[2])) {
				i = r[2];
			} else {
				e = Number(r[2]);
			}
			const o = r[3];
			if (
				((e !== undefined && e > 0) ||
					i !== undefined ||
					a !== undefined ||
					n !== undefined) &&
				o != null &&
				o.length > 0
			) {
				return s.createElement(wt, {
					appid: e,
					clanSteamID: n,
					strVanity: i,
					strGroupVanity: a,
					eventGID: o,
					strURL: t,
				});
			}
		}
	}
	return (0, u.Pm)(t, r?.event);
}
export class f extends s.Component {
	m_parser;
	constructor(e) {
		super(e);
		this.m_parser = new i.B(
			f.sm_BBCodeDictionary,
			this.ElementAccumulator,
			e.languageOverride,
		);
	}
	ElementAccumulator(e) {
		return new g(
			new p(
				new A(
					new a.OJ(new a.R8(), 0),
					e,
					(Zt == null &&
						(Zt = (0, T.Y2)()
							? [
									{
										urlRegExp: new RegExp(Pt),
										fnBBComponent: er,
									},
									{
										urlRegExp: new RegExp(zt),
										fnBBComponent: ir,
									},
									{
										urlRegExp: new RegExp(xt),
										fnBBComponent: nr,
									},
									{
										urlRegExp: new RegExp(Lt),
										fnBBComponent: rr,
									},
									{
										urlRegExp: new RegExp(qt),
										fnBBComponent: lr,
									},
								]
							: [
									{
										urlRegExp: new RegExp(/youtu.be|youtube.com/i),
										fnBBComponent: Yt,
									},
									{
										urlRegExp: new RegExp(
											/community.+sharedfiles\/filedetails\/\?id=\d+/i,
										),
										fnBBComponent: Jt,
									},
									{
										urlRegExp: new RegExp(Pt),
										fnBBComponent: er,
									},
									{
										urlRegExp: new RegExp(zt),
										fnBBComponent: ir,
									},
									{
										urlRegExp: new RegExp(xt),
										fnBBComponent: nr,
									},
									{
										urlRegExp: new RegExp(Lt),
										fnBBComponent: rr,
									},
									{
										urlRegExp: new RegExp(Ut),
										fnBBComponent: Kt,
									},
									{
										urlRegExp: new RegExp(Wt),
										fnBBComponent: Xt,
									},
									{
										urlRegExp: new RegExp(Vt),
										fnBBComponent: ar,
									},
									{
										urlRegExp: new RegExp(Ht),
										fnBBComponent: sr,
									},
									{
										urlRegExp: new RegExp(jt),
										fnBBComponent: or,
									},
									{
										urlRegExp: new RegExp(qt),
										fnBBComponent: lr,
									},
									{
										urlRegExp: new RegExp(Qt),
										fnBBComponent: tr,
									},
								]),
					Zt),
					{
						partnerEventStore: this.props.partnerEventStore,
						event: this.props.event,
					},
				),
			),
			e,
		);
	}
	static sm_BBCodeDictionary = new Map([
		...Array.from(o.W4.entries()),
		...Array.from(Ze().entries()),
	]);
	static AddDictionary(e) {
		f.sm_BBCodeDictionary = new Map([
			...Array.from(f.sm_BBCodeDictionary.entries()),
			...Array.from(e.entries()),
		]);
	}
	render() {
		this.m_parser.UpdateOverrideLanguage(this.props.languageOverride);
		return this.m_parser.ParseBBCode(this.props.text, {
			showErrorInfo: this.props.showErrorInfo,
			event: this.props.event,
			bShowShortSpeakerInfo: this.props.bShowShortSpeakerInfo,
		});
	}
}
(0, n.Cg)([ke.oI], f.prototype, "ElementAccumulator", null);
