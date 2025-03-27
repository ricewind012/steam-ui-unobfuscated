import {
	Localize,
	LocalizeReact,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { LocalizeRtime32ToShortDate } from "../../actual_src/utils/localization/datetime.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { useContext, useState } from "./63696.js";
import a from "./52451.js";
import s, { Gn } from "./89193.js";
import o from "./41230.js";
import l from "./68120.js";
import c from "./64608.js";
import m from "./10606.js";
import d, { Qn } from "./72476.js";
import A, { Co } from "./96593.js";
import p, { sV, OO, iS } from "./73317.js";
import g from "./26271.js";
import h from "./4584.js";
import C, { dm } from "./34428.js";
import { A as A_1 } from "./90765.js";
import f from "./30496.js";
import S from "./13656.js";
import w, { Uo } from "./19731.js";
import B, { P as P_1 } from "./49206.js";
import v from "./69164.js";
import I from "./61657.js";
import E from "./35488.js";
import M from "./98995.js";
import T, { lX } from "./31084.js";
import R from "./88750.js";
import k, { pg } from "./13869.js";
import D from "./33000.js";
import N, { lY } from "./51095.js";
import F from "./26853.js";
import G from "./24892.js";
import P from "./89279.js";
import z from "./80100.js";
import U from "./15181.js";
import W, { Cj } from "./88769.js";
import V, { De as De_1, VW, V as V_1, Ff, CN } from "./24496.js";
import { R7 } from "./11131.js";
import j from "./78110.js";
import { br } from "./18869.js";
import Q, { k1 } from "./13688.js";
import Z from "./42318.js";
import Y from "./43691.js";
import K from "./53622.js";
import X from "./43014.js";
import { yH, Km, zZ, z as z_1, f5 } from "./91720.js";
import $ from "./18057.js";
import { GetEstimatedDiskSpace } from "./4069.js";
import { W6 } from "./49519.js";
import { l9 } from "./5640.js";
import ne from "./28934.js";
const O = G;
const L = P;
const x = z;
const ie = [
	L.ItemHeight,
	L.ItemHeight,
	L.TwoLineItemHeight,
	L.ThreeLineItemHeight,
	L.FourLineItemHeight,
];
export function f_(e) {
	const t = k1();
	const r = R7();
	let n = i.createElement(m.o0, {
		strTitle: (0, Localize)("#ContentManagement_LowDiskSpaceDialog_Title"),
		strDescription: (0, Localize)(
			"#ContentManagement_LowDiskSpaceDialog_Desc",
			(0, Localize)("#MainTabsSettings"),
			(0, Localize)("#Settings_Page_Storage"),
		),
		strOKButtonText: (0, Localize)("#Installer_ManageStorage"),
		onOK: () => t.Settings("Storage"),
	});
	pg(n, r.ownerWindow ?? window);
}
export function Xb() {
	const [e, t] = i.useState(false);
	const r = i.useCallback(() => t(false), []);
	i.useEffect(
		() =>
			SteamClient.Messaging.RegisterForMessages("ContentManagement", () =>
				t(true),
			).unregister,
		[],
	);
	if (!e) {
		return null;
	}
	const n = (0, Localize)("#ContentManagement_Title");
	return i.createElement(
		j.t,
		{
			popupWidth: 960,
			popupHeight: 720,
			strTitle: n,
			onDismiss: r,
		},
		i.createElement(qe, {
			closeModal: r,
		}),
	);
}
function oe(e) {
	const { rPotentialFolders, closeModal, fnOnAddFolder } = e;
	const [a, s] = i.useState(null);
	const o = [
		...rPotentialFolders.map((e) => ({
			label: LocalizeReact(
				"#ContentManagement_AddFolder_AvailableSpace",
				i.createElement(W.Gc, {
					folder: e,
				}),
				dm(e.nFreeSpace ?? 0, 1),
				dm(e.nCapacity ?? 0, 1),
			),

			data: e.strFolderPath,
		})),
		{
			label: (0, Localize)("#ContentManagement_AddFolder_Browse"),
			data: "",
		},
	];
	const [l, d] = i.useState(rPotentialFolders[0].strFolderPath);
	const A = i.useCallback(async () => {
		try {
			let e = l;
			if (
				e === "" &&
				((e = await SteamClient.System.OpenFileDialog({
					strTitle: (0, Localize)("#ContentManagement_DirectoryPicker_Title"),
					bChooseDirectory: true,
				})),
				!e)
			) {
				return;
			}
			const t = await SteamClient.InstallFolder.AddInstallFolder(e);
			fnOnAddFolder(t);
			closeModal();
		} catch (e) {
			if (e.result != 52) {
				s((0, Localize)(`#ContentManagement_Error_${e.message}`));
			}
		}
	}, [s, fnOnAddFolder, closeModal, l]);
	return i.createElement(
		m.eV,
		{
			className: L.SaveCollectionContainer,
			onCancel: closeModal,
		},
		i.createElement(
			c.Y9,
			null,
			(0, Localize)("#ContentManagement_AddFolder_Text"),
		),
		i.createElement(
			c.nB,
			null,
			i.createElement(
				c.a3,
				null,
				i.createElement(c.m, {
					strClassName: L.TopGapSmall,
					rgOptions: o,
					selectedOption: l,
					onChange: (e) => d(e.data),
				}),
				a,
			),
			i.createElement(
				c.wi,
				null,
				i.createElement(c.CB, {
					onCancel: closeModal,
					onOK: A,
					strOKText: (0, Localize)("#ContentManagement_AddFolder_OK"),
				}),
			),
		),
	);
}
let le = class extends i.Component {
	m_strLabelName = "";
	constructor(e) {
		super(e);
		Gn(this);
		this.m_strLabelName = e.drive.strUserLabel;
	}
	onTextChanged(e) {
		this.m_strLabelName = e.currentTarget.value;
	}
	onSaveLabel() {
		SteamClient.InstallFolder.SetFolderLabel(
			this.props.drive.nFolderIndex,
			this.m_strLabelName,
		);
		this.props.closeModal();
	}
	render() {
		return i.createElement(
			m.eV,
			{
				className: L.SaveCollectionContainer,
				onOK: this.onSaveLabel,
				onCancel: this.props.closeModal,
			},
			i.createElement(
				c.Y9,
				null,
				(0, Localize)("#ContentManagement_RenameDrive"),
			),
			i.createElement(
				c.nB,
				null,
				i.createElement(
					c.a3,
					null,
					i.createElement(
						c.JU,
						{
							className: L.SelectedFilters,
						},
						" ",
						(0, Localize)("#ContentManagement_RenameDriveText"),
						" ",
					),
					i.createElement(c.pd, {
						value: this.m_strLabelName,
						onChange: this.onTextChanged,
						autoFocus: true,
						bShowClearAction: true,
					}),
				),
				i.createElement(
					c.wi,
					null,
					i.createElement(c.CB, {
						onOK: this.onSaveLabel,
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
};
Cg([s.sH], le.prototype, "m_strLabelName", undefined);
Cg([a.oI], le.prototype, "onTextChanged", null);
Cg([a.oI], le.prototype, "onSaveLabel", null);
le = Cg([o.PA], le);
let ce = class extends i.Component {
	m_State = "Starting";
	constructor(e) {
		super(e);
		Gn(this);
		SteamClient.InstallFolder.RegisterForRepairFolderFinished(
			this.OnRepairFolderFinished,
		);
		console.log("RepairFolderDialog::constructor");
	}
	componentDidMount() {
		SteamClient.InstallFolder.RepairInstallFolder(this.props.drive.nFolderIndex)
			.then((e) => {
				this.m_State = "Working";
			})
			.catch((e) => {
				this.m_State = "Failed";
			});
	}
	async OnRepairFolderFinished(e) {
		this.m_State = "Done";
	}
	render() {
		return i.createElement(
			m.eV,
			{
				className: L.SaveCollectionContainer,
				onCancel: this.props.closeModal,
			},
			i.createElement(
				c.Y9,
				null,
				(0, Localize)("#ContentManagement_RepairFolder"),
			),
			i.createElement(
				c.nB,
				null,
				i.createElement(
					c.a3,
					null,
					(0, Localize)(
						"#ContentManagement_RepairFolder_Text",
						this.props.drive.strFolderPath,
					),
					this.m_State == "Working" &&
						i.createElement(F.t, {
							size: "medium",
							position: "center",
						}),
					this.m_State == "Done" &&
						(0, Localize)("#ContentManagement_RepairFolder_Done"),
					this.m_State == "Failed" &&
						(0, Localize)("#ContentManagement_RepairFolder_Failed"),
				),
				i.createElement(
					c.wi,
					null,
					i.createElement(
						c.jn,
						{
							onClick: this.props.closeModal,
							disabled: this.m_State == "Working",
						},
						(0, Localize)("#Button_Close"),
					),
				),
			),
		);
	}
};
function me(e, t, r) {
	if (t == 5) {
		e.sort(
			((e) => {
				let t = e ? 1 : -1;
				return (e, r) => t * (e.rtLastPlayed - r.rtLastPlayed);
			})(r),
		);
	} else if (t == 1) {
		e.sort(
			((e) => {
				let t = e ? 1 : -1;
				return (e, r) => t * lY(e.strSortAs, r.strSortAs);
			})(r),
		);
	} else {
		e.sort(
			((e) => {
				let t = e ? 1 : -1;
				return (e, r) => t * (r.nUsedSize - e.nUsedSize);
			})(r),
		);
	}
}
function ue(e) {
	let t = null;
	if (e.eResult === 10) {
		t = (0, Localize)("#ContentManagement_Unmount_Error_Busy");
	} else {
		t = (0, Localize)("#ContentManagement_Unmount_Error_Generic");
	}
	return i.createElement(m.KG, {
		strTitle: (0, Localize)(
			"#ContentManagement_Unmount_Error_Title",
		).toUpperCase(),
		strDescription: i.createElement(
			"span",
			{
				style: {
					whiteSpace: "pre-line",
				},
			},
			" ",
			t,
			" ",
		),
		strOKButtonText: (0, Localize)("#ContentManagement_Unmount_Error_Dismiss"),
		closeModal: e.closeModal,
	});
}
function de(e) {
	const { folder, closeModal } = e;
	const n = R7().ownerWindow ?? window;
	const a = Cj(folder);
	const s = i.useCallback(async () => {
		try {
			await SteamClient.InstallFolder.RemoveInstallFolder(t.nFolderIndex);
			closeModal();
		} catch (e) {
			closeModal();
			let t = Number(e.message);
			let a = "Steam";
			if (t > 7) {
				let e = A.tw.GetAppOverviewByAppID(t);
				if (e) {
					a = e.display_name;
				}
			}
			pg(
				i.createElement(m.o0, {
					bAlertDialog: true,
					strDescription: (0, Localize)(
						"#ContentManagement_RemoveDriveFailed",
						a,
					),
				}),
				n,
				{},
			);
		}
	}, [folder, n, closeModal]);
	return i.createElement(m.o0, {
		strTitle: (0, Localize)("#ContentManagement_RemoveDrive_ConfirmTitle"),
		strDescription: (0, Localize)(
			"#ContentManagement_RemoveDrive_ConfirmDesc",
			a,
		),
		onOK: () => s(),
		onCancel: () => closeModal(),
	});
}
function Ae(e) {
	const { folder, fnEject, fnFormat } = e;
	const a = De_1();
	const s = fnEject !== null && a;
	const o = VW();
	const l = fnFormat !== null && o;
	const c = folder.nFolderIndex == 0;

	const { bIsMounted, bIsDefaultFolder, bIsFixed } = folder;

	if (folder.vecApps.length == 0) {
		folder.nFolderIndex;
	}
	const A = !Y.TS.IN_GAMESCOPE;
	return i.createElement(
		R.tz,
		null,
		bIsMounted &&
			!bIsDefaultFolder &&
			i.createElement(
				R.kt,
				{
					onSelected: () =>
						SteamClient.InstallFolder.SetDefaultInstallFolder(
							folder.nFolderIndex,
						),
				},
				(0, Localize)("#ContentManagement_MakeDefault"),
			),
		!c &&
			s &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) => fnEject(e),
				},
				(0, Localize)("#ContentManagement_Unmount"),
			),
		!c &&
			l &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) => fnFormat(e),
				},
				(0, Localize)("#ContentManagement_FormatDrive"),
			),
		A &&
			bIsMounted &&
			i.createElement(
				R.kt,
				{
					onSelected: () =>
						SteamClient.InstallFolder.BrowseFilesInFolder(folder.nFolderIndex),
				},
				(0, Localize)("#ContentManagement_BrowseFolder"),
			),
		!bIsMounted &&
			i.createElement(
				R.kt,
				{
					onSelected: () => SteamClient.InstallFolder.RefreshFolders(),
				},
				(0, Localize)("#ContentManagement_RefreshDrive"),
			),
		bIsMounted &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						((e, t) => {
							const r = GetOwningWindowForEvent(e);
							pg(
								i.createElement(ce, {
									drive: t,
								}),
								r,
								{
									bNeverPopOut: true,
								},
							);
						})(e, folder),
				},
				(0, Localize)("#ContentManagement_RepairFolder"),
			),
		bIsMounted &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						((e, t) => {
							const r = GetOwningWindowForEvent(e);
							pg(
								i.createElement(le, {
									drive: t,
								}),
								r,
								{},
							);
						})(e, folder),
				},
				(0, Localize)("#ContentManagement_RenameDrive"),
			),
		bIsMounted &&
			!c &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						((e, t) => {
							const r = GetOwningWindowForEvent(e);
							pg(
								i.createElement(de, {
									folder: t,
								}),
								r,
								{},
							);
						})(e, folder),
				},
				(0, Localize)("#ContentManagement_RemoveDrive"),
			),
	);
}
function pe(e, t, r, n) {
	lX(
		i.createElement(Ae, {
			folder: t,
			fnEject: r,
			fnFormat: n,
		}),
		e,
		{
			bFitToWindow: true,
			bOverlapHorizontal: true,
			bOverlapVertical: false,
			strClassName: A_1(O.contextMenu, x.LibraryContextMenu),
		},
	);
}
function ge(e) {
	const { folder } = e;
	const r = Qn();
	const n = i.useCallback(
		(e) => {
			pe(e, folder);
		},
		[folder],
	);
	if (folder) {
		if (r) {
			return null;
		} else {
			return i.createElement(
				M.he,
				{
					direction: "bottom",
					className: L.DriveSettingsButton,
					onClick: n,
					toolTipContent: (0, Localize)("#ContentManagement_DriveSettings"),
				},
				i.createElement(E.Dots, null),
			);
		}
	} else {
		return null;
	}
}
function he(e) {
	return i.createElement(
		M.t1,
		{
			className: L.OtherToolTip,
		},
		i.createElement(
			"div",
			{
				className: L.OtherToolTipHeader,
			},
			(0, Localize)("#ContentManagement_OtherToolTip_Header"),
		),
		i.createElement(
			"div",
			{
				className: L.OtherToolTipText,
			},
			(0, Localize)("#ContentManagement_OtherToolTip_Description"),
		),
	);
}
function Ce(e) {
	const { backend } = e;
	const [r, n] = ve();
	const t_folder = backend.folder;
	const s = backend.nId == r;
	const t_folder_bIsDefaultFolder = t_folder.bIsDefaultFolder;
	const l = V_1(t_folder.strFolderPath);
	const c = l?.is_unmounting || false;
	const m = Be(backend);
	const d = l?.drive_id;
	const A = {
		[I.pR.SECONDARY]: (0, Localize)("#ContentManagement_MakeDefault"),
		[I.pR.OPTIONS]: (0, Localize)("#ContentManagement_Folder_AdvancedOptions"),
	};
	const p = i.useCallback(
		async (e) => {
			const t = await V._r.Unmount(l.id);
			if (t != 1) {
				pg(
					i.createElement(ue, {
						eResult: t,
					}),
					GetOwningWindowForEvent(e),
				);
			}
		},
		[l],
	);
	const g = i.useCallback(
		async (e) => {
			Oe(m, d, GetOwningWindowForEvent(e));
		},
		[m, d],
	);
	const h = i.useCallback(
		async (e) => {
			switch (e.detail.button) {
				case I.pR.SECONDARY: {
					SteamClient.InstallFolder.SetDefaultInstallFolder(
						t_folder.nFolderIndex,
					);
					e.stopPropagation();
					break;
				}
				case I.pR.OPTIONS: {
					pe(e, t_folder, p, d ? g : null);
					e.stopPropagation();
				}
			}
		},
		[t_folder, p, g, d],
	);
	const f = i.useCallback(() => {
		n(backend.nId);
	}, [backend, n]);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			className: A_1(L.InstallFolder, s && L.IsSelected),
			actionDescriptionMap: A,
			onFocus: f,
			onActivate: f,
			onButtonDown: (e) => h(e),
		},
		i.createElement(W.EE, {
			folder: t_folder,
			bProcessing: c,
		}),
		i.createElement(
			"div",
			{
				className: L.FolderInfo,
			},
			i.createElement(
				"div",
				{
					className: L.DriveName,
				},
				m,
				t_folder_bIsDefaultFolder && i.createElement(E.Star, null),
			),
			i.createElement(
				"div",
				{
					className: L.DriveSize,
				},
				(0, Localize)(
					"#ContentManagement_SpaceFreeOf",
					dm(t_folder.nFreeSpace, 1),
					dm(t_folder.nCapacity, 1),
				),
				" ",
			),
		),
	);
}
function _e(e) {
	const { drive } = e;
	if (drive.adopt_stage != 1) {
		return i.createElement(E.Spinner, null);
	} else if (drive.is_ejectable) {
		return i.createElement(E.SdCard, null);
	} else {
		return i.createElement(E.HardDrive, null);
	}
}
function fe(e) {
	const { backend } = e;
	const [r, n] = ve();
	const a = Be(backend);
	const t_drive = backend.drive;
	const o = backend.nId == r;
	const l = i.useCallback(() => {
		n(backend.nId);
	}, [backend, n]);
	const c = {
		[I.pR.OPTIONS]: (0, Localize)("#ContentManagement_Format"),
	};
	const m = i.useCallback(
		async (e) => {
			if (e.detail.button === I.pR.OPTIONS) {
				Oe(a, t_drive.id, GetOwningWindowForEvent(e));
				e.stopPropagation();
			}
		},
		[t_drive, a],
	);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			className: A_1(L.InstallFolder, o && L.IsSelected),
			onFocus: l,
			onActivate: l,
			actionDescriptionMap: c,
			onButtonDown: (e) => m(e),
		},
		i.createElement(_e, {
			drive: t_drive,
		}),
		i.createElement(
			"div",
			{
				className: L.FolderInfo,
			},
			i.createElement(
				"div",
				{
					className: L.DriveName,
				},
				a,
			),
			i.createElement(
				"div",
				{
					className: L.DriveSize,
				},
				(0, Localize)(
					"#ContentManagement_SpaceFreeOf",
					dm(Number(t_drive.size_bytes), 1),
					dm(Number(t_drive.size_bytes), 1),
				),
				" ",
			),
		),
	);
}
async function be(e, t) {
	const r = GetOwningWindowForEvent(e);
	const n = await SteamClient.InstallFolder.GetPotentialFolders();
	if (n.length > 0) {
		pg(
			i.createElement(oe, {
				rPotentialFolders: n,
				fnOnAddFolder: t,
			}),
			r,
			{},
		);
	} else {
		const e = await SteamClient.System.OpenFileDialog({
			strTitle: (0, Localize)("#ContentManagement_DirectoryPicker_Title"),
			bChooseDirectory: true,
		});
		if (e) {
			SteamClient.InstallFolder.AddInstallFolder(e);
		}
	}
}
Cg([s.sH], ce.prototype, "m_State", undefined);
Cg([s.XI.bound], ce.prototype, "OnRepairFolderFinished", null);
ce = Cg([o.PA], ce);
class ye {
	constructor(e, t) {
		this.m_nId = e;
		this.m_folder = t;
	}
	get nId() {
		return this.m_nId;
	}
	get nCapacity() {
		return this.m_folder.nCapacity;
	}
	get folder() {
		return this.m_folder;
	}
	get drive() {
		return null;
	}
	m_nId = null;
	m_folder = null;
}
class Se {
	constructor(e, t) {
		this.m_nId = e;
		this.m_drive = t;
	}
	get nId() {
		return this.m_nId;
	}
	get nCapacity() {
		return Number(this.drive.size_bytes);
	}
	get folder() {
		return null;
	}
	get drive() {
		return this.m_drive;
	}
	m_nId = null;
	m_drive = null;
}
function we() {
	const e = sV();
	const t = Ff();
	const r = VW();
	let n = [];
	let i = [];
	for (const t of e) {
		i.push(t.nFolderIndex);
		n.push(new ye(t.nFolderIndex, t));
	}
	if (r && t) {
		for (const e of t) {
			let e_id = e.id;
			while (i.includes(e_id)) {
				e_id++;
			}
			i.push(e_id);
			n.push(new Se(e_id, e));
		}
	}
	return n;
}
function Be(e) {
	const t = Cj(e?.folder);
	if (t !== null) {
		return t;
	} else {
		return e?.drive?.model;
	}
}
function ve() {
	const e = useContext(UeContext);
	return [e.nActiveStorageBackendId, e.fnSetActiveStorageBackend];
}
function Ie() {
	return OO()?.nFolderIndex;
}
function Ee(e) {
	if (Qn()) {
		return i.createElement(Me, {
			...e,
		});
	} else {
		return i.createElement(Te, {
			...e,
		});
	}
}
function Me(e) {
	const t = Qn();
	const r = we();
	const [n, a] = ve();
	const s = i.useCallback(
		(e) => {
			a(e);
		},
		[a],
	);
	return i.createElement(
		h.C,
		{
			className: L.PageableCarousel,
			bNoHeader: t,
		},
		(e, n) =>
			i.createElement(
				g.Q,
				{
					className: L.NewDLCImages,
					ref: e,
					fnUpdateArrows: n,
				},
				r.map((e) =>
					e.folder
						? i.createElement(Ce, {
								key: e.nId,
								backend: e,
							})
						: null,
				),
				r.map((e) =>
					e.drive
						? i.createElement(fe, {
								key: e.nId,
								backend: e,
							})
						: null,
				),
				!t &&
					i.createElement(
						v.Z,
						{
							focusable: true,
							className: A_1(L.InstallFolder, L.AddFolder),
							onClick: (e) => be(e, s),
						},
						i.createElement(E.AddContained, null),
					),
			),
	);
}
function Te(e) {
	const t = we();
	const [r, n] = ve();
	const a = [
		...t.map((e) => ({
			label: i.createElement(Re, {
				backend: e,
				bSelected: r === e.nId,
			}),

			data: e.nId,
		})),
		{
			label: i.createElement(
				"div",
				{
					className: L.AddFolderDropdownOption,
				},
				i.createElement(E.AddContained, null),
				(0, Localize)("#ContentManagement_AddDriveDropdownOption"),
			),
			data: "add",
		},
	];
	const s = i.useCallback(
		(e) => {
			n(e);
		},
		[n],
	);
	const o = i.useCallback(
		(e, t, r) => {
			if (e.data !== "add") {
				n(e.data);
			} else {
				be(r, s);
			}
		},
		[n, s],
	);
	return i.createElement(
		"div",
		{
			className: A_1(L.DriveDropdownControl, L.TopMargin),
		},
		i.createElement(c.ZU, {
			rgOptions: a,
			selectedOption: r,
			strDropDownButtonClassName: L.DropdownOptionCtn,
			onChange: o,
		}),
	);
}
function Re(e) {
	const { backend, bSelected } = e;
	const t_folder = backend.folder;
	if (t_folder) {
		return i.createElement(
			"div",
			{
				className: A_1(
					L.InstallDropdownOption,
					bSelected && L.IsSelectedDropdownOption,
				),
			},
			i.createElement(W.EE, {
				folder: t_folder,
			}),
			i.createElement(
				"div",
				{
					className: L.DriveName,
				},
				i.createElement(W.Gc, {
					folder: t_folder,
				}),
				i.createElement(
					M.he,
					{
						direction: "bottom",
						toolTipContent: (0, Localize)("#ContentManagement_DefaultDrive"),
					},
					t_folder.bIsDefaultFolder && i.createElement(E.Star, null),
				),
			),
			i.createElement(
				"div",
				{
					className: L.DriveSize,
				},
				(0, Localize)(
					"#ContentManagement_SpaceFreeOf",
					dm(t_folder.nFreeSpace, 1),
					dm(t_folder.nCapacity, 1),
				),
				" ",
			),
		);
	} else {
		return null;
	}
}
function ke(e) {
	const { backend } = e;
	const r = Be(backend);
	const [n, a] = i.useState(0);
	SteamClient.Screenshots.GetTotalDiskSpaceUsage(
		backend?.folder?.strFolderPath,
	)?.then((e) => a(e));
	const s = yH(backend?.folder?.strFolderPath, true);
	const o = yH(backend?.folder?.strFolderPath, false);
	if (!backend) {
		return null;
	}

	const { folder, nCapacity } = backend;

	const c = folder ? folder.strFolderPath : r;
	const d = folder ? folder.nFreeSpace : backend.nCapacity;
	const A = folder ? folder.nUsedSize : 0;
	const p = folder ? folder.nDLCSize : 0;
	const g = folder ? folder.nStagedSize : 0;
	const h = folder ? folder.nWorkshopSize : 0;
	const f = folder ? folder.nShaderSize : 0;
	const b = s + o + n;
	const y = folder ? folder.nAppSize : 0;
	let S = nCapacity - A - g - d;
	if (S < 0) {
		S = 0;
	}
	const w = (y * 100) / nCapacity;
	const B = (p * 100) / nCapacity;
	const v = (h * 100) / nCapacity;
	const I = (S * 100) / nCapacity;
	const T = (g * 100) / nCapacity;
	const R = (f * 100) / nCapacity;
	const k = (b * 100) / nCapacity;
	return i.createElement(
		"div",
		{
			className: L.DriveUsage,
		},
		i.createElement(
			"div",
			{
				className: L.DriveName,
			},
			" ",
			c,
			" ",
		),
		i.createElement(
			"div",
			{
				className: L.DriveUsageIndicator,
			},
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageGames),
				style: {
					width: `${w}%`,
				},
			}),
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageDLC),
				style: {
					width: `${B}%`,
				},
			}),
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageWorkshop),
				style: {
					width: `${v}%`,
				},
			}),
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageUpdates),
				style: {
					width: `${T}%`,
				},
			}),
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageShader),
				style: {
					width: `${R}%`,
				},
			}),
			i.createElement("div", {
				className: A_1(L.DriveUsageBar, L.DriveUsageMedia),
				style: {
					width: `${k}%`,
				},
			}),
			i.createElement(M.m9, {
				toolTipContent: i.createElement(he, null),
				direction: "top",
				className: A_1(L.DriveUsageBar, L.DriveUsageOther),
				style: {
					width: `${I}%`,
				},
			}),
		),
		i.createElement(
			"div",
			{
				className: L.DriveUsageLabels,
			},
			y > 0 &&
				i.createElement(
					"div",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageGames),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByGames"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(y, 2),
						" ",
					),
				),
			p > 0 &&
				i.createElement(
					"span",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageDLC),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByDLC"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(p, 2),
						" ",
					),
				),
			h > 0 &&
				i.createElement(
					"span",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageWorkshop),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByWorkshop"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(h, 2),
						" ",
					),
				),
			g > 0 &&
				i.createElement(
					"span",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageUpdates),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByUpdates"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(g, 2),
						" ",
					),
				),
			f > 0 &&
				i.createElement(
					"span",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageShader),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByShaders"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(f, 2),
						" ",
					),
				),
			b > 0 &&
				i.createElement(
					"span",
					{
						className: L.AppUsageItem,
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageMedia),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_Media"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(b, 2),
						" ",
					),
				),
			S > 0 &&
				i.createElement(
					M.m9,
					{
						className: L.AppUsageItem,
						toolTipContent: i.createElement(he, null),
						direction: "top",
					},
					i.createElement("span", {
						className: A_1(L.DriveUsageDot, L.DriveUsageOtherDot),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, Localize)("#ContentManagement_UsedByOther"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.OtherInfo,
						},
						i.createElement(E.Information, null),
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						dm(S, 2),
						" ",
					),
				),
			i.createElement(
				"div",
				{
					className: L.AppUsageItem,
				},
				i.createElement("span", {
					className: A_1(L.DriveUsageDot, L.DriveUsageFreeSpace),
				}),
				i.createElement(
					"span",
					{
						className: L.DriveUsageText,
					},
					" ",
					(0, Localize)("#ContentManagement_FreeSpace"),
					" ",
				),
				i.createElement(
					"span",
					{
						className: L.DriveUsageNumber,
					},
					" ",
					dm(d, 2),
					" ",
				),
			),
		),
	);
}
function De(e) {
	const { folder } = e;
	const [r, n] = i.useState(true);
	const [a, s] = i.useState(8);
	const o = i.useCallback((e) => {
		s(e);
		n(e != 5);
	}, []);
	const c = Qn();
	let m = ((e) => {
		const t = yH(e?.strFolderPath, true);
		let r = GetEstimatedDiskSpace();
		const [n, a] = i.useState(0);
		SteamClient.Screenshots.GetTotalDiskSpaceUsage(e?.strFolderPath)?.then(
			(e) => a(e),
		);
		const [s, o] = i.useState(0);
		SteamClient.Screenshots.GetAllAppsLocalScreenshotsCount()?.then((e) =>
			o(e),
		);
		const l = yH(e?.strFolderPath, false);
		const c = Km().rgClipHandles?.length ?? 0;
		return i.useMemo(() => {
			let e = [];
			if (t > 0) {
				e.push({
					specialSection: 2,
					iconURL: zZ(0),
					nAppID: 0,
					strAppName: (0, Localize)("#ContentManagement_BR"),
					strSortAs: (0, Localize)("#ContentManagement_BR"),
					rtLastPlayed: 0,
					nUsedSize: t,
					nAppSize: 0,
					nDLCSize: r,
					nWorkshopSize: 0,
					nStagedSize: 0,
					nShaderSize: 0,
				});
			}
			if (l > 0) {
				e.push({
					specialSection: 3,
					iconURL: zZ(1),
					nAppID: 0,
					strAppName: (0, Localize)("#ContentManagement_Clips"),
					strSortAs: (0, Localize)("#ContentManagement_Clips"),
					rtLastPlayed: 0,
					nUsedSize: l,
					nAppSize: c,
					nDLCSize: 0,
					nWorkshopSize: 0,
					nStagedSize: 0,
					nShaderSize: 0,
				});
			}
			if (n > 0) {
				e.push({
					specialSection: 4,
					iconURL: zZ(2),
					nAppID: 0,
					strAppName: (0, Localize)("#ContentManagement_Screenshots"),
					strSortAs: (0, Localize)("#ContentManagement_Screenshots"),
					rtLastPlayed: 0,
					nUsedSize: n,
					nAppSize: s,
					nDLCSize: 0,
					nWorkshopSize: 0,
					nStagedSize: 0,
					nShaderSize: 0,
				});
			}
			return e;
		}, [t, l, c, r, n, s]);
	})(folder);
	if (!folder) {
		return null;
	}
	let p = folder.vecApps.filter((e) => !!A.tw.GetAppOverviewByAppID(e?.nAppID));
	p.push(...m);
	me(p, a, r);
	const g = p.length > 500;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: L.AppsGrid,
			},
			i.createElement(
				"div",
				{
					className: L.AppHeaderContainer,
				},
				i.createElement(
					"div",
					{
						className: L.AppHeader,
					},
					(0, Localize)("#ContentManagement_Items"),
					i.createElement(
						"div",
						{
							className: L.AppHeaderValue,
						},
						" ",
						folder.vecApps.length,
						" ",
					),
					i.createElement("div", {
						className: L.Rule,
					}),
					i.createElement(D.OJ, {
						presentation: "gamepadui",
						initialValue: a,
						rgOptions: [
							{
								data: 1,
								label: (0, Localize)("#Library_SortByAlphabetical"),
							},
							{
								data: 5,
								label: (0, Localize)("#Library_SortByLastPlayed"),
							},
							{
								data: 8,
								label: (0, Localize)("#Library_SortBySizeOnDisk"),
							},
						],
						onSortChangeCallback: o,
					}),
				),
			),
			i.createElement(
				v.Z,
				{
					className: L.LibraryInventory,
					onMoveUp: U.W7,
				},
				i.createElement(l.t$, null, ({ width, height }) =>
					i.createElement(l.B8, {
						className: L.AppList,
						rowHeight: (e) =>
							((e, t) => {
								let r = 0;
								if (!t) {
									if (e?.nWorkshopSize > 0) {
										r++;
									}
									if (e?.nDLCSize > 0) {
										r++;
									}
									if (e?.nShaderSize > 1048576) {
										r++;
									}
									if (e?.rtLastPlayed) {
										r++;
									}
								}
								return parseInt(ie[r]);
							})(p[e.index], c),
						rowCount: p.length,
						width: width,
						height: height,
						rowRenderer: (e) =>
							p[e.index]?.specialSection
								? i.createElement(xe, {
										key: e.key,
										app: p[e.index],
										style: e.style,
										folder: folder,
										bShowImage: !g,
									})
								: i.createElement(ze, {
										key: e.key,
										app: p[e.index],
										style: e.style,
										folder: folder,
										bShowImage: !g,
									}),
					}),
				),
			),
		),
		i.createElement(Le, null),
	);
}
function Ne(e) {
	const { backend } = e;
	if (backend?.folder) {
		return i.createElement(De, {
			folder: backend?.folder,
		});
	} else if (backend?.drive) {
		return i.createElement(Pe, {
			backend: backend,
		});
	} else {
		return null;
	}
}
function Fe(e) {
	let t = null;
	if (e.eResult === 53) {
		t = (0, Localize)("#ContentManagement_FormatError_Validate");
	} else {
		t = (0, Localize)("#ContentManagement_FormatError_Generic");
	}
	return i.createElement(m.KG, {
		strTitle: (0, Localize)(
			"#ContentManagement_FormatError_Title",
		).toUpperCase(),
		strDescription: i.createElement(
			"span",
			{
				style: {
					whiteSpace: "pre-line",
				},
			},
			" ",
			t,
			" ",
		),
		strOKButtonText: (0, Localize)("#ContentManagement_FormatError_Dismiss"),
		closeModal: e.closeModal,
	});
}
function Ge(e) {
	const { sName, nDriveId, closeModal } = e;
	const a = CN(nDriveId);
	const s = a?.model ?? sName;
	const [o, l] = i.useState(s);
	const d = R7();
	const A = a.media_type === 4;
	const [p, g] = useState(A);
	const h = i.useCallback(() => {
		V._r.Adopt(nDriveId, o, p).then((e) => {
			if (e != 1) {
				pg(
					i.createElement(Fe, {
						eResult: e,
					}),
					d.ownerWindow ?? window,
				);
			}
		});
	}, [nDriveId, o, d, p]);
	const C = i.useCallback(() => {
		closeModal();
		pg(
			i.createElement(m.o0, {
				strTitle: (0, Localize)("#ContentManagement_Format_Title"),
				strDescription: (0, Localize)("#ContentManagement_Format_Confirm"),
				onOK: h,
			}),
			d.ownerWindow ?? window,
		);
	}, [h, d, closeModal]);
	return i.createElement(
		m.eV,
		{
			onCancel: closeModal,
		},
		i.createElement(
			c.Y9,
			null,
			(0, Localize)("#ContentManagement_Format_Title"),
		),
		i.createElement(
			c.nB,
			null,
			i.createElement(
				c.f3,
				null,
				i.createElement(c.qq, {
					label: (0, Localize)("#ContentManagement_Format_SetLabel"),
					value: o,
					maxLength: 128,
					onChange: (e) => l(e.target.value),
					bShowClearAction: true,
				}),
				i.createElement(c.RF, {
					label: (0, Localize)("#ContentManagement_Format_Validate"),
					checked: p,
					onChange: (e) => g(e),
				}),
			),
			i.createElement(
				c.wi,
				null,
				i.createElement(c.CB, {
					onOK: C,
					onCancel: closeModal,
					focusButton: "primary",
				}),
			),
		),
	);
}
function Oe(e, t, r) {
	pg(
		i.createElement(Ge, {
			sName: e,
			nDriveId: t,
		}),
		r ?? window,
	);
}
function Pe(e) {
	const { backend } = e;
	const r = backend?.drive;
	if (r) {
		if (backend.folder) {
			return null;
		} else {
			return i.createElement(
				"div",
				{
					className: L.StorageDriveInfo,
				},
				i.createElement(
					"div",
					{
						className: L.MessageContainer,
					},
					i.createElement(
						"span",
						{
							className: L.Message,
						},
						(0, Localize)("#ContentManagement_FormatDrive_Message"),
						" ",
					),
					i.createElement("br", null),
					i.createElement(
						"span",
						{
							className: L.HowTo,
						},
						LocalizeReact(
							"#ContentManagement_FormatDrive_HowTo",
							i.createElement(K.W, {
								className: L.Glyph,
								button: X.g4.Y,
							}),
						),
						" ",
					),
				),
			);
		}
	} else {
		return null;
	}
}
function Le(e) {
	const { rSelectedAppIDs, nSelectedAppsSize, fnClearSelectedApps } =
		useContext(UeContext);
	const t_length = rSelectedAppIDs.length;
	const s = t_length > 0;
	const o = iS();
	const l = i.useCallback(
		(e) => {
			const r = GetOwningWindowForEvent(e);
			Uo(rSelectedAppIDs, r, false);
			fnClearSelectedApps();
		},
		[rSelectedAppIDs, fnClearSelectedApps],
	);
	const m = i.useCallback(
		(e) => {
			const r = GetOwningWindowForEvent(e);
			P_1(rSelectedAppIDs, r);
			fnClearSelectedApps();
		},
		[fnClearSelectedApps, rSelectedAppIDs],
	);
	if (Qn()) {
		return null;
	} else {
		return i.createElement(
			v.Z,
			{
				className: L.AppActionBar,
			},
			i.createElement(
				"div",
				null,
				s &&
					i.createElement(
						"div",
						{
							className: L.AppActionSelected,
						},
						LocalizePlural(
							"#ContentManagement_SelectedApps",
							t_length,
							dm(nSelectedAppsSize),
						),
					),
			),
			i.createElement(
				"div",
				{
					className: L.AppActionBarButtons,
				},
				i.createElement(
					c.$n,
					{
						className: A_1(L.ActionButton, s && L.ActionButtonActive),
						disabled: !s,
						onClick: l,
					},
					(0, Localize)("#ContentManagement_UninstallButton"),
				),
				i.createElement(
					c.$n,
					{
						className: A_1(L.ActionButton, s && o && L.ActionButtonActive),
						disabled: !s || !o,
						onClick: m,
					},
					(0, Localize)("#ContentManagement_MoveButton"),
				),
			),
		);
	}
}
function ze(e) {
	const { app, style, folder, bShowImage } = e;
	const { rSelectedAppIDs, fnUpdateSelectedApps } = useContext(UeContext);
	const l = Qn();
	const m = br();
	const g = iS();
	let h = {
		[I.pR.SECONDARY]: (0, Localize)("#ContentManagement_UninstallButton"),
		[I.pR.OK]: null,
	};
	if (g) {
		h[I.pR.OPTIONS] = (0, Localize)("#ContentManagement_MoveApps_Title");
	}
	const M = Co(app?.nAppID);
	const T = i.useCallback(
		(e) => {
			if (!l) {
				return;
			}
			const r = GetOwningWindowForEvent(e);
			switch (e.detail.button) {
				case I.pR.SECONDARY: {
					Uo([app?.nAppID], r, false);
					e.stopPropagation();
					break;
				}
				case I.pR.OPTIONS: {
					if (!g) {
						break;
					}
					P_1([app?.nAppID], r);
					e.stopPropagation();
				}
			}
		},
		[l, app?.nAppID, g],
	);
	const R = i.useCallback(
		(e) => {
			fnUpdateSelectedApps(e, app?.nAppID, app?.nUsedSize);
		},
		[app, fnUpdateSelectedApps],
	);
	const k = i.useCallback(
		(e) => {
			const r = rSelectedAppIDs.includes(app?.nAppID);
			R(!r);
			e.stopPropagation();
		},
		[app, rSelectedAppIDs, R],
	);
	const D = i.useCallback(
		(e) => {
			m.AppProperties(app?.nAppID, S.ho.Dlc);
			e.stopPropagation();
		},
		[app, m],
	);
	const N = i.useCallback(
		(e) => {
			m.AppProperties(app?.nAppID, S.ho.Workshop);
			e.stopPropagation();
		},
		[app, m],
	);
	const F = i.useCallback(
		(e) => {
			m.AppProperties(app?.nAppID, S.ho.LocalFiles);
			e.stopPropagation();
		},
		[app, m],
	);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			"data-appid": app?.nAppID,
			className: L.AppBody,
			style: style,
			actionDescriptionMap: h,
			onClick: k,
			onButtonDown: T,
		},
		M &&
			bShowImage &&
			i.createElement(
				"div",
				{
					className: L.AppBodyPortrait,
				},
				i.createElement(f.TK, {
					app: M,
					bShowFriendsAsIcons: false,
					bFeatured: true,
					bHideFooter: true,
					bHideBanners: true,
					bHideCopyCount: true,
					context: 7,
				}),
			),
		i.createElement(
			"div",
			{
				className: L.AppBodyInfo,
			},
			i.createElement(
				"div",
				{
					className: L.AppBodyLeft,
				},
				i.createElement(
					"div",
					{
						className: L.AppName,
					},
					" ",
					app?.strAppName,
					" ",
				),
				i.createElement(
					"div",
					{
						className: L.AppInfo,
					},
					app?.nDLCSize > 0 &&
						i.createElement(
							"div",
							{
								className: A_1(L.AppInfoItem, L.AppUsageLink),
								onClick: D,
							},
							i.createElement(E.DLC, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, Localize)("#ContentManagement_UsedByDLC"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								dm(app?.nDLCSize, 2),
								" ",
							),
						),
					app?.nWorkshopSize > 0 &&
						i.createElement(
							"div",
							{
								className: A_1(L.AppInfoItem, L.AppUsageLink),
								onClick: N,
							},
							i.createElement(E.Workshop, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, Localize)("#ContentManagement_UsedByWorkshop"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								dm(app?.nWorkshopSize, 2),
								" ",
							),
						),
					app?.nShaderSize > 1048576 &&
						i.createElement(
							"div",
							{
								className: L.AppInfoItem,
							},
							i.createElement(E.Shader, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, Localize)("#ContentManagement_UsedByShaders"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								dm(app?.nShaderSize, 2),
								" ",
							),
						),
					app?.rtLastPlayed != 0 &&
						i.createElement(
							"div",
							{
								className: L.AppInfoItem,
							},
							i.createElement(E.Clock, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, Localize)("#ContentManagement_LastPlayed"),
							),
							i.createElement(
								"div",
								{
									className: L.AppUsageValue,
								},
								" ",
								LocalizeRtime32ToShortDate(app?.rtLastPlayed),
								" ",
							),
						),
				),
			),
			M?.display_status != 2 &&
				i.createElement(
					"div",
					{
						className: L.AppBodyRight,
					},
					i.createElement(
						"div",
						{
							className: L.AppSize,
							onClick: F,
						},
						dm(app?.nUsedSize, 2),
					),
					!l &&
						i.createElement(
							"div",
							{
								className: L.AppSelected,
							},
							i.createElement(c.Yh, {
								disabled: !folder.bIsMounted,
								checked: rSelectedAppIDs.includes(app?.nAppID),
							}),
						),
				),
			M?.display_status == 2 &&
				i.createElement(
					"div",
					{
						className: L.AppBodyRight,
					},
					" ",
					(0, Localize)("#DisplayStatus_Uninstalling"),
					" ",
				),
		),
	);
}
function xe(e) {
	const { app, style, bShowImage } = e;
	const a = Qn();
	const s = br();
	let o = {
		[I.pR.SECONDARY]:
			app.specialSection == 2
				? (0, Localize)("#ContentManagement_Delete")
				: null,
		[I.pR.OK]: (0, Localize)(
			app.specialSection == 2
				? "#ContentManagement_GoToSettings"
				: "#ContentManagement_Browse",
		),
	};
	const { rgApps } = z_1();
	const c = W6();
	const m = i.useCallback(
		(e) => {
			if (a) {
				switch (e.detail.button) {
					case I.pR.OK: {
						if (app.specialSection == 2) {
							c.push($.BV.Settings.GameRecording());
						} else {
							c.push($.BV.Media.Grid());
						}
						e.stopPropagation();
						break;
					}
					case I.pR.SECONDARY: {
						if (app.specialSection == 2) {
							f5(rgApps.map((e) => e.game_id));
						}
						e.stopPropagation();
					}
				}
			}
		},
		[a, c, app.specialSection, rgApps],
	);
	const A = () => {
		let e;
		switch (app.specialSection) {
			case 2: {
				e = "recording";
				break;
			}
			case 3: {
				e = "clip";
				break;
			}
			case 4: {
				e = "screenshot";
			}
		}
		s.Media.Grid(
			e
				? {
						state: {
							filter: {
								mediaType: e,
							},
						},
					}
				: undefined,
		);
	};
	const p =
		app.specialSection == 2
			? () => c.replace($.BV.Settings.GameRecording())
			: A;
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			"data-appid": app?.nAppID,
			className: L.AppBody,
			style: style,
			actionDescriptionMap: o,
			onButtonDown: m,
		},
		bShowImage &&
			i.createElement(
				"div",
				{
					className: A_1(L.AppBodyPortrait, L.GRPortrait),
				},
				i.createElement("img", {
					className: L.LandscapeImageContainer,
					src: app.iconURL,
					onClick: A,
				}),
				i.createElement("div", {
					className: L.LandscapeItemBoxShine,
				}),
			),
		i.createElement(
			"div",
			{
				className: L.AppBodyInfo,
			},
			i.createElement(
				"div",
				{
					className: L.AppBodyLeft,
				},
				i.createElement(
					"div",
					{
						className: L.AppName,
					},
					" ",
					app?.strAppName,
					" ",
				),
				i.createElement(
					"div",
					{
						className: L.AppInfo,
					},
					app.nDLCSize > 0 &&
						i.createElement(
							"div",
							{
								className: A_1(L.AppInfoItem, L.AppUsageLink),
								onClick: () => c.replace($.BV.Settings.GameRecording()),
							},
							i.createElement(E.Video, null),
							i.createElement(
								"span",
								{
									className: L.SpecialSectionText,
								},
								(0, Localize)("#ContentManagement_TotalPossibleRecording"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								dm(app.nDLCSize, {
									bUseBinary1K: false,
								}),
								" ",
							),
						),
					app.nAppSize > 0 &&
						i.createElement(
							"div",
							{
								className: A_1(L.AppInfoItem, L.AppUsageLink),
								onClick: A,
							},
							i.createElement(E.SdCard, null),
							i.createElement(
								"span",
								{
									className: L.SpecialSectionText,
								},
								(0, Localize)(
									app.specialSection == 4
										? "#ContentManagement_ScreenshotCount"
										: "#ContentManagement_ClipCount",
								),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								app.nAppSize,
								" ",
							),
						),
				),
			),
			i.createElement(
				"div",
				{
					className: L.AppBodyRight,
				},
				i.createElement(
					"div",
					{
						className: L.AppSize,
						onClick: p,
					},
					dm(app?.nUsedSize, 2),
				),
				!a &&
					i.createElement("div", {
						className: L.NoCheckboxSpacer,
					}),
			),
		),
	);
}
const UeContext = i.createContext(undefined);
function We(e) {
	const { children } = e;
	const [r, n] = i.useState([]);
	const [a, s] = i.useState(0);
	const o = i.useCallback(
		(e, t, i) => {
			const a = r.includes(t);
			if (e) {
				if (a) {
					return;
				}
				n((e) => [...e, t]);
				s((e) => e + i);
			} else {
				if (!a) {
					return;
				}
				n((e) => e.filter((e) => e != t));
				s((e) => e - i);
			}
		},
		[n, s, r],
	);
	const l = i.useCallback(() => {
		n([]);
		s(0);
	}, [n, s]);
	const c = Ie();
	const [m, u] = i.useState(c);
	const d = i.useMemo(
		() => ({
			rSelectedAppIDs: r,
			nSelectedAppsSize: a,
			fnUpdateSelectedApps: o,
			fnClearSelectedApps: l,
			nActiveStorageBackendId: m,
			fnSetActiveStorageBackend: u,
		}),
		[r, a, o, l, m, u],
	);
	return i.createElement(
		UeContext.Provider,
		{
			value: d,
		},
		children,
	);
}
function Ve(e) {
	const [t, r] = i.useState(true);
	if (t) {
		return i.createElement(ne.g5, {
			blockReason: e.blockReason,
			feature: 7,
			closeModal: () => r(false),
		});
	} else {
		return null;
	}
}
export function rN(e) {
	const t = l9(7);
	if (t != 0) {
		return i.createElement(Ve, {
			blockReason: t,
		});
	} else {
		return i.createElement(
			We,
			null,
			i.createElement(je, {
				...e,
			}),
		);
	}
}
const je = i.memo((e) => {
	const { bInPagedSettingsDialog } = e;
	const r = Ie();
	const [n, a] = ve();
	const s = (() => {
		const [e] = ve();
		return we().find((t) => t.nId == e);
	})();
	i.useEffect(() => {
		p.fN.OnInstallFolderChanges(0);
	}, [a]);
	i.useEffect(() => {
		if (!s) {
			a(r);
		}
	}, [s, a, r]);
	return i.createElement(
		c.nB,
		{
			className: A_1(
				L.NoScroll,
				L.ContentManagement,
				bInPagedSettingsDialog && L.InPagedSettings,
			),
		},
		!bInPagedSettingsDialog &&
			i.createElement(
				"div",
				{
					className: L.Header,
				},
				i.createElement(
					"div",
					{
						className: L.Title,
					},
					" ",
					(0, Localize)("#ContentManagement_Title"),
					" ",
				),
			),
		!s &&
			i.createElement(F.t, {
				size: "xlarge",
				position: "center",
			}),
		s &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(Ee, null),
				i.createElement(
					Z.tH,
					null,
					i.createElement(
						"div",
						{
							className: L.LibraryContent,
						},
						i.createElement(
							"div",
							{
								className: L.LibraryHeader,
							},
							i.createElement(ke, {
								backend: s,
							}),
							i.createElement(ge, {
								folder: s?.folder,
							}),
						),
						i.createElement(Ne, {
							backend: s,
						}),
					),
				),
			),
	);
});
function qe(e) {
	return i.createElement(
		m.x_,
		null,
		i.createElement(rN, {
			...e,
		}),
	);
}
