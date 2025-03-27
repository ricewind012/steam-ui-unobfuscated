import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./7470.js";
import s, { Gn } from "./89193.js";
import o from "./41230.js";
import l from "./29547.js";
import c from "./91486.js";
import m from "./96593.js";
import u from "./96000.js";
import d from "./52958.js";
import A from "./47979.js";
import p from "./54043.js";
import { A as A_1 } from "./90765.js";
import h from "./52451.js";
import C from "./60461.js";
const _ = C;
export let Bj = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
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
		const r = <B rgAppIds={e} />;
		a.H(t).render(r);
		const n = 80 + (e.length - 1) * 22;
		return (
			<p._H
				elContent={t}
				className={_.GhostContainer}
				offsetX={n / 2}
				width={n}
				offsetY={40}
				height={120}
			/>
		);
	}
	render() {
		const {
			appid,
			strCollectionId,
			includeMultiSelect,
			className,
			children,
			...s
		} = this.props;
		const o = d._.GetDragData("apps");
		const c = new l.q(this.props.appid, this.props.strCollectionId);
		const u = o && o.some((e) => e.key == c.key);
		const A = ((e) => {
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
		return (
			<p.sx
				coordinator={d._.GetCoordinator()}
				data={this.draggedAppIds}
				bEnableHTMLDrag
				strHTMLDragData={A}
				fnOnDragStart={this.OnDragStart}
				fnOnDragEnd={this.OnDragEnd}
				fnRenderDragGhost={this.renderDragGhost}
				fnRenderDropGhost={() => null}
				className={A_1(className, _.Draggable, u && _.Active)}
				{...s}
			>
				{children}
			</p.sx>
		);
	}
};
Cg([s.sH], Bj.prototype, "appId", undefined);
Cg([s.sH], Bj.prototype, "strCollectionId", undefined);
Cg([s.sH], Bj.prototype, "includeMultiSelect", undefined);
Cg([s.EW], Bj.prototype, "draggedApps", null);
Cg([s.EW], Bj.prototype, "draggedAppIds", null);
Cg([h.oI], Bj.prototype, "OnDragStart", null);
Cg([h.oI], Bj.prototype, "OnDragEnd", null);
Cg([h.oI], Bj.prototype, "renderDragGhost", null);
Bj = Cg([o.PA], Bj);
class B extends i.Component {
	render() {
		this.props.rgAppIds.reverse();
		return (
			<div className={_.Ghost}>
				{this.props.rgAppIds.map((e) => (
					<div
						key={e}
						style={{
							marginTop: `-${this.props.rgAppIds.indexOf(e) * 6}px`,
						}}
						className={A_1(
							_.GhostImageBox,
							this.props.rgAppIds.indexOf(e) == this.props.rgAppIds.length - 1
								? _.First
								: "",
						)}
					>
						<c.z
							key={e}
							className={_.Image}
							app={m.tw.GetAppOverviewByAppID(e)}
							eAssetType={0}
						/>
					</div>
				))}
			</div>
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
			strTargetId,
			fnBCanAcceptApps,
			fnOnDroppedApps,
			strEligibleClassName,
			strTargetedClassName,
			fnOnTargetEntered,
			fnOnTargetLeft,
			className,
			children,
			...m
		} = this.props;
		const u = fnBCanAcceptApps && ((e) => fnBCanAcceptApps(e.props.data));
		const A = A_1(
			className,
			d._.BIsDropTarget(strTargetId) && strTargetedClassName,
		);
		return (
			<p.cL
				coordinator={d._.GetCoordinator()}
				fnBAcceptDraggable={u}
				fnOnDrop={(e) => fnOnDroppedApps(e.props.data)}
				fnOnDragEnter={(t) => this.OnDragIn(t, strTargetId)}
				fnOnDragLeave={(t) => this.OnDragOut(t, strTargetId)}
				className={A}
				strActiveClassName={strEligibleClassName}
				{...m}
			>
				{children}
			</p.cL>
		);
	}
};
Cg([h.oI], _k.prototype, "OnDragIn", null);
Cg([h.oI], _k.prototype, "OnDragOut", null);
_k = Cg([o.PA], _k);
export let wf = class extends i.Component {
	render() {
		const { strCollectionId, ...t } = this.props;
		const r = strCollectionId && u.md.GetCollection(strCollectionId);
		const n = r && r.bAllowsDragAndDrop && r.AsDragDropCollection();
		return (
			<_k
				strTargetId={strCollectionId}
				fnBCanAcceptApps={(e) => n && e.some((e) => !n.apps.has(e))}
				fnOnDroppedApps={(e) =>
					n && n.AddApps(e.map((e) => m.tw.GetAppOverviewByAppID(e)))
				}
				{...t}
			>
				{this.props.children}
			</_k>
		);
	}
};
wf = Cg([o.PA], wf);
