import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./3142.js";
import i, { useState } from "./63696.js";
import a, { Nr } from "./42318.js";
import s from "./10606.js";
import o from "./64608.js";
import l from "./4530.js";
import m from "./81994.js";
import u, { $2 } from "./96680.js";
import d from "./45967.js";
import _g from "./95572.js";
import h from "./74738.js";
import _ from "./43397.js";
import { br } from "./18869.js";
import b from "./87935.js";
import { VI } from "./34792.js";
import S from "./69164.js";
import w, { rP, hf, td, Hn, XW } from "./72476.js";
import v from "./96593.js";
import I from "./76356.js";
import E from "./91486.js";
import { Qt } from "./18057.js";
import T, { T as T_1 } from "./78057.js";
import R from "./73317.js";
import { q3 } from "./90095.js";
import { A as A_1 } from "./90765.js";
import { dm } from "./34428.js";
import F from "./35488.js";
import G from "./88769.js";
import O from "./7552.js";
import P from "./98995.js";
import L from "./58879.js";
import K from "./44846.js";
import X from "./78110.js";
import J from "./26853.js";
import $ from "./61398.js";
import ee, { vO, MD } from "./97893.js";
import te from "./83184.js";
import re from "./47654.js";
import ce from "./76414.js";
import me from "./85182.js";
import ue from "./91209.js";
import { W6 } from "./49519.js";
import { DT } from "./55571.js";
import Ce from "./6263.js";
import _e from "./19056.js";
const A = Nr(() => {
	const ERef = i.useRef(false);
	const TRef = i.useRef(0);
	const RRef = i.useRef(undefined);
	const [n, setN] = i.useState(false);
	const A = $2();
	const p = i.useCallback(
		(n) => {
			if (
				(A.IsMainDesktopWindow() || A.IsMainGamepadUIWindow()) &&
				n !== ERef.current
			) {
				ERef.current = n;
				if (RRef.current) {
					clearTimeout(RRef.current);
					RRef.current = undefined;
				}
				if (n) {
					setN(false);
				} else {
					TRef.current++;
					if (TRef.current >= 5) {
						d.fR.Info(
							"VRMode disabled",
							TRef.current,
							"times, restarting in",
							3000,
							"ms",
						);
						setN(true);
						RRef.current = setTimeout(() => {
							RRef.current = undefined;
							setN(false);
							setTimeout(() => {
								d.fR.Info("VRMode disabled timer complete, restarting now");
								SteamClient.Browser.RestartJSContext();
							}, 0);
						}, 3000);
					} else {
						d.fR.Info(
							"VRMode disabled",
							TRef.current,
							"times. Will restart on the",
							5,
							"time.",
						);
					}
				}
			}
		},
		[A],
	);
	i.useEffect(() => {
		const e = SteamClient?.OpenVR?.RegisterForVRModeChange(p);
		return e.unregister;
	}, [p]);
	if (n) {
		return (
			<s.hM
				strTitle={(0, Localize)("#Steam_Reloading_Title")}
				popupWidth={400}
				popupHeight={0}
				modal
				className={l.Popup}
			>
				<o.Y9>{(0, Localize)("#Steam_Reloading_Title")}</o.Y9>
				<o.nB>
					<m.j background="transparent" />
				</o.nB>
			</s.hM>
		);
	} else {
		return null;
	}
});
let p;
const C = h;
((e) => {
	e[(e.Hidden = 0)] = "Hidden";
	e[(e.Prompt = 1)] = "Prompt";
})((p ||= {}));
const B = Nr(() => {
	const [e, setE] = i.useState();
	const [r, setR] = i.useState(false);
	const [a, setA] = i.useState(p.Hidden);
	const m = br();
	const [u, d] = VI("skip_steamvr_install_dialog");
	const A = rP();
	i.useEffect(
		() =>
			SteamClient.OpenVR.RegisterForInstallDialog((e, r) => {
				if (!u && !A.IN_VR) {
					setE(e);
					setR(r);
					if (e?.length > 0) {
						setA(p.Prompt);
					}
				}
			}).unregister,
		[u, A],
	);
	if (a == p.Hidden || A.IN_VR) {
		return null;
	}
	return (
		<s.EN active>
			<s.x_>
				<o.UC className={C.Dialog}>
					<div className={C.MainContent}>
						<div className={C.Header}>
							{(0, Localize)("#SteamVRInstall_Header")}
						</div>
						<div className={C.Description}>
							{(0, Localize)("#SteamVRInstall_Description")}
						</div>
						{r && (
							<div className={C.OculusHelp}>
								{LocalizeInlineReactWithFallback(
									"#SteamVRInstall_OculusHelp",
									<_.uU href="https://support.steampowered.com/kb_article.php?ref=3180-UPHK-0900" />,
								)}
							</div>
						)}
					</div>
					<S.Z className={C.Footer}>
						<div className={C.CheckboxContainer}>
							<o.Yh
								label={(0, Localize)("#SteamVRInstall_DontShowAgain")}
								checked={u}
								onChange={d}
							/>
						</div>
						<o.$n
							disabled={a != p.Prompt}
							onClick={async () => {
								SteamClient.Installs.OpenInstallWizard(e);
								setA(p.Hidden);
							}}
						>
							{(0, Localize)("#SteamVRInstall_InstallSteamVR")}
						</o.$n>
						<o.$n
							onClick={() => {
								setA(p.Hidden);
							}}
						>
							{(0, Localize)("#Button_Close")}
						</o.$n>
						<o.$n
							onClick={() => {
								m.SteamWeb(b.B7.ResolveURL("SteamVRHMDHelp"));
								setA(p.Hidden);
							}}
						>
							{(0, Localize)("#SteamVRInstall_Help")}
						</o.$n>
					</S.Z>
				</o.UC>
			</s.x_>
		</s.EN>
	);
});
const z = L;
function X_1(e) {
	const { installRequest } = e;
	const [r, setR] = useState(0);
	const a = i.useCallback(() => {
		I.I.CancelRequestedInstall();
	}, []);
	const o = () => {
		if (r >= m.length - 1) {
			I.I.StartRequestedInstall();
		} else {
			setR(r + 1);
		}
	};
	const l = q3(() =>
		installRequest.rgApps.map((e) => v.tw.GetAppOverviewByAppID(e.nAppID)),
	).filter((e) => e && I.I.BShowDeckCompatForInstall(e.appid));
	const m = [
		l.length > 0 && <U onCancel={a} overviews={l} onContinue={o} />,
		I.I.BShowDiskSettingsForInstall(installRequest) && (
			<W installRequest={installRequest} onCancel={a} onContinue={o} />
		),
	].filter(Boolean);
	if (m.length === 0) {
		console.error(
			"Attempted to render InstallRequestModal but there was nothing to show",
		);
		return null;
	} else {
		return (
			<s.Q9
				strName="InstallModal"
				strTitle={(0, Localize)("#GameAction_Install")}
				popupWidth={540}
				popupHeight={480}
				onlyPopoutIfNeeded
				className={z.InstallRequestModal}
				onDismiss={a}
			>
				{m[r]}
			</s.Q9>
		);
	}
}
function U(e) {
	const { onCancel, onContinue, overviews } = e;
	const [a, setA] = useState(0);
	const { appid, steam_deck_compat_category, display_name } = overviews[a];
	const d = T_1(appid);
	const A = d?.vecDeckCompatTestResults ?? [];
	const p = d?.strSteamDeckBlogURL ?? "";
	const g = Qt(p);
	const h = i.useCallback(() => {
		g();
		onCancel();
	}, [g, onCancel]);
	let C = {};
	if (p) {
		C.onOptionsActionDescription = (0, Localize)(
			"#SteamDeckVerified_ViewDeveloperPost",
		);
		C.onOptionsButton = h;
	}
	return (
		<>
			<o.nB>
				<O.g1
					appName={display_name}
					results={{
						appid: appid,
						resolved_category: steam_deck_compat_category,
						resolved_items: A.map(({ test_result, test_loc_token }) => ({
							display_type: test_result,
							loc_token: test_loc_token,
						})),
						steam_deck_blog_url: p,
					}}
					onOpenBlogPost={h}
				/>
			</o.nB>
			<o.wi>
				<S.Z {...C}>
					<o.CB
						strOKText={(0, Localize)("#GameAction_Install")}
						onOK={() => {
							if (a < overviews.length - 1) {
								setA(a + 1);
							} else {
								onContinue();
							}
						}}
						onCancel={onCancel}
					/>
				</S.Z>
			</o.wi>
		</>
	);
}
function W(e) {
	const { installRequest, onCancel, onContinue } = e;
	const a = hf();
	const s = br();
	const l = i.useCallback(() => {
		onCancel();
		s.Settings("Storage");
	}, [onCancel, s]);
	return (
		<>
			<o.Y9>{(0, Localize)("#GameAction_Install")}</o.Y9>
			<o.nB>
				<o.a3>
					<H installRequest={installRequest} />
					{a && <Q_1 installRequest={installRequest} />}
					<Z installRequest={installRequest} onOpenManageStorage={l} />
					<Q installRequest={installRequest} />
				</o.a3>
				<o.wi>
					<V
						installRequest={installRequest}
						onCancel={onCancel}
						onContinue={onContinue}
						onOpenManageStorage={l}
					/>
				</o.wi>
			</o.nB>
		</>
	);
}
function V(e) {
	const { installRequest, onContinue, onCancel, onOpenManageStorage } = e;
	const s = q3(() => R.fN.MountedInstallFolders);
	const l = hf();
	const m =
		installRequest.nDiskSpaceRequired < installRequest.nDiskSpaceAvailable;
	const u = installRequest.bCanChangeInstallFolder && s.length > 1;
	if (l || (m && !u)) {
		return (
			<o.CB
				strOKText={(0, Localize)("#GameAction_Install")}
				onOK={onContinue}
				bOKDisabled={!m}
				onCancel={onCancel}
			/>
		);
	} else {
		return (
			<o.CB
				strOKText={(0, Localize)("#Installer_ManageStorage")}
				onOK={onOpenManageStorage}
				onCancel={onCancel}
			/>
		);
	}
}
function H(e) {
	const { installRequest } = e;
	if (
		q3(() =>
			installRequest.rgApps.map((e) => v.tw.GetAppOverviewByAppID(e.nAppID)),
		).length == 0
	) {
		return null;
	} else {
		return (
			<div className={z.AppsToInstall}>
				{installRequest.rgApps.map((e) => (
					<J_1 app={e} key={e.nAppID} />
				))}
			</div>
		);
	}
}
function J_1(e) {
	const t = v.tw.GetAppOverviewByAppID(e.app.nAppID);
	if (t) {
		return (
			<div className={z.AppToInstall}>
				<E.z eAssetType={3} className={z.AppLogo} app={t} />
				<div className={z.AppName}>{t.display_name}</div>
				<div className={A_1(z.AppSizeRequired, z.DiskSpace)}>
					{dm(e.app.lDiskSpaceRequiredBytes)}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
function Q_1(e) {
	const { installRequest } = e;
	const r = td()
		? "#Installer_SystemShortcut"
		: "#Installer_ApplicationShortcut";
	return (
		<div className={z.CreateShortcuts}>
			<o.Yh
				label={(0, Localize)("#Installer_DesktopShortcut")}
				checked={installRequest.bDesktopShortcut}
				onChange={(e) =>
					I.I.SetCreateShortcuts(e, installRequest.bSystemMenuShortcut)
				}
				hidden={Hn()}
			/>
			<o.Yh
				label={(0, Localize)(r)}
				checked={installRequest.bSystemMenuShortcut}
				onChange={(e) =>
					I.I.SetCreateShortcuts(installRequest.bDesktopShortcut, e)
				}
				hidden={Hn()}
			/>
		</div>
	);
}
function Q(e) {
	const { installRequest } = e;
	let r = null;
	let n = false;
	const a = hf();
	const s = q3(() => R.fN.MountedInstallFolders);
	let o = false;
	let l = <F.ExclamationPoint />;
	if (
		a &&
		installRequest.nDiskSpaceRequired > installRequest.nDiskSpaceAvailable
	) {
		r = (0, Localize)("#Installer_NoticeNotEnoughSpace");
		n = true;
		o = true;
	} else if (installRequest.iUnmountedFolder != -1) {
		r = (0, Localize)("#Installer_NoticeUnmountedFolder");
	} else if (
		installRequest.strPeerContentServer.length &&
		!installRequest.bPeerContentServerOnline
	) {
		r = LocalizeReact(
			"#Installer_NoticePeerServerOffline",
			<span
				style={{
					color: "#FFFFFF",
				}}
			>
				{installRequest.strPeerContentServer}
			</span>,
		);
	} else if (
		installRequest.strPeerContentServer.length &&
		!installRequest.bPeerContentServerAvailable
	) {
		r = LocalizeReact(
			"#Installer_NoticePeerServerUnavailable",
			<span
				style={{
					color: "#FFFFFF",
				}}
			>
				{installRequest.strPeerContentServer}
			</span>,
		);
	} else if (!installRequest.bCanChangeInstallFolder && s.length > 1) {
		r = (0, Localize)("#Installer_NoticeCantChooseFolder");
	}
	return (
		<div className={A_1(z.NoticeInstallFolder, n && z.Warning)}>
			{o && <div className={A_1(z.FolderFlag, z.Warning)}>{l}</div>}
			<span>{r}</span>
		</div>
	);
}
function Z(e) {
	const { installRequest, onOpenManageStorage } = e;
	const n = q3(() => R.fN.MountedInstallFolders);
	const a = hf();
	if (!installRequest.bCanChangeInstallFolder) {
		return null;
	}
	const s = n.length > 1;
	return (
		<div className={z.FolderSelector}>
			<div className={z.Header}>
				{(0, Localize)("#Installer_ChooseDestinationFolder")}
				{a && (
					<o.$n className={z.FolderSettings} onClick={onOpenManageStorage}>
						<P.he
							bTopmost
							toolTipContent={(0, Localize)("#Installer_ManageStorage")}
							direction="left"
						>
							<F.Settings />
						</P.he>
					</o.$n>
				)}
			</div>
			<div className={z.FolderOptions}>
				{n.map((e) => (
					<Y
						key={e.nFolderIndex}
						folder={e}
						bCanSelectFolder={s}
						active={installRequest.iInstallFolder == e.nFolderIndex}
						nSpaceRequired={installRequest.nDiskSpaceRequired}
					/>
				))}
			</div>
		</div>
	);
}
function Y(e) {
	const { folder, active, bCanSelectFolder, nSpaceRequired } = e;
	const s = hf();
	const o = nSpaceRequired < folder.nFreeSpace;
	const t_bIsDefaultFolder = folder.bIsDefaultFolder;
	const m = i.useCallback(() => {
		if (s) {
			I.I.SetInstallFolderIndex(folder.nFolderIndex);
		} else if (o) {
			I.I.SetInstallFolderIndexAndStartInstall(folder.nFolderIndex);
		}
	}, [folder.nFolderIndex, s, o]);
	let u = <G.EE folder={folder} />;
	if (!o) {
		u = <F.ExclamationPoint />;
	}
	return (
		<S.Z
			focusable={o && bCanSelectFolder}
			autoFocus={t_bIsDefaultFolder}
			onActivate={m}
			className={A_1(z.FolderOption, active && z.Active)}
			focusClassName={z.Focused}
			noFocusRing
		>
			<div className={A_1(z.FolderFlag, !o && z.Warning)}>{u}</div>
			<div className={A_1(z.FolderName, !o && z.NoSpace)}>
				<G.Gc folder={folder} />
				{!s && !o && (
					<span>{` ${(0, Localize)("#Installer_NoticeNotEnoughSpace")}`}</span>
				)}
			</div>
			{t_bIsDefaultFolder && (
				<div className={z.FolderFlagStar}>
					<F.Star />
				</div>
			)}
			<div className={A_1(z.FreeSpace, z.DiskSpace)}>
				{(0, Localize)("#Installer_FolderSpaceFree", dm(folder.nFreeSpace))}
			</div>
		</S.Z>
	);
}
const ne = re;
function Ie() {
	const e = q3(() => I.I.GetInstallManager());
	const t = q3(() => v.tw.GetAppOverviewByAppID(e ? e.currentAppID : 0));
	const r = q3(() => I.I.GetEulaWorkflow());
	if (!e) {
		return null;
	}
	switch (e.eInstallState) {
		case K.H2.k_EInstallMgrStateShowCDKey: {
			return (
				<X.w
					onlyPopoutIfNeeded
					strName={`EULA_${e.currentAppID}`}
					strTitle={(0, Localize)("#EulaDialog_Header")}
					popupHeight={600}
					popupWidth={640}
				>
					<te.L
						onCancel={() => SteamClient.Installs.CancelInstall()}
						onSuccess={() => SteamClient.Installs.ContinueInstall()}
					/>
				</X.w>
			);
		}
		case K.H2.k_EInstallMgrStateShowEULAs: {
			if (r) {
				return (
					<X.w
						onlyPopoutIfNeeded
						strName={`EULA_${e.currentAppID}`}
						strTitle={(0, Localize)("#EulaDialog_Header")}
						popupHeight={600}
						popupWidth={640}
					>
						<$.u_
							appid={e.currentAppID}
							eulaWorkflow={r}
							onCancel={() => SteamClient.Installs.CancelInstall()}
						/>
					</X.w>
				);
			} else {
				return null;
			}
		}
		case K.H2.k_EInstallMgrStateShowConfig: {
			return <X_1 installRequest={e} />;
		}
		case K.H2.k_EInstallMgrStateCreateApps: {
			return (
				<s.EN active>
					<Se installManager={e} appOverview={t} />
				</s.EN>
			);
		}
		case K.H2.k_EInstallMgrStateReadFromMedia: {
			return (
				<s.EN active>
					<Le installManager={e} appOverview={t} />;
				</s.EN>
			);
		}
		case K.H2.k_EInstallMgrStateShowChangeMedia: {
			return (
				<s.EN active>
					<Oe installManager={e} appOverview={t} />
				</s.EN>
			);
		}
		case K.H2.k_EInstallMgrStateFailed: {
			const n = t ? t.display_name : `AppID ${e.currentAppID}`;
			let a = null;
			a =
				e.eAppError != 0
					? (0, Localize)(
							"#Installer_Error_AppName_ErrorDescription",
							n,
							(0, Localize)(`#Steam_AppUpdateError_${e.eAppError}`),
						)
					: (0, Localize)("#Installer_UnknownError_AppName", n);
			return (
				<s.EN active>
					<s.KG
						onOK={() => SteamClient.Installs.CancelInstall()}
						strDescription={a}
					/>
					;
				</s.EN>
			);
		}
		case K.H2.k_EInstallMgrStateShowSignup:
		case K.H2.k_EInstallMgrStateShowPassword: {
			console.error("Unhandled installer state: ", e.eInstallState);
			return null;
		}
		default: {
			return null;
		}
	}
}
function Ae_1(e) {
	return (
		<s.eV onCancel={() => {}}>
			<S.Z id="install_dialog" className={ne.InstallerModalContent}>
				<o.Y9 className={ne.ModalHeader}>
					{(0, Localize)("#Installer_Install")}
				</o.Y9>
				<o.nB>{e.children}</o.nB>
			</S.Z>
		</s.eV>
	);
}
function Se(e) {
	const { installManager, appOverview } = e;
	let n = (0, Localize)("#Installer_Installing");
	if (appOverview && appOverview.display_name) {
		n = (0, Localize)("#Installer_InstallingApp", appOverview.display_name);
	}
	return (
		<Ae_1>
			<o.a3>
				<div className={ne.InstallingText}>{n}</div>
				<J.t className={ne.Throbber} size="medium" position="center" />
			</o.a3>
			<o.wi>
				<o.CB
					onCancel={() => SteamClient.Installs.CancelInstall()}
					strOKText={(0, Localize)("#Button_OK")}
					strCancelText={(0, Localize)("#Button_Cancel")}
				/>
			</o.wi>
		</Ae_1>
	);
}
function Oe(e) {
	const { installManager, appOverview } = e;
	return (
		<Ae_1>
			<o.a3>
				<div className={ne.InstallingText}>
					{(0, Localize)(
						"#Installer_ChangeMedia",
						installManager.nCurrentDisk + 1,
					)}
				</div>
			</o.a3>
			<o.wi>
				<o.CB
					strOKText={(0, Localize)("#Button_Continue")}
					onOK={() => SteamClient.Installs.ContinueInstall()}
					strCancelText={(0, Localize)("#Button_Cancel")}
					onCancel={() => SteamClient.Installs.CancelInstall()}
				/>
			</o.wi>
		</Ae_1>
	);
}
function Le(e) {
	const { installManager, appOverview } = e;
	const n = q3(() => ee.hj.DownloadOverview);
	let a = (0, Localize)(
		"#Installer_ReadingFromMedia",
		installManager.nCurrentDisk,
	);
	if (installManager.bIsBackupInstall) {
		a = (0, Localize)("#Installer_ReadingBackup");
	}
	let s = 0;
	let l = 0;
	let m = 0;
	if (n.update_appid == installManager.currentAppID) {
		if (n.update_state == "Unpacking" || n.update_state == "Preallocating") {
			[l, s] = vO(n);
			m = MD(n);
		}
		if (n.update_state == "Preallocating") {
			a = (0, Localize)("#Installer_PreallocatingDiskSpace");
		}
	}
	return (
		<Ae_1>
			<o.a3>
				<div className={ne.InstallingText}>{a}</div>
				<J.t className={ne.Throbber} size="medium" position="center" />
				<div className={ne.InstallingBytesProcessed}>
					{s > 0 &&
						(0, Localize)("#Installer_BytesProcessed", dm(l, 1), dm(s, 1))}
				</div>
				<div className={ne.InstallAppsIndicator}>
					<div
						className={ne.InstallAppsBar}
						style={{
							width: `${m}%`,
						}}
					/>
				</div>
			</o.a3>
			<o.wi>
				<o.$n onClick={() => SteamClient.Installs.CancelInstall()}>
					{(0, Localize)("#Button_Cancel")}
				</o.$n>
			</o.wi>
		</Ae_1>
	);
}
function Pe() {
	const e = W6();
	const [t, setT] = i.useState(e.location.state?.PrivateAppDialogTarget);
	i.useEffect(
		() => e.listen((e) => setT(e.state?.PrivateAppDialogTarget)),
		[e],
	);
	const n = i.useCallback(() => {
		e.replace(e.location.pathname, {
			...e.location.state,
			PrivateAppDialogTarget: undefined,
		});
	}, [e]);
	const a = i.useMemo(() => t?.split(",").map((e) => Number(e)), [t]);
	if (t) {
		return <Ge rgAppIDs={a} fnCloseModal={n} />;
	}
}
function Ge(e) {
	const { rgAppIDs, fnCloseModal } = e;
	const n = DT();
	const a = i.useCallback(() => {
		n.mutate({
			rgAppIDs: rgAppIDs,
			bPrivate: true,
		});
		fnCloseModal();
	}, [n, rgAppIDs, fnCloseModal]);
	return (
		<X.w
			strName={`MarkAppPrivate_${rgAppIDs.join(",")}`}
			strTitle={(0, Localize)("#GameAction_MarkAsPrivate")}
			onlyPopoutIfNeeded
			popupWidth={680}
			popupHeight={320}
		>
			<s.o0
				strTitle={<He />}
				strOKButtonText={(0, Localize)("#AppProperties_Privacy_MarkAppPrivate")}
				onOK={a}
				onCancel={fnCloseModal}
			>
				<div
					style={{
						whiteSpace: "pre-line",
					}}
				>
					{(0, Localize)("#AppProperties_Privacy_DialogDescription")}
				</div>
			</s.o0>
		</X.w>
	);
}
function He() {
	return (
		<>
			<div
				style={{
					width: "28px",
					height: "28px",
					display: "inline-block",
					marginInlineEnd: "12px",
					verticalAlign: "middle",
				}}
			>
				<F.FeatureHidden />
			</div>
			{(0, Localize)("#GameAction_MarkAsPrivate")}
		</>
	);
}
export function g() {
	const e = XW();
	return (
		<a.wC>
			<Ie />
			<B />
			<_g.wR />
			<ue.kz uiMode={e} />
			<n.rx />
			<n.Kr />
			<n.Nw />
			<n.RD />
			<n.VQ />
			<n.Kw />
			<me.wK />
			<Pe />
			<A />
			<ce.l />
			<_e.x />
			<Ce.P3 />
		</a.wC>
	);
}
