import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./69976.js";
import l, { Nr } from "./42318.js";
import c from "./78110.js";
import m from "./26853.js";
import u, { cp, $8, Pb } from "./13661.js";
import { R7 } from "./11131.js";
import A from "./10606.js";
import { pg } from "./13869.js";
import g from "./72655.js";
import h from "./69164.js";
import { Qn } from "./72476.js";
const s = a;
function _(e) {
	const { sReport, bShowThrobber } = e;
	if (bShowThrobber) {
		return <m.t size="xlarge" />;
	} else {
		return (
			<g.f7 className={s.TextContainer} focusable autoFocus={false}>
				<h.Z focusable className={s.Text} autoFocus={false}>
					{sReport}
				</h.Z>
			</g.f7>
		);
	}
}
function F(e) {
	const { fnSubmit, closeModal } = e;
	const i = n.useCallback(() => {
		fnSubmit();
		if (closeModal) {
			closeModal();
		}
	}, [fnSubmit, closeModal]);
	return (
		<A.o0
			strTitle={Localize("#Settings_SystemReport_SubmitRequest_Title")}
			strDescription={Localize("#Settings_SystemReport_SubmitRequest_Desc")}
			strCancelButtonText={Localize(
				"#Settings_SystemReport_SubmitRequest_Cancel",
			)}
			strOKButtonText={Localize("#Settings_SystemReport_SubmitRequest_OK")}
			onOK={i}
			onCancel={closeModal}
		/>
	);
}
function B(e) {
	const { strName, onClose } = e;
	const i = R7().ownerWindow;
	const a = cp();
	const a_bSubmitting = a.bSubmitting;
	const c = a.sText != null;
	const m = Qn();
	const g = n.useCallback(async () => {
		if ((await u.Ty.Submit(a.sReportId)) != 1) {
			await pg(
				<A.KG
					strTitle={Localize("#Settings_SystemReport_SubmitFail_Title")}
					strDescription={Localize("#Settings_SystemReport_SubmitFail_Desc")}
					onCancel={() => u.Ty.Hide()}
				/>,
				i,
			);
		} else {
			await pg(
				<A.o0
					strTitle={Localize("#Settings_SystemReport_SubmitOK_Title")}
					strDescription={Localize("#Settings_SystemReport_SubmitOK_Desc")}
					strCancelButtonText={Localize(
						"#Settings_SystemReport_SubmitOK_Cancel",
					)}
					strOKButtonText={Localize("#Settings_SystemReport_SubmitOK_OK")}
					onOK={() => u.Ty.Hide()}
				/>,
				i,
			);
		}
	}, [i, a.sReportId]);
	const h = n.useCallback(() => {
		pg(<F fnSubmit={g} />, i);
	}, [i, g]);
	const b = n.useCallback(() => {
		i.navigator.clipboard.writeText(a.sText);
	}, [i, a]);
	const y = n.useCallback(async () => {
		if ((await u.Ty.SaveToDesktop(a.sReportId)) != 1) {
			await pg(
				<A.KG
					strTitle={Localize("#Settings_SystemReport_SaveFail_Title")}
					strDescription={Localize("#Settings_SystemReport_SaveFail_Desc")}
					onCancel={() => u.Ty.Hide()}
				/>,
				i,
			);
		} else {
			await pg(
				<A.o0
					strTitle={Localize("#Settings_SystemReport_SaveOK_Title")}
					strDescription={Localize("#Settings_SystemReport_SaveOK_Desc")}
					strCancelButtonText={Localize("#Settings_SystemReport_SaveOK_Cancel")}
					strOKButtonText={Localize("#Settings_SystemReport_SaveOK_OK")}
					onOK={() => u.Ty.Hide()}
				/>,
				i,
			);
		}
	}, [i, a]);
	const S = m
		? Localize("#Settings_SystemReport_Save")
		: Localize("#Settings_SystemReport_Copy");
	const w = m ? y : b;
	let B = Localize("#Settings_SystemReport_Desc");
	if (a_bSubmitting) {
		B = Localize("#Settings_SystemReport_Uploading");
	} else if (!c) {
		B = Localize("#Settings_SystemReport_PleaseWait");
	}
	const v = !c || a_bSubmitting;
	return (
		<A.o0
			className={s.SystemReportDialog}
			strTitle={strName}
			strDescription={B}
			onOK={h}
			bOKDisabled={v}
			strOKButtonText={Localize("#Settings_SystemReport_Submit")}
			onCancel={onClose}
			strCancelButtonText={Localize("#Settings_SystemReport_Close")}
			bMiddleDisabled={v}
			onMiddleButton={w}
			strMiddleButtonText={S}
		>
			<div className={s.SystemReportContainer}>
				<_ sReport={a.sText} bShowThrobber={v} />
			</div>
		</A.o0>
	);
}
export const wR = Nr(() => {
	const [e, t] = $8();
	const [r, setR] = n.useState();
	const a = Localize("#Settings_SystemReport_Title");
	if (e) {
		return (
			<c.w
				strTitle={a}
				onDismiss={t}
				popupWidth={900}
				popupHeight={800}
				minWidth={600}
				minHeight={300}
				resizable
				refPopup={setR}
				modal={false}
			>
				<B strName={a} onClose={t} />
			</c.w>
		);
	} else {
		return null;
	}
});
export function eH() {
	if (Pb()) {
		return (
			<i.xh
				label={Localize("#Settings_SystemReport_Title")}
				onClick={() => u.Ty.Show()}
			>
				{Localize("#Settings_SystemReport_Start")}
			</i.xh>
		);
	} else {
		return null;
	}
}
