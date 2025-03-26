var n;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require("./35488.js");
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require("./10606.js");
import { Localize } from "../../actual_src/utils/localization.js";
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require("./96593.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require("./34428.js");
var g = require("./13869.js");
var h = require(/*webcrack:missing*/ "./90765.js");
var C = require("./32609.js");
var _ = C;
(function (e) {
	e[(e.ChooseFolder = 0)] = "ChooseFolder";
	e[(e.Working = 1)] = "Working";
	e[(e.Finished = 2)] = "Finished";
	e[(e.Failed = 3)] = "Failed";
})((n ||= {}));
export function vq(e, t) {
	(0, g.mK)(
		a.createElement(b, {
			apps: e,
		}),
		t,
		{
			strTitle: Localize("#BackupApps_Title"),
			bNeverPopOut: true,
		},
	);
}
let b = class extends a.Component {
	constructor(e) {
		super(e);
		(0, l.Gn)(this);
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
			if (e.eError == 20);
			else if (e.eError == 0) {
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
		const t = e ? e.display_name : "App " + this.state.progress.appid;
		const r = Number(this.state.progress.strBytesProcessed);
		const i = Number(this.state.progress.strBytesToProcess);
		const l = i > 0 ? (r * 100) / i : 0;
		return a.createElement(
			c.eV,
			{
				onOK: this.onOk,
				onCancel: this.onCancel,
				bDisableBackgroundDismiss: true,
			},
			a.createElement(
				"div",
				{
					className: _.BackupAppsDialog,
				},
				a.createElement(
					s.Y9,
					{
						className: _.ModalHeader,
					},
					Localize("#BackupApps_Title"),
				),
				a.createElement(
					s.a3,
					{
						className: _.DialogBodyText,
					},
					Localize("#BackupApps_Description"),
				),
				a.createElement(
					s.nB,
					null,
					a.createElement(
						"div",
						null,
						a.createElement(
							"div",
							{
								className: _.DialogBodyText,
							},
							Localize("#BackupApps_ChooseBackupDirectory"),
							" ",
						),
						this.state.eStep == n.ChooseFolder &&
							a.createElement(
								"div",
								{
									className: _.BackupAppsContent,
								},
								a.createElement(
									"div",
									{
										className: _.BackupAppInput,
									},
									a.createElement(s.pd, {
										value: this.state.strFolder,
										readOnly: true,
										disabled: true,
									}),
								),
								a.createElement(
									s.$n,
									{
										className: _.BackupAppsBrowse,
										onClick: this.onChangeFolder,
									},
									Localize("#BackupApps_ChangeDirectory"),
								),
							),
					),
					this.state.eStep == n.Working &&
						a.createElement(
							a.Fragment,
							null,
							a.createElement(
								"div",
								{
									className: _.BackupAppInput,
								},
								a.createElement(s.pd, {
									value: this.state.strFolder,
									readOnly: true,
									disabled: true,
								}),
							),
							a.createElement(
								"div",
								{
									className: _.DialogBodyText,
								},
								Localize("#BackupApps_BackingUpFiles", t),
								a.createElement(
									"div",
									{
										className: _.BackupAppsIndicator,
									},
									a.createElement("div", {
										className: _.BackupAppsBar,
										style: {
											width: l + "%",
										},
									}),
								),
							),
						),
					this.state.eStep == n.Finished &&
						a.createElement(
							a.Fragment,
							null,
							a.createElement(
								"div",
								{
									className: _.BackupAppInput,
								},
								a.createElement(s.pd, {
									value: this.state.strFolder,
									readOnly: true,
									disabled: true,
								}),
							),
							a.createElement(
								"div",
								{
									className: (0, h.A)(
										_.DialogBodyText,
										_.Success,
										_.ResultMessage,
									),
								},
								a.createElement(o.Checkmark, {
									className: _.Checkmark,
								}),
								Localize(
									"#BackupApps_Finished",
									(0, p.dm)(Number(this.state.progress.strTotalBytesWritten)),
								),
							),
						),
					this.state.eStep == n.Failed &&
						a.createElement(
							a.Fragment,
							null,
							a.createElement(
								"div",
								{
									className: _.BackupAppInput,
								},
								a.createElement(s.pd, {
									value: this.state.strFolder,
									readOnly: true,
									disabled: true,
								}),
							),
							a.createElement(
								"div",
								{
									className: (0, h.A)(
										_.DialogBodyText,
										_.Error,
										_.ResultMessage,
									),
								},
								a.createElement(o.ExclamationPoint, {
									className: _.Exclamation,
								}),
								Localize(
									"#BackupApps_Failed",
									Localize(
										"#Steam_AppUpdateError_" + this.state.progress.eError,
									),
								),
							),
						),
				),
				a.createElement(
					s.wi,
					null,
					this.state.eStep == n.ChooseFolder &&
						a.createElement(s.CB, {
							bOKDisabled: this.state.strFolder == "",
							onOK: this.onOk,
							strOKText: Localize("#BackupApps_Start"),
							onCancel: this.onCancel,
						}),
					this.state.eStep == n.Working &&
						a.createElement(s.CB, {
							bOKDisabled: true,
							strOKText: Localize("#BackupApps_Start"),
							onCancel: this.onCancel,
						}),
					this.state.eStep == n.Finished &&
						a.createElement(s.CB, {
							onOK: this.onOpenFolder,
							strOKText: Localize("#BackupApps_OpenFolder"),
							onCancel: this.onCancel,
							strCancelText: Localize("#Generic_Close"),
						}),
					this.state.eStep == n.Failed &&
						a.createElement(s.CB, {
							bOKDisabled: true,
							strOKText: Localize("#BackupApps_Start"),
							onCancel: this.onCancel,
							strCancelText: Localize("#Generic_Close"),
						}),
				),
			),
		);
	}
};
export function ht(e) {
	(0, g.mK)(a.createElement(S, null), e, {
		strTitle: Localize("#BackupApps_Title"),
		bNeverPopOut: true,
	});
}
(0, i.Cg)([l.XI.bound], b.prototype, "OnAppBackupStatus", null);
(0, i.Cg)([u.oI], b.prototype, "onChangeFolder", null);
(0, i.Cg)([u.oI], b.prototype, "onOk", null);
(0, i.Cg)([u.oI], b.prototype, "onCancel", null);
(0, i.Cg)([u.oI], b.prototype, "onOpenFolder", null);
(0, i.Cg)([u.oI], b.prototype, "BackupApp", null);
b = (0, i.Cg)([A.PA], b);
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
		return a.createElement(
			c.eV,
			{
				onOK: this.onOk,
				onCancel: this.onCancel,
				bDisableBackgroundDismiss: true,
			},
			a.createElement(
				"div",
				{
					className: _.BackupAppsDialog,
				},
				a.createElement(
					s.Y9,
					{
						className: _.ModalHeader,
					},
					Localize("#RestoreBackup_Title"),
				),
				a.createElement(
					s.a3,
					{
						className: _.DialogBodyText,
					},
					Localize("#RestoreBackup_Info"),
				),
				a.createElement(
					s.nB,
					null,
					a.createElement(
						"div",
						{
							className: _.BackupAppsContent,
						},
						a.createElement(
							"div",
							{
								className: _.BackupAppInput,
							},
							a.createElement(s.pd, {
								value: this.state.strFolder,
								readOnly: true,
								disabled: true,
							}),
						),
						a.createElement(
							s.$n,
							{
								className: _.BackupAppsBrowse,
								onClick: this.onChangeFolder,
							},
							Localize("#BackupApps_ChangeDirectory"),
						),
					),
					this.state.strFolder != "" &&
						a.createElement(
							"div",
							null,
							a.createElement(
								s.a3,
								{
									className: (0, h.A)(_.DialogBodyText, _.ExtraPadding),
								},
								Localize("#RestoreBackup_GameFound"),
								" ",
								this.state.strName,
							),
						),
				),
				a.createElement(
					s.wi,
					null,
					a.createElement(s.CB, {
						bOKDisabled: this.state.strFolder == "",
						onOK: this.onOk,
						strOKText: Localize("#RestoreBackup_Start"),
						onCancel: this.onCancel,
					}),
				),
			),
		);
	}
};
(0, i.Cg)([u.oI], S.prototype, "onChangeFolder", null);
(0, i.Cg)([u.oI], S.prototype, "onOk", null);
(0, i.Cg)([u.oI], S.prototype, "onCancel", null);
S = (0, i.Cg)([A.PA], S);
