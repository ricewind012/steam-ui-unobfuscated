import { Localize } from "../utils/localization.js";
import {
	DO as BIsReducedUILauncher,
	ID as BIsChinaLauncher,
} from "../../src/library/44846.js";
import { tw as AppStore } from "./96593.js";
import { md as CollectionStore } from "./collectionstore.js";
import { N as ShowcaseStore } from "../../src/library/16139.js";
import { n6 as LibraryUIStore } from "./libraryuistore.js";
import { EF } from "../../src/chunk~2dcc5aaf7/14629.js";
import { PA } from "../../src/library/41230.js";
import { Component } from "react";
import { Y9, nB as NB, a3 as A3 } from "../../src/chunk~2dcc5aaf7/64608.js";
import { x_ as X_ } from "../../src/chunk~2dcc5aaf7/10606.js";
import { mK as showModal } from "../../src/chunk~2dcc5aaf7/13869.js";
import { A as ClassMap } from "../../src/library/90765.js";
import { TS as Config } from "../../src/library/72476.js";
import styles from "../../src/chunk~2dcc5aaf7/39859.js";
import { EUIMode } from "../steamclient/steamclient/shared.js";
import { bind } from "../utils/bind.js";
import { autorun } from "mobx";

const y = styles;
const k_strEADialogStorageKey = "ea_dialog_seen";

export function jv() {
	return AppStore.allApps.some(EF);
}

export function kx() {
	CollectionStore.AddPartnerCollection("partner-ea-access");
}

function AddEAShowcase() {
	ShowcaseStore.AddNewShowcase("partner-ea-access");
}

// TODO: this whole thing is decorated with @observer ?
let EAAccessPrompt = class extends Component {
	state = {
		bHasPolitelyDeclined: false,
	};

	@bind DeclinePolitely() {
		this.setState({
			bHasPolitelyDeclined: true,
		});
	}

	@bind Close() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}

	render() {
		const { bHasPolitelyDeclined } = this.state;
		const bHasCollection = !!CollectionStore.GetCollection("partner-ea-access");
		const bCollectionExists = ShowcaseStore.showcases.some(
			(e) => e.strCollectionId == "partner-ea-access",
		);
		const n =
			bHasCollection &&
			LibraryUIStore.selectedGameListView == 1 &&
			(!LibraryUIStore.bIsGameListGroupedByCollection ||
				LibraryUIStore.bIsGameListSortedByRecent);
		let content = null;
		if (!bHasPolitelyDeclined) {
			if (bHasCollection) {
				if (!bCollectionExists) {
					content = (
						<>
							<div className={y.Description}>
								{(0, Localize)("#WhatsNew_EAAccessCollection_Description_2")}
							</div>
							<div className={y.ButtonRow}>
								<div
									className={ClassMap(y.Button, y.PrimaryButton)}
									onClick={AddEAShowcase}
								>
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
				content = (
					<>
						<div className={y.Description}>
							{(0, Localize)("#WhatsNew_EAAccessCollection_Description_1")}
						</div>
						<div className={y.ButtonRow}>
							<div className={ClassMap(y.Button, y.PrimaryButton)} onClick={kx}>
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
		if (!content) {
			if (n) {
				const Accept = () => {
					LibraryUIStore.SelectGameListView(1);
					LibraryUIStore.SetGameListGroupedByCollection(true);
					LibraryUIStore.SetGameListSortedByRecent(false);
				};
				content = (
					<>
						<div className={y.Description}>
							{(0, Localize)("#FilterEdit_CollectionsHiddenPrompt")}
						</div>
						<div className={y.ButtonRow}>
							<div
								className={ClassMap(y.Button, y.PrimaryButton)}
								onClick={Accept}
							>
								{(0, Localize)("#FilterEdit_AcceptGameListViewChange")}
							</div>
							<div className={y.Button} onClick={this.Close}>
								{(0, Localize)("#FilterEdit_RejectGameListViewChange")}
							</div>
						</div>
					</>
				);
			} else {
				const description = (0, Localize)(
					bHasPolitelyDeclined
						? "#WhatsNew_EAAccessCollection_Description_Declined"
						: "#WhatsNew_EAAccessCollection_Description_3",
				);
				content = (
					<>
						<div className={y.Description}>{description}</div>
						<div className={y.Button} onClick={this.Close}>
							{(0, Localize)("#Button_Close")}
						</div>
					</>
				);
			}
		}
		return (
			<X_ onEscKeypress={this.Close}>
				<div className={y.DialogContainer}>
					<Y9> {(0, Localize)("#WhatsNew_EAAccessCollection_Title")} </Y9>
					<NB>
						<A3 className={y.DialogBody}>{content}</A3>
					</NB>
				</div>
			</X_>
		);
	}
};

export const Cf = new (class {
	async Init(storage) {
		if ((await storage.GetString(k_strEADialogStorageKey)) === "true") {
			return;
		}
		if (BIsReducedUILauncher(Config.LAUNCHER_TYPE)) {
			return;
		}

		const eUIMode = await SteamClient.UI.GetUIMode();
		// TODO: what is 1, leftover ?
		if (eUIMode != 1 && eUIMode != EUIMode.GamePad) {
			if (!BIsChinaLauncher(Config.LAUNCHER_TYPE)) {
				autorun(jv, (t) => t && this.ShowPrompt(storage), {
					fireImmediately: true,
				});
			}
		}
	}

	ShowPrompt(storage) {
		showModal(<EAAccessPrompt />, window, {
			strTitle: (0, Localize)("#WhatsNew_EAAccessCollection_Title"),
		});
		storage.StoreString(k_strEADialogStorageKey, "true");
	}
})();
