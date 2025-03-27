import { ShuffleArray } from "../../actual_src/utils/arrayutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import {
	GetOwningWindowForEvent,
	IsHTMLElement,
} from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import s, { Gn } from "./89193.js";
import o, { PA } from "./41230.js";
import l, { Fd, md } from "./52451.js";
import c, { A as A_1 } from "./90765.js";
import m from "./83957.js";
import d from "./50376.js";
import A from "./1965.js";
import p from "./94406.js";
import g from "./3963.js";
import h from "./8573.js";
import { uc } from "./91705.js";
import _ from "./12176.js";
import f from "./69164.js";
import S from "./82325.js";
import _w from "./34792.js";
import { N as N_1 } from "./94715.js";
import v from "./17231.js";
import I from "./13672.js";
import E from "./26853.js";
import M from "./34043.js";
import T from "./87935.js";
import R, { RE, dK, GU } from "./20414.js";
import _k from "./20590.js";
import D from "./4042.js";
import N, { lX } from "./31084.js";
import F from "./88750.js";
import { mK } from "./13869.js";
import O from "./10606.js";
import P from "./48434.js";
import U from "./98995.js";
import { OQ } from "./31958.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import H from "./66901.js";
import q from "./90242.js";
import { Qn } from "./72476.js";
import Z from "./64608.js";
import Y from "./61175.js";
import { bG, Qt } from "./18057.js";
const u = m;
class B_1 extends i.PureComponent {
	m_elContainerRef = i.createRef();
	get clientWidth() {
		return this.m_elContainerRef.current.clientWidth;
	}
	get clientHeight() {
		return this.m_elContainerRef.current.clientHeight;
	}
	render() {
		let { width, height, children, className, wrapperClassName, style, ...o } =
			this.props;
		let l = wrapperClassName || "";
		let c = {
			width: "100%",
			position: "relative",
		};
		c.paddingBottom = `${((height / width) * 100).toFixed(2)}%`;
		style = style || {};
		style.position = "absolute";
		style.top = 0;
		style.right = 0;
		style.bottom = 0;
		style.left = 0;
		return (
			<f.Z
				focusable
				ref={this.m_elContainerRef}
				style={c}
				className={l}
				{...o}
				onActivate={this.props.onActivate}
			>
				<div style={style} className={className}>
					{children}
				</div>
			</f.Z>
		);
	}
}
const L = P;
class X_1 extends i.Component {
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
		RE(this.props.published_file_id, this.state.strReportText)
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
		return (
			<O.o0
				strTitle={X_1.Title}
				onOK={this.ReportItem}
				onCancel={this.CloseModal}
				bOKDisabled={!this.state.strReportText}
				strOKButtonText={(0, Localize)("#ReportItem_SubmitReport")}
			>
				<div className={L.FormContainer}>
					<div className={L.Description}>
						{(0, Localize)("#ReportItem_Description")}
					</div>
					<div className={L.Description2}>
						{(0, Localize)("#ReportItem_Description_Line2")}
					</div>
					<textarea
						className={L.InputBox}
						value={this.state.strReportText}
						onChange={this.OnReportTextChange}
						autoFocus
					/>
					{this.state.strErrorText && (
						<div className={L.ErrorText}>{this.state.strErrorText}</div>
					)}
					<div className={L.DMCA}>
						{LocalizeReact(
							"#ReportItem_DMCA",
							<a onClick={this.NavigateToDMCAItem}>
								{(0, Localize)("#ReportItem_DMCA_LinkText")}
							</a>,
						)}
					</div>
				</div>
			</O.o0>
		);
	}
}
Cg([l.oI], X_1.prototype, "OnReportTextChange", null);
Cg([l.oI], X_1.prototype, "NavigateToDMCAItem", null);
Cg([l.oI], X_1.prototype, "ReportItem", null);
Cg([l.oI], X_1.prototype, "CloseModal", null);
const j = H;
let X;
((e) => {
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
		Gn(this);
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
		let r = await uc(e, t, this.m_cancelAxios);
		let n = new Set(this.m_vecCards.map((e) => e.item.published_file_id));
		r = r.filter((e) => !n.has(e.published_file_id));
		let i = r.map((e) => e.published_file_id);
		this.m_cancelAxios = u.CancelToken.source();
		let a = await dK(i, this.m_cancelAxios);
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
		let { vecContent, mapVotes } = e;
		let n = [];
		for (let e of vecContent) {
			const t = ae(e);
			const i = se(t);
			let a = R.bJ.None;
			let s = false;
			let o = mapVotes.get(e.published_file_id);
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
			this.m_rows.forEach((t, e) => {
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
							const n_a = n[a];
							r.push(n_a);
							n.splice(a, 1);
						}
					}
					if (r.length) {
						AssertMsg(r.length == t.vecItems.length, "Row length mismatch");
						for (let e = 0; e < t.vecItems.length; e++) {
							t.vecItems[e].eVoteDirection = r[e].eVoteDirection;
							t.vecItems[e].item = r[e].item;
						}
					}
				}
			});

			this.m_bHasEmptyRows = false;
		}
		const i = this.BuildRowsForCards(n);
		this.m_rows.push(...i);
	}
}
Cg([s.sH.shallow], $.prototype, "m_rows", undefined);
Cg([s.sH], $.prototype, "m_loadingState", undefined);
Cg([s.sH], $.prototype, "m_bHasEmptyRows", undefined);
Cg([l.oI], $.prototype, "CheckAndRebuildTemplates", null);
Cg([s.XI.bound], $.prototype, "LoadAdditionalContent", null);
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
			this.m_resizeObserver = Fd(e, this.OnResize);
			this.m_intersectionObserver = md(e, this.OnIntersection, {
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
		let e = (
			<span className={j.Highlight}>
				{(0, Localize)("#AppDetails_Community_Tooltip1")}
			</span>
		);
		let t = (
			<span className={j.Highlight}>
				{(0, Localize)("#AppDetails_Community_Tooltip2")}
			</span>
		);
		let r = (
			<U.t1>
				<U.MA>{e}</U.MA>
				<br />
				<U.MA>{t}</U.MA>
			</U.t1>
		);
		let n = this.m_loader.rows.map((e, t) => <Te key={t} row={e} />);
		const [a] = _w.rV.GetClientSetting("library_disable_community_content");
		return (
			<A.n
				feature={2}
				className={j.CommunityContentContainer}
				label={(0, Localize)("#AppDetails_SectionTitle_Community")}
				tooltip={r}
				headerClass={j.HeaderStyles}
				showRule
			>
				<f.Z
					flow-children="grid"
					className={A_1(
						j.InnerContainer,
						this.m_loader.hasEmptyRows && j.HasBlanks,
					)}
					ref={this.BindInnerContainer}
				>
					{n}
					{this.m_loader.loadingState == X.Loading && (
						<div className={j.ThrobberBox}>
							<E.t size="large" position="center" />
						</div>
					)}
					{this.m_loader.loadingState == X.MoreContent && (
						<_k.Y onEnter={this.AutoLoadAdditionalContent} />
					)}
					{(this.m_loader.loadingState == X.OutOfContent ||
						this.m_loader.loadingState == X.Errored) && (
						<div className={j.NoContent}>
							{(0, Localize)("#AppDetails_CommunityFeed_OutOfContent")}
						</div>
					)}
					{a && (
						<div
							className={j.LoadContentButton}
							onClick={this.LoadAdditionalContent}
						>
							{(0, Localize)("#AppDetails_CommunityFeed_LoadCommunity")}
						</div>
					)}
				</f.Z>
			</A.n>
		);
	}
};
Cg([l.oI], w.prototype, "DelayCheckAndLoadInitialContent", null);
Cg([l.oI], w.prototype, "CheckAndLoadInitialContent", null);
Cg([l.oI], w.prototype, "BindInnerContainer", null);
Cg([l.oI], w.prototype, "OnResize", null);
Cg([l.oI], w.prototype, "OnIntersection", null);
Cg([l.oI], w.prototype, "AutoLoadAdditionalContent", null);
Cg([l.oI], w.prototype, "LoadAdditionalContent", null);
w = Cg([o.PA], w);
class Te extends i.Component {
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
			this.m_resizeObserver = Fd(e, this.OnResize);
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
		let e_vecItems = e.vecItems;
		if (t != e.rowTemplate.nColumns) {
			let n = e.vecItems.slice();
			const i = {
				strName: A_1(j.AutoRow, j.Singles, j.Truncated),
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
			e_vecItems = [];
			for (let e of a) {
				e_vecItems.push(n[e]);
				n.splice(e, 1);
			}
		}
		let n = [];
		for (let e = 0; e < e_vecItems.length; e++) {
			let e_vecItems_e = e_vecItems[e];
			let e_vecItems_e_item = e_vecItems_e.item;
			n.push(
				<Ce_1
					key={
						e_vecItems_e_item
							? e_vecItems_e_item.published_file_id
							: `blank${e}`
					}
					index={e}
					card={e_vecItems_e}
				/>,
			);
		}
		return (
			<div
				ref={this.BindRow}
				className={A_1(j.AppOverviewRow, e.rowTemplate.strName)}
				style={{
					gridTemplateColumns: `repeat( ${t}, minmax( ${re()}, 1fr ) )`,
				}}
			>
				{n}
			</div>
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
	return OQ(Math.floor((e + t) / (r + t)), 1, 10);
}
function ie(e) {
	let t = ne(e);
	let r = [];
	let n = {
		strName: A_1(j.AutoRow, j.Singles),
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
			strName: A_1(j.AutoRow, j.OneTall),
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
	let e_image_width = e.image_width;
	let i = e_image_width / e.image_height;
	t = i > 2.5 ? 16 : i > 1.4 ? 32 : 64;
	if (i <= 0.8) {
		t = 128;
	}
	r = e_image_width >= 1024 ? 4 : e_image_width > 512 ? 2 : 1;
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
	let r = ((e, t) => {
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
		let n_e = n[e];
		if (n_e.eFixedCard) {
			let e = false;
			const n_e_eFixedCard = n_e.eFixedCard;
			for (let t = 0; t < i.length; t++) {
				if ((i[t].eSize & n_e_eFixedCard) != 0) {
					r.push(t);
					i.splice(t, 1);
					e = true;
					break;
				}
			}
			if (!e) {
				return null;
			}
		} else if (n_e.nItemSpace) {
			let n_e_nItemSpace = n_e.nItemSpace;
			while (n_e_nItemSpace) {
				let t = false;
				for (let n = 0; n < i.length; n++) {
					let a = se(i[n].eSize);
					if (a && a <= n_e_nItemSpace) {
						r.push(n);
						i.splice(n, 1);
						t = true;
						n_e_nItemSpace -= a;
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
Cg([l.oI], Te.prototype, "BindRow", null);
Cg([l.oI], Te.prototype, "OnResize", null);
Cg([l.oI], Te.prototype, "CalculateColumns", null);
class Ce_1 extends i.PureComponent {
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
		GU(t.published_file_id, e)
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
		r.push(`Index${t}`);
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
		let n = (
			<Z.n4
				rgOptions={r}
				onValueSelected={(e, { data }) => data(e)}
				strDropDownItemClassName={j.SortingDropDownItems}
			/>
		);
		let a = {
			bOverlapHorizontal: true,
			bMatchWidth: true,
			bFitToWindow: true,
			strClassName: A_1("DialogMenuPosition", j.SortingDropDownContainer),
		};
		lX(n, t, a).SetLabel((0, Localize)("#ActionButtonLabelContextMenu"));
	}
	render() {
		const { index, card, className, ...n } = this.props;
		const t_item = card.item;
		let s;
		let o = false;
		const l = t_item && t_item.spoiler_tag;
		const m = t_item ? card.item.published_file_id : undefined;
		let u;
		let d = false;
		if (t_item) {
			if (!this.state.bDismissedInappropriate) {
				o =
					_w.rV.communityPreferences.content_descriptor_preferences.content_descriptors_to_exclude.filter(
						(e) =>
							t_item.content_descriptorids.includes(e.content_descriptorid),
					).length != 0;
			}
			switch (this.props.card.item.type) {
				case 9:
				case 10: {
					s = (
						<Me
							index={index}
							card={card}
							inappropriate={o}
							onDismissInappropriate={this.DismissInappropriate}
						/>
					);
					break;
				}
				case 3:
				case 5:
				case 4: {
					s = (
						<De
							index={index}
							card={card}
							inappropriate={o}
							onDismissInappropriate={this.DismissInappropriate}
						/>
					);
					u = (e) => pe(e, card);
					d = true;
				}
			}
			if (!s) {
				return null;
			}
		}
		return (
			<f.Z
				className={A_1(
					j.CommunityItem,
					!t_item && j.Blank,
					...this.GetCardClasses(),
					o && j.InappropriateContent,
					l && j.Spoiler,
					this.state.bReported && j.Reported,
				)}
				data-size={card.eSize}
				data-width={card.nWidth}
				data-id={m}
				onMenuButton={(e) => this.ShowOptionsContextMenu(d, e)}
				onMenuActionDescription={(0, Localize)("#ActionButtonLabelContextMenu")}
				scrollIntoViewWhenChildFocused
				{...n}
			>
				<div className={j.ChildItem}>{s}</div>
				<Ge {...this.props} />
				{!o && t_item && <Ce {...this.props} onReported={this.OnReported} />}
				{!o && t_item && (
					<_e
						{...this.props}
						showVotingControls={d}
						fnNav={u}
						onVoted={this.OnVoted}
						onShowAwardModal={this.OnShowAwardModal}
						onHideAwardModal={this.OnHideAwardModal}
						bShowAwardModal={this.state.bShowAwardModal}
					/>
				)}
			</f.Z>
		);
	}
}
Cg([l.oI], Ce_1.prototype, "DismissInappropriate", null);
Cg([l.oI], Ce_1.prototype, "OnReported", null);
Cg([l.oI], Ce_1.prototype, "OnShowAwardModal", null);
Cg([l.oI], Ce_1.prototype, "OnHideAwardModal", null);
Cg([l.oI], Ce_1.prototype, "OnVoted", null);
Cg([l.oI], Ce_1.prototype, "ShowOptionsContextMenu", null);
const Me = (e) => {
	const t = bG("CommunityFilePage", e.card.item.published_file_id);
	let r = e.card.item;
	let NRef = i.useRef(undefined);
	NRef.current ||= new S.T({
		text: r.description,
	});
	return (
		<f.Z focusable className={j.Guide} onActivate={e.inappropriate || t}>
			<div className={j.GuideTitle}>
				{" "}
				{(0, Localize)("#AppDetails_Community_Guide")}{" "}
			</div>
			<div className={j.Body}>
				<div className={j.TopSection}>
					<div className={j.TopSectionInner}>
						<div className={j.PreviewContainer}>
							<img className={j.Preview} src={r.preview_image_url} />
						</div>
						<div className={j.Header}>
							<div className={j.Title}>
								<span>{r.title}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={j.BottomSection}>
					<div className={j.Description}>{NRef.current.render()}</div>
				</div>
			</div>
			{e.inappropriate && <Ue {...e} />}
			{r.spoiler_tag && <Ae />}
		</f.Z>
	);
};
const Ue = (e) => {
	const t = Qt(
		`${T.B7.ResolveURL("SteamPreferences")}#CommunityContentPreferences`,
	);
	return (
		<div className={j.InappropriateOverlay}>
			<div>{(0, Localize)("#AppDetails_CommunityFeed_Inappropriate")}</div>
			<div className={j.InappropriateLinks}>
				<f.Z focusable onActivate={e.onDismissInappropriate}>
					{(0, Localize)("#AppDetails_CommunityFeed_ViewContent")}
				</f.Z>
				<f.Z focusable onActivate={t}>
					{(0, Localize)("#AppDetails_CommunityFeed_EditPreferences")}
				</f.Z>
			</div>
		</div>
	);
};
class De extends i.PureComponent {
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
		lX(
			<F.tz>
				<F.kt onSelected={() => this.SaveScreenshot(t)}>
					{(0, Localize)("#ContextMenu_SaveScreenshot")}
				</F.kt>
			</F.tz>,
			e,
		);
	}
	render() {
		let e = this.props.card.item;
		let t = e.type == 4;
		return (
			<div className={j.ArtItem}>
				<div className={j.PreviewContainer}>
					{!t && (
						<q.EI
							className={j.Preview}
							src={e.preview_image_url}
							onClick={this.props.inappropriate || this.ShowFullscreen}
							onContextMenu={this.ShowContextMenu}
						/>
					)}
					{t && (
						<K_1
							strPreviewURL={e.preview_image_url}
							strVideoID={e.youtube_video_id}
							inappropriate={this.props.inappropriate}
						/>
					)}
					{e.spoiler_tag && <Ae />}
				</div>
				{this.props.inappropriate && <Ue {...this.props} />}
				{e.title && (
					<div className={j.BottomSection}>
						<div className={j.DescriptionRow}>{e.title}</div>
					</div>
				)}
			</div>
		);
	}
}
function Ae() {
	const e = Qn()
		? "#AppDetails_Screenshot_SpoilerAlert_Gamepad"
		: "#AppDetails_Screenshot_SpoilerAlert";
	return <div className={j.SpoilerOverlay}>{(0, Localize)(e)}</div>;
}
async function pe(e, t) {
	let r = GetOwningWindowForEvent(e);
	let n = (0, Localize)("#AppDetails_CommunityItem");
	switch (t.item.type) {
		case 3: {
			n = (0, Localize)("#AppDetails_Artwork");
			break;
		}
		case 5: {
			n = (0, Localize)("#AppDetails_Screenshot");
			break;
		}
		case 4: {
			n = (0, Localize)("#AppDetails_Video");
			break;
		}
		default: {
			n = (0, Localize)("#AppDetails_CommunityItem");
		}
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
	N_1({
		strURL: t.item.full_image_url,
		strTitle: t.item.title ? t.item.title : n,
		windowOverride: r,
		nMaxScreenPercentage: Y.n6.IsGamepadUIWindowActive() ? 1 : 0.8,
		children: (
			<p._h
				commentThread={c}
				bDefaultMinimized={false}
				bMaxHeight={false}
				publishedfileid={t.item.published_file_id}
			/>
		),
		appid: s?.consumer_appid,
		file_details: s,
	});
}
Cg([l.oI], De.prototype, "ShowFullscreen", null);
Cg([l.oI], De.prototype, "SaveScreenshot", null);
Cg([l.oI], De.prototype, "ShowContextMenu", null);
const Ge = (e) => {
	const t = e.card.item;
	const r = bG("SteamIDPage", t?.creator.steamid);
	return (
		<div className={j.AuthorSection}>
			{t && (
				<v.Ul
					className={j.Avatar}
					strAvatarURL={t.creator.avatar}
					size="Small"
					onClick={r}
				/>
			)}
			{t && <div className={j.AuthorName}>{t.creator.name}</div>}
		</div>
	);
};
function he(e, t, r) {
	const x_Title = X_1.Title;
	mK(
		<X_1 published_file_id={e.card.item.published_file_id} onReported={t} />,
		r,
		{
			strTitle: x_Title,
		},
	);
}
class Ce extends i.Component {
	OpenMenu(e) {
		lX(
			<F.tz>
				<F.kt
					onSelected={(e) =>
						he(this.props, this.props.onReported, GetOwningWindowForEvent(e))
					}
				>
					{" "}
					{(0, Localize)("#CommunityItem_Menu_Report")}
				</F.kt>
			</F.tz>,
			e,
		);
	}
	render() {
		return (
			<div className={j.MenuButton} onClick={this.OpenMenu}>
				<d.wB_ />
			</div>
		);
	}
}
Cg([l.oI], Ce.prototype, "OpenMenu", null);
const _e = PA((e) => {
	const e_card = e.card;

	let { item, eVoteDirection } = e_card;

	const n = bG("CommunityFilePage", item.published_file_id);
	const s = A_1(j.Icon16, j.ThumbsUp, eVoteDirection == R.bJ.Up && j.Selected);
	const o = A_1(
		j.Icon16,
		j.ThumbsDown,
		eVoteDirection == R.bJ.Down && j.Selected,
	);
	const l = A_1(j.Icon16, j.Comments);
	const m = A_1(j.Icon16, j.Reactions);
	const u = item.reactions?.reduce((e, t) => e + t.count, 0);
	return (
		<div className={j.Controls}>
			{e.showVotingControls && (
				<Fe
					icon={<d.f2R className={m} color="#2A83CF" />}
					count={u == 0 || u}
					onClick={e.onShowAwardModal}
				/>
			)}
			{e.showVotingControls && e.bShowAwardModal && (
				<I.EX
					targetType={2}
					bShowModal={e.bShowAwardModal}
					onDismiss={e.onHideAwardModal}
					ugcType={item.type}
					targetid={item.published_file_id}
				/>
			)}
			{e.showVotingControls && (
				<Fe
					icon={s}
					count={item.votes_for}
					onClick={() => e.onVoted(R.bJ.Up)}
				/>
			)}
			{e.showVotingControls && (
				<Fe icon={o} onClick={() => e.onVoted(R.bJ.Down)} />
			)}
			<Fe icon={l} count={item.comment_count} onClick={n ?? e.fnNav} />
		</div>
	);
});
function Fe(e) {
	const { icon, count, onClick } = e;
	const a =
		typeof icon == "string" ? (
			<span className={A_1(icon, onClick && j.HasClickEvent)} />
		) : (
			icon
		);
	return (
		<div className={j.Control} onClick={onClick}>
			{count != null && (
				<div className={j.Count}>{Number(count).toLocaleString()}</div>
			)}
			<div className={j.Button}>{a}</div>
		</div>
	);
}
export class K_1 extends i.PureComponent {
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
			strPreviewURL,
			strVideoID,
			className,
			style,
			onClick,
			inappropriate,
			...o
		} = this.props;
		if (!this.state.bPlay) {
			style = style || {};
			style.backgroundImage = `url( ${strPreviewURL} )`;
			let t = `${T.B7.GetCommunityURL()}public/shared/images/apphubs/play_icon80.png`;
			return (
				<B_1
					ref={this.m_elContainerRef}
					className={A_1(className, j.VideoPreview)}
					width={16}
					height={9}
					onActivate={inappropriate || this.PlayVideo}
					style={style}
					{...o}
				>
					<img className={j.PlayLogo} src={t} />
				</B_1>
			);
		}
		return (
			<B_1
				ref={this.m_elContainerRef}
				className={A_1(className, j.Preview, j.VideoPlaying)}
				width={16}
				height={9}
				style={style}
				{...o}
				onActivate={this.PauseVideo}
			>
				<D.N
					video={strVideoID}
					width={this.m_elContainerRef.current.clientWidth}
					height={this.m_elContainerRef.current.clientHeight}
					forcePause={this.state.bForcePause}
					autoplay
					controls
					showFullscreenBtn
				/>
			</B_1>
		);
	}
}
Cg([l.oI], K_1.prototype, "PlayVideo", null);
Cg([l.oI], K_1.prototype, "PauseVideo", null);
