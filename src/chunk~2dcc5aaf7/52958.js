import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./54043.js";
class s {
	constructor() {
		Gn(this);
	}
	m_mapDropTargets = new Map();
	m_mapCurrentDragPayload = null;
	m_coordinator = new a.np();
	m_rgEndPromises = [];
	GetCoordinator() {
		return this.m_coordinator;
	}
	BIsDropTarget(e) {
		return !!this.m_mapDropTargets.get(e);
	}
	AddDropTarget(e) {
		const t = this.m_mapDropTargets.get(e) || 0;
		this.m_mapDropTargets.set(e, t + 1);
	}
	RemoveDropTarget(e) {
		const t = this.m_mapDropTargets.get(e) || 0;
		if (t > 0) {
			this.m_mapDropTargets.set(e, t - 1);
		}
	}
	GetDragData(e) {
		return this.m_mapCurrentDragPayload && this.m_mapCurrentDragPayload.get(e);
	}
	BIsDragInProgress() {
		return !!this.m_mapCurrentDragPayload;
	}
	async WaitForDragToEnd() {
		return new Promise((e) => {
			this.m_rgEndPromises.push(e);
		});
	}
	StartDrag(e) {
		this.m_mapCurrentDragPayload = e;
	}
	ResetDrag() {
		this.m_mapCurrentDragPayload = null;
		this.m_mapDropTargets.clear();
		this.m_rgEndPromises.forEach((e) => e());
		this.m_rgEndPromises = [];
	}
}
Cg([i.sH], s.prototype, "m_mapDropTargets", undefined);
Cg([i.sH], s.prototype, "m_mapCurrentDragPayload", undefined);
export const _ = new s();
window.dragStore = _;
