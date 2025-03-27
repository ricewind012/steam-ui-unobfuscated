import { Localize } from "../../actual_src/utils/localization.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./64608.js";
import o, { Gn } from "./89193.js";
import l from "./10606.js";
import m from "./52451.js";
import u from "./73317.js";
import d from "./96593.js";
import A from "./41230.js";
import { dm } from "./34428.js";
import { Cj } from "./88769.js";
import { mK } from "./13869.js";
import C from "./25074.js";
let n;
const _ = C;
export function P(e, t) {
	mK(<Y apps={e} toFolder={-1} />, t, {
		strTitle: Localize("#ContentManagement_MoveApps_Title"),
		bNeverPopOut: true,
	});
}
((e) => {
	e[(e.ChooseFolder = 0)] = "ChooseFolder";
	e[(e.MovingApps = 1)] = "MovingApps";
	e[(e.MoveFinished = 2)] = "MoveFinished";
	e[(e.MoveFailed = 3)] = "MoveFailed";
})((n ||= {}));
function B(e) {
	const { folder } = e;
	const r = Cj(folder);
	const n = Localize(
		"#ContentManagement_MoveApps_Drive",
		r,
		dm(folder.nFreeSpace, 1),
	);
	return <>{n} </>;
}
let Y = class extends a.Component {
	m_folders;
	m_BytesToMove = 0;
	m_AppsToMove = [];
	m_FailedApps = [];
	constructor(e) {
		super(e);
		Gn(this);
		this.m_AppsToMove = this.props.apps;
		this.m_BytesToMove = u.fN.MountedInstallFolders.reduce(
			(t, r) =>
				r.vecApps.reduce((t, r) => {
					if (e.apps.includes(r.nAppID)) {
						return t + r.nUsedSize;
					} else {
						return t;
					}
				}, t),
			0,
		);
		this.m_folders = u.fN.MountedInstallFolders.filter(
			(t) =>
				!t.bIsMounted ||
				!t.vecApps.reduce((t, r) => t || e.apps.includes(r.nAppID), false),
		);
		let t = this.props.toFolder;
		let n_ChooseFolder = n.ChooseFolder;
		if (this.props.toFolder != -1) {
			t = this.props.toFolder;
		} else if (this.m_folders.length > 0) {
			t = this.m_folders[0].nFolderIndex;
		} else {
			n_ChooseFolder = n.MoveFailed;
		}
		this.state = {
			toFolder: t,
			eStep: n_ChooseFolder,
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
			case 22: {
				return Localize("#ContentManagement_MoveApps_CantMove");
			}
			case 17: {
				return Localize("#ContentManagement_MoveApps_SharedContent");
			}
			case 15: {
				return Localize("#ContentManagement_MoveApps_InvalidPath");
			}
			default: {
				return Localize(`#Steam_AppUpdateError_${e}`);
			}
		}
	}
	render() {
		let e = d.tw.GetAppOverviewByAppID(this.state.progress.appid);
		let t = e ? e.display_name : `App ${this.state.progress.appid}`;
		const r = this.m_folders.map((e) => ({
			label: <B folder={e} />,

			data: e.nFolderIndex,
		}));
		const i = Math.floor(this.state.progress.flProgress);
		return (
			<l.eV onOK={this.onOk} onCancel={this.onCancel} bDisableBackgroundDismiss>
				<div className={_.MoveAppsDialog}>
					<s.Y9 className={_.ModalHeader}>
						{Localize("#ContentManagement_MoveApps_Title")}
					</s.Y9>
					<s.nB>
						{this.state.eStep == n.ChooseFolder && (
							<div>
								{this.props.apps.length == 1 && (
									<div className={_.DialogBodyText}>
										{Localize(
											"#ContentManagement_MoveApps_TextSingle",
											t,
											dm(this.m_BytesToMove),
										)}
									</div>
								)}
								{this.props.apps.length > 1 && (
									<div className={_.DialogBodyText}>
										{Localize(
											"#ContentManagement_MoveApps_TextMultiple",
											this.props.apps.length,
											dm(this.m_BytesToMove),
										)}
									</div>
								)}
								<s.m
									strClassName={_.TopGapSmall}
									rgOptions={r}
									selectedOption={this.state.toFolder}
									onChange={(e) => this.onSelectFolder(e.data)}
								/>
							</div>
						)}
						{this.state.eStep == n.MovingApps && (
							<div>
								{Localize("#ContentManagement_MoveApps_Working", t)}
								<div className={_.MoveAppsIndicator}>
									<div
										className={_.MoveAppsBar}
										style={{
											width: `${i}%`,
										}}
									/>
								</div>
							</div>
						)}
						{this.state.eStep == n.MoveFinished && (
							<div>{Localize("#ContentManagement_MoveApps_Done")}</div>
						)}
						{this.state.eStep == n.MoveFailed && (
							<div>
								{Localize("#ContentManagement_MoveApps_Failed")}
								{this.m_FailedApps.map((e, t) => {
									let r = d.tw.GetAppOverviewByAppID(e.appid);
									return (
										<div key={t}>
											{"- "}
											{r ? r.display_name : `App ${e.appid}`}
											{" : "}
											{this.LocalizeError(e.eError)}
										</div>
									);
								})}
							</div>
						)}
					</s.nB>
					<s.wi>
						{this.state.eStep == n.ChooseFolder && (
							<s.CB
								onOK={this.onOk}
								strOKText={Localize("#ContentManagement_MoveApps_Button")}
								onCancel={this.onCancel}
							/>
						)}
						{this.state.eStep == n.MovingApps && (
							<s.CB
								bOKDisabled
								strOKText={Localize("#ContentManagement_MoveApps_Button")}
								onCancel={this.onCancel}
							/>
						)}
						{this.state.eStep == n.MoveFinished && (
							<s.CB
								bOKDisabled
								strOKText={Localize("#ContentManagement_MoveApps_Button")}
								onCancel={this.onCancel}
								strCancelText={Localize("#Generic_Close")}
							/>
						)}
						{this.state.eStep == n.MoveFailed && (
							<s.CB
								bOKDisabled
								strOKText={Localize("#ContentManagement_MoveApps_Button")}
								onCancel={this.onCancel}
								strCancelText={Localize("#Generic_Close")}
							/>
						)}
					</s.wi>
				</div>
			</l.eV>
		);
	}
};
Cg([o.XI.bound], Y.prototype, "OnMoveContentProgress", null);
Cg([m.oI], Y.prototype, "onOk", null);
Cg([m.oI], Y.prototype, "onCancel", null);
Cg([m.oI], Y.prototype, "onSelectFolder", null);
Y = Cg([A.PA], Y);
