var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./12176.js");
var a = require("./99104.js");
var s = require(/*webcrack:missing*/ "./83599.js");
import { Seconds } from "../../actual_src/utils/time.js";
var l = require(/*webcrack:missing*/ "./93960.js");
const c = new s.wd("ReactUsageReporting").Debug;
const m = Seconds.PerMinute * 1000;
class u {
	m_strProduct;
	m_strVersion;
	m_transport = null;
	m_mapRoutes = new Map();
	m_mapComponents = new Map();
	m_mapActions = new Map();
	m_reportCount = 0;
	m_bInitialized = false;
	Init(e, t, r) {
		this.m_bInitialized = true;
		this.m_strProduct = e;
		this.m_strVersion = t;
		this.m_transport = r;
		this.ScheduleSend();
	}
	ScheduleSend() {
		setTimeout(() => this.CheckSend(), m);
	}
	CheckSend() {
		if (this.m_reportCount > 0) {
			this.SendMetrics();
		}
		this.ScheduleSend();
	}
	ReportInternal(e, t) {
		if (!t.has(e)) {
			t.set(e, 0);
		}
		t.set(e, t.get(e) + 1);
		this.m_reportCount++;
		if (this.ShouldSendMetricsImmediately()) {
			this.SendMetrics();
		}
	}
	ReportRouteMatch(e) {
		c("Route match: " + e);
		this.ReportInternal(e, this.m_mapRoutes);
	}
	ReportTrackedComponent(e) {
		c("Tracked component: " + e);
		this.ReportInternal(e, this.m_mapComponents);
	}
	ReportTrackedAction(e) {
		c("User action: " + e);
		this.ReportInternal(e, this.m_mapActions);
	}
	ShouldSendMetricsImmediately() {
		return this.m_reportCount >= 100;
	}
	SendMetrics() {
		if (!this.m_bInitialized) {
			return;
		}
		const e = i.w.Init(a.bc);
		e.Body().set_product(this.m_strProduct);
		e.Body().set_version(this.m_strVersion);
		this.m_mapRoutes.forEach((t, r) => {
			let n = new a.N4();
			n.set_route(r);
			n.set_count(t);
			e.Body().add_routes(n);
		});
		this.m_mapComponents.forEach((t, r) => {
			let n = new a.Zd();
			n.set_component(r);
			n.set_count(t);
			e.Body().add_components(n);
		});
		this.m_mapActions.forEach((t, r) => {
			let n = new a.Ys();
			n.set_action(r);
			n.set_count(t);
			e.Body().add_actions(n);
		});
		this.m_mapRoutes.clear();
		this.m_mapComponents.clear();
		this.m_mapActions.clear();
		this.m_reportCount = 0;
		a._5.ReportReactUsage(this.m_transport, e);
	}
	get version() {
		return this.m_strVersion;
	}
	get product() {
		return this.m_strProduct;
	}
}
(0, n.Cg)([l.o], u.prototype, "CheckSend", null);
export const y = new u();
