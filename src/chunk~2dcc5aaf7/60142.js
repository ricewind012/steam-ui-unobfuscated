var n;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require("./50532.js");
var l = o;
var c = require("./10606.js");
var m = require("./13869.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./23042.js");
var h = g;
var C = require(/*webcrack:missing*/ "./26853.js");
var _ = require(/*webcrack:missing*/ "./89193.js");
var f = require("./12750.js");
var b = require(/*webcrack:missing*/ "./69164.js");
class y {
	constructor() {
		(0, _.Gn)(this);
	}
	strCaption = "";
	ePrivacy = 8;
	bSpoiler = false;
}
(0, i.Cg)([_.sH], y.prototype, "strCaption", undefined);
(0, i.Cg)([_.sH], y.prototype, "ePrivacy", undefined);
(0, i.Cg)([_.sH], y.prototype, "bSpoiler", undefined);
(function (e) {
	e[(e.Invalid = 0)] = "Invalid";
	e[(e.Confirmation = 1)] = "Confirmation";
	e[(e.Uploading = 2)] = "Uploading";
	e[(e.Error = 3)] = "Error";
})((n ||= {}));
class S extends a.Component {
	state = {
		eStep: n.Confirmation,
		strError: "",
	};
	m_metadata = new y();
	async OnUploadConfirmed() {
		if (this.state.eStep != n.Confirmation) {
			return;
		}
		this.setState({
			eStep: n.Uploading,
		});
		let e = await (async function (e, t) {
			await SteamClient.Apps.SetLocalScreenshotCaption(
				e.strGameID,
				e.hHandle,
				t.strCaption,
			);
			await SteamClient.Apps.SetLocalScreenshotSpoiler(
				e.strGameID,
				e.hHandle,
				t.bSpoiler,
			);
			let r = await SteamClient.Screenshots.UploadLocalScreenshot(
				e.strGameID,
				e.hHandle,
				t.ePrivacy,
			);
			let n = r ? "" : (0, u.we)("#ShareUploadScreenshot_UnexpectedError");
			if (r) {
				f.yX.FetchLatestActivity(e.nAppID, true);
			}
			return {
				bSuccess: r,
				strError: n,
			};
		})(this.props.screenshot, this.m_metadata);
		if (e.bSuccess) {
			this.props.onCancel();
		} else {
			this.setState({
				eStep: n.Error,
				strError: e.strError,
			});
		}
	}
	OnCancel() {
		if (this.state.eStep != n.Uploading && this.props.onCancel) {
			this.props.onCancel();
		}
	}
	render() {
		let e = this.props.screenshot;
		let t = this.state.eStep;
		return a.createElement(
			"div",
			{
				className: h.ShareScreenshotDialog,
			},
			t == n.Confirmation &&
				a.createElement(w, {
					screenshot: e,
					metadata: this.m_metadata,
					onOK: this.OnUploadConfirmed,
					onCancel: this.OnCancel,
				}),
			t == n.Uploading &&
				a.createElement(v, {
					screenshot: e,
					onCancel: this.OnCancel,
				}),
			t == n.Error &&
				a.createElement(I, {
					error: this.state.strError,
					onCancel: this.OnCancel,
				}),
		);
	}
}
(0, i.Cg)([d.oI], S.prototype, "OnUploadConfirmed", null);
(0, i.Cg)([d.oI], S.prototype, "OnCancel", null);
let w = class extends a.Component {
	constructor(e) {
		super(e);
		(0, _.Gn)(this);
	}
	m_preUploadDetails = undefined;
	m_refTextArea = a.createRef();
	componentDidMount() {
		this.UpdateDetails();
	}
	async UpdateDetails() {
		let e = this.props.screenshot;
		try {
			let t = await SteamClient.Apps.GetDetailsForScreenshotUpload(
				e.strGameID,
				e.hHandle,
			);
			this.m_preUploadDetails = t;
		} catch (e) {
			console.log("Getting upload screenshot details failed", e);
		}
	}
	OnCaptionChange(e) {
		this.props.metadata.strCaption = e.currentTarget.value;
	}
	OnPrivacyChange(e) {
		let t = parseInt(e.currentTarget.value);
		this.props.metadata.ePrivacy = t;
	}
	OnSpoilerChange(e) {
		this.props.metadata.bSpoiler = e;
	}
	render() {
		let e = this.props.metadata;
		let t = e.strCaption;
		let r = e.ePrivacy;
		let n = e.bSpoiler;
		let i = "";
		if (this.m_preUploadDetails) {
			let e = this.m_preUploadDetails;
			i = (0, u.we)(
				"#ShareUploadScreenshot_CloudUsage",
				e.strSizeOnDisk,
				e.strCloudAvailable,
				e.strCloudTotal,
			);
		}
		return a.createElement(
			a.Fragment,
			null,
			a.createElement(
				s.a3,
				null,
				a.createElement(
					"div",
					null,
					(0, u.we)("#ShareUploadScreenshot_Description"),
				),
				a.createElement(
					"div",
					{
						className: h.CaptionHeader,
					},
					(0, u.we)("#ShareUploadScreenshot_CaptionHeader"),
				),
				a.createElement(
					b.Z,
					{
						focusable: true,
						onActivate: () => {
							if (this.m_refTextArea) {
								this.m_refTextArea.current?.focus();
							}
						},
					},
					a.createElement(s.Cl, {
						ref: this.m_refTextArea,
						className: h.CaptionTextArea,
						nMinHeight: 40,
						value: t,
						onChange: this.OnCaptionChange,
						placeholder: (0, u.we)("#ShareUploadScreenshot_AddCaption"),
						autoFocus: true,
					}),
				),
				a.createElement(
					s.JU,
					{
						className: h.VisibilityHeader,
					},
					(0, u.we)("Visibility"),
				),
				a.createElement(
					s.Xp,
					{
						className: h.RadioButtonGroup,
					},
					a.createElement(B, {
						text: (0, u.we)("#Privacy_Public"),
						value: 8,
						current: r,
						onClick: this.OnPrivacyChange,
					}),
					a.createElement(B, {
						text: (0, u.we)("#Privacy_FriendsOnly"),
						value: 4,
						current: r,
						onClick: this.OnPrivacyChange,
					}),
					a.createElement(B, {
						text: (0, u.we)("#Privacy_Private"),
						value: 2,
						current: r,
						onClick: this.OnPrivacyChange,
					}),
				),
				a.createElement(s.RF, {
					className: h.Spoiler,
					label: (0, u.we)("#ShareUploadScreenshot_TagSpoiler"),
					onChange: this.OnSpoilerChange,
					checked: n,
				}),
				a.createElement(
					"div",
					{
						className: h.CloudStorageMessage,
					},
					i,
					"\xA0",
				),
			),
			a.createElement(
				s.wi,
				null,
				a.createElement(s.CB, {
					onOK: this.props.onOK,
					strOKText: (0, u.we)("#Generic_Upload"),
					onCancel: this.props.onCancel,
				}),
			),
		);
	}
};
function B(e) {
	let t = e.value == e.current ? "Primary" : "";
	return a.createElement(
		s.$n,
		{
			className: t,
			value: e.value,
			onClick: e.onClick,
		},
		e.text,
	);
}
(0, i.Cg)([_.sH], w.prototype, "m_preUploadDetails", undefined);
(0, i.Cg)([d.oI], w.prototype, "OnCaptionChange", null);
(0, i.Cg)([d.oI], w.prototype, "OnPrivacyChange", null);
(0, i.Cg)([d.oI], w.prototype, "OnSpoilerChange", null);
w = (0, i.Cg)([A.PA], w);
let v = class extends a.Component {
	render() {
		let e = (0, u.we)("#ShareUploadScreenshot_Uploading");
		return a.createElement(
			a.Fragment,
			null,
			a.createElement(
				s.a3,
				{
					className: h.MinDialogSize,
				},
				a.createElement(
					"div",
					{
						className: h.UploadingText,
					},
					e,
				),
			),
			a.createElement(
				s.wi,
				null,
				a.createElement(C.t, {
					size: "medium",
					position: "center",
				}),
			),
		);
	}
};
function I(e) {
	let t = e.error;
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(s.a3, null, a.createElement("div", null, t)),
		a.createElement(
			s.wi,
			null,
			a.createElement(
				s.jn,
				{
					onClick: e.onCancel,
				},
				(0, u.we)("#Button_Close"),
			),
		),
	);
}
v = (0, i.Cg)([A.PA], v);
var E;
var M = require("./35488.js");
export function li(e) {
	let { className: t, ...r } = e;
	let n = (0, p.A)(l.ShareIcon, t);
	return a.createElement(M.Share, {
		className: n,
		...r,
	});
}
export function wD(e) {
	let { className: t, ...r } = e;
	let n = (0, p.A)(l.ShareButton, t);
	return a.createElement(
		"div",
		{
			className: n,
			...r,
		},
		a.createElement(li, null),
		a.createElement("span", null, (0, u.we)("#Generic_Share")),
	);
}
export function bK(e, t) {
	(0, m.pg)(
		a.createElement(D, {
			screenshot: e,
		}),
		t,
		{
			strTitle: D.Title(),
		},
	);
}
let D = (E = class extends a.Component {
	static Title() {
		return (0, u.we)("#ShareDialog_Title");
	}
	OnCancel() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	render() {
		let e = this.props.screenshot;
		return a.createElement(
			c.eV,
			{
				onOK: null,
				onCancel: this.OnCancel,
			},
			a.createElement(
				"div",
				{
					className: l.UninstallDialog,
				},
				a.createElement(s.Y9, null, E.Title()),
				a.createElement(
					s.nB,
					null,
					a.createElement(S, {
						screenshot: e,
						onCancel: this.OnCancel,
					}),
				),
			),
		);
	}
});
(0, i.Cg)([d.oI], D.prototype, "OnCancel", null);
D = E = (0, i.Cg)([A.PA], D);
