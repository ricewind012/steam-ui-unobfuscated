var n = require("./3142.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./42318.js");
var s = require("./10606.js");
var o = require("./64608.js");
var l = require("./4530.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./81994.js");
var u = require("./96680.js");
var d = require("./45967.js");
const A = (0, a.Nr)(function () {
	const e = i.useRef(false);
	const t = i.useRef(0);
	const r = i.useRef(undefined);
	const [n, a] = i.useState(false);
	const A = (0, u.$2)();
	const p = i.useCallback(
		(n) => {
			if (
				(A.IsMainDesktopWindow() || A.IsMainGamepadUIWindow()) &&
				n !== e.current
			) {
				e.current = n;
				if (r.current) {
					clearTimeout(r.current);
					r.current = undefined;
				}
				if (n) {
					a(false);
				} else {
					t.current++;
					if (t.current >= 5) {
						d.fR.Info(
							"VRMode disabled",
							t.current,
							"times, restarting in",
							3000,
							"ms",
						);
						a(true);
						r.current = setTimeout(() => {
							r.current = undefined;
							a(false);
							setTimeout(() => {
								d.fR.Info("VRMode disabled timer complete, restarting now");
								SteamClient.Browser.RestartJSContext();
							}, 0);
						}, 3000);
					} else {
						d.fR.Info(
							"VRMode disabled",
							t.current,
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
		return i.createElement(
			s.hM,
			{
				strTitle: (0, c.we)("#Steam_Reloading_Title"),
				popupWidth: 400,
				popupHeight: 0,
				modal: true,
				className: l.Popup,
			},
			i.createElement(o.Y9, null, (0, c.we)("#Steam_Reloading_Title")),
			i.createElement(
				o.nB,
				null,
				i.createElement(m.j, {
					background: "transparent",
				}),
			),
		);
	} else {
		return null;
	}
});
var p;
var _g = require("./95572.js");
var h = require("./74738.js");
var C = h;
var _ = require("./43397.js");
var f = require("./18869.js");
var b = require("./87935.js");
var y = require("./34792.js");
var S = require(/*webcrack:missing*/ "./69164.js");
var w = require(/*webcrack:missing*/ "./72476.js");
(function (e) {
	e[(e.Hidden = 0)] = "Hidden";
	e[(e.Prompt = 1)] = "Prompt";
})((p ||= {}));
const B = (0, a.Nr)(function () {
	const [e, t] = i.useState();
	const [r, n] = i.useState(false);
	const [a, l] = i.useState(p.Hidden);
	const m = (0, f.br)();
	const [u, d] = (0, y.VI)("skip_steamvr_install_dialog");
	const A = (0, w.rP)();
	i.useEffect(
		() =>
			SteamClient.OpenVR.RegisterForInstallDialog((e, r) => {
				if (!u && !A.IN_VR) {
					t(e);
					n(r);
					if (e?.length > 0) {
						l(p.Prompt);
					}
				}
			}).unregister,
		[u, A],
	);
	if (a == p.Hidden || A.IN_VR) {
		return null;
	}
	return i.createElement(
		s.EN,
		{
			active: true,
		},
		i.createElement(
			s.x_,
			null,
			i.createElement(
				o.UC,
				{
					className: C.Dialog,
				},
				i.createElement(
					"div",
					{
						className: C.MainContent,
					},
					i.createElement(
						"div",
						{
							className: C.Header,
						},
						(0, c.we)("#SteamVRInstall_Header"),
					),
					i.createElement(
						"div",
						{
							className: C.Description,
						},
						(0, c.we)("#SteamVRInstall_Description"),
					),
					r &&
						i.createElement(
							"div",
							{
								className: C.OculusHelp,
							},
							(0, c.oW)(
								"#SteamVRInstall_OculusHelp",
								i.createElement(_.uU, {
									href: "https://support.steampowered.com/kb_article.php?ref=3180-UPHK-0900",
								}),
							),
						),
				),
				i.createElement(
					S.Z,
					{
						className: C.Footer,
					},
					i.createElement(
						"div",
						{
							className: C.CheckboxContainer,
						},
						i.createElement(o.Yh, {
							label: (0, c.we)("#SteamVRInstall_DontShowAgain"),
							checked: u,
							onChange: d,
						}),
					),
					i.createElement(
						o.$n,
						{
							disabled: a != p.Prompt,
							onClick: async () => {
								SteamClient.Installs.OpenInstallWizard(e);
								l(p.Hidden);
							},
						},
						(0, c.we)("#SteamVRInstall_InstallSteamVR"),
					),
					i.createElement(
						o.$n,
						{
							onClick: () => {
								l(p.Hidden);
							},
						},
						(0, c.we)("#Button_Close"),
					),
					i.createElement(
						o.$n,
						{
							onClick: () => {
								m.SteamWeb(b.B7.ResolveURL("SteamVRHMDHelp"));
								l(p.Hidden);
							},
						},
						(0, c.we)("#SteamVRInstall_Help"),
					),
				),
			),
		),
	);
});
var v = require("./96593.js");
var I = require("./76356.js");
var E = require("./91486.js");
var M = require("./18057.js");
var T = require("./78057.js");
var R = require("./73317.js");
var k = require(/*webcrack:missing*/ "./90095.js");
var D = require(/*webcrack:missing*/ "./90765.js");
var N = require("./34428.js");
var F = require("./35488.js");
var G = require("./88769.js");
var O = require("./7552.js");
var P = require(/*webcrack:missing*/ "./98995.js");
var L = require("./58879.js");
var z = L;
function x(e) {
	const { installRequest: t } = e;
	const [r, n] = (0, i.useState)(0);
	const a = i.useCallback(() => {
		I.I.CancelRequestedInstall();
	}, []);
	const o = () => {
		if (r >= m.length - 1) {
			I.I.StartRequestedInstall();
		} else {
			n(r + 1);
		}
	};
	const l = (0, k.q3)(() =>
		t.rgApps.map((e) => v.tw.GetAppOverviewByAppID(e.nAppID)),
	).filter((e) => e && I.I.BShowDeckCompatForInstall(e.appid));
	const m = [
		l.length > 0 &&
			i.createElement(U, {
				onCancel: a,
				overviews: l,
				onContinue: o,
			}),
		I.I.BShowDiskSettingsForInstall(t) &&
			i.createElement(W, {
				installRequest: t,
				onCancel: a,
				onContinue: o,
			}),
	].filter(Boolean);
	if (m.length === 0) {
		console.error(
			"Attempted to render InstallRequestModal but there was nothing to show",
		);
		return null;
	} else {
		return i.createElement(
			s.Q9,
			{
				strName: "InstallModal",
				strTitle: (0, c.we)("#GameAction_Install"),
				popupWidth: 540,
				popupHeight: 480,
				onlyPopoutIfNeeded: true,
				className: z.InstallRequestModal,
				onDismiss: a,
			},
			m[r],
		);
	}
}
function U(e) {
	const { onCancel: t, onContinue: r, overviews: n } = e;
	const [a, s] = (0, i.useState)(0);
	const { appid: l, steam_deck_compat_category: m, display_name: u } = n[a];
	const d = (0, T.T)(l);
	const A = d?.vecDeckCompatTestResults ?? [];
	const p = d?.strSteamDeckBlogURL ?? "";
	const g = (0, M.Qt)(p);
	const h = i.useCallback(() => {
		g();
		t();
	}, [g, t]);
	let C = {};
	if (p) {
		C.onOptionsActionDescription = (0, c.we)(
			"#SteamDeckVerified_ViewDeveloperPost",
		);
		C.onOptionsButton = h;
	}
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			o.nB,
			null,
			i.createElement(O.g1, {
				appName: u,
				results: {
					appid: l,
					resolved_category: m,
					resolved_items: A.map(({ test_result: e, test_loc_token: t }) => ({
						display_type: e,
						loc_token: t,
					})),
					steam_deck_blog_url: p,
				},
				onOpenBlogPost: h,
			}),
		),
		i.createElement(
			o.wi,
			null,
			i.createElement(
				S.Z,
				{
					...C,
				},
				i.createElement(o.CB, {
					strOKText: (0, c.we)("#GameAction_Install"),
					onOK: () => {
						if (a < n.length - 1) {
							s(a + 1);
						} else {
							r();
						}
					},
					onCancel: t,
				}),
			),
		),
	);
}
function W(e) {
	const { installRequest: t, onCancel: r, onContinue: n } = e;
	const a = (0, w.hf)();
	const s = (0, f.br)();
	const l = i.useCallback(() => {
		r();
		s.Settings("Storage");
	}, [r, s]);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(o.Y9, null, (0, c.we)("#GameAction_Install")),
		i.createElement(
			o.nB,
			null,
			i.createElement(
				o.a3,
				null,
				i.createElement(H, {
					installRequest: t,
				}),
				a &&
					i.createElement(q, {
						installRequest: t,
					}),
				i.createElement(Z, {
					installRequest: t,
					onOpenManageStorage: l,
				}),
				i.createElement(Q, {
					installRequest: t,
				}),
			),
			i.createElement(
				o.wi,
				null,
				i.createElement(V, {
					installRequest: t,
					onCancel: r,
					onContinue: n,
					onOpenManageStorage: l,
				}),
			),
		),
	);
}
function V(e) {
	const {
		installRequest: t,
		onContinue: r,
		onCancel: n,
		onOpenManageStorage: a,
	} = e;
	const s = (0, k.q3)(() => R.fN.MountedInstallFolders);
	const l = (0, w.hf)();
	const m = t.nDiskSpaceRequired < t.nDiskSpaceAvailable;
	const u = t.bCanChangeInstallFolder && s.length > 1;
	if (l || (m && !u)) {
		return i.createElement(o.CB, {
			strOKText: (0, c.we)("#GameAction_Install"),
			onOK: r,
			bOKDisabled: !m,
			onCancel: n,
		});
	} else {
		return i.createElement(o.CB, {
			strOKText: (0, c.we)("#Installer_ManageStorage"),
			onOK: a,
			onCancel: n,
		});
	}
}
function H(e) {
	const { installRequest: t } = e;
	if (
		(0, k.q3)(() => t.rgApps.map((e) => v.tw.GetAppOverviewByAppID(e.nAppID)))
			.length == 0
	) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: z.AppsToInstall,
			},
			t.rgApps.map((e) =>
				i.createElement(j, {
					app: e,
					key: e.nAppID,
				}),
			),
		);
	}
}
function j(e) {
	const t = v.tw.GetAppOverviewByAppID(e.app.nAppID);
	if (t) {
		return i.createElement(
			"div",
			{
				className: z.AppToInstall,
			},
			i.createElement(E.z, {
				eAssetType: 3,
				className: z.AppLogo,
				app: t,
			}),
			i.createElement(
				"div",
				{
					className: z.AppName,
				},
				t.display_name,
			),
			i.createElement(
				"div",
				{
					className: (0, D.A)(z.AppSizeRequired, z.DiskSpace),
				},
				(0, N.dm)(e.app.lDiskSpaceRequiredBytes),
			),
		);
	} else {
		return null;
	}
}
function q(e) {
	const { installRequest: t } = e;
	const r = (0, w.td)()
		? "#Installer_SystemShortcut"
		: "#Installer_ApplicationShortcut";
	return i.createElement(
		"div",
		{
			className: z.CreateShortcuts,
		},
		i.createElement(o.Yh, {
			label: (0, c.we)("#Installer_DesktopShortcut"),
			checked: t.bDesktopShortcut,
			onChange: (e) => I.I.SetCreateShortcuts(e, t.bSystemMenuShortcut),
			hidden: (0, w.Hn)(),
		}),
		i.createElement(o.Yh, {
			label: (0, c.we)(r),
			checked: t.bSystemMenuShortcut,
			onChange: (e) => I.I.SetCreateShortcuts(t.bDesktopShortcut, e),
			hidden: (0, w.Hn)(),
		}),
	);
}
function Q(e) {
	const { installRequest: t } = e;
	let r = null;
	let n = false;
	const a = (0, w.hf)();
	const s = (0, k.q3)(() => R.fN.MountedInstallFolders);
	let o = false;
	let l = i.createElement(F.ExclamationPoint, null);
	if (a && t.nDiskSpaceRequired > t.nDiskSpaceAvailable) {
		r = (0, c.we)("#Installer_NoticeNotEnoughSpace");
		n = true;
		o = true;
	} else if (t.iUnmountedFolder != -1) {
		r = (0, c.we)("#Installer_NoticeUnmountedFolder");
	} else if (t.strPeerContentServer.length && !t.bPeerContentServerOnline) {
		r = (0, c.PP)(
			"#Installer_NoticePeerServerOffline",
			i.createElement(
				"span",
				{
					style: {
						color: "#FFFFFF",
					},
				},
				t.strPeerContentServer,
			),
		);
	} else if (t.strPeerContentServer.length && !t.bPeerContentServerAvailable) {
		r = (0, c.PP)(
			"#Installer_NoticePeerServerUnavailable",
			i.createElement(
				"span",
				{
					style: {
						color: "#FFFFFF",
					},
				},
				t.strPeerContentServer,
			),
		);
	} else if (!t.bCanChangeInstallFolder && s.length > 1) {
		r = (0, c.we)("#Installer_NoticeCantChooseFolder");
	}
	return i.createElement(
		"div",
		{
			className: (0, D.A)(z.NoticeInstallFolder, n && z.Warning),
		},
		o &&
			i.createElement(
				"div",
				{
					className: (0, D.A)(z.FolderFlag, z.Warning),
				},
				l,
			),
		i.createElement("span", null, r),
	);
}
function Z(e) {
	const { installRequest: t, onOpenManageStorage: r } = e;
	const n = (0, k.q3)(() => R.fN.MountedInstallFolders);
	const a = (0, w.hf)();
	if (!t.bCanChangeInstallFolder) {
		return null;
	}
	const s = n.length > 1;
	return i.createElement(
		"div",
		{
			className: z.FolderSelector,
		},
		i.createElement(
			"div",
			{
				className: z.Header,
			},
			(0, c.we)("#Installer_ChooseDestinationFolder"),
			a &&
				i.createElement(
					o.$n,
					{
						className: z.FolderSettings,
						onClick: r,
					},
					i.createElement(
						P.he,
						{
							bTopmost: true,
							toolTipContent: (0, c.we)("#Installer_ManageStorage"),
							direction: "left",
						},
						i.createElement(F.Settings, null),
					),
				),
		),
		i.createElement(
			"div",
			{
				className: z.FolderOptions,
			},
			n.map((e) =>
				i.createElement(Y, {
					key: e.nFolderIndex,
					folder: e,
					bCanSelectFolder: s,
					active: t.iInstallFolder == e.nFolderIndex,
					nSpaceRequired: t.nDiskSpaceRequired,
				}),
			),
		),
	);
}
function Y(e) {
	const { folder: t, active: r, bCanSelectFolder: n, nSpaceRequired: a } = e;
	const s = (0, w.hf)();
	const o = a < t.nFreeSpace;
	const l = t.bIsDefaultFolder;
	const m = i.useCallback(() => {
		if (s) {
			I.I.SetInstallFolderIndex(t.nFolderIndex);
		} else if (o) {
			I.I.SetInstallFolderIndexAndStartInstall(t.nFolderIndex);
		}
	}, [t.nFolderIndex, s, o]);
	let u = i.createElement(G.EE, {
		folder: t,
	});
	if (!o) {
		u = i.createElement(F.ExclamationPoint, null);
	}
	return i.createElement(
		S.Z,
		{
			focusable: o && n,
			autoFocus: l,
			onActivate: m,
			className: (0, D.A)(z.FolderOption, r && z.Active),
			focusClassName: z.Focused,
			noFocusRing: true,
		},
		i.createElement(
			"div",
			{
				className: (0, D.A)(z.FolderFlag, !o && z.Warning),
			},
			u,
		),
		i.createElement(
			"div",
			{
				className: (0, D.A)(z.FolderName, !o && z.NoSpace),
			},
			i.createElement(G.Gc, {
				folder: t,
			}),
			!s &&
				!o &&
				i.createElement(
					"span",
					null,
					" " + (0, c.we)("#Installer_NoticeNotEnoughSpace"),
				),
		),
		l &&
			i.createElement(
				"div",
				{
					className: z.FolderFlagStar,
				},
				i.createElement(F.Star, null),
			),
		i.createElement(
			"div",
			{
				className: (0, D.A)(z.FreeSpace, z.DiskSpace),
			},
			(0, c.we)("#Installer_FolderSpaceFree", (0, N.dm)(t.nFreeSpace)),
		),
	);
}
var K = require(/*webcrack:missing*/ "./44846.js");
var X = require("./78110.js");
var J = require(/*webcrack:missing*/ "./26853.js");
var $ = require("./61398.js");
var ee = require("./97893.js");
var te = require("./83184.js");
var re = require("./47654.js");
var ne = re;
function ie() {
	const e = (0, k.q3)(() => I.I.GetInstallManager());
	const t = (0, k.q3)(() => v.tw.GetAppOverviewByAppID(e ? e.currentAppID : 0));
	const r = (0, k.q3)(() => I.I.GetEulaWorkflow());
	if (!e) {
		return null;
	}
	switch (e.eInstallState) {
		case K.H2.k_EInstallMgrStateShowCDKey:
			return i.createElement(
				X.w,
				{
					onlyPopoutIfNeeded: true,
					strName: `EULA_${e.currentAppID}`,
					strTitle: (0, c.we)("#EulaDialog_Header"),
					popupHeight: 600,
					popupWidth: 640,
				},
				i.createElement(te.L, {
					onCancel: () => SteamClient.Installs.CancelInstall(),
					onSuccess: () => SteamClient.Installs.ContinueInstall(),
				}),
			);
		case K.H2.k_EInstallMgrStateShowEULAs:
			if (r) {
				return i.createElement(
					X.w,
					{
						onlyPopoutIfNeeded: true,
						strName: `EULA_${e.currentAppID}`,
						strTitle: (0, c.we)("#EulaDialog_Header"),
						popupHeight: 600,
						popupWidth: 640,
					},
					i.createElement($.u_, {
						appid: e.currentAppID,
						eulaWorkflow: r,
						onCancel: () => SteamClient.Installs.CancelInstall(),
					}),
				);
			} else {
				return null;
			}
		case K.H2.k_EInstallMgrStateShowConfig:
			return i.createElement(x, {
				installRequest: e,
			});
		case K.H2.k_EInstallMgrStateCreateApps:
			return i.createElement(
				s.EN,
				{
					active: true,
				},
				i.createElement(se, {
					installManager: e,
					appOverview: t,
				}),
			);
		case K.H2.k_EInstallMgrStateReadFromMedia:
			return i.createElement(
				s.EN,
				{
					active: true,
				},
				i.createElement(le, {
					installManager: e,
					appOverview: t,
				}),
				";",
			);
		case K.H2.k_EInstallMgrStateShowChangeMedia:
			return i.createElement(
				s.EN,
				{
					active: true,
				},
				i.createElement(oe, {
					installManager: e,
					appOverview: t,
				}),
			);
		case K.H2.k_EInstallMgrStateFailed:
			const n = t ? t.display_name : "AppID " + e.currentAppID;
			let a = null;
			a =
				e.eAppError != 0
					? (0, c.we)(
							"#Installer_Error_AppName_ErrorDescription",
							n,
							(0, c.we)("#Steam_AppUpdateError_" + e.eAppError),
						)
					: (0, c.we)("#Installer_UnknownError_AppName", n);
			return i.createElement(
				s.EN,
				{
					active: true,
				},
				i.createElement(s.KG, {
					onOK: () => SteamClient.Installs.CancelInstall(),
					strDescription: a,
				}),
				";",
			);
		case K.H2.k_EInstallMgrStateShowSignup:
		case K.H2.k_EInstallMgrStateShowPassword:
			console.error("Unhandled installer state: ", e.eInstallState);
			return null;
		default:
			return null;
	}
}
function ae(e) {
	return i.createElement(
		s.eV,
		{
			onCancel: () => {},
		},
		i.createElement(
			S.Z,
			{
				id: "install_dialog",
				className: ne.InstallerModalContent,
			},
			i.createElement(
				o.Y9,
				{
					className: ne.ModalHeader,
				},
				(0, c.we)("#Installer_Install"),
			),
			i.createElement(o.nB, null, e.children),
		),
	);
}
function se(e) {
	const { installManager: t, appOverview: r } = e;
	let n = (0, c.we)("#Installer_Installing");
	if (r && r.display_name) {
		n = (0, c.we)("#Installer_InstallingApp", r.display_name);
	}
	return i.createElement(
		ae,
		null,
		i.createElement(
			o.a3,
			null,
			i.createElement(
				"div",
				{
					className: ne.InstallingText,
				},
				n,
			),
			i.createElement(J.t, {
				className: ne.Throbber,
				size: "medium",
				position: "center",
			}),
		),
		i.createElement(
			o.wi,
			null,
			i.createElement(o.CB, {
				onCancel: () => SteamClient.Installs.CancelInstall(),
				strOKText: (0, c.we)("#Button_OK"),
				strCancelText: (0, c.we)("#Button_Cancel"),
			}),
		),
	);
}
function oe(e) {
	const { installManager: t, appOverview: r } = e;
	return i.createElement(
		ae,
		null,
		i.createElement(
			o.a3,
			null,
			i.createElement(
				"div",
				{
					className: ne.InstallingText,
				},
				(0, c.we)("#Installer_ChangeMedia", t.nCurrentDisk + 1),
			),
		),
		i.createElement(
			o.wi,
			null,
			i.createElement(o.CB, {
				strOKText: (0, c.we)("#Button_Continue"),
				onOK: () => SteamClient.Installs.ContinueInstall(),
				strCancelText: (0, c.we)("#Button_Cancel"),
				onCancel: () => SteamClient.Installs.CancelInstall(),
			}),
		),
	);
}
function le(e) {
	const { installManager: t, appOverview: r } = e;
	const n = (0, k.q3)(() => ee.hj.DownloadOverview);
	let a = (0, c.we)("#Installer_ReadingFromMedia", t.nCurrentDisk);
	if (t.bIsBackupInstall) {
		a = (0, c.we)("#Installer_ReadingBackup");
	}
	let s = 0;
	let l = 0;
	let m = 0;
	if (n.update_appid == t.currentAppID) {
		if (n.update_state == "Unpacking" || n.update_state == "Preallocating") {
			[l, s] = (0, ee.vO)(n);
			m = (0, ee.MD)(n);
		}
		if (n.update_state == "Preallocating") {
			a = (0, c.we)("#Installer_PreallocatingDiskSpace");
		}
	}
	return i.createElement(
		ae,
		null,
		i.createElement(
			o.a3,
			null,
			i.createElement(
				"div",
				{
					className: ne.InstallingText,
				},
				a,
			),
			i.createElement(J.t, {
				className: ne.Throbber,
				size: "medium",
				position: "center",
			}),
			i.createElement(
				"div",
				{
					className: ne.InstallingBytesProcessed,
				},
				s > 0 &&
					(0, c.we)(
						"#Installer_BytesProcessed",
						(0, N.dm)(l, 1),
						(0, N.dm)(s, 1),
					),
			),
			i.createElement(
				"div",
				{
					className: ne.InstallAppsIndicator,
				},
				i.createElement("div", {
					className: ne.InstallAppsBar,
					style: {
						width: m + "%",
					},
				}),
			),
		),
		i.createElement(
			o.wi,
			null,
			i.createElement(
				o.$n,
				{
					onClick: () => SteamClient.Installs.CancelInstall(),
				},
				(0, c.we)("#Button_Cancel"),
			),
		),
	);
}
var ce = require("./76414.js");
var me = require("./85182.js");
var ue = require("./91209.js");
var de = require(/*webcrack:missing*/ "./49519.js");
var Ae = require("./55571.js");
function pe() {
	const e = (0, de.W6)();
	const [t, r] = i.useState(e.location.state?.PrivateAppDialogTarget);
	i.useEffect(() => e.listen((e) => r(e.state?.PrivateAppDialogTarget)), [e]);
	const n = i.useCallback(() => {
		e.replace(e.location.pathname, {
			...e.location.state,
			PrivateAppDialogTarget: undefined,
		});
	}, [e]);
	const a = i.useMemo(() => t?.split(",").map((e) => Number(e)), [t]);
	if (t) {
		return i.createElement(ge, {
			rgAppIDs: a,
			fnCloseModal: n,
		});
	}
}
function ge(e) {
	const { rgAppIDs: t, fnCloseModal: r } = e;
	const n = (0, Ae.DT)();
	const a = i.useCallback(() => {
		n.mutate({
			rgAppIDs: t,
			bPrivate: true,
		});
		r();
	}, [n, t, r]);
	return i.createElement(
		X.w,
		{
			strName: `MarkAppPrivate_${t.join(",")}`,
			strTitle: (0, c.we)("#GameAction_MarkAsPrivate"),
			onlyPopoutIfNeeded: true,
			popupWidth: 680,
			popupHeight: 320,
		},
		i.createElement(
			s.o0,
			{
				strTitle: i.createElement(he, null),
				strOKButtonText: (0, c.we)("#AppProperties_Privacy_MarkAppPrivate"),
				onOK: a,
				onCancel: r,
			},
			i.createElement(
				"div",
				{
					style: {
						whiteSpace: "pre-line",
					},
				},
				(0, c.we)("#AppProperties_Privacy_DialogDescription"),
			),
		),
	);
}
function he() {
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				style: {
					width: "28px",
					height: "28px",
					display: "inline-block",
					marginInlineEnd: "12px",
					verticalAlign: "middle",
				},
			},
			i.createElement(F.FeatureHidden, null),
		),
		(0, c.we)("#GameAction_MarkAsPrivate"),
	);
}
var Ce = require("./6263.js");
var _e = require("./19056.js");
export function g() {
	const e = (0, w.XW)();
	return i.createElement(
		a.wC,
		null,
		i.createElement(ie, null),
		i.createElement(B, null),
		i.createElement(_g.wR, null),
		i.createElement(ue.kz, {
			uiMode: e,
		}),
		i.createElement(n.rx, null),
		i.createElement(n.Kr, null),
		i.createElement(n.Nw, null),
		i.createElement(n.RD, null),
		i.createElement(n.VQ, null),
		i.createElement(n.Kw, null),
		i.createElement(me.wK, null),
		i.createElement(pe, null),
		i.createElement(A, null),
		i.createElement(ce.l, null),
		i.createElement(_e.x, null),
		i.createElement(Ce.P3, null),
	);
}
