var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require(/*webcrack:missing*/ "./68120.js");
var c = require("./64608.js");
var m = require("./10606.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require("./96593.js");
var p = require("./73317.js");
var g = require("./26271.js");
var h = require("./4584.js");
var C = require("./34428.js");
var _ = require(/*webcrack:missing*/ "./90765.js");
var f = require("./30496.js");
var b = require(/*webcrack:missing*/ "./11010.js");
var y = require(/*webcrack:missing*/ "./54644.js");
var S = require("./13656.js");
var w = require("./19731.js");
var B = require("./49206.js");
var v = require(/*webcrack:missing*/ "./69164.js");
var I = require(/*webcrack:missing*/ "./61657.js");
var E = require("./35488.js");
var M = require(/*webcrack:missing*/ "./98995.js");
var T = require(/*webcrack:missing*/ "./31084.js");
var R = require(/*webcrack:missing*/ "./88750.js");
var k = require("./13869.js");
var D = require("./33000.js");
var N = require("./51095.js");
var F = require(/*webcrack:missing*/ "./26853.js");
var G = require(/*webcrack:missing*/ "./24892.js");
var O = G;
var P = require("./89279.js");
var L = P;
var z = require("./80100.js");
var x = z;
var U = require(/*webcrack:missing*/ "./15181.js");
var W = require("./88769.js");
var V = require("./24496.js");
var H = require(/*webcrack:missing*/ "./11131.js");
var j = require("./78110.js");
var q = require("./18869.js");
var Q = require("./13688.js");
var Z = require(/*webcrack:missing*/ "./42318.js");
var Y = require(/*webcrack:missing*/ "./43691.js");
var K = require("./53622.js");
var X = require("./43014.js");
var J = require("./91720.js");
var $ = require("./18057.js");
var ee = require("./4069.js");
var te = require(/*webcrack:missing*/ "./49519.js");
var re = require("./5640.js");
var ne = require("./28934.js");
const ie = [
	L.ItemHeight,
	L.ItemHeight,
	L.TwoLineItemHeight,
	L.ThreeLineItemHeight,
	L.FourLineItemHeight,
];
export function f_(e) {
	const t = (0, Q.k1)();
	const r = (0, H.R7)();
	let n = i.createElement(m.o0, {
		strTitle: (0, u.we)("#ContentManagement_LowDiskSpaceDialog_Title"),
		strDescription: (0, u.we)(
			"#ContentManagement_LowDiskSpaceDialog_Desc",
			(0, u.we)("#MainTabsSettings"),
			(0, u.we)("#Settings_Page_Storage"),
		),
		strOKButtonText: (0, u.we)("#Installer_ManageStorage"),
		onOK: () => t.Settings("Storage"),
	});
	(0, k.pg)(n, r.ownerWindow ?? window);
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
	const n = (0, u.we)("#ContentManagement_Title");
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
	const { rPotentialFolders: t, closeModal: r, fnOnAddFolder: n } = e;
	const [a, s] = i.useState(null);
	const o = [
		...t.map((e) => ({
			label: (0, u.PP)(
				"#ContentManagement_AddFolder_AvailableSpace",
				i.createElement(W.Gc, {
					folder: e,
				}),
				(0, C.dm)(e.nFreeSpace ?? 0, 1),
				(0, C.dm)(e.nCapacity ?? 0, 1),
			),
			data: e.strFolderPath,
		})),
		{
			label: (0, u.we)("#ContentManagement_AddFolder_Browse"),
			data: "",
		},
	];
	const [l, d] = i.useState(t[0].strFolderPath);
	const A = i.useCallback(async () => {
		try {
			let e = l;
			if (
				e === "" &&
				((e = await SteamClient.System.OpenFileDialog({
					strTitle: (0, u.we)("#ContentManagement_DirectoryPicker_Title"),
					bChooseDirectory: true,
				})),
				!e)
			) {
				return;
			}
			const t = await SteamClient.InstallFolder.AddInstallFolder(e);
			n(t);
			r();
		} catch (e) {
			if (e.result != 52) {
				s((0, u.we)("#ContentManagement_Error_" + e.message));
			}
		}
	}, [s, n, r, l]);
	return i.createElement(
		m.eV,
		{
			className: L.SaveCollectionContainer,
			onCancel: r,
		},
		i.createElement(c.Y9, null, (0, u.we)("#ContentManagement_AddFolder_Text")),
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
					onCancel: r,
					onOK: A,
					strOKText: (0, u.we)("#ContentManagement_AddFolder_OK"),
				}),
			),
		),
	);
}
let le = class extends i.Component {
	m_strLabelName = "";
	constructor(e) {
		super(e);
		(0, s.Gn)(this);
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
			i.createElement(c.Y9, null, (0, u.we)("#ContentManagement_RenameDrive")),
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
						(0, u.we)("#ContentManagement_RenameDriveText"),
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
(0, n.Cg)([s.sH], le.prototype, "m_strLabelName", undefined);
(0, n.Cg)([a.oI], le.prototype, "onTextChanged", null);
(0, n.Cg)([a.oI], le.prototype, "onSaveLabel", null);
le = (0, n.Cg)([o.PA], le);
let ce = class extends i.Component {
	m_State = "Starting";
	constructor(e) {
		super(e);
		(0, s.Gn)(this);
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
			i.createElement(c.Y9, null, (0, u.we)("#ContentManagement_RepairFolder")),
			i.createElement(
				c.nB,
				null,
				i.createElement(
					c.a3,
					null,
					(0, u.we)(
						"#ContentManagement_RepairFolder_Text",
						this.props.drive.strFolderPath,
					),
					this.m_State == "Working" &&
						i.createElement(F.t, {
							size: "medium",
							position: "center",
						}),
					this.m_State == "Done" &&
						(0, u.we)("#ContentManagement_RepairFolder_Done"),
					this.m_State == "Failed" &&
						(0, u.we)("#ContentManagement_RepairFolder_Failed"),
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
						(0, u.we)("#Button_Close"),
					),
				),
			),
		);
	}
};
function me(e, t, r) {
	if (t == 5) {
		e.sort(
			(function (e) {
				let t = e ? 1 : -1;
				return (e, r) => t * (e.rtLastPlayed - r.rtLastPlayed);
			})(r),
		);
	} else if (t == 1) {
		e.sort(
			(function (e) {
				let t = e ? 1 : -1;
				return (e, r) => t * (0, N.lY)(e.strSortAs, r.strSortAs);
			})(r),
		);
	} else {
		e.sort(
			(function (e) {
				let t = e ? 1 : -1;
				return (e, r) => t * (r.nUsedSize - e.nUsedSize);
			})(r),
		);
	}
}
function ue(e) {
	let t = null;
	if (e.eResult === 10) {
		t = (0, u.we)("#ContentManagement_Unmount_Error_Busy");
	} else {
		t = (0, u.we)("#ContentManagement_Unmount_Error_Generic");
	}
	return i.createElement(m.KG, {
		strTitle: (0, u.we)("#ContentManagement_Unmount_Error_Title").toUpperCase(),
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
		strOKButtonText: (0, u.we)("#ContentManagement_Unmount_Error_Dismiss"),
		closeModal: e.closeModal,
	});
}
function de(e) {
	const { folder: t, closeModal: r } = e;
	const n = (0, H.R7)().ownerWindow ?? window;
	const a = (0, W.Cj)(t);
	const s = i.useCallback(async () => {
		try {
			await SteamClient.InstallFolder.RemoveInstallFolder(t.nFolderIndex);
			r();
		} catch (e) {
			r();
			let t = Number(e.message);
			let a = "Steam";
			if (t > 7) {
				let e = A.tw.GetAppOverviewByAppID(t);
				if (e) {
					a = e.display_name;
				}
			}
			(0, k.pg)(
				i.createElement(m.o0, {
					bAlertDialog: true,
					strDescription: (0, u.we)("#ContentManagement_RemoveDriveFailed", a),
				}),
				n,
				{},
			);
		}
	}, [t, n, r]);
	return i.createElement(m.o0, {
		strTitle: (0, u.we)("#ContentManagement_RemoveDrive_ConfirmTitle"),
		strDescription: (0, u.we)("#ContentManagement_RemoveDrive_ConfirmDesc", a),
		onOK: () => s(),
		onCancel: () => r(),
	});
}
function Ae(e) {
	const { folder: t, fnEject: r, fnFormat: n } = e;
	const a = (0, V.De)();
	const s = r !== null && a;
	const o = (0, V.VW)();
	const l = n !== null && o;
	const c = t.nFolderIndex == 0;
	const m = t.bIsMounted;
	const d = t.bIsDefaultFolder;
	t.bIsFixed;
	if (t.vecApps.length == 0) {
		t.nFolderIndex;
	}
	const A = !Y.TS.IN_GAMESCOPE;
	return i.createElement(
		R.tz,
		null,
		m &&
			!d &&
			i.createElement(
				R.kt,
				{
					onSelected: () =>
						SteamClient.InstallFolder.SetDefaultInstallFolder(t.nFolderIndex),
				},
				(0, u.we)("#ContentManagement_MakeDefault"),
			),
		!c &&
			s &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) => r(e),
				},
				(0, u.we)("#ContentManagement_Unmount"),
			),
		!c &&
			l &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) => n(e),
				},
				(0, u.we)("#ContentManagement_FormatDrive"),
			),
		A &&
			m &&
			i.createElement(
				R.kt,
				{
					onSelected: () =>
						SteamClient.InstallFolder.BrowseFilesInFolder(t.nFolderIndex),
				},
				(0, u.we)("#ContentManagement_BrowseFolder"),
			),
		!m &&
			i.createElement(
				R.kt,
				{
					onSelected: () => SteamClient.InstallFolder.RefreshFolders(),
				},
				(0, u.we)("#ContentManagement_RefreshDrive"),
			),
		m &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						(function (e, t) {
							const r = (0, y.uX)(e);
							(0, k.pg)(
								i.createElement(ce, {
									drive: t,
								}),
								r,
								{
									bNeverPopOut: true,
								},
							);
						})(e, t),
				},
				(0, u.we)("#ContentManagement_RepairFolder"),
			),
		m &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						(function (e, t) {
							const r = (0, y.uX)(e);
							(0, k.pg)(
								i.createElement(le, {
									drive: t,
								}),
								r,
								{},
							);
						})(e, t),
				},
				(0, u.we)("#ContentManagement_RenameDrive"),
			),
		m &&
			!c &&
			i.createElement(
				R.kt,
				{
					onSelected: (e) =>
						(function (e, t) {
							const r = (0, y.uX)(e);
							(0, k.pg)(
								i.createElement(de, {
									folder: t,
								}),
								r,
								{},
							);
						})(e, t),
				},
				(0, u.we)("#ContentManagement_RemoveDrive"),
			),
	);
}
function pe(e, t, r, n) {
	(0, T.lX)(
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
			strClassName: (0, _.A)(O.contextMenu, x.LibraryContextMenu),
		},
	);
}
function ge(e) {
	const { folder: t } = e;
	const r = (0, d.Qn)();
	const n = i.useCallback(
		(e) => {
			pe(e, t);
		},
		[t],
	);
	if (t) {
		if (r) {
			return null;
		} else {
			return i.createElement(
				M.he,
				{
					direction: "bottom",
					className: L.DriveSettingsButton,
					onClick: n,
					toolTipContent: (0, u.we)("#ContentManagement_DriveSettings"),
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
			(0, u.we)("#ContentManagement_OtherToolTip_Header"),
		),
		i.createElement(
			"div",
			{
				className: L.OtherToolTipText,
			},
			(0, u.we)("#ContentManagement_OtherToolTip_Description"),
		),
	);
}
function Ce(e) {
	const { backend: t } = e;
	const [r, n] = ve();
	const a = t.folder;
	const s = t.nId == r;
	const o = a.bIsDefaultFolder;
	const l = (0, V.V)(a.strFolderPath);
	const c = l?.is_unmounting || false;
	const m = Be(t);
	const d = l?.drive_id;
	const A = {
		[I.pR.SECONDARY]: (0, u.we)("#ContentManagement_MakeDefault"),
		[I.pR.OPTIONS]: (0, u.we)("#ContentManagement_Folder_AdvancedOptions"),
	};
	const p = i.useCallback(
		async (e) => {
			const t = await V._r.Unmount(l.id);
			if (t != 1) {
				(0, k.pg)(
					i.createElement(ue, {
						eResult: t,
					}),
					(0, y.uX)(e),
				);
			}
		},
		[l],
	);
	const g = i.useCallback(
		async (e) => {
			Oe(m, d, (0, y.uX)(e));
		},
		[m, d],
	);
	const h = i.useCallback(
		async (e) => {
			switch (e.detail.button) {
				case I.pR.SECONDARY:
					SteamClient.InstallFolder.SetDefaultInstallFolder(a.nFolderIndex);
					e.stopPropagation();
					break;
				case I.pR.OPTIONS:
					pe(e, a, p, d ? g : null);
					e.stopPropagation();
			}
		},
		[a, p, g, d],
	);
	const f = i.useCallback(() => {
		n(t.nId);
	}, [t, n]);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			className: (0, _.A)(L.InstallFolder, s && L.IsSelected),
			actionDescriptionMap: A,
			onFocus: f,
			onActivate: f,
			onButtonDown: (e) => h(e),
		},
		i.createElement(W.EE, {
			folder: a,
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
				o && i.createElement(E.Star, null),
			),
			i.createElement(
				"div",
				{
					className: L.DriveSize,
				},
				(0, u.we)(
					"#ContentManagement_SpaceFreeOf",
					(0, C.dm)(a.nFreeSpace, 1),
					(0, C.dm)(a.nCapacity, 1),
				),
				" ",
			),
		),
	);
}
function _e(e) {
	const { drive: t } = e;
	if (t.adopt_stage != 1) {
		return i.createElement(E.Spinner, null);
	} else if (t.is_ejectable) {
		return i.createElement(E.SdCard, null);
	} else {
		return i.createElement(E.HardDrive, null);
	}
}
function fe(e) {
	const { backend: t } = e;
	const [r, n] = ve();
	const a = Be(t);
	const s = t.drive;
	const o = t.nId == r;
	const l = i.useCallback(() => {
		n(t.nId);
	}, [t, n]);
	const c = {
		[I.pR.OPTIONS]: (0, u.we)("#ContentManagement_Format"),
	};
	const m = i.useCallback(
		async (e) => {
			if (e.detail.button === I.pR.OPTIONS) {
				Oe(a, s.id, (0, y.uX)(e));
				e.stopPropagation();
			}
		},
		[s, a],
	);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			className: (0, _.A)(L.InstallFolder, o && L.IsSelected),
			onFocus: l,
			onActivate: l,
			actionDescriptionMap: c,
			onButtonDown: (e) => m(e),
		},
		i.createElement(_e, {
			drive: s,
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
				(0, u.we)(
					"#ContentManagement_SpaceFreeOf",
					(0, C.dm)(Number(s.size_bytes), 1),
					(0, C.dm)(Number(s.size_bytes), 1),
				),
				" ",
			),
		),
	);
}
async function be(e, t) {
	const r = (0, y.uX)(e);
	const n = await SteamClient.InstallFolder.GetPotentialFolders();
	if (n.length > 0) {
		(0, k.pg)(
			i.createElement(oe, {
				rPotentialFolders: n,
				fnOnAddFolder: t,
			}),
			r,
			{},
		);
	} else {
		const e = await SteamClient.System.OpenFileDialog({
			strTitle: (0, u.we)("#ContentManagement_DirectoryPicker_Title"),
			bChooseDirectory: true,
		});
		if (e) {
			SteamClient.InstallFolder.AddInstallFolder(e);
		}
	}
}
(0, n.Cg)([s.sH], ce.prototype, "m_State", undefined);
(0, n.Cg)([s.XI.bound], ce.prototype, "OnRepairFolderFinished", null);
ce = (0, n.Cg)([o.PA], ce);
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
	const e = (0, p.sV)();
	const t = (0, V.Ff)();
	const r = (0, V.VW)();
	let n = [];
	let i = [];
	for (const t of e) {
		i.push(t.nFolderIndex);
		n.push(new ye(t.nFolderIndex, t));
	}
	if (r && t) {
		for (const e of t) {
			let t = e.id;
			while (i.indexOf(t) >= 0) {
				t++;
			}
			i.push(t);
			n.push(new Se(t, e));
		}
	}
	return n;
}
function Be(e) {
	const t = (0, W.Cj)(e?.folder);
	if (t !== null) {
		return t;
	} else {
		return e?.drive?.model;
	}
}
function ve() {
	const e = (0, i.useContext)(Ue);
	return [e.nActiveStorageBackendId, e.fnSetActiveStorageBackend];
}
function Ie() {
	return (0, p.OO)()?.nFolderIndex;
}
function Ee(e) {
	if ((0, d.Qn)()) {
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
	const t = (0, d.Qn)();
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
							className: (0, _.A)(L.InstallFolder, L.AddFolder),
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
				(0, u.we)("#ContentManagement_AddDriveDropdownOption"),
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
			className: (0, _.A)(L.DriveDropdownControl, L.TopMargin),
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
	const { backend: t, bSelected: r } = e;
	const n = t.folder;
	if (n) {
		return i.createElement(
			"div",
			{
				className: (0, _.A)(
					L.InstallDropdownOption,
					r && L.IsSelectedDropdownOption,
				),
			},
			i.createElement(W.EE, {
				folder: n,
			}),
			i.createElement(
				"div",
				{
					className: L.DriveName,
				},
				i.createElement(W.Gc, {
					folder: n,
				}),
				i.createElement(
					M.he,
					{
						direction: "bottom",
						toolTipContent: (0, u.we)("#ContentManagement_DefaultDrive"),
					},
					n.bIsDefaultFolder && i.createElement(E.Star, null),
				),
			),
			i.createElement(
				"div",
				{
					className: L.DriveSize,
				},
				(0, u.we)(
					"#ContentManagement_SpaceFreeOf",
					(0, C.dm)(n.nFreeSpace, 1),
					(0, C.dm)(n.nCapacity, 1),
				),
				" ",
			),
		);
	} else {
		return null;
	}
}
function ke(e) {
	const { backend: t } = e;
	const r = Be(t);
	const [n, a] = i.useState(0);
	SteamClient.Screenshots.GetTotalDiskSpaceUsage(
		t?.folder?.strFolderPath,
	)?.then((e) => a(e));
	const s = (0, J.yH)(t?.folder?.strFolderPath, true);
	const o = (0, J.yH)(t?.folder?.strFolderPath, false);
	if (!t) {
		return null;
	}
	const l = t.folder;
	const c = l ? l.strFolderPath : r;
	const m = t.nCapacity;
	const d = l ? l.nFreeSpace : t.nCapacity;
	const A = l ? l.nUsedSize : 0;
	const p = l ? l.nDLCSize : 0;
	const g = l ? l.nStagedSize : 0;
	const h = l ? l.nWorkshopSize : 0;
	const f = l ? l.nShaderSize : 0;
	const b = s + o + n;
	const y = l ? l.nAppSize : 0;
	let S = m - A - g - d;
	if (S < 0) {
		S = 0;
	}
	const w = (y * 100) / m;
	const B = (p * 100) / m;
	const v = (h * 100) / m;
	const I = (S * 100) / m;
	const T = (g * 100) / m;
	const R = (f * 100) / m;
	const k = (b * 100) / m;
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
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageGames),
				style: {
					width: w + "%",
				},
			}),
			i.createElement("div", {
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageDLC),
				style: {
					width: B + "%",
				},
			}),
			i.createElement("div", {
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageWorkshop),
				style: {
					width: v + "%",
				},
			}),
			i.createElement("div", {
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageUpdates),
				style: {
					width: T + "%",
				},
			}),
			i.createElement("div", {
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageShader),
				style: {
					width: R + "%",
				},
			}),
			i.createElement("div", {
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageMedia),
				style: {
					width: k + "%",
				},
			}),
			i.createElement(M.m9, {
				toolTipContent: i.createElement(he, null),
				direction: "top",
				className: (0, _.A)(L.DriveUsageBar, L.DriveUsageOther),
				style: {
					width: I + "%",
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageGames),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByGames"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(y, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageDLC),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByDLC"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(p, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageWorkshop),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByWorkshop"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(h, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageUpdates),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByUpdates"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(g, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageShader),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByShaders"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(f, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageMedia),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_Media"),
						" ",
					),
					i.createElement(
						"span",
						{
							className: L.DriveUsageNumber,
						},
						" ",
						(0, C.dm)(b, 2),
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
						className: (0, _.A)(L.DriveUsageDot, L.DriveUsageOtherDot),
					}),
					i.createElement(
						"span",
						{
							className: L.DriveUsageText,
						},
						" ",
						(0, u.we)("#ContentManagement_UsedByOther"),
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
						(0, C.dm)(S, 2),
						" ",
					),
				),
			i.createElement(
				"div",
				{
					className: L.AppUsageItem,
				},
				i.createElement("span", {
					className: (0, _.A)(L.DriveUsageDot, L.DriveUsageFreeSpace),
				}),
				i.createElement(
					"span",
					{
						className: L.DriveUsageText,
					},
					" ",
					(0, u.we)("#ContentManagement_FreeSpace"),
					" ",
				),
				i.createElement(
					"span",
					{
						className: L.DriveUsageNumber,
					},
					" ",
					(0, C.dm)(d, 2),
					" ",
				),
			),
		),
	);
}
function De(e) {
	const { folder: t } = e;
	const [r, n] = i.useState(true);
	const [a, s] = i.useState(8);
	const o = i.useCallback((e) => {
		s(e);
		n(e != 5);
	}, []);
	const c = (0, d.Qn)();
	let m = (function (e) {
		const t = (0, J.yH)(e?.strFolderPath, true);
		let r = (0, ee.GetEstimatedDiskSpace)();
		const [n, a] = i.useState(0);
		SteamClient.Screenshots.GetTotalDiskSpaceUsage(e?.strFolderPath)?.then(
			(e) => a(e),
		);
		const [s, o] = i.useState(0);
		SteamClient.Screenshots.GetAllAppsLocalScreenshotsCount()?.then((e) =>
			o(e),
		);
		const l = (0, J.yH)(e?.strFolderPath, false);
		const c = (0, J.Km)().rgClipHandles?.length ?? 0;
		return i.useMemo(() => {
			let e = [];
			if (t > 0) {
				e.push({
					specialSection: 2,
					iconURL: (0, J.zZ)(0),
					nAppID: 0,
					strAppName: (0, u.we)("#ContentManagement_BR"),
					strSortAs: (0, u.we)("#ContentManagement_BR"),
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
					iconURL: (0, J.zZ)(1),
					nAppID: 0,
					strAppName: (0, u.we)("#ContentManagement_Clips"),
					strSortAs: (0, u.we)("#ContentManagement_Clips"),
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
					iconURL: (0, J.zZ)(2),
					nAppID: 0,
					strAppName: (0, u.we)("#ContentManagement_Screenshots"),
					strSortAs: (0, u.we)("#ContentManagement_Screenshots"),
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
	})(t);
	if (!t) {
		return null;
	}
	let p = t.vecApps.filter((e) => !!A.tw.GetAppOverviewByAppID(e?.nAppID));
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
					(0, u.we)("#ContentManagement_Items"),
					i.createElement(
						"div",
						{
							className: L.AppHeaderValue,
						},
						" ",
						t.vecApps.length,
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
								label: (0, u.we)("#Library_SortByAlphabetical"),
							},
							{
								data: 5,
								label: (0, u.we)("#Library_SortByLastPlayed"),
							},
							{
								data: 8,
								label: (0, u.we)("#Library_SortBySizeOnDisk"),
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
				i.createElement(l.t$, null, ({ width: e, height: r }) =>
					i.createElement(l.B8, {
						className: L.AppList,
						rowHeight: (e) =>
							(function (e, t) {
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
						width: e,
						height: r,
						rowRenderer: (e) =>
							p[e.index]?.specialSection
								? i.createElement(xe, {
										key: e.key,
										app: p[e.index],
										style: e.style,
										folder: t,
										bShowImage: !g,
									})
								: i.createElement(ze, {
										key: e.key,
										app: p[e.index],
										style: e.style,
										folder: t,
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
	const { backend: t } = e;
	if (t?.folder) {
		return i.createElement(De, {
			folder: t?.folder,
		});
	} else if (t?.drive) {
		return i.createElement(Pe, {
			backend: t,
		});
	} else {
		return null;
	}
}
function Fe(e) {
	let t = null;
	if (e.eResult === 53) {
		t = (0, u.we)("#ContentManagement_FormatError_Validate");
	} else {
		t = (0, u.we)("#ContentManagement_FormatError_Generic");
	}
	return i.createElement(m.KG, {
		strTitle: (0, u.we)("#ContentManagement_FormatError_Title").toUpperCase(),
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
		strOKButtonText: (0, u.we)("#ContentManagement_FormatError_Dismiss"),
		closeModal: e.closeModal,
	});
}
function Ge(e) {
	const { sName: t, nDriveId: r, closeModal: n } = e;
	const a = (0, V.CN)(r);
	const s = a?.model ?? t;
	const [o, l] = i.useState(s);
	const d = (0, H.R7)();
	const A = a.media_type === 4;
	const [p, g] = (0, i.useState)(A);
	const h = i.useCallback(() => {
		V._r.Adopt(r, o, p).then((e) => {
			if (e != 1) {
				(0, k.pg)(
					i.createElement(Fe, {
						eResult: e,
					}),
					d.ownerWindow ?? window,
				);
			}
		});
	}, [r, o, d, p]);
	const C = i.useCallback(() => {
		n();
		(0, k.pg)(
			i.createElement(m.o0, {
				strTitle: (0, u.we)("#ContentManagement_Format_Title"),
				strDescription: (0, u.we)("#ContentManagement_Format_Confirm"),
				onOK: h,
			}),
			d.ownerWindow ?? window,
		);
	}, [h, d, n]);
	return i.createElement(
		m.eV,
		{
			onCancel: n,
		},
		i.createElement(c.Y9, null, (0, u.we)("#ContentManagement_Format_Title")),
		i.createElement(
			c.nB,
			null,
			i.createElement(
				c.f3,
				null,
				i.createElement(c.qq, {
					label: (0, u.we)("#ContentManagement_Format_SetLabel"),
					value: o,
					maxLength: 128,
					onChange: (e) => l(e.target.value),
					bShowClearAction: true,
				}),
				i.createElement(c.RF, {
					label: (0, u.we)("#ContentManagement_Format_Validate"),
					checked: p,
					onChange: (e) => g(e),
				}),
			),
			i.createElement(
				c.wi,
				null,
				i.createElement(c.CB, {
					onOK: C,
					onCancel: n,
					focusButton: "primary",
				}),
			),
		),
	);
}
function Oe(e, t, r) {
	(0, k.pg)(
		i.createElement(Ge, {
			sName: e,
			nDriveId: t,
		}),
		r ?? window,
	);
}
function Pe(e) {
	const { backend: t } = e;
	const r = t?.drive;
	if (r) {
		if (t.folder) {
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
						(0, u.we)("#ContentManagement_FormatDrive_Message"),
						" ",
					),
					i.createElement("br", null),
					i.createElement(
						"span",
						{
							className: L.HowTo,
						},
						(0, u.PP)(
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
	const {
		rSelectedAppIDs: t,
		nSelectedAppsSize: r,
		fnClearSelectedApps: n,
	} = (0, i.useContext)(Ue);
	const a = t.length;
	const s = a > 0;
	const o = (0, p.iS)();
	const l = i.useCallback(
		(e) => {
			const r = (0, y.uX)(e);
			(0, w.Uo)(t, r, false);
			n();
		},
		[t, n],
	);
	const m = i.useCallback(
		(e) => {
			const r = (0, y.uX)(e);
			(0, B.P)(t, r);
			n();
		},
		[n, t],
	);
	if ((0, d.Qn)()) {
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
						(0, u.Yp)("#ContentManagement_SelectedApps", a, (0, C.dm)(r)),
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
						className: (0, _.A)(L.ActionButton, s && L.ActionButtonActive),
						disabled: !s,
						onClick: l,
					},
					(0, u.we)("#ContentManagement_UninstallButton"),
				),
				i.createElement(
					c.$n,
					{
						className: (0, _.A)(L.ActionButton, s && o && L.ActionButtonActive),
						disabled: !s || !o,
						onClick: m,
					},
					(0, u.we)("#ContentManagement_MoveButton"),
				),
			),
		);
	}
}
function ze(e) {
	const { app: t, style: r, folder: n, bShowImage: a } = e;
	const { rSelectedAppIDs: s, fnUpdateSelectedApps: o } = (0, i.useContext)(Ue);
	const l = (0, d.Qn)();
	const m = (0, q.br)();
	const g = (0, p.iS)();
	let h = {
		[I.pR.SECONDARY]: (0, u.we)("#ContentManagement_UninstallButton"),
		[I.pR.OK]: null,
	};
	if (g) {
		h[I.pR.OPTIONS] = (0, u.we)("#ContentManagement_MoveApps_Title");
	}
	const M = (0, A.Co)(t?.nAppID);
	const T = i.useCallback(
		(e) => {
			if (!l) {
				return;
			}
			const r = (0, y.uX)(e);
			switch (e.detail.button) {
				case I.pR.SECONDARY:
					(0, w.Uo)([t?.nAppID], r, false);
					e.stopPropagation();
					break;
				case I.pR.OPTIONS:
					if (!g) {
						break;
					}
					(0, B.P)([t?.nAppID], r);
					e.stopPropagation();
			}
		},
		[l, t?.nAppID, g],
	);
	const R = i.useCallback(
		(e) => {
			o(e, t?.nAppID, t?.nUsedSize);
		},
		[t, o],
	);
	const k = i.useCallback(
		(e) => {
			const r = s.includes(t?.nAppID);
			R(!r);
			e.stopPropagation();
		},
		[t, s, R],
	);
	const D = i.useCallback(
		(e) => {
			m.AppProperties(t?.nAppID, S.ho.Dlc);
			e.stopPropagation();
		},
		[t, m],
	);
	const N = i.useCallback(
		(e) => {
			m.AppProperties(t?.nAppID, S.ho.Workshop);
			e.stopPropagation();
		},
		[t, m],
	);
	const F = i.useCallback(
		(e) => {
			m.AppProperties(t?.nAppID, S.ho.LocalFiles);
			e.stopPropagation();
		},
		[t, m],
	);
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			"data-appid": t?.nAppID,
			className: L.AppBody,
			style: r,
			actionDescriptionMap: h,
			onClick: k,
			onButtonDown: T,
		},
		M &&
			a &&
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
					t?.strAppName,
					" ",
				),
				i.createElement(
					"div",
					{
						className: L.AppInfo,
					},
					t?.nDLCSize > 0 &&
						i.createElement(
							"div",
							{
								className: (0, _.A)(L.AppInfoItem, L.AppUsageLink),
								onClick: D,
							},
							i.createElement(E.DLC, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, u.we)("#ContentManagement_UsedByDLC"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								(0, C.dm)(t?.nDLCSize, 2),
								" ",
							),
						),
					t?.nWorkshopSize > 0 &&
						i.createElement(
							"div",
							{
								className: (0, _.A)(L.AppInfoItem, L.AppUsageLink),
								onClick: N,
							},
							i.createElement(E.Workshop, null),
							i.createElement(
								"span",
								{
									className: L.AppUsageText,
								},
								(0, u.we)("#ContentManagement_UsedByWorkshop"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								(0, C.dm)(t?.nWorkshopSize, 2),
								" ",
							),
						),
					t?.nShaderSize > 1048576 &&
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
								(0, u.we)("#ContentManagement_UsedByShaders"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								(0, C.dm)(t?.nShaderSize, 2),
								" ",
							),
						),
					t?.rtLastPlayed != 0 &&
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
								(0, u.we)("#ContentManagement_LastPlayed"),
							),
							i.createElement(
								"div",
								{
									className: L.AppUsageValue,
								},
								" ",
								(0, b.$z)(t?.rtLastPlayed),
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
						(0, C.dm)(t?.nUsedSize, 2),
					),
					!l &&
						i.createElement(
							"div",
							{
								className: L.AppSelected,
							},
							i.createElement(c.Yh, {
								disabled: !n.bIsMounted,
								checked: s.includes(t?.nAppID),
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
					(0, u.we)("#DisplayStatus_Uninstalling"),
					" ",
				),
		),
	);
}
function xe(e) {
	const { app: t, style: r, bShowImage: n } = e;
	const a = (0, d.Qn)();
	const s = (0, q.br)();
	let o = {
		[I.pR.SECONDARY]:
			t.specialSection == 2 ? (0, u.we)("#ContentManagement_Delete") : null,
		[I.pR.OK]: (0, u.we)(
			t.specialSection == 2
				? "#ContentManagement_GoToSettings"
				: "#ContentManagement_Browse",
		),
	};
	const { rgApps: l } = (0, J.z)();
	const c = (0, te.W6)();
	const m = i.useCallback(
		(e) => {
			if (a) {
				switch (e.detail.button) {
					case I.pR.OK:
						if (t.specialSection == 2) {
							c.push($.BV.Settings.GameRecording());
						} else {
							c.push($.BV.Media.Grid());
						}
						e.stopPropagation();
						break;
					case I.pR.SECONDARY:
						if (t.specialSection == 2) {
							(0, J.f5)(l.map((e) => e.game_id));
						}
						e.stopPropagation();
				}
			}
		},
		[a, c, t.specialSection, l],
	);
	const A = () => {
		let e;
		switch (t.specialSection) {
			case 2:
				e = "recording";
				break;
			case 3:
				e = "clip";
				break;
			case 4:
				e = "screenshot";
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
		t.specialSection == 2 ? () => c.replace($.BV.Settings.GameRecording()) : A;
	return i.createElement(
		v.Z,
		{
			noFocusRing: true,
			focusable: true,
			"data-appid": t?.nAppID,
			className: L.AppBody,
			style: r,
			actionDescriptionMap: o,
			onButtonDown: m,
		},
		n &&
			i.createElement(
				"div",
				{
					className: (0, _.A)(L.AppBodyPortrait, L.GRPortrait),
				},
				i.createElement("img", {
					className: L.LandscapeImageContainer,
					src: t.iconURL,
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
					t?.strAppName,
					" ",
				),
				i.createElement(
					"div",
					{
						className: L.AppInfo,
					},
					t.nDLCSize > 0 &&
						i.createElement(
							"div",
							{
								className: (0, _.A)(L.AppInfoItem, L.AppUsageLink),
								onClick: () => c.replace($.BV.Settings.GameRecording()),
							},
							i.createElement(E.Video, null),
							i.createElement(
								"span",
								{
									className: L.SpecialSectionText,
								},
								(0, u.we)("#ContentManagement_TotalPossibleRecording"),
							),
							i.createElement(
								"span",
								{
									className: L.AppUsageValue,
								},
								" ",
								(0, C.dm)(t.nDLCSize, {
									bUseBinary1K: false,
								}),
								" ",
							),
						),
					t.nAppSize > 0 &&
						i.createElement(
							"div",
							{
								className: (0, _.A)(L.AppInfoItem, L.AppUsageLink),
								onClick: A,
							},
							i.createElement(E.SdCard, null),
							i.createElement(
								"span",
								{
									className: L.SpecialSectionText,
								},
								(0, u.we)(
									t.specialSection == 4
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
								t.nAppSize,
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
					(0, C.dm)(t?.nUsedSize, 2),
				),
				!a &&
					i.createElement("div", {
						className: L.NoCheckboxSpacer,
					}),
			),
		),
	);
}
const Ue = i.createContext(undefined);
function We(e) {
	const { children: t } = e;
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
		Ue.Provider,
		{
			value: d,
		},
		t,
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
	const t = (0, re.l9)(7);
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
const je = i.memo(function (e) {
	const { bInPagedSettingsDialog: t } = e;
	const r = Ie();
	const [n, a] = ve();
	const s = (function () {
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
			className: (0, _.A)(
				L.NoScroll,
				L.ContentManagement,
				t && L.InPagedSettings,
			),
		},
		!t &&
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
					(0, u.we)("#ContentManagement_Title"),
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
