var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./61416.js");
var a = require(/*webcrack:missing*/ "./55037.js");
var s = require(/*webcrack:missing*/ "./46382.js");
var o = require(/*webcrack:missing*/ "./16583.js");
var l = require("./88724.js");
var c = require(/*webcrack:missing*/ "./8573.js");
require(/*webcrack:missing*/ "./75144.js");
var m = require("./54946.js");
var u = require(/*webcrack:missing*/ "./11682.js");
var d = u;
function A(e, t) {
	return new d(
		async (t) => {
			const r = [...t];
			const n = await m.xt.GetPlayerLinkDetails(e, {
				steamids: r,
			});
			const i = new Map();
			n.Body()
				.accounts()
				.forEach((e) => {
					const t = e.toObject();
					i.set(t.public_data.steamid, t);
				});
			return r.map((e) => i.get(e) ?? null);
		},
		{
			maxBatchSize: 100,
			cache: false,
			...t,
		},
	);
}
export function js(e) {
	const t = (0, s.KV)();
	const r = n.useContext(C);
	return (0, i.I)(_(r, t, e));
}
export function DW(e) {
	const t = (0, s.KV)();
	const r = n.useContext(C);
	return (0, a.E)({
		queries: e.map((e) => _(r, t, e)),
	});
}
export function un(e) {
	const { loadPersonaState: t, children: r } = e;
	const i = n.useMemo(
		() => ({
			loadPersonaState: t,
		}),
		[t],
	);
	return n.createElement(
		C.Provider,
		{
			value: i,
		},
		r,
	);
}
const C = n.createContext({
	loadPersonaState: async (e, t) => {
		if (e == null) {
			return null;
		}
		const r = await (function (e) {
			return (f ??= A(e));
		})(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
		return (function (e, t) {
			let r = new l.Z(e);
			const n = t?.public_data;
			const i = t?.private_data;
			r.m_bInitialized = !!t;
			r.m_ePersonaState = i?.persona_state ?? 0;
			r.m_strAvatarHash = n?.sha_digest_avatar
				? (0, o.Kx)(n.sha_digest_avatar)
				: l.dV;
			r.m_strPlayerName = n?.persona_name ?? e.ConvertTo64BitString();
			r.m_strAccountName = i?.account_name;
			if (i?.persona_state_flags) {
				r.m_unPersonaStateFlags = i?.persona_state_flags;
			}
			if (i?.game_id) {
				r.m_gameid = i?.game_id;
			}
			if (i?.game_server_ip_address) {
				r.m_unGameServerIP = i?.game_server_ip_address;
			}
			if (i?.lobby_steam_id) {
				r.m_game_lobby_id = i?.lobby_steam_id;
			}
			if (i?.game_extra_info) {
				r.m_strGameExtraInfo = i?.game_extra_info;
			}
			if (n?.profile_url) {
				r.m_strProfileURL = n.profile_url;
			}
			return r;
		})(c.b.InitFromAccountID(e), r);
	},
});
function _(e, t, r) {
	const n = typeof r == "string" ? new c.b(r).GetAccountID() : r;
	return {
		queryKey: ["PlayerSummary", n],
		queryFn: () => e.loadPersonaState(n, t),
		enabled: !!n,
	};
}
let f;
