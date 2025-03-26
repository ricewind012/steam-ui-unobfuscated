var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./69976.js");
var s = a;
import { Localize } from "../../actual_src/utils/localization.js";
var l = require(/*webcrack:missing*/ "./42318.js");
var c = require("./78110.js");
var m = require(/*webcrack:missing*/ "./26853.js");
var u = require("./13661.js");
var d = require(/*webcrack:missing*/ "./11131.js");
var A = require("./10606.js");
var p = require("./13869.js");
var g = require("./72655.js");
var h = require(/*webcrack:missing*/ "./69164.js");
var C = require(/*webcrack:missing*/ "./72476.js");
function _(e) {
	const { sReport: t, bShowThrobber: r } = e;
	if (r) {
		return n.createElement(m.t, {
			size: "xlarge",
		});
	} else {
		return n.createElement(
			g.f7,
			{
				className: s.TextContainer,
				focusable: true,
				autoFocus: false,
			},
			n.createElement(
				h.Z,
				{
					focusable: true,
					className: s.Text,
					autoFocus: false,
				},
				t,
			),
		);
	}
}
function f(e) {
	const { fnSubmit: t, closeModal: r } = e;
	const i = n.useCallback(() => {
		t();
		if (r) {
			r();
		}
	}, [t, r]);
	return n.createElement(A.o0, {
		strTitle: Localize("#Settings_SystemReport_SubmitRequest_Title"),
		strDescription: Localize("#Settings_SystemReport_SubmitRequest_Desc"),
		strCancelButtonText: Localize(
			"#Settings_SystemReport_SubmitRequest_Cancel",
		),
		strOKButtonText: Localize("#Settings_SystemReport_SubmitRequest_OK"),
		onOK: i,
		onCancel: r,
	});
}
function b(e) {
	const { strName: t, onClose: r } = e;
	const i = (0, d.R7)().ownerWindow;
	const a = (0, u.cp)();
	const l = a.bSubmitting;
	const c = a.sText != null;
	const m = (0, C.Qn)();
	const g = n.useCallback(async () => {
		if ((await u.Ty.Submit(a.sReportId)) != 1) {
			await (0, p.pg)(
				n.createElement(A.KG, {
					strTitle: Localize("#Settings_SystemReport_SubmitFail_Title"),
					strDescription: Localize("#Settings_SystemReport_SubmitFail_Desc"),
					onCancel: () => u.Ty.Hide(),
				}),
				i,
			);
		} else {
			await (0, p.pg)(
				n.createElement(A.o0, {
					strTitle: Localize("#Settings_SystemReport_SubmitOK_Title"),
					strDescription: Localize("#Settings_SystemReport_SubmitOK_Desc"),
					strCancelButtonText: Localize(
						"#Settings_SystemReport_SubmitOK_Cancel",
					),
					strOKButtonText: Localize("#Settings_SystemReport_SubmitOK_OK"),
					onOK: () => u.Ty.Hide(),
				}),
				i,
			);
		}
	}, [i, a.sReportId]);
	const h = n.useCallback(() => {
		(0, p.pg)(
			n.createElement(f, {
				fnSubmit: g,
			}),
			i,
		);
	}, [i, g]);
	const b = n.useCallback(() => {
		i.navigator.clipboard.writeText(a.sText);
	}, [i, a]);
	const y = n.useCallback(async () => {
		if ((await u.Ty.SaveToDesktop(a.sReportId)) != 1) {
			await (0, p.pg)(
				n.createElement(A.KG, {
					strTitle: Localize("#Settings_SystemReport_SaveFail_Title"),
					strDescription: Localize("#Settings_SystemReport_SaveFail_Desc"),
					onCancel: () => u.Ty.Hide(),
				}),
				i,
			);
		} else {
			await (0, p.pg)(
				n.createElement(A.o0, {
					strTitle: Localize("#Settings_SystemReport_SaveOK_Title"),
					strDescription: Localize("#Settings_SystemReport_SaveOK_Desc"),
					strCancelButtonText: Localize("#Settings_SystemReport_SaveOK_Cancel"),
					strOKButtonText: Localize("#Settings_SystemReport_SaveOK_OK"),
					onOK: () => u.Ty.Hide(),
				}),
				i,
			);
		}
	}, [i, a]);
	const S = m
		? Localize("#Settings_SystemReport_Save")
		: Localize("#Settings_SystemReport_Copy");
	const w = m ? y : b;
	let B = Localize("#Settings_SystemReport_Desc");
	if (l) {
		B = Localize("#Settings_SystemReport_Uploading");
	} else if (!c) {
		B = Localize("#Settings_SystemReport_PleaseWait");
	}
	const v = !c || l;
	return n.createElement(
		A.o0,
		{
			className: s.SystemReportDialog,
			strTitle: t,
			strDescription: B,
			onOK: h,
			bOKDisabled: v,
			strOKButtonText: Localize("#Settings_SystemReport_Submit"),
			onCancel: r,
			strCancelButtonText: Localize("#Settings_SystemReport_Close"),
			bMiddleDisabled: v,
			onMiddleButton: w,
			strMiddleButtonText: S,
		},
		n.createElement(
			"div",
			{
				className: s.SystemReportContainer,
			},
			n.createElement(_, {
				sReport: a.sText,
				bShowThrobber: v,
			}),
		),
	);
}
export const wR = (0, l.Nr)(function () {
	const [e, t] = (0, u.$8)();
	const [r, i] = n.useState();
	const a = Localize("#Settings_SystemReport_Title");
	if (e) {
		return n.createElement(
			c.w,
			{
				strTitle: a,
				onDismiss: t,
				popupWidth: 900,
				popupHeight: 800,
				minWidth: 600,
				minHeight: 300,
				resizable: true,
				refPopup: i,
				modal: false,
			},
			n.createElement(b, {
				strName: a,
				onClose: t,
			}),
		);
	} else {
		return null;
	}
});
export function eH() {
	if ((0, u.Pb)()) {
		return n.createElement(
			i.xh,
			{
				label: Localize("#Settings_SystemReport_Title"),
				onClick: () => u.Ty.Show(),
			},
			Localize("#Settings_SystemReport_Start"),
		);
	} else {
		return null;
	}
}
