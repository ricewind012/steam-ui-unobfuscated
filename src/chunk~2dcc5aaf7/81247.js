var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./46108.js");
var s = require("./24496.js");
var o = require("./34428.js");
var l = require(/*webcrack:missing*/ "./42318.js");
require(/*webcrack:missing*/ "./58663.js").Message;
export function r() {
	const [e, t] = (0, s.Dt)();
	if (!e.bSupported) {
		return null;
	}
	const r = e.bRunning
		? (0, a.we)("#Settings_System_TrimAll_Running")
		: (0, a.we)("#Settings_System_TrimAll_Run");
	return n.createElement(
		i.xh,
		{
			disabled: e.bRunning,
			label: (0, a.we)("#Settings_System_TrimAll_Label"),
			description: (0, a.we)("#Settings_System_TrimAll_Description"),
			onClick: () => t(),
		},
		r,
	);
}
function m(e) {
	const { drive: t } = e;
	const r = (0, s.fu)(t.id);
	let a = "";
	if (t.is_ejectable) {
		a += " eject";
	}
	return n.createElement(
		l.tH,
		null,
		n.createElement(i.T8, {
			name: "",
			value: "",
		}),
		n.createElement(i.T8, {
			name: "id",
			value: t.id.toString(),
		}),
		n.createElement(i.T8, {
			name: "sModel",
			value: t.model,
		}),
		n.createElement(i.T8, {
			name: "sVendor",
			value: t.vendor,
		}),
		n.createElement(i.T8, {
			name: "sSerial",
			value: t.serial,
		}),
		n.createElement(i.T8, {
			name: "nSizeBytes",
			value: (0, o.dm)(Number(t.size_bytes), 1),
		}),
		n.createElement(i.T8, {
			name: "sFeatures",
			value: a,
		}),
		r.map((e) =>
			n.createElement(u, {
				key: e.id,
				blockDevice: e,
			}),
		),
	);
}
function u(e) {
	const { blockDevice: t } = e;
	let r = "";
	if (t.is_formattable) {
		r += " format";
	}
	if (t.is_read_only) {
		r += " ro";
	}
	if (t.is_root_device) {
		r += " rootdevice";
	}
	return n.createElement(
		l.tH,
		null,
		n.createElement(i.T8, {
			name: "--> id",
			value: t.id.toString(),
		}),
		n.createElement(i.T8, {
			name: "    sPath",
			value: t.path,
		}),
		n.createElement(i.T8, {
			name: "    sFriendlyPath",
			value: t.friendly_path,
		}),
		n.createElement(i.T8, {
			name: "    rMountPath",
			value: t.mount_paths.join(),
		}),
		n.createElement(i.T8, {
			name: "    sLabel",
			value: t.label,
		}),
		n.createElement(i.T8, {
			name: "    nSizeBytes",
			value: (0, o.dm)(Number(t.size_bytes), 1),
		}),
		n.createElement(i.T8, {
			name: "    sFeatures",
			value: r,
		}),
		n.createElement(i.T8, {
			name: "    eContentType",
			value:
				((s = t.content_type),
				"unknown EStorageBlockContentType ( " + s + " )"),
		}),
		n.createElement(i.T8, {
			name: "    eFileSystemType ",
			value:
				((a = t.filesystem_type),
				"unknown EStorageBlockFileSystemType ( " + a + " )"),
		}),
	);
	var a;
	var s;
}
export function q(e) {
	const t = (0, s.vM)();
	if (t.isSuccess) {
		return n.createElement(
			n.Fragment,
			null,
			t.data.drives.map((e) =>
				n.createElement(m, {
					key: e.id,
					drive: e,
				}),
			),
		);
	} else {
		return n.createElement("div", null, "Error fetching data");
	}
}
