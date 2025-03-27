import n, { Cg } from "./34629.js";
import { _k, CO } from "./52912.js";
import { j } from "./34616.js";
import s from "./41230.js";
import o from "./63696.js";
import { E } from "./92008.js";
import c, { AJ, xE as xE_1, EP as EP_1 } from "./43397.js";
export let DH = c.W4;
function m(e) {
	if ("currentTarget" in e) {
		return e.currentTarget.ownerDocument.defaultView;
	} else {
		return e;
	}
}
function u(e) {
	if (
		typeof SteamClient != "undefined" &&
		SteamClient.SharedConnection !== undefined
	) {
		return _k(m(e)).m_unPID;
	}
	return 0;
}
export function uU(e) {
	let { bUseLinkFilter, href, bForceExternal } = e;
	if (bUseLinkFilter && href) {
		href = E(href);
		bForceExternal = true;
	}
	return (
		<c.uU
			{...e}
			href={href}
			bForceExternal={bForceExternal}
			bUseLinkFilter={false}
			getPIDFromEvent={u}
			onContextMenu={A}
		/>
	);
}
function A(e) {
	let t = CO(e);
	return AJ(e, t.m_unPID);
}
export function xE(e, t) {
	let r = CO(e);
	return xE_1(e, t, r.m_unPID);
}
export function EP(e, t, r = false) {
	let n = {
		bForceExternal: r,
		unPID: u(e),
	};
	return EP_1(m(e), t, n);
}
export let EO = class extends o.Component {
	render() {
		return (
			<>
				{j(this.props.rtime, {
					bTimeOnly: this.props.bTimeOnly,
					bIncludeSeconds: this.props.bIncludeSeconds,
				})}
			</>
		);
	}
};
EO = Cg([s.PA], EO);
