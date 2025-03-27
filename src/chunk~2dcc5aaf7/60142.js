import { Localize } from "../../actual_src/utils/localization.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./64608.js";
import o from "./50532.js";
import c from "./10606.js";
import { pg } from "./13869.js";
import d from "./52451.js";
import A from "./41230.js";
import { A as A_1 } from "./90765.js";
import g from "./23042.js";
import C from "./26853.js";
import _, { Gn } from "./89193.js";
import f from "./12750.js";
import b from "./69164.js";
import M from "./35488.js";
let n;
const l = o;
const h = g;
class y {
	constructor() {
		Gn(this);
	}
	strCaption = "";
	ePrivacy = 8;
	bSpoiler = false;
}
Cg([_.sH], y.prototype, "strCaption", undefined);
Cg([_.sH], y.prototype, "ePrivacy", undefined);
Cg([_.sH], y.prototype, "bSpoiler", undefined);
((e) => {
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
		let e = await (async (e, t) => {
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
			let n = r ? "" : (0, Localize)("#ShareUploadScreenshot_UnexpectedError");
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
		return (
			<div className={h.ShareScreenshotDialog}>
				{t == n.Confirmation && (
					<W
						screenshot={e}
						metadata={this.m_metadata}
						onOK={this.OnUploadConfirmed}
						onCancel={this.OnCancel}
					/>
				)}
				{t == n.Uploading && <V screenshot={e} onCancel={this.OnCancel} />}
				{t == n.Error && (
					<I error={this.state.strError} onCancel={this.OnCancel} />
				)}
			</div>
		);
	}
}
Cg([d.oI], S.prototype, "OnUploadConfirmed", null);
Cg([d.oI], S.prototype, "OnCancel", null);
let W = class extends a.Component {
	constructor(e) {
		super(e);
		Gn(this);
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

		let { strCaption, ePrivacy, bSpoiler } = e;

		let i = "";
		if (this.m_preUploadDetails) {
			let e = this.m_preUploadDetails;
			i = (0, Localize)(
				"#ShareUploadScreenshot_CloudUsage",
				e.strSizeOnDisk,
				e.strCloudAvailable,
				e.strCloudTotal,
			);
		}
		return (
			<>
				<s.a3>
					<div>{(0, Localize)("#ShareUploadScreenshot_Description")}</div>
					<div className={h.CaptionHeader}>
						{(0, Localize)("#ShareUploadScreenshot_CaptionHeader")}
					</div>
					<b.Z
						focusable
						onActivate={() => {
							if (this.m_refTextArea) {
								this.m_refTextArea.current?.focus();
							}
						}}
					>
						<s.Cl
							ref={this.m_refTextArea}
							className={h.CaptionTextArea}
							nMinHeight={40}
							value={strCaption}
							onChange={this.OnCaptionChange}
							placeholder={(0, Localize)("#ShareUploadScreenshot_AddCaption")}
							autoFocus
						/>
					</b.Z>
					<s.JU className={h.VisibilityHeader}>
						{(0, Localize)("Visibility")}
					</s.JU>
					<s.Xp className={h.RadioButtonGroup}>
						<B
							text={(0, Localize)("#Privacy_Public")}
							value={8}
							current={ePrivacy}
							onClick={this.OnPrivacyChange}
						/>
						<B
							text={(0, Localize)("#Privacy_FriendsOnly")}
							value={4}
							current={ePrivacy}
							onClick={this.OnPrivacyChange}
						/>
						<B
							text={(0, Localize)("#Privacy_Private")}
							value={2}
							current={ePrivacy}
							onClick={this.OnPrivacyChange}
						/>
					</s.Xp>
					<s.RF
						className={h.Spoiler}
						label={(0, Localize)("#ShareUploadScreenshot_TagSpoiler")}
						onChange={this.OnSpoilerChange}
						checked={bSpoiler}
					/>
					<div className={h.CloudStorageMessage}>
						{i}
						{"\xA0"}
					</div>
				</s.a3>
				<s.wi>
					<s.CB
						onOK={this.props.onOK}
						strOKText={(0, Localize)("#Generic_Upload")}
						onCancel={this.props.onCancel}
					/>
				</s.wi>
			</>
		);
	}
};
function B(e) {
	let t = e.value == e.current ? "Primary" : "";
	return (
		<s.$n className={t} value={e.value} onClick={e.onClick}>
			{e.text}
		</s.$n>
	);
}
Cg([_.sH], W.prototype, "m_preUploadDetails", undefined);
Cg([d.oI], W.prototype, "OnCaptionChange", null);
Cg([d.oI], W.prototype, "OnPrivacyChange", null);
Cg([d.oI], W.prototype, "OnSpoilerChange", null);
W = Cg([A.PA], W);
let V = class extends a.Component {
	render() {
		let e = (0, Localize)("#ShareUploadScreenshot_Uploading");
		return (
			<>
				<s.a3 className={h.MinDialogSize}>
					<div className={h.UploadingText}>{e}</div>
				</s.a3>
				<s.wi>
					<C.t size="medium" position="center" />
				</s.wi>
			</>
		);
	}
};
function I(e) {
	let e_error = e.error;
	return (
		<>
			<s.a3>
				<div>{e_error}</div>
			</s.a3>
			<s.wi>
				<s.jn onClick={e.onCancel}>{(0, Localize)("#Button_Close")}</s.jn>
			</s.wi>
		</>
	);
}
V = Cg([A.PA], V);
let E;
export function Li(e) {
	let { className, ...r } = e;
	let n = A_1(l.ShareIcon, className);
	return <M.Share className={n} {...r} />;
}
export function wD(e) {
	let { className, ...r } = e;
	let n = A_1(l.ShareButton, className);
	return (
		<div className={n} {...r}>
			<Li />
			<span>{(0, Localize)("#Generic_Share")}</span>
		</div>
	);
}
export function bK(e, t) {
	pg(<D screenshot={e} />, t, {
		strTitle: D.Title(),
	});
}
let D = (E = class extends a.Component {
	static Title() {
		return (0, Localize)("#ShareDialog_Title");
	}
	OnCancel() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	render() {
		let e = this.props.screenshot;
		return (
			<c.eV onOK={null} onCancel={this.OnCancel}>
				<div className={l.UninstallDialog}>
					<s.Y9>{E.Title()}</s.Y9>
					<s.nB>
						<S screenshot={e} onCancel={this.OnCancel} />
					</s.nB>
				</div>
			</c.eV>
		);
	}
});
Cg([d.oI], D.prototype, "OnCancel", null);
D = E = Cg([A.PA], D);
