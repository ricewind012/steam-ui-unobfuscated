var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./22222.js");
var a = require("./64608.js");
var s = require("./10606.js");
var o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require("./77347.js");
var m = require("./61824.js");
var u = m;
var d = require("./46422.js");
var A = require("./43802.js");
var p = require("./67338.js");
var g = require(/*webcrack:missing*/ "./90765.js");
export function U(e) {
	(0, o.pg)(
		n.createElement(C, {
			accessPoint: e,
		}),
		window,
	);
}
const C = (e) => {
	const { accessPoint: t } = e;
	(0, p._)(t);
	const r = (0, c.Ev)();
	const o = t?.type == i.WO.Wireless;
	const m = () => {
		(0, A.V)({
			accessPoint: t,
			onSuccess: e.closeModal,
		});
	};
	const h = () => {
		t.Disconnect();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const C = () => {
		t.Forget();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const y = t?.isConnectable ?? false;
	const S = t?.isDisconnectable ?? false;
	const w = [];
	if (t?.isForgettable ?? false) {
		w.push(
			n.createElement(
				a.$n,
				{
					onClick: C,
				},
				(0, l.we)("#Settings_Internet_Forget"),
			),
		);
	}
	if (y) {
		w.push(
			n.createElement(
				a.jn,
				{
					onClick: m,
				},
				(0, l.we)("#Settings_Internet_Connect"),
			),
		);
	}
	if (S) {
		w.push(
			n.createElement(
				a.jn,
				{
					onClick: h,
				},
				(0, l.we)("#Settings_Internet_Disconnect"),
			),
		);
	}
	const B = (0, d.oM)();
	const v = w.length == 1;
	return n.createElement(
		s.eV,
		{
			onCancel: e.closeModal,
		},
		n.createElement(
			a.f3,
			{
				className: u.InfoDialogBody,
			},
			n.createElement(
				a.BC,
				{
					label: n.createElement(
						a.Y9,
						{
							className: (0, g.A)(u.Header, !v && u.CenteredHeader),
						},
						t?.displayName ?? (0, l.we)("#Internet_Network_Type_Unknown"),
					),
					childrenLayout: v ? "inline" : "below",
					childrenContainerWidth: "fixed",
					alignItems: "right",
					spacing: "extra",
					highlightOnFocus: false,
				},
				w,
			),
			t == null &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(a.D0, {
						disabled: true,
						label: (0, l.we)("#Internet_Settings_Network_Not_Found"),
					}),
				),
			t != null &&
				n.createElement(
					n.Fragment,
					null,
					o &&
						r &&
						n.createElement(a.y4, {
							disabled: !t.isForgettable,
							label: (0, l.we)("#Settings_Internet_Autoconnect_Toggle"),
							checked: t.isAutoconnectEnabled,
							onChange: (e) => t.SetAutoconnectEnabled(e),
						}),
					n.createElement(
						a.Nv,
						{
							focusable: true,
							label: (0, l.we)("#Settings_Internet_Status"),
						},
						(function (e) {
							switch (e) {
								case i.$J.NotPresent:
									return (0, l.we)("#Internet_Network_State_NotFound");
								case i.$J.Failed:
									return (0, l.we)("#Internet_Network_State_Failed");
								case i.$J.Disconnected:
									return (0, l.we)("#Internet_Network_State_Disconnected");
								case i.$J.Disconnecting:
									return (0, l.we)("#Internet_Network_State_Disconnecting");
								case i.$J.Connecting:
									return (0, l.we)("#Internet_Network_State_Connecting");
								case i.$J.Connected:
									return (0, l.we)("#Internet_Network_State_Connected");
								case i.$J.Retrying:
									return (0, l.we)("#Internet_Network_State_Retrying");
							}
						})(t.state),
					),
					n.createElement(
						a.Nv,
						{
							focusable: true,
							label: (0, l.we)("#Settings_Internet_MAC_Address"),
						},
						t.macAddress,
					),
					n.createElement(_, {
						accessPoint: t,
					}),
					n.createElement(f, {
						accessPoint: t,
					}),
					B &&
						n.createElement(b, {
							accessPoint: t,
						}),
				),
		),
		n.createElement(
			a.wi,
			null,
			n.createElement(
				a.BC,
				{
					alignItems: "center",
					highlightOnFocus: false,
					bottomSeparator: "none",
				},
				n.createElement(
					a.jn,
					{
						autoFocus: !r,
						onClick: e.closeModal,
					},
					(0, l.we)("#Button_OK"),
				),
			),
		),
	);
};
function _(e) {
	const t = e.accessPoint?.IPv4Addresses ?? [];
	if (t.length == 0) {
		return null;
	}
	let r = [];
	for (let e of t) {
		r.push(
			n.createElement(
				a.Nv,
				{
					key: e.ip + "ip",
					focusable: true,
					label: (0, l.we)("#Settings_Internet_IP_Address"),
				},
				(0, c.yp)(e.ip),
			),
		);
		r.push(
			n.createElement(
				a.Nv,
				{
					key: e.netmask + "mask",
					focusable: true,
					label: (0, l.we)("#Settings_Internet_Subnet_Mask"),
				},
				(0, c.yp)(e.netmask),
			),
		);
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(a.lr, null, (0, l.we)("#Settings_Internet_IPv4_Address")),
		n.createElement(
			a.Nv,
			{
				key: "dhcp",
				focusable: true,
				label: (0, l.we)("#Settings_Internet_IP_Address_Assignment"),
			},
			e.accessPoint?.IPv4DHCPEnabled
				? (0, l.we)("#Settings_Internet_IP_Address_Assignment_Automatic")
				: (0, l.we)("#Settings_Internet_IP_Address_Assignment_Manual"),
		),
		r,
	);
}
function f(e) {
	const t = e.accessPoint?.IPv6Addresses ?? [];
	if (t.length == 0) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(a.lr, null, (0, l.we)("#Settings_Internet_IPv6_Address")),
			t.map((e) =>
				n.createElement(
					a.Nv,
					{
						key: e.ip,
						focusable: true,
						label: (0, l.we)("#Settings_Internet_IP_Address"),
					},
					e.ip,
				),
			),
		);
	}
}
function b(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(a.lr, null, "Valve Only Info"),
		n.createElement(
			a.Nv,
			{
				focusable: true,
				label: "eSecurity",
			},
			e.accessPoint?.wirelessAPInfo?.esecurity ?? "None",
		),
	);
}
