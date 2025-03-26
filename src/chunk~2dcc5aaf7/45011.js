var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./22222.js");
var a = require("./64608.js");
var s = require("./13869.js");
import { Localize } from "../../actual_src/utils/localization.js";
var l = require("./77347.js");
var c = require("./27756.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./10606.js");
var d = require(/*webcrack:missing*/ "./11131.js");
export function B(e) {
	(0, s.pg)(n.createElement(p, null), e);
}
function p(e) {
	const t = (0, l.qm)();
	const [r, s] = n.useState(t);
	const A = (0, d.R7)();
	const p = r.proxy_mode == i.Xu.k_EHTTPProxyMode_Manual;
	const h = r.port == 0 ? "" : r.port;
	const C = r.exclude_local;
	const _ = (0, l.sr)(r);
	const f = () => {
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const b = n.useRef(undefined);
	n.useEffect(() => {
		b.current?.TakeFocus();
	}, []);
	return n.createElement(
		u.eV,
		{
			onCancel: f,
		},
		n.createElement(
			a.Y9,
			null,
			n.createElement(
				"div",
				{
					className: "DialogHeader",
				},
				(0, Localize)("#Settings_Internet_Proxy_Settings"),
			),
		),
		n.createElement(
			a.nB,
			null,
			n.createElement(
				m.Z,
				{
					preferredFocus: true,
				},
				n.createElement(a.y4, {
					checked: p,
					onChange: (e) =>
						s({
							...r,
							proxy_mode: e
								? i.Xu.k_EHTTPProxyMode_Manual
								: i.Xu.k_EHTTPProxyMode_None,
						}),
					label: (0, Localize)("#Settings_Internet_Enable_HTTPProxy"),
					navRef: b,
				}),
			),
			p &&
				n.createElement(a.qq, {
					label: (0, Localize)("#Settings_Internet_ManualProxyAddress"),
					value: r.address,
					maxLength: 200,
					placeholder: "http://proxy",
					onChange: (e) =>
						s({
							...r,
							address: e.target.value,
						}),
				}),
			p &&
				n.createElement(a.qq, {
					label: (0, Localize)("#Settings_Internet_Port"),
					value: h,
					maxLength: 5,
					placeholder: "",
					onChange: (e) =>
						s({
							...r,
							port: g(e.target.value),
						}),
					mustBeNumeric: true,
				}),
			p &&
				n.createElement(a.y4, {
					checked: C,
					onChange: (e) =>
						s({
							...r,
							exclude_local: e,
						}),
					label: (0, Localize)("#Settings_Internet_ManualProxyExcludeLoopback"),
					bottomSeparator: "none",
				}),
		),
		n.createElement(
			a.wi,
			null,
			n.createElement(a.CB, {
				strOKText: (0, Localize)("#Login_Continue"),
				onOK: async () => {
					const { bSuccess: t, bRestartRequired: n } =
						await l.OQ.Get().SetProxyInfo(r);
					var i;
					if (n) {
						i = A.ownerWindow;
						(0, c.$)({
							strDescription: (0, Localize)("#Settings_Internet_RestartBody"),
							strCancelButtonText: (0, Localize)(
								"#Settings_Internet_RestartLater",
							),
							ownerWindow: i,
						});
					}
					if (t && e.closeModal) {
						e.closeModal();
					}
				},
				onCancel: f,
				bOKDisabled: !_,
			}),
		),
	);
}
function g(e) {
	if (e == null || e === "") {
		return 0;
	}
	const t = parseInt(e);
	if (isNaN(t)) {
		return 0;
	} else {
		return t;
	}
}
