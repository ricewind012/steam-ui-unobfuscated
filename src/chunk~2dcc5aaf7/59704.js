export let DH = c.W4;
var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./52912.js");
var a = require("./34616.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./92008.js");
var c = require("./43397.js");
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
		return (0, i._k)(m(e)).m_unPID;
	}
	return 0;
}
export function uU(e) {
	let { bUseLinkFilter: t, href: r, bForceExternal: n } = e;
	if (t && r) {
		r = (0, l.E)(r);
		n = true;
	}
	return o.createElement(c.uU, {
		...e,
		href: r,
		bForceExternal: n,
		bUseLinkFilter: false,
		getPIDFromEvent: u,
		onContextMenu: A,
	});
}
function A(e) {
	let t = (0, i.CO)(e);
	return (0, c.AJ)(e, t.m_unPID);
}
export function xE(e, t) {
	let r = (0, i.CO)(e);
	return (0, c.xE)(e, t, r.m_unPID);
}
export function EP(e, t, r = false) {
	let n = {
		bForceExternal: r,
		unPID: u(e),
	};
	return (0, c.EP)(m(e), t, n);
}
export let EO = class extends o.Component {
	render() {
		return o.createElement(
			o.Fragment,
			null,
			(0, a.j)(this.props.rtime, {
				bTimeOnly: this.props.bTimeOnly,
				bIncludeSeconds: this.props.bIncludeSeconds,
			}),
		);
	}
};
EO = (0, n.Cg)([s.PA], EO);
