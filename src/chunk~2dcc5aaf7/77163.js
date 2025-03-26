var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
import { ShuffleArray } from "../../actual_src/utils/arrayutils.js";
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./83957.js");
var u = m;
var d = require(/*webcrack:missing*/ "./50376.js");
var A = require("./1965.js");
var p = require("./94406.js");
var g = require("./3963.js");
var h = require(/*webcrack:missing*/ "./8573.js");
var C = require("./91705.js");
var _ = require(/*webcrack:missing*/ "./12176.js");
var f = require(/*webcrack:missing*/ "./69164.js");
class b extends i.PureComponent {
	m_elContainerRef = i.createRef();
	get clientWidth() {
		return this.m_elContainerRef.current.clientWidth;
	}
	get clientHeight() {
		return this.m_elContainerRef.current.clientHeight;
	}
	render() {
		let {
			width: e,
			height: t,
			children: r,
			className: n,
			wrapperClassName: a,
			style: s,
			...o
		} = this.props;
		let l = a || "";
		let c = {
			width: "100%",
			position: "relative",
		};
		c.paddingBottom = ((t / e) * 100).toFixed(2) + "%";
		s = s || {};
		s.position = "absolute";
		s.top = 0;
		s.right = 0;
		s.bottom = 0;
		s.left = 0;
		return i.createElement(
			f.Z,
			{
				focusable: true,
				ref: this.m_elContainerRef,
				style: c,
				className: l,
				...o,
				onActivate: this.props.onActivate,
			},
			i.createElement(
				"div",
				{
					style: s,
					className: n,
				},
				r,
			),
		);
	}
}
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var S = require("./82325.js");
var _w = require("./34792.js");
var B = require("./94715.js");
var v = require("./17231.js");
var I = require("./13672.js");
var E = require(/*webcrack:missing*/ "./26853.js");
var M = require("./34043.js");
var T = require("./87935.js");
var R = require("./20414.js");
var _k = require(/*webcrack:missing*/ "./20590.js");
var D = require("./4042.js");
var N = require(/*webcrack:missing*/ "./31084.js");
var F = require(/*webcrack:missing*/ "./88750.js");
var G = require("./13869.js");
var O = require("./10606.js");
var P = require("./48434.js");
var L = P;
import {
	GetOwningWindowForEvent,
	IsHTMLElement,
} from "../../actual_src/utils/domutils.js";
class x extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			strReportText: "",
			strErrorText: "",
		};
	}
	static get Title() {
		return (0, Localize)("#ReportItem_Title");
	}
	OnReportTextChange(e) {
		this.setState({
			strReportText: e.currentTarget.value,
		});
	}
	NavigateToDMCAItem(e) {
		GetOwningWindowForEvent(e).location.href =
			`${T.B7.GetCommunityURL()}dmca/create/${this.props.published_file_id}`;
		this.CloseModal();
	}
	ReportItem() {
		(0, R.RE)(this.props.published_file_id, this.state.strReportText)
			.then((e) => {
				this.props.onReported();
				this.CloseModal();
			})
			.catch((e) => {
				console.error("ReportItem failed", e);
				this.setState({
					strErrorText: (0, Localize)("#ReportItem_Error"),
				});
			});
	}
	CloseModal() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	render() {
		return i.createElement(
			O.o0,
			{
				strTitle: x.Title,
				onOK: this.ReportItem,
				onCancel: this.CloseModal,
				bOKDisabled: !this.state.strReportText,
				strOKButtonText: (0, Localize)("#ReportItem_SubmitReport"),
			},
			i.createElement(
				"div",
				{
					className: L.FormContainer,
				},
				i.createElement(
					"div",
					{
						className: L.Description,
					},
					(0, Localize)("#ReportItem_Description"),
				),
				i.createElement(
					"div",
					{
						className: L.Description2,
					},
					(0, Localize)("#ReportItem_Description_Line2"),
				),
				i.createElement("textarea", {
					className: L.InputBox,
					value: this.state.strReportText,
					onChange: this.OnReportTextChange,
					autoFocus: true,
				}),
				this.state.strErrorText &&
					i.createElement(
						"div",
						{
							className: L.ErrorText,
						},
						this.state.strErrorText,
					),
				i.createElement(
					"div",
					{
						className: L.DMCA,
					},
					LocalizeReact(
						"#ReportItem_DMCA",
						i.createElement(
							"a",
							{
								onClick: this.NavigateToDMCAItem,
							},
							(0, Localize)("#ReportItem_DMCA_LinkText"),
						),
					),
				),
			),
		);
	}
}
(0, n.Cg)([l.oI], x.prototype, "OnReportTextChange", null);
(0, n.Cg)([l.oI], x.prototype, "NavigateToDMCAItem", null);
(0, n.Cg)([l.oI], x.prototype, "ReportItem", null);
(0, n.Cg)([l.oI], x.prototype, "CloseModal", null);
var U = require(/*webcrack:missing*/ "./98995.js");
var W = require(/*webcrack:missing*/ "./31958.js");
var V = require(/*webcrack:missing*/ "./49455.js");
var H = require("./66901.js");
var j = H;
var q = require(/*webcrack:missing*/ "./90242.js");
var Q = require(/*webcrack:missing*/ "./72476.js");
var Z = require("./64608.js");
var Y = require("./61175.js");
var K = require("./18057.js");
var X;
(function (e) {
	e[(e.Init = 0)] = "Init";
	e[(e.Loading = 1)] = "Loading";
	e[(e.MoreContent = 2)] = "MoreContent";
	e[(e.OutOfContent = 3)] = "OutOfContent";
	e[(e.Errored = 4)] = "Errored";
})((X ||= {}));
const J = [
	{
		eSize: 36,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 36,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 36,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 36,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 36,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 65,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 65,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 65,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 65,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 65,
		nWidth: 1,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 8,
		nWidth: 2,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 8,
		nWidth: 2,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 20,
		nWidth: 3,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
	{
		eSize: 130,
		nWidth: 0,
		item: undefined,
		eVoteDirection: R.bJ.None,
	},
];
class $ {
	m_rows = Array();
	m_loadingState = X.Init;
	m_nWidth = 0;
	m_vecRowTemplates = [];
	m_nNextPage = 1;
	m_unAppID = 0;
	m_cancelAxios = null;
	m_nResizeTimer = undefined;
	m_vecCards = [];
	m_bHasEmptyRows = undefined;
	constructor(e) {
		(0, s.Gn)(this);
		this.m_unAppID = e;
	}
	CancelRequests() {
		if (this.m_cancelAxios) {
			this.m_cancelAxios.cancel();
			this.m_cancelAxios = null;
		}
		if (this.m_nResizeTimer) {
			window.clearTimeout(this.m_nResizeTimer);
		}
	}
	get rows() {
		return this.m_rows;
	}
	get loadingState() {
		return this.m_loadingState;
	}
	get hasEmptyRows() {
		return this.m_bHasEmptyRows;
	}
	OnBind(e) {
		this.m_nWidth = e;
		this.m_vecRowTemplates = ie(this.m_nWidth);
		this.ResetContent();
	}
	ResetContent() {
		const [e] = _w.rV.GetClientSetting("library_disable_community_content");
		if (e) {
			return;
		}
		let t = [];
		for (const e of J.concat(J, J)) {
			t.push(Object.assign({}, e));
		}
		const r = this.BuildRowsForCards(t);
		this.m_rows = r;
		this.m_bHasEmptyRows = true;
	}
	OnResize(e) {
		this.m_nWidth = e;
		if (this.m_nResizeTimer) {
			window.clearTimeout(this.m_nResizeTimer);
		}
		this.m_nResizeTimer = window.setTimeout(() => {
			this.CheckAndRebuildTemplates();
		}, 500);
	}
	CheckAndRebuildTemplates() {
		this.m_nResizeTimer = undefined;
		const e = ie(this.m_nWidth);
		if (JSON.stringify(e) != JSON.stringify(this.m_vecRowTemplates)) {
			console.log("Community templates changed, regenerating all content");
			this.m_vecRowTemplates = e;
			const t = this.BuildRowsForCards(this.m_vecCards.slice());
			this.m_rows = t;
		}
	}
	LoadAdditionalContent() {
		if (this.m_loadingState == X.MoreContent || this.m_loadingState == X.Init) {
			this.m_loadingState = X.Loading;
			this.LoadCommunityContentAndVotes(this.m_unAppID, this.m_nNextPage++)
				.then((e) => {
					this.m_loadingState = X.MoreContent;
					if (e.vecContent.length == 0) {
						if (this.hasEmptyRows) {
							this.m_rows.length = 0;
							this.m_bHasEmptyRows = false;
						}
						this.m_loadingState = X.OutOfContent;
					} else {
						this.AddCommunityContent(e);
					}
				})
				.catch((e) => {
					console.log("Feed load error", e);
					if (this.hasEmptyRows) {
						this.m_rows.length = 0;
						this.m_bHasEmptyRows = false;
					}
					this.m_loadingState = X.Errored;
				});
		}
	}
	async LoadCommunityContentAndVotes(e, t) {
		this.m_cancelAxios = u.CancelToken.source();
		let r = await (0, C.uc)(e, t, this.m_cancelAxios);
		let n = new Set(this.m_vecCards.map((e) => e.item.published_file_id));
		r = r.filter((e) => !n.has(e.published_file_id));
		let i = r.map((e) => e.published_file_id);
		this.m_cancelAxios = u.CancelToken.source();
		let a = await (0, R.dK)(i, this.m_cancelAxios);
		this.m_cancelAxios = null;
		return {
			vecContent: r,
			mapVotes: a,
		};
	}
	BuildRowsForCards(e) {
		let t = [];
		while (e.length > 0 && this.m_vecRowTemplates.length > 0) {
			let r = oe(e, this.m_vecRowTemplates);
			if (r) {
				t.push(r);
			} else {
				e.splice(0, 1);
			}
		}
		return t;
	}
	AddCommunityContent(e) {
		let { vecContent: t, mapVotes: r } = e;
		let n = [];
		for (let e of t) {
			const t = ae(e);
			const i = se(t);
			let a = R.bJ.None;
			let s = false;
			let o = r.get(e.published_file_id);
			if (o !== undefined) {
				a = o.vote;
				s = o.bReported;
			}
			if (s) {
				console.log("Filtering reported item", e.published_file_id);
			} else {
				const r = {
					eSize: t,
					nWidth: i,
					item: e,
					eVoteDirection: a,
				};
				this.m_vecCards.push(r);
				n.push(r);
			}
		}
		if (this.m_bHasEmptyRows) {
			for (let e = 0; e < this.m_rows.length; e++) {
				const t = this.m_rows[e];
				if (t.vecItems.every((e) => e.item == null)) {
					const r = [];
					for (const i of t.vecItems) {
						const a = n.findIndex(
							(e) => e.eSize == i.eSize && e.nWidth == i.nWidth,
						);
						if (a === -1) {
							console.warn("No match for item", i, ", deleting row", e, t);
							n.splice(0, 0, ...r);
							r.length = 0;
							this.m_rows.splice(e, 1);
							e--;
							break;
						}
						{
							const e = n[a];
							r.push(e);
							n.splice(a, 1);
						}
					}
					if (r.length) {
						(0, V.w)(r.length == t.vecItems.length, "Row length mismatch");
						for (let e = 0; e < t.vecItems.length; e++) {
							t.vecItems[e].eVoteDirection = r[e].eVoteDirection;
							t.vecItems[e].item = r[e].item;
						}
					}
				}
			}
			this.m_bHasEmptyRows = false;
		}
		const i = this.BuildRowsForCards(n);
		this.m_rows.push(...i);
	}
}
(0, n.Cg)([s.sH.shallow], $.prototype, "m_rows", undefined);
(0, n.Cg)([s.sH], $.prototype, "m_loadingState", undefined);
(0, n.Cg)([s.sH], $.prototype, "m_bHasEmptyRows", undefined);
(0, n.Cg)([l.oI], $.prototype, "CheckAndRebuildTemplates", null);
(0, n.Cg)([s.XI.bound], $.prototype, "LoadAdditionalContent", null);
export let w = class extends i.Component {
	m_loader = null;
	m_elInnerContainer;
	m_resizeObserver;
	m_intersectionObserver;
	m_bOnScreen = undefined;
	m_nContentLoadTimeout = undefined;
	constructor(e) {
		super(e);
		this.m_loader = new $(this.props.appid);
	}
	componentDidUpdate(e) {
		if (e.appid != this.props.appid) {
			if (this.m_nContentLoadTimeout) {
				window.clearTimeout(this.m_nContentLoadTimeout);
			}
			this.m_bOnScreen = undefined;
			this.m_loader.ResetContent();
			this.DelayCheckAndLoadInitialContent();
		}
	}
	componentWillUnmount() {
		this.StopListening();
		if (this.m_loader) {
			this.m_loader.CancelRequests();
		}
		if (this.m_nContentLoadTimeout) {
			window.clearTimeout(this.m_nContentLoadTimeout);
		}
	}
	StopListening() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = undefined;
		}
		if (this.m_intersectionObserver) {
			this.m_intersectionObserver.disconnect();
			this.m_intersectionObserver = undefined;
		}
	}
	DelayCheckAndLoadInitialContent() {
		this.m_nContentLoadTimeout = window.setTimeout(
			this.CheckAndLoadInitialContent,
			1000,
		);
	}
	CheckAndLoadInitialContent() {
		this.m_nContentLoadTimeout = undefined;
		if (this.m_bOnScreen) {
			this.AutoLoadAdditionalContent();
		}
	}
	BindInnerContainer(e) {
		this.m_elInnerContainer = e;
		this.StopListening();
		if (e) {
			this.m_resizeObserver = (0, l.Fd)(e, this.OnResize);
			this.m_intersectionObserver = (0, l.md)(e, this.OnIntersection, {
				root: null,
			});
			this.m_loader.OnBind(this.m_elInnerContainer.clientWidth);
			this.DelayCheckAndLoadInitialContent();
		}
	}
	OnResize() {
		if (
			this.m_loader &&
			this.m_elInnerContainer &&
			!this.m_elInnerContainer.ownerDocument.fullscreenElement
		) {
			this.m_loader.OnResize(this.m_elInnerContainer.clientWidth);
		}
	}
	OnIntersection(e, t) {
		if (e.length) {
			if (
				e[0].isIntersecting &&
				this.m_bOnScreen === false &&
				this.m_loader.loadingState == X.Init
			) {
				this.AutoLoadAdditionalContent();
			}
			this.m_bOnScreen = e[0].isIntersecting;
		}
	}
	AutoLoadAdditionalContent() {
		console.log("Loading content", this.props.appid);
		const [e] = _w.rV.GetClientSetting("library_disable_community_content");
		if (!e) {
			this.m_loader.LoadAdditionalContent();
		}
	}
	LoadAdditionalContent() {
		this.m_loader.LoadAdditionalContent();
	}
	render() {
		let e = i.createElement(
			"span",
			{
				className: j.Highlight,
			},
			(0, Localize)("#AppDetails_Community_Tooltip1"),
		);
		let t = i.createElement(
			"span",
			{
				className: j.Highlight,
			},
			(0, Localize)("#AppDetails_Community_Tooltip2"),
		);
		let r = i.createElement(
			U.t1,
			null,
			i.createElement(U.MA, null, e),
			i.createElement("br", null),
			i.createElement(U.MA, null, t),
		);
		let n = this.m_loader.rows.map((e, t) =>
			i.createElement(te, {
				key: t,
				row: e,
			}),
		);
		const [a] = _w.rV.GetClientSetting("library_disable_community_content");
		return i.createElement(
			A.n,
			{
				feature: 2,
				className: j.CommunityContentContainer,
				label: (0, Localize)("#AppDetails_SectionTitle_Community"),
				tooltip: r,
				headerClass: j.HeaderStyles,
				showRule: true,
			},
			i.createElement(
				f.Z,
				{
					"flow-children": "grid",
					className: (0, c.A)(
						j.InnerContainer,
						this.m_loader.hasEmptyRows && j.HasBlanks,
					),
					ref: this.BindInnerContainer,
				},
				n,
				this.m_loader.loadingState == X.Loading &&
					i.createElement(
						"div",
						{
							className: j.ThrobberBox,
						},
						i.createElement(E.t, {
							size: "large",
							position: "center",
						}),
					),
				this.m_loader.loadingState == X.MoreContent &&
					i.createElement(_k.Y, {
						onEnter: this.AutoLoadAdditionalContent,
					}),
				(this.m_loader.loadingState == X.OutOfContent ||
					this.m_loader.loadingState == X.Errored) &&
					i.createElement(
						"div",
						{
							className: j.NoContent,
						},
						(0, Localize)("#AppDetails_CommunityFeed_OutOfContent"),
					),
				a &&
					i.createElement(
						"div",
						{
							className: j.LoadContentButton,
							onClick: this.LoadAdditionalContent,
						},
						(0, Localize)("#AppDetails_CommunityFeed_LoadCommunity"),
					),
			),
		);
	}
};
(0, n.Cg)([l.oI], w.prototype, "DelayCheckAndLoadInitialContent", null);
(0, n.Cg)([l.oI], w.prototype, "CheckAndLoadInitialContent", null);
(0, n.Cg)([l.oI], w.prototype, "BindInnerContainer", null);
(0, n.Cg)([l.oI], w.prototype, "OnResize", null);
(0, n.Cg)([l.oI], w.prototype, "OnIntersection", null);
(0, n.Cg)([l.oI], w.prototype, "AutoLoadAdditionalContent", null);
(0, n.Cg)([l.oI], w.prototype, "LoadAdditionalContent", null);
w = (0, n.Cg)([o.PA], w);
class te extends i.Component {
	state = {
		nColumns: 0,
	};
	m_elRow;
	m_resizeObserver;
	m_nResizeTimer = undefined;
	BindRow(e) {
		this.m_elRow = e;
		this.m_resizeObserver?.disconnect();
		if (e) {
			this.m_resizeObserver = (0, l.Fd)(e, this.OnResize);
			this.CalculateColumns();
		}
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
	}
	OnResize() {
		if (!this.m_elRow || !this.m_elRow.ownerDocument.fullscreenElement) {
			if (this.m_nResizeTimer) {
				window.clearTimeout(this.m_nResizeTimer);
			}
			this.m_nResizeTimer = window.setTimeout(() => {
				this.CalculateColumns();
			}, 500);
		}
	}
	CalculateColumns() {
		this.m_nResizeTimer = undefined;
		if (this.m_elRow) {
			const e = ne(this.m_elRow.clientWidth);
			if (e != this.state.nColumns) {
				this.setState({
					nColumns: e,
				});
			}
		}
	}
	render() {
		let e = this.props.row;
		let t = this.state.nColumns;
		t = Math.min(t || e.rowTemplate.nColumns, e.rowTemplate.nColumns);
		let r = e.vecItems;
		if (t != e.rowTemplate.nColumns) {
			let n = e.vecItems.slice();
			const i = {
				strName: (0, c.A)(j.AutoRow, j.Singles, j.Truncated),
				eMatch: 7,
				vecCards: [
					{
						nItemSpace: t,
					},
				],
				nColumns: t,
				nRows: 1,
			};
			let a = le(n, i);
			if (
				!a &&
				((a = le(
					n.sort((e, t) => se(t.eSize) - se(e.eSize)),
					i,
				)),
				!a)
			) {
				return null;
			}
			r = [];
			for (let e of a) {
				r.push(n[e]);
				n.splice(e, 1);
			}
		}
		let n = [];
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			let a = t.item;
			n.push(
				i.createElement(ce, {
					key: a ? a.published_file_id : "blank" + e,
					index: e,
					card: t,
				}),
			);
		}
		return i.createElement(
			"div",
			{
				ref: this.BindRow,
				className: (0, c.A)(j.AppOverviewRow, e.rowTemplate.strName),
				style: {
					gridTemplateColumns: `repeat( ${t}, minmax( ${re()}, 1fr ) )`,
				},
			},
			n,
		);
	}
}
function re() {
	if (Y.n6.IsGamepadUIWindowActive()) {
		return j.GamepadAutoRowColumnWidth;
	} else {
		return j.AutoRowColumnWidth;
	}
}
function ne(e) {
	const t = parseInt(
		Y.n6.IsGamepadUIWindowActive()
			? j.GamepadAutoRowColumnGap
			: j.AutoRowColumnGap,
	);
	const r = parseInt(re());
	return (0, W.OQ)(Math.floor((e + t) / (r + t)), 1, 10);
}
function ie(e) {
	let t = ne(e);
	let r = [];
	let n = {
		strName: (0, c.A)(j.AutoRow, j.Singles),
		eMatch: 31,
		vecCards: [
			{
				nItemSpace: t,
			},
		],
		nColumns: t,
		nRows: 1,
	};
	r.push(n);
	for (let e = 0; e < t; e++) {
		n = {
			strName: (0, c.A)(j.AutoRow, j.OneTall),
			eMatch: 135,
			vecCards: [
				{
					nItemSpace: e,
				},
				{
					eFixedCard: 128,
				},
				{
					nItemSpace: t - e - 1,
				},
				{
					nItemSpace: e,
				},
				{
					nItemSpace: t - e - 1,
				},
			],
			nColumns: t,
			nRows: 2,
		};
		r.push(n);
	}
	return r;
}
function ae(e) {
	if (e.type == 4) {
		return 8;
	}
	if (e.type == 9 || e.type == 10) {
		return 65;
	}
	if (!e.image_width || !e.image_height) {
		return 0;
	}
	let t = 0;
	let r = 0;
	let n = e.image_width;
	let i = n / e.image_height;
	t = i > 2.5 ? 16 : i > 1.4 ? 32 : 64;
	if (i <= 0.8) {
		t = 128;
	}
	r = n >= 1024 ? 4 : n > 512 ? 2 : 1;
	return t | r;
}
function se(e) {
	if (e & 128) {
		return 0;
	} else if (e & 16) {
		return 3;
	} else if (e & 8) {
		return 2;
	} else {
		return 1;
	}
}
function oe(e, t) {
	if (e.length == 0) {
		return null;
	}
	let r = (function (e, t) {
		let r = [];
		for (let n of t) {
			if ((e.eSize & n.eMatch) != 0) {
				r.push(n);
			}
		}
		return r;
	})(e[0], t);
	if (r.length == 0) {
		console.log("No matching template for:", e[0]);
		return null;
	}
	ShuffleArray(r);
	let n = null;
	for (let t of r) {
		let r = le(e, t);
		if (r) {
			n = {
				rowTemplate: t,
				vecItems: [],
			};
			for (let t of r) {
				n.vecItems.push(e[t]);
				e.splice(t, 1);
			}
			break;
		}
	}
	if (n == null) {
		e.splice(0, 1);
	}
	return n;
}
function le(e, t) {
	let r = [];
	let n = t.vecCards.slice();
	let i = e.slice();
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (t.eFixedCard) {
			let e = false;
			const n = t.eFixedCard;
			for (let t = 0; t < i.length; t++) {
				if ((i[t].eSize & n) != 0) {
					r.push(t);
					i.splice(t, 1);
					e = true;
					break;
				}
			}
			if (!e) {
				return null;
			}
		} else if (t.nItemSpace) {
			let e = t.nItemSpace;
			while (e) {
				let t = false;
				for (let n = 0; n < i.length; n++) {
					let a = se(i[n].eSize);
					if (a && a <= e) {
						r.push(n);
						i.splice(n, 1);
						t = true;
						e -= a;
						break;
					}
				}
				if (!t) {
					return null;
				}
			}
		}
	}
	return r;
}
(0, n.Cg)([l.oI], te.prototype, "BindRow", null);
(0, n.Cg)([l.oI], te.prototype, "OnResize", null);
(0, n.Cg)([l.oI], te.prototype, "CalculateColumns", null);
class ce extends i.PureComponent {
	constructor(e) {
		super(e);
		this.state = {
			bDismissedInappropriate: false,
			bReported: false,
			bShowAwardModal: false,
		};
	}
	componentDidUpdate(e) {
		if (
			this.props.index != e.index ||
			(this.props.card.item && !e.card.item) ||
			(this.props.card.item &&
				this.props.card.item.published_file_id != e.card.item.published_file_id)
		) {
			this.setState({
				bDismissedInappropriate: false,
			});
		}
	}
	DismissInappropriate() {
		this.setState({
			bDismissedInappropriate: true,
		});
	}
	OnReported() {
		this.setState({
			bReported: true,
		});
	}
	OnShowAwardModal() {
		this.setState({
			bShowAwardModal: true,
		});
	}
	OnHideAwardModal() {
		this.setState({
			bShowAwardModal: false,
		});
	}
	OnVoted(e) {
		let t = this.props.card.item;
		(0, R.GU)(t.published_file_id, e)
			.then(() => {
				this.props.card.eVoteDirection = e;
				this.forceUpdate();
			})
			.catch((e) => {
				console.log("Failed to vote", e);
			});
	}
	GetCardClasses() {
		const e = this.props.card.eSize;
		const t = this.props.index;
		let r = [];
		if (e & 1) {
			r.push(j.Small);
		}
		if (e & 2) {
			r.push(j.Medium);
		}
		if (e & 4) {
			r.push(j.Large);
		}
		if (e & 8) {
			r.push(j.VideoAspect);
		}
		if (e & 16) {
			r.push(j.Panoramic);
		}
		if (e & 32) {
			r.push(j.Wide);
		}
		if (e & 64) {
			r.push(j.Narrow);
		}
		if (e & 128) {
			r.push(j.Tall);
		}
		r.push("Index" + t);
		return r;
	}
	ShowOptionsContextMenu(e, t) {
		let r = [
			{
				data: (e) =>
					he(this.props, this.OnReported, GetOwningWindowForEvent(e)),
				label: (0, Localize)("#CommunityItem_Menu_Report"),
			},
		];
		if (e) {
			r.push({
				data: this.OnShowAwardModal,
				label: (0, Localize)("#GrantAwardTitle"),
			});
			r.push(
				this.props.card.eVoteDirection != R.bJ.Down
					? {
							data: () => this.OnVoted(R.bJ.Up),
							label: (0, Localize)("#CommunityItem_Menu_RateUp"),
						}
					: {
							data: () => this.OnVoted(R.bJ.Down),
							label: (0, Localize)("#CommunityItem_Menu_RateDown"),
						},
			);
		}
		let n = i.createElement(Z.n4, {
			rgOptions: r,
			onValueSelected: (e, { data: t }) => t(e),
			strDropDownItemClassName: j.SortingDropDownItems,
		});
		let a = {
			bOverlapHorizontal: true,
			bMatchWidth: true,
			bFitToWindow: true,
			strClassName: (0, c.A)("DialogMenuPosition", j.SortingDropDownContainer),
		};
		(0, N.lX)(n, t, a).SetLabel((0, Localize)("#ActionButtonLabelContextMenu"));
	}
	render() {
		const { index: e, card: t, className: r, ...n } = this.props;
		const a = t.item;
		let s;
		let o = false;
		const l = a && a.spoiler_tag;
		const m = a ? t.item.published_file_id : undefined;
		let u;
		let d = false;
		if (a) {
			if (!this.state.bDismissedInappropriate) {
				o =
					_w.rV.communityPreferences.content_descriptor_preferences.content_descriptors_to_exclude.filter(
						(e) =>
							a.content_descriptorids.indexOf(e.content_descriptorid) !== -1,
					).length != 0;
			}
			switch (this.props.card.item.type) {
				case 9:
				case 10:
					s = i.createElement(me, {
						index: e,
						card: t,
						inappropriate: o,
						onDismissInappropriate: this.DismissInappropriate,
					});
					break;
				case 3:
				case 5:
				case 4:
					s = i.createElement(de, {
						index: e,
						card: t,
						inappropriate: o,
						onDismissInappropriate: this.DismissInappropriate,
					});
					u = (e) => pe(e, t);
					d = true;
			}
			if (!s) {
				return null;
			}
		}
		return i.createElement(
			f.Z,
			{
				className: (0, c.A)(
					j.CommunityItem,
					!a && j.Blank,
					...this.GetCardClasses(),
					o && j.InappropriateContent,
					l && j.Spoiler,
					this.state.bReported && j.Reported,
				),
				"data-size": t.eSize,
				"data-width": t.nWidth,
				"data-id": m,
				onMenuButton: (e) => this.ShowOptionsContextMenu(d, e),
				onMenuActionDescription: (0, Localize)("#ActionButtonLabelContextMenu"),
				scrollIntoViewWhenChildFocused: true,
				...n,
			},
			i.createElement(
				"div",
				{
					className: j.ChildItem,
				},
				s,
			),
			i.createElement(ge, {
				...this.props,
			}),
			!o &&
				a &&
				i.createElement(Ce, {
					...this.props,
					onReported: this.OnReported,
				}),
			!o &&
				a &&
				i.createElement(_e, {
					...this.props,
					showVotingControls: d,
					fnNav: u,
					onVoted: this.OnVoted,
					onShowAwardModal: this.OnShowAwardModal,
					onHideAwardModal: this.OnHideAwardModal,
					bShowAwardModal: this.state.bShowAwardModal,
				}),
		);
	}
}
(0, n.Cg)([l.oI], ce.prototype, "DismissInappropriate", null);
(0, n.Cg)([l.oI], ce.prototype, "OnReported", null);
(0, n.Cg)([l.oI], ce.prototype, "OnShowAwardModal", null);
(0, n.Cg)([l.oI], ce.prototype, "OnHideAwardModal", null);
(0, n.Cg)([l.oI], ce.prototype, "OnVoted", null);
(0, n.Cg)([l.oI], ce.prototype, "ShowOptionsContextMenu", null);
const me = (e) => {
	const t = (0, K.bG)("CommunityFilePage", e.card.item.published_file_id);
	let r = e.card.item;
	let n = i.useRef(undefined);
	n.current ||= new S.T({
		text: r.description,
	});
	return i.createElement(
		f.Z,
		{
			focusable: true,
			className: j.Guide,
			onActivate: e.inappropriate ? undefined : t,
		},
		i.createElement(
			"div",
			{
				className: j.GuideTitle,
			},
			" ",
			(0, Localize)("#AppDetails_Community_Guide"),
			" ",
		),
		i.createElement(
			"div",
			{
				className: j.Body,
			},
			i.createElement(
				"div",
				{
					className: j.TopSection,
				},
				i.createElement(
					"div",
					{
						className: j.TopSectionInner,
					},
					i.createElement(
						"div",
						{
							className: j.PreviewContainer,
						},
						i.createElement("img", {
							className: j.Preview,
							src: r.preview_image_url,
						}),
					),
					i.createElement(
						"div",
						{
							className: j.Header,
						},
						i.createElement(
							"div",
							{
								className: j.Title,
							},
							i.createElement("span", null, r.title),
						),
					),
				),
			),
			i.createElement(
				"div",
				{
					className: j.BottomSection,
				},
				i.createElement(
					"div",
					{
						className: j.Description,
					},
					n.current.render(),
				),
			),
		),
		e.inappropriate &&
			i.createElement(ue, {
				...e,
			}),
		r.spoiler_tag && i.createElement(Ae, null),
	);
};
const ue = (e) => {
	const t = (0, K.Qt)(
		T.B7.ResolveURL("SteamPreferences") + "#CommunityContentPreferences",
	);
	return i.createElement(
		"div",
		{
			className: j.InappropriateOverlay,
		},
		i.createElement(
			"div",
			null,
			(0, Localize)("#AppDetails_CommunityFeed_Inappropriate"),
		),
		i.createElement(
			"div",
			{
				className: j.InappropriateLinks,
			},
			i.createElement(
				f.Z,
				{
					focusable: true,
					onActivate: e.onDismissInappropriate,
				},
				(0, Localize)("#AppDetails_CommunityFeed_ViewContent"),
			),
			i.createElement(
				f.Z,
				{
					focusable: true,
					onActivate: t,
				},
				(0, Localize)("#AppDetails_CommunityFeed_EditPreferences"),
			),
		),
	);
};
class de extends i.PureComponent {
	async ShowFullscreen(e) {
		pe(e, this.props.card);
	}
	SaveScreenshot(e) {
		(e || window).SteamClient.Browser.StartDownload(
			this.props.card.item.full_image_url,
		);
	}
	ShowContextMenu(e) {
		const t = IsHTMLElement(e.target)
			? e.target.ownerDocument.defaultView
			: window;
		(0, N.lX)(
			i.createElement(
				F.tz,
				null,
				i.createElement(
					F.kt,
					{
						onSelected: () => this.SaveScreenshot(t),
					},
					(0, Localize)("#ContextMenu_SaveScreenshot"),
				),
			),
			e,
		);
	}
	render() {
		let e = this.props.card.item;
		let t = e.type == 4;
		return i.createElement(
			"div",
			{
				className: j.ArtItem,
			},
			i.createElement(
				"div",
				{
					className: j.PreviewContainer,
				},
				!t &&
					i.createElement(q.EI, {
						className: j.Preview,
						src: e.preview_image_url,
						onClick: this.props.inappropriate ? undefined : this.ShowFullscreen,
						onContextMenu: this.ShowContextMenu,
					}),
				t &&
					i.createElement(k, {
						strPreviewURL: e.preview_image_url,
						strVideoID: e.youtube_video_id,
						inappropriate: this.props.inappropriate,
					}),
				e.spoiler_tag && i.createElement(Ae, null),
			),
			this.props.inappropriate &&
				i.createElement(ue, {
					...this.props,
				}),
			e.title &&
				i.createElement(
					"div",
					{
						className: j.BottomSection,
					},
					i.createElement(
						"div",
						{
							className: j.DescriptionRow,
						},
						e.title,
					),
				),
		);
	}
}
function Ae() {
	const e = (0, Q.Qn)()
		? "#AppDetails_Screenshot_SpoilerAlert_Gamepad"
		: "#AppDetails_Screenshot_SpoilerAlert";
	return i.createElement(
		"div",
		{
			className: j.SpoilerOverlay,
		},
		(0, Localize)(e),
	);
}
async function pe(e, t) {
	let r = GetOwningWindowForEvent(e);
	let n = (0, Localize)("#AppDetails_CommunityItem");
	switch (t.item.type) {
		case 3:
			n = (0, Localize)("#AppDetails_Artwork");
			break;
		case 5:
			n = (0, Localize)("#AppDetails_Screenshot");
			break;
		case 4:
			n = (0, Localize)("#AppDetails_Video");
			break;
		default:
			n = (0, Localize)("#AppDetails_CommunityItem");
	}
	let a = _.w.Init(M.TA);
	a.Body().set_publishedfileids([t.item.published_file_id]);
	let s;
	let o = await M.a5.GetDetails(g.Nb.CMInterface.GetServiceTransport(), a);
	if (o.Body().publishedfiledetails().length > 0) {
		let e = o.Body().publishedfiledetails()[0];
		if (e.result() == 1) {
			s = e.toObject();
		}
	}
	let l = new h.b(t.item.creator.steamid);
	let c = g.Nb.ThreadStore.FindOrLoadThreadByPublishedFileID(
		l,
		t.item.published_file_id,
	);
	(0, B.N)({
		strURL: t.item.full_image_url,
		strTitle: t.item.title ? t.item.title : n,
		windowOverride: r,
		nMaxScreenPercentage: Y.n6.IsGamepadUIWindowActive() ? 1 : 0.8,
		children: i.createElement(p._h, {
			commentThread: c,
			bDefaultMinimized: false,
			bMaxHeight: false,
			publishedfileid: t.item.published_file_id,
		}),
		appid: s?.consumer_appid,
		file_details: s,
	});
}
(0, n.Cg)([l.oI], de.prototype, "ShowFullscreen", null);
(0, n.Cg)([l.oI], de.prototype, "SaveScreenshot", null);
(0, n.Cg)([l.oI], de.prototype, "ShowContextMenu", null);
const ge = (e) => {
	const t = e.card.item;
	const r = (0, K.bG)("SteamIDPage", t?.creator.steamid);
	return i.createElement(
		"div",
		{
			className: j.AuthorSection,
		},
		t &&
			i.createElement(v.Ul, {
				className: j.Avatar,
				strAvatarURL: t.creator.avatar,
				size: "Small",
				onClick: r,
			}),
		t &&
			i.createElement(
				"div",
				{
					className: j.AuthorName,
				},
				t.creator.name,
			),
	);
};
function he(e, t, r) {
	const n = x.Title;
	(0, G.mK)(
		i.createElement(x, {
			published_file_id: e.card.item.published_file_id,
			onReported: t,
		}),
		r,
		{
			strTitle: n,
		},
	);
}
class Ce extends i.Component {
	OpenMenu(e) {
		(0, N.lX)(
			i.createElement(
				F.tz,
				null,
				i.createElement(
					F.kt,
					{
						onSelected: (e) =>
							he(this.props, this.props.onReported, GetOwningWindowForEvent(e)),
					},
					" ",
					(0, Localize)("#CommunityItem_Menu_Report"),
				),
			),
			e,
		);
	}
	render() {
		return i.createElement(
			"div",
			{
				className: j.MenuButton,
				onClick: this.OpenMenu,
			},
			i.createElement(d.wB_, null),
		);
	}
}
(0, n.Cg)([l.oI], Ce.prototype, "OpenMenu", null);
const _e = (0, o.PA)(function (e) {
	const t = e.card;
	let r = t.item;
	const n = (0, K.bG)("CommunityFilePage", r.published_file_id);
	let a = t.eVoteDirection;
	const s = (0, c.A)(j.Icon16, j.ThumbsUp, a == R.bJ.Up && j.Selected);
	const o = (0, c.A)(j.Icon16, j.ThumbsDown, a == R.bJ.Down && j.Selected);
	const l = (0, c.A)(j.Icon16, j.Comments);
	const m = (0, c.A)(j.Icon16, j.Reactions);
	const u = r.reactions?.reduce((e, t) => e + t.count, 0);
	return i.createElement(
		"div",
		{
			className: j.Controls,
		},
		e.showVotingControls &&
			i.createElement(fe, {
				icon: i.createElement(d.f2R, {
					className: m,
					color: "#2A83CF",
				}),
				count: u == 0 ? undefined : u,
				onClick: e.onShowAwardModal,
			}),
		e.showVotingControls &&
			e.bShowAwardModal &&
			i.createElement(I.EX, {
				targetType: 2,
				bShowModal: e.bShowAwardModal,
				onDismiss: e.onHideAwardModal,
				ugcType: r.type,
				targetid: r.published_file_id,
			}),
		e.showVotingControls &&
			i.createElement(fe, {
				icon: s,
				count: r.votes_for,
				onClick: () => e.onVoted(R.bJ.Up),
			}),
		e.showVotingControls &&
			i.createElement(fe, {
				icon: o,
				onClick: () => e.onVoted(R.bJ.Down),
			}),
		i.createElement(fe, {
			icon: l,
			count: r.comment_count,
			onClick: n ?? e.fnNav,
		}),
	);
});
function fe(e) {
	const { icon: t, count: r, onClick: n } = e;
	const a =
		typeof t == "string"
			? i.createElement("span", {
					className: (0, c.A)(t, n && j.HasClickEvent),
				})
			: t;
	return i.createElement(
		"div",
		{
			className: j.Control,
			onClick: n,
		},
		r != null &&
			i.createElement(
				"div",
				{
					className: j.Count,
				},
				Number(r).toLocaleString(),
			),
		i.createElement(
			"div",
			{
				className: j.Button,
			},
			a,
		),
	);
}
export class k extends i.PureComponent {
	m_elContainerRef = i.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bPlay: false,
			bForcePause: false,
		};
	}
	componentDidUpdate(e) {
		if (e.strVideoID != this.props.strVideoID) {
			this.setState({
				bPlay: false,
			});
		}
	}
	PlayVideo() {
		this.setState({
			bPlay: true,
			bForcePause: false,
		});
	}
	PauseVideo() {
		this.setState({
			bForcePause: !this.state.bForcePause,
		});
	}
	render() {
		let {
			strPreviewURL: e,
			strVideoID: t,
			className: r,
			style: n,
			onClick: a,
			inappropriate: s,
			...o
		} = this.props;
		if (!this.state.bPlay) {
			n = n || {};
			n.backgroundImage = `url( ${e} )`;
			let t = `${T.B7.GetCommunityURL()}public/shared/images/apphubs/play_icon80.png`;
			return i.createElement(
				b,
				{
					ref: this.m_elContainerRef,
					className: (0, c.A)(r, j.VideoPreview),
					width: 16,
					height: 9,
					onActivate: s ? undefined : this.PlayVideo,
					style: n,
					...o,
				},
				i.createElement("img", {
					className: j.PlayLogo,
					src: t,
				}),
			);
		}
		return i.createElement(
			b,
			{
				ref: this.m_elContainerRef,
				className: (0, c.A)(r, j.Preview, j.VideoPlaying),
				width: 16,
				height: 9,
				style: n,
				...o,
				onActivate: this.PauseVideo,
			},
			i.createElement(D.N, {
				video: t,
				width: this.m_elContainerRef.current.clientWidth,
				height: this.m_elContainerRef.current.clientHeight,
				forcePause: this.state.bForcePause,
				autoplay: true,
				controls: true,
				showFullscreenBtn: true,
			}),
		);
	}
}
(0, n.Cg)([l.oI], k.prototype, "PlayVideo", null);
(0, n.Cg)([l.oI], k.prototype, "PauseVideo", null);
