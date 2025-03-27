import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { DO, ID } from "./44846.js";
import a from "./96593.js";
import s from "./96000.js";
import o from "./16139.js";
import l from "./61175.js";
import c from "./14629.js";
import { mJ } from "./89193.js";
import u from "./41230.js";
import d from "./63696.js";
import A from "./64608.js";
import p from "./10606.js";
import { mK } from "./13869.js";
import { A as A_1 } from "./90765.js";
import _ from "./52451.js";
import f from "./72476.js";
import b from "./39859.js";
const y = b;
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
		const { bHasPolitelyDeclined } = this.state;
		const t = !!s.md.GetCollection("partner-ea-access");
		const r = o.N.showcases.some(
			(e) => e.strCollectionId == "partner-ea-access",
		);
		const n =
			t &&
			l.n6.selectedGameListView == 1 &&
			(!l.n6.bIsGameListGroupedByCollection || l.n6.bIsGameListSortedByRecent);
		let i = null;
		if (!bHasPolitelyDeclined) {
			if (t) {
				if (!r) {
					i = (
						<>
							<div className={y.Description}>
								{(0, Localize)("#WhatsNew_EAAccessCollection_Description_2")}
							</div>
							<div className={y.ButtonRow}>
								<div className={A_1(y.Button, y.PrimaryButton)} onClick={v}>
									{(0, Localize)(
										"#WhatsNew_EAAccessCollection_AddShelf_Button",
									)}
								</div>
								<div className={y.Button} onClick={this.DeclinePolitely}>
									{(0, Localize)("#WhatsNew_EAAccessCollection_Cancel_Button")}
								</div>
							</div>
						</>
					);
				}
			} else {
				i = (
					<>
						<div className={y.Description}>
							{(0, Localize)("#WhatsNew_EAAccessCollection_Description_1")}
						</div>
						<div className={y.ButtonRow}>
							<div className={A_1(y.Button, y.PrimaryButton)} onClick={kx}>
								{(0, Localize)(
									"#WhatsNew_EAAccessCollection_AddCollection_Button",
								)}
							</div>
							<div className={y.Button} onClick={this.DeclinePolitely}>
								{(0, Localize)("#WhatsNew_EAAccessCollection_Cancel_Button")}
							</div>
						</div>
					</>
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
				i = (
					<>
						<div className={y.Description}>
							{(0, Localize)("#FilterEdit_CollectionsHiddenPrompt")}
						</div>
						<div className={y.ButtonRow}>
							<div className={A_1(y.Button, y.PrimaryButton)} onClick={e}>
								{(0, Localize)("#FilterEdit_AcceptGameListViewChange")}
							</div>
							<div className={y.Button} onClick={this.Close}>
								{(0, Localize)("#FilterEdit_RejectGameListViewChange")}
							</div>
						</div>
					</>
				);
			} else {
				const t = (0, Localize)(
					bHasPolitelyDeclined
						? "#WhatsNew_EAAccessCollection_Description_Declined"
						: "#WhatsNew_EAAccessCollection_Description_3",
				);
				i = (
					<>
						<div className={y.Description}>{t}</div>
						<div className={y.Button} onClick={this.Close}>
							{(0, Localize)("#Button_Close")}
						</div>
					</>
				);
			}
		}
		return (
			<p.x_ onEscKeypress={this.Close}>
				<div className={y.DialogContainer}>
					<A.Y9> {(0, Localize)("#WhatsNew_EAAccessCollection_Title")} </A.Y9>
					<A.nB>
						<A.a3 className={y.DialogBody}>{i}</A.a3>
					</A.nB>
				</div>
			</p.x_>
		);
	}
};
Cg([_.oI], I.prototype, "DeclinePolitely", null);
Cg([_.oI], I.prototype, "Close", null);
I = Cg([u.PA], I);
export const Cf = new (class {
	async Init(e) {
		if ((await e.GetString(S)) === "true") {
			return;
		}
		if (DO(f.TS.LAUNCHER_TYPE)) {
			return;
		}
		const t = await SteamClient.UI.GetUIMode();
		if (t != 1 && t != 4) {
			if (!ID(f.TS.LAUNCHER_TYPE)) {
				mJ(jv, (t) => t && this.ShowPrompt(e), {
					fireImmediately: true,
				});
			}
		}
	}
	ShowPrompt(e) {
		mK(<I />, window, {
			strTitle: (0, Localize)("#WhatsNew_EAAccessCollection_Title"),
		});
		e.StoreString(S, "true");
	}
})();
