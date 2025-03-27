import n from "./63696.js";
import i, { I } from "./61416.js";
import { E } from "./55037.js";
import { KV } from "./46382.js";
import { Kx } from "./16583.js";
import l from "./88724.js";
import c from "./8573.js";
import "./75144.js";
import m from "./54946.js";
import u from "./11682.js";
const d = u;
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
	const t = KV();
	const r = n.useContext(CContext);
	return I(_(r, t, e));
}
export function DW(e) {
	const t = KV();
	const r = n.useContext(CContext);
	return E({
		queries: e.map((e) => _(r, t, e)),
	});
}
export function un(e) {
	const { loadPersonaState, children } = e;
	const i = n.useMemo(
		() => ({
			loadPersonaState: loadPersonaState,
		}),
		[loadPersonaState],
	);
	return <CContext.Provider value={i}>{children}</CContext.Provider>;
}
const CContext = n.createContext({
	loadPersonaState: async (e, t) => {
		if (e == null) {
			return null;
		}
		const r = await ((e) => (f ??= A(e)))(t).load(
			c.b.InitFromAccountID(e).ConvertTo64BitString(),
		);
		return ((e, t) => {
			let r = new l.Z(e);
			const n = t?.public_data;
			const i = t?.private_data;
			r.m_bInitialized = !!t;
			r.m_ePersonaState = i?.persona_state ?? 0;
			r.m_strAvatarHash = n?.sha_digest_avatar ? Kx(n.sha_digest_avatar) : l.dV;
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
