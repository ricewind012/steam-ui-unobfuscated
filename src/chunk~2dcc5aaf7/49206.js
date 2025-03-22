var n;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require("./10606.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./73317.js");
var d = require("./96593.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require("./34428.js");
var g = require("./88769.js");
var h = require("./13869.js");
var C = require("./25074.js");
var _ = C;
export function P(e, t) {
	(0, h.mK)(
		a.createElement(y, {
			apps: e,
			toFolder: -1,
		}),
		t,
		{
			strTitle: (0, c.we)("#ContentManagement_MoveApps_Title"),
			bNeverPopOut: true,
		},
	);
}
(function (e) {
	e[(e.ChooseFolder = 0)] = "ChooseFolder";
	e[(e.MovingApps = 1)] = "MovingApps";
	e[(e.MoveFinished = 2)] = "MoveFinished";
	e[(e.MoveFailed = 3)] = "MoveFailed";
})((n ||= {}));
function b(e) {
	const { folder: t } = e;
	const r = (0, g.Cj)(t);
	const n = (0, c.we)(
		"#ContentManagement_MoveApps_Drive",
		r,
		(0, p.dm)(t.nFreeSpace, 1),
	);
	return a.createElement(a.Fragment, null, n, " ");
}
let y = class extends a.Component {
	m_folders;
	m_BytesToMove = 0;
	m_AppsToMove = [];
	m_FailedApps = [];
	constructor(e) {
		super(e);
		(0, o.Gn)(this);
		this.m_AppsToMove = this.props.apps;
		this.m_BytesToMove = u.fN.MountedInstallFolders.reduce(function (t, r) {
			return r.vecApps.reduce(function (t, r) {
				if (e.apps.includes(r.nAppID)) {
					return t + r.nUsedSize;
				} else {
					return t;
				}
			}, t);
		}, 0);
		this.m_folders = u.fN.MountedInstallFolders.filter(
			(t) =>
				!t.bIsMounted ||
				!t.vecApps.reduce(function (t, r) {
					return t || e.apps.includes(r.nAppID);
				}, false),
		);
		let t = this.props.toFolder;
		let r = n.ChooseFolder;
		if (this.props.toFolder != -1) {
			t = this.props.toFolder;
		} else if (this.m_folders.length > 0) {
			t = this.m_folders[0].nFolderIndex;
		} else {
			r = n.MoveFailed;
		}
		this.state = {
			toFolder: t,
			eStep: r,
			progress: {
				appid: this.props.apps[0],
				eError: 0,
				flProgress: 0,
				strBytesMoved: "",
				strTotalBytesToMove: "",
				nFilesMoved: 0,
			},
		};
		SteamClient.InstallFolder.RegisterForMoveContentProgress(
			this.OnMoveContentProgress,
		);
	}
	async OnMoveContentProgress(e) {
		if (
			this.m_AppsToMove.includes(e.appid) &&
			this.state.eStep == n.MovingApps
		) {
			if (e.eError == 0) {
				this.m_AppsToMove = this.m_AppsToMove.filter((t) => t !== e.appid);
				this.MoveNextApp();
			} else if (e.eError == 20) {
				this.setState({
					progress: e,
				});
			} else {
				this.m_FailedApps.push({
					appid: e.appid,
					eError: e.eError,
				});
				this.m_AppsToMove = this.m_AppsToMove.filter((t) => t !== e.appid);
				this.MoveNextApp();
			}
		}
	}
	MoveNextApp() {
		if (this.m_AppsToMove.length == 0) {
			if (this.m_FailedApps.length == 0) {
				this.setState({
					eStep: n.MoveFinished,
				});
			} else {
				this.setState({
					eStep: n.MoveFailed,
				});
			}
			return;
		}
		const e = this.m_AppsToMove[0];
		SteamClient.InstallFolder.MoveInstallFolderForApp(e, this.state.toFolder)
			.then((e) => {
				this.setState({
					eStep: n.MovingApps,
				});
			})
			.catch((t) => {
				this.m_FailedApps.push({
					appid: e,
					eError: t,
				});
				this.m_AppsToMove = this.m_AppsToMove.filter((t) => t !== e);
				this.MoveNextApp();
			});
	}
	onOk() {
		if (this.state.eStep == n.ChooseFolder) {
			this.MoveNextApp();
		} else if (this.state.eStep != n.MovingApps) {
			this.props.closeModal();
		}
	}
	onCancel() {
		if (this.state.eStep == n.MovingApps) {
			SteamClient.InstallFolder.CancelMove();
		}
		this.props.closeModal();
	}
	onSelectFolder(e) {
		if (this.state.eStep == n.ChooseFolder) {
			this.setState({
				toFolder: e,
			});
		}
	}
	LocalizeError(e) {
		switch (e) {
			case 22:
				return (0, c.we)("#ContentManagement_MoveApps_CantMove");
			case 17:
				return (0, c.we)("#ContentManagement_MoveApps_SharedContent");
			case 15:
				return (0, c.we)("#ContentManagement_MoveApps_InvalidPath");
			default:
				return (0, c.we)("#Steam_AppUpdateError_" + e);
		}
	}
	render() {
		let e = d.tw.GetAppOverviewByAppID(this.state.progress.appid);
		let t = e ? e.display_name : "App " + this.state.progress.appid;
		const r = this.m_folders.map((e) => ({
			label: a.createElement(b, {
				folder: e,
			}),
			data: e.nFolderIndex,
		}));
		const i = Math.floor(this.state.progress.flProgress);
		return a.createElement(
			l.eV,
			{
				onOK: this.onOk,
				onCancel: this.onCancel,
				bDisableBackgroundDismiss: true,
			},
			a.createElement(
				"div",
				{
					className: _.MoveAppsDialog,
				},
				a.createElement(
					s.Y9,
					{
						className: _.ModalHeader,
					},
					(0, c.we)("#ContentManagement_MoveApps_Title"),
				),
				a.createElement(
					s.nB,
					null,
					this.state.eStep == n.ChooseFolder &&
						a.createElement(
							"div",
							null,
							this.props.apps.length == 1 &&
								a.createElement(
									"div",
									{
										className: _.DialogBodyText,
									},
									(0, c.we)(
										"#ContentManagement_MoveApps_TextSingle",
										t,
										(0, p.dm)(this.m_BytesToMove),
									),
								),
							this.props.apps.length > 1 &&
								a.createElement(
									"div",
									{
										className: _.DialogBodyText,
									},
									(0, c.we)(
										"#ContentManagement_MoveApps_TextMultiple",
										this.props.apps.length,
										(0, p.dm)(this.m_BytesToMove),
									),
								),
							a.createElement(s.m, {
								strClassName: _.TopGapSmall,
								rgOptions: r,
								selectedOption: this.state.toFolder,
								onChange: (e) => this.onSelectFolder(e.data),
							}),
						),
					this.state.eStep == n.MovingApps &&
						a.createElement(
							"div",
							null,
							(0, c.we)("#ContentManagement_MoveApps_Working", t),
							a.createElement(
								"div",
								{
									className: _.MoveAppsIndicator,
								},
								a.createElement("div", {
									className: _.MoveAppsBar,
									style: {
										width: i + "%",
									},
								}),
							),
						),
					this.state.eStep == n.MoveFinished &&
						a.createElement(
							"div",
							null,
							(0, c.we)("#ContentManagement_MoveApps_Done"),
						),
					this.state.eStep == n.MoveFailed &&
						a.createElement(
							"div",
							null,
							(0, c.we)("#ContentManagement_MoveApps_Failed"),
							this.m_FailedApps.map((e, t) => {
								let r = d.tw.GetAppOverviewByAppID(e.appid);
								return a.createElement(
									"div",
									{
										key: t,
									},
									"- ",
									r ? r.display_name : "App " + e.appid,
									" : ",
									this.LocalizeError(e.eError),
								);
							}),
						),
				),
				a.createElement(
					s.wi,
					null,
					this.state.eStep == n.ChooseFolder &&
						a.createElement(s.CB, {
							onOK: this.onOk,
							strOKText: (0, c.we)("#ContentManagement_MoveApps_Button"),
							onCancel: this.onCancel,
						}),
					this.state.eStep == n.MovingApps &&
						a.createElement(s.CB, {
							bOKDisabled: true,
							strOKText: (0, c.we)("#ContentManagement_MoveApps_Button"),
							onCancel: this.onCancel,
						}),
					this.state.eStep == n.MoveFinished &&
						a.createElement(s.CB, {
							bOKDisabled: true,
							strOKText: (0, c.we)("#ContentManagement_MoveApps_Button"),
							onCancel: this.onCancel,
							strCancelText: (0, c.we)("#Generic_Close"),
						}),
					this.state.eStep == n.MoveFailed &&
						a.createElement(s.CB, {
							bOKDisabled: true,
							strOKText: (0, c.we)("#ContentManagement_MoveApps_Button"),
							onCancel: this.onCancel,
							strCancelText: (0, c.we)("#Generic_Close"),
						}),
				),
			),
		);
	}
};
(0, i.Cg)([o.XI.bound], y.prototype, "OnMoveContentProgress", null);
(0, i.Cg)([m.oI], y.prototype, "onOk", null);
(0, i.Cg)([m.oI], y.prototype, "onCancel", null);
(0, i.Cg)([m.oI], y.prototype, "onSelectFolder", null);
y = (0, i.Cg)([A.PA], y);
