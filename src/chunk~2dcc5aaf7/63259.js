import { Localize } from "../../actual_src/utils/localization.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./64608.js";
import o from "./35488.js";
import l, { Gn } from "./89193.js";
import c from "./10606.js";
import u from "./52451.js";
import d from "./96593.js";
import A from "./41230.js";
import { dm } from "./34428.js";
import { mK } from "./13869.js";
import { A as A_1 } from "./90765.js";
import C from "./32609.js";
let n;
const _ = C;
((e) => {
	e[(e.ChooseFolder = 0)] = "ChooseFolder";
	e[(e.Working = 1)] = "Working";
	e[(e.Finished = 2)] = "Finished";
	e[(e.Failed = 3)] = "Failed";
})((n ||= {}));
export function vq(e, t) {
	mK(<B apps={e} />, t, {
		strTitle: Localize("#BackupApps_Title"),
		bNeverPopOut: true,
	});
}
let B = class extends a.Component {
	constructor(e) {
		super(e);
		Gn(this);
		this.state = {
			iCurrentApp: 0,
			strFolder: "",
			eStep: n.ChooseFolder,
			progress: {
				appid: this.props.apps[0],
				eError: 20,
				strBytesToProcess: "",
				strBytesProcessed: "",
				strTotalBytesWritten: "",
			},
		};
		SteamClient.Apps.RegisterForAppBackupStatus(this.OnAppBackupStatus);
	}
	async OnAppBackupStatus(e) {
		if (this.props.apps.includes(e.appid)) {
			this.setState({
				progress: e,
			});
			if (e.eError == 20) {
			} else if (e.eError == 0) {
				const e = this.state.iCurrentApp + 1;
				this.setState({
					iCurrentApp: e,
				});
				if (e == this.props.apps.length) {
					this.setState({
						eStep: n.Finished,
					});
				} else {
					this.BackupApp(e);
				}
			} else {
				this.setState({
					eStep: n.Finished,
				});
			}
		}
	}
	onChangeFolder() {
		SteamClient.System.OpenFileDialog({
			strTitle: Localize("#BackupApps_BackupDirectory"),
			strInitialFile: this.state.strFolder,
			bChooseDirectory: true,
		}).then((e) => {
			if (e) {
				this.setState({
					strFolder: e,
				});
			}
		});
	}
	async onOk() {
		if (this.state.eStep == n.ChooseFolder) {
			this.BackupApp(this.state.iCurrentApp);
		} else if (this.state.eStep != n.Working) {
			this.props.closeModal();
		}
	}
	onCancel() {
		if (this.state.eStep == n.Working) {
			SteamClient.Apps.CancelBackup();
			this.setState({
				eStep: n.Failed,
			});
		}
		this.props.closeModal();
	}
	onOpenFolder() {
		if (this.state.eStep == n.Finished) {
			SteamClient.System.OpenLocalDirectoryInSystemExplorer(
				this.state.strFolder,
			);
		}
	}
	async BackupApp(e) {
		const t = this.props.apps[e];
		let r = await SteamClient.Apps.BackupFilesForApp(t, this.state.strFolder);
		if (r == 0) {
			this.setState({
				eStep: n.Working,
			});
		} else {
			this.setState({
				eStep: n.Failed,
				progress: {
					appid: t,
					eError: r,
					strBytesToProcess: "",
					strBytesProcessed: "",
					strTotalBytesWritten: "",
				},
			});
		}
	}
	render() {
		const e = d.tw.GetAppOverviewByAppID(this.state.progress.appid);
		const t = e ? e.display_name : `App ${this.state.progress.appid}`;
		const r = Number(this.state.progress.strBytesProcessed);
		const i = Number(this.state.progress.strBytesToProcess);
		const l = i > 0 ? (r * 100) / i : 0;
		return (
			<c.eV onOK={this.onOk} onCancel={this.onCancel} bDisableBackgroundDismiss>
				<div className={_.BackupAppsDialog}>
					<s.Y9 className={_.ModalHeader}>{Localize("#BackupApps_Title")}</s.Y9>
					<s.a3 className={_.DialogBodyText}>
						{Localize("#BackupApps_Description")}
					</s.a3>
					<s.nB>
						<div>
							<div className={_.DialogBodyText}>
								{Localize("#BackupApps_ChooseBackupDirectory")}{" "}
							</div>
							{this.state.eStep == n.ChooseFolder && (
								<div className={_.BackupAppsContent}>
									<div className={_.BackupAppInput}>
										<s.pd value={this.state.strFolder} readOnly disabled />
									</div>
									<s.$n
										className={_.BackupAppsBrowse}
										onClick={this.onChangeFolder}
									>
										{Localize("#BackupApps_ChangeDirectory")}
									</s.$n>
								</div>
							)}
						</div>
						{this.state.eStep == n.Working && (
							<>
								<div className={_.BackupAppInput}>
									<s.pd value={this.state.strFolder} readOnly disabled />
								</div>
								<div className={_.DialogBodyText}>
									{Localize("#BackupApps_BackingUpFiles", t)}
									<div className={_.BackupAppsIndicator}>
										<div
											className={_.BackupAppsBar}
											style={{
												width: `${l}%`,
											}}
										/>
									</div>
								</div>
							</>
						)}
						{this.state.eStep == n.Finished && (
							<>
								<div className={_.BackupAppInput}>
									<s.pd value={this.state.strFolder} readOnly disabled />
								</div>
								<div
									className={A_1(_.DialogBodyText, _.Success, _.ResultMessage)}
								>
									<o.Checkmark className={_.Checkmark} />
									{Localize(
										"#BackupApps_Finished",
										dm(Number(this.state.progress.strTotalBytesWritten)),
									)}
								</div>
							</>
						)}
						{this.state.eStep == n.Failed && (
							<>
								<div className={_.BackupAppInput}>
									<s.pd value={this.state.strFolder} readOnly disabled />
								</div>
								<div
									className={A_1(_.DialogBodyText, _.Error, _.ResultMessage)}
								>
									<o.ExclamationPoint className={_.Exclamation} />
									{Localize(
										"#BackupApps_Failed",
										Localize(
											`#Steam_AppUpdateError_${this.state.progress.eError}`,
										),
									)}
								</div>
							</>
						)}
					</s.nB>
					<s.wi>
						{this.state.eStep == n.ChooseFolder && (
							<s.CB
								bOKDisabled={this.state.strFolder == ""}
								onOK={this.onOk}
								strOKText={Localize("#BackupApps_Start")}
								onCancel={this.onCancel}
							/>
						)}
						{this.state.eStep == n.Working && (
							<s.CB
								bOKDisabled
								strOKText={Localize("#BackupApps_Start")}
								onCancel={this.onCancel}
							/>
						)}
						{this.state.eStep == n.Finished && (
							<s.CB
								onOK={this.onOpenFolder}
								strOKText={Localize("#BackupApps_OpenFolder")}
								onCancel={this.onCancel}
								strCancelText={Localize("#Generic_Close")}
							/>
						)}
						{this.state.eStep == n.Failed && (
							<s.CB
								bOKDisabled
								strOKText={Localize("#BackupApps_Start")}
								onCancel={this.onCancel}
								strCancelText={Localize("#Generic_Close")}
							/>
						)}
					</s.wi>
				</div>
			</c.eV>
		);
	}
};
export function ht(e) {
	mK(<S />, e, {
		strTitle: Localize("#BackupApps_Title"),
		bNeverPopOut: true,
	});
}
Cg([l.XI.bound], B.prototype, "OnAppBackupStatus", null);
Cg([u.oI], B.prototype, "onChangeFolder", null);
Cg([u.oI], B.prototype, "onOk", null);
Cg([u.oI], B.prototype, "onCancel", null);
Cg([u.oI], B.prototype, "onOpenFolder", null);
Cg([u.oI], B.prototype, "BackupApp", null);
B = Cg([A.PA], B);
let S = class extends a.Component {
	constructor(e) {
		super(e);
		this.state = {
			strFolder: "",
			strName: "",
		};
	}
	onChangeFolder() {
		SteamClient.System.OpenFileDialog({
			strTitle: Localize("#BackupApps_BackupDirectory"),
			strInitialFile: this.state.strFolder,
			bChooseDirectory: true,
		}).then((e) => {
			SteamClient.Apps.GetBackupsInFolder(e).then((t) => {
				if (t.length > 0) {
					this.setState({
						strFolder: e,
						strName: t,
					});
				}
			});
		});
	}
	onOk() {
		SteamClient.Installs.OpenInstallBackup(this.state.strFolder);
		this.props.closeModal();
	}
	onCancel() {
		this.props.closeModal();
	}
	render() {
		return (
			<c.eV onOK={this.onOk} onCancel={this.onCancel} bDisableBackgroundDismiss>
				<div className={_.BackupAppsDialog}>
					<s.Y9 className={_.ModalHeader}>
						{Localize("#RestoreBackup_Title")}
					</s.Y9>
					<s.a3 className={_.DialogBodyText}>
						{Localize("#RestoreBackup_Info")}
					</s.a3>
					<s.nB>
						<div className={_.BackupAppsContent}>
							<div className={_.BackupAppInput}>
								<s.pd value={this.state.strFolder} readOnly disabled />
							</div>
							<s.$n
								className={_.BackupAppsBrowse}
								onClick={this.onChangeFolder}
							>
								{Localize("#BackupApps_ChangeDirectory")}
							</s.$n>
						</div>
						{this.state.strFolder != "" && (
							<div>
								<s.a3 className={A_1(_.DialogBodyText, _.ExtraPadding)}>
									{Localize("#RestoreBackup_GameFound")} {this.state.strName}
								</s.a3>
							</div>
						)}
					</s.nB>
					<s.wi>
						<s.CB
							bOKDisabled={this.state.strFolder == ""}
							onOK={this.onOk}
							strOKText={Localize("#RestoreBackup_Start")}
							onCancel={this.onCancel}
						/>
					</s.wi>
				</div>
			</c.eV>
		);
	}
};
Cg([u.oI], S.prototype, "onChangeFolder", null);
Cg([u.oI], S.prototype, "onOk", null);
Cg([u.oI], S.prototype, "onCancel", null);
S = Cg([A.PA], S);
