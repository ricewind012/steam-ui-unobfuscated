var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./7470.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require("./29547.js");
var c = require("./91486.js");
var m = require("./96593.js");
var u = require("./96000.js");
var d = require("./52958.js");
var A = require("./47979.js");
var p = require("./54043.js");
var g = require(/*webcrack:missing*/ "./90765.js");
var h = require(/*webcrack:missing*/ "./52451.js");
var C = require("./60461.js");
var _ = C;
export let Bj = class extends i.Component {
	constructor(e) {
		super(e);
		(0, s.Gn)(this);
		this.appId = this.props.appid;
		this.strCollectionId = this.props.strCollectionId;
		this.includeMultiSelect = this.props.includeMultiSelect;
	}
	appId = undefined;
	strCollectionId = undefined;
	includeMultiSelect = undefined;
	componentDidUpdate() {
		this.appId = this.props.appid;
		this.strCollectionId = this.props.strCollectionId;
		this.includeMultiSelect = this.props.includeMultiSelect;
	}
	get draggedApps() {
		const e = new l.q(this.appId, this.strCollectionId);
		if (this.includeMultiSelect) {
			const t = A.b.GetSelectedAppsInContext();
			if (t.some((t) => t.key == e.key)) {
				return t;
			}
		}
		return [e];
	}
	get draggedAppIds() {
		const e = this.draggedApps;
		if (e.length == 1) {
			return [e[0].appid];
		} else {
			return A.b.GetSelectedAppIds();
		}
	}
	OnDragStart() {
		const e = new Map();
		e.set("apps", this.draggedApps);
		d._.StartDrag(e);
	}
	OnDragEnd() {
		d._.ResetDrag();
	}
	renderDragGhost() {
		const e = this.draggedAppIds.slice(0, 12);
		const t = document.createElement("div");
		const r = i.createElement(b, {
			rgAppIds: e,
		});
		a.H(t).render(r);
		const n = 80 + (e.length - 1) * 22;
		return i.createElement(p._H, {
			elContent: t,
			className: _.GhostContainer,
			offsetX: n / 2,
			width: n,
			offsetY: 40,
			height: 120,
		});
	}
	render() {
		const {
			appid: e,
			strCollectionId: t,
			includeMultiSelect: r,
			className: n,
			children: a,
			...s
		} = this.props;
		const o = d._.GetDragData("apps");
		const c = new l.q(this.props.appid, this.props.strCollectionId);
		const u = o && o.some((e) => e.key == c.key);
		const A = (function (e) {
			const t = new Map();
			t.set("text/appids", e.map((e) => e.toString()).join(" "));
			const r = [];
			const n = [];
			for (const t of e) {
				const e = m.tw.GetAppOverviewByAppID(t);
				if (!e) {
					continue;
				}
				const i = m.tw.GetStorePageURLForApp(e);
				if (i) {
					r.push(i);
					n.push(`${e.display_name}: ${i}`);
				} else {
					n.push(e.display_name);
				}
			}
			if (r.length > 0) {
				t.set("text/uri-list", r.join("\r\n"));
			}
			if (n.length > 0) {
				t.set("text/plain", n.join("\r\n"));
			}
			return t;
		})(this.draggedAppIds);
		return i.createElement(
			p.sx,
			{
				coordinator: d._.GetCoordinator(),
				data: this.draggedAppIds,
				bEnableHTMLDrag: true,
				strHTMLDragData: A,
				fnOnDragStart: this.OnDragStart,
				fnOnDragEnd: this.OnDragEnd,
				fnRenderDragGhost: this.renderDragGhost,
				fnRenderDropGhost: () => null,
				className: (0, g.A)(n, _.Draggable, u && _.Active),
				...s,
			},
			a,
		);
	}
};
(0, n.Cg)([s.sH], Bj.prototype, "appId", undefined);
(0, n.Cg)([s.sH], Bj.prototype, "strCollectionId", undefined);
(0, n.Cg)([s.sH], Bj.prototype, "includeMultiSelect", undefined);
(0, n.Cg)([s.EW], Bj.prototype, "draggedApps", null);
(0, n.Cg)([s.EW], Bj.prototype, "draggedAppIds", null);
(0, n.Cg)([h.oI], Bj.prototype, "OnDragStart", null);
(0, n.Cg)([h.oI], Bj.prototype, "OnDragEnd", null);
(0, n.Cg)([h.oI], Bj.prototype, "renderDragGhost", null);
Bj = (0, n.Cg)([o.PA], Bj);
class b extends i.Component {
	render() {
		this.props.rgAppIds.reverse();
		return i.createElement(
			"div",
			{
				className: _.Ghost,
			},
			this.props.rgAppIds.map((e) =>
				i.createElement(
					"div",
					{
						key: e,
						style: {
							marginTop: "-" + this.props.rgAppIds.indexOf(e) * 6 + "px",
						},
						className: (0, g.A)(
							_.GhostImageBox,
							this.props.rgAppIds.indexOf(e) == this.props.rgAppIds.length - 1
								? _.First
								: "",
						),
					},
					i.createElement(c.z, {
						key: e,
						className: _.Image,
						app: m.tw.GetAppOverviewByAppID(e),
						eAssetType: 0,
					}),
				),
			),
		);
	}
}
export let _k = class extends i.Component {
	OnDragIn(e, t) {
		d._.AddDropTarget(t);
		if (this.props.fnOnTargetEntered) {
			this.props.fnOnTargetEntered();
		}
	}
	OnDragOut(e, t) {
		d._.RemoveDropTarget(t);
		if (this.props.fnOnTargetLeft) {
			this.props.fnOnTargetLeft();
		}
	}
	render() {
		const {
			strTargetId: e,
			fnBCanAcceptApps: t,
			fnOnDroppedApps: r,
			strEligibleClassName: n,
			strTargetedClassName: a,
			fnOnTargetEntered: s,
			fnOnTargetLeft: o,
			className: l,
			children: c,
			...m
		} = this.props;
		const u = t && ((e) => t(e.props.data));
		const A = (0, g.A)(l, d._.BIsDropTarget(e) && a);
		return i.createElement(
			p.cL,
			{
				coordinator: d._.GetCoordinator(),
				fnBAcceptDraggable: u,
				fnOnDrop: (e) => r(e.props.data),
				fnOnDragEnter: (t) => this.OnDragIn(t, e),
				fnOnDragLeave: (t) => this.OnDragOut(t, e),
				className: A,
				strActiveClassName: n,
				...m,
			},
			c,
		);
	}
};
(0, n.Cg)([h.oI], _k.prototype, "OnDragIn", null);
(0, n.Cg)([h.oI], _k.prototype, "OnDragOut", null);
_k = (0, n.Cg)([o.PA], _k);
export let wf = class extends i.Component {
	render() {
		const { strCollectionId: e, ...t } = this.props;
		const r = e && u.md.GetCollection(e);
		const n = r && r.bAllowsDragAndDrop && r.AsDragDropCollection();
		return i.createElement(
			_k,
			{
				strTargetId: e,
				fnBCanAcceptApps: (e) => n && e.some((e) => !n.apps.has(e)),
				fnOnDroppedApps: (e) =>
					n && n.AddApps(e.map((e) => m.tw.GetAppOverviewByAppID(e))),
				...t,
			},
			this.props.children,
		);
	}
};
wf = (0, n.Cg)([o.PA], wf);
