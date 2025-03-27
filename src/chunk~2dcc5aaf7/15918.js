import n, { LH } from "./24295.js";
import { KV } from "./46382.js";
import { I } from "./61416.js";
import s from "./12176.js";
import o from "./8573.js";
import l from "./26052.js";
import c from "./54946.js";
import "./17613.js";
export function Dv() {
	const e = KV();
	const t = LH();
	return I(u(e, t));
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
	return ((e = {}) => {
		const t = KV();
		const r = LH();
		return I({
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
	const r = KV();
	const s = LH();
	return I({
		queryKey: [`GameplayInfo_${s}_${e}`],
		queryFn: async () => await p(r, e),
		...t,
	});
}
