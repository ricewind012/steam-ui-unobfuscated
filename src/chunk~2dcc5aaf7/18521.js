var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require("./96593.js");
var s = require("./96000.js");
var o = require("./16139.js");
var l = require("./61175.js");
var c = require("./14629.js");
var m = require(/*webcrack:missing*/ "./89193.js");
var u = require(/*webcrack:missing*/ "./41230.js");
var d = require(/*webcrack:missing*/ "./63696.js");
var A = require("./64608.js");
var p = require("./10606.js");
var g = require("./13869.js");
var h = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var _ = require(/*webcrack:missing*/ "./52451.js");
var f = require(/*webcrack:missing*/ "./72476.js");
var b = require("./39859.js");
var y = b;
const S = "ea_dialog_seen";
export function jv() {
	return a.tw.allApps.some(c.EF);
}
export function kx() {
	s.md.AddPartnerCollection("partner-ea-access");
}
function v() {
	o.N.AddNewShowcase("partner-ea-access");
}
let I = class extends d.Component {
	state = {
		bHasPolitelyDeclined: false,
	};
	DeclinePolitely() {
		this.setState({
			bHasPolitelyDeclined: true,
		});
	}
	Close() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	render() {
		const { bHasPolitelyDeclined: e } = this.state;
		const t = !!s.md.GetCollection("partner-ea-access");
		const r = o.N.showcases.some(
			(e) => e.strCollectionId == "partner-ea-access",
		);
		const n =
			t &&
			l.n6.selectedGameListView == 1 &&
			(!l.n6.bIsGameListGroupedByCollection || l.n6.bIsGameListSortedByRecent);
		let i = null;
		if (!e) {
			if (t) {
				if (!r) {
					i = d.createElement(
						d.Fragment,
						null,
						d.createElement(
							"div",
							{
								className: y.Description,
							},
							(0, Localize)("#WhatsNew_EAAccessCollection_Description_2"),
						),
						d.createElement(
							"div",
							{
								className: y.ButtonRow,
							},
							d.createElement(
								"div",
								{
									className: (0, h.A)(y.Button, y.PrimaryButton),
									onClick: v,
								},
								(0, Localize)("#WhatsNew_EAAccessCollection_AddShelf_Button"),
							),
							d.createElement(
								"div",
								{
									className: y.Button,
									onClick: this.DeclinePolitely,
								},
								(0, Localize)("#WhatsNew_EAAccessCollection_Cancel_Button"),
							),
						),
					);
				}
			} else {
				i = d.createElement(
					d.Fragment,
					null,
					d.createElement(
						"div",
						{
							className: y.Description,
						},
						(0, Localize)("#WhatsNew_EAAccessCollection_Description_1"),
					),
					d.createElement(
						"div",
						{
							className: y.ButtonRow,
						},
						d.createElement(
							"div",
							{
								className: (0, h.A)(y.Button, y.PrimaryButton),
								onClick: kx,
							},
							(0, Localize)(
								"#WhatsNew_EAAccessCollection_AddCollection_Button",
							),
						),
						d.createElement(
							"div",
							{
								className: y.Button,
								onClick: this.DeclinePolitely,
							},
							(0, Localize)("#WhatsNew_EAAccessCollection_Cancel_Button"),
						),
					),
				);
			}
		}
		if (!i) {
			if (n) {
				const e = () => {
					l.n6.SelectGameListView(1);
					l.n6.SetGameListGroupedByCollection(true);
					l.n6.SetGameListSortedByRecent(false);
				};
				i = d.createElement(
					d.Fragment,
					null,
					d.createElement(
						"div",
						{
							className: y.Description,
						},
						(0, Localize)("#FilterEdit_CollectionsHiddenPrompt"),
					),
					d.createElement(
						"div",
						{
							className: y.ButtonRow,
						},
						d.createElement(
							"div",
							{
								className: (0, h.A)(y.Button, y.PrimaryButton),
								onClick: e,
							},
							(0, Localize)("#FilterEdit_AcceptGameListViewChange"),
						),
						d.createElement(
							"div",
							{
								className: y.Button,
								onClick: this.Close,
							},
							(0, Localize)("#FilterEdit_RejectGameListViewChange"),
						),
					),
				);
			} else {
				const t = (0, Localize)(
					e
						? "#WhatsNew_EAAccessCollection_Description_Declined"
						: "#WhatsNew_EAAccessCollection_Description_3",
				);
				i = d.createElement(
					d.Fragment,
					null,
					d.createElement(
						"div",
						{
							className: y.Description,
						},
						t,
					),
					d.createElement(
						"div",
						{
							className: y.Button,
							onClick: this.Close,
						},
						(0, Localize)("#Button_Close"),
					),
				);
			}
		}
		return d.createElement(
			p.x_,
			{
				onEscKeypress: this.Close,
			},
			d.createElement(
				"div",
				{
					className: y.DialogContainer,
				},
				d.createElement(
					A.Y9,
					null,
					" ",
					(0, Localize)("#WhatsNew_EAAccessCollection_Title"),
					" ",
				),
				d.createElement(
					A.nB,
					null,
					d.createElement(
						A.a3,
						{
							className: y.DialogBody,
						},
						i,
					),
				),
			),
		);
	}
};
(0, n.Cg)([_.oI], I.prototype, "DeclinePolitely", null);
(0, n.Cg)([_.oI], I.prototype, "Close", null);
I = (0, n.Cg)([u.PA], I);
export const Cf = new (class {
	async Init(e) {
		if ((await e.GetString(S)) === "true") {
			return;
		}
		if ((0, i.DO)(f.TS.LAUNCHER_TYPE)) {
			return;
		}
		const t = await SteamClient.UI.GetUIMode();
		if (t != 1 && t != 4) {
			if (!(0, i.ID)(f.TS.LAUNCHER_TYPE)) {
				(0, m.mJ)(jv, (t) => t && this.ShowPrompt(e), {
					fireImmediately: true,
				});
			}
		}
	}
	ShowPrompt(e) {
		(0, g.mK)(d.createElement(I, null), window, {
			strTitle: (0, Localize)("#WhatsNew_EAAccessCollection_Title"),
		});
		e.StoreString(S, "true");
	}
})();
