import { FailAssertion } from "../../actual_src/utils/assert.js";
import r from "./63696.js";
const s = r.createContext(undefined);
const o = s.Provider;
const a = () => {
	const e = r.useContext(s);
	if (!e) {
		throw new Error(
			"called useActiveServiceTransportContext outside of ServiceTransportProvider",
		);
	}
	return e;
};
export function VQ(e) {
	const { useStorage: t, children: n } = e;
	let s;
	let a;
	if ("useActiveCMInterface" in e) {
		a = s = e.useActiveCMInterface;
	} else {
		if (!("useActiveSteamInterface" in e)) {
			FailAssertion(
				e,
				"neither useActiveCMInterface nor useActiveSteamInterface were provided",
			);
			return n;
		}
		a = e.useActiveSteamInterface;
	}
	const c = r.useMemo(
		() => ({
			useActiveSteamInterface: a,
			useActiveCMInterface: s,
			useStorage: t,
		}),
		[a, s, t],
	);
	return r.createElement(
		o,
		{
			value: c,
		},
		n,
	);
}
export const KV = () => a().useActiveSteamInterface().GetServiceTransport();
export const rW = () =>
	a().useActiveSteamInterface().GetAnonymousServiceTransport();
export const rX = () => a().useStorage();
export const TR = () => a().useActiveSteamInterface();
export const zv = () => {
	const { useActiveCMInterface: e } = a();
	if (!e) {
		throw new Error(
			"called useActiveCMInterface outside of ServiceTransportRoot",
		);
	}
	return e();
};
