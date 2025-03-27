import { Localize } from "../../actual_src/utils/localization.js";
import { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./64608.js";
import o from "./3867.js";
import c from "./10606.js";
import { pg } from "./13869.js";
import d from "./52451.js";
import "./26853.js";
import A from "./96593.js";
import p from "./41230.js";
let n;
const l = o;
export function Uo(e, t, r) {
	pg(<H rgApps={e} bConfirmPassword={r} />, t, {
		strTitle: H.Title(),
		bNeverPopOut: true,
	});
}
let H = (n = class extends a.Component {
	constructor(e) {
		super(e);
	}
	static Title() {
		return (0, Localize)("#UninstallDialog_Title");
	}
	async OnUninstallConfirmed() {
		SteamClient.Installs.OpenUninstallWizard(this.props.rgApps, true);
		this.props.closeModal();
	}
	render() {
		return (
			<c.eV onOK={null} closeModal={this.props.closeModal}>
				<div className={l.UninstallDialog}>
					<s.Y9 className={l.ModalHeader}>{n.Title()}</s.Y9>
					<s.nB>
						<C
							rgApps={this.props.rgApps}
							onCancel={this.props.closeModal}
							onOk={this.OnUninstallConfirmed}
						/>
					</s.nB>
				</div>
			</c.eV>
		);
	}
});
function C(e) {
	let t = "";
	if (e.rgApps.length == 1) {
		let r = e.rgApps[0];
		let n = A.tw.GetAppOverviewByAppID(r);
		if (n) {
			t =
				n.app_type == 8
					? (0, Localize)("#UninstallDialog_Confirmation_Demo", n.display_name)
					: (0, Localize)(
							"#UninstallDialog_Confirmation_Single",
							n.display_name,
						);
		}
	}
	t ||= (0, Localize)("#UninstallDialog_Confirmation_Multiple");
	return (
		<>
			<s.a3>
				<div>{t}</div>
			</s.a3>
			<s.wi>
				<s.CB
					focusButton="primary"
					onOK={e.onOk}
					onCancel={e.onCancel}
					strOKText={(0, Localize)("#UninstallDialog_Uninstall")}
				/>
			</s.wi>
		</>
	);
}
export function XK(e, t) {
	let r = A.tw.GetAppOverviewByAppID(e);
	let n = (0, Localize)(`#Steam_AppUpdateError_${t}`);
	pg(
		<c.eV onOK={null}>
			<div className={l.UninstallDialog}>
				<s.Y9 className={l.ModalHeader}>
					{(0, Localize)("#UninstallDialog_Title")}
				</s.Y9>
				<s.nB>
					<s.a3>
						<div>
							{(0, Localize)("#UninstallDialog_ErrorMessage", r.display_name)}
						</div>
						<div className={l.UninstallError}>{n}</div>
					</s.a3>
					<s.wi>
						<s.jn>{(0, Localize)("#Button_Close")}</s.jn>
					</s.wi>
				</s.nB>
			</div>
		</c.eV>,
		window,
		{
			strTitle: (0, Localize)("#UninstallDialog_Title"),
		},
	);
}
Cg([d.oI], H.prototype, "OnUninstallConfirmed", null);
H = n = Cg([p.PA], H);
