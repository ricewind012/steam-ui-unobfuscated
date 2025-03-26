var n;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require("./3867.js");
var l = o;
var c = require("./10606.js");
var m = require("./13869.js");
import { Localize } from "../../actual_src/utils/localization.js";
var d = require(/*webcrack:missing*/ "./52451.js");
require(/*webcrack:missing*/ "./26853.js");
var A = require("./96593.js");
var p = require(/*webcrack:missing*/ "./41230.js");
export function Uo(e, t, r) {
	(0, m.pg)(
		a.createElement(h, {
			rgApps: e,
			bConfirmPassword: r,
		}),
		t,
		{
			strTitle: h.Title(),
			bNeverPopOut: true,
		},
	);
}
let h = (n = class extends a.Component {
	constructor(e) {
		super(e);
	}
	static Title() {
		return (0, Localize)("#UninstallDialog_Title");
	}
	async OnUninstallConfirmed() {
		SteamClient.Installs.OpenUninstallWizard(this.props.rgApps, true);
		this.props.closeModal();
	}
	render() {
		return a.createElement(
			c.eV,
			{
				onOK: null,
				closeModal: this.props.closeModal,
			},
			a.createElement(
				"div",
				{
					className: l.UninstallDialog,
				},
				a.createElement(
					s.Y9,
					{
						className: l.ModalHeader,
					},
					n.Title(),
				),
				a.createElement(
					s.nB,
					null,
					a.createElement(C, {
						rgApps: this.props.rgApps,
						onCancel: this.props.closeModal,
						onOk: this.OnUninstallConfirmed,
					}),
				),
			),
		);
	}
});
function C(e) {
	let t = "";
	if (e.rgApps.length == 1) {
		let r = e.rgApps[0];
		let n = A.tw.GetAppOverviewByAppID(r);
		if (n) {
			t =
				n.app_type == 8
					? (0, Localize)("#UninstallDialog_Confirmation_Demo", n.display_name)
					: (0, Localize)(
							"#UninstallDialog_Confirmation_Single",
							n.display_name,
						);
		}
	}
	t ||= (0, Localize)("#UninstallDialog_Confirmation_Multiple");
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(s.a3, null, a.createElement("div", null, t)),
		a.createElement(
			s.wi,
			null,
			a.createElement(s.CB, {
				focusButton: "primary",
				onOK: e.onOk,
				onCancel: e.onCancel,
				strOKText: (0, Localize)("#UninstallDialog_Uninstall"),
			}),
		),
	);
}
export function XK(e, t) {
	let r = A.tw.GetAppOverviewByAppID(e);
	let n = (0, Localize)(`#Steam_AppUpdateError_${t}`);
	(0, m.pg)(
		a.createElement(
			c.eV,
			{
				onOK: null,
			},
			a.createElement(
				"div",
				{
					className: l.UninstallDialog,
				},
				a.createElement(
					s.Y9,
					{
						className: l.ModalHeader,
					},
					(0, Localize)("#UninstallDialog_Title"),
				),
				a.createElement(
					s.nB,
					null,
					a.createElement(
						s.a3,
						null,
						a.createElement(
							"div",
							null,
							(0, Localize)("#UninstallDialog_ErrorMessage", r.display_name),
						),
						a.createElement(
							"div",
							{
								className: l.UninstallError,
							},
							n,
						),
					),
					a.createElement(
						s.wi,
						null,
						a.createElement(s.jn, null, (0, Localize)("#Button_Close")),
					),
				),
			),
		),
		window,
		{
			strTitle: (0, Localize)("#UninstallDialog_Title"),
		},
	);
}
(0, i.Cg)([d.oI], h.prototype, "OnUninstallConfirmed", null);
h = n = (0, i.Cg)([p.PA], h);
