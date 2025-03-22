var n = require(/*webcrack:missing*/ "./24295.js");
var i = require(/*webcrack:missing*/ "./46382.js");
var a = require(/*webcrack:missing*/ "./61416.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require(/*webcrack:missing*/ "./8573.js");
var l = require("./26052.js");
var c = require("./54946.js");
require("./17613.js");
export function Dv() {
	const e = (0, i.KV)();
	const t = (0, n.LH)();
	return (0, a.I)(u(e, t));
}
function u(e, t) {
	return {
		queryKey: ["GetFriendsList", t],
		queryFn: async () => {
			const t = s.w.Init(l.pH);
			const r = await l.DF.GetFriendsList(e, t);
			return r
				.Body()
				.friendslist()
				?.friends()
				?.filter((e) => {
					const t = new o.b(e.ulfriendid());
					return (
						(e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
						t.BIsIndividualAccount()
					);
				})
				.map((e) => e.ulfriendid());
		},
	};
}
function d(e, t) {
	return {
		queryKey: ["GetFriendNicknameList", t],
		queryFn: async () => {
			const t = s.w.Init(c.dN);
			return (await c.xt.GetNicknameList(e, t)).Body().toObject();
		},
	};
}
export function M8(e = {}) {
	return (function (e = {}) {
		const t = (0, i.KV)();
		const r = (0, n.LH)();
		return (0, a.I)({
			...d(t, r),
			...e,
		});
	})({
		...e,
		select: (e) => new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
	});
}
async function p(e, t) {
	const r = s.w.Init(c.tl);
	r.Body().set_appid(t);
	const n = await c.xt.GetFriendsGameplayInfo(e, r);
	if (!n.BSuccess()) {
		console.warn(`Failed to get gameplay info: ${n.GetEResult()}`);
	}
	return n.Body().toObject();
}
export function Nd(e, t = {}) {
	const r = (0, i.KV)();
	const s = (0, n.LH)();
	return (0, a.I)({
		queryKey: [`GameplayInfo_${s}_${e}`],
		queryFn: async () => await p(r, e),
		...t,
	});
}
