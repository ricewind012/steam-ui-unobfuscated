export var bJ;
var i = require(/*webcrack:missing*/ "./72476.js");
var a = require("./1252.js");
var s = require("./87935.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require("./34043.js");
var c = require("./70239.js");
export async function GU(e, t) {
	let r = "";
	if (t == bJ.Up) {
		r = "voteup";
	} else if (t == bJ.Down) {
		r = "votedown";
	}
	if (!r) {
		throw new Error("Invalid direction");
	}
	let o = `${s.B7.GetCommunityURL()}sharedfiles/${r}`;
	let l = new URLSearchParams();
	l.append("id", e);
	l.append("sessionid", i.TS.SESSIONID);
	let c = await a.g.post(o, l, {
		retrycount: 1,
	});
	if (!c.success) {
		throw new Error("Invalid response");
	}
	if (c.success != 1) {
		throw c.success;
	}
	return c.success;
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Up = 1)] = "Up";
	e[(e.Down = 2)] = "Down";
})((bJ ||= {}));
export async function dK(e, t) {
	let r = o.w.Init(l.qu);
	r.Body().set_publishedfileids(e.slice());
	let i = await l.a5.GetUserVoteSummary(
		c.B6.CMInterface.GetServiceTransport(),
		r,
	);
	const a = new Map();
	for (let e of i.Body().summaries()) {
		let t = e.toObject();
		let r = bJ.None;
		if (t.vote_for) {
			r = bJ.Up;
		} else if (t.vote_against) {
			r = bJ.Down;
		}
		a.set(t.publishedfileid, {
			vote: r,
			bReported: t.reported,
		});
	}
	return a;
}
export async function RE(e, t) {
	const r = `${s.B7.GetCommunityURL()}sharedfiles/reportitem`;
	const n = new FormData();
	n.append("id", e);
	n.append("sessionid", i.TS.SESSIONID);
	n.append("description", t);
	let o = await a.g.post(r, n, {
		retrycount: 1,
	});
	if (!o.success) {
		throw new Error("Invalid response");
	}
	if (o.success != 1) {
		throw o.success;
	}
	return o.success;
}
