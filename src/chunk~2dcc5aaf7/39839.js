var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./93960.js");
var o = require(/*webcrack:missing*/ "./72476.js");
export function y9() {
	return (0, a.q3)(() => {
		dn.consoleSpew.length;
		return dn.consoleSpew;
	});
}
export function o4() {
	return dn.commandHistory;
}
class m {
	constructor() {
		(0, i.Gn)(this);
	}
	m_listenHandle = undefined;
	m_rgConsoleSpew = [];
	m_rgCommandHistory = [];
	m_nLineCounter = 0;
	Init() {
		if (o.TS.DEV_MODE) {
			this.StartListening();
		}
	}
	StartListening() {
		this.m_listenHandle ||= SteamClient.Console.RegisterForSpewOutput(
			this.OnSteamConsoleSpew,
		);
	}
	StopListening() {
		if (this.m_listenHandle) {
			this.m_listenHandle.unregister();
			this.m_listenHandle = undefined;
		}
	}
	Reset() {
		this.m_rgConsoleSpew = [];
	}
	OnSteamConsoleSpew(e) {
		this.AddSpewLine(e.spew, e.spew_type);
	}
	AddSpewLine(e, t) {
		const r = new Date();
		if (t == "input") {
			e += "\n";
		}
		let n = e.split("\n");
		if (this.m_rgConsoleSpew.length > 0 && t !== "input") {
			this.m_rgConsoleSpew[this.m_rgConsoleSpew.length - 1].spew.push({
				text: n[0],
				type: t,
			});
			n = n.slice(1);
		}
		let i = n.map((e) => ({
			line: this.m_nLineCounter++,
			time: r,
			spew: e
				? [
						{
							text: e,
							type: t,
						},
					]
				: [],
		}));
		this.m_rgConsoleSpew.push(...i);
		this.m_rgConsoleSpew = this.m_rgConsoleSpew.filter(
			(e, t) =>
				this.m_rgConsoleSpew.length - t <= 1000 ||
				r.getTime() - e.time.getTime() < 10000,
		);
	}
	get consoleSpew() {
		return this.m_rgConsoleSpew;
	}
	get commandHistory() {
		return this.m_rgCommandHistory;
	}
}
(0, n.Cg)([i.sH.shallow], m.prototype, "m_rgConsoleSpew", undefined);
(0, n.Cg)([s.o], m.prototype, "OnSteamConsoleSpew", null);
(0, n.Cg)([i.XI], m.prototype, "AddSpewLine", null);
export const dn = new m();
window.consoleStore = dn;
